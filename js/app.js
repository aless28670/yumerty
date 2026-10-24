/* =========================================================
   PLATEFORME DE RÉVISION MÉDICALE — Logique de l'application
   ========================================================= */

window.addEventListener("error", (ev) => {
  const box = document.createElement("div");
  box.style.cssText = "position:fixed;left:12px;right:12px;bottom:12px;background:#ef4444;color:#fff;padding:14px 18px;border-radius:12px;font:14px/1.4 system-ui;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,.2);";
  box.textContent = "JS error: " + (ev.message || ev.error) + " @ " + (ev.filename || "?") + ":" + (ev.lineno || "?");
  document.body.appendChild(box);
});

/* « Mélangé » Valorisation Membres : union membre supérieur + inférieur,
   construite au runtime (hors data.js pour préserver l'unicité globale). */
if (typeof QUESTIONS !== "undefined" && QUESTIONS.valoMembresSup && QUESTIONS.valoMembresInf && !QUESTIONS.valoMembresMix) {
  QUESTIONS.valoMembresMix = QUESTIONS.valoMembresSup.concat(QUESTIONS.valoMembresInf);
}

const DEFAULT_LENGTH = 20;

// Final score is always normalized to this scale, regardless of mode length.
const DISPLAY_MAX = 10;
const DISPLAY_PASS = 5;

// Per-mode quiz length. Anything not listed falls back to DEFAULT_LENGTH.
const MODE_LENGTH = {
  pathoChir2: 30
};

// Per-mode option count, used to derive the anti-guess penalty.
// 3 options → bad = −1/2 of a correct point.
// 4 options → bad = −1/3 of a correct point.
const MODE_OPTIONS = {
  facile: 3,
  difficile: 3,
  ontoFacile: 3,
  ontoDifficile: 3,
  analogies: 3,
  pathoChir2: 4,
  pathologie2: 4,
  pathologie1: 4
};

function getQuizLength(mode) {
  return MODE_LENGTH[mode] || DEFAULT_LENGTH;
}

function getPoints(mode) {
  // Barème dérivé du nombre RÉEL de propositions de la banque :
  // override explicite via MODE_OPTIONS, sinon compté sur la banque elle-même.
  let n = MODE_OPTIONS[mode];
  if (!n) {
    const bank = (typeof QUESTIONS !== "undefined") && QUESTIONS[mode];
    n = (bank && bank.length && bank[0].options) ? bank[0].options.length : 3;
  }
  return { good: 1, bad: -1 / (n - 1) };
}

/* MODE_LABELS is now built dynamically from CURSUS so a new matière added there
   is automatically labeled correctly. Falls back to the bankKey if not found. */
function buildModeLabels() {
  const out = {};
  if (typeof CURSUS === "undefined") return out;
  Object.values(CURSUS).forEach(cursus => {
    Object.values(cursus.years || {}).forEach(year => {
      Object.values(year.semesters || {}).forEach(semester => {
        Object.entries(semester.matieres || {}).forEach(([matKey, mat]) => {
          (mat.modules || []).forEach(mod => {
            out[mod.bankKey] = mat.label + (mat.modules.length > 1 ? " — " + mod.label : "");
          });
        });
      });
    });
  });
  return out;
}
const MODE_LABELS = buildModeLabels();

/* bankKey -> accent hex, mirrored from CURSUS, so the quiz UI (progress bar,
   primary button, matière label) wears the matière's warm colour. */
function buildModeAccents() {
  const out = {};
  if (typeof CURSUS === "undefined") return out;
  Object.values(CURSUS).forEach(cursus => {
    Object.values(cursus.years || {}).forEach(year => {
      Object.values(year.semesters || {}).forEach(semester => {
        Object.values(semester.matieres || {}).forEach(mat => {
          (mat.modules || []).forEach(mod => {
            out[mod.bankKey] = mod.accent || mat.accent || cursus.accent;
          });
        });
      });
    });
  });
  return out;
}
const MODE_ACCENTS = buildModeAccents();

/* Couleur unique de l'examen. Les couleurs vives servent à se repérer dans le cursus
   (année, matière) ; une fois l'examen lancé, elles deviennent du bruit. L'écran de
   quiz, les résultats et la revue d'erreurs gardent donc la teinte chaude du site, et
   seul le vert/rouge des réponses porte une information. */
const ACCENT_EXAMEN = "#b9763f";

/* Applique la teinte d'examen aux écrans de jeu (quiz, résultats, erreurs). */
function applyQuizAccent() {
  const rgb = hexToRgb(ACCENT_EXAMEN);
  ["screen-quiz", "screen-results", "screen-mistakes"].forEach(id => {
    const screen = document.getElementById(id);
    if (!screen) return;
    screen.style.setProperty("--accent", ACCENT_EXAMEN);
    screen.style.setProperty("--accent-rgb", rgb);
  });
}

/* ----- BorderGlow (porté de React Bits en vanilla, couleurs chaudes) ----- */
function hexToHslParts(hex) {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map(c => c + c).join("");
  const r = parseInt(h.slice(0, 2), 16) / 255,
        g = parseInt(h.slice(2, 4), 16) / 255,
        b = parseInt(h.slice(4, 6), 16) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
  let hh = 0, s = 0, l = (mx + mn) / 2;
  if (mx !== mn) {
    const d = mx - mn;
    s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
    if (mx === r) hh = (g - b) / d + (g < b ? 6 : 0);
    else if (mx === g) hh = (b - r) / d + 2;
    else hh = (r - g) / d + 4;
    hh /= 6;
  }
  return { h: Math.round(hh * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function glowPointerMove(e) {
  const card = e.currentTarget;
  const r = card.getBoundingClientRect();
  const x = e.clientX - r.left, y = e.clientY - r.top;
  const cx = r.width / 2, cy = r.height / 2;
  const dx = x - cx, dy = y - cy;
  let kx = Infinity, ky = Infinity;
  if (dx !== 0) kx = cx / Math.abs(dx);
  if (dy !== 0) ky = cy / Math.abs(dy);
  const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
  let deg = (dx === 0 && dy === 0) ? 0 : Math.atan2(dy, dx) * (180 / Math.PI) + 90;
  if (deg < 0) deg += 360;
  card.style.setProperty("--edge-proximity", (edge * 100).toFixed(2));
  card.style.setProperty("--cursor-angle", deg.toFixed(2) + "deg");
}

/* Set the warm mesh + glow colour variables on a module card, then track the pointer. */
function applyBorderGlow(card, accent) {
  const { h, s, l } = hexToHslParts(accent);
  const gbase = `${h}deg ${s}% ${Math.min(l + 6, 80)}%`;
  const ops = [100, 60, 50, 40, 30, 20, 10];
  const keys = ["", "-60", "-50", "-40", "-30", "-20", "-10"];
  for (let i = 0; i < ops.length; i++) {
    card.style.setProperty(`--glow-color${keys[i]}`, `hsl(${gbase} / ${ops[i]}%)`);
  }
  const cols = [
    `hsl(${h} ${s}% ${l}%)`,
    `hsl(${h} ${Math.max(s - 6, 30)}% ${Math.min(l + 13, 80)}%)`,
    `hsl(${(h + 12) % 360} ${Math.max(s - 10, 28)}% ${Math.min(l + 21, 86)}%)`,
  ];
  const POS = ["80% 55%", "69% 34%", "8% 6%", "41% 38%", "86% 85%", "82% 18%", "51% 4%"];
  const GK = ["--gradient-one", "--gradient-two", "--gradient-three", "--gradient-four", "--gradient-five", "--gradient-six", "--gradient-seven"];
  const CM = [0, 1, 2, 0, 1, 2, 1];
  for (let i = 0; i < 7; i++) {
    card.style.setProperty(GK[i], `radial-gradient(at ${POS[i]}, ${cols[CM[i]]} 0px, transparent 50%)`);
  }
  card.style.setProperty("--gradient-base", `linear-gradient(${cols[0]} 0 100%)`);
  card.addEventListener("pointermove", glowPointerMove);
}

const OPTION_LETTERS = ["A", "B", "C", "D", "E", "F"];

const STATS_KEY = "neuro_question_stats";
const COUNTER_KEY = "neuro_session_counters";
const MISTAKES_KEY = "yumerty_mistakes_v1";
const SEEN_KEY = "yumerty_seen_v1";
/* Suffixe « _v2 » : les chapitres ont été renumérotés le 18/10/2026 pour coller aux vrais
   fichiers de cours (Neuro 1 proposait 16 chapitres pour 4 cours réels). Les sélections
   enregistrées avant cette date désignaient d'autres chapitres ; changer la clé les écarte
   proprement au lieu de les laisser pointer en silence vers le mauvais chapitre. */
const CHAPTERS_KEY = "yumerty_chapters_v2";
const SESSION_KEY = "yumerty_active_session_v1";

/* ----------- State ----------- */
const state = {
  // Navigation context (which level we're in: 'cursus', 'years', 'semesters', 'matieres', 'modules')
  nav: { cursus: null, year: null, programme: null, semester: null, matiere: null, level: null },
  mode: null,            // bankKey of the current quiz (== QUESTIONS[bankKey])
  mistakesView: null,
  quizLength: DEFAULT_LENGTH,
  rawMax: DEFAULT_LENGTH,
  points: { good: 1, bad: -0.5 },
  questions: [],
  index: 0,
  answers: [],
  awaitingNext: false
};

/* ----------- DOM helpers ----------- */
const $ = (sel) => document.querySelector(sel);
const screens = {
  home: $("#screen-home"),
  nav: $("#screen-nav"),
  quiz: $("#screen-quiz"),
  results: $("#screen-results"),
  review: $("#screen-review"),
  mistakes: $("#screen-mistakes")
};

function showScreen(name) {
  Object.values(screens).forEach(s => { if (s) s.classList.remove("active"); });
  if (screens[name]) screens[name].classList.add("active");
  try { window.scrollTo(0, 0); } catch (e) {}
  if (name === "home") {
    renderCursusList();
    updateResumeBanner();
  }
}

/* ----------- Utils ----------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Une proposition qui renvoie à des LETTRES (« A et B sont corrects », « A and B are correct »)
   vient telle quelle des annales : la réécrire reviendrait à refaire l'examen. Mais les lettres
   affichées sont attribuées par POSITION d'affichage, et le mélange des propositions les rendait
   donc arbitraires : l'étudiant·e ne pouvait pas savoir à quoi « A et B » renvoyait — et dans
   43 cas c'était la BONNE RÉPONSE, la question devenant impossible. Pour ces questions seulement,
   on conserve l'ordre de l'annale, afin que les lettres affichées soient celles de l'examen.
   Mesuré le 15/10/2026 : 114 propositions concernées dans 10 banques, surtout le cursus Dentaire. */
const RENVOI_LETTRE = /^(?:les |the )?(?:r[eé]ponses?|options?|propositions?|answers?)? ?[A-D](?: ?(?:et|and|,|&|\+) ?[A-D])+\b|^[A-D] (?:et|and) [A-D]\b/i;
function optionOrder(options) {
  const identite = Array.from({ length: options.length }, (_, i) => i);
  if (options.some(o => RENVOI_LETTRE.test(String((o && o.t) || "").trim()))) return identite;
  return shuffle(identite);
}

function readJSON(key) {
  try { return JSON.parse(localStorage.getItem(key) || "{}"); }
  catch (e) { return {}; }
}
function writeJSON(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
}

function getModeStats(mode) {
  const all = readJSON(STATS_KEY);
  return all[mode] || {};
}
function saveModeStats(mode, stats) {
  const all = readJSON(STATS_KEY);
  all[mode] = stats;
  writeJSON(STATS_KEY, all);
}
function nextSessionNum(mode) {
  const counters = readJSON(COUNTER_KEY);
  const n = (counters[mode] || 0) + 1;
  counters[mode] = n;
  writeJSON(COUNTER_KEY, counters);
  return n;
}

/* ----------- Seen-questions tracker (per device, per mode) ----------- */
function getSeenIndices(mode) {
  const all = readJSON(SEEN_KEY);
  return Array.isArray(all[mode]) ? all[mode] : [];
}
function saveSeenIndices(mode, list) {
  const all = readJSON(SEEN_KEY);
  all[mode] = list;
  writeJSON(SEEN_KEY, all);
}
function getSeenProgress(mode) {
  const bank = QUESTIONS[mode] || [];
  const seen = getSeenIndices(mode);
  return { seen: seen.length, total: bank.length };
}

/* ----------- Active session save/resume ----------- */
function saveActiveSession() {
  if (!state.mode || !state.questions.length) return;
  const snap = {
    mode: state.mode,
    quizLength: state.quizLength,
    rawMax: state.rawMax,
    points: state.points,
    questions: state.questions,
    index: state.index,
    answers: state.answers,
    awaitingNext: state.awaitingNext,
    ts: Date.now()
  };
  writeJSON(SESSION_KEY, snap);
}
function clearActiveSession() {
  try { localStorage.removeItem(SESSION_KEY); } catch (e) {}
}
function getActiveSession() {
  const s = readJSON(SESSION_KEY);
  if (!s || !s.mode || !Array.isArray(s.questions) || s.questions.length === 0) return null;
  return s;
}

/* ----------- Persistent mistake archive ----------- */
function getAllMistakes() { return readJSON(MISTAKES_KEY); }
function saveAllMistakes(m) { writeJSON(MISTAKES_KEY, m); }

function addMistake(mode, bankIdx, chosenOrigIdx) {
  const all = getAllMistakes();
  const list = all[mode] || [];
  const existing = list.findIndex(m => m.bankIdx === bankIdx);
  const entry = { bankIdx, chosenOrigIdx, ts: Date.now() };
  if (existing >= 0) list[existing] = entry;
  else list.push(entry);
  all[mode] = list;
  saveAllMistakes(all);
}

function removeMistake(mode, bankIdx) {
  const all = getAllMistakes();
  if (!all[mode]) return;
  all[mode] = all[mode].filter(m => m.bankIdx !== bankIdx);
  saveAllMistakes(all);
}

function countMistakesForBanks(bankKeys) {
  const all = getAllMistakes();
  return bankKeys.reduce((sum, bk) => sum + (all[bk] || []).length, 0);
}

/* ----------- Chapter selection ----------- */

/* Chapters declared for a bank, or null when the bank isn't tagged yet. */
/* Une question peut relever de DEUX chapitres : quand une notion est enseignée dans deux cours
   et qu'aucun ne la porte seul, elle est rangée dans les deux plutôt qu'arbitrée au hasard.
   Le champ `c` accepte donc un nombre (cas courant) ou un tableau de nombres. */
function chapitresDe(q) {
  if (Array.isArray(q.c)) return q.c;
  return q.c ? [q.c] : [];
}

/* ----------- Questions illustrées -----------
   Une question peut porter un champ `img` : le chemin d'une photo (appareil, orthèse,
   déformation…) affichée sous l'énoncé. C'est la seule exception à la règle « aucun renvoi
   visuel » : ici le visuel EST la question. `imgAlt` décrit l'image pour la synthèse vocale
   et pour le cas où le fichier ne se charge pas. */
function figureHtml(q) {
  if (!q.img) return "";
  return '<figure class="question-figure">'
    + '<img src="' + escapeHtml(q.img) + '" alt="' + escapeHtml(q.imgAlt || "") + '" loading="lazy">'
    + '</figure>';
}

function chaptersOf(bank) {
  const defs = (typeof CHAPITRES !== "undefined" && CHAPITRES[bank]) || null;
  if (!defs || !defs.length) return null;
  const counts = {};
  (QUESTIONS[bank] || []).forEach(q => chapitresDe(q).forEach(id => { counts[id] = (counts[id] || 0) + 1; }));
  /* Les chapitres encore vides ne sont pas proposés. ⚠️ La règle d'Alessandro du 23/10/2026
     — « tant qu'une matière n'est pas couverte en entier, pas de choix de chapitre » — vise
     les matières EN CONSTRUCTION : celles-là ne se publient tout simplement pas tant qu'il
     manque des chapitres. Les matières déjà terminées et en ligne gardent leur sélecteur. */
  const list = defs.map(ch => ({ id: ch.id, nom: ch.nom, count: counts[ch.id] || 0 }))
                   .filter(ch => ch.count > 0);
  return list.length ? list : null;
}

function getChapterSelection(bank) {
  const all = readJSON(CHAPTERS_KEY);
  const sel = all[bank];
  return Array.isArray(sel) ? sel : [];
}

function saveChapterSelection(bank, ids) {
  const all = readJSON(CHAPTERS_KEY);
  if (!ids || !ids.length) delete all[bank]; else all[bank] = ids;
  writeJSON(CHAPTERS_KEY, all);
}

/* Set of bank indices allowed by the current chapter selection, or null for "all". */
function chapterPool(bank) {
  const sel = getChapterSelection(bank);
  if (!sel.length || !chaptersOf(bank)) return null;
  const set = new Set();
  (QUESTIONS[bank] || []).forEach((q, i) => {
    // une question à deux chapitres apparaît dès que l'un des deux est coché
    if (chapitresDe(q).some(id => sel.indexOf(id) !== -1)) set.add(i);
  });
  return set.size ? set : null;
}

/* How many questions the current selection makes available. */
function availableCount(bank) {
  const pool = chapterPool(bank);
  return pool ? pool.size : (QUESTIONS[bank] || []).length;
}

/* Parties d'examen d'une matière (Mid / Final / Gestion), ou null si elle n'en déclare pas.
   Une partie n'est retenue que si tous ses chapitres existent réellement dans la matière. */
function partiesOf(bank) {
  const defs = (typeof PARTIES !== "undefined" && PARTIES[bank]) || null;
  const chaps = chaptersOf(bank);
  if (!defs || !chaps) return null;
  const ids = chaps.map(c => c.id);
  const ok = defs.filter(p => p.chapitres.every(c => ids.indexOf(c) !== -1));
  return ok.length ? ok : null;
}

/* Résumé affiché sur l'en-tête du sélecteur. */
function chapterSummary(bank) {
  const chaps = chaptersOf(bank);
  if (!chaps) return "";
  const sel = getChapterSelection(bank);
  if (!sel.length) return "Tout le programme";
  // Si la sélection est exactement une partie d'examen, on l'annonce par son nom.
  const parts = partiesOf(bank) || [];
  const meme = parts.find(p => p.chapitres.length === sel.length
    && p.chapitres.every(c => sel.indexOf(c) !== -1));
  if (meme) return meme.label + " — " + sel.length + " chapitres";
  return sel.length + (sel.length > 1 ? " chapitres choisis" : " chapitre choisi");
}

/* Nombre de questions couvertes par une liste de chapitres (vide = tout le programme). */
function nbQcuPour(bank, ids) {
  const all = QUESTIONS[bank] || [];
  if (!ids || !ids.length) return all.length;
  return all.filter(q => chapitresDe(q).some(c => ids.indexOf(c) !== -1)).length;
}

/* Grille de chapitres nue, réutilisée par l'étape « Personnaliser ». */
function chapterGridHtml(bank) {
  const chaps = chaptersOf(bank) || [];
  const sel = getChapterSelection(bank);
  return chaps.map(ch => {
    const on = sel.indexOf(ch.id) !== -1;
    return `
      <button type="button" class="chap-chip${on ? " is-on" : ""}" data-chap-id="${ch.id}" aria-pressed="${on ? "true" : "false"}">
        <span class="chap-chip-num">${ch.id}</span>
        <span class="chap-chip-name">${escapeHtml(ch.nom)}</span>
        <span class="chap-chip-tick" aria-hidden="true"></span>
      </button>`;
  }).join("");
}

/* Bloc « Que veux-tu réviser ? » : parties d'examen, tout le programme, ou personnalisé.
   Remplace l'ancien tiroir de chapitres, qui obligeait à cocher chapitre par chapitre. */
function reviseBlockHtml(bank) {
  const chaps = chaptersOf(bank);
  const parts = partiesOf(bank) || [];
  const total = (QUESTIONS[bank] || []).length;
  const nbChap = chaps ? chaps.length : 0;

  /* Une partie qui couvre tous les chapitres EST « tout le programme » : on ne montre pas
     les deux, ce serait le même tirage sous deux noms. Cas de Pathologie 1, dont l'examen
     final porte sur l'ensemble du semestre. */
  const couvreTout = p => nbChap > 0 && p.chapitres.length >= nbChap;
  const aUnePartieTotale = parts.some(couvreTout);

  /* Intitulés explicites : on parle d'examens, pas de parties abstraites. */
  const titre = p => p.label === "Mid" ? "Examen mi-terme"
                   : p.label === "Final" ? "Examen final"
                   : "Examen " + p.label.toLowerCase();

  /* Sous-titres tous bâtis sur le même modèle : l'étendue en chapitres. */
  const plage = ids => {
    const t = ids.slice().sort((a, b) => a - b);
    const continu = t.every((v, i) => i === 0 || v === t[i - 1] + 1);
    return continu && t.length > 1
      ? "Chapitres " + t[0] + " à " + t[t.length - 1]
      : t.length + " chapitre" + (t.length > 1 ? "s" : "");
  };

  const ligne = (i, scope, t, sous, compte) => `
          <button type="button" class="scope-row" data-scope="${escapeHtml(scope)}">
            <span class="scope-row-num" aria-hidden="true">${String(i).padStart(2, "0")}</span>
            <span class="scope-row-main">
              <span class="scope-row-title">${escapeHtml(t)}</span>
              <span class="scope-row-sub">${escapeHtml(sous)}</span>
            </span>
            <span class="scope-row-count">${escapeHtml(compte)}</span>
            <span class="scope-row-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </span>
          </button>`;

  const lignes = [];
  let i = 0;
  parts.forEach(p => lignes.push(ligne(++i, "part:" + p.id, titre(p), plage(p.chapitres), nbQcuPour(bank, p.chapitres) + " questions")));
  if (!aUnePartieTotale) {
    const tous = chaps ? chaps.map(c => c.id) : [];
    lignes.push(ligne(++i, "all", "Tout le programme", chaps ? plage(tous) : "Toute la matière", total + " questions"));
  }
  if (chaps) lignes.push(ligne(++i, "custom", "Personnaliser", "Chapitres au choix", nbChap + " au total"));

  return `
      <div class="revise" data-revise="${escapeHtml(bank)}">
        <div class="revise-step" data-step="scope">
          <p class="revise-q">Que veux-tu réviser&nbsp;?</p>
          <div class="scope-list">${lignes.join("")}</div>
        </div>
        <div class="revise-step" data-step="chapters" hidden>
          <p class="revise-q">Choisis tes chapitres</p>
          <div class="chap-grid">${chaps ? chapterGridHtml(bank) : ""}</div>
          <div class="revise-actions">
            <button type="button" class="revise-back" data-rev-back="scope">← Retour</button>
            <button type="button" class="revise-go" data-rev-go>Continuer</button>
          </div>
        </div>
        <div class="revise-step" data-step="format" hidden>
          <p class="revise-q">Combien de questions&nbsp;? <span class="revise-scope"></span></p>
          <div class="mode-card-actions">
            <button class="length-btn" data-bank-key="${escapeHtml(bank)}" data-length="20">20 QCU</button>
            <button class="length-btn" data-bank-key="${escapeHtml(bank)}" data-length="30">30 QCU</button>
            <button class="length-btn" data-bank-key="${escapeHtml(bank)}" data-length="40">40 QCU</button>
          </div>
          <button type="button" class="revise-back" data-rev-back="scope">← Changer ce que je révise</button>
        </div>
      </div>`;
}

/* Interactions du bloc de révision. */
function wireReviseBlock(card, bank) {
  const block = card.querySelector('[data-revise="' + bank + '"]');
  if (!block) return;
  const steps = {};
  block.querySelectorAll(".revise-step").forEach(el => { steps[el.dataset.step] = el; });
  const show = name => Object.entries(steps).forEach(([k, el]) => { el.hidden = (k !== name); });
  const chips = () => Array.prototype.slice.call(block.querySelectorAll(".chap-chip"));

  const allerAuFormat = (libelle, ids) => {
    saveChapterSelection(bank, ids || []);
    const n = nbQcuPour(bank, ids);
    const sc = block.querySelector(".revise-scope");
    if (sc) sc.textContent = "· " + libelle + " · " + n + " questions disponibles";
    show("format");
  };

  block.addEventListener("click", e => {
    const sb = e.target.closest(".scope-row");
    if (sb && block.contains(sb)) {
      const sc = sb.dataset.scope;
      if (sc === "all") return allerAuFormat("Tout le programme", []);
      if (sc === "custom") { show("chapters"); return; }
      const p = (partiesOf(bank) || []).find(x => "part:" + x.id === sc);
      if (p) allerAuFormat(p.label === "Mid" ? "Examen mi-terme" : p.label === "Final" ? "Examen final" : "Examen " + p.label.toLowerCase(), p.chapitres);
      return;
    }
    const chip = e.target.closest(".chap-chip");
    if (chip && block.contains(chip)) {
      const on = !chip.classList.contains("is-on");
      chip.classList.toggle("is-on", on);
      chip.setAttribute("aria-pressed", on ? "true" : "false");
      return;
    }
    const back = e.target.closest("[data-rev-back]");
    if (back && block.contains(back)) { show(back.dataset.revBack); return; }
    const go = e.target.closest("[data-rev-go]");
    if (go && block.contains(go)) {
      const ids = chips().filter(c => c.classList.contains("is-on")).map(c => Number(c.dataset.chapId));
      allerAuFormat(ids.length ? ids.length + " chapitres" : "Tout le programme", ids);
    }
  });
}

/* Sélecteur de chapitres intégré à la carte du module. */
function chapterBlockHtml(bank) {
  const chaps = chaptersOf(bank);
  if (!chaps) return "";
  const sel = getChapterSelection(bank);
  const parts = partiesOf(bank);
  const partsHtml = parts ? `
        <div class="chap-parts">
          <span class="chap-parts-label">Réviser une partie d'examen :</span>
          ${parts.map(p => `<button type="button" class="chap-part-btn" data-chap-part="${escapeHtml(p.id)}">${escapeHtml(p.label)}</button>`).join("")}
        </div>` : "";
  const chips = chaps.map(ch => {
    const on = sel.indexOf(ch.id) !== -1;
    return `
      <button type="button" class="chap-chip${on ? " is-on" : ""}" data-chap-id="${ch.id}" aria-pressed="${on ? "true" : "false"}">
        <span class="chap-chip-num">${ch.id}</span>
        <span class="chap-chip-name">${escapeHtml(ch.nom)}</span>
        <span class="chap-chip-tick" aria-hidden="true"></span>
      </button>`;
  }).join("");
  return `
    <div class="chap-block" data-chap-block="${escapeHtml(bank)}">
      <button type="button" class="chap-head" aria-expanded="false">
        <span class="chap-head-icon" aria-hidden="true"></span>
        <span class="chap-head-text">
          <span class="chap-head-title">Chapitres</span>
          <span class="chap-head-state">${escapeHtml(chapterSummary(bank))}</span>
        </span>
        <span class="chap-head-chevron" aria-hidden="true"></span>
      </button>
      <div class="chap-panel" hidden>
        <p class="chap-help">Choisis ce que tu as révisé. Sans sélection, les questions sont tirées dans tout le programme, comme à l'examen.</p>
        <div class="chap-grid">${chips}</div>
        ${partsHtml}
        <div class="chap-bulk">
          <button type="button" class="chap-bulk-btn" data-chap-none>Effacer ma sélection — revenir à tout le programme</button>
        </div>
      </div>
    </div>`;
}

/* Interactions du sélecteur d'une carte. */
function wireChapterBlock(card, bank) {
  const block = card.querySelector('[data-chap-block="' + bank + '"]');
  if (!block) return;
  const panel = block.querySelector(".chap-panel");
  const head = block.querySelector(".chap-head");
  const stateEl = block.querySelector(".chap-head-state");
  const chips = () => Array.prototype.slice.call(block.querySelectorAll(".chap-chip"));

  const refresh = () => {
    const ids = chips().filter(c => c.classList.contains("is-on")).map(c => Number(c.dataset.chapId));
    saveChapterSelection(bank, ids);
    stateEl.textContent = chapterSummary(bank);
    block.classList.toggle("chap-active", ids.length > 0);
  };

  head.addEventListener("click", () => {
    const open = panel.hidden;
    panel.hidden = !open;
    head.setAttribute("aria-expanded", open ? "true" : "false");
    block.classList.toggle("chap-open", open);
  });
  block.addEventListener("click", e => {
    // Bouton de partie : coche d'un coup tous les chapitres de ce Mid / Final.
    const partBtn = e.target.closest("[data-chap-part]");
    if (partBtn && block.contains(partBtn)) {
      const parts = partiesOf(bank) || [];
      const p = parts.find(x => x.id === partBtn.dataset.chapPart);
      if (p) {
        chips().forEach(c => {
          const on = p.chapitres.indexOf(Number(c.dataset.chapId)) !== -1;
          c.classList.toggle("is-on", on);
          c.setAttribute("aria-pressed", on ? "true" : "false");
        });
        refresh();
      }
      return;
    }
    const chip = e.target.closest(".chap-chip");
    if (!chip || !block.contains(chip)) return;
    const on = !chip.classList.contains("is-on");
    chip.classList.toggle("is-on", on);
    chip.setAttribute("aria-pressed", on ? "true" : "false");
    refresh();
  });
  block.querySelector("[data-chap-none]").addEventListener("click", () => {
    chips().forEach(c => { c.classList.remove("is-on"); c.setAttribute("aria-pressed", "false"); });
    refresh();
  });
  block.classList.toggle("chap-active", getChapterSelection(bank).length > 0);
}

/* Part de questions illustrées visée dans une série. Le tirage reste aléatoire : on garantit
   seulement qu'une série en contienne environ cette proportion, tant que le vivier disponible
   en comporte assez. Une banque sans photo n'est pas affectée — le quota devient inopérant. */
const PART_ILLUSTREES = 0.05;

/* Tire `len` questions parmi `indices` en respectant la part visée de questions illustrées.
   Tout ce qui n'est pas imposé par le quota est tiré au hasard, et l'ordre final est remélangé
   pour que les photos ne se regroupent pas en début de série. */
function tirerAvecQuota(bank, indices, len) {
  const avec = [], sans = [];
  indices.forEach(i => (bank[i].img ? avec : sans).push(i));
  if (!avec.length || !sans.length) return shuffle(indices).slice(0, len);

  /* Le quota est un PLANCHER, pas une consigne stricte : on réserve d'abord cette part de
     questions illustrées, puis on complète au hasard dans tout le vivier restant. Une série
     en contient donc au moins ce nombre, parfois davantage — la variation reste naturelle. */
  const vise = Math.min(Math.round(len * PART_ILLUSTREES), avec.length, len);
  const illustrees = shuffle(avec).slice(0, vise);
  const pris = new Set(illustrees);
  const reste = shuffle(indices.filter(i => !pris.has(i))).slice(0, len - illustrees.length);
  return shuffle([...illustrees, ...reste]);
}

/* Strict no-repeat selection: exhaust every unseen question in the bank
   before any previously-seen one is allowed back. Once the full bank has
   been cycled through, the seen set resets and a new cycle begins. */
function pickQuestions(mode, length) {
  const bank = QUESTIONS[mode];
  const len = length || getQuizLength(mode);
  let seen = getSeenIndices(mode);

  // Chapter filter: when the user has selected chapters, only those questions
  // are eligible. No selection (or no chapter data) = whole bank, as before.
  const pool = chapterPool(mode);
  const inPool = idx => pool === null || pool.has(idx);

  // Build the unseen pool for the current cycle.
  let unseen = [];
  bank.forEach((_, i) => { if (inPool(i) && !seen.includes(i)) unseen.push(i); });

  // If everything has been cycled through, reset and start fresh.
  if (unseen.length === 0) {
    seen = seen.filter(i => !inPool(i));
    unseen = bank.map((_, i) => i).filter(inPool);
    saveSeenIndices(mode, seen);
  }

  let chosen;
  if (unseen.length >= len) {
    chosen = tirerAvecQuota(bank, unseen, len);
  } else {
    // Not enough unseen left → take all unseen, fill the rest by resetting
    // (avoids ever showing a duplicate within the same session).
    const remainder = len - unseen.length;
    const recycled = bank.map((_, i) => i).filter(i => inPool(i) && !unseen.includes(i));
    chosen = [...unseen, ...tirerAvecQuota(bank, recycled, remainder)];
    chosen = shuffle(chosen);
    // The unseen pool is fully drained; flag everything as fresh for next time.
    seen = chosen.slice();
    saveSeenIndices(mode, seen);
  }

  // Mark this session's questions as seen.
  if (unseen.length >= len) {
    seen = seen.concat(chosen);
    saveSeenIndices(mode, seen);
  }

  return construireQuestions(bank, chosen);
}

/* Met en forme les questions tirées, avec un ordre de propositions mélangé pour chacune.
   C'est l'objet rendu ici que lisent l'écran de quiz ET l'écran de correction : tout champ
   oublié disparaît de l'affichage, d'où la recopie explicite de la photo. */
function construireQuestions(bank, chosen) {
  return chosen.map(idx => {
    const src = bank[idx];
    const optOrder = optionOrder(src.options);
    const options = optOrder.map((origIdx, displayIdx) => ({
      ...src.options[origIdx],
      letter: OPTION_LETTERS[displayIdx],
      origIdx
    }));
    return {
      bankIndex: idx,
      q: src.q,
      c: src.c,
      img: src.img,
      imgAlt: src.imgAlt,
      options
    };
  });
}

/* Compte les matières d'un semestre : celles réellement jouables (≥ 1 module) et le total
   déclaré. Une matière annoncée mais sans module compte comme « à venir », jamais comme
   disponible — sans quoi le site promettrait des examens qui n'existent pas encore. */
function countMatieres(semestre) {
  const ms = Object.values((semestre && semestre.matieres) || {});
  return { prets: ms.filter(estPrete).length, total: ms.length };
}

/* Une matière n'est prête que si au moins un de ses modules pointe vers une banque qui existe
   ET contient des questions. Un module déclaré vers une banque absente ne doit jamais faire
   annoncer la matière comme disponible. */
function estPrete(m) {
  return (m.modules || []).some(mod => {
    const b = typeof QUESTIONS !== "undefined" && QUESTIONS[mod.bankKey];
    return Array.isArray(b) && b.length > 0;
  });
}

/* Libellé et état d'une carte à partir de ces deux compteurs. */
function dispoMeta(prets, total, mot) {
  if (total === 0) return { meta: "Bientôt disponible", disabled: true };
  if (prets === 0) return { meta: total + " " + mot + (total > 1 ? "s" : "") + " · bientôt", disabled: false };
  return { meta: prets + " " + mot + (prets > 1 ? "s" : "") + " disponible" + (prets > 1 ? "s" : ""), disabled: false };
}

/* ----------- Navigation system (Cursus → Année → [Programme] → Semestre → Matière → Modules) ----------- */

/* Renvoie l'objet `programmes` d'une année si elle en déclare un (K3 : ancien / nouveau),
   sinon null. C'est ce qui insère — ou non — l'écran de choix du programme. */
function programmesOf(cursusKey, yearKey) {
  const y = CURSUS[cursusKey] && CURSUS[cursusKey].years && CURSUS[cursusKey].years[yearKey];
  return (y && y.programmes && Object.keys(y.programmes).length) ? y.programmes : null;
}

/* Les clés de semestre visibles au niveau courant : celles du programme choisi, ou toutes. */
function visibleSemesterKeys(y, programme) {
  if (y.programmes && programme && y.programmes[programme]) return y.programmes[programme].semesters;
  return Object.keys(y.semesters || {});
}

const NAV_LEVELS = ["cursus", "years", "programmes", "semesters", "matieres", "modules"];

function navigateTo(level, key) {
  if (level === "cursus") {
    // Reset state.nav to initial cursus selection screen
    state.nav = { cursus: null, year: null, programme: null, semester: null, matiere: null, level: "cursus" };
    showScreen("home");
    return;
  }
  if (level === "years") {
    state.nav.cursus = key;
    state.nav.year = state.nav.programme = state.nav.semester = state.nav.matiere = null;
  } else if (level === "programmes") {
    // Niveau intermédiaire : certaines années (K3) proposent d'abord ancien / nouveau programme.
    state.nav.year = key;
    state.nav.programme = state.nav.semester = state.nav.matiere = null;
  } else if (level === "semesters") {
    // `key` est l'année quand on vient du niveau « années », le programme quand on vient
    // du niveau « programmes » (l'année est alors déjà fixée dans state.nav).
    if (programmesOf(state.nav.cursus, state.nav.year) && state.nav.year) state.nav.programme = key;
    else state.nav.year = key;
    state.nav.semester = state.nav.matiere = null;
  } else if (level === "matieres") {
    state.nav.semester = key;
    state.nav.matiere = null;
  } else if (level === "modules") {
    state.nav.matiere = key;
  }
  state.nav.level = level;
  showScreen("nav");
  renderNav();
}

function backNav() {
  const lvl = state.nav.level;
  if (lvl === "years")          navigateTo("cursus");
  else if (lvl === "programmes") navigateTo("years", state.nav.cursus);
  else if (lvl === "semesters") {
    // Revenir au choix du programme si l'année en propose un, sinon à la liste des années.
    if (programmesOf(state.nav.cursus, state.nav.year)) { state.nav.level = "programmes"; state.nav.programme = null; showScreen("nav"); renderNav(); }
    else navigateTo("years", state.nav.cursus);
  }
  else if (lvl === "matieres")  { state.nav.level = "semesters"; state.nav.semester = null; showScreen("nav"); renderNav(); }
  else if (lvl === "modules")   navigateTo("matieres", state.nav.semester);
  else                          showScreen("home");
}

// From quiz/results back to the modules screen of the current matière.
function backFromQuiz() {
  if (state.nav.cursus && state.nav.matiere) {
    state.nav.level = "modules";
    showScreen("nav");
    renderNav();
    return;
  }
  showScreen("home");
}

/* Render the cursus selection grid on the home page. */
function renderCursusList() {
  const root = document.getElementById("cursus-list");
  if (!root) return;
  root.innerHTML = "";
  Object.entries(CURSUS).forEach(([key, c]) => {
    const card = document.createElement("button");
    card.className = "subject-card subject-card-minimal";
    card.style.setProperty("--accent", c.accent);
    card.style.setProperty("--accent-soft", c.accent + "55");
    card.style.setProperty("--accent-glow", c.accent + "33");
    if (!c.available) {
      card.disabled = true;
      card.style.opacity = "0.45";
      card.style.cursor = "not-allowed";
    } else {
      card.dataset.cursus = key;
    }
    card.innerHTML = `
      <span class="subject-card-title">${escapeHtml(c.label)}</span>
      <span class="subject-card-arrow" aria-hidden="true">→</span>
    `;
    root.appendChild(card);
  });
}

/* Render the current navigation level on #screen-nav. */
function renderNav() {
  const { cursus, year, semester, matiere, level } = state.nav;
  const eyebrow = $("#nav-eyebrow");
  const title = $("#nav-title");
  const subtitle = $("#nav-subtitle");
  const list = $("#nav-list");
  const empty = $("#nav-empty");
  const pill = $("#nav-mistakes-pill");
  list.innerHTML = "";
  empty.hidden = true;
  if (pill) pill.hidden = true;

  const c = CURSUS[cursus];
  if (!c) return;

  if (level === "years") {
    eyebrow.textContent = "";
    title.textContent = c.label;
    subtitle.textContent = "";
    list.dataset.layout = "years";
    Object.entries(c.years).forEach(([yk, y], i) => {
      const cy = Object.values(y.semesters || {}).reduce((acc, s) => {
        const c = countMatieres(s); acc.prets += c.prets; acc.total += c.total; return acc;
      }, { prets: 0, total: 0 });
      const dy = dispoMeta(cy.prets, cy.total, "matière");
      const ordinal = (i + 1) === 1 ? "1ère année" : (i + 1) + "ème année";
      list.appendChild(renderNavCard({
        number: String(i + 1).padStart(2, "0"),
        eyebrow: ordinal,
        title: y.label,
        meta: dy.meta,
        disabled: dy.disabled,
        accent: c.accent,
        data: { year: yk, level: y.programmes ? "programmes" : "semesters" }
      }));
    });
  } else if (level === "programmes") {
    const y = c.years[year];
    eyebrow.textContent = "";
    title.textContent = y.label;
    subtitle.textContent = "";
    list.dataset.layout = "programmes";
    Object.entries(y.programmes).forEach(([pk, p], i) => {
      const cp = (p.semesters || []).reduce((acc, sk) => {
        const c2 = countMatieres((y.semesters || {})[sk]); acc.prets += c2.prets; acc.total += c2.total; return acc;
      }, { prets: 0, total: 0 });
      const dp = dispoMeta(cp.prets, cp.total, "matière");
      list.appendChild(renderNavCard({
        number: String(i + 1).padStart(2, "0"),
        eyebrow: c.label.toUpperCase() + " · " + (y.long || y.label),
        title: p.label,
        meta: dp.meta,
        disabled: dp.disabled,
        accent: c.accent,
        data: { programme: pk, level: "semesters" }
      }));
    });
  } else if (level === "semesters") {
    const y = c.years[year];
    eyebrow.textContent = "";
    title.textContent = y.label;
    subtitle.textContent = "";
    list.dataset.layout = "semesters";
    const p = y.programmes && state.nav.programme ? y.programmes[state.nav.programme] : null;
    if (p) { title.textContent = y.label; subtitle.textContent = p.label; }
    visibleSemesterKeys(y, state.nav.programme).map(sk => [sk, (y.semesters || {})[sk]]).filter(([, s]) => s).forEach(([sk, s], i) => {
      const cs = countMatieres(s);
      const ds = dispoMeta(cs.prets, cs.total, "matière");
      list.appendChild(renderNavCard({
        number: String(i + 1).padStart(2, "0"),
        eyebrow: c.label.toUpperCase() + " · " + (y.long || y.label),
        title: s.label,
        meta: ds.meta,
        disabled: ds.disabled,
        accent: c.accent,
        data: { semester: sk, level: "matieres" }
      }));
    });
  } else if (level === "matieres") {
    const y = c.years[year];
    const s = y.semesters[semester];
    eyebrow.textContent = "";
    title.textContent = y.label + " — " + s.label;
    subtitle.textContent = "";
    list.dataset.layout = "matieres";
    const matieres = s.matieres || {};
    const keys = Object.keys(matieres);
    if (keys.length === 0) {
      empty.hidden = false;
      return;
    }
    keys.forEach((mk, i) => {
      const m = matieres[mk];
      // Seuls les modules réellement jouables comptent (cf. estPrete).
      const moduleCount = (m.modules || []).filter(mod => {
        const b = typeof QUESTIONS !== "undefined" && QUESTIONS[mod.bankKey];
        return Array.isArray(b) && b.length > 0;
      }).length;
      list.appendChild(renderNavCard({
        number: String(i + 1).padStart(2, "0"),
        eyebrow: "Matière",
        title: m.label,
        meta: moduleCount > 0 ? moduleCount + " module" + (moduleCount > 1 ? "s" : "") + " · examen" : "Bientôt disponible",
        disabled: moduleCount === 0,
        accent: m.accent || c.accent,
        data: { matiere: mk, level: "modules" }
      }));
    });
  } else if (level === "modules") {
    const y = c.years[year];
    const s = y.semesters[semester];
    const m = s.matieres[matiere];
    eyebrow.textContent = c.label.toUpperCase() + " · " + (y.long || y.label) + " · " + s.label;
    title.textContent = m.label;
    subtitle.textContent = "Choisis un module et le format de la session.";

    // Mistakes pill aggregated over all modules of this matière
    const bankKeys = (m.modules || []).map(mod => mod.bankKey);
    const errorCount = bankKeys.reduce((sum, bk) => sum + (getAllMistakes()[bk] || []).length, 0);
    if (pill) {
      pill.hidden = errorCount === 0;
      $("#nav-mistakes-count").textContent = errorCount;
      pill.dataset.matiereKey = matiere;
    }

    (m.modules || []).forEach(mod => {
      const card = document.createElement("div");
      card.className = "mode-card border-glow";
      const accent = mod.accent || m.accent || c.accent;
      const rgb = hexToRgb(accent);
      const accentRgba = (a) => `rgba(${rgb}, ${a})`;
      card.style.setProperty("--accent", accent);
      card.style.setProperty("--accent-rgb", rgb);
      card.innerHTML = `
        <span class="edge-light" aria-hidden="true"></span>
        <div class="mode-card-inner">
          <div class="mode-card-head">
            <span class="mode-tag" style="background:${accentRgba(0.14)}; color:${accent}; box-shadow: inset 0 0 0 1px ${accentRgba(0.35)};">${escapeHtml(mod.label)}</span>
          </div>
          <h3 class="mode-title">${escapeHtml(mod.label)}</h3>
          <p class="mode-desc">${escapeHtml(mod.desc || ("QCU à " + mod.optionCount + " propositions. Score final ramené sur 10."))}</p>
          ${reviseBlockHtml(mod.bankKey)}
        </div>
      `;
      applyBorderGlow(card, accent);
      list.appendChild(card);
      wireReviseBlock(card, mod.bankKey);
    });
  }
}

function renderNavCard({ number, eyebrow, title, meta, accent, disabled, data }) {
  const card = document.createElement("button");
  card.className = "nav-card";
  if (disabled) card.classList.add("nav-card-disabled");
  card.style.setProperty("--accent", accent);
  const rgb = hexToRgb(accent);
  card.style.setProperty("--accent-rgb", rgb);
  if (disabled) {
    card.disabled = true;
  } else {
    Object.entries(data).forEach(([k, v]) => { card.dataset[k] = v; });
    card.dataset.navClick = "1";
  }
  card.innerHTML = `
    <span class="nav-card-number" aria-hidden="true">${escapeHtml(number || "")}</span>
    <span class="nav-card-body">
      <span class="nav-card-eyebrow">${escapeHtml(eyebrow || "")}</span>
      <span class="nav-card-title">${escapeHtml(title)}</span>
      <span class="nav-card-meta">${escapeHtml(meta || "")}</span>
    </span>
    <span class="nav-card-accent-line" aria-hidden="true"></span>
    <span class="nav-card-arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6"/>
      </svg>
    </span>
  `;
  return card;
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
  return ((n >> 16) & 255) + ", " + ((n >> 8) & 255) + ", " + (n & 255);
}

/* ----------- Mode selection ----------- */
function startMode(mode, length) {
  state.mode = mode;
  const bank = QUESTIONS[mode];
  if (!bank || bank.length === 0) {
    alert("Cette matière est en cours de construction — la banque de questions n'est pas encore disponible.");
    return;
  }
  // With a chapter selection, never ask for more questions than the selection holds.
  const available = availableCount(mode);
  let wanted = length || getQuizLength(mode);
  if (wanted > available) {
    const sel = getChapterSelection(mode);
    if (sel.length) {
      alert("Les chapitres sélectionnés contiennent " + available + " questions. Le quiz en comptera " + available + ".");
    }
    wanted = available;
  }
  if (wanted < 1) { alert("Aucune question ne correspond aux chapitres sélectionnés."); return; }
  state.quizLength = wanted;
  state.points = getPoints(mode);
  state.questions = pickQuestions(mode, state.quizLength);
  /* La sélection peut renvoyer moins de questions que demandé (filtre de chapitres, aperçu) :
     la longueur affichée et le barème doivent suivre, sans quoi le quiz ne se termine jamais. */
  state.quizLength = state.questions.length;
  state.rawMax = state.quizLength * state.points.good;
  state.index = 0;
  state.answers = [];
  state.awaitingNext = false;
  clearActiveSession();
  saveActiveSession();
  const label = $("#quiz-mode-label");
  label.textContent = MODE_LABELS[mode];
  label.dataset.mode = mode;
  applyQuizAccent(mode);
  $("#quiz-total").textContent = state.quizLength;
  $("#score-max").textContent = formatNumber(DISPLAY_MAX);
  try { if (window.__ymTrack) window.__ymTrack("quiz"); } catch (e) {}
  showScreen("quiz");
  renderQuestion();
}

/* Restore a previously saved active session (after refresh or browser close). */
function resumeActiveSession() {
  const s = getActiveSession();
  if (!s) return;
  state.mode = s.mode;
  state.quizLength = s.quizLength;
  state.points = s.points || getPoints(s.mode);
  state.rawMax = s.rawMax || (state.quizLength * state.points.good);
  /* Une session sauvegardée contient les questions telles qu'elles étaient au moment de
     l'enregistrement. On y réinjecte la photo depuis la banque : sans cela, une série
     commencée avant l'ajout des questions illustrées resterait sans image jusqu'à sa fin. */
  const banque = QUESTIONS[s.mode] || [];
  state.questions = (s.questions || []).map(q => {
    const src = banque[q.bankIndex];
    return src ? { ...q, img: src.img, imgAlt: src.imgAlt } : q;
  });
  state.index = Math.min(s.index || 0, state.questions.length - 1);
  state.answers = Array.isArray(s.answers) ? s.answers : [];
  state.awaitingNext = false;
  const resumeLabel = $("#quiz-mode-label");
  resumeLabel.textContent = MODE_LABELS[s.mode];
  resumeLabel.dataset.mode = s.mode;
  applyQuizAccent(s.mode);
  $("#quiz-total").textContent = state.quizLength;
  $("#score-max").textContent = formatNumber(DISPLAY_MAX);
  showScreen("quiz");
  // If we had revealed an answer just before reload, force a "next" state so
  // the user can move forward (we don't re-render the reveal UI fully).
  renderQuestion();
}

function formatNumber(n) {
  // Display 10 / 15 / 7,5 etc. with comma as decimal separator.
  return n.toString().replace(".", ",");
}

/* ----------- Quiz rendering ----------- */
function renderQuestion() {
  const q = state.questions[state.index];
  $("#quiz-current").textContent = state.index + 1;
  $("#progress-fill").style.width = ((state.index + 1) / state.quizLength * 100) + "%";

  $("#question-text").textContent = q.q;

  // Photo de la question, quand il y en a une.
  const figEl = $("#question-figure");
  if (figEl) {
    const imgEl = $("#question-image");
    figEl.hidden = !q.img;
    if (q.img) { imgEl.src = q.img; imgEl.alt = q.imgAlt || ""; }
    else { imgEl.removeAttribute("src"); imgEl.alt = ""; }
  }

  // Chapitre de la question (quand la matière est découpée en chapitres).
  const chapEl = $("#question-chapter");
  if (chapEl) {
    const defs = (typeof CHAPITRES !== "undefined" && CHAPITRES[state.mode]) || null;
    const ids = chapitresDe(q);
    const chs = defs ? ids.map(id => defs.filter(d => d.id === id)[0]).filter(Boolean) : [];
    chapEl.hidden = !chs.length;
    if (chs.length) {
      chapEl.textContent = (chs.length > 1 ? "Chapitres " : "Chapitre ")
        + chs.map(c => c.id + " · " + c.nom).join("  —  ");
    }
  }

  const optsEl = $("#options");
  optsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.dataset.idx = i;
    btn.innerHTML = `
      <span class="option-letter">${opt.letter}</span>
      <span class="option-text">${escapeHtml(opt.t)}</span>
    `;
    btn.addEventListener("click", () => selectAnswer(i));
    optsEl.appendChild(btn);
  });

  $("#btn-skip").hidden = false;
  $("#btn-skip").disabled = false;
  $("#btn-next").hidden = true;
  $("#justifications").hidden = true;
  $("#justifications").innerHTML = "";
  state.awaitingNext = false;
}

function selectAnswer(displayIdx) {
  if (state.awaitingNext) return;
  const q = state.questions[state.index];
  if (displayIdx < 0 || displayIdx >= q.options.length) return;
  const opt = q.options[displayIdx];
  recordAnswer(displayIdx, opt.correct ? "good" : "bad");
  if (!opt.correct) addMistake(state.mode, q.bankIndex, opt.origIdx);
  revealAnswers(displayIdx, false);
}

function skipQuestion() {
  if (state.awaitingNext) return;
  recordAnswer(null, "skip");
  revealAnswers(null, true);
}

function recordAnswer(displayIdx, status) {
  state.answers.push({
    questionIndex: state.index,
    chosenDisplayIdx: displayIdx,
    status
  });
  saveActiveSession();
}

function revealAnswers(chosenIdx, isSkip) {
  const q = state.questions[state.index];
  // Scope the query to the quiz screen — the mistakes review screen also uses
  // .option buttons, so a global selector would pick those up and break.
  const optionEls = document.querySelectorAll("#options .option");

  optionEls.forEach((el, i) => {
    el.disabled = true;
    const opt = q.options[i];
    if (!opt) return;
    if (isSkip) {
      if (opt.correct) el.classList.add("is-correct-not-picked");
    } else {
      if (i === chosenIdx) {
        el.classList.add(opt.correct ? "is-correct" : "is-wrong");
        if (!opt.correct) {
          // also mark the right one
          q.options.forEach((o2, j) => {
            if (o2.correct && optionEls[j]) optionEls[j].classList.add("is-correct-not-picked");
          });
        }
      }
    }
  });

  // Render justifications
  const just = $("#justifications");
  just.innerHTML = "";
  q.options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "justif" + (opt.correct ? " justif-good" : "");
    div.innerHTML = `
      <span class="justif-letter">${opt.letter}</span>
      <div class="justif-body">
        <span class="justif-status ${opt.correct ? "justif-status-good" : "justif-status-bad"}">
          ${opt.correct ? "Correct" : "Incorrect"}
        </span>
        <strong>${escapeHtml(opt.t)}</strong>
        <div class="justif-text">${escapeHtml(opt.j)}</div>
      </div>
    `;
    just.appendChild(div);
  });
  just.hidden = false;

  $("#btn-skip").hidden = true;
  $("#btn-next").hidden = false;
  $("#btn-next").textContent = state.index + 1 === state.quizLength
    ? "VOIR LES RÉSULTATS →"
    : "SUIVANT →";

  state.awaitingNext = true;
  saveActiveSession();
}

function nextQuestion() {
  state.index++;
  if (state.index >= state.quizLength) {
    clearActiveSession();
    showResults();
  } else {
    saveActiveSession();
    renderQuestion();
  }
}

/* ----------- Results ----------- */
function showResults() {
  let good = 0, bad = 0, skip = 0;
  state.answers.forEach(a => {
    if (a.status === "good") good++;
    else if (a.status === "bad") bad++;
    else skip++;
  });
  // Raw points : chaque mauvaise réponse est pénalisée selon SON propre nombre
  // de propositions (−1/(n−1)) — indispensable pour les banques à format mixte
  // (ex. annales dentaires 4 et 5 props). Pour une banque uniforme, le résultat
  // est identique à l'ancien calcul plat.
  let penalty = 0;
  state.answers.forEach(a => {
    if (a.status === "bad") {
      const qq = state.questions[a.questionIndex];
      const nOpt = (qq && qq.options && qq.options.length) || 4;
      penalty += -1 / Math.max(1, nOpt - 1);
    }
  });
  const rawPoints = +(good * state.points.good + penalty).toFixed(2);
  const rawClamped = Math.max(0, rawPoints);
  // Final score is always normalized to DISPLAY_MAX (= 10) regardless of mode length.
  const displayScore = +(rawClamped * DISPLAY_MAX / state.rawMax).toFixed(2);

  $("#stat-good").textContent = good;
  $("#stat-bad").textContent = bad;
  $("#stat-skip").textContent = skip;
  $("#score-number").textContent = formatNumber(displayScore);
  $("#score-max").textContent = formatNumber(DISPLAY_MAX);

  const pill = $("#status-pill");
  if (displayScore >= DISPLAY_PASS) {
    pill.textContent = "VALIDÉ";
    pill.classList.add("is-pass");
    pill.classList.remove("is-fail");
  } else {
    pill.textContent = "JUILLET";
    pill.classList.add("is-fail");
    pill.classList.remove("is-pass");
  }

  const resultsLabel = $("#results-mode-label");
  resultsLabel.textContent = MODE_LABELS[state.mode];
  resultsLabel.dataset.mode = state.mode;

  // Update review button label with the count of errors + skipped questions.
  const reviewBtn = document.querySelector('#screen-results [data-action="review"]');
  if (reviewBtn) {
    const errs = bad + skip;
    reviewBtn.textContent = errs > 0
      ? `Revoir mes erreurs (${errs})`
      : "Revoir mes erreurs";
    reviewBtn.disabled = errs === 0;
    reviewBtn.style.opacity = errs === 0 ? "0.5" : "";
    reviewBtn.style.cursor = errs === 0 ? "not-allowed" : "";
  }

  showScreen("results");
}

/* ----------- Review ----------- */
function showReview() {
  const list = $("#review-list");
  list.innerHTML = "";

  const wrong = state.answers
    .map((a, i) => ({ ...a, n: i + 1 }))
    .filter(a => a.status !== "good");

  if (wrong.length === 0) {
    const empty = document.createElement("div");
    empty.className = "review-item";
    empty.innerHTML = `
      <p class="review-q" style="margin:0;">
        Aucune erreur ni question non répondue. Bravo !
      </p>
    `;
    list.appendChild(empty);
  } else {
    wrong.forEach(a => {
      const q = state.questions[a.questionIndex];
      const correctOpt = q.options.find(o => o.correct);
      const chosenOpt = a.chosenDisplayIdx !== null ? q.options[a.chosenDisplayIdx] : null;

      const item = document.createElement("div");
      item.className = "review-item";
      item.innerHTML = `
        <div class="review-item-head">
          <span class="review-num">Question ${a.n}</span>
          <span class="review-tag ${a.status === "skip" ? "tag-skip" : "tag-bad"}">
            ${a.status === "skip" ? "Non répondue" : "Mauvaise réponse"}
          </span>
        </div>
        <p class="review-q">${escapeHtml(q.q)}</p>
        ${figureHtml(q)}
        <div class="review-answers">
          <div class="review-answer-block">
            <div class="review-answer-label">Ta réponse</div>
            <div class="review-answer-value answer-bad">
              ${chosenOpt ? `${chosenOpt.letter}. ${escapeHtml(chosenOpt.t)}` : "— aucune —"}
            </div>
          </div>
          <div class="review-answer-block">
            <div class="review-answer-label">Bonne réponse</div>
            <div class="review-answer-value answer-good">
              ${correctOpt.letter}. ${escapeHtml(correctOpt.t)}
            </div>
          </div>
        </div>
        <div class="justifications" style="display:flex;">
          ${q.options.map(o => `
            <div class="justif ${o.correct ? "justif-good" : ""}">
              <span class="justif-letter">${o.letter}</span>
              <div class="justif-body">
                <span class="justif-status ${o.correct ? "justif-status-good" : "justif-status-bad"}">
                  ${o.correct ? "Correct" : "Incorrect"}
                </span>
                <strong>${escapeHtml(o.t)}</strong>
                <div class="justif-text">${escapeHtml(o.j)}</div>
              </div>
            </div>
          `).join("")}
        </div>
      `;
      list.appendChild(item);
    });
  }

  showScreen("review");
}

/* ----------- Persistent mistakes review ----------- */
function openMistakesViewForBanks(bankKeys, matiereKey) {
  const all = getAllMistakes();
  const list = [];
  bankKeys.forEach(mode => {
    (all[mode] || []).forEach(m => list.push({ mode, ...m }));
  });
  list.sort((a, b) => b.ts - a.ts);
  if (list.length === 0) return;
  state.mistakesView = { matiereKey, bankKeys, list, index: 0 };
  showScreen("mistakes");
  renderMistake();
}

function renderMistake() {
  const mv = state.mistakesView;
  const card = $("#mistakes-card");
  const empty = $("#mistakes-empty");
  const actions = document.querySelector(".mistakes-actions");

  if (!mv || mv.list.length === 0) {
    card.innerHTML = "";
    if (empty) empty.hidden = false;
    if (actions) actions.style.display = "none";
    $("#mistakes-current").textContent = "0";
    $("#mistakes-total").textContent = "0";
    return;
  }
  if (empty) empty.hidden = true;
  if (actions) actions.style.display = "";

  if (mv.index < 0) mv.index = 0;
  if (mv.index >= mv.list.length) mv.index = mv.list.length - 1;

  const m = mv.list[mv.index];
  const bank = QUESTIONS[m.mode] || [];
  const q = bank[m.bankIdx];
  if (!q) {
    // Stored question no longer exists — drop it and re-render.
    removeMistake(m.mode, m.bankIdx);
    mv.list.splice(mv.index, 1);
    renderMistake();
    /* updated automatically by renderNav */
    return;
  }

  $("#mistakes-current").textContent = mv.index + 1;
  $("#mistakes-total").textContent = mv.list.length;

  // Ordre d'affichage mélangé pour que la position d'une lettre ne soit pas un indice — sauf si
  // une proposition renvoie à des lettres, auquel cas l'ordre de l'annale est conservé.
  const n = q.options.length;
  const order = optionOrder(q.options);
  mv.currentOrder = order;
  mv.currentQ = q;
  mv.currentMode = m.mode;
  mv.currentBankIdx = m.bankIdx;
  mv.phase = "idle";

  const optionsHtml = order.map((origIdx, displayIdx) => {
    const opt = q.options[origIdx];
    return `
      <button type="button" class="option" data-origidx="${origIdx}">
        <span class="option-letter">${OPTION_LETTERS[displayIdx]}</span>
        <span class="option-text">${escapeHtml(opt.t)}</span>
      </button>
    `;
  }).join("");

  card.innerHTML = `
    <p class="mistakes-mode-label" data-mode="${escapeHtml(m.mode)}">${escapeHtml(MODE_LABELS[m.mode] || m.mode)}</p>
    <p class="mistakes-question">${escapeHtml(q.q)}</p>
    ${figureHtml(q)}
    <div class="options" id="mistakes-options">${optionsHtml}</div>
    <div id="mistakes-feedback" hidden></div>
  `;

  // Wire up the option clicks
  card.querySelectorAll("#mistakes-options .option").forEach(btn => {
    btn.addEventListener("click", () => {
      const origIdx = parseInt(btn.dataset.origidx, 10);
      handleMistakeAnswer(origIdx);
    });
  });

  $("#btn-mistake-prev").disabled = mv.index === 0;
  // Disable "Suivante" until user has answered this re-attempt
  $("#btn-mistake-next").disabled = true;
}

function handleMistakeAnswer(chosenOrigIdx) {
  const mv = state.mistakesView;
  if (!mv || mv.phase !== "idle") return;
  const q = mv.currentQ;
  const opt = q.options[chosenOrigIdx];
  const correct = !!opt.correct;
  mv.phase = "revealed";

  // Mark buttons visually
  const card = $("#mistakes-card");
  card.querySelectorAll("#mistakes-options .option").forEach(btn => {
    btn.disabled = true;
    const oi = parseInt(btn.dataset.origidx, 10);
    if (oi === chosenOrigIdx) {
      btn.classList.add(correct ? "is-correct" : "is-wrong");
    } else if (q.options[oi].correct) {
      btn.classList.add("is-correct-not-picked");
    }
  });

  const fb = $("#mistakes-feedback");
  const statusHtml = correct
    ? `<div class="mistakes-result mistakes-result-good">✓ Bonne réponse — question retirée de tes erreurs</div>`
    : `<div class="mistakes-result mistakes-result-bad">✗ Mauvaise réponse — la question reste dans ta liste</div>`;

  const justifsHtml = `
    <div class="justifications" style="display:flex;">
      ${q.options.map((o, i) => `
        <div class="justif ${o.correct ? "justif-good" : ""}">
          <span class="justif-letter">${OPTION_LETTERS[mv.currentOrder.indexOf(i)]}</span>
          <div class="justif-body">
            <span class="justif-status ${o.correct ? "justif-status-good" : "justif-status-bad"}">
              ${o.correct ? "Correct" : "Incorrect"}
            </span>
            <strong>${escapeHtml(o.t)}</strong>
            <div class="justif-text">${escapeHtml(o.j)}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
  fb.innerHTML = statusHtml + justifsHtml;
  fb.hidden = false;

  // If correct → remove from archive immediately AND from in-memory list
  if (correct) {
    removeMistake(mv.currentMode, mv.currentBankIdx);
    mv.list.splice(mv.index, 1);
    // Keep index pointing at the same slot so the next item slides in
    /* updated automatically by renderNav */
    $("#mistakes-total").textContent = mv.list.length;
  }

  // Enable Suivante to move to next mistake
  $("#btn-mistake-next").disabled = false;
  // Also offer to navigate previous if not at the start
  $("#btn-mistake-prev").disabled = mv.index === 0;
}

function navigateMistake(delta) {
  const mv = state.mistakesView;
  if (!mv) return;
  if (delta > 0) {
    // Suivante : if current answered correctly, the item was already spliced — stay on index
    // Otherwise advance.
    if (mv.phase === "revealed" && mv.list[mv.index] && mv.list[mv.index].bankIdx === mv.currentBankIdx) {
      // Wrong attempt — current item still in list, advance
      mv.index++;
    }
    // If we ran past the end, the next render will hit the empty state
  } else {
    mv.index += delta;
  }
  renderMistake();
}

function backFromMistakes() {
  state.mistakesView = null;
  // Return to the modules screen of the current matière if there is one,
  // otherwise back to the home page.
  if (state.nav && state.nav.cursus && state.nav.matiere) {
    state.nav.level = "modules";
    showScreen("nav");
    renderNav();
    return;
  }
  showScreen("home");
}

/* ----------- Restart same mode ----------- */
function restart() {
  if (!state.mode) { showScreen("home"); return; }
  // Preserve the length the user chose for the previous session (20 or 30).
  startMode(state.mode, state.quizLength);
}

/* ----------- HTML escape ----------- */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ----------- Event wiring (event delegation) ----------- */
document.addEventListener("click", (e) => {
  // Hierarchical navigation buttons (cursus → year → semester → matière → modules)
  const navBtn = e.target.closest("[data-nav-click]");
  if (navBtn) {
    e.preventDefault();
    const d = navBtn.dataset;
    if (d.level === "programmes") navigateTo("programmes", d.year);
    else if (d.level === "semesters") navigateTo("semesters", d.programme || d.year);
    else if (d.level === "matieres") navigateTo("matieres", d.semester);
    else if (d.level === "modules") navigateTo("modules", d.matiere);
    return;
  }
  // Cursus cards on the home page
  const cursusBtn = e.target.closest("[data-cursus]");
  if (cursusBtn && !cursusBtn.disabled) {
    e.preventDefault();
    navigateTo("years", cursusBtn.dataset.cursus);
    return;
  }

  // Format buttons on the modules screen (20/30/40 QCU)
  const lengthBtn = e.target.closest("[data-bank-key][data-length]");
  if (lengthBtn) {
    e.preventDefault();
    const len = parseInt(lengthBtn.dataset.length, 10);
    startMode(lengthBtn.dataset.bankKey, Number.isFinite(len) ? len : undefined);
    return;
  }

  // "Mes erreurs" pill on the modules screen
  const navMistakesPill = e.target.closest("#nav-mistakes-pill");
  if (navMistakesPill && !navMistakesPill.hidden) {
    e.preventDefault();
    const c = CURSUS[state.nav.cursus];
    const y = c && c.years && c.years[state.nav.year];
    const s = y && y.semesters && y.semesters[state.nav.semester];
    const m = s && s.matieres && s.matieres[state.nav.matiere];
    const bankKeys = ((m && m.modules) || []).map(mod => mod.bankKey);
    openMistakesViewForBanks(bankKeys, state.nav.matiere);
    return;
  }

  const actionBtn = e.target.closest("[data-action]");
  if (actionBtn) {
    e.preventDefault();
    const action = actionBtn.dataset.action;
    if (action === "home") showScreen("home");
    else if (action === "back-nav") backNav();
    else if (action === "back-to-subject") backFromQuiz();
    else if (action === "quit-to-years") navigateTo("years", state.nav.cursus || Object.keys(CURSUS)[0]);
    else if (action === "back-from-mistakes") backFromMistakes();
    else if (action === "results") showScreen("results");
    else if (action === "restart") restart();
    else if (action === "review") showReview();
    else if (action === "resume-continue") resumeActiveSession();
    else if (action === "resume-discard") { clearActiveSession(); updateResumeBanner(); }
    return;
  }

  if (e.target.closest("#btn-skip")) {
    e.preventDefault();
    skipQuestion();
    return;
  }
  if (e.target.closest("#btn-next")) {
    e.preventDefault();
    nextQuestion();
    return;
  }
  if (e.target.closest("#btn-mistake-prev")) {
    e.preventDefault();
    navigateMistake(-1);
    return;
  }
  if (e.target.closest("#btn-mistake-next")) {
    e.preventDefault();
    navigateMistake(1);
    return;
  }
});

document.addEventListener("keydown", (e) => {
  if (!screens.quiz || !screens.quiz.classList.contains("active")) return;
  const key = e.key.toLowerCase();
  if (state.awaitingNext) {
    if (key === "enter" || key === " ") {
      e.preventDefault();
      nextQuestion();
    }
    return;
  }
  if (key === "a" || key === "1") selectAnswer(0);
  else if (key === "b" || key === "2") selectAnswer(1);
  else if (key === "c" || key === "3") selectAnswer(2);
  else if (key === "d" || key === "4") selectAnswer(3);
  else if (key === "n" || key === "0") skipQuestion();
});


/* ----------- Resume banner (active session indicator) ----------- */
function updateResumeBanner() {
  const banner = document.getElementById("resume-banner");
  if (!banner) return;
  const s = getActiveSession();
  if (!s) { banner.hidden = true; banner.removeAttribute("data-mode"); return; }
  banner.hidden = false;
  banner.dataset.mode = s.mode;
  const detail = document.getElementById("resume-banner-detail");
  if (detail) {
    const total = s.questions.length;
    const current = Math.min(s.index + 1, total);
    detail.textContent = `${MODE_LABELS[s.mode] || s.mode} — Question ${current} / ${total}`;
  }
}

/* ----------- Init ----------- */
renderCursusList();
updateResumeBanner();
