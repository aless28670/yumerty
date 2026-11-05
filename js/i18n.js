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
  fr: { code: "fr", nom: "Français", abbr: "FR", pret: true },
  es: { code: "es", nom: "Español", abbr: "ES", pret: true },
  /* Anglais ouvert le 03/11/2026 : interface, matières, chapitres et les 16 062 QCU.
     Tant qu'une langue a « pret » à faux, aucun bouton n'apparaît et elle reste
     inatteignable, même par une préférence enregistrée. */
  en: { code: "en", nom: "English", abbr: "EN", pret: true },
};

/* Les seules langues proposées à l'écran. */
function languesPretes() {
  return Object.values(LANGUES).filter(l => l.pret);
}

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
    "Masquer le chronomètre": "Ocultar el cronómetro",
    "Afficher le chronomètre": "Mostrar el cronómetro",
    "Durée en minutes": "Duración en minutos",
    "min": "min",
    "Impossible à arrêter une fois la série lancée.": "No se puede detener una vez iniciada la serie.",
    "Temps écoulé : les questions restantes comptent comme non répondues.":
      "Tiempo agotado: las preguntas restantes cuentan como no respondidas.",
    "Tout le programme": "Todo el temario",
    "Personnaliser": "Personalizar",
    "← Changer ce que je révise": "← Cambiar lo que repaso",
    "Ta réponse": "Tu respuesta",
    "Bonne réponse": "Respuesta correcta",
    "Correct": "Correcta",
    "Incorrect": "Incorrecta",
    "Choisis tes chapitres": "Elige tus temas",
    "Réviser une partie d'examen :": "Repasar una parte del examen:",
    "Choisis ce que tu as révisé. Sans sélection, les questions sont tirées dans tout le programme, comme à l'examen.": "Elige lo que has repasado. Sin selección, las preguntas se sacan de todo el temario, como en el examen.",
    "Effacer ma sélection — revenir à tout le programme": "Borrar mi selección — volver a todo el temario",
    "— aucune —": "— ninguna —",
    "Cette matière est en cours de construction — la banque de questions n'est pas encore disponible.": "Esta asignatura está en construcción: el banco de preguntas todavía no está disponible.",
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

    /* ---------- Onglet du navigateur et partage ---------- */
    "Yumerty — QCU corrigés et justifiés pour étudiants en kinésithérapie":
      "Yumerty — Preguntas tipo test corregidas y justificadas para estudiantes de Fisioterapia",
    "Yumerty — QCU médicaux": "Yumerty — Preguntas médicas tipo test",
    "Yumerty : plus de 16 000 QCU corrigés et justifiés pour les étudiants en kinésithérapie, de la K1 à la K4. Plus de 30 matières et 450 chapitres, révision chapitre par chapitre et entraînement en conditions d'examen avec barème réaliste.":
      "Yumerty: más de 16 000 preguntas tipo test corregidas y justificadas para estudiantes de Fisioterapia, de K1 a K4. Más de 30 asignaturas y 450 temas, repaso tema por tema y entrenamiento en condiciones de examen con un baremo realista.",
    "Plus de 16 000 QCU corrigés et justifiés pour les étudiants en kinésithérapie. Révise chapitre par chapitre, en conditions réelles.":
      "Más de 16 000 preguntas tipo test corregidas y justificadas para estudiantes de Fisioterapia. Repasa tema por tema, en condiciones reales.",
    "Plus de 16 000 QCU corrigés et justifiés pour les étudiants en kinésithérapie.":
      "Más de 16 000 preguntas tipo test corregidas y justificadas para estudiantes de Fisioterapia.",
    "QCU kinésithérapie, révision kiné, QCU corrigés, annales kiné, entraînement examen, K1 K2 K3 K4, physiothérapie, QCU justifiés":
      "test fisioterapia, repaso fisioterapia, preguntas corregidas, exámenes de otros años, entrenamiento examen, K1 K2 K3 K4, fisioterapia, preguntas justificadas",

    /* ---------- Libellés lus par les lecteurs d'écran ---------- */
    "Fermer": "Cerrar",
    "Langue du site": "Idioma del sitio",

    /* ---------- Accueil : phrases assemblées avec les chiffres du site ----------
       {n}, {cursus}, {plage}, {a} et {b} sont remplacés après traduction. */
    "{n} QCU corrigés, un entraînement réaliste et un suivi de tes erreurs pour progresser plus vite.":
      "{n} preguntas corregidas, un entrenamiento realista y un seguimiento de tus fallos para progresar más rápido.",
    "{n} chapitres": "{n} temas",
    "{cursus}, {plage} : sélectionne ce que tu veux travailler.":
      "{cursus}, {plage}: selecciona lo que quieras trabajar.",
    "de la {a} à la {b}": "de {a} a {b}",
    /* repli si le script ne tourne pas : les versions figées du HTML */
    "Des QCU corrigés, un entraînement réaliste et un suivi de tes erreurs pour progresser plus vite.":
      "Preguntas corregidas, un entrenamiento realista y un seguimiento de tus fallos para progresar más rápido.",
    "Les chapitres": "Los temas",
  },

  en: {
    "Session interrompue": "Session interrupted",
    "Démarrer une nouvelle": "Start a new one",
    "Reprendre →": "Resume →",
    "Révise tes matières,": "Revise your subjects,",
    "en condition d'examen": "under exam conditions",
    "Prépare tes examens sur des QCU corrigés et justifiés.": "Prepare for your exams with corrected, fully explained MCQs.",
    "Type de QCU": "Question type",
    "Bonne": "Correct",
    "Mauvaise": "Wrong",
    "Sans réponse": "Unanswered",
    "3 propositions": "3 options",
    "4 propositions": "4 options",
    "Note finale toujours ramenée sur 10.": "Final mark always scaled to 10.",
    "Choisis ton cursus": "Choose your degree",
    "Kinésithérapie": "Physiotherapy",
    "Dentaire": "Dentistry",
    "Bientôt disponible": "Coming soon",
    "QCU corrigés et justifiés": "corrected, explained MCQs",
    "matières disponibles": "subjects available",
    "chapitres de cours": "course topics",
    "note d'examen": "exam mark",
    "Ce que propose Yumerty": "What Yumerty offers",
    "Tout pour réviser efficacement.": "Everything you need to revise effectively.",
    "Corrigés et justifiés": "Corrected and explained",
    "Chaque proposition est expliquée. Tu sais pourquoi elle est vraie ou fausse.": "Every option is explained. You know why it is right or wrong.",
    "Conditions d'examen": "Exam conditions",
    "Un barème réaliste qui pénalise les erreurs et récompense la prudence. Note sur 10.": "Realistic marking that penalises mistakes and rewards caution. Mark out of 10.",
    "Fidèle aux annales": "True to past papers",
    "Des questions dans le style des vrais examens, avec des choix crédibles.": "Questions in the style of real exams, with plausible options.",
    "Suivi des erreurs": "Mistake tracking",
    "Les questions ratées reviennent jusqu'à ce que tu les maîtrises.": "Questions you get wrong come back until you master them.",
    "Tirage intelligent": "Smart selection",
    "Tu vois en priorité les questions que tu n'as pas encore travaillées.": "You see the questions you haven't worked on yet first.",
    "Révision par chapitre": "Revision by topic",
    "Coche un chapitre, plusieurs, ou lance la matière entière.": "Tick one topic, several, or run the whole subject.",
    "suivent le découpage de tes cours.": "follow the structure of your course.",
    "Comment ça marche": "How it works",
    "Réviser en quatre étapes.": "Revise in four steps.",
    "Choisis ta matière": "Choose your subject",
    "Sélectionne ce que tu veux travailler.": "Select what you want to work on.",
    "Lance une série": "Start a set",
    "20, 30 ou 40 QCU selon ton temps.": "20, 30 or 40 MCQs, depending on your time.",
    "Réponds": "Answer",
    "Une bonne réponse par question, puis la justification.": "One correct answer per question, then the explanation.",
    "Revois tes erreurs": "Review your mistakes",
    "Rejoue les questions ratées jusqu'à les effacer.": "Replay the questions you got wrong until they are cleared.",
    "Prêt à réviser ?": "Ready to revise?",
    "Choisis ton cursus et lance ta première série.": "Choose your degree and start your first set.",
    "Commencer →": "Get started →",
    "QCU médicaux corrigés et justifiés.": "Corrected, explained medical MCQs.",
    "← Retour": "← Back",
    "Mes erreurs": "My mistakes",
    "Aucune matière disponible pour cette section pour l'instant. De nouvelles matières seront ajoutées progressivement.": "No subjects are available in this section yet. New subjects will be added gradually.",
    "Matière": "Subject",
    "matière": "subject",
    "matières": "subjects",
    "Toute la matière": "Whole subject",
    "Chapitres au choix": "Choose topics",
    "Choisis un module et le format de la session.": "Choose a module and the session format.",
    "Cette matière est en cours de construction — la banque de questions n'est pas encore remplie.": "This subject is under construction — its question bank is not filled yet.",
    "Examen mi-terme": "Midterm exam",
    "Examen final": "Final exam",
    "Examen de gestion": "Management exam",
    "Examen": "Exam",
    "Mid": "Midterm",
    "Final": "Final",
    "module": "module",
    "modules": "modules",
    "Chapitre": "Topic",
    "Chapitres": "Topics",
    "chapitre": "topic",
    "chapitres": "topics",
    "chapitre choisi": "topic selected",
    "chapitres choisis": "topics selected",
    "Les chapitres sélectionnés contiennent": "The selected topics contain",
    "questions. Le quiz en comptera": "questions. The quiz will include",
    "Aucune question ne correspond aux chapitres sélectionnés.": "No questions match the selected topics.",
    "← Quitter": "← Quit",
    "Ne pas répondre": "Skip",
    "SUIVANT →": "NEXT →",
    "VOIR LES RÉSULTATS →": "SEE RESULTS →",
    "Question": "Question",
    "propositions": "options",
    "Une mauvaise réponse retire": "Each wrong answer deducts",
    "point. Score ramené sur 10.": "point. Score scaled to 10.",
    "Signaler une erreur": "Report an error",
    "Qu'est-ce qui te paraît faux ?": "What looks wrong to you?",
    "(facultatif)": "(optional)",
    "Annuler": "Cancel",
    "Envoyer le signalement": "Send report",
    "Ton signalement est anonyme. La question va être revue, réétudiée et corrigée s'il y a bien une erreur.": "Your report is anonymous. The question will be reviewed, re-examined and corrected if there really is an error.",
    "Merci, c'est noté. La question sera relue.": "Thanks, noted. The question will be reviewed.",
    "Par exemple : la proposition B me paraît juste aussi, ou la justification contredit le cours.": "For example: option B also looks correct to me, or the explanation contradicts the course.",
    "Quiz terminé": "Quiz complete",
    "VALIDÉ": "PASSED",
    "JUILLET": "RESIT",
    "Bonnes": "Correct",
    "Mauvaises": "Wrong",
    "Non répondues": "Unanswered",
    "Nouvelle série": "New set",
    "Revoir mes erreurs": "Review my mistakes",
    "Retour au menu": "Back to menu",
    "Retour aux résultats": "Back to results",
    "← Retour aux résultats": "← Back to results",
    "Quitter": "Quit",
    "Accueil": "Home",
    "Re-réponds à chaque question. Si tu trouves la bonne réponse cette fois-ci, elle sera retirée automatiquement.": "Answer each question again. If you get it right this time, it will be removed automatically.",
    "← Précédente": "← Previous",
    "Suivante →": "Next →",
    "Plus aucune erreur en attente. Bravo !": "No mistakes left to review. Well done!",
    "Tes erreurs": "Your mistakes",
    "Revois les questions ratées ou non répondues, avec leurs justifications complètes.": "Review the questions you got wrong or left unanswered, with their full explanations.",
    "Non répondue": "Unanswered",
    "Mauvaise réponse": "Wrong answer",
    "✓ Bonne réponse — question retirée de tes erreurs": "✓ Correct — question removed from your mistakes",
    "✗ Mauvaise réponse — la question reste dans ta liste": "✗ Wrong — the question stays in your list",
    "Que veux-tu réviser ?": "What do you want to revise?",
    "Chronomètre": "Timer",
    "Masquer le chronomètre": "Hide timer",
    "Afficher le chronomètre": "Show timer",
    "Durée en minutes": "Duration in minutes",
    "min": "min",
    "Impossible à arrêter une fois la série lancée.": "Cannot be stopped once the set has started.",
    "Temps écoulé : les questions restantes comptent comme non répondues.": "Time's up: the remaining questions count as unanswered.",
    "Tout le programme": "Whole syllabus",
    "Personnaliser": "Customise",
    "← Changer ce que je révise": "← Change what I'm revising",
    "Ta réponse": "Your answer",
    "Bonne réponse": "Correct answer",
    "Semestre": "Semester",
    "à": "to",
    "bientôt": "soon",
    "Programme": "Curriculum",
    "Ancien programme": "Previous curriculum",
    "Nouveau programme": "New curriculum",
    "année": "year",
    "examen": "exam",
    "disponible": "available",
    "disponibles": "available",
    "1ʳᵉ année": "1st year",
    "2ᵉ année": "2nd year",
    "3ᵉ année": "3rd year",
    "4ᵉ année": "4th year",
    "5ᵉ année": "5th year",
    "1ère année": "1st year",
    "2ème année": "2nd year",
    "3ème année": "3rd year",
    "4ème année": "4th year",
    "5ème année": "5th year",
    "Yumerty — QCU corrigés et justifiés pour étudiants en kinésithérapie": "Yumerty — Corrected, explained MCQs for physiotherapy students",
    "Yumerty — QCU médicaux": "Yumerty — Medical MCQs",
    "Yumerty : plus de 16 000 QCU corrigés et justifiés pour les étudiants en kinésithérapie, de la K1 à la K4. Plus de 30 matières et 450 chapitres, révision chapitre par chapitre et entraînement en conditions d'examen avec barème réaliste.": "Yumerty: over 16,000 corrected, explained MCQs for physiotherapy students, from K1 to K4. Over 30 subjects and 450 topics, topic-by-topic revision and practice under exam conditions with realistic marking.",
    "Plus de 16 000 QCU corrigés et justifiés pour les étudiants en kinésithérapie. Révise chapitre par chapitre, en conditions réelles.": "Over 16,000 corrected, explained MCQs for physiotherapy students. Revise topic by topic, under real conditions.",
    "Plus de 16 000 QCU corrigés et justifiés pour les étudiants en kinésithérapie.": "Over 16,000 corrected, explained MCQs for physiotherapy students.",
    "QCU kinésithérapie, révision kiné, QCU corrigés, annales kiné, entraînement examen, K1 K2 K3 K4, physiothérapie, QCU justifiés": "physiotherapy MCQ, physiotherapy revision, corrected MCQs, physiotherapy past papers, exam practice, K1 K2 K3 K4, physical therapy, explained MCQs",
    "Fermer": "Close",
    "Langue du site": "Site language",
    "{n} QCU corrigés, un entraînement réaliste et un suivi de tes erreurs pour progresser plus vite.": "{n} corrected MCQs, realistic practice and mistake tracking to help you progress faster.",
    "{n} chapitres": "{n} topics",
    "{cursus}, {plage} : sélectionne ce que tu veux travailler.": "{cursus}, {plage}: select what you want to work on.",
    "de la {a} à la {b}": "from {a} to {b}",
    "Des QCU corrigés, un entraînement réaliste et un suivi de tes erreurs pour progresser plus vite.": "Corrected MCQs, realistic practice and mistake tracking to help you progress faster.",
    "Les chapitres": "Topics",
    "Choisis tes chapitres": "Choose your topics",
    "Réviser une partie d'examen :": "Revise one part of the exam:",
    "Choisis ce que tu as révisé. Sans sélection, les questions sont tirées dans tout le programme, comme à l'examen.": "Choose what you have revised. With no selection, questions are drawn from the whole syllabus, as in the exam.",
    "Effacer ma sélection — revenir à tout le programme": "Clear my selection — back to the whole syllabus",
    "— aucune —": "— none —",
    "Cette matière est en cours de construction — la banque de questions n'est pas encore disponible.": "This subject is under construction — its question bank is not available yet."
  },
};

/* ---------------------------------------------------------
   Mécanique
   --------------------------------------------------------- */
const CLE_LANGUE = "yumerty_langue";

/* Tant que la traduction n'est pas complète (interface, matières, chapitres ET la
   totalité des QCU), le site ne propose qu'une langue : afficher un choix mènerait à
   un site à moitié traduit. Le français et l'espagnol étant complets — interface,
   matières, chapitres et les 16 050 QCU — le choix est ouvert depuis le 28/10/2026.
   Seules les langues marquées « pret » dans LANGUES apparaissent. */
const LANGUES_OUVERTES = true;

function langueActuelle() {
  if (!LANGUES_OUVERTES) return "fr";
  try {
    const l = localStorage.getItem(CLE_LANGUE);
    if (l && LANGUES[l] && LANGUES[l].pret) return l;
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
  /* Attributs porteurs de texte : le promeneur ci-dessus ne voit que les nœuds de
     texte. « title » s'affiche à la souris, « aria-label » et « aria-placeholder »
     sont lus par les lecteurs d'écran : tout cela doit suivre la langue choisie. */
  ["placeholder", "title", "aria-label", "aria-placeholder"].forEach(attr => {
    document.querySelectorAll("[" + attr + "]").forEach(el => {
      const v = normaliser(el.getAttribute(attr));
      if (table[v] !== undefined) el.setAttribute(attr, table[v]);
    });
  });

  /* Onglet du navigateur et métadonnées de partage : hors du <body>, donc jamais
     atteints par le promeneur. Le titre est visible, le reste sert aux aperçus. */
  const titre = normaliser(document.title);
  if (table[titre] !== undefined) document.title = table[titre];
  [
    'meta[name="description"]',
    'meta[name="keywords"]',
    'meta[property="og:title"]',
    'meta[property="og:description"]',
    'meta[name="twitter:title"]',
    'meta[name="twitter:description"]',
  ].forEach(sel => {
    const m = document.querySelector(sel);
    if (!m) return;
    const v = normaliser(m.getAttribute("content"));
    if (table[v] !== undefined) m.setAttribute("content", table[v]);
  });

  document.documentElement.setAttribute("lang", l);
}

/* Alias : dans app.js, une fonction locale emploie déjà « t » comme nom de variable. */
function traduire(x) { return t(x); }

function changerLangue(l) {
  if (!LANGUES_OUVERTES) return;
  if (!LANGUES[l] || !LANGUES[l].pret) return;
  try { localStorage.setItem(CLE_LANGUE, l); } catch (e) {}
  location.reload();   // le plus sûr : tout l'écran est reconstruit dans la langue choisie
}

function renderSelecteurLangue() {
  const hote = document.getElementById("selecteur-langue");
  if (!hote) return;
  if (!LANGUES_OUVERTES) { hote.hidden = true; hote.innerHTML = ""; return; }
  const courante = langueActuelle();
  hote.innerHTML = languesPretes().map(l =>
    `<button type="button" class="lang-btn${l.code === courante ? " is-active" : ""}"
             data-langue="${l.code}" lang="${l.code}"
             aria-label="${l.nom}"${l.code === courante ? ' aria-current="true"' : ""}>${l.abbr}</button>`
  ).join("");
}

document.addEventListener("click", e => {
  const b = e.target.closest("[data-langue]");
  if (b) { e.preventDefault(); changerLangue(b.dataset.langue); }
});

/* Nombre de tentatives de chargement d'un fichier de traduction avant d'abandonner.
   Un fichier réellement absent renvoie un 404 — qui déclenche lui aussi « onerror » —
   donc on ne peut pas réessayer indéfiniment. */
const ESSAIS_MAX = 3;

/* Les noms de matières et de chapitres (709 entrées) vivent dans un fichier à part,
   chargé uniquement si la langue n'est pas le français : inutile d'imposer ce poids
   aux francophones. Une fois chargé, on vide le cache et on retraduit. */
(function chargerStructure() {
  const l = langueActuelle();
  if (l === "fr") return;
  let essai = 0;
  const tenter = () => {
    essai += 1;
    const s = document.createElement("script");
    s.src = "translations/" + l + "-structure.js?v=1" + (essai > 1 ? "&r=" + essai : "");
    s.async = true;
    s.onload = () => {
      TABLE_NORM = null;
      /* L'accueil assemble « Fisioterapia, de K1 a K4 … » avec le nom du cursus, qui
         vit dans ce fichier : on le reconstruit, sinon la phrase resterait mi-française. */
      if (typeof renderHomeStats === "function") renderHomeStats();
      appliquerTraductions();
    };
    /* Un réseau mobile qui décroche une seconde laissait les noms de matières et de
       chapitres en français pour toute la session. On réessaie avant d'abandonner ;
       après trois tentatives le site reste lisible en français, pas d'écran cassé. */
    s.onerror = () => {
      s.remove();
      if (essai < ESSAIS_MAX) setTimeout(tenter, essai * 600);
    };
    (document.head || document.documentElement).appendChild(s);
  };
  tenter();
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
    /* Certains éléments changent en permanence sans jamais rien avoir à traduire : le
       compte à rebours du quiz réécrit ses chiffres chaque seconde. Les retenir ici évite
       de reparcourir tout le document pour rien. */
    const aIgnorer = n => {
      for (let e = n; e; e = e.parentNode) {
        if (e.nodeType === 1 && e.hasAttribute("data-i18n-ignore")) return true;
      }
      return false;
    };
    new MutationObserver(mutations => {
      if (enCours) return;
      if (mutations.every(m => aIgnorer(m.target))) return;
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
      let essai = 0;
      const tenter = () => {
        essai += 1;
        const s = document.createElement("script");
        s.src = "translations/qcu/" + l + "/" + b + ".js?v=1" + (essai > 1 ? "&r=" + essai : "");
        s.async = true;
        s.onload = () => { QCU_ETAT[b] = "charge"; resolve(); };
        /* Un échec réseau n'est pas une banque non traduite : on réessaie, sinon une
           coupure d'une seconde servait tout le quiz en français jusqu'à la fin de la
           session. Au bout de ESSAIS_MAX on marque quand même la banque « charge » —
           une banque réellement absente renvoie un 404, et « startMode » se rappelle
           lui-même tant que la banque n'est pas prête : sans cela, boucle infinie. */
        s.onerror = () => {
          s.remove();
          if (essai < ESSAIS_MAX) { setTimeout(tenter, essai * 600); return; }
          QCU_ETAT[b] = "charge";
          resolve();
        };
        (document.head || document.documentElement).appendChild(s);
      };
      tenter();
    });
    QCU_ETAT[b] = p;
    return p;
  })).then(() => { TABLE_NORM = null; });
}

window.QCU_T = QCU_T;
window.qcuPret = qcuPret;
window.chargerQcu = chargerQcu;
