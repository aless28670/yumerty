/* =========================================================
   YUMERTY — Chapitres par matière
   Permet de filtrer les QCU par chapitre de cours.
   Chaque question de data.js porte un champ "c" = id du chapitre.
   ========================================================= */

const CHAPITRES = {
  "anat1": [
    {
      "id": 1,
      "nom": "Ostéoarthrologie du tronc"
    },
    {
      "id": 2,
      "nom": "Les os du crâne"
    },
    {
      "id": 3,
      "nom": "Myologie du dos et de la région sous-occipitale"
    },
    {
      "id": 4,
      "nom": "Myologie de la région antérieure et latérale du cou"
    },
    {
      "id": 5,
      "nom": "ATM, muscles de la mastication et de la mimique"
    },
    {
      "id": 6,
      "nom": "Muscles de la cage thoracique"
    },
    {
      "id": 7,
      "nom": "Muscles de la paroi abdominale"
    },
    {
      "id": 8,
      "nom": "Muscles du plancher pelvien"
    },
    {
      "id": 9,
      "nom": "Articulation de la hanche"
    },
    {
      "id": 10,
      "nom": "Muscles de la hanche"
    },
    {
      "id": 11,
      "nom": "Articulation du genou"
    },
    {
      "id": 12,
      "nom": "Muscles de la cuisse"
    },
    {
      "id": 13,
      "nom": "Ostéoarthrologie du pied et de la cheville"
    },
    {
      "id": 14,
      "nom": "Muscles de la jambe"
    },
    {
      "id": 15,
      "nom": "Muscles du pied"
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
      "nom": "Concepts, Classification and Groups of Dental Materials"
    },
    {
      "id": 2,
      "nom": "Physical Properties of Dental Materials"
    },
    {
      "id": 3,
      "nom": "Chemical Properties, Surfaces and Adhesion"
    },
    {
      "id": 4,
      "nom": "Biological Properties, Biocompatibility and Regulations"
    },
    {
      "id": 5,
      "nom": "Impression Materials"
    },
    {
      "id": 6,
      "nom": "Acrylics"
    },
    {
      "id": 7,
      "nom": "Composite Resins and Sealants"
    },
    {
      "id": 8,
      "nom": "Waxes, Thermoplastic Materials and Gutta-percha"
    },
    {
      "id": 9,
      "nom": "Plasters and Casts"
    },
    {
      "id": 10,
      "nom": "Dental Cements"
    },
    {
      "id": 11,
      "nom": "Porcelains and Vitroceramics"
    },
    {
      "id": 12,
      "nom": "Metallic Materials: Generalities, Alloys and Noble Metals"
    },
    {
      "id": 13,
      "nom": "Non-noble Metals, Steel and Alloys"
    },
    {
      "id": 14,
      "nom": "Titanium, Implants and Silver Amalgam"
    },
    {
      "id": 15,
      "nom": "Bone Regeneration Materials"
    }
  ],
  "dentDiagnostic": [
    {
      "id": 1,
      "nom": "History and Fundamentals of Radiology"
    },
    {
      "id": 2,
      "nom": "Atomic Structure and Electromagnetic Radiation"
    },
    {
      "id": 3,
      "nom": "X-Ray Production and Equipment"
    },
    {
      "id": 4,
      "nom": "X-Ray Interactions with Matter"
    },
    {
      "id": 5,
      "nom": "Films, Digital Sensors and Processing"
    },
    {
      "id": 6,
      "nom": "Image Quality: Density, Contrast and Geometry"
    },
    {
      "id": 7,
      "nom": "Radiation Protection, Dose Limits and Legislation"
    },
    {
      "id": 8,
      "nom": "Radiobiology: Mechanisms and Radiosensitivity"
    },
    {
      "id": 9,
      "nom": "Radiation Effects and Acute Radiation Syndrome"
    },
    {
      "id": 10,
      "nom": "Periapical Techniques: Bisecting Angle and Paralleling"
    },
    {
      "id": 11,
      "nom": "Bitewing and Occlusal Techniques"
    },
    {
      "id": 12,
      "nom": "Normal Radiographic Anatomy"
    },
    {
      "id": 13,
      "nom": "Panoramic Radiography (Orthopantomography)"
    },
    {
      "id": 14,
      "nom": "Cephalometric, CT, CBCT and Object Localization"
    },
    {
      "id": 15,
      "nom": "Exposure and Technique Errors"
    },
    {
      "id": 16,
      "nom": "Caries, Periodontal, Periapical Lesions and Trauma"
    },
    {
      "id": 17,
      "nom": "Interpretation Protocol and Radiographic Prescription"
    }
  ],
  "dentHeadNeck": [
    {
      "id": 1,
      "nom": "Dental anatomy generalities"
    },
    {
      "id": 2,
      "nom": "Incisors and canines"
    },
    {
      "id": 3,
      "nom": "Premolars"
    },
    {
      "id": 4,
      "nom": "Molars"
    },
    {
      "id": 5,
      "nom": "Skull osteology: cranial and facial bones"
    },
    {
      "id": 6,
      "nom": "Mandible and TMJ"
    },
    {
      "id": 7,
      "nom": "Cranial fossae and cavities"
    },
    {
      "id": 8,
      "nom": "Temporal, infratemporal and pterygopalatine fossae"
    },
    {
      "id": 9,
      "nom": "Muscles of the first branchial arch"
    },
    {
      "id": 10,
      "nom": "Muscles of the second branchial arch"
    },
    {
      "id": 11,
      "nom": "Tongue muscles"
    },
    {
      "id": 12,
      "nom": "Hyoid bone, neck muscles and cervical fasciae"
    },
    {
      "id": 13,
      "nom": "Head and neck arteries"
    },
    {
      "id": 14,
      "nom": "Venous and lymphatic drainage"
    },
    {
      "id": 15,
      "nom": "Pharynx and soft palate"
    },
    {
      "id": 16,
      "nom": "Larynx"
    }
  ],
  "dentOcclusion": [
    {
      "id": 1,
      "nom": "Occlusion in Dentistry: Basic Concepts"
    },
    {
      "id": 2,
      "nom": "Stomatognathic System and TMJ Anatomy"
    },
    {
      "id": 3,
      "nom": "Masticatory Muscles and Neuromuscular Physiology"
    },
    {
      "id": 4,
      "nom": "Cephalometric Points and Reference Planes"
    },
    {
      "id": 5,
      "nom": "Dental Anatomy and Static Occlusal Relationships"
    },
    {
      "id": 6,
      "nom": "Static Mandibular Positions and Vertical Dimension"
    },
    {
      "id": 7,
      "nom": "Mandibular Movements and Border Movements"
    },
    {
      "id": 8,
      "nom": "Centric Relation: Concept and Recording"
    },
    {
      "id": 9,
      "nom": "CR-MI Discrepancy: THIOP, MIOP and LIOP"
    },
    {
      "id": 10,
      "nom": "Protrusion: Condylar and Incisal Guidance"
    },
    {
      "id": 11,
      "nom": "Lateral Movements: Bennett and Fisher Angles"
    },
    {
      "id": 12,
      "nom": "Articulators"
    },
    {
      "id": 13,
      "nom": "Facebows and Cranio-Maxillary Transfer"
    },
    {
      "id": 14,
      "nom": "Occlusal Schemes and Anterior Guidance"
    },
    {
      "id": 15,
      "nom": "Prematurities, Interferences and Occlusal Analysis"
    },
    {
      "id": 16,
      "nom": "Temporomandibular Disorders and Orofacial Pain"
    }
  ],
  "dentPatho2Fin": [
    {
      "id": 1,
      "nom": "Digestive System: Semiology and Investigations"
    },
    {
      "id": 2,
      "nom": "Oral Cavity Disorders and Syndromes"
    },
    {
      "id": 3,
      "nom": "Oral Cavity and Drugs: Adverse Drug Reactions"
    },
    {
      "id": 4,
      "nom": "Reflux, Peptic Ulcer and NSAID Toxicity"
    },
    {
      "id": 5,
      "nom": "Acute and Chronic Viral Hepatitis"
    },
    {
      "id": 6,
      "nom": "Liver Cirrhosis and Portal Hypertension"
    },
    {
      "id": 7,
      "nom": "Inflammatory Bowel Disease"
    },
    {
      "id": 8,
      "nom": "Colorectal Cancer"
    },
    {
      "id": 9,
      "nom": "Epilepsy and Seizures"
    },
    {
      "id": 10,
      "nom": "Cerebrovascular Disease and Stroke"
    },
    {
      "id": 11,
      "nom": "Loss of Consciousness, Syncope and Medical Emergencies"
    },
    {
      "id": 12,
      "nom": "Female Sex and Health"
    },
    {
      "id": 13,
      "nom": "Osteoarthritis and Osteoporosis"
    },
    {
      "id": 14,
      "nom": "Asthma"
    },
    {
      "id": 15,
      "nom": "COPD"
    },
    {
      "id": 16,
      "nom": "Ischaemic Heart Disease"
    },
    {
      "id": 17,
      "nom": "Heart Failure"
    },
    {
      "id": 18,
      "nom": "Arterial and Venous Diseases"
    },
    {
      "id": 19,
      "nom": "Congenital Heart Disease and Valvular Disease"
    },
    {
      "id": 20,
      "nom": "Infective Endocarditis and Antibiotic Prophylaxis"
    },
    {
      "id": 21,
      "nom": "Blood Transfusion and Bone Marrow Transplantation"
    }
  ],
  "dentPatho2Mid": [
    {
      "id": 1,
      "nom": "Blood Disorders: Blood Count, Anaemias and Haematological Malignancies"
    },
    {
      "id": 2,
      "nom": "Hemostasis: Physiology, Laboratory Tests and Bleeding Risk Assessment"
    },
    {
      "id": 3,
      "nom": "Bleeding Disorders and Thrombophilia"
    },
    {
      "id": 4,
      "nom": "Antithrombotic and Procoagulant Drugs in Dentistry"
    },
    {
      "id": 5,
      "nom": "Blood Transfusion and Bone Marrow Transplantation"
    },
    {
      "id": 6,
      "nom": "Cardiovascular Basics: Physiology, Semiology and ECG"
    },
    {
      "id": 7,
      "nom": "Arterial Hypertension"
    },
    {
      "id": 8,
      "nom": "Diabetes Mellitus and Hypoglycaemia"
    },
    {
      "id": 9,
      "nom": "Ischaemic Heart Disease"
    },
    {
      "id": 10,
      "nom": "Heart Failure"
    },
    {
      "id": 11,
      "nom": "Arrhythmias and Sudden Cardiac Death"
    },
    {
      "id": 12,
      "nom": "Arterial and Venous Diseases"
    },
    {
      "id": 13,
      "nom": "Congenital Heart Disease and Valvular Disease"
    },
    {
      "id": 14,
      "nom": "Infective Endocarditis and Antibiotic Prophylaxis"
    }
  ],
  "dentPathology1Fin": [
    {
      "id": 1,
      "nom": "Immunology: Innate Immunity and Inflammation"
    },
    {
      "id": 2,
      "nom": "Immunology: Adaptive Immunity, Antibodies and Immunization"
    },
    {
      "id": 3,
      "nom": "Immune-Mediated Diseases: Immunodeficiencies, Allergy and Hypersensitivity"
    },
    {
      "id": 4,
      "nom": "Anaphylaxis"
    },
    {
      "id": 5,
      "nom": "Autoimmune Diseases: Pemphigus and Lichen Planus"
    },
    {
      "id": 6,
      "nom": "Infectious Diseases: General Concepts"
    },
    {
      "id": 7,
      "nom": "Infectious Diseases: Diagnosis, Prevention and Treatment"
    },
    {
      "id": 8,
      "nom": "Sexually Transmitted Infections"
    },
    {
      "id": 9,
      "nom": "HIV Infection and AIDS"
    },
    {
      "id": 10,
      "nom": "Oral Infections"
    },
    {
      "id": 11,
      "nom": "Occupational Exposures and Standard Precautions"
    },
    {
      "id": 12,
      "nom": "Neoplasms: Basics, Etiology and Classification"
    },
    {
      "id": 13,
      "nom": "Cancer: Diagnosis, Staging and Treatment"
    },
    {
      "id": 14,
      "nom": "Oral and Oropharyngeal Cancer"
    },
    {
      "id": 15,
      "nom": "Oral Premalignant, White and Pigmented Lesions"
    },
    {
      "id": 16,
      "nom": "Medical Dental History, Surgical Risk and Emergencies"
    },
    {
      "id": 17,
      "nom": "Cardiorespiratory Pathology (Pathology 2)"
    }
  ],
  "dentPathology1Mid": [
    {
      "id": 1,
      "nom": "Health Care Bases, Bioethics and Clinical Documentation"
    },
    {
      "id": 2,
      "nom": "Evidence-Based Dentistry and Clinical Research"
    },
    {
      "id": 3,
      "nom": "Medical Care Process, Prevention and Screening"
    },
    {
      "id": 4,
      "nom": "Clinical Diagnosis, Anamnesis and Physical Examination"
    },
    {
      "id": 5,
      "nom": "Blood Tests and Urinalysis"
    },
    {
      "id": 6,
      "nom": "Microbiology, Serology and Histopathology"
    },
    {
      "id": 7,
      "nom": "Imaging Studies"
    },
    {
      "id": 8,
      "nom": "Prognosis, Treatment and Pharmacology"
    },
    {
      "id": 9,
      "nom": "Medical Dental History, Surgical Risk and Emergencies"
    },
    {
      "id": 10,
      "nom": "Neoplasms: Basics, Etiology and Classification"
    },
    {
      "id": 11,
      "nom": "Cancer: Diagnosis, Staging and Treatment"
    },
    {
      "id": 12,
      "nom": "Oral and Oropharyngeal Cancer"
    },
    {
      "id": 13,
      "nom": "Oral Premalignant, White and Pigmented Lesions"
    },
    {
      "id": 14,
      "nom": "Occupational Exposures and Standard Precautions"
    }
  ],
  "dentPeriodoncia": [
    {
      "id": 1,
      "nom": "The Periodontium: Overview and Development"
    },
    {
      "id": 2,
      "nom": "Anatomy of the Gingiva"
    },
    {
      "id": 3,
      "nom": "Cementum and Periodontal Ligament"
    },
    {
      "id": 4,
      "nom": "Alveolar Bone and Bone Biology"
    },
    {
      "id": 5,
      "nom": "Blood Supply, Innervation and Lymphatic Drainage"
    },
    {
      "id": 6,
      "nom": "Biological Width, Gingival Biotypes and Peri-implant Tissues"
    },
    {
      "id": 7,
      "nom": "Epidemiology, Risk Factors and Systemic Links"
    },
    {
      "id": 8,
      "nom": "Periodontal Examination, Indices and Diagnosis"
    },
    {
      "id": 9,
      "nom": "Dental Biofilm and Calculus"
    },
    {
      "id": 10,
      "nom": "Periodontal Microbiology and Pathogens"
    },
    {
      "id": 11,
      "nom": "Pathogenesis of Periodontitis"
    },
    {
      "id": 12,
      "nom": "Non-Plaque-Induced Gingival Diseases"
    },
    {
      "id": 13,
      "nom": "Plaque-Induced Gingival Diseases"
    },
    {
      "id": 14,
      "nom": "Periodontitis and its Classification"
    },
    {
      "id": 15,
      "nom": "Molar-Incisor Pattern (Aggressive) Periodontitis"
    },
    {
      "id": 16,
      "nom": "Necrotizing Periodontal Diseases and Periodontal Abscess"
    },
    {
      "id": 17,
      "nom": "Mechanical Supragingival Plaque Control"
    },
    {
      "id": 18,
      "nom": "Non-Surgical Periodontal Treatment"
    },
    {
      "id": 19,
      "nom": "Periodontal Maintenance"
    },
    {
      "id": 20,
      "nom": "Periodontal Surgery and Regeneration"
    }
  ],
  "dentPharmacoFin": [
    {
      "id": 1,
      "nom": "General Principles of Antibiotic Therapy"
    },
    {
      "id": 2,
      "nom": "Antibiotic Prophylaxis in Dentistry"
    },
    {
      "id": 3,
      "nom": "Beta-Lactam Antibiotics"
    },
    {
      "id": 4,
      "nom": "Other Antibacterial Drugs"
    },
    {
      "id": 5,
      "nom": "Antiviral and Antifungal Drugs"
    },
    {
      "id": 6,
      "nom": "Antiseptics, Caries, Aphthae and Halitosis"
    },
    {
      "id": 7,
      "nom": "Treatment of Oropharyngeal Infections"
    },
    {
      "id": 8,
      "nom": "Antihypertensives, Vasodilators and Diuretics"
    },
    {
      "id": 9,
      "nom": "Inotropics, Antiarrhythmics and Antianginals"
    },
    {
      "id": 10,
      "nom": "Anticoagulants, Antiplatelets and Fibrinolytics"
    },
    {
      "id": 11,
      "nom": "Antidiabetic Drugs and Insulin"
    },
    {
      "id": 12,
      "nom": "Gastrointestinal Drugs"
    },
    {
      "id": 13,
      "nom": "Respiratory Pharmacology"
    },
    {
      "id": 14,
      "nom": "Pharmacology of Bone"
    },
    {
      "id": 15,
      "nom": "Cytostatic Drugs"
    },
    {
      "id": 16,
      "nom": "Corticosteroids"
    },
    {
      "id": 17,
      "nom": "Antimigraine and Antihistamine Drugs"
    },
    {
      "id": 18,
      "nom": "General Pharmacology, Adverse Reactions and Drug Use in Special Situations"
    },
    {
      "id": 19,
      "nom": "Nervous System Drugs and Anesthetics"
    }
  ],
  "dentPharmacoMid": [
    {
      "id": 1,
      "nom": "General Pharmacology and Prescribing"
    },
    {
      "id": 2,
      "nom": "Pharmacokinetics"
    },
    {
      "id": 3,
      "nom": "Pharmacodynamics"
    },
    {
      "id": 4,
      "nom": "Adverse Drug Reactions"
    },
    {
      "id": 5,
      "nom": "Drug Interactions"
    },
    {
      "id": 6,
      "nom": "Autonomic Nervous System"
    },
    {
      "id": 7,
      "nom": "Neuromuscular Blockers"
    },
    {
      "id": 8,
      "nom": "Opioid Analgesics"
    },
    {
      "id": 9,
      "nom": "NSAIDs and Non-Opioid Analgesics"
    },
    {
      "id": 10,
      "nom": "Corticosteroids"
    },
    {
      "id": 11,
      "nom": "Antimigraine and Antihistamine Drugs"
    },
    {
      "id": 12,
      "nom": "Benzodiazepines and Hypnotics"
    },
    {
      "id": 13,
      "nom": "Antidepressants, Antiepileptics and Antiparkinsonian Drugs"
    },
    {
      "id": 14,
      "nom": "Local Anesthetics"
    },
    {
      "id": 15,
      "nom": "General Anesthetics"
    },
    {
      "id": 16,
      "nom": "Antimicrobial and Antiseptic Drugs"
    },
    {
      "id": 17,
      "nom": "Cardiovascular Drugs"
    },
    {
      "id": 18,
      "nom": "Respiratory, Digestive and Endocrine Drugs"
    },
    {
      "id": 19,
      "nom": "Cytostatics, Immunosuppressants and Bone Drugs"
    }
  ],
  "dentPhysiology": [
    {
      "id": 1,
      "nom": "Oral Cavity and Oral Mucosa"
    },
    {
      "id": 2,
      "nom": "Enamel"
    },
    {
      "id": 3,
      "nom": "Dentin and Pulp"
    },
    {
      "id": 4,
      "nom": "Periodontium and Cementum"
    },
    {
      "id": 5,
      "nom": "Orofacial Embryology and Tooth Development"
    },
    {
      "id": 6,
      "nom": "Cranial Nerves"
    },
    {
      "id": 7,
      "nom": "Trigeminal Nerve - Generalities and Branches"
    },
    {
      "id": 8,
      "nom": "Trigeminal Nerve - Central Pathways"
    },
    {
      "id": 9,
      "nom": "Somatosensory System - Generalities"
    },
    {
      "id": 10,
      "nom": "Mechanoreceptors and Proprioceptors"
    },
    {
      "id": 11,
      "nom": "Temperature and Pain"
    },
    {
      "id": 12,
      "nom": "Orofacial Pain"
    },
    {
      "id": 13,
      "nom": "Motor Control of Mastication"
    },
    {
      "id": 14,
      "nom": "Salivary Glands - Anatomy and Histology"
    },
    {
      "id": 15,
      "nom": "Salivary Glands - Innervation and Secretion"
    },
    {
      "id": 16,
      "nom": "Taste"
    },
    {
      "id": 17,
      "nom": "Swallowing"
    }
  ],
  "dentSemiology1": [
    {
      "id": 1,
      "nom": "General concepts, inflammation & infection"
    },
    {
      "id": 2,
      "nom": "Environmental, congenital & genetic diseases"
    },
    {
      "id": 3,
      "nom": "Neoplasias"
    },
    {
      "id": 4,
      "nom": "Nutrition & eating pathophysiology"
    },
    {
      "id": 5,
      "nom": "Hematology basics & red blood cell disorders"
    },
    {
      "id": 6,
      "nom": "White blood cells, leukemias & lymphomas"
    },
    {
      "id": 7,
      "nom": "Coagulation & hemostasis disorders"
    },
    {
      "id": 8,
      "nom": "Cardiovascular basics, EKG & arrhythmias"
    },
    {
      "id": 9,
      "nom": "Atherosclerosis & ischemic heart disease"
    },
    {
      "id": 10,
      "nom": "Heart failure"
    },
    {
      "id": 11,
      "nom": "Blood pressure, shock & syncope"
    },
    {
      "id": 12,
      "nom": "Valvular heart disease & infective endocarditis"
    },
    {
      "id": 13,
      "nom": "Peripheral vascular diseases & thromboembolism"
    },
    {
      "id": 14,
      "nom": "Respiratory pathophysiology & respiratory failure"
    },
    {
      "id": 15,
      "nom": "Obstructive pulmonary diseases"
    },
    {
      "id": 16,
      "nom": "Restrictive & pleural diseases, pulmonary hypertension"
    }
  ],
  "dentSemiology2": [
    {
      "id": 1,
      "nom": "Approach to Digestive Disease and Acute Abdomen"
    },
    {
      "id": 2,
      "nom": "Esophageal Pathophysiology"
    },
    {
      "id": 3,
      "nom": "Gastroduodenal Pathophysiology"
    },
    {
      "id": 4,
      "nom": "Small and Large Bowel Pathophysiology"
    },
    {
      "id": 5,
      "nom": "Liver Failure and Portal Hypertension"
    },
    {
      "id": 6,
      "nom": "Jaundice and Biliary Tract Diseases"
    },
    {
      "id": 7,
      "nom": "Approach to Endocrine Disease and Pituitary Gland"
    },
    {
      "id": 8,
      "nom": "Diabetes Mellitus"
    },
    {
      "id": 9,
      "nom": "Thyroid Gland Pathophysiology"
    },
    {
      "id": 10,
      "nom": "Adrenal Gland Pathophysiology"
    },
    {
      "id": 11,
      "nom": "Renal Function and Renal Failure"
    },
    {
      "id": 12,
      "nom": "Glomerular Diseases"
    },
    {
      "id": 13,
      "nom": "Urinary Tract Diseases"
    },
    {
      "id": 14,
      "nom": "Bone and Joint Pathophysiology"
    },
    {
      "id": 15,
      "nom": "Approach to Neurological Disease and Consciousness"
    },
    {
      "id": 16,
      "nom": "Motor System and Cerebrovascular Disease"
    },
    {
      "id": 17,
      "nom": "CSF and Meninges Pathophysiology"
    },
    {
      "id": 18,
      "nom": "Cranial Nerves, Neuropathy and Myopathy"
    }
  ],
  "histoireKine": [
    {
      "id": 1,
      "nom": "Qu'est-ce que la physiothérapie ? Concept et agents physiques"
    },
    {
      "id": 2,
      "nom": "Origine et évolution de la kinésithérapie"
    },
    {
      "id": 3,
      "nom": "La physiothérapie en tant que science"
    },
    {
      "id": 4,
      "nom": "Le physiothérapeute, agent de santé en contexte interprofessionnel"
    },
    {
      "id": 5,
      "nom": "L'entretien clinique et l'anamnèse"
    },
    {
      "id": 6,
      "nom": "Le raisonnement clinique"
    },
    {
      "id": 7,
      "nom": "Effets physiologiques de l'exercice thérapeutique"
    },
    {
      "id": 8,
      "nom": "Effets physiologiques de la thérapie manuelle"
    },
    {
      "id": 9,
      "nom": "Effets physiologiques de l'électrothérapie"
    },
    {
      "id": 10,
      "nom": "Effets physiologiques de la kinésithérapie respiratoire"
    },
    {
      "id": 11,
      "nom": "Effets physiologiques de la physiothérapie neurologique"
    },
    {
      "id": 12,
      "nom": "Effets physiologiques de la physiothérapie invasive"
    },
    {
      "id": 13,
      "nom": "Physiologie de la douleur et de l'inflammation"
    }
  ],
  "investigation": [
    {
      "id": 1,
      "nom": "Méthode scientifique, types de recherche et éthique"
    },
    {
      "id": 2,
      "nom": "Erreurs, biais, validité et fiabilité des mesures"
    },
    {
      "id": 3,
      "nom": "Stratégies et conceptions d'étude"
    },
    {
      "id": 4,
      "nom": "Question de recherche, hypothèse et objectifs"
    },
    {
      "id": 5,
      "nom": "Variables et leur mesure"
    },
    {
      "id": 6,
      "nom": "Statistiques descriptives et représentation graphique"
    },
    {
      "id": 7,
      "nom": "Communication scientifique, bases de données et article"
    },
    {
      "id": 8,
      "nom": "Qualité des études, niveaux de preuve et revues systématiques"
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
      "nom": "Rachis cervical : anatomie fonctionnelle et biomécanique"
    },
    {
      "id": 2,
      "nom": "Syndromes cervicaux et modèles cliniques"
    },
    {
      "id": 3,
      "nom": "Rachis cervical : artère vertébrale et relations neurovasculaires"
    },
    {
      "id": 4,
      "nom": "Dysfonctions cervicales et tests de mobilité"
    },
    {
      "id": 5,
      "nom": "Examen neurologique et tests orthopédiques cervicaux"
    },
    {
      "id": 6,
      "nom": "Critères de sécurité cervicaux et tests d'instabilité"
    },
    {
      "id": 7,
      "nom": "Bassin : biomécanique et dysfonctions ilio-sacrées"
    },
    {
      "id": 8,
      "nom": "Sacrum : axes, mouvements et torsions"
    },
    {
      "id": 9,
      "nom": "Neurodynamique et plexus brachial"
    },
    {
      "id": 10,
      "nom": "Syndrome du défilé thoraco-brachial"
    },
    {
      "id": 11,
      "nom": "Syndromes canalaires du membre supérieur"
    },
    {
      "id": 12,
      "nom": "Chaînes musculaires GDS"
    },
    {
      "id": 13,
      "nom": "RPG-SGA : examen morphologique et tests de raccourcissement"
    },
    {
      "id": 14,
      "nom": "RPG-SGA : principes et postures"
    }
  ],
  "pathoChir1": [
    {
      "id": 1,
      "nom": "Concepts chirurgicaux, anesthésie et patient polytraumatisé"
    },
    {
      "id": 2,
      "nom": "Inflammation, plaies, cicatrisation et brûlures"
    },
    {
      "id": 3,
      "nom": "Infections locales, générales et ostéoarticulaires"
    },
    {
      "id": 4,
      "nom": "Tumeurs osseuses bénignes et malignes"
    },
    {
      "id": 5,
      "nom": "Imagerie et examens complémentaires"
    },
    {
      "id": 6,
      "nom": "Fractures : étiologie, mécanismes et classification"
    },
    {
      "id": 7,
      "nom": "Consolidation des fractures, ostéosynthèse et pathologie du cal"
    },
    {
      "id": 8,
      "nom": "Plaque de croissance et épiphysiolyse"
    },
    {
      "id": 9,
      "nom": "Cartilage articulaire et lésions méniscales"
    },
    {
      "id": 10,
      "nom": "Arthrose, arthrites et arthropathies"
    },
    {
      "id": 11,
      "nom": "Pathologie musculaire, tendineuse et ligamentaire"
    },
    {
      "id": 12,
      "nom": "Nerfs périphériques, syndrome des loges et SDRC"
    },
    {
      "id": 13,
      "nom": "Rachis cervical : anatomie, radiologie et traumatismes"
    },
    {
      "id": 14,
      "nom": "Cervicalgies et pathologies dégénératives cervicales"
    },
    {
      "id": 15,
      "nom": "Rachis thoraco-lombaire : anatomie et lésions traumatiques"
    },
    {
      "id": 16,
      "nom": "Lombalgies, hernies discales et déformations du dos"
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
      "nom": "Tissus de l'appareil locomoteur : os, cartilage, muscle, tendon"
    },
    {
      "id": 2,
      "nom": "Lombalgie : pathologie discale et radiculaire"
    },
    {
      "id": 3,
      "nom": "Lombalgie : autres causes et déformations du rachis"
    },
    {
      "id": 4,
      "nom": "Cervicalgie, radiculopathie et myélopathie cervicales"
    },
    {
      "id": 5,
      "nom": "Lésions du système nerveux périphérique"
    },
    {
      "id": 6,
      "nom": "Plexus brachial et compressions nerveuses du membre supérieur"
    },
    {
      "id": 7,
      "nom": "Compressions nerveuses du membre inférieur"
    },
    {
      "id": 8,
      "nom": "Pathologie osseuse non traumatique : ostéoporose, Paget"
    },
    {
      "id": 9,
      "nom": "Pathologie musculaire non traumatique"
    },
    {
      "id": 10,
      "nom": "Arthropathies et arthrites non traumatiques"
    },
    {
      "id": 11,
      "nom": "Cartilage articulaire : vieillissement et arthrose"
    },
    {
      "id": 12,
      "nom": "Chirurgie des lésions non traumatiques : arthroplastie et arthrodèse"
    },
    {
      "id": 13,
      "nom": "Épaule douloureuse"
    },
    {
      "id": 14,
      "nom": "Syndromes douloureux du coude"
    },
    {
      "id": 15,
      "nom": "Douleur de la main et du poignet"
    },
    {
      "id": 16,
      "nom": "Hanche douloureuse de l'adulte"
    },
    {
      "id": 17,
      "nom": "Genou douloureux de l'adulte"
    },
    {
      "id": 18,
      "nom": "Pied de l'enfant et pied douloureux de l'adulte"
    },
    {
      "id": 19,
      "nom": "Thérapie manuelle et neurodynamique"
    }
  ],
  "pathologie2": [
    {
      "id": 1,
      "nom": "Bases physiopathologiques générales de la neurologie"
    },
    {
      "id": 2,
      "nom": "Lésions cérébrales acquises : AVC et hémorragies"
    },
    {
      "id": 3,
      "nom": "Troubles cognitifs et neuropsychologiques"
    },
    {
      "id": 4,
      "nom": "Troubles du tonus, du mouvement et de la coordination"
    },
    {
      "id": 5,
      "nom": "Dyskinésies et mouvements anormaux"
    },
    {
      "id": 6,
      "nom": "Maladie de Parkinson et parkinsonismes"
    },
    {
      "id": 7,
      "nom": "Lésion médullaire"
    },
    {
      "id": 8,
      "nom": "Exploration neurologique"
    },
    {
      "id": 9,
      "nom": "Troubles sensoriels et pathologie du système nerveux périphérique"
    },
    {
      "id": 10,
      "nom": "Patient oncologique"
    },
    {
      "id": 11,
      "nom": "Pathologies dégénératives : sclérose en plaques et SLA"
    },
    {
      "id": 12,
      "nom": "Syndrome de Guillain-Barré"
    },
    {
      "id": 13,
      "nom": "Patient gériatrique"
    },
    {
      "id": 14,
      "nom": "Démences et maladie d'Alzheimer"
    },
    {
      "id": 15,
      "nom": "Développement neurologique de l'enfant"
    },
    {
      "id": 16,
      "nom": "Principes de neurorééducation"
    }
  ],
  "procesos1": [
    {
      "id": 1,
      "nom": "Introduction à la kinésithérapie respiratoire"
    },
    {
      "id": 2,
      "nom": "Anatomie et développement du système respiratoire"
    },
    {
      "id": 3,
      "nom": "Mécanique ventilatoire, muscles et volumes pulmonaires"
    },
    {
      "id": 4,
      "nom": "Propriétés physiques du système respiratoire"
    },
    {
      "id": 5,
      "nom": "Positions, ventilation-perfusion et excursion diaphragmatique"
    },
    {
      "id": 6,
      "nom": "Évaluation du patient respiratoire"
    },
    {
      "id": 7,
      "nom": "Auscultation et troubles ventilatoires"
    },
    {
      "id": 8,
      "nom": "Spirométrie"
    },
    {
      "id": 9,
      "nom": "Techniques expiratoires lentes"
    },
    {
      "id": 10,
      "nom": "Techniques expiratoires forcées et toux"
    },
    {
      "id": 11,
      "nom": "Techniques des voies aériennes extra-thoraciques"
    },
    {
      "id": 12,
      "nom": "Techniques inspiratoires lentes et ventilation dirigée"
    },
    {
      "id": 13,
      "nom": "Techniques complémentaires et instrumentales"
    },
    {
      "id": 14,
      "nom": "Aérosolthérapie et pharmacologie inhalée"
    },
    {
      "id": 15,
      "nom": "Oxygénothérapie et ventilation mécanique"
    },
    {
      "id": 16,
      "nom": "Pathologies respiratoires et indications de la KR"
    }
  ],
  "procesos2": [
    {
      "id": 1,
      "nom": "Contexte de la kinésithérapie et raisonnement clinique"
    },
    {
      "id": 2,
      "nom": "Processus physiopathologiques et réparation des tissus"
    },
    {
      "id": 3,
      "nom": "Immobilisation et évaluation fonctionnelle"
    },
    {
      "id": 4,
      "nom": "Douleur : physiopathologie et prise en charge"
    },
    {
      "id": 5,
      "nom": "Fibromyalgie et sensibilisation centrale"
    },
    {
      "id": 6,
      "nom": "Maladies neurodégénératives (Parkinson, Alzheimer, SLA)"
    },
    {
      "id": 7,
      "nom": "Polyneuropathies et névralgie du trijumeau"
    },
    {
      "id": 8,
      "nom": "Syndromes canalaires et radiculopathies"
    },
    {
      "id": 9,
      "nom": "Rhumatologie et pathologies osseuses"
    },
    {
      "id": 10,
      "nom": "Épaule"
    },
    {
      "id": 11,
      "nom": "Coude, poignet et main"
    },
    {
      "id": 12,
      "nom": "Hanche et bassin"
    },
    {
      "id": 13,
      "nom": "Genou"
    },
    {
      "id": 14,
      "nom": "Cheville et pied"
    },
    {
      "id": 15,
      "nom": "Rachis cervical"
    },
    {
      "id": 16,
      "nom": "Rachis dorsal et lombaire"
    }
  ],
  "processusBio1": [
    {
      "id": 1,
      "nom": "Physique et chimie de la vie : biomolécules"
    },
    {
      "id": 2,
      "nom": "Origine et évolution cellulaires : procaryotes, eucaryotes, virus"
    },
    {
      "id": 3,
      "nom": "Membrane plasmique : structure et transport"
    },
    {
      "id": 4,
      "nom": "Cytosquelette et jonctions cellulaires"
    },
    {
      "id": 5,
      "nom": "Organites et système endomembranaire"
    },
    {
      "id": 6,
      "nom": "Signalisation cellulaire et mécanotransduction"
    },
    {
      "id": 7,
      "nom": "Réplication de l'ADN, cycle cellulaire et mitose"
    },
    {
      "id": 8,
      "nom": "Gènes, chromosomes, génome et mutations"
    },
    {
      "id": 9,
      "nom": "Noyau, ribosomes, synthèse des protéines et épigénétique"
    },
    {
      "id": 10,
      "nom": "Principes physiques des transformations énergétiques et enzymes"
    },
    {
      "id": 11,
      "nom": "Thermodynamique"
    },
    {
      "id": 12,
      "nom": "Mitochondrie et métabolisme de la cellule humaine"
    },
    {
      "id": 13,
      "nom": "Température et thermorégulation"
    },
    {
      "id": 14,
      "nom": "Ondes et ondes sonores (ultrasons)"
    },
    {
      "id": 15,
      "nom": "Ondes électromagnétiques et rayonnements"
    },
    {
      "id": 16,
      "nom": "Méiose et gamétogenèse"
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
      "nom": "Concept de santé, déterminants et indicateurs"
    },
    {
      "id": 2,
      "nom": "Santé publique, démographie et épidémiologie"
    },
    {
      "id": 3,
      "nom": "Prévention, dépistage et promotion de la santé"
    },
    {
      "id": 4,
      "nom": "Maladies transmissibles : concepts et chaîne épidémiologique"
    },
    {
      "id": 5,
      "nom": "Infections à transmission aérienne"
    },
    {
      "id": 6,
      "nom": "IST, VIH et hépatites virales"
    },
    {
      "id": 7,
      "nom": "Infections d'origine alimentaire et vectorielle"
    },
    {
      "id": 8,
      "nom": "Hygiène, précautions et infections associées aux soins"
    },
    {
      "id": 9,
      "nom": "Immunisation active et passive"
    },
    {
      "id": 10,
      "nom": "Maladies chroniques et facteurs de risque"
    },
    {
      "id": 11,
      "nom": "Diabète et maladies cardiovasculaires"
    },
    {
      "id": 12,
      "nom": "Cancer et maladies respiratoires chroniques"
    },
    {
      "id": 13,
      "nom": "Maladies musculosquelettiques"
    },
    {
      "id": 14,
      "nom": "Maladies neurodégénératives et santé mentale"
    },
    {
      "id": 15,
      "nom": "Système de santé, qualité des soins et économie de la santé"
    },
    {
      "id": 16,
      "nom": "Création et gestion d'un cabinet : stratégie, marketing et ressources humaines"
    }
  ],
  "structure1": [
    {
      "id": 1,
      "nom": "Introduction, homéostasie et milieu intérieur"
    },
    {
      "id": 2,
      "nom": "Système nerveux — organisation générale"
    },
    {
      "id": 3,
      "nom": "Système nerveux — neurophysiologie"
    },
    {
      "id": 4,
      "nom": "Système musculaire"
    },
    {
      "id": 5,
      "nom": "Système endocrinien"
    },
    {
      "id": 6,
      "nom": "Système immunitaire"
    },
    {
      "id": 7,
      "nom": "Introduction à l'anatomie : terminologie, plans, ostéologie et arthrologie"
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
      "nom": "Rachis dans son ensemble : anatomie et physiologie globale"
    },
    {
      "id": 2,
      "nom": "Musculature du tronc et actions musculaires"
    },
    {
      "id": 3,
      "nom": "Rachis lombaire : anatomie et disque intervertébral"
    },
    {
      "id": 4,
      "nom": "Rachis lombaire : physiologie articulaire et biomécanique"
    },
    {
      "id": 5,
      "nom": "Rachis dorsal, côtes et cage thoracique"
    },
    {
      "id": 6,
      "nom": "Mécanique ventilatoire"
    },
    {
      "id": 7,
      "nom": "Rachis cervical : anatomie osseuse, ligamentaire et musculaire"
    },
    {
      "id": 8,
      "nom": "Rachis cervical : physiologie articulaire et biomécanique"
    },
    {
      "id": 9,
      "nom": "ATM et appareil manducateur"
    },
    {
      "id": 10,
      "nom": "Bassin et articulations sacro-iliaques"
    },
    {
      "id": 11,
      "nom": "Biomécanique pelvienne et raisonnement clinique lombo-pelvien"
    },
    {
      "id": 12,
      "nom": "Examen objectif et bilans (goniométrie, bilan musculaire, douleur)"
    },
    {
      "id": 13,
      "nom": "Kinésithérapie passive : mobilisations et effets"
    },
    {
      "id": 14,
      "nom": "Kinésithérapie active et bases biomécaniques"
    },
    {
      "id": 15,
      "nom": "Bases physiques de la radiologie simple"
    },
    {
      "id": 16,
      "nom": "Scanner, IRM et échographie"
    },
    {
      "id": 17,
      "nom": "Autres examens complémentaires et explorations du système nerveux périphérique"
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
