/* =========================================================
   TRADUCTION DU SITE — fr (base) · es · en
   =========================================================
   Le dictionnaire est indexé par le TEXTE FRANÇAIS, comme le fait gettext.
   Avantage : aucune clé à inventer, aucune balise à poser dans le HTML, et une
   chaîne oubliée s'affiche en français plutôt que de casser l'affichage.

   Registre visé :
   - espagnol d'Espagne, tutoiement, vocabulaire universitaire réel —
     « tema » (c'est le mot des cours d'Alessandro), « asignatura », « baremo »,
     « aprobado », « fallo ». Jamais du mot-à-mot.
   - anglais britannique universitaire — « past papers », « marking scheme »,
     « resit », « subject ».
   ========================================================= */

const LANGUES = {
  fr: { code: "fr", nom: "Français", abbr: "FR" },
  es: { code: "es", nom: "Español", abbr: "ES" },
  en: { code: "en", nom: "English", abbr: "EN" },
};

const I18N = {
  es: {
    /* ---------- En-tête et reprise de session ---------- */
    "Session interrompue": "Sesión interrumpida",
    "Démarrer une nouvelle": "Empezar una nueva",
    "Reprendre →": "Continuar →",

    /* ---------- Accroche ---------- */
    "Révise tes matières,": "Repasa tus asignaturas,",
    "en condition d'examen": "en condiciones de examen",
    "Prépare tes examens sur des QCU corrigés et justifiés.":
      "Prepara tus exámenes con preguntas tipo test corregidas y justificadas.",

    /* ---------- Barème ---------- */
    "Type de QCU": "Tipo de pregunta",
    "Bonne": "Acierto",
    "Mauvaise": "Fallo",
    "Sans réponse": "Sin responder",
    "3 propositions": "3 opciones",
    "4 propositions": "4 opciones",
    "Note finale toujours ramenée sur 10.": "La nota final siempre se ajusta sobre 10.",

    /* ---------- Choix du cursus ---------- */
    "Choisis ton cursus": "Elige tu grado",
    "Kinésithérapie": "Fisioterapia",
    "Dentaire": "Odontología",
    "Bientôt disponible": "Próximamente",

    /* ---------- Bandeau de chiffres ---------- */
    "QCU corrigés et justifiés": "preguntas corregidas y justificadas",
    "matières disponibles": "asignaturas disponibles",
    "chapitres de cours": "temas del temario",
    "note d'examen": "nota de examen",

    /* ---------- Présentation ---------- */
    "Ce que propose Yumerty": "Lo que ofrece Yumerty",
    "Tout pour réviser efficacement.": "Todo para repasar con eficacia.",
    "Corrigés et justifiés": "Corregidas y justificadas",
    "Chaque proposition est expliquée. Tu sais pourquoi elle est vraie ou fausse.":
      "Cada opción lleva su explicación. Sabes por qué es verdadera o falsa.",
    "Conditions d'examen": "Condiciones de examen",
    "Un barème réaliste qui pénalise les erreurs et récompense la prudence. Note sur 10.":
      "Un baremo realista que penaliza los fallos y premia la prudencia. Nota sobre 10.",
    "Fidèle aux annales": "Fiel a los exámenes reales",
    "Des questions dans le style des vrais examens, avec des choix crédibles.":
      "Preguntas con el estilo de los exámenes reales y opciones creíbles.",
    "Suivi des erreurs": "Seguimiento de los fallos",
    "Les questions ratées reviennent jusqu'à ce que tu les maîtrises.":
      "Las preguntas falladas vuelven hasta que las dominas.",
    "Tirage intelligent": "Selección inteligente",
    "Tu vois en priorité les questions que tu n'as pas encore travaillées.":
      "Ves primero las preguntas que todavía no has trabajado.",
    "Révision par chapitre": "Repaso por temas",
    "Coche un chapitre, plusieurs, ou lance la matière entière.":
      "Marca un tema, varios, o lanza la asignatura entera.",
    "suivent le découpage de tes cours.": "siguen la estructura de tu temario.",

    /* ---------- Étapes ---------- */
    "Comment ça marche": "Cómo funciona",
    "Réviser en quatre étapes.": "Repasar en cuatro pasos.",
    "Choisis ta matière": "Elige tu asignatura",
    "Sélectionne ce que tu veux travailler.": "Selecciona lo que quieras trabajar.",
    "Lance une série": "Lanza una serie",
    "20, 30 ou 40 QCU selon ton temps.": "20, 30 o 40 preguntas, según el tiempo que tengas.",
    "Réponds": "Responde",
    "Une bonne réponse par question, puis la justification.":
      "Una sola respuesta correcta por pregunta y, después, la justificación.",
    "Revois tes erreurs": "Repasa tus fallos",
    "Rejoue les questions ratées jusqu'à les effacer.":
      "Vuelve a hacer las preguntas falladas hasta eliminarlas.",

    /* ---------- Appel à l'action et pied de page ---------- */
    "Prêt à réviser ?": "¿Listo para repasar?",
    "Choisis ton cursus et lance ta première série.":
      "Elige tu grado y lanza tu primera serie.",
    "Commencer →": "Empezar →",
    "QCU médicaux corrigés et justifiés.": "Preguntas médicas corregidas y justificadas.",

    /* ---------- Navigation ---------- */
    "← Retour": "← Volver",
    "Mes erreurs": "Mis fallos",
    "Aucune matière disponible pour cette section pour l'instant. De nouvelles matières seront ajoutées progressivement.":
      "De momento no hay asignaturas disponibles en esta sección. Se irán añadiendo poco a poco.",
    "Matière": "Asignatura",
    "matière": "asignatura",
    "matières": "asignaturas",
    "Toute la matière": "Toda la asignatura",
    "Chapitres au choix": "Temas a elegir",
    "Choisis un module et le format de la session.":
      "Elige un módulo y el formato de la sesión.",
    "Cette matière est en cours de construction — la banque de questions n'est pas encore remplie.":
      "Esta asignatura está en construcción: el banco de preguntas todavía está vacío.",

    /* ---------- Modules et examens ---------- */
    "Examen mi-terme": "Examen parcial",
    "Examen final": "Examen final",
    "Examen de gestion": "Examen de gestión",
    "Examen": "Examen",
    "Mid": "Parcial",
    "Final": "Final",
    "module": "módulo",
    "modules": "módulos",

    /* ---------- Chapitres ---------- */
    "Chapitre": "Tema",
    "Chapitres": "Temas",
    "chapitre": "tema",
    "chapitres": "temas",
    "chapitre choisi": "tema elegido",
    "chapitres choisis": "temas elegidos",
    "Les chapitres sélectionnés contiennent": "Los temas seleccionados contienen",
    "questions. Le quiz en comptera": "preguntas. El test tendrá",
    "Aucune question ne correspond aux chapitres sélectionnés.":
      "Ninguna pregunta corresponde a los temas seleccionados.",

    /* ---------- Quiz ---------- */
    "← Quitter": "← Salir",
    "Ne pas répondre": "No responder",
    "SUIVANT →": "SIGUIENTE →",
    "VOIR LES RÉSULTATS →": "VER LOS RESULTADOS →",
    "Question": "Pregunta",
    "propositions": "opciones",
    "Une mauvaise réponse retire": "Cada fallo resta",
    "point. Score ramené sur 10.": "punto. La puntuación se ajusta sobre 10.",

    /* ---------- Signalement ---------- */
    "Signaler une erreur": "Informar de un error",
    "Qu'est-ce qui te paraît faux ?": "¿Qué te parece incorrecto?",
    "(facultatif)": "(opcional)",
    "Annuler": "Cancelar",
    "Envoyer le signalement": "Enviar el aviso",
    "Ton signalement est anonyme. La question va être revue, réétudiée et corrigée s'il y a bien une erreur.":
      "Tu aviso es anónimo. La pregunta se revisará, se volverá a estudiar y se corregirá si de verdad hay un error.",
    "Merci, c'est noté. La question sera relue.":
      "Gracias, queda anotado. La pregunta se revisará.",
    "Par exemple : la proposition B me paraît juste aussi, ou la justification contredit le cours.":
      "Por ejemplo: la opción B también me parece correcta, o la justificación contradice el temario.",

    /* ---------- Résultats ---------- */
    "Quiz terminé": "Test terminado",
    "VALIDÉ": "APROBADO",
    "JUILLET": "JULIO",
    "Bonnes": "Aciertos",
    "Mauvaises": "Fallos",
    "Non répondues": "Sin responder",
    "Nouvelle série": "Nueva serie",
    "Revoir mes erreurs": "Ver mis fallos",
    "Retour au menu": "Volver al menú",
    "Retour aux résultats": "Volver a los resultados",
    "← Retour aux résultats": "← Volver a los resultados",
    "Quitter": "Salir",
    "Accueil": "Inicio",

    /* ---------- Mes erreurs ---------- */
    "Re-réponds à chaque question. Si tu trouves la bonne réponse cette fois-ci, elle sera retirée automatiquement.":
      "Vuelve a responder cada pregunta. Si esta vez aciertas, se eliminará automáticamente.",
    "← Précédente": "← Anterior",
    "Suivante →": "Siguiente →",
    "Plus aucune erreur en attente. Bravo !":
      "No te queda ningún fallo pendiente. ¡Enhorabuena!",
    "Tes erreurs": "Tus fallos",
    "Revois les questions ratées ou non répondues, avec leurs justifications complètes.":
      "Repasa las preguntas falladas o sin responder, con sus justificaciones completas.",
    "Non répondue": "Sin responder",
    "Mauvaise réponse": "Fallo",
    "✓ Bonne réponse — question retirée de tes erreurs":
      "✓ Correcto: la pregunta sale de tus fallos",
    "✗ Mauvaise réponse — la question reste dans ta liste":
      "✗ Fallo: la pregunta sigue en tu lista",

    /* ---------- Choix de ce qu'on révise ---------- */
    "Que veux-tu réviser ?": "¿Qué quieres repasar?",

    /* --- Chronomètre de série --- */
    "Chronomètre": "Cronómetro",
    "Série sans limite de temps": "Serie sin límite de tiempo",
    "Autre durée": "Otra duración",
    "Durée en minutes": "Duración en minutos",
    "Minimum 10 minutes. Une fois la série lancée, le chronomètre ne peut plus être arrêté : à zéro, la série se termine et les questions restantes comptent comme non répondues.":
      "Mínimo 10 minutos. Una vez iniciada la serie, el cronómetro ya no se puede detener: al llegar a cero, la serie termina y las preguntas restantes cuentan como no respondidas.",
    "Temps écoulé : les questions restantes comptent comme non répondues.":
      "Tiempo agotado: las preguntas restantes cuentan como no respondidas.",
    "Tout le programme": "Todo el temario",
    "Personnaliser": "Personalizar",
    "← Changer ce que je révise": "← Cambiar lo que repaso",
    "Ta réponse": "Tu respuesta",
    "Bonne réponse": "Respuesta correcta",
    "Semestre": "Semestre",
    "à": "a",
    "bientôt": "próximamente",
    "Programme": "Plan de estudios",
    "Ancien programme": "Plan antiguo",
    "Nouveau programme": "Plan nuevo",
    "année": "curso",
    "examen": "examen",
    "disponible": "disponible",
    "disponibles": "disponibles",

    /* ---------- Années ---------- */
    "1ʳᵉ année": "1.er curso",
    "2ᵉ année": "2.º curso",
    "3ᵉ année": "3.º curso",
    "4ᵉ année": "4.º curso",
    "5ᵉ année": "5.º curso",
    "1ère année": "1.er curso",
    "2ème année": "2.º curso",
    "3ème année": "3.º curso",
    "4ème année": "4.º curso",
    "5ème année": "5.º curso",
  },

  en: {},   /* rempli juste après l'espagnol */
};

/* ---------------------------------------------------------
   Mécanique
   --------------------------------------------------------- */
const CLE_LANGUE = "yumerty_langue";

function langueActuelle() {
  try {
    const l = localStorage.getItem(CLE_LANGUE);
    if (l && LANGUES[l]) return l;
  } catch (e) {}
  return "fr";
}

/* Traduit une chaîne. Le français est la langue source : il n'a pas de table. */
/* Les textes du HTML sont indentés sur plusieurs lignes : on compare sur une version
   normalisée (espaces multiples et retours à la ligne ramenés à une espace simple). */
function normaliser(s) {
  return String(s).replace(/\s+/g, " ").trim();
}

let TABLE_NORM = null;
function tableNormalisee(l) {
  if (TABLE_NORM && TABLE_NORM.langue === l) return TABLE_NORM.map;
  const map = Object.create(null);
  const src = I18N[l] || {};
  for (const cle in src) map[normaliser(cle)] = src[cle];
  TABLE_NORM = { langue: l, map };
  return map;
}

function t(texte) {
  const l = langueActuelle();
  if (l === "fr" || !texte) return texte;
  const table = tableNormalisee(l);
  if (!table) return texte;
  const brut = normaliser(texte);
  if (table[brut] !== undefined) {
    // on restitue les espaces qui entouraient le texte d'origine
    const avant = String(texte).match(/^\s*/)[0];
    const apres = String(texte).match(/\s*$/)[0];
    return avant + table[brut] + apres;
  }
  return texte;
}

/* Parcourt les nœuds de texte et traduit ceux qui ont une entrée.
   On ignore scripts, styles et champs de saisie. */
function appliquerTraductions(racine) {
  const l = langueActuelle();
  if (l === "fr") return;
  const table = tableNormalisee(l);
  if (!table) return;
  const depart = racine || document.body;
  const marcheur = document.createTreeWalker(depart, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      const p = n.parentNode;
      if (!p) return NodeFilter.FILTER_REJECT;
      const tag = p.nodeName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "TEXTAREA") return NodeFilter.FILTER_REJECT;
      return n.nodeValue && n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  const aTraduire = [];
  let n;
  while ((n = marcheur.nextNode())) aTraduire.push(n);
  aTraduire.forEach(noeud => {
    const brut = normaliser(noeud.nodeValue);
    if (table[brut] !== undefined) noeud.nodeValue = table[brut];
  });
  // attributs visibles
  document.querySelectorAll("[placeholder]").forEach(el => {
    const v = normaliser(el.getAttribute("placeholder"));
    if (table[v] !== undefined) el.setAttribute("placeholder", table[v]);
  });
  document.documentElement.setAttribute("lang", l);
}

/* Alias : dans app.js, une fonction locale emploie déjà « t » comme nom de variable. */
function traduire(x) { return t(x); }

function changerLangue(l) {
  if (!LANGUES[l]) return;
  try { localStorage.setItem(CLE_LANGUE, l); } catch (e) {}
  location.reload();   // le plus sûr : tout l'écran est reconstruit dans la langue choisie
}

function renderSelecteurLangue() {
  const hote = document.getElementById("selecteur-langue");
  if (!hote) return;
  const courante = langueActuelle();
  hote.innerHTML = Object.values(LANGUES).map(l =>
    `<button type="button" class="lang-btn${l.code === courante ? " is-active" : ""}"
             data-langue="${l.code}" lang="${l.code}"
             aria-label="${l.nom}"${l.code === courante ? ' aria-current="true"' : ""}>${l.abbr}</button>`
  ).join("");
}

document.addEventListener("click", e => {
  const b = e.target.closest("[data-langue]");
  if (b) { e.preventDefault(); changerLangue(b.dataset.langue); }
});

/* Les noms de matières et de chapitres (709 entrées) vivent dans un fichier à part,
   chargé uniquement si la langue n'est pas le français : inutile d'imposer ce poids
   aux francophones. Une fois chargé, on vide le cache et on retraduit. */
(function chargerStructure() {
  const l = langueActuelle();
  if (l === "fr") return;
  const s = document.createElement("script");
  s.src = "translations/" + l + "-structure.js?v=1";
  s.async = true;
  s.onload = () => { TABLE_NORM = null; appliquerTraductions(); };
  s.onerror = () => { /* le site reste lisible en français : pas d'écran cassé */ };
  (document.head || document.documentElement).appendChild(s);
})();

/* L'application reconstruit en permanence des morceaux d'écran (questions, cartes,
   résultats). Plutôt que d'ajouter un appel dans chaque fonction d'affichage — et d'en
   oublier à la prochaine évolution — on observe le DOM et on retraduit ce qui apparaît.
   Pas de boucle possible : une fois traduite, une chaîne ne correspond plus à une entrée
   du dictionnaire, donc le passage suivant ne modifie rien et l'observateur se tait. */
(function observerLeDom() {
  if (langueActuelle() === "fr") return;
  const demarrer = () => {
    let enCours = false;
    new MutationObserver(() => {
      if (enCours) return;
      enCours = true;
      requestAnimationFrame(() => { appliquerTraductions(); enCours = false; });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
    appliquerTraductions();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", demarrer);
  else demarrer();
})();

/* ------------------------------------------------------------------ *
 *  Contenu des QCU (énoncés, propositions, justifications)
 * ------------------------------------------------------------------ *
 * Le dictionnaire par chaîne source ne convient pas ici : 12,5 millions
 * de caractères, ce qui obligerait à embarquer le français ET la langue
 * cible. On indexe donc par position dans la banque — l'ordre de
 * `QUESTIONS[banque]` est la clé — et on réécrit les objets sur place.
 * C'est sans risque : changer de langue recharge la page, donc le
 * français d'origine revient toujours de `data.js`. Les erreurs
 * mémorisées sont elles aussi stockées par index de banque, elles
 * restent donc valables d'une langue à l'autre.
 *
 * Format d'une ligne : [énoncé, [propositions…], [justifications…]]
 * `null` (ou un tableau vide) laisse la question en français : une
 * banque peut donc être traduite progressivement sans rien casser.
 */
const QCU_ETAT = {};   // banque -> "charge" | Promise

/* Appelée par chaque fichier translations/qcu/<langue>/<banque>.js */
function QCU_T(langue, banque, lignes) {
  if (langue !== langueActuelle()) return;
  const bank = (typeof QUESTIONS !== "undefined") && QUESTIONS[banque];
  if (!bank) return;
  /* `lignes` est soit un tableau aligné sur la banque, soit un objet dont les
     clés sont les index concernés — ce qui permet de livrer une banque par
     tranches sans tenir un tableau de 1 200 cases à trous. */
  Object.keys(lignes).forEach(cle => {
    const q = bank[Number(cle)];
    const ligne = lignes[cle];
    if (!q || !ligne) return;
    const [enonce, props, justifs] = ligne;
    if (enonce) q.q = enonce;
    (q.options || []).forEach((o, k) => {
      if (props && props[k]) o.t = props[k];
      if (justifs && justifs[k]) o.j = justifs[k];
    });
  });
}

/* Les banques dont le contenu est déjà dans la langue affichée n'ont
   rien à charger : le cursus Dentaire est rédigé en anglais. */
function qcuDejaDansLaLangue(banque) {
  const l = langueActuelle();
  if (l === "fr") return true;
  if (l === "en") return /^dent/.test(banque);
  return false;
}

function qcuPret(banques) {
  return banques.every(b => qcuDejaDansLaLangue(b) || QCU_ETAT[b] === "charge");
}

function chargerQcu(banques) {
  const l = langueActuelle();
  return Promise.all(banques.map(b => {
    if (qcuDejaDansLaLangue(b) || QCU_ETAT[b] === "charge") return Promise.resolve();
    if (QCU_ETAT[b]) return QCU_ETAT[b];
    const p = new Promise(resolve => {
      const s = document.createElement("script");
      s.src = "translations/qcu/" + l + "/" + b + ".js?v=1";
      s.async = true;
      /* Une banque pas encore traduite renvoie un 404 : on la marque quand même
         comme traitée, sinon chaque lancement de quiz retenterait le chargement. */
      s.onload = s.onerror = () => { QCU_ETAT[b] = "charge"; resolve(); };
      (document.head || document.documentElement).appendChild(s);
    });
    QCU_ETAT[b] = p;
    return p;
  })).then(() => { TABLE_NORM = null; });
}

window.QCU_T = QCU_T;
window.qcuPret = qcuPret;
window.chargerQcu = chargerQcu;
