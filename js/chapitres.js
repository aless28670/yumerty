/* =========================================================
   YUMERTY — Chapitres par matière
   Permet de filtrer les QCU par chapitre de cours.
   Chaque question de data.js porte un champ "c" = id du chapitre.
   ========================================================= */

const CHAPITRES = {
  "anat1": [
    {
      "id": 1,
      "nom": "BLOC I CHAPITRE 1 OSTÉOARTHROLOGIE DU TRONC"
    },
    {
      "id": 2,
      "nom": "BLOC I CHAPITRE 2 LES OS DU CRÂNE"
    },
    {
      "id": 3,
      "nom": "BLOC I CHAPITRE 3 MYOLOGIE DU DOS ET DE LA RÉGION SOUS-OCCIPITALE"
    },
    {
      "id": 4,
      "nom": "BLOC I CHAPITRE 4 MYOLOGIE DE LA RÉGION ANTÉRIEURE ET LATÉRALE DU COU"
    },
    {
      "id": 5,
      "nom": "BLOC I CHAPITRE 5 ATM, MYOLOGIE DE LA MASTICATION ET MUSCLES DE LA MIMIQUE"
    },
    {
      "id": 6,
      "nom": "BLOC I CHAPITRE 6 MUSCLES DE LA CAGE THORACIQUE"
    },
    {
      "id": 7,
      "nom": "BLOC I CHAPITRE 7 MUSCLES DE LA PAROI ABDOMINALE"
    },
    {
      "id": 8,
      "nom": "BLOC I CHAPITRE 8 LES MUSCLES DU PLANCHER PELVIEN"
    },
    {
      "id": 9,
      "nom": "BLOC II 2.1. ARTICULATION DE LA HANCHE"
    },
    {
      "id": 10,
      "nom": "BLOC II 2.2. Muscles de la hanche"
    },
    {
      "id": 11,
      "nom": "BLOC II 2.3 Articulation du genou"
    },
    {
      "id": 12,
      "nom": "BLOC II 2.4. muscles de la cuisse"
    },
    {
      "id": 13,
      "nom": "BLOC II 2.5. OSTÉOARTHROLOGIE DU PIED ET DE LA CHEVILLE"
    },
    {
      "id": 14,
      "nom": "BLOC II 2.6. MUSCLES DES JAMBES ET DES PIEDS"
    },
    {
      "id": 15,
      "nom": "BLOC II 2.7. MUSCLES DU PIED"
    },
    {
      "id": 16,
      "nom": "BLOQUE I TEMA 1 OSTEOARTROLOGÍA DE TRONCO FR"
    }
  ],
  "anat2": [
    {
      "id": 1,
      "nom": "1. L'OSTÉOARTHROLOGIE DE LA CEINTURE SCAPULAIRE DU MEMBRE SUPÉRIEUR"
    },
    {
      "id": 2,
      "nom": "2. L'OSTÉOARTHROLOGIE DU COUDE"
    },
    {
      "id": 3,
      "nom": "3. MYOLOGIE DE L'EPAULE"
    },
    {
      "id": 4,
      "nom": "4. MYOLOGIE DU BRAS"
    },
    {
      "id": 5,
      "nom": "5. OSTEOARTHROLOGIE DU POIGNET ET MAIN"
    },
    {
      "id": 6,
      "nom": "6. MYOLOGIE DE L'AVANT-BRAS"
    },
    {
      "id": 7,
      "nom": "7. MYOLOGIE DE LA MAIN"
    },
    {
      "id": 8,
      "nom": "8. NEUROANATOMIE DU MEMBRE SUPÉRIEUR"
    }
  ],
  "dentBiomaterial": [
    {
      "id": 1,
      "nom": "TEMA 4 — Biomaterials"
    },
    {
      "id": 2,
      "nom": "TOPIC 18: TITANIUM AND SILVER AMALGAM"
    },
    {
      "id": 3,
      "nom": "7 y 8"
    },
    {
      "id": 4,
      "nom": "5 y 6"
    },
    {
      "id": 5,
      "nom": "Subject presentation. Topic 1"
    },
    {
      "id": 6,
      "nom": "TOPIC 10: POLYMERIC MATERIALS II- ACRYLICS"
    },
    {
      "id": 7,
      "nom": "TOPIC 11: POLYMERIC MATERIALS III- COMPOSITE RESINS"
    },
    {
      "id": 8,
      "nom": "TOPIC 12. POLYMERIC MATERIALS IV: WAXES, THERMOPLASTIC MATERIALS AND"
    },
    {
      "id": 9,
      "nom": "TOPIC 13. CERAMIC MATERIALS I.- PLASTERS"
    },
    {
      "id": 10,
      "nom": "TOPIC 14.- CERAMIC MATERIALS II: DENTAL CEMENTS"
    },
    {
      "id": 11,
      "nom": "TOPIC 15: - CERAMIC MATERIALS III: PORCELAINS AND VITROCERAMICS"
    },
    {
      "id": 12,
      "nom": "TOPIC 16: - METALLIC MATERIALS I: NOBLE METALS AND TITANIUM"
    },
    {
      "id": 13,
      "nom": "TOPIC 17: - NON- NOBLE METALS AND ALLOY"
    },
    {
      "id": 14,
      "nom": "TOPIC 19: - METALLIC MATERIALS IV. NON- NOBLE ALLOYS. TYPES AND APPLICATIONS"
    },
    {
      "id": 15,
      "nom": "Topic 2 — Biomaterials"
    },
    {
      "id": 16,
      "nom": "TOPIC 20: -BONE REGENERATION MATERIALS"
    },
    {
      "id": 17,
      "nom": "TOPIC 3 — Characteristics & General"
    },
    {
      "id": 18,
      "nom": "TOPIC 9: POLYMERIC MATERIALS I- IMPRESSION MATERIALS"
    }
  ],
  "dentDiagnostic": [
    {
      "id": 1,
      "nom": "Tema 1 — BASIS OF RADIOLOGY"
    },
    {
      "id": 2,
      "nom": "Tema 2 — Types of X-Rays"
    },
    {
      "id": 3,
      "nom": "Tema 3 — RADIATION PROTECTION"
    },
    {
      "id": 4,
      "nom": "Tema 5 — Techniques"
    },
    {
      "id": 5,
      "nom": "TEMA 6 — Radiobiology"
    },
    {
      "id": 6,
      "nom": "Lesson 4 — INTRODUCTION TO X-RAY INTERPRETATION"
    }
  ],
  "dentHeadNeck": [
    {
      "id": 1,
      "nom": "Unit 01 (DB) Dental anatomy generalities"
    },
    {
      "id": 2,
      "nom": "Unit 02 Incisors and canines"
    },
    {
      "id": 3,
      "nom": "Unit 03 Premolars"
    },
    {
      "id": 4,
      "nom": "Unit 04 Maxillary and Mandibular molars"
    },
    {
      "id": 5,
      "nom": "Unit 05 (DB2). General concepts and osteology of the skull"
    },
    {
      "id": 6,
      "nom": "Unit 06. Cranial and facial bones I (ethmoid, sphenoid and temporal)"
    },
    {
      "id": 7,
      "nom": "Unit 07. Cranial and facial bones II (maxillary and palatine)"
    },
    {
      "id": 8,
      "nom": "Unit 08 (DB3). Cranial and facial bones III"
    },
    {
      "id": 9,
      "nom": "Unit 09. Mandible and TMJ"
    },
    {
      "id": 10,
      "nom": "Unit 10 (DB4). Cranial fossae and cavities"
    },
    {
      "id": 11,
      "nom": "Unit 11. TMJ-related fossae"
    },
    {
      "id": 12,
      "nom": "Unit 12. Muscles from the first branchial arch"
    },
    {
      "id": 13,
      "nom": "Unit 13. Muscles from the second branchial arch"
    },
    {
      "id": 14,
      "nom": "Unit 14 (DB5). Tongue muscles"
    },
    {
      "id": 15,
      "nom": "Unit 15. Hyoid bone and muscles; neck triangles and cervical fasciae"
    },
    {
      "id": 16,
      "nom": "Unit 16 (DB6). Head and neck arteries I"
    },
    {
      "id": 17,
      "nom": "Unit 17. Head and neck arteries II. External carotid artery"
    },
    {
      "id": 18,
      "nom": "Unit 18. Venous and lymphatic drainage"
    },
    {
      "id": 19,
      "nom": "Unit 19. Pharynx"
    },
    {
      "id": 20,
      "nom": "Unit 20. Larynx"
    }
  ],
  "dentOcclusion": [
    {
      "id": 1,
      "nom": "THEME 1 OCCLUSION IN DENTISTRY"
    },
    {
      "id": 2,
      "nom": "Lesson 10 OCCLUSAL SCHEMES"
    },
    {
      "id": 3,
      "nom": "LESSON 2- Stomathognatic system"
    },
    {
      "id": 4,
      "nom": "LESSON 5 MANDIBULAR POSITIONS AND MOVEMENTS-1"
    },
    {
      "id": 5,
      "nom": "LESSON 6 CENTRIC RELATION"
    },
    {
      "id": 6,
      "nom": "LESSON 7 ECCENTRIC RELATION"
    },
    {
      "id": 7,
      "nom": "LESSON 8-9 ARTICULATORS-1"
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
      "nom": "Unit 01 - 1 Blood disorders"
    },
    {
      "id": 2,
      "nom": "Unit 02 - 2 Hemostasis"
    },
    {
      "id": 3,
      "nom": "Unit 03 - 3 Bleeding Disorders and Thrombophilia"
    },
    {
      "id": 4,
      "nom": "Unit 04 - 4 Hemostasis and Drugs prof"
    },
    {
      "id": 5,
      "nom": "Unit 05 - 5 Hemotherapy and BMT"
    },
    {
      "id": 6,
      "nom": "Unit 06 - 6 Cardiovascular General"
    },
    {
      "id": 7,
      "nom": "Unit 07 - 7 CVR. HBP. Diagnosis and Treatment prof"
    },
    {
      "id": 8,
      "nom": "Unit 08 - 8 CVR. Diabetes.-1"
    },
    {
      "id": 9,
      "nom": "Unit 09 - 9 CVR. Ischaemic heart disease prof"
    },
    {
      "id": 10,
      "nom": "Unit Heart Failure and arrhitmias"
    },
    {
      "id": 11,
      "nom": "Unit CVR. Arterial diseases"
    },
    {
      "id": 12,
      "nom": "Unit 12b - 12 CVR. Arterial diseases"
    },
    {
      "id": 13,
      "nom": "Unit Congenital heart disease. Valvulopathies. Endocarditis"
    }
  ],
  "dentPathology1Fin": [
    {
      "id": 1,
      "nom": "Unit 11 - GRADO PMQA-1 Ch11 Immunology. Basics"
    },
    {
      "id": 2,
      "nom": "Unit 12 - GRADO PMQA-1 Ch12 Immune-mediated diseases"
    },
    {
      "id": 3,
      "nom": "Unit 13 - GRADO PMQA-1 Ch13 Anaphylaxis"
    },
    {
      "id": 4,
      "nom": "Unit 14 - GRADO PMQA-1 Ch14 Autoimmune Diseases. Pemphigus and Lichen planus"
    },
    {
      "id": 5,
      "nom": "Unit 15 - GRADO PMQA-1 Ch15 ID General concepts"
    },
    {
      "id": 6,
      "nom": "Unit 16 - GRADO PMQA-1 Ch16 ID Diagnosis, Prevention and Treatment"
    },
    {
      "id": 7,
      "nom": "Unit 17 - GRADO PMQA-1 Ch17ST Is"
    },
    {
      "id": 8,
      "nom": "Unit 18 - GRADO PMQA-1 Ch18 HIV Infection"
    },
    {
      "id": 9,
      "nom": "Unit 19 - GRADO PMQA-1 Ch19 Oral infections"
    },
    {
      "id": 10,
      "nom": "Unit 20 - GRADO PMQA-1 Ch20 Occupational Exposures"
    },
    {
      "id": 11,
      "nom": "Unit 21 - GRADO PMQA-1 Ch21 Standard Precautions"
    }
  ],
  "dentPathology1Mid": [
    {
      "id": 1,
      "nom": "Unit 02 - GRADO PMQA-1 Ch2 Health care bases"
    },
    {
      "id": 2,
      "nom": "Unit 03 - GRADO PMQA-1 Ch3 Medical care process. Prevention and Diagnosis"
    },
    {
      "id": 3,
      "nom": "Unit 04 - GRADO PMQA-1 Ch4 Diagnostic Work-up. Blood tests and urinalysis"
    },
    {
      "id": 4,
      "nom": "Unit 05 - GRADO PMQA-1 Ch5 Diagnostic tests. Microbiology and Histopathology"
    },
    {
      "id": 5,
      "nom": "Unit 06 - GRADO PMQA-1 Ch6 Diagnostic work up. Imaging studies-techniques"
    },
    {
      "id": 6,
      "nom": "Unit 07 - GRADO PMQA-1 Ch7 Prognosis and Treatment"
    },
    {
      "id": 7,
      "nom": "Unit 08 - GRADO PMQA-1 Ch8 Medical Dental History"
    },
    {
      "id": 8,
      "nom": "Unit 09 - GRADO PMQA-1 Ch9Cancer. Prevention, Diagnosis and treatment"
    },
    {
      "id": 9,
      "nom": "Unit 10 - GRADO PMQA-1 Ch10 Oropharyngeal cancer"
    }
  ],
  "dentPeriodoncia": [
    {
      "id": 1,
      "nom": "LESSON 01 — esson"
    },
    {
      "id": 2,
      "nom": "LESSON 02 — The mucosa in toothed areas and the"
    },
    {
      "id": 3,
      "nom": "LESSON 03 — esson"
    },
    {
      "id": 4,
      "nom": "LESSON 04 — pidemiology of periodontal diseases"
    },
    {
      "id": 5,
      "nom": "LESSON 05 — esson"
    },
    {
      "id": 6,
      "nom": "LESSON 06 — Periodontal Infections"
    },
    {
      "id": 7,
      "nom": "LESSON 07 — esson"
    },
    {
      "id": 8,
      "nom": "LESSON 08 — esson"
    },
    {
      "id": 9,
      "nom": "LESSON 09 — Diseases"
    },
    {
      "id": 10,
      "nom": "LESSON 10 — eriodontitis"
    },
    {
      "id": 11,
      "nom": "LESSON 11 — olar"
    },
    {
      "id": 12,
      "nom": "LESSON 12 — Necrotizing Periodontal"
    },
    {
      "id": 13,
      "nom": "LESSON 13 — esson 13"
    },
    {
      "id": 14,
      "nom": "LESSON 14 — non-surgical periodontal"
    }
  ],
  "dentPharmacoFin": [
    {
      "id": 1,
      "nom": "Unit 16.General principles of atb"
    },
    {
      "id": 2,
      "nom": "Unit 17. Antibiotics I 2025-26"
    },
    {
      "id": 3,
      "nom": "Unit 18. Antibiotics II 2025-26"
    },
    {
      "id": 4,
      "nom": "Unit 19. Antiviral and antifungal drugs"
    },
    {
      "id": 5,
      "nom": "Unit 20. Antiseptics. Disinfectants. Caries. Aphthae. Halitosis"
    },
    {
      "id": 6,
      "nom": "Unit 21. Treatment of oropharyngeal infection"
    },
    {
      "id": 7,
      "nom": "Unit 22. Antihypertensive. Vasodilators. diuretic drugs 2025-26"
    },
    {
      "id": 8,
      "nom": "Unit 23. Inotropics, antiarrhythmic agents and antianginals"
    },
    {
      "id": 9,
      "nom": "Unit 25.Anticoagulants, antiplatelet and fibrinolytic drugs 2025-26"
    },
    {
      "id": 10,
      "nom": "Unit 26. Treatment of diabetes mellitus. Insulin and other hypoglycemic agents 2025-26"
    },
    {
      "id": 11,
      "nom": "Unit 27. Gastrointestinal drugs 2025-26"
    },
    {
      "id": 12,
      "nom": "Unit 28. Respiratory Pharmacology 2025-26"
    },
    {
      "id": 13,
      "nom": "Unit 29. Pharmacology of bone"
    },
    {
      "id": 14,
      "nom": "Unit 30. Cytostatic drugs"
    }
  ],
  "dentPharmacoMid": [
    {
      "id": 1,
      "nom": "Unit 0. Intro"
    },
    {
      "id": 2,
      "nom": "Unit 01.concepthistoryevol"
    },
    {
      "id": 3,
      "nom": "Unit 02.pharmacokinetics"
    },
    {
      "id": 4,
      "nom": "Unit 03. Pharmacodynamics"
    },
    {
      "id": 5,
      "nom": "Unit 04. Adverse drug reactions"
    },
    {
      "id": 6,
      "nom": "Unit 05. Drug Interactions"
    },
    {
      "id": 7,
      "nom": "Unit 06. Autonomic Nervous System"
    },
    {
      "id": 8,
      "nom": "Unit 07. Neuromuscular blockers"
    },
    {
      "id": 9,
      "nom": "Unit 08. Opioid"
    },
    {
      "id": 10,
      "nom": "Unit 09. NSAIDS"
    },
    {
      "id": 11,
      "nom": "Unit 10. Corticoids 25-26"
    },
    {
      "id": 12,
      "nom": "Unit 11. Antimigraine and antihistamine drugs"
    },
    {
      "id": 13,
      "nom": "Unit 12. Benzodiazepines 2025-26"
    },
    {
      "id": 14,
      "nom": "Unit 13. Antidepressants and antiepileptic drugs 2025-26"
    },
    {
      "id": 15,
      "nom": "Unit 14. Local and general anesthetics 2025-26"
    }
  ],
  "dentPhysiology": [
    {
      "id": 1,
      "nom": "Unit 01 (DB1). Introduction to PSS and the Oral Cavity"
    },
    {
      "id": 2,
      "nom": "Unit 02. Enamel"
    },
    {
      "id": 3,
      "nom": "Unit 03. Dentin and Pulp"
    },
    {
      "id": 4,
      "nom": "Unit 04. Periodontium"
    },
    {
      "id": 5,
      "nom": "Unit 05 (DB2). Embryology"
    },
    {
      "id": 6,
      "nom": "Unit 06. Cranial Nerves"
    },
    {
      "id": 7,
      "nom": "Unit 07. Trigeminal Nerve - Generalities"
    },
    {
      "id": 8,
      "nom": "Unit 08. Trigeminal Nerve - Branches"
    },
    {
      "id": 9,
      "nom": "Unit 09. Trigeminal Nerve - Pathways"
    },
    {
      "id": 10,
      "nom": "Unit 10 (DB3). Introduction to the Somatosensory System"
    },
    {
      "id": 11,
      "nom": "Unit 11 (DB4). Somatosensory System - Mechanoreceptors and Proprioceptors"
    },
    {
      "id": 12,
      "nom": "Unit 12 - Temperature and pain - FSE 24"
    },
    {
      "id": 13,
      "nom": "Unit 13 (DB5). Orofacial Pain"
    },
    {
      "id": 14,
      "nom": "Unit 14. Motor Control of Mastication"
    },
    {
      "id": 15,
      "nom": "Unit 15. Salivary Glands - Innervation"
    },
    {
      "id": 16,
      "nom": "Unit 16. Salivary Glands - Physiology"
    },
    {
      "id": 17,
      "nom": "Unit 17. Salivary Glands - Anatomy and Histology"
    },
    {
      "id": 18,
      "nom": "Unit 18. Taste"
    },
    {
      "id": 19,
      "nom": "Unit 19 (DB6). Swallowing"
    }
  ],
  "dentSemiology1": [
    {
      "id": 1,
      "nom": "Unit 01 - General concepts"
    },
    {
      "id": 2,
      "nom": "Unit 02 - Immune system pathophysiology"
    },
    {
      "id": 3,
      "nom": "Unit 03 - Infectious pathophysiology"
    },
    {
      "id": 4,
      "nom": "Unit 04 - Environmental diseasses"
    },
    {
      "id": 5,
      "nom": "Unit 05 - Congenital and genetic diseases"
    },
    {
      "id": 6,
      "nom": "Unit 06 - Neoplasias"
    },
    {
      "id": 7,
      "nom": "Unit 07 - Eating pathophys"
    },
    {
      "id": 8,
      "nom": "Unit 08 - Approach to hematology"
    },
    {
      "id": 9,
      "nom": "Unit 09 - RBC pathophysiology"
    },
    {
      "id": 10,
      "nom": "Unit 10 - WBC pathophysiology"
    },
    {
      "id": 11,
      "nom": "Unit 11 - Coagulation pathophysiology"
    },
    {
      "id": 12,
      "nom": "Unit 12 - Cardiovascular introduction"
    },
    {
      "id": 13,
      "nom": "Unit 13 - Atherosclerosis"
    },
    {
      "id": 14,
      "nom": "Unit 14 - Ischemic heart disease"
    },
    {
      "id": 15,
      "nom": "Unit 15 - Heart failure"
    },
    {
      "id": 16,
      "nom": "Unit 16 - Blood pressure pathophys"
    },
    {
      "id": 17,
      "nom": "Unit 17 - Valvular heart diseases"
    },
    {
      "id": 18,
      "nom": "Unit 18 - Arrhythmias"
    },
    {
      "id": 19,
      "nom": "Unit 19 - Peripheral vascular diseases"
    },
    {
      "id": 20,
      "nom": "Unit 20 - Respiratory pathophysiology: introduction"
    },
    {
      "id": 21,
      "nom": "Unit 21 - Respiratory failure"
    },
    {
      "id": 22,
      "nom": "Unit 22 - Obstructive pulmonary diseases"
    },
    {
      "id": 23,
      "nom": "Unit 23 - Rectrictive pulmonary diseases"
    },
    {
      "id": 24,
      "nom": "Unit 24 - Pulmonary hypertension"
    }
  ],
  "dentSemiology2": [
    {
      "id": 1,
      "nom": "Unit 01 - Approach to patient with digestive disease"
    },
    {
      "id": 2,
      "nom": "Unit 02 - Esophageal pathophysiology"
    },
    {
      "id": 3,
      "nom": "Unit 03 - Gastroduodenal pathophysiology"
    },
    {
      "id": 4,
      "nom": "Unit 04 - Small and large bowel pathophysiology"
    },
    {
      "id": 5,
      "nom": "Unit 05 - Liver or hepatic failure"
    },
    {
      "id": 6,
      "nom": "Unit 06 - Jaundice"
    },
    {
      "id": 7,
      "nom": "Unit 07 - Portal hypertension"
    },
    {
      "id": 8,
      "nom": "Unit 08 - Gallbladder and biliary tract diseases"
    },
    {
      "id": 9,
      "nom": "Unit 09 - Approach to patients with endocrine disease"
    },
    {
      "id": 10,
      "nom": "Unit 10 - Diabetes Mellitus"
    },
    {
      "id": 11,
      "nom": "Unit 11 - Thyroid gland pathophysiology"
    },
    {
      "id": 12,
      "nom": "Unit 12 - Adrenal gland pathophysiology"
    },
    {
      "id": 13,
      "nom": "Unit 13 - Pituitary gland pathophysiology"
    },
    {
      "id": 14,
      "nom": "Unit 14 - Approach to patient with nephrourological diseases"
    },
    {
      "id": 15,
      "nom": "Unit 15 - Acute and chronic renal failure"
    },
    {
      "id": 16,
      "nom": "Unit 16 - Glomerular diseases"
    },
    {
      "id": 17,
      "nom": "Unit 17 - Urinary tract diseases"
    },
    {
      "id": 18,
      "nom": "Unit 18 - Bone pathophysiology"
    },
    {
      "id": 19,
      "nom": "Unit 19 - Joint pathophysiology"
    },
    {
      "id": 20,
      "nom": "Unit 20 - Approach to patient with a neurological disease"
    },
    {
      "id": 21,
      "nom": "Unit 21 - Consciousness pathophysiology"
    },
    {
      "id": 22,
      "nom": "Unit 22 - Motor system pathophysiology"
    },
    {
      "id": 23,
      "nom": "Unit 23 - CSF and meninges pathophysiology"
    },
    {
      "id": 24,
      "nom": "Unit 24 - Cranial nerves pathophysiology"
    },
    {
      "id": 25,
      "nom": "Unit 25 - Neuropathy and myopathy"
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
      "nom": "5 - Efectos fisiologicos de la fisioterapia invasiva 25 26 FR [Autoguardado]"
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
      "nom": "1.1 La Méthode Scientifique"
    },
    {
      "id": 2,
      "nom": "1.2 Les erreurs dans la recherche Validité interne et externe"
    },
    {
      "id": 3,
      "nom": "1.3 Validité et fiabilité des méthodes de mesure"
    },
    {
      "id": 4,
      "nom": "1.4 Aspects éthiques de la recherche"
    },
    {
      "id": 5,
      "nom": "2.1 Stratégies de recherche"
    },
    {
      "id": 6,
      "nom": "2.2 Question de recherche, hypothèse et objectifs"
    },
    {
      "id": 7,
      "nom": "2.3 Les variables d'un point de vue méthodologique"
    },
    {
      "id": 8,
      "nom": "2.4 Les variables selon leur mesure"
    },
    {
      "id": 9,
      "nom": "2.5 Notions statistiques de base"
    },
    {
      "id": 10,
      "nom": "2.6 Statistique descriptive"
    },
    {
      "id": 11,
      "nom": "2.7 Représentation graphique"
    },
    {
      "id": 12,
      "nom": "3.1 Communication scientifique"
    },
    {
      "id": 13,
      "nom": "3.2 Bases de données bibliographiques"
    },
    {
      "id": 14,
      "nom": "3.3 Stratégies de recherche recherche biomédicale"
    },
    {
      "id": 15,
      "nom": "3.4 L'article scientifique"
    },
    {
      "id": 16,
      "nom": "3.5 Références bibliographiques"
    },
    {
      "id": 17,
      "nom": "3.6 Évaluation de la qualité des articles et des revues scientifiques"
    },
    {
      "id": 18,
      "nom": "3.7 Évidence scientifique dans la pratique de la kinésithérapie"
    },
    {
      "id": 19,
      "nom": "3.8 Guides de pratique clinique"
    },
    {
      "id": 20,
      "nom": "3.9 Revue systématique"
    }
  ],
  "neuro1": [
    {
      "id": 1,
      "nom": "THÈME 1. NEUROPLASTICITÉ"
    },
    {
      "id": 2,
      "nom": "THÈME 2. RAISSONAIMENT CLINIQUE"
    },
    {
      "id": 3,
      "nom": "THÈME 3. NEUROSCIENCES"
    },
    {
      "id": 4,
      "nom": "THÈME 4. CÔNTROLE POSTURAL"
    }
  ],
  "neuro2": [
    {
      "id": 1,
      "nom": "THÈME 1. INTRO A KINE PEDIATRIQUE"
    },
    {
      "id": 2,
      "nom": "THÈME 2. NEUROSCIENCES"
    },
    {
      "id": 3,
      "nom": "THÈME 3. DÉVELOPPEMENT SENSORIMOTEUR"
    },
    {
      "id": 4,
      "nom": "THÈME 4. ÉVALUATION. SIGNES D'ALARME"
    },
    {
      "id": 5,
      "nom": "THÈME 5. PHYSIOPATHOLOGIE"
    }
  ],
  "osteo1": [
    {
      "id": 1,
      "nom": "C. Dorsal"
    },
    {
      "id": 2,
      "nom": "Diafragma"
    },
    {
      "id": 3,
      "nom": "C.Lumbar"
    },
    {
      "id": 4,
      "nom": "INTRO OSTEO I"
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
      "nom": "Neuropatías del miembro superior FOSTII 25 26 FR"
    },
    {
      "id": 5,
      "nom": "CERVICALES francés"
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
      "nom": "07F. INFECTIONS OSTÉOARTICULAIRES v.2"
    },
    {
      "id": 8,
      "nom": "08F. TUMEURS OSSEUSES BÉNIGNES ET PSEUDOTUMEURS. TUMEURS OSSEUSES MALIGNES v.3"
    },
    {
      "id": 9,
      "nom": "09F. Base physique et applications de la radiologie simple"
    },
    {
      "id": 10,
      "nom": "10F. Bases físicas y aplicaciones de la TAC la RM y la ecografía"
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
      "nom": "14F. Processus de consolidation des fractures. Traitement général des fractures. Principes de l’ostéosynthèse v.2"
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
      "nom": "18.F Vieillissement du cartilage articulaire. Arthrose v.2"
    },
    {
      "id": 19,
      "nom": "19.F ARTHRITE AIGUË. AUTRES ARTHROPATHIES"
    },
    {
      "id": 20,
      "nom": "20 F. Pathologie musculaire v.2"
    },
    {
      "id": 21,
      "nom": "21F. Pathologie tendineuse, synoviale et ligamentaire v.3"
    },
    {
      "id": 22,
      "nom": "22.F Pathologie des nerfs périphériques v.2"
    },
    {
      "id": 23,
      "nom": "23 F. Le syndrome des loges et ses complications. Syndrome douloureux régional complexe v.3"
    },
    {
      "id": 24,
      "nom": "24.F CERVICALE. ANATOMIE & RADIOLOGIE"
    },
    {
      "id": 25,
      "nom": "25.LÉSIONS TRAUMATIQUES DE LA COLONNE CERVICALE v.2"
    },
    {
      "id": 26,
      "nom": "26.F DOULEUR cervicale APPROCHE GÉNÉRALE DE LA DOULEUR CERVICALE"
    },
    {
      "id": 27,
      "nom": "27.F Douleur cervicale PATHOLOGIES À L’ORIGINE DE DOULEURS CERVICALES v.2"
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
      "nom": "Bassin et hanche — anatomie, fractures du bassin et luxations de hanche"
    },
    {
      "id": 2,
      "nom": "Fractures du fémur proximal et de la diaphyse fémorale"
    },
    {
      "id": 3,
      "nom": "Hanche de l'enfant"
    },
    {
      "id": 4,
      "nom": "Hanche douloureuse de l'adulte"
    },
    {
      "id": 5,
      "nom": "Genou et jambe — anatomie, luxations et fractures"
    },
    {
      "id": 6,
      "nom": "Lésions de l'appareil extenseur du genou"
    },
    {
      "id": 7,
      "nom": "Lésions ligamentaires et méniscales du genou"
    },
    {
      "id": 8,
      "nom": "Genou douloureux de l'adulte et genou de l'enfant"
    },
    {
      "id": 9,
      "nom": "Cheville et pied — anatomie, entorses et fractures"
    },
    {
      "id": 10,
      "nom": "Pied de l'enfant — déformations congénitales et acquises"
    },
    {
      "id": 11,
      "nom": "Pied douloureux — talalgie et métatarsalgie"
    },
    {
      "id": 12,
      "nom": "Épaule et bras — anatomie, fractures et luxations"
    },
    {
      "id": 13,
      "nom": "Épaule douloureuse"
    },
    {
      "id": 14,
      "nom": "Coude et avant-bras — anatomie, fractures et luxations"
    },
    {
      "id": 15,
      "nom": "Syndromes douloureux du coude"
    },
    {
      "id": 16,
      "nom": "Poignet et main — anatomie, fractures du radius distal et du carpe"
    },
    {
      "id": 17,
      "nom": "Traumatismes de la main et pathologie douloureuse de la main et du poignet"
    },
    {
      "id": 18,
      "nom": "Lésions nerveuses des membres — plexus brachial et compressions nerveuses"
    }
  ],
  "pathologie1": [
    {
      "id": 1,
      "nom": "Tema 01- Tejidos del aparato locomotor- composición, formación y regeneración (hueso, tendón, músculo, ligamento) FR"
    },
    {
      "id": 2,
      "nom": "Tema 02- Diagnóstico del dolor toracolumbar- Patología discal y radicular FR"
    },
    {
      "id": 3,
      "nom": "Tema 03- Dolor lumbar - Otras patologías- Deformidades de espalda FR"
    },
    {
      "id": 4,
      "nom": "Tema 04- Dolor cervical - Abordaje general del dolor cervical FR"
    },
    {
      "id": 5,
      "nom": "Tema 05- Lesiones del sistema nervioso periférico FR"
    },
    {
      "id": 6,
      "nom": "Tema 06- Lesiones del plexo braquial y compresions nerviosas del MS FR"
    },
    {
      "id": 7,
      "nom": "Tema 07- Compresiones nerviosas de MMII FR"
    },
    {
      "id": 8,
      "nom": "Tema 08- Patología ósea (osteoporosis, Paget)- Patología muscular no traumática FR"
    },
    {
      "id": 9,
      "nom": "Tema 09- Patología articular no traumática (abordaje de las artropatías, artritis) FR"
    },
    {
      "id": 10,
      "nom": "Tema 10- Cartílago articular- Envejecimiento y artrosis FR"
    },
    {
      "id": 11,
      "nom": "Tema 11- Cirugia sobre lesiones no traumáticas- Principios de artroplastia y artrodesis FR"
    },
    {
      "id": 12,
      "nom": "Tema 12- Hombro doloroso FR"
    },
    {
      "id": 13,
      "nom": "Tema 13- Síndromes dolorosos del codo FR"
    },
    {
      "id": 14,
      "nom": "Tema 14- Dolor mano y muñeca FR"
    },
    {
      "id": 15,
      "nom": "Tema 15- La cadera dolorosa del adulto FR"
    },
    {
      "id": 16,
      "nom": "Tema 16- La rodilla dolorosa del adulto FR"
    },
    {
      "id": 17,
      "nom": "Tema 17- Pie infantil y pie doloroso del adulto FR"
    }
  ],
  "pathologie2": [
    {
      "id": 1,
      "nom": "CHAPITRE 1. BASES PHYSIOPATHOLOGIQUES GÉNÉRALES DE LA NEUROLOGIE CHEZ L´ADULTE"
    },
    {
      "id": 2,
      "nom": "CHAPITRE 2.LÉSIONS CÉRÉBRALES ACQUISES"
    },
    {
      "id": 3,
      "nom": "CHAPITRE 3.TROUBLES COGNITIFS ET NEUROPSYCHOLOGIQUES SUITE À LA LÉSION NEUROLOGIQUE"
    },
    {
      "id": 4,
      "nom": "CHAPITRE 4.TROUBLES DU TONUS ET DU MOUVEMENT SUITE À LA LÉSION NÉUROLOGIQUE"
    },
    {
      "id": 5,
      "nom": "CHAPITRE 5.DISCINESIES FR"
    },
    {
      "id": 6,
      "nom": "CHAPITRE 6 PARKINSON FR"
    },
    {
      "id": 7,
      "nom": "CHAPITRE 7.LÉSION MÉDULLAIRE"
    },
    {
      "id": 8,
      "nom": "CHAPITRE 8- EXPLORATION NEUROLOGIQUE DEF FR"
    },
    {
      "id": 9,
      "nom": "Chapitre 9.Troubles sensoriels et"
    },
    {
      "id": 10,
      "nom": "CHAPITRE 10- PACIENT ONCOLOGIQUE FR"
    },
    {
      "id": 11,
      "nom": "CHAPITRE 11- PATOLOGÍA DEGENERATIVA- ESCLEROSIS MÚLTIPLE- FR"
    },
    {
      "id": 12,
      "nom": "CHAPITRE 12.SYNDROME-DE-GUILLAIN-BARRE-SGB FR"
    },
    {
      "id": 13,
      "nom": "Chapitre 13.Patient gériatrique"
    },
    {
      "id": 14,
      "nom": "Chapitre 14. Démence et Alzhéimer"
    },
    {
      "id": 15,
      "nom": "CHAPITRE 15- BASES PHYSIOLOGIQUES DE NEUROLOGIE CHEZ LÉNFANTLO PPT FR"
    }
  ],
  "procesos1": [
    {
      "id": 1,
      "nom": "T.1 Introduction kiné respiratoire"
    },
    {
      "id": 2,
      "nom": "T.2. Généralités du systeme respiratoire"
    },
    {
      "id": 3,
      "nom": "T.3 Évaluation patient respiratoire"
    },
    {
      "id": 4,
      "nom": "T.4. AUSCULTATION"
    },
    {
      "id": 5,
      "nom": "T.5 spirométrie"
    },
    {
      "id": 6,
      "nom": "T.6 Tecniques KR"
    },
    {
      "id": 7,
      "nom": "T.7 PHARMACOLOGIE ET VM FRANÇAIS"
    }
  ],
  "procesos2": [
    {
      "id": 1,
      "nom": "THEME 01-Generale-Contexte kiné"
    },
    {
      "id": 2,
      "nom": "THEME 02-General-Processus physiopathologiques des tissus"
    },
    {
      "id": 3,
      "nom": "THE Me 04 RESU- Man Clin - Val Funcional"
    },
    {
      "id": 4,
      "nom": "Theme 06 Neuropatías y Radiculopatías"
    },
    {
      "id": 5,
      "nom": "Theme 07 Anexo - Test Columna Vertebral"
    },
    {
      "id": 6,
      "nom": "THEME 08 Anexo - Test MMSS"
    },
    {
      "id": 7,
      "nom": "THEME 08- MALADIES NEURODEGENERATIVES"
    },
    {
      "id": 8,
      "nom": "THEME 09 - MMII Partie 4"
    },
    {
      "id": 9,
      "nom": "THEME 09-MMII PARTIE 2"
    },
    {
      "id": 10,
      "nom": "THEME 10- COLUMNA VERTEBRAL"
    },
    {
      "id": 11,
      "nom": "Theme 10-Fybromialgie"
    },
    {
      "id": 12,
      "nom": "THEME 11- Rhumatologie"
    },
    {
      "id": 13,
      "nom": "THEME 11-MMSS"
    },
    {
      "id": 14,
      "nom": "THEME 12- MMII partie 1"
    },
    {
      "id": 15,
      "nom": "Theme 12-MMII Partie 3"
    },
    {
      "id": 16,
      "nom": "FPMQ GEN TEMA 03 - Douleur"
    },
    {
      "id": 17,
      "nom": "FPMQ GEN TEMA 09 Anexo - Test MMII"
    },
    {
      "id": 18,
      "nom": "MMSS coude et poignet"
    }
  ],
  "processusBio1": [
    {
      "id": 1,
      "nom": "Chapitre 1. Introduction à la physique et à la chimie de la vie"
    },
    {
      "id": 2,
      "nom": "Chapitre 2. Origine et évolution cellulaires"
    },
    {
      "id": 3,
      "nom": "Chapitre 3. La membrane plasmique. structure et transport"
    },
    {
      "id": 4,
      "nom": "Chapitre 4. Cytosquelette. Le sarcomère comme exemple"
    },
    {
      "id": 5,
      "nom": "Chapitre 5. Organites cellulaires"
    },
    {
      "id": 6,
      "nom": "Chapitre 6A. La signalisation et la stimulation cellulaire"
    },
    {
      "id": 7,
      "nom": "Chapitre 6B. La signalisation et la stimulation cellulaire, la mécanotransduction"
    },
    {
      "id": 8,
      "nom": "Chapitre 7. Etapes et controle de la division cellulaire"
    },
    {
      "id": 9,
      "nom": "Chapitre 8. Gènes, chromosomes et génome"
    },
    {
      "id": 10,
      "nom": "Chapitre 9. Synthèse des protéines. L'épigénétique (IMR)"
    },
    {
      "id": 11,
      "nom": "Chapitre 10. Principes physiques des transformation énergétiques"
    },
    {
      "id": 12,
      "nom": "Chapitre 11. Thermodynamique"
    },
    {
      "id": 13,
      "nom": "Chapitre 12. Métabolisme de la cellule humaine"
    },
    {
      "id": 14,
      "nom": "Chapitre 13. La temperature"
    },
    {
      "id": 15,
      "nom": "Chapitre 14. Généralités sur les ondes et les ondes sonores"
    },
    {
      "id": 16,
      "nom": "Chapitre 15 Ondes électromagnétiques et applications rev"
    }
  ],
  "processusBio2": [
    {
      "id": 1,
      "nom": "PBII T08 - Cellules souches et médecine régénérative"
    },
    {
      "id": 2,
      "nom": "PBII T1 - Méiose et gamétogenèse humaine rev"
    },
    {
      "id": 3,
      "nom": "PBII T11 - Régénération et réparation du tissu épithélial Cicatrices"
    },
    {
      "id": 4,
      "nom": "PBII T12 - Tissu adipeux"
    },
    {
      "id": 5,
      "nom": "PBII T13 - Tissu Sanguin"
    },
    {
      "id": 6,
      "nom": "PBII T14 - Tissu cartilagineux"
    },
    {
      "id": 7,
      "nom": "PBII T15 - Tissu Osseux"
    },
    {
      "id": 8,
      "nom": "PBII T16 - Tissus musculaires"
    },
    {
      "id": 9,
      "nom": "PBII T17 - Réparation et régénération des tissus musculaires"
    },
    {
      "id": 10,
      "nom": "PBII T18 - Tissu nerveux"
    },
    {
      "id": 11,
      "nom": "PBII T19 - Régénération du tissu nerveux"
    },
    {
      "id": 12,
      "nom": "PBII T2 - Développement embryonnaire"
    },
    {
      "id": 13,
      "nom": "PBII T3 - Introduction à l'histologie"
    },
    {
      "id": 14,
      "nom": "PBII T4 - Caractéristiques des tissus conjonctifs rev"
    },
    {
      "id": 15,
      "nom": "PBII T5 - Types de tissus conjonctifs non spécialisés rev"
    },
    {
      "id": 16,
      "nom": "PBII T6 - Le processus d'inflammation rev"
    },
    {
      "id": 17,
      "nom": "PBII T7 - Réparation et Régénération tissulaire des tissus conjonctifs"
    },
    {
      "id": 18,
      "nom": "PBII T9, 10 - Tissu épithélial"
    }
  ],
  "psycho": [
    {
      "id": 1,
      "nom": "Sujet 1 - Psychologie de la Santé"
    },
    {
      "id": 2,
      "nom": "Sujet 2 - Comportements Santé Maladie"
    },
    {
      "id": 3,
      "nom": "Sujet 3. Conditionnement, émotions et stress"
    },
    {
      "id": 4,
      "nom": "Sujet 4. Douleur"
    },
    {
      "id": 5,
      "nom": "Sujet 5. Adhérence au traitment Psychologie de la santé"
    },
    {
      "id": 6,
      "nom": "Sujet 6 - Relation et Communication"
    }
  ],
  "santePublique": [
    {
      "id": 1,
      "nom": "Thème 1.1 La santé, ses déterminants et indicateurs"
    },
    {
      "id": 2,
      "nom": "Thème 1.2 Santé Publique"
    },
    {
      "id": 3,
      "nom": "Thème 1.3 Démographie et Épidémiologie"
    },
    {
      "id": 4,
      "nom": "Thème 1.4 La prévention et ses niveaux"
    },
    {
      "id": 5,
      "nom": "Thème 1.5 Promotion de la santé et Éducation pour la santé"
    },
    {
      "id": 6,
      "nom": "Thème 2.1 Concept de maladie transmissible"
    },
    {
      "id": 7,
      "nom": "Thème 2.2 Épidémiologie et prévention des maladies à transmission aérienne"
    },
    {
      "id": 8,
      "nom": "Thème 2.3 Épidémiologie et prévention des infections à transmission directe"
    },
    {
      "id": 9,
      "nom": "Thème 2.4 Épidémiologie et prévention des infections à transmission indirecte"
    },
    {
      "id": 10,
      "nom": "Thème 2.5 Mesures générales d’hygiène - précautions standard et spécifiques"
    },
    {
      "id": 11,
      "nom": "Thème 2.6 Ëpidémiologie et prévention des infections associées aux soins"
    },
    {
      "id": 12,
      "nom": "Thème 2.7 Inmunisation active et passive"
    },
    {
      "id": 13,
      "nom": "Thème 3.1 Concept de maladie chronique. Transition épidémiologique"
    },
    {
      "id": 14,
      "nom": "Thème 3.2 Facteurs de risque des maladies chroniques et sa prévalence dans la population"
    },
    {
      "id": 15,
      "nom": "Thème 3.3 Épidémiologie et prévention du Diabète"
    },
    {
      "id": 16,
      "nom": "Thème 3.4 Épidémiologie et prévention des maladies cardiovasculaires"
    },
    {
      "id": 17,
      "nom": "Thème 3.5 Épidémiologie et prévention du cancer"
    },
    {
      "id": 18,
      "nom": "Thème 3.6 Épidémiologie et prévention des maladies respiratoires chroniques"
    },
    {
      "id": 19,
      "nom": "Thème 3.7 Épidémiologie et prévention de maladies musculosquelettiques"
    },
    {
      "id": 20,
      "nom": "Thème 3.8 Épidémiologie et prévention des maladies neurodégénératives"
    },
    {
      "id": 21,
      "nom": "Thème 3.9 Épidémiologie et prévention des troubles de santé mentale"
    },
    {
      "id": 22,
      "nom": "Tema 4-1-Systèmes de santé. Organisation du système de santé espagnol"
    },
    {
      "id": 23,
      "nom": "Tema 4-2 Sociétés v.3"
    },
    {
      "id": 24,
      "nom": "Tema 4-3 Qualité et sécurité v.2"
    },
    {
      "id": 25,
      "nom": "Tema 5-1 Plan stratégique"
    },
    {
      "id": 26,
      "nom": "Tema 5-2 DAFO. Analyse Swot v.2"
    },
    {
      "id": 27,
      "nom": "Tema 5-4 Clients potentiels. Cible"
    },
    {
      "id": 28,
      "nom": "Tema 5-5- Stratégies marketing"
    },
    {
      "id": 29,
      "nom": "Tema 5-6 Gestion et planification des ressources humaines v.2"
    },
    {
      "id": 30,
      "nom": "Tema 5.3 Emplacement de l'enterprise"
    },
    {
      "id": 31,
      "nom": "Tema 6-1 Plan économique v.2"
    },
    {
      "id": 32,
      "nom": "Tema 6-2 Aides et subventions"
    },
    {
      "id": 33,
      "nom": "Tema 6-3 Économie de la santé et planification sanitaire V.2"
    }
  ],
  "structure1": [
    {
      "id": 1,
      "nom": "Chapitre 1 - Introduction, homéostasie et milieu interne (RM 2025)"
    },
    {
      "id": 2,
      "nom": "Chapitre 2 - Système nerveux Partie I (RM 2025)"
    },
    {
      "id": 3,
      "nom": "Chapitre 2 - Système nerveux Partie II (RM 2025)"
    },
    {
      "id": 4,
      "nom": "Chapitre 3 - Système musculaire (RM 2025)"
    },
    {
      "id": 5,
      "nom": "Chapitre 3 Système musculaire (avec rappelle voie sensitive))"
    },
    {
      "id": 6,
      "nom": "Chapitre 4 - Système Endocrinien (RM 2025) version finale"
    },
    {
      "id": 7,
      "nom": "Chapitre 5 - Système Immunitaire (RM 2025) version finale"
    }
  ],
  "structure2": [
    {
      "id": 1,
      "nom": "Chapitre 1 - Le Système Respiratoire (V 2025)"
    },
    {
      "id": 2,
      "nom": "Chapitre 2 - Le Système Cardiovasculaire (V 2025)"
    },
    {
      "id": 3,
      "nom": "Chapitre 3 - Introduction Physiologie de l'exercice"
    },
    {
      "id": 4,
      "nom": "Chapitre 4 - L'appareil digestif et métabolisme énergétique"
    },
    {
      "id": 5,
      "nom": "Diapositive 67 corrigée chapitre 2"
    }
  ],
  "valoColonne": [
    {
      "id": 1,
      "nom": "Base physique et applications d'autres tests complémentaires"
    },
    {
      "id": 2,
      "nom": "Base physique et applications de la radiologie simple"
    },
    {
      "id": 3,
      "nom": "Bases physiques et applications de la tomodensitométrie, de l'IRM et de l'échographie"
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
      "nom": "Révision Rx, TAC, IRM"
    },
    {
      "id": 7,
      "nom": "Teoría ATM"
    },
    {
      "id": 8,
      "nom": "Teoría Lumbar"
    },
    {
      "id": 9,
      "nom": "Tests complémentaires pour l'étude du système nerveux périphérique"
    },
    {
      "id": 10,
      "nom": "Théorie Bassin"
    },
    {
      "id": 11,
      "nom": "Théorie Cervicale -2"
    },
    {
      "id": 12,
      "nom": "Théorie Dorsale"
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
  ]
};

window.CHAPITRES = CHAPITRES;
