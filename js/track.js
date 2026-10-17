/* =========================================================
   Yumerty — mouchard client (anonyme) vers le backend de statistiques.

   Pourquoi ce fichier existe : jusqu'au 16/09/2026 le site était servi par un Worker
   Cloudflare qui comptait les visites CÔTÉ SERVEUR et injectait lui-même window.__ymTrack.
   Le site est depuis sur GitHub Pages — qui ne sert que des fichiers statiques — donc plus
   aucun comptage n'avait lieu, et js/app.js appelait un window.__ymTrack qui n'existait plus.
   Ce fichier le rétablit, en parlant au Worker déployé seul sur stats.yumerty.com.

   Deux choses à savoir si tu modifies ceci :

   1. Les IP de Cloudflare sont bloquées PAR INTERMITTENCE par les FAI espagnols (blocage
      LaLiga pendant les matchs). stats.yumerty.com est donc parfois injoignable, alors que
      le site lui-même (GitHub Pages) reste accessible. Un mouchard naïf perdrait toutes les
      visites de ces fenêtres-là. D'où la FILE D'ATTENTE : un envoi qui échoue est rangé dans
      localStorage avec son horodatage, et rejoué au prochain chargement réussi. Le serveur
      range l'événement dans son jour d'origine grâce au paramètre `t`.

   2. Aucune donnée personnelle ne part d'ici : ni identifiant, ni contenu, ni réponse de
      quiz. Le serveur dérive un identifiant anonyme par HMAC de l'IP, qu'il ne stocke jamais
      en clair. Ce fichier n'envoie qu'un nom d'événement et un horodatage.
   ========================================================= */
(function () {
  "use strict";
  // Le mouchard est accessoire : quoi qu'il arrive, il ne doit jamais faire remonter d'erreur
  // (localStorage refusé en navigation privée, Promise absent, fetch bloqué par une extension…).
  /* Le mouchard ne démarre qu'une fois la page ENTIÈREMENT chargée, et même un peu après.
     Raison : il ne doit jamais entrer en concurrence avec les ressources du site lui-même.
     Le site est servi par GitHub Pages, le mouchard parle à Cloudflare — dont certaines IP
     sont bloquées par les FAI espagnols. Si cet appel partait pendant le chargement, une IP
     bloquée pourrait occuper une des connexions que le navigateur réserve par domaine, et
     ralentir l'affichage. En démarrant après `load`, il n'y a plus rien à ralentir : la page
     est déjà utilisable, et le compteur travaille dans son coin. */
  /* ⚠️ NE JAMAIS FAIRE DÉPENDRE LE DÉMARRAGE DU SEUL ÉVÉNEMENT `load`.
     C'est le défaut introduit le 17/10/2026 et constaté le 18/10 : des visiteurs utilisaient
     le site sans apparaître dans la console. `load` n'est émis qu'une fois TOUTES les
     ressources arrivées, Google Fonts comprises ; sur un réseau où l'une d'elles traîne ou
     est bloquée, `load` peut tarder très longtemps, et le compteur ne démarrait jamais.
     On démarre donc au PREMIER des trois signaux qui survient — `load`, `DOMContentLoaded`,
     ou un simple délai — et une seule fois. Le délai est le garde-fou : il garantit le
     démarrage même si aucun événement n'arrive jamais. L'intention d'origine est préservée,
     puisqu'on laisse toujours passer un court moment avant le premier envoi. */
  var demarre = false;
  function demarrerUneFois() {
    if (demarre) return;
    demarre = true;
    try { demarrerMouchard(); } catch (err) {}
  }
  try {
    setTimeout(demarrerUneFois, 2500);                       // garde-fou : toujours exécuté
    if (document.readyState === "complete") setTimeout(demarrerUneFois, 300);
    else {
      window.addEventListener("load", function () { setTimeout(demarrerUneFois, 300); });
      document.addEventListener("DOMContentLoaded", function () { setTimeout(demarrerUneFois, 1200); });
    }
  } catch (err) { demarrerUneFois(); }

  function demarrerMouchard() {
  /* DEUX adresses pour le même Worker, essayées dans l'ordre, et ce n'est pas de la ceinture
     et des bretelles : le 17/10/2026, Cloudflare a attribué au domaine personnalisé
     stats.yumerty.com les IP 188.114.97.2 et 188.114.96.2, c'est-à-dire exactement la plage
     que les FAI espagnols bloquent. Vérifié en TCP brut depuis Madrid : port 443 injoignable.
     L'adresse workers.dev, elle, est servie depuis 104.21.x et répond.
     Comme la quasi-totalité des visiteurs de ce site sont en Espagne, mettre le domaine
     personnalisé en premier reviendrait à ne rien compter du tout.
     L'adresse qui a fonctionné est mémorisée, pour ne pas repayer l'échec à chaque envoi. */
  var ENDPOINTS = [
    "https://yumerty.alessandrodimeopro.workers.dev",
    "https://stats.yumerty.com"
  ];
  var CLE_EP = "ym_adresse";
  var FILE = "ym_file";      // clé localStorage de la file d'attente
  var FILE_MAX = 200;        // au-delà, on jette les plus anciens (bornage du stockage)
  /* Battement porté de 60 s à 4 min le 17/10/2026. Chaque battement coûte une écriture KV, et
     le plan gratuit de Cloudflare en autorise 1 000 par jour : à 60 s, une session de dix
     minutes en consommait dix, et quelques dizaines de visiteurs suffisaient à épuiser le
     quota — après quoi les écritures échouent en silence et la journée est perdue.
     La fenêtre « en ligne » du serveur a été portée à 6 min en conséquence. */
  var BATTEMENT = 4 * 60000;

  function lire() {
    try { var v = JSON.parse(localStorage.getItem(FILE) || "[]"); return Array.isArray(v) ? v : []; }
    catch (e) { return []; }
  }
  function ecrire(f) {
    try { localStorage.setItem(FILE, JSON.stringify(f.slice(-FILE_MAX))); } catch (e) {}
  }
  function enfiler(e, t) {
    var f = lire(); f.push({ e: e, t: t }); ecrire(f);
  }

  /* Un seul envoi. Résout vrai si le serveur a bien reçu, faux sinon (réseau bloqué, hors
     ligne, erreur serveur) — c'est ce booléen qui décide de la mise en file.

     Pas d'en-tête personnalisé ni de corps : la requête reste « simple » au sens CORS, donc
     le navigateur n'a pas besoin d'un préflight à chaque battement.

     Repli en XMLHttpRequest : la cible de ce site descend jusqu'à ES2018 (voir la note de
     compatibilité du projet : ni `?.` ni `??`, sous peine de planter de vieux iOS/Chrome).
     fetch() y est normalement présent, mais s'il manque, un appel direct lèverait une
     TypeError au chargement. XHR couvre ce cas sans rien changer au protocole. */
  /* Ordre d'essai : l'adresse qui a marché la dernière fois d'abord, puis les autres. */
  function ordreAdresses() {
    var pref = 0;
    try { var v = parseInt(localStorage.getItem(CLE_EP), 10); if (v >= 0 && v < ENDPOINTS.length) pref = v; } catch (err) {}
    var l = [pref];
    for (var i = 0; i < ENDPOINTS.length; i++) if (i !== pref) l.push(i);
    return l;
  }
  function memoriser(i) { try { localStorage.setItem(CLE_EP, String(i)); } catch (err) {} }

  /* Essaie chaque adresse jusqu'à ce que l'une réponde. */
  function envoyer(e, t) {
    var ordre = ordreAdresses();
    function tente(k) {
      if (k >= ordre.length) return Promise.resolve(false);
      return envoyerVers(ordre[k], e, t).then(function (ok) {
        if (ok) { memoriser(ordre[k]); return true; }
        return tente(k + 1);
      });
    }
    return tente(0);
  }

  function envoyerVers(i, e, t) {
    var url = ENDPOINTS[i] + "/_ping?e=" + encodeURIComponent(e) + (t ? "&t=" + t : "");
    if (typeof fetch === "function") {
      /* Délai dur de 5 s. Une IP bloquée ne refuse pas la connexion : elle ne répond pas du
         tout, et la requête resterait pendante une minute ou plus, occupant une connexion du
         navigateur. On l'abandonne vite — l'événement part en file et sera rejoué plus tard. */
      var stop = null, sig = null;
      try {
        if (typeof AbortController === "function") {
          var ac = new AbortController();
          sig = ac.signal;
          stop = setTimeout(function () { try { ac.abort(); } catch (err) {} }, 5000);
        }
      } catch (err) { stop = null; sig = null; }
      var opt = { method: "POST", mode: "cors", credentials: "omit", keepalive: true };
      if (sig) opt.signal = sig;
      return fetch(url, opt)
        .then(function (r) { if (stop) clearTimeout(stop); return r.ok || r.status === 204; })
        .catch(function () { if (stop) clearTimeout(stop); return false; });
    }
    return new Promise(function (resolve) {
      try {
        var x = new XMLHttpRequest();
        x.open("POST", url, true);
        x.onload = function () { resolve(x.status === 204 || (x.status >= 200 && x.status < 300)); };
        x.onerror = function () { resolve(false); };
        x.ontimeout = function () { resolve(false); };
        x.timeout = 10000;
        x.send();
      } catch (err) { resolve(false); }
    });
  }

  /* Rejoue la file. On s'arrête au premier échec : si le réseau est encore bloqué, inutile
     de brûler les 200 entrées une par une, elles restent pour la prochaine fois.

     VERROU OBLIGATOIRE. Deux vidages simultanés enverraient chaque événement deux fois et
     gonfleraient les statistiques — c'est arrivé : au chargement, vider() et pister("view")
     partent ensemble, et pister() rappelle vider() dès que son envoi réussit. Un test a
     mesuré 6 envois pour 3 événements en attente. Ne retire pas ce verrou.

     La file est aussi RELUE à chaque étape plutôt que travaillée sur une copie : un
     battement peut s'ajouter pendant le vidage, et une copie figée l'aurait écrasé. */
  var videEnCours = null;
  function vider() {
    if (videEnCours) return videEnCours;
    function fini() { videEnCours = null; }
    videEnCours = (function suite() {
      var f = lire();
      if (!f.length) return Promise.resolve();
      var item = f[0];
      return envoyer(item.e, item.t).then(function (ok) {
        if (!ok) return;                      // réseau encore bloqué : on garde tout
        var g = lire();                       // relecture : la file a pu bouger entre-temps
        if (g.length && g[0].e === item.e && g[0].t === item.t) { g.shift(); ecrire(g); }
        return suite();
      });
    })().then(fini, fini);
    return videEnCours;
  }

  function pister(e) {
    var t = Date.now();
    return envoyer(e, 0).then(function (ok) {
      if (!ok) enfiler(e, t);
      else vider();                           // un envoi réussi = le réseau est revenu
      return ok;
    });
  }

  // js/app.js appelle window.__ymTrack("quiz") au lancement d'un quiz : on le lui rend.
  window.__ymTrack = pister;

  vider();
  pister("view");

  var minuteur = null;
  function battre() { if (document.visibilityState === "visible") pister("beat"); }
  function demarrer() {
    if (minuteur) return;
    minuteur = setInterval(battre, BATTEMENT);
  }
  function arreter() { if (minuteur) { clearInterval(minuteur); minuteur = null; } }

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") { battre(); demarrer(); } else arreter();
  });
  if (document.visibilityState === "visible") demarrer();
  }
})();
