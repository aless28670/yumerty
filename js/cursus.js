/* Structure pédagogique — Cursus / Année / Semestre / Matière / Module.
   Chaque module pointe vers une banque via bankKey (clé de QUESTIONS dans data.js). */
const CURSUS = {
  "kine": {
    "label": "Kinésithérapie",
    "short": "Kiné",
    "accent": "#b9763f",
    "available": true,
    "years": {
      "K1": {
        "label": "K1",
        "long": "1ʳᵉ année",
        "semesters": {
          "S1": {
            "label": "Semestre 1",
            "matieres": {
              "histoireKine": {
                "label": "Histoire de la Kiné",
                "accent": "#b45309",
                "modules": [
                  {
                    "id": "histoireKine",
                    "label": "Examen — 3 propositions",
                    "bankKey": "histoireKine",
                    "optionCount": 3
                  }
                ]
              },
              "anat1": {
                "label": "Anatomie 1",
                "accent": "#f43f5e",
                "modules": [
                  {
                    "id": "anat1",
                    "label": "Examen — 4 propositions",
                    "bankKey": "anat1",
                    "optionCount": 4
                  }
                ]
              },
              "processusBio1": {
                "label": "Processus biologiques 1",
                "accent": "#22c55e",
                "modules": [
                  {
                    "id": "processusBio1",
                    "label": "Examen — 4 propositions",
                    "bankKey": "processusBio1",
                    "optionCount": 4
                  }
                ]
              },
              "structure1": {
                "label": "Structure 1",
                "accent": "#64748b",
                "modules": [
                  {
                    "id": "structure1",
                    "label": "Examen — 4 propositions",
                    "bankKey": "structure1",
                    "optionCount": 4
                  }
                ]
              },
              "psycho": {
                "label": "Psychologie de la santé",
                "accent": "#d946ef",
                "modules": [
                  {
                    "id": "psycho",
                    "label": "Examen — 3 propositions",
                    "bankKey": "psycho",
                    "optionCount": 3
                  }
                ]
              }
            },
            "accent": "#38bdf8"
          },
          "S2": {
            "label": "Semestre 2",
            "matieres": {
              "investigation": {
                "label": "Investigation 1",
                "accent": "#06b6d4",
                "modules": [
                  {
                    "id": "investigation",
                    "label": "Examen — 3 propositions",
                    "bankKey": "investigation",
                    "optionCount": 3
                  }
                ]
              },
              "anat2": {
                "label": "Anatomie 2",
                "accent": "#f43f5e",
                "modules": [
                  {
                    "id": "anat2",
                    "label": "Examen — 4 propositions",
                    "bankKey": "anat2",
                    "optionCount": 4
                  }
                ]
              },
              "processusBio2": {
                "label": "Processus biologiques 2",
                "accent": "#22c55e",
                "modules": [
                  {
                    "id": "processusBio2",
                    "label": "Examen — 4 propositions",
                    "bankKey": "processusBio2",
                    "optionCount": 4
                  }
                ]
              },
              "structure2": {
                "label": "Structure 2",
                "accent": "#64748b",
                "modules": [
                  {
                    "id": "structure2",
                    "label": "Examen — 4 propositions",
                    "bankKey": "structure2",
                    "optionCount": 4
                  }
                ]
              },
              "valoMembres": {
                "label": "Valorisation Membres",
                "accent": "#10b981",
                "modules": [
                  {
                    "id": "valoMembresSup",
                    "label": "Membre supérieur",
                    "desc": "Coude, épaule, poignet, main · 3 propositions",
                    "bankKey": "valoMembresSup",
                    "optionCount": 3
                  },
                  {
                    "id": "valoMembresInf",
                    "label": "Membre inférieur",
                    "desc": "Hanche, genou, cheville · 3 propositions",
                    "bankKey": "valoMembresInf",
                    "optionCount": 3
                  },
                  {
                    "id": "valoMembresMix",
                    "label": "Mélangé",
                    "desc": "Membre supérieur + inférieur · 3 propositions",
                    "bankKey": "valoMembresMix",
                    "optionCount": 3
                  }
                ]
              },
              "valoColonne": {
                "label": "Valorisation Colonne",
                "accent": "#10b981",
                "modules": [
                  {
                    "id": "valoColonne",
                    "label": "Examen — 3 propositions",
                    "bankKey": "valoColonne",
                    "optionCount": 3
                  }
                ]
              }
            },
            "accent": "#38bdf8"
          }
        },
        "accent": "#38bdf8"
      },
      "K2": {
        "label": "K2",
        "long": "2ᵉ année",
        "semesters": {
          "S1": {
            "label": "Semestre 1",
            "matieres": {
              "pathologie1": {
                "label": "Pathologie 1",
                "accent": "#8b5cf6",
                "modules": [
                  {
                    "id": "pathologie1",
                    "label": "Examen — 4 propositions",
                    "bankKey": "pathologie1",
                    "optionCount": 4
                  }
                ]
              },
              "biomecanique": {
                "label": "Biomécanique",
                "accent": "#2dd4bf",
                "modules": [
                  {
                    "id": "biomecanique",
                    "label": "Examen — 3 propositions",
                    "bankKey": "biomecanique",
                    "optionCount": 3
                  }
                ]
              },
              "ethiqueLegislation": {
                "label": "Éthique & Législation",
                "accent": "#eab308",
                "modules": [
                  {
                    "id": "ethiqueLegislation",
                    "label": "Examen — 3 propositions",
                    "bankKey": "ethiqueLegislation",
                    "optionCount": 3
                  }
                ]
              },
              "procedimiento1": {
                "label": "Procedimiento 1",
                "accent": "#0ea5e9",
                "modules": [
                  {
                    "id": "procedimiento1",
                    "label": "Examen — 3 propositions",
                    "bankKey": "procedimiento1",
                    "optionCount": 3
                  }
                ]
              }
            },
            "accent": "#a78bfa"
          },
          "S2": {
            "label": "Semestre 2",
            "matieres": {
              "pathologie2": {
                "label": "Pathologie 2",
                "accent": "#8b5cf6",
                "modules": [
                  {
                    "id": "pathologie2",
                    "label": "Examen — 4 propositions",
                    "bankKey": "pathologie2",
                    "optionCount": 4
                  }
                ]
              },
              "santePublique": {
                "label": "Santé Publique",
                "accent": "#14b8a6",
                "modules": [
                  {
                    "id": "santePublique",
                    "label": "Examen — 4 propositions",
                    "bankKey": "santePublique",
                    "optionCount": 4
                  }
                ]
              },
              "abordaje": {
                "label": "Abordaje",
                "accent": "#a3a3a3",
                "modules": []
              },
              "procedimiento2": {
                "label": "Procedimiento 2",
                "accent": "#0ea5e9",
                "modules": []
              }
            },
            "accent": "#a78bfa"
          }
        },
        "accent": "#a78bfa"
      },
      "K3": {
        "label": "K3",
        "long": "3ᵉ année",
        "semesters": {
          "S1": {
            "label": "Semestre 1",
            "matieres": {
              "neuro1": {
                "label": "Neurologie 1",
                "accent": "#6366f1",
                "modules": [
                  {
                    "id": "neuro1",
                    "label": "Examen — 3 propositions",
                    "bankKey": "neuro1",
                    "optionCount": 3
                  }
                ]
              },
              "pathoChir1": {
                "label": "Pathologies Chirurgicales 1",
                "accent": "#8b5cf6",
                "modules": [
                  {
                    "id": "pathoChir1",
                    "label": "Examen — 4 propositions",
                    "bankKey": "pathoChir1",
                    "optionCount": 4
                  }
                ]
              },
              "osteo1": {
                "label": "Ostéopathie 1",
                "accent": "#f59e0b",
                "modules": [
                  {
                    "id": "osteo1",
                    "label": "Examen — 3 propositions",
                    "bankKey": "osteo1",
                    "optionCount": 3
                  }
                ]
              },
              "procesos1": {
                "label": "Processus 1",
                "accent": "#0ea5e9",
                "modules": [
                  {
                    "id": "procesos1",
                    "label": "Examen — 3 propositions",
                    "bankKey": "procesos1",
                    "optionCount": 3
                  }
                ]
              }
            },
            "accent": "#fb7185"
          },
          "S2": {
            "label": "Semestre 2",
            "matieres": {
              "pathoChir2": {
                "label": "Pathologies Chirurgicales 2",
                "accent": "#8b5cf6",
                "modules": [
                  {
                    "id": "pathoChir2",
                    "label": "Examen — 4 propositions",
                    "bankKey": "pathoChir2",
                    "optionCount": 4
                  }
                ]
              },
              "neuro2": {
                "label": "Neurologie 2",
                "accent": "#6366f1",
                "modules": [
                  {
                    "id": "neuro2",
                    "label": "Examen — 3 propositions",
                    "bankKey": "neuro2",
                    "optionCount": 3
                  }
                ]
              },
              "osteo2": {
                "label": "Ostéopathie 2",
                "accent": "#f59e0b",
                "modules": [
                  {
                    "id": "osteo2",
                    "label": "Examen — 3 propositions",
                    "bankKey": "osteo2",
                    "optionCount": 3
                  }
                ]
              },
              "procesos2": {
                "label": "Processus 2",
                "accent": "#0ea5e9",
                "modules": [
                  {
                    "id": "procesos2",
                    "label": "Examen — 3 propositions",
                    "bankKey": "procesos2",
                    "optionCount": 3
                  }
                ]
              }
            },
            "accent": "#fb7185"
          },
          "N1": {
            "label": "Semestre 1",
            "matieres": {
              "orthoTraumato": {
                "label": "Ortho Traumato",
                "accent": "#ef4444",
                "modules": [
                  {
                    "id": "orthoTraumato",
                    "label": "Examen — 4 propositions",
                    "bankKey": "orthoTraumato",
                    "optionCount": 4
                  }
                ]
              },
              "neurologie1N": {
                "label": "Neurologie 1",
                "accent": "#6366f1",
                "modules": [
                  {
                    "id": "neuro1N",
                    "label": "Examen — 3 propositions",
                    "bankKey": "neuro1N",
                    "optionCount": 3
                  }
                ]
              },
              "procedimiento3": {
                "label": "Procedimiento 3",
                "accent": "#0ea5e9",
                "modules": [
                  {
                    "id": "procedimiento3",
                    "label": "Examen — 3 propositions",
                    "bankKey": "procedimiento3",
                    "optionCount": 3
                  }
                ]
              },
              "investigation2": {
                "label": "Investigation 2",
                "accent": "#06b6d4",
                "modules": [
                  {
                    "id": "investigation2",
                    "label": "Examen — 3 propositions",
                    "bankKey": "investigation2",
                    "optionCount": 3
                  }
                ]
              },
              "pathologie3": {
                "label": "Pathologie 3",
                "accent": "#8b5cf6",
                "modules": [
                  {
                    "id": "pathologie3",
                    "label": "Examen — 4 propositions",
                    "bankKey": "pathologie3",
                    "optionCount": 4
                  }
                ]
              }
            },
            "accent": "#fb7185"
          },
          "N2": {
            "label": "Semestre 2",
            "matieres": {
              "cardiorrespiratoria": {
                "label": "Cardiorrespiratoria",
                "accent": "#dc2626",
                "modules": []
              },
              "neurologie2N": {
                "label": "Neurologie 2",
                "accent": "#6366f1",
                "modules": []
              },
              "pathologie4": {
                "label": "Pathologie 4",
                "accent": "#8b5cf6",
                "modules": []
              },
              "procedimientos4": {
                "label": "Procedimientos 4",
                "accent": "#0ea5e9",
                "modules": []
              },
              "sueloPelvico": {
                "label": "Suelo Pélvico",
                "accent": "#ec4899",
                "modules": []
              }
            },
            "accent": "#fb7185"
          }
        },
        "programmes": {
          "ancien": {
            "label": "Ancien programme",
            "semesters": [
              "S1",
              "S2"
            ]
          },
          "nouveau": {
            "label": "Nouveau programme",
            "semesters": [
              "N1",
              "N2"
            ]
          }
        },
        "accent": "#fb7185"
      },
      "K4": {
        "label": "K4",
        "long": "4ᵉ année",
        "semesters": {
          "S1": {
            "label": "Semestre 1",
            "matieres": {
              "drainage": {
                "label": "Drainage lymphatique manuel",
                "accent": "#38bdf8",
                "modules": [
                  {
                    "id": "drainageExam1",
                    "label": "Examen 1 — 3 propositions",
                    "bankKey": "drainageExam1",
                    "optionCount": 3
                  }
                ]
              },
              "orthese": {
                "label": "Orthèses et prothèses",
                "accent": "#f97316",
                "modules": [
                  {
                    "id": "ortheseExam1",
                    "label": "Examen 1 — 3 propositions",
                    "bankKey": "ortheseExam1",
                    "optionCount": 3
                  }
                ]
              }
            },
            "accent": "#34d399"
          },
          "S2": {
            "label": "Semestre 2",
            "matieres": {
              "deportiva3": {
                "label": "Deportiva 3",
                "accent": "#84cc16",
                "modules": []
              },
              "obstetrica": {
                "label": "Obstétrica et Uroginecológica",
                "accent": "#ec4899",
                "modules": []
              },
              "ortopedica3": {
                "label": "Ortopédica 3",
                "accent": "#ef4444",
                "modules": []
              }
            },
            "accent": "#34d399"
          }
        },
        "accent": "#34d399"
      }
    }
  },
  "dentaire": {
    "label": "Dentaire",
    "short": "Dentaire",
    "accent": "#8a5a6a",
    "available": true,
    "years": {
      "D2": {
        "label": "D2",
        "long": "2ᵉ année",
        "semesters": {
          "S1": {
            "label": "Semestre 1",
            "matieres": {
              "dentBiomaterial": {
                "label": "Biomaterials",
                "accent": "#14b8a6",
                "modules": [
                  {
                    "id": "dentBiomaterial",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentBiomaterial",
                    "optionCount": 4
                  }
                ]
              },
              "dentSemiology1": {
                "label": "Semiology 1",
                "accent": "#06b6d4",
                "modules": [
                  {
                    "id": "dentSemiology1",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentSemiology1",
                    "optionCount": 4
                  }
                ]
              },
              "dentPharmacoMid": {
                "label": "Pharmacology — Midterm",
                "accent": "#8b5cf6",
                "modules": [
                  {
                    "id": "dentPharmacoMid",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPharmacoMid",
                    "optionCount": 4
                  }
                ]
              },
              "dentPathology1Mid": {
                "label": "Pathology 1 — Midterm",
                "accent": "#8b5cf6",
                "modules": [
                  {
                    "id": "dentPathology1Mid",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPathology1Mid",
                    "optionCount": 4
                  }
                ]
              },
              "dentPharmacoFin": {
                "label": "Pharmacology — Final",
                "accent": "#8b5cf6",
                "modules": [
                  {
                    "id": "dentPharmacoFin",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPharmacoFin",
                    "optionCount": 4
                  }
                ]
              },
              "dentPathology1Fin": {
                "label": "Pathology 1 — Final",
                "accent": "#8b5cf6",
                "modules": [
                  {
                    "id": "dentPathology1Fin",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPathology1Fin",
                    "optionCount": 4
                  }
                ]
              },
              "dentHeadNeck": {
                "label": "Head & Neck",
                "accent": "#f43f5e",
                "modules": [
                  {
                    "id": "dentHeadNeck",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentHeadNeck",
                    "optionCount": 4
                  }
                ]
              }
            },
            "accent": "#a78bfa"
          },
          "S2": {
            "label": "Semestre 2",
            "matieres": {
              "dentDiagnostic": {
                "label": "Diagnostic",
                "accent": "#6366f1",
                "modules": [
                  {
                    "id": "dentDiagnostic",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentDiagnostic",
                    "optionCount": 4
                  }
                ]
              },
              "dentSemiology2": {
                "label": "Semiology 2",
                "accent": "#06b6d4",
                "modules": [
                  {
                    "id": "dentSemiology2",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentSemiology2",
                    "optionCount": 4
                  }
                ]
              },
              "dentPhysiology": {
                "label": "Physiology",
                "accent": "#22c55e",
                "modules": [
                  {
                    "id": "dentPhysiology",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPhysiology",
                    "optionCount": 4
                  }
                ]
              },
              "dentPeriodoncia": {
                "label": "Periodontology",
                "accent": "#ec4899",
                "modules": [
                  {
                    "id": "dentPeriodoncia",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPeriodoncia",
                    "optionCount": 4
                  }
                ]
              },
              "dentOcclusion": {
                "label": "Occlusion",
                "accent": "#eab308",
                "modules": [
                  {
                    "id": "dentOcclusion",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentOcclusion",
                    "optionCount": 4
                  }
                ]
              },
              "dentPatho2Mid": {
                "label": "Pathology 2 — Midterm",
                "accent": "#8b5cf6",
                "modules": [
                  {
                    "id": "dentPatho2Mid",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPatho2Mid",
                    "optionCount": 4
                  }
                ]
              },
              "dentPatho2Fin": {
                "label": "Pathology 2 — Final",
                "accent": "#8b5cf6",
                "modules": [
                  {
                    "id": "dentPatho2Fin",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPatho2Fin",
                    "optionCount": 4
                  }
                ]
              }
            },
            "accent": "#a78bfa"
          }
        },
        "accent": "#a78bfa"
      }
    }
  }
};
