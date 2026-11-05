/* Yumerty — chargement des questions, matière par matière (remplace js/data.js, qui n'est plus publié).
 * Au démarrage, QUESTIONS ne contient que des « coquilles » tirées de catalogue.js (chapitre + nombre de
 * propositions, aucun texte) : assez pour l'accueil, les compteurs, les chapitres et le barème.
 * Au lancement d'un quiz, d'une reprise ou des erreurs, app.js appelle chargerQcu() : on télécharge alors
 * le fichier chiffré de la matière dans la langue affichée, on le déchiffre et on remplace les coquilles.
 * Ordre : i18n.js → catalogue.js → qcu-loader.js → chapitres.js → cursus.js → app.js
 */
(function () {
  "use strict";
  var CAT = window.YM_CATALOGUE || {}, F = window.YM_F || {}, KM = window.YM_K || [[], []];
  var Q = {};
  Object.keys(CAT).forEach(function (cle) {
    Q[cle] = CAT[cle].map(function (x) {
      var o = []; for (var k = 0; k < x[1]; k++) o.push({ t: "", j: "" });
      var q = { q: "", options: o };
      if (x[0] !== null) q.c = x[0];
      return q;
    });
  });
  window.QUESTIONS = Q;

  var etat = {};
  var cleAes = null;
  function langue() {
    try { var l = localStorage.getItem("yumerty_langue"); if (l === "es" || l === "en") return l; } catch (e) {}
    return "fr";
  }
  function cle() {
    if (!cleAes) {
      var brut = new Uint8Array(KM[0].map(function (b, i) { return b ^ KM[1][i]; }));
      cleAes = crypto.subtle.importKey("raw", brut, "AES-GCM", false, ["decrypt"]);
    }
    return cleAes;
  }
  var gzipOk = typeof DecompressionStream === "function";
  function lire(cleBanque) {
    var noms = F[cleBanque]; if (!noms) return Promise.reject(new Error("banque inconnue"));
    var nom = noms[langue()] || noms.fr;
    return fetch("q/" + nom + (gzipOk ? ".bin" : ".b0"))
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.arrayBuffer(); })
      .then(function (buf) {
        var b = new Uint8Array(buf);
        return cle().then(function (k) { return crypto.subtle.decrypt({ name: "AES-GCM", iv: b.slice(0, 12) }, k, b.slice(12)); });
      })
      .then(function (clair) {
        if (!gzipOk) return new TextDecoder().decode(clair);
        return new Response(new Blob([clair]).stream().pipeThrough(new DecompressionStream("gzip"))).text();
      })
      .then(function (txt) { return JSON.parse(txt); });
  }
  function chargerUne(cleBanque) {
    if (etat[cleBanque] === "charge") return Promise.resolve();
    if (etat[cleBanque]) return etat[cleBanque];
    var p = new Promise(function (resolve) {
      var essai = 0;
      (function tenter() {
        essai++;
        lire(cleBanque).then(function (qs) {
          var cible = Q[cleBanque] || (Q[cleBanque] = []);
          qs.forEach(function (q, i) { cible[i] = q; });
          cible.length = qs.length;
          etat[cleBanque] = "charge"; resolve();
        }, function () {
          if (essai < 4) { setTimeout(tenter, essai * 700); return; }
          delete etat[cleBanque];
          var l = langue();
          alert(l === "es" ? "No se pueden cargar las preguntas. Comprueba tu conexión e inténtalo de nuevo."
            : l === "en" ? "Couldn't load the questions. Check your connection and try again."
            : "Impossible de charger les questions. Vérifie ta connexion et réessaie.");
          resolve("echec");
        });
      })();
    });
    etat[cleBanque] = p;
    return p;
  }
  // Remplace le chargeur de traductions d'i18n.js : chaque fichier contient déjà la bonne langue.
  window.qcuPret = function (banques) { return banques.every(function (b) { return etat[b] === "charge" || !F[b]; }); };
  window.chargerQcu = function (banques) {
    return Promise.all(banques.map(chargerUne)).then(function (r) {
      if (r.indexOf("echec") >= 0) return new Promise(function () {}); // on ne relance pas le quiz après un échec
    });
  };
})();
