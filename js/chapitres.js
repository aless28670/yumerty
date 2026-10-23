/* =========================================================
   YUMERTY — Chapitres par matière
   Permet de filtrer les QCU par chapitre de cours.
   Chaque question de data.js porte un champ "c" = id du chapitre.
   ========================================================= */

const CHAPITRES = {
  "orthoTraumato": [
    { "id": 1, "nom": "T1 — Régénération et réparation tissulaires" },
    { "id": 2, "nom": "T2 — Fractures vertébrales" },
    { "id": 3, "nom": "T3 — Entorses vertébrales (whiplash)" },
    { "id": 4, "nom": "T4 — Anomalies structurelles dans le plan sagittal" },
    { "id": 5, "nom": "T5 — Discopathie traumatique" },
    { "id": 6, "nom": "T6 — Notion et prise en charge des cicatrices" },
    { "id": 7, "nom": "T7 — Torticolis congénital et plagiocéphalie" },
    { "id": 10, "nom": "T10 — Scoliose" },
    { "id": 12, "nom": "T12 — Fractures du membre supérieur chez l'adulte" },
    { "id": 13, "nom": "T13 — Fractures du membre supérieur chez l'enfant" },
    { "id": 14, "nom": "T14 — Prothèses du membre supérieur chez l'adulte" },
    { "id": 15, "nom": "T15 — Entorses et instabilités du membre supérieur" }
  ],
  "neuro1N": [
    { "id": 1, "nom": "T1 — Introduction à la kinésithérapie neurologique" },
    { "id": 2, "nom": "T2 — Approche fonctionnelle : le tronc" },
    { "id": 3, "nom": "T3 — Approche fonctionnelle : la marche" },
    { "id": 4, "nom": "T4 — Approche fonctionnelle : le membre supérieur" }
  ],
  "anat1": [
    {
      "id": 1,
      "nom": "1. Ostéoarthrologie du tronc"
    },
    {
      "id": 2,
      "nom": "2. Les os du crâne"
    },
    {
      "id": 3,
      "nom": "3. Myologie du dos et de la région sous-occipitale"
    },
    {
      "id": 4,
      "nom": "4. Myologie de la région antérieure et latérale du cou"
    },
    {
      "id": 5,
      "nom": "5. ATM, myologie de la mastication et muscles de la mimique"
    },
    {
      "id": 6,
      "nom": "6. Muscles de la cage thoracique"
    },
    {
      "id": 7,
      "nom": "7. Muscles de la paroi abdominale"
    },
    {
      "id": 8,
      "nom": "8. Les muscles du plancher pelvien"
    },
    {
      "id": 9,
      "nom": "2.1. Articulation de la hanche"
    },
    {
      "id": 10,
      "nom": "2.2. Muscles de la hanche"
    },
    {
      "id": 11,
      "nom": "2.3. Articulation du genou"
    },
    {
      "id": 12,
      "nom": "2.4. Muscles de la cuisse"
    },
    {
      "id": 13,
      "nom": "2.5. Ostéoarthrologie du pied et de la cheville"
    },
    {
      "id": 14,
      "nom": "2.6. Muscles des jambes et des pieds"
    },
    {
      "id": 15,
      "nom": "2.7. Muscles du pied"
    }
  ],
  "anat2": [
    {
      "id": 1,
      "nom": "Ostéoarthrologie de la ceinture scapulaire"
    },
    {
      "id": 2,
      "nom": "Ostéoarthrologie du coude"
    },
    {
      "id": 3,
      "nom": "Myologie de l'épaule"
    },
    {
      "id": 4,
      "nom": "Myologie du bras"
    },
    {
      "id": 5,
      "nom": "Ostéoarthrologie du poignet et de la main"
    },
    {
      "id": 6,
      "nom": "Myologie de l'avant-bras"
    },
    {
      "id": 7,
      "nom": "Myologie de la main"
    },
    {
      "id": 8,
      "nom": "Neuroanatomie du membre supérieur"
    }
  ],
  "dentBiomaterial": [
    {
      "id": 1,
      "nom": "01. Subject presentation"
    },
    {
      "id": 2,
      "nom": "02. Concepts and definitions"
    },
    {
      "id": 3,
      "nom": "03. Characteristics and general physical properties of dental biomaterials"
    },
    {
      "id": 4,
      "nom": "04. Characteristics and chemical properties of dental materials"
    },
    {
      "id": 18,
      "nom": "05-06. Biological properties and polymeric materials"
    },
    {
      "id": 17,
      "nom": "07-08. Ceramic materials and metallic materials"
    },
    {
      "id": 5,
      "nom": "09. Polymeric materials I — impression materials"
    },
    {
      "id": 6,
      "nom": "10. Polymeric materials II — acrylics"
    },
    {
      "id": 7,
      "nom": "11. Polymeric materials III — composite resins"
    },
    {
      "id": 8,
      "nom": "12. Polymeric materials IV — waxes, thermoplastic materials and gutta-percha"
    },
    {
      "id": 9,
      "nom": "13. Ceramic materials I — plasters"
    },
    {
      "id": 10,
      "nom": "14. Ceramic materials II — dental cements"
    },
    {
      "id": 11,
      "nom": "15. Ceramic materials III — porcelains and vitroceramics"
    },
    {
      "id": 12,
      "nom": "16. Metallic materials I — noble metals and titanium"
    },
    {
      "id": 13,
      "nom": "17. Non-noble metals and alloys"
    },
    {
      "id": 14,
      "nom": "18. Titanium and silver amalgam"
    },
    {
      "id": 15,
      "nom": "19. Metallic materials IV — non-noble alloys, types and applications"
    },
    {
      "id": 16,
      "nom": "20. Bone regeneration materials"
    }
  ],
  "dentDiagnostic": [
    {
      "id": 1,
      "nom": "1. — Basis OF Radiology"
    },
    {
      "id": 2,
      "nom": "2. — Types of X-Rays"
    },
    {
      "id": 3,
      "nom": "3. — Radiation Protection"
    },
    {
      "id": 4,
      "nom": "4. — Introduction TO X-ray Interpretation"
    },
    {
      "id": 5,
      "nom": "5. — Techniques"
    },
    {
      "id": 6,
      "nom": "6. — Radiobiology"
    }
  ],
  "dentHeadNeck": [
    {
      "id": 1,
      "nom": "01. (DB) Dental anatomy generalities"
    },
    {
      "id": 2,
      "nom": "02. Incisors and canines"
    },
    {
      "id": 3,
      "nom": "03. Premolars"
    },
    {
      "id": 4,
      "nom": "04. Maxillary and Mandibular molars"
    },
    {
      "id": 5,
      "nom": "05. (DB2). General concepts and osteology of the skull"
    },
    {
      "id": 6,
      "nom": "06. Cranial and facial bones I (ethmoid, sphenoid and temporal)"
    },
    {
      "id": 7,
      "nom": "07. Cranial and facial bones II (maxillary and palatine)"
    },
    {
      "id": 8,
      "nom": "08. (DB3). Cranial and facial bones III"
    },
    {
      "id": 9,
      "nom": "09. Mandible and TMJ"
    },
    {
      "id": 10,
      "nom": "10. (DB4). Cranial fossae and cavities"
    },
    {
      "id": 11,
      "nom": "11. TMJ-related fossae"
    },
    {
      "id": 12,
      "nom": "12. Muscles from the first branchial arch"
    },
    {
      "id": 13,
      "nom": "13. Muscles from the second branchial arch"
    },
    {
      "id": 14,
      "nom": "14. (DB5). Tongue muscles"
    },
    {
      "id": 15,
      "nom": "15. Hyoid bone and muscles; neck triangles and cervical fasciae"
    },
    {
      "id": 16,
      "nom": "16. (DB6). Head and neck arteries I"
    },
    {
      "id": 17,
      "nom": "17. Head and neck arteries II. External carotid artery"
    },
    {
      "id": 18,
      "nom": "18. Venous and lymphatic drainage"
    },
    {
      "id": 19,
      "nom": "19. Pharynx"
    },
    {
      "id": 20,
      "nom": "20. Larynx"
    }
  ],
  "dentOcclusion": [
    {
      "id": 1,
      "nom": "1. Occlusion IN Dentistry"
    },
    {
      "id": 2,
      "nom": "2. Stomathognatic system"
    },
    {
      "id": 3,
      "nom": "5. Mandibular positions and movements"
    },
    {
      "id": 4,
      "nom": "6. Centric Relation"
    },
    {
      "id": 5,
      "nom": "7. Eccentric Relation"
    },
    {
      "id": 6,
      "nom": "8. 9 Articulators-1"
    },
    {
      "id": 7,
      "nom": "10. Occlusal Schemes"
    }
  ],
  "dentPatho2Fin": [
    {
      "id": 1,
      "nom": "Unit Digestive"
    },
    {
      "id": 2,
      "nom": "Unit Oral Cavity Disorders"
    },
    {
      "id": 3,
      "nom": "Unit Oral Cavity and drugs"
    },
    {
      "id": 4,
      "nom": "Unit Reflux. Peptic ulcer. NSAI Ds toxicity"
    },
    {
      "id": 5,
      "nom": "Unit Acute Hepatitis. Chronic Liver disease"
    },
    {
      "id": 6,
      "nom": "Unit Intestinal Diseases"
    },
    {
      "id": 7,
      "nom": "Unit Epilepsy"
    },
    {
      "id": 8,
      "nom": "Unit CVR. Cerebrovascular disease. Stroke"
    },
    {
      "id": 9,
      "nom": "Unit loss of con"
    },
    {
      "id": 10,
      "nom": "Unit Female sex and health"
    },
    {
      "id": 11,
      "nom": "Unit Artr.Osteoporosis"
    },
    {
      "id": 12,
      "nom": "Unit Asthma and COPD"
    }
  ],
  "dentPatho2Mid": [
    {
      "id": 1,
      "nom": "01. 1 Blood disorders"
    },
    {
      "id": 2,
      "nom": "02. 2 Hemostasis"
    },
    {
      "id": 3,
      "nom": "03. 3 Bleeding Disorders and Thrombophilia"
    },
    {
      "id": 4,
      "nom": "04. 4 Hemostasis and Drugs prof"
    },
    {
      "id": 5,
      "nom": "05. 5 Hemotherapy and BMT"
    },
    {
      "id": 6,
      "nom": "06. 6 Cardiovascular General"
    },
    {
      "id": 7,
      "nom": "07. 7 CVR. HBP. Diagnosis and Treatment prof"
    },
    {
      "id": 8,
      "nom": "08. 8 CVR. Diabetes.-1"
    },
    {
      "id": 9,
      "nom": "09. 9 CVR. Ischaemic heart disease prof"
    },
    {
      "id": 11,
      "nom": "Unit Heart Failure and arrhitmias"
    },
    {
      "id": 12,
      "nom": "Unit CVR. Arterial diseases"
    },
    {
      "id": 13,
      "nom": "Unit Congenital heart disease. Valvulopathies. Endocarditis"
    }
  ],
  "dentPathology1Fin": [
    {
      "id": 1,
      "nom": "11. GRADO PMQA-1 Ch11 Immunology. Basics"
    },
    {
      "id": 2,
      "nom": "12. GRADO PMQA-1 Ch12 Immune-mediated diseases"
    },
    {
      "id": 3,
      "nom": "13. GRADO PMQA-1 Ch13 Anaphylaxis"
    },
    {
      "id": 4,
      "nom": "14. GRADO PMQA-1 Ch14 Autoimmune Diseases. Pemphigus and Lichen planus"
    },
    {
      "id": 5,
      "nom": "15. GRADO PMQA-1 Ch15 ID General concepts"
    },
    {
      "id": 6,
      "nom": "16. GRADO PMQA-1 Ch16 ID Diagnosis, Prevention and Treatment"
    },
    {
      "id": 7,
      "nom": "17. GRADO PMQA-1 Ch17ST Is"
    },
    {
      "id": 8,
      "nom": "18. GRADO PMQA-1 Ch18 HIV Infection"
    },
    {
      "id": 9,
      "nom": "19. GRADO PMQA-1 Ch19 Oral infections"
    },
    {
      "id": 10,
      "nom": "20. GRADO PMQA-1 Ch20 Occupational Exposures"
    },
    {
      "id": 11,
      "nom": "21. GRADO PMQA-1 Ch21 Standard Precautions"
    }
  ],
  "dentPathology1Mid": [
    {
      "id": 1,
      "nom": "02. GRADO PMQA-1 Ch2 Health care bases"
    },
    {
      "id": 2,
      "nom": "03. GRADO PMQA-1 Ch3 Medical care process. Prevention and Diagnosis"
    },
    {
      "id": 3,
      "nom": "04. GRADO PMQA-1 Ch4 Diagnostic Work-up. Blood tests and urinalysis"
    },
    {
      "id": 4,
      "nom": "05. GRADO PMQA-1 Ch5 Diagnostic tests. Microbiology and Histopathology"
    },
    {
      "id": 5,
      "nom": "06. GRADO PMQA-1 Ch6 Diagnostic work up. Imaging studies-techniques"
    },
    {
      "id": 6,
      "nom": "07. GRADO PMQA-1 Ch7 Prognosis and Treatment"
    },
    {
      "id": 7,
      "nom": "08. GRADO PMQA-1 Ch8 Medical Dental History"
    },
    {
      "id": 8,
      "nom": "09. GRADO PMQA-1 Ch9Cancer. Prevention, Diagnosis and treatment"
    },
    {
      "id": 9,
      "nom": "10. GRADO PMQA-1 Ch10 Oropharyngeal cancer"
    }
  ],
  "dentPeriodoncia": [
    {
      "id": 1,
      "nom": "01. Anatomy of the Periodontium"
    },
    {
      "id": 2,
      "nom": "02. The mucosa in toothed and peri-implant areas"
    },
    {
      "id": 3,
      "nom": "03. Bone"
    },
    {
      "id": 4,
      "nom": "04. Epidemiology of periodontal diseases"
    },
    {
      "id": 5,
      "nom": "05. Biofilm and Dental Calculus"
    },
    {
      "id": 6,
      "nom": "06. Periodontal Infections"
    },
    {
      "id": 7,
      "nom": "07. Pathogenesis of Periodontitis"
    },
    {
      "id": 8,
      "nom": "08. Non-Dental Biofilm-Induced Gingival Diseases"
    },
    {
      "id": 9,
      "nom": "09. Dental Biofilm-Induced Gingival Diseases"
    },
    {
      "id": 10,
      "nom": "10. Periodontitis"
    },
    {
      "id": 11,
      "nom": "11. Molar Incisor Pattern Periodontitis"
    },
    {
      "id": 12,
      "nom": "12. Necrotizing Periodontal Diseases"
    },
    {
      "id": 13,
      "nom": "13. Mechanical Supra-Gingival Plaque Control"
    },
    {
      "id": 14,
      "nom": "14. Non-surgical periodontal treatment"
    }
  ],
  "dentPharmacoFin": [
    {
      "id": 1,
      "nom": "16. General principles of atb"
    },
    {
      "id": 2,
      "nom": "17. Antibiotics I -26"
    },
    {
      "id": 3,
      "nom": "18. Antibiotics II -26"
    },
    {
      "id": 4,
      "nom": "19. Antiviral and antifungal drugs"
    },
    {
      "id": 5,
      "nom": "20. Antiseptics. Disinfectants. Caries. Aphthae. Halitosis"
    },
    {
      "id": 6,
      "nom": "21. Treatment of oropharyngeal infection"
    },
    {
      "id": 7,
      "nom": "22. Antihypertensive. Vasodilators. diuretic drugs -26"
    },
    {
      "id": 8,
      "nom": "23. Inotropics, antiarrhythmic agents and antianginals"
    },
    {
      "id": 9,
      "nom": "25. Anticoagulants, antiplatelet and fibrinolytic drugs -26"
    },
    {
      "id": 10,
      "nom": "26. Treatment of diabetes mellitus. Insulin and other hypoglycemic agents -26"
    },
    {
      "id": 11,
      "nom": "27. Gastrointestinal drugs -26"
    },
    {
      "id": 12,
      "nom": "28. Respiratory Pharmacology -26"
    },
    {
      "id": 13,
      "nom": "29. Pharmacology of bone"
    },
    {
      "id": 14,
      "nom": "30. Cytostatic drugs"
    }
  ],
  "dentPharmacoMid": [
    {
      "id": 1,
      "nom": "0. Intro"
    },
    {
      "id": 2,
      "nom": "01. Concepthistoryevol"
    },
    {
      "id": 3,
      "nom": "02. Pharmacokinetics"
    },
    {
      "id": 4,
      "nom": "03. Pharmacodynamics"
    },
    {
      "id": 5,
      "nom": "04. Adverse drug reactions"
    },
    {
      "id": 6,
      "nom": "05. Drug Interactions"
    },
    {
      "id": 7,
      "nom": "06. Autonomic Nervous System"
    },
    {
      "id": 8,
      "nom": "07. Neuromuscular blockers"
    },
    {
      "id": 9,
      "nom": "08. Opioid"
    },
    {
      "id": 10,
      "nom": "09. Nsaids"
    },
    {
      "id": 11,
      "nom": "10. Corticoids"
    },
    {
      "id": 12,
      "nom": "11. Antimigraine and antihistamine drugs"
    },
    {
      "id": 13,
      "nom": "12. Benzodiazepines -26"
    },
    {
      "id": 14,
      "nom": "13. Antidepressants and antiepileptic drugs -26"
    },
    {
      "id": 15,
      "nom": "14. Local and general anesthetics -26"
    }
  ],
  "dentPhysiology": [
    {
      "id": 1,
      "nom": "01. (DB1). Introduction to PSS and the Oral Cavity"
    },
    {
      "id": 2,
      "nom": "02. Enamel"
    },
    {
      "id": 3,
      "nom": "03. Dentin and Pulp"
    },
    {
      "id": 4,
      "nom": "04. Periodontium"
    },
    {
      "id": 5,
      "nom": "05. (DB2). Embryology"
    },
    {
      "id": 6,
      "nom": "06. Cranial Nerves"
    },
    {
      "id": 7,
      "nom": "07. Trigeminal Nerve - Generalities"
    },
    {
      "id": 8,
      "nom": "08. Trigeminal Nerve - Branches"
    },
    {
      "id": 9,
      "nom": "09. Trigeminal Nerve - Pathways"
    },
    {
      "id": 10,
      "nom": "10. (DB3). Introduction to the Somatosensory System"
    },
    {
      "id": 11,
      "nom": "11. (DB4). Somatosensory System - Mechanoreceptors and Proprioceptors"
    },
    {
      "id": 12,
      "nom": "12. Temperature and pain - FSE 24"
    },
    {
      "id": 13,
      "nom": "13. (DB5). Orofacial Pain"
    },
    {
      "id": 14,
      "nom": "14. Motor Control of Mastication"
    },
    {
      "id": 15,
      "nom": "15. Salivary Glands - Innervation"
    },
    {
      "id": 16,
      "nom": "16. Salivary Glands - Physiology"
    },
    {
      "id": 17,
      "nom": "17. Salivary Glands - Anatomy and Histology"
    },
    {
      "id": 18,
      "nom": "18. Taste"
    },
    {
      "id": 19,
      "nom": "19. (DB6). Swallowing"
    }
  ],
  "dentSemiology1": [
    {
      "id": 1,
      "nom": "01. General concepts"
    },
    {
      "id": 2,
      "nom": "02. Immune system pathophysiology"
    },
    {
      "id": 3,
      "nom": "03. Infectious pathophysiology"
    },
    {
      "id": 4,
      "nom": "04. Environmental diseasses"
    },
    {
      "id": 5,
      "nom": "05. Congenital and genetic diseases"
    },
    {
      "id": 6,
      "nom": "06. Neoplasias"
    },
    {
      "id": 7,
      "nom": "07. Eating pathophys"
    },
    {
      "id": 8,
      "nom": "08. Approach to hematology"
    },
    {
      "id": 9,
      "nom": "09. RBC pathophysiology"
    },
    {
      "id": 10,
      "nom": "10. WBC pathophysiology"
    },
    {
      "id": 11,
      "nom": "11. Coagulation pathophysiology"
    },
    {
      "id": 12,
      "nom": "12. Cardiovascular introduction"
    },
    {
      "id": 13,
      "nom": "13. Atherosclerosis"
    },
    {
      "id": 14,
      "nom": "14. Ischemic heart disease"
    },
    {
      "id": 15,
      "nom": "15. Heart failure"
    },
    {
      "id": 16,
      "nom": "16. Blood pressure pathophys"
    },
    {
      "id": 17,
      "nom": "17. Valvular heart diseases"
    },
    {
      "id": 18,
      "nom": "18. Arrhythmias"
    },
    {
      "id": 19,
      "nom": "19. Peripheral vascular diseases"
    },
    {
      "id": 20,
      "nom": "20. Respiratory pathophysiology: introduction"
    },
    {
      "id": 21,
      "nom": "21. Respiratory failure"
    },
    {
      "id": 22,
      "nom": "22. Obstructive pulmonary diseases"
    },
    {
      "id": 23,
      "nom": "23. Rectrictive pulmonary diseases"
    },
    {
      "id": 24,
      "nom": "24. Pulmonary hypertension"
    }
  ],
  "dentSemiology2": [
    {
      "id": 1,
      "nom": "01. Approach to patient with digestive disease"
    },
    {
      "id": 2,
      "nom": "02. Esophageal pathophysiology"
    },
    {
      "id": 3,
      "nom": "03. Gastroduodenal pathophysiology"
    },
    {
      "id": 4,
      "nom": "04. Small and large bowel pathophysiology"
    },
    {
      "id": 5,
      "nom": "05. Liver or hepatic failure"
    },
    {
      "id": 6,
      "nom": "06. Jaundice"
    },
    {
      "id": 7,
      "nom": "07. Portal hypertension"
    },
    {
      "id": 8,
      "nom": "08. Gallbladder and biliary tract diseases"
    },
    {
      "id": 9,
      "nom": "09. Approach to patients with endocrine disease"
    },
    {
      "id": 10,
      "nom": "10. Diabetes Mellitus"
    },
    {
      "id": 11,
      "nom": "11. Thyroid gland pathophysiology"
    },
    {
      "id": 12,
      "nom": "12. Adrenal gland pathophysiology"
    },
    {
      "id": 13,
      "nom": "13. Pituitary gland pathophysiology"
    },
    {
      "id": 14,
      "nom": "14. Approach to patient with nephrourological diseases"
    },
    {
      "id": 15,
      "nom": "15. Acute and chronic renal failure"
    },
    {
      "id": 16,
      "nom": "16. Glomerular diseases"
    },
    {
      "id": 17,
      "nom": "17. Urinary tract diseases"
    },
    {
      "id": 18,
      "nom": "18. Bone pathophysiology"
    },
    {
      "id": 19,
      "nom": "19. Joint pathophysiology"
    },
    {
      "id": 20,
      "nom": "20. Approach to patient with a neurological disease"
    },
    {
      "id": 21,
      "nom": "21. Consciousness pathophysiology"
    },
    {
      "id": 22,
      "nom": "22. Motor system pathophysiology"
    },
    {
      "id": 23,
      "nom": "23. CSF and meninges pathophysiology"
    },
    {
      "id": 24,
      "nom": "24. Cranial nerves pathophysiology"
    },
    {
      "id": 25,
      "nom": "25. Neuropathy and myopathy"
    }
  ],
  "histoireKine": [
    {
      "id": 1,
      "nom": "1.- Qu'est-ce que la physiothérapie"
    },
    {
      "id": 2,
      "nom": "2 -Origine et Evolution de la Kinésithérapie"
    },
    {
      "id": 3,
      "nom": "2.3 La physiothérapie comme sciences"
    },
    {
      "id": 4,
      "nom": "3. Le physiothérapeute tant qu'agent de santé dans un contexte interprofessionnel24 25"
    },
    {
      "id": 5,
      "nom": "3.Anamnese"
    },
    {
      "id": 6,
      "nom": "4.Raisonement clinique Partie 2"
    },
    {
      "id": 7,
      "nom": "4.Raisonement clinique partie 1"
    },
    {
      "id": 8,
      "nom": "5 - Efectos fisiologicos de la fisioterapia invasiva"
    },
    {
      "id": 9,
      "nom": "5 - Effets physiologique de l'exercice thérapeutique – Nikos – Copie"
    },
    {
      "id": 10,
      "nom": "5- Efectos fisiologicos de la terapia manual FR"
    },
    {
      "id": 11,
      "nom": "5. Efets physiologiques kine respi"
    },
    {
      "id": 12,
      "nom": "5.- Efectos fisiológicos de la F. Neurológica"
    },
    {
      "id": 13,
      "nom": "5.Efectos Fisiológicos de la Electroterapia AMPLIADO"
    },
    {
      "id": 14,
      "nom": "Douleur et inflammation"
    }
  ],
  "investigation": [
    {
      "id": 1,
      "nom": "1.1. La Méthode Scientifique"
    },
    {
      "id": 2,
      "nom": "1.2. Les erreurs dans la recherche Validité interne et externe"
    },
    {
      "id": 3,
      "nom": "1.3. Validité et fiabilité des méthodes de mesure"
    },
    {
      "id": 4,
      "nom": "1.4. Aspects éthiques de la recherche"
    },
    {
      "id": 5,
      "nom": "2.1. Stratégies de recherche"
    },
    {
      "id": 6,
      "nom": "2.2. Question de recherche, hypothèse et objectifs"
    },
    {
      "id": 7,
      "nom": "2.3. Les variables d'un point de vue méthodologique"
    },
    {
      "id": 8,
      "nom": "2.4. Les variables selon leur mesure"
    },
    {
      "id": 9,
      "nom": "2.5. Notions statistiques de base"
    },
    {
      "id": 10,
      "nom": "2.6. Statistique descriptive"
    },
    {
      "id": 11,
      "nom": "2.7. Représentation graphique"
    },
    {
      "id": 12,
      "nom": "3.1. Communication scientifique"
    },
    {
      "id": 13,
      "nom": "3.2. Bases de données bibliographiques"
    },
    {
      "id": 14,
      "nom": "3.3. Stratégies de recherche recherche biomédicale"
    },
    {
      "id": 15,
      "nom": "3.4. L'article scientifique"
    },
    {
      "id": 16,
      "nom": "3.5. Références bibliographiques"
    },
    {
      "id": 17,
      "nom": "3.6. Évaluation de la qualité des articles et des revues scientifiques"
    },
    {
      "id": 18,
      "nom": "3.7. Évidence scientifique dans la pratique de la kinésithérapie"
    },
    {
      "id": 19,
      "nom": "3.8. Guides de pratique clinique"
    },
    {
      "id": 20,
      "nom": "3.9. Revue systématique"
    }
  ],
  "neuro1": [
    {
      "id": 1,
      "nom": "Neuroplasticité"
    },
    {
      "id": 2,
      "nom": "Raisonnement clinique"
    },
    {
      "id": 3,
      "nom": "Neurosciences"
    },
    {
      "id": 4,
      "nom": "Contrôle postural"
    }
  ],
  "neuro2": [
    {
      "id": 1,
      "nom": "Introduction à la kinésithérapie pédiatrique"
    },
    {
      "id": 2,
      "nom": "Neurosciences"
    },
    {
      "id": 3,
      "nom": "Développement sensorimoteur"
    },
    {
      "id": 4,
      "nom": "Évaluation et signes d'alarme"
    },
    {
      "id": 5,
      "nom": "Physiopathologie"
    }
  ],
  "osteo1": [
    {
      "id": 1,
      "nom": "Introduction à l'ostéopathie"
    },
    {
      "id": 2,
      "nom": "Rachis dorsal"
    },
    {
      "id": 3,
      "nom": "Rachis lombaire"
    },
    {
      "id": 4,
      "nom": "Diaphragme"
    }
  ],
  "osteo2": [
    {
      "id": 1,
      "nom": "Cervicales UE Criterios de Seguridad"
    },
    {
      "id": 2,
      "nom": "Examen neurologico y test ortopédicos columna cervical FR"
    },
    {
      "id": 3,
      "nom": "CHAÎNES MUSCULAIRES"
    },
    {
      "id": 4,
      "nom": "Neuropatías del miembro superior FOSTII"
    },
    {
      "id": 5,
      "nom": "CERVICALES francés"
    },
    {
      "id": 6,
      "nom": "PELVIS Y SACRO"
    },
    {
      "id": 7,
      "nom": "Practicas RPG-SGA"
    }
  ],
  "pathoChir1": [
    {
      "id": 1,
      "nom": "01F. Concepts chirurgicaux généraux"
    },
    {
      "id": 2,
      "nom": "02F. Douleur chirurgie, anéthésie"
    },
    {
      "id": 3,
      "nom": "03F. Inflammation"
    },
    {
      "id": 4,
      "nom": "04F. Heridas. Proceso de cicatrización. Patología de la cicatriz. Quemaduras"
    },
    {
      "id": 5,
      "nom": "05F. ASSISTANCE AU PATIENT POLYTRAUMATISÉ. TESTS SUPPLÉMENTAIRES APPLICABLES SUR LE SYSTÈME NERVEUX CENTRAL"
    },
    {
      "id": 6,
      "nom": "06F. INFECTION LOCALE ET GENERALISÉE"
    },
    {
      "id": 7,
      "nom": "07F. INFECTIONS OSTÉOARTICULAIRES"
    },
    {
      "id": 8,
      "nom": "08F. TUMEURS OSSEUSES BÉNIGNES ET PSEUDOTUMEURS. TUMEURS OSSEUSES MALIGNES"
    },
    {
      "id": 9,
      "nom": "09F. Base physique et applications de la radiologie simple"
    },
    {
      "id": 10,
      "nom": "10F. Bases físicas y aplicaciones de la TAC la RM y la ecografía"
    },
    {
      "id": 11,
      "nom": "11F. Bases físicas y aplicaciones de otras pruebas complementarias"
    },
    {
      "id": 12,
      "nom": "12 F. TESTS COMPLÉMENTAIRES POUR L’ÉTUDE DU SYSTÈME NERVEUX PÉRIPHÉRIQUE"
    },
    {
      "id": 13,
      "nom": "13F. Étiologie et mécanisme de production des fractures. Clinique. Classification"
    },
    {
      "id": 14,
      "nom": "14F. Processus de consolidation des fractures. Traitement général des fractures. Principes de l’ostéosynthèse"
    },
    {
      "id": 15,
      "nom": "15F. Pathologie du cal de fracture. Consolidation vicieuse, consolidation retardée et pseudoarthrose"
    },
    {
      "id": 16,
      "nom": "16F. Physiopathologie de la plaque de croissance. Épiphysiolyse"
    },
    {
      "id": 17,
      "nom": "17F. Lésions du cartilage articulaire. Mécanismes de réparation. Lésions fibrocartilagineuses"
    },
    {
      "id": 18,
      "nom": "18.F Vieillissement du cartilage articulaire. Arthrose"
    },
    {
      "id": 19,
      "nom": "19.F ARTHRITE AIGUË. AUTRES ARTHROPATHIES"
    },
    {
      "id": 20,
      "nom": "20 F. Pathologie musculaire"
    },
    {
      "id": 21,
      "nom": "21F. Pathologie tendineuse, synoviale et ligamentaire"
    },
    {
      "id": 22,
      "nom": "22.F Pathologie des nerfs périphériques"
    },
    {
      "id": 23,
      "nom": "23 F. Le syndrome des loges et ses complications. Syndrome douloureux régional complexe"
    },
    {
      "id": 24,
      "nom": "24.F CERVICALE. ANATOMIE & RADIOLOGIE"
    },
    {
      "id": 25,
      "nom": "25.LÉSIONS TRAUMATIQUES DE LA COLONNE CERVICALE"
    },
    {
      "id": 26,
      "nom": "26.F DOULEUR cervicale APPROCHE GÉNÉRALE DE LA DOULEUR CERVICALE"
    },
    {
      "id": 27,
      "nom": "27.F Douleur cervicale PATHOLOGIES À L’ORIGINE DE DOULEURS CERVICALES"
    },
    {
      "id": 28,
      "nom": "28F. COLONNE THORACO-lombaire. ANATOMIE & RADIOLOGIE"
    },
    {
      "id": 29,
      "nom": "29.F LÉSIONS TRAUMATIQUES DE LA COLONNE THORACO-LOMBAIRE"
    },
    {
      "id": 30,
      "nom": "30.F Douleur lombaire . Hernies discales"
    },
    {
      "id": 31,
      "nom": "31.F Douleur lombaire . D’autres pathologies qui causent de la douleur. DÉFORMATIONS DU DOS"
    }
  ],
  "pathoChir2": [
    {
      "id": 1,
      "nom": "01. Bassin, hanche et cuisse — anatomie et radiologie"
    },
    {
      "id": 2,
      "nom": "02. Blessures du bassin — fractures de l'anneau pelvien, de l'acétabulum et luxations de hanche"
    },
    {
      "id": 3,
      "nom": "03. Fractures de l'extrémité proximale du fémur et de la diaphyse fémorale"
    },
    {
      "id": 4,
      "nom": "04. La hanche de l'enfant"
    },
    {
      "id": 5,
      "nom": "05. La hanche douloureuse de l'adulte"
    },
    {
      "id": 6,
      "nom": "06. Genou et jambe — anatomie et radiologie"
    },
    {
      "id": 7,
      "nom": "07. Blessures des extrémités articulaires du genou"
    },
    {
      "id": 8,
      "nom": "08. Appareil extenseur et lésions de la rotule"
    },
    {
      "id": 9,
      "nom": "09. Fractures diaphysaires du tibia"
    },
    {
      "id": 10,
      "nom": "10. Blessures ligamentaires du genou"
    },
    {
      "id": 11,
      "nom": "11. Lésions des ménisques du genou"
    },
    {
      "id": 12,
      "nom": "12. Le genou douloureux de l'adulte"
    },
    {
      "id": 13,
      "nom": "13. Le genou douloureux chez l'enfant"
    },
    {
      "id": 14,
      "nom": "14. Cheville et pied — anatomie et radiologie"
    },
    {
      "id": 15,
      "nom": "15. Entorses de la cheville, fractures de la cheville et du pilon tibial"
    },
    {
      "id": 16,
      "nom": "16. Blessures du pied — fractures du tarse, des métatarsiens et des orteils"
    },
    {
      "id": 17,
      "nom": "17. Le pied de l'enfant — déformations congénitales et acquises"
    },
    {
      "id": 18,
      "nom": "18. Le pied douloureux — talalgie et métatarsalgie"
    },
    {
      "id": 19,
      "nom": "19. Épaule et bras — anatomie et radiologie"
    },
    {
      "id": 20,
      "nom": "20. Traumatismes de l'épaule (1) — fractures"
    },
    {
      "id": 21,
      "nom": "21. Traumatismes de l'épaule (2) — luxations"
    },
    {
      "id": 22,
      "nom": "22. Épaule douloureuse (1) — syndrome douloureux sous-acromial"
    },
    {
      "id": 23,
      "nom": "23. Épaule douloureuse (2) — tendinopathie calcifiante, SLAP, capsulite adhésive"
    },
    {
      "id": 24,
      "nom": "24. Coude et avant-bras — anatomie et radiologie"
    },
    {
      "id": 25,
      "nom": "25. Fractures de la région du coude, luxations et fractures-luxations"
    },
    {
      "id": 26,
      "nom": "26. Blessures et fractures-luxations de l'avant-bras"
    },
    {
      "id": 27,
      "nom": "27. Syndromes douloureux du coude"
    },
    {
      "id": 28,
      "nom": "28. Poignet et main — anatomie et radiologie"
    },
    {
      "id": 29,
      "nom": "29. Fractures du radius distal"
    },
    {
      "id": 30,
      "nom": "30. Fractures des os du carpe, fractures-luxations et lésions du fibrocartilage triangulaire"
    },
    {
      "id": 31,
      "nom": "31. Traumatismes ouverts et fermés de la main"
    },
    {
      "id": 32,
      "nom": "32. Douleur de la main et du poignet — Dupuytren et déformations acquises"
    },
    {
      "id": 33,
      "nom": "33. Lésions du plexus brachial"
    },
    {
      "id": 34,
      "nom": "34. Compressions et lésions nerveuses du membre supérieur"
    },
    {
      "id": 35,
      "nom": "35. Compressions et lésions nerveuses du membre inférieur"
    }
  ],
  "pathologie1": [
    {
      "id": 1,
      "nom": "01. Tejidos del aparato locomotor- composición, formación y regeneración (hueso, tendón, músculo, ligamento) FR"
    },
    {
      "id": 2,
      "nom": "02. Diagnóstico del dolor toracolumbar- Patología discal y radicular FR"
    },
    {
      "id": 3,
      "nom": "03. Dolor lumbar - Otras patologías- Deformidades de espalda FR"
    },
    {
      "id": 4,
      "nom": "04. Dolor cervical - Abordaje general del dolor cervical FR"
    },
    {
      "id": 5,
      "nom": "05. Lesiones del sistema nervioso periférico FR"
    },
    {
      "id": 6,
      "nom": "06. Lesiones del plexo braquial y compresions nerviosas del MS FR"
    },
    {
      "id": 7,
      "nom": "07. Compresiones nerviosas de MMII FR"
    },
    {
      "id": 8,
      "nom": "08. Patología ósea (osteoporosis, Paget)- Patología muscular no traumática FR"
    },
    {
      "id": 9,
      "nom": "09. Patología articular no traumática (abordaje de las artropatías, artritis) FR"
    },
    {
      "id": 10,
      "nom": "10. Cartílago articular- Envejecimiento y artrosis FR"
    },
    {
      "id": 11,
      "nom": "11. Cirugia sobre lesiones no traumáticas- Principios de artroplastia y artrodesis FR"
    },
    {
      "id": 12,
      "nom": "12. Hombro doloroso FR"
    },
    {
      "id": 13,
      "nom": "13. Síndromes dolorosos del codo FR"
    },
    {
      "id": 14,
      "nom": "14. Dolor mano y muñeca FR"
    },
    {
      "id": 15,
      "nom": "15. La cadera dolorosa del adulto FR"
    },
    {
      "id": 16,
      "nom": "16. La rodilla dolorosa del adulto FR"
    },
    {
      "id": 17,
      "nom": "17. Pie infantil y pie doloroso del adulto FR"
    }
  ],
  "pathologie2": [
    {
      "id": 1,
      "nom": "1. Bases Physiopathologiques Générales DE LA Neurologie Chez L´adulte"
    },
    {
      "id": 2,
      "nom": "2. Lésions Cérébrales Acquises"
    },
    {
      "id": 3,
      "nom": "3. Troubles Cognitifs ET Neuropsychologiques Suite À LA Lésion Neurologique"
    },
    {
      "id": 4,
      "nom": "4. Troubles DU Tonus ET DU Mouvement Suite À LA Lésion Néurologique"
    },
    {
      "id": 5,
      "nom": "5. Discinesies FR"
    },
    {
      "id": 6,
      "nom": "6. Parkinson FR"
    },
    {
      "id": 7,
      "nom": "7. Lésion Médullaire"
    },
    {
      "id": 8,
      "nom": "8. Exploration Neurologique FR"
    },
    {
      "id": 9,
      "nom": "9. Troubles sensoriels et"
    },
    {
      "id": 10,
      "nom": "10. Pacient Oncologique FR"
    },
    {
      "id": 11,
      "nom": "11. Patología Degenerativa- Esclerosis Múltiple- FR"
    },
    {
      "id": 12,
      "nom": "12. Syndrome-de-guillain-barre-sgb FR"
    },
    {
      "id": 13,
      "nom": "13. Patient gériatrique"
    },
    {
      "id": 14,
      "nom": "14. Démence et Alzhéimer"
    },
    {
      "id": 15,
      "nom": "15. Bases Physiologiques DE Neurologie Chez Lénfantlo PPT FR"
    }
  ],
  "procesos1": [
    {
      "id": 1,
      "nom": "Introduction à la kinésithérapie respiratoire"
    },
    {
      "id": 2,
      "nom": "Généralités du système respiratoire"
    },
    {
      "id": 3,
      "nom": "Évaluation du patient respiratoire"
    },
    {
      "id": 4,
      "nom": "Auscultation"
    },
    {
      "id": 5,
      "nom": "Spirométrie"
    },
    {
      "id": 6,
      "nom": "Techniques de kinésithérapie respiratoire"
    },
    {
      "id": 7,
      "nom": "Pharmacologie et ventilation mécanique"
    }
  ],
  "procesos2": [
    {
      "id": 1,
      "nom": "01. Generale-Contexte kiné"
    },
    {
      "id": 2,
      "nom": "02. General-Processus physiopathologiques des tissus"
    },
    {
      "id": 3,
      "nom": "03. Douleur"
    },
    {
      "id": 4,
      "nom": "06. Neuropatías y Radiculopatías"
    },
    {
      "id": 5,
      "nom": "07. Anexo - Test Columna Vertebral"
    },
    {
      "id": 6,
      "nom": "08. Anexo - Test MMSS"
    },
    {
      "id": 7,
      "nom": "08. Maladies Neurodegeneratives"
    },
    {
      "id": 8,
      "nom": "09. MMII Partie 4"
    },
    {
      "id": 9,
      "nom": "09. Mmii Partie 2"
    },
    {
      "id": 10,
      "nom": "09. Anexo - Test MMII"
    },
    {
      "id": 11,
      "nom": "10. Columna Vertebral"
    },
    {
      "id": 12,
      "nom": "10. Fybromialgie"
    },
    {
      "id": 13,
      "nom": "11. Rhumatologie"
    },
    {
      "id": 14,
      "nom": "11. Mmss"
    },
    {
      "id": 15,
      "nom": "12. MMII partie 1"
    },
    {
      "id": 16,
      "nom": "12. MMII Partie 3"
    },
    {
      "id": 17,
      "nom": "THE Me 04 RESU- Man Clin - Val Funcional"
    },
    {
      "id": 18,
      "nom": "MMSS coude et poignet"
    }
  ],
  "processusBio1": [
    {
      "id": 1,
      "nom": "1. Introduction à la physique et à la chimie de la vie"
    },
    {
      "id": 2,
      "nom": "2. Origine et évolution cellulaires"
    },
    {
      "id": 3,
      "nom": "3. La membrane plasmique. structure et transport"
    },
    {
      "id": 4,
      "nom": "4. Cytosquelette. Le sarcomère comme exemple"
    },
    {
      "id": 5,
      "nom": "5. Organites cellulaires"
    },
    {
      "id": 6,
      "nom": "6. A. La signalisation et la stimulation cellulaire"
    },
    {
      "id": 7,
      "nom": "6. B. La signalisation et la stimulation cellulaire, la mécanotransduction"
    },
    {
      "id": 8,
      "nom": "7. Etapes et controle de la division cellulaire"
    },
    {
      "id": 9,
      "nom": "8. Gènes, chromosomes et génome"
    },
    {
      "id": 10,
      "nom": "9. Synthèse des protéines. L'épigénétique (IMR)"
    },
    {
      "id": 11,
      "nom": "10. Principes physiques des transformation énergétiques"
    },
    {
      "id": 12,
      "nom": "11. Thermodynamique"
    },
    {
      "id": 13,
      "nom": "12. Métabolisme de la cellule humaine"
    },
    {
      "id": 14,
      "nom": "13. La temperature"
    },
    {
      "id": 15,
      "nom": "14. Généralités sur les ondes et les ondes sonores"
    },
    {
      "id": 16,
      "nom": "15. Ondes électromagnétiques et applications"
    }
  ],
  "processusBio2": [
    {
      "id": 1,
      "nom": "Méiose et gamétogenèse"
    },
    {
      "id": 2,
      "nom": "Développement embryonnaire"
    },
    {
      "id": 3,
      "nom": "Introduction à l'histologie"
    },
    {
      "id": 4,
      "nom": "Tissu conjonctif — matrice et cellules"
    },
    {
      "id": 5,
      "nom": "Types de tissus conjonctifs"
    },
    {
      "id": 6,
      "nom": "Inflammation"
    },
    {
      "id": 7,
      "nom": "Réparation et régénération des tissus conjonctifs"
    },
    {
      "id": 8,
      "nom": "Tissu épithélial et glandes"
    },
    {
      "id": 9,
      "nom": "Cellules souches et médecine régénérative"
    },
    {
      "id": 10,
      "nom": "Régénération épithéliale et cicatrices"
    },
    {
      "id": 11,
      "nom": "Tissu adipeux"
    },
    {
      "id": 12,
      "nom": "Tissu sanguin"
    },
    {
      "id": 13,
      "nom": "Tissu cartilagineux"
    },
    {
      "id": 14,
      "nom": "Tissu osseux"
    },
    {
      "id": 15,
      "nom": "Tissus musculaires"
    },
    {
      "id": 16,
      "nom": "Réparation et régénération musculaires"
    },
    {
      "id": 17,
      "nom": "Tissu nerveux"
    },
    {
      "id": 18,
      "nom": "Régénération du tissu nerveux"
    }
  ],
  "psycho": [
    {
      "id": 1,
      "nom": "Psychologie de la santé"
    },
    {
      "id": 2,
      "nom": "Comportements, santé et maladie"
    },
    {
      "id": 3,
      "nom": "Conditionnement, émotions et stress"
    },
    {
      "id": 4,
      "nom": "Douleur"
    },
    {
      "id": 5,
      "nom": "Adhérence au traitement"
    },
    {
      "id": 6,
      "nom": "Relation et communication"
    }
  ],
  "santePublique": [
    {
      "id": 1,
      "nom": "1.1. La santé, ses déterminants et indicateurs"
    },
    {
      "id": 2,
      "nom": "1.2. Santé Publique"
    },
    {
      "id": 3,
      "nom": "1.3. Démographie et Épidémiologie"
    },
    {
      "id": 4,
      "nom": "1.4. La prévention et ses niveaux"
    },
    {
      "id": 5,
      "nom": "1.5. Promotion de la santé et Éducation pour la santé"
    },
    {
      "id": 6,
      "nom": "2.1. Concept de maladie transmissible"
    },
    {
      "id": 7,
      "nom": "2.2. Épidémiologie et prévention des maladies à transmission aérienne"
    },
    {
      "id": 8,
      "nom": "2.3. Épidémiologie et prévention des infections à transmission directe"
    },
    {
      "id": 9,
      "nom": "2.4. Épidémiologie et prévention des infections à transmission indirecte"
    },
    {
      "id": 10,
      "nom": "2.5. Mesures générales d’hygiène - précautions standard et spécifiques"
    },
    {
      "id": 11,
      "nom": "2.6. Ëpidémiologie et prévention des infections associées aux soins"
    },
    {
      "id": 12,
      "nom": "2.7. Inmunisation active et passive"
    },
    {
      "id": 13,
      "nom": "3.1. Concept de maladie chronique. Transition épidémiologique"
    },
    {
      "id": 14,
      "nom": "3.2. Facteurs de risque des maladies chroniques et sa prévalence dans la population"
    },
    {
      "id": 15,
      "nom": "3.3. Épidémiologie et prévention du Diabète"
    },
    {
      "id": 16,
      "nom": "3.4. Épidémiologie et prévention des maladies cardiovasculaires"
    },
    {
      "id": 17,
      "nom": "3.5. Épidémiologie et prévention du cancer"
    },
    {
      "id": 18,
      "nom": "3.6. Épidémiologie et prévention des maladies respiratoires chroniques"
    },
    {
      "id": 19,
      "nom": "3.7. Épidémiologie et prévention de maladies musculosquelettiques"
    },
    {
      "id": 20,
      "nom": "3.8. Épidémiologie et prévention des maladies neurodégénératives"
    },
    {
      "id": 21,
      "nom": "3.9. Épidémiologie et prévention des troubles de santé mentale"
    },
    {
      "id": 23,
      "nom": "4. 1-Systèmes de santé. Organisation du système de santé espagnol"
    },
    {
      "id": 24,
      "nom": "4. 2 Sociétés"
    },
    {
      "id": 25,
      "nom": "4. 3 Qualité et sécurité"
    },
    {
      "id": 26,
      "nom": "5. 1 Plan stratégique"
    },
    {
      "id": 27,
      "nom": "5. 2 DAFO. Analyse Swot"
    },
    {
      "id": 22,
      "nom": "5. 3 Emplacement de l'entreprise"
    },
    {
      "id": 28,
      "nom": "5. 4 Clients potentiels. Cible"
    },
    {
      "id": 29,
      "nom": "5. 5- Stratégies marketing"
    },
    {
      "id": 30,
      "nom": "5. 6 Gestion et planification des ressources humaines"
    },
    {
      "id": 31,
      "nom": "6. 1 Plan économique"
    },
    {
      "id": 32,
      "nom": "6. 2 Aides et subventions"
    },
    {
      "id": 33,
      "nom": "6. 3 Économie de la santé et planification sanitaire"
    }
  ],
  "structure1": [
    {
      "id": 1,
      "nom": "1. Introduction, homéostasie et milieu interne"
    },
    {
      "id": 2,
      "nom": "2. Système nerveux Partie I"
    },
    {
      "id": 3,
      "nom": "2. Système nerveux Partie II"
    },
    {
      "id": 4,
      "nom": "3. Système musculaire"
    },
    {
      "id": 6,
      "nom": "4. Système Endocrinien"
    },
    {
      "id": 7,
      "nom": "5. Système Immunitaire"
    }
  ],
  "structure2": [
    {
      "id": 1,
      "nom": "Système respiratoire"
    },
    {
      "id": 2,
      "nom": "Système cardiovasculaire"
    },
    {
      "id": 3,
      "nom": "Physiologie de l'exercice"
    },
    {
      "id": 4,
      "nom": "Appareil digestif et métabolisme énergétique"
    },
    {
      "id": 5,
      "nom": "Appareil urinaire"
    },
    {
      "id": 6,
      "nom": "Système musculaire (rappels)"
    }
  ],
  "valoColonne": [
    {
      "id": 1,
      "nom": "Base physique et applications d'autres tests complémentaires"
    },
    {
      "id": 2,
      "nom": "Base physique et applications de la radiologie simple"
    },
    {
      "id": 3,
      "nom": "Bases physiques et applications de la tomodensitométrie, de l'IRM et de l'échographie"
    },
    {
      "id": 4,
      "nom": "Formation TMO T0 Explorat Evaluat Objective FR"
    },
    {
      "id": 5,
      "nom": "Images & Solutions 2"
    },
    {
      "id": 6,
      "nom": "Révision Rx, TAC, IRM"
    },
    {
      "id": 7,
      "nom": "Teoría ATM"
    },
    {
      "id": 8,
      "nom": "Teoría Lumbar"
    },
    {
      "id": 9,
      "nom": "Tests complémentaires pour l'étude du système nerveux périphérique"
    },
    {
      "id": 10,
      "nom": "Théorie Bassin"
    },
    {
      "id": 11,
      "nom": "Théorie Cervicale -2"
    },
    {
      "id": 12,
      "nom": "Théorie Dorsale"
    }
  ],
  "valoMembresInf": [
    {
      "id": 1,
      "nom": "Hanche"
    },
    {
      "id": 2,
      "nom": "Genou"
    },
    {
      "id": 3,
      "nom": "Cheville et pied"
    }
  ],
  "valoMembresSup": [
    {
      "id": 1,
      "nom": "Épaule"
    },
    {
      "id": 2,
      "nom": "Coude"
    },
    {
      "id": 3,
      "nom": "Poignet et main"
    }
  ],
  "drainageExam1": [
    {
      "id": 1,
      "nom": "Leçon 1 — Histoire et concept du DLM"
    },
    {
      "id": 2,
      "nom": "Leçon 2 — Effets, indications et contre-indications"
    },
    {
      "id": 3,
      "nom": "Leçon 3 — Structure et fonction du système lymphatique"
    },
    {
      "id": 4,
      "nom": "Leçon 4.1 — Anatomie lymphatique : tête et cou"
    },
    {
      "id": 5,
      "nom": "Leçon 4.2 — Anatomie lymphatique : tronc"
    },
    {
      "id": 6,
      "nom": "Leçon 4.3 — Anatomie lymphatique : membres inférieur et supérieur"
    }
  ],
  "ortheseExam1": [
    {
      "id": 1,
      "nom": "T1 — Généralités : orthèses et prothèses"
    },
    {
      "id": 2,
      "nom": "T2 — Amputations et traitement"
    },
    {
      "id": 3,
      "nom": "T3 — Amputations du membre inférieur"
    },
    {
      "id": 4,
      "nom": "T4 — Amputations du membre supérieur"
    },
    {
      "id": 5,
      "nom": "T5 — Orthoprothèses dans les malformations congénitales"
    },
    {
      "id": 6,
      "nom": "T6 — Ostéo-intégration chez l'amputé"
    },
    {
      "id": 7,
      "nom": "T7 — Alignement des prothèses et troubles de la marche"
    },
    {
      "id": 8,
      "nom": "T8 — Prothèses bioniques (hors partiel 1)"
    },
    {
      "id": 9,
      "nom": "T9 — Impression 3D (hors partiel 1)"
    },
    {
      "id": 10,
      "nom": "T10 — Déformations crâniennes"
    },
    {
      "id": 11,
      "nom": "T11 — Orthèses en neurologie"
    }
  ]
};

window.CHAPITRES = CHAPITRES;
