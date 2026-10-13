/* =========================================================
   YUMERTY — Chapitres par matière
   Permet de filtrer les QCU par chapitre de cours.
   Chaque question de data.js porte un champ "c" = id du chapitre.
   ========================================================= */

const CHAPITRES = {
  "anat1": [
    {"id": 1, "nom": "Ostéoarthrologie du tronc"},
    {"id": 2, "nom": "Les os du crâne"},
    {"id": 3, "nom": "Myologie du dos et de la région sous-occipitale"},
    {"id": 4, "nom": "Myologie de la région antérieure et latérale du cou"},
    {"id": 5, "nom": "ATM, muscles de la mastication et de la mimique"},
    {"id": 6, "nom": "Muscles de la cage thoracique"},
    {"id": 7, "nom": "Muscles de la paroi abdominale"},
    {"id": 8, "nom": "Muscles du plancher pelvien"},
    {"id": 9, "nom": "Articulation de la hanche"},
    {"id": 10, "nom": "Muscles de la hanche"},
    {"id": 11, "nom": "Articulation du genou"},
    {"id": 12, "nom": "Muscles de la cuisse"},
    {"id": 13, "nom": "Ostéoarthrologie du pied et de la cheville"},
    {"id": 14, "nom": "Muscles de la jambe"},
    {"id": 15, "nom": "Muscles du pied"}
  ],
  "anat2": [
    {"id": 1, "nom": "Ostéoarthrologie de la ceinture scapulaire"},
    {"id": 2, "nom": "Ostéoarthrologie du coude"},
    {"id": 3, "nom": "Myologie de l'épaule"},
    {"id": 4, "nom": "Myologie du bras"},
    {"id": 5, "nom": "Ostéoarthrologie du poignet et de la main"},
    {"id": 6, "nom": "Myologie de l'avant-bras"},
    {"id": 7, "nom": "Myologie de la main"},
    {"id": 8, "nom": "Neuroanatomie du membre supérieur"}
  ],
  "structure1": [
    {"id": 1, "nom": "Introduction, homéostasie et milieu intérieur"},
    {"id": 2, "nom": "Système nerveux — organisation générale"},
    {"id": 3, "nom": "Système nerveux — neurophysiologie"},
    {"id": 4, "nom": "Système musculaire"},
    {"id": 5, "nom": "Système endocrinien"},
    {"id": 6, "nom": "Système immunitaire"},
    {"id": 7, "nom": "Introduction à l'anatomie : terminologie, plans, ostéologie et arthrologie"}
  ],
  "structure2": [
    {"id": 1, "nom": "Système respiratoire"},
    {"id": 2, "nom": "Système cardiovasculaire"},
    {"id": 3, "nom": "Physiologie de l'exercice"},
    {"id": 4, "nom": "Appareil digestif et métabolisme énergétique"},
    {"id": 5, "nom": "Appareil urinaire"},
    {"id": 6, "nom": "Système musculaire (rappels)"}
  ]
};

window.CHAPITRES = CHAPITRES;
