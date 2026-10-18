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
                "accent": "#8a6a4a",
                "modules": [
                  {
                    "id": "histoireKine",
                    "label": "Examen — 3 propositions",
                    "bankKey": "histoireKine",
                    "optionCount": 3,
                    "accent": "#8a6a4a"
                  }
                ]
              },
              "anat1": {
                "label": "Anatomie 1",
                "accent": "#c06a45",
                "modules": [
                  {
                    "id": "anat1",
                    "label": "Examen — 4 propositions",
                    "bankKey": "anat1",
                    "optionCount": 4,
                    "accent": "#c06a45"
                  }
                ]
              },
              "processusBio1": {
                "label": "Processus biologiques 1",
                "accent": "#a8763c",
                "modules": [
                  {
                    "id": "processusBio1",
                    "label": "Examen — 4 propositions",
                    "bankKey": "processusBio1",
                    "optionCount": 4,
                    "accent": "#a8763c"
                  }
                ]
              },
              "structure1": {
                "label": "Structure 1",
                "accent": "#b8902e",
                "modules": [
                  {
                    "id": "structure1",
                    "label": "Examen — 4 propositions",
                    "bankKey": "structure1",
                    "optionCount": 4,
                    "accent": "#b8902e"
                  }
                ]
              },
              "psycho": {
                "label": "Psychologie de la santé",
                "accent": "#7a6a9a",
                "modules": [
                  {
                    "id": "psycho",
                    "label": "Examen — 3 propositions",
                    "bankKey": "psycho",
                    "optionCount": 3,
                    "accent": "#7a6a9a"
                  }
                ]
              }
            }
          },
          "S2": {
            "label": "Semestre 2",
            "matieres": {
              "investigation": {
                "label": "Investigation",
                "accent": "#7a8a5e",
                "modules": [
                  {
                    "id": "investigation",
                    "label": "Examen — 3 propositions",
                    "bankKey": "investigation",
                    "optionCount": 3,
                    "accent": "#7a8a5e"
                  }
                ]
              },
              "anat2": {
                "label": "Anatomie 2",
                "accent": "#c06a45",
                "modules": [
                  {
                    "id": "anat2",
                    "label": "Examen — 4 propositions",
                    "bankKey": "anat2",
                    "optionCount": 4,
                    "accent": "#c06a45"
                  }
                ]
              },
              "processusBio2": {
                "label": "Processus biologiques 2",
                "accent": "#a8763c",
                "modules": [
                  {
                    "id": "processusBio2",
                    "label": "Examen — 4 propositions",
                    "bankKey": "processusBio2",
                    "optionCount": 4,
                    "accent": "#a8763c"
                  }
                ]
              },
              "structure2": {
                "label": "Structure 2",
                "accent": "#b8902e",
                "modules": [
                  {
                    "id": "structure2",
                    "label": "Examen — 4 propositions",
                    "bankKey": "structure2",
                    "optionCount": 4,
                    "accent": "#b8902e"
                  }
                ]
              },
              "valoMembres": {
                "label": "Valorisation Membres",
                "accent": "#b07060",
                "modules": [
                  {
                    "id": "valoMembresSup",
                    "label": "Membre supérieur",
                    "desc": "Coude, épaule, poignet, main · 3 propositions",
                    "bankKey": "valoMembresSup",
                    "optionCount": 3,
                    "accent": "#b07060"
                  },
                  {
                    "id": "valoMembresInf",
                    "label": "Membre inférieur",
                    "desc": "Hanche, genou, cheville · 3 propositions",
                    "bankKey": "valoMembresInf",
                    "optionCount": 3,
                    "accent": "#b07060"
                  },
                  {
                    "id": "valoMembresMix",
                    "label": "Mélangé",
                    "desc": "Membre supérieur + inférieur · 3 propositions",
                    "bankKey": "valoMembresMix",
                    "optionCount": 3,
                    "accent": "#b07060"
                  }
                ]
              },
              "valoColonne": {
                "label": "Valorisation Colonne",
                "accent": "#9c6f47",
                "modules": [
                  {
                    "id": "valoColonne",
                    "label": "Examen — 3 propositions",
                    "bankKey": "valoColonne",
                    "optionCount": 3,
                    "accent": "#9c6f47"
                  }
                ]
              }
            }
          }
        }
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
                "accent": "#b35c38",
                "modules": [
                  {
                    "id": "pathologie1",
                    "label": "Examen — 4 propositions",
                    "bankKey": "pathologie1",
                    "optionCount": 4,
                    "accent": "#b35c38"
                  }
                ]
              },
              "santePublique": {
                "label": "Santé Publique",
                "accent": "#5a8a6a",
                "modules": [
                  {
                    "id": "santePublique",
                    "label": "Examen — 4 propositions",
                    "bankKey": "santePublique",
                    "optionCount": 4,
                    "accent": "#5a8a6a"
                  }
                ]
              }
            }
          },
          "S2": {
            "label": "Semestre 2",
            "matieres": {
              "pathologie2": {
                "label": "Pathologie 2",
                "accent": "#c08a3e",
                "modules": [
                  {
                    "id": "pathologie2",
                    "label": "Examen — 4 propositions",
                    "bankKey": "pathologie2",
                    "optionCount": 4,
                    "accent": "#c08a3e"
                  }
                ]
              }
            }
          }
        }
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
                "accent": "#8f6276",
                "modules": [
                  {
                    "id": "neuro1",
                    "label": "Examen — 3 propositions",
                    "bankKey": "neuro1",
                    "optionCount": 3,
                    "accent": "#8f6276"
                  }
                ]
              },
              "pathoChir1": {
                "label": "Pathologies Chirurgicales 1",
                "accent": "#b07060",
                "modules": [
                  {
                    "id": "pathoChir1",
                    "label": "Examen — 4 propositions",
                    "bankKey": "pathoChir1",
                    "optionCount": 4,
                    "accent": "#b07060"
                  }
                ]
              },
              "osteo1": {
                "label": "Ostéopathie 1",
                "accent": "#94793f",
                "modules": [
                  {
                    "id": "osteo1",
                    "label": "Examen — 3 propositions",
                    "bankKey": "osteo1",
                    "optionCount": 3,
                    "accent": "#94793f"
                  }
                ]
              },
              "procesos1": {
                "label": "Processus 1",
                "accent": "#c47a35",
                "modules": [
                  {
                    "id": "procesos1",
                    "label": "Examen — 3 propositions",
                    "bankKey": "procesos1",
                    "optionCount": 3,
                    "accent": "#c47a35"
                  }
                ]
              }
            }
          },
          "S2": {
            "label": "Semestre 2",
            "matieres": {
              "pathoChir2": {
                "label": "Pathologies Chirurgicales 2",
                "accent": "#b07060",
                "modules": [
                  {
                    "id": "pathoChir2",
                    "label": "Examen — 4 propositions",
                    "bankKey": "pathoChir2",
                    "optionCount": 4,
                    "accent": "#b07060"
                  }
                ]
              },
              "neuro2": {
                "label": "Neurologie 2",
                "accent": "#8f6276",
                "modules": [
                  {
                    "id": "neuro2",
                    "label": "Examen — 3 propositions",
                    "bankKey": "neuro2",
                    "optionCount": 3,
                    "accent": "#8f6276"
                  }
                ]
              },
              "osteo2": {
                "label": "Ostéopathie 2",
                "accent": "#94793f",
                "modules": [
                  {
                    "id": "osteo2",
                    "label": "Examen — 3 propositions",
                    "bankKey": "osteo2",
                    "optionCount": 3,
                    "accent": "#94793f"
                  }
                ]
              },
              "procesos2": {
                "label": "Processus 2",
                "accent": "#c47a35",
                "modules": [
                  {
                    "id": "procesos2",
                    "label": "Examen — 3 propositions",
                    "bankKey": "procesos2",
                    "optionCount": 3,
                    "accent": "#c47a35"
                  }
                ]
              }
            }
          }
        }
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
                "accent": "#4a8a86",
                "modules": [
                  {
                    "id": "drainageExam1",
                    "label": "Examen 1 — 3 propositions",
                    "bankKey": "drainageExam1",
                    "optionCount": 3,
                    "accent": "#4a8a86"
                  }
                ]
              },
              "orthese": {
                "label": "Orthèses et prothèses",
                "accent": "#7a6ba8",
                "modules": [
                  {
                    "id": "ortheseExam1",
                    "label": "Examen 1 — 3 propositions",
                    "bankKey": "ortheseExam1",
                    "optionCount": 3,
                    "accent": "#7a6ba8"
                  }
                ]
              }
            }
          },
          "S2": {
            "label": "Semestre 2",
            "matieres": {}
          }
        }
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
                "accent": "#8a5a6a",
                "modules": [
                  {
                    "id": "dentBiomaterial",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentBiomaterial",
                    "optionCount": 4,
                    "accent": "#8a5a6a"
                  }
                ]
              },
              "dentSemiology1": {
                "label": "Semiology 1",
                "accent": "#5f7f8a",
                "modules": [
                  {
                    "id": "dentSemiology1",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentSemiology1",
                    "optionCount": 4,
                    "accent": "#5f7f8a"
                  }
                ]
              },
              "dentPharmacoMid": {
                "label": "Pharmacology — Midterm",
                "accent": "#8a6a5a",
                "modules": [
                  {
                    "id": "dentPharmacoMid",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPharmacoMid",
                    "optionCount": 4,
                    "accent": "#8a6a5a"
                  }
                ]
              },
              "dentPathology1Mid": {
                "label": "Pathology 1 — Midterm",
                "accent": "#b06a4a",
                "modules": [
                  {
                    "id": "dentPathology1Mid",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPathology1Mid",
                    "optionCount": 4,
                    "accent": "#b06a4a"
                  }
                ]
              },
              "dentPharmacoFin": {
                "label": "Pharmacology — Final",
                "accent": "#8a5a4a",
                "modules": [
                  {
                    "id": "dentPharmacoFin",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPharmacoFin",
                    "optionCount": 4,
                    "accent": "#8a5a4a"
                  }
                ]
              },
              "dentPathology1Fin": {
                "label": "Pathology 1 — Final",
                "accent": "#b05a3a",
                "modules": [
                  {
                    "id": "dentPathology1Fin",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPathology1Fin",
                    "optionCount": 4,
                    "accent": "#b05a3a"
                  }
                ]
              },
              "dentHeadNeck": {
                "label": "Head & Neck",
                "accent": "#5a7a8a",
                "modules": [
                  {
                    "id": "dentHeadNeck",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentHeadNeck",
                    "optionCount": 4,
                    "accent": "#5a7a8a"
                  }
                ]
              }
            }
          },
          "S2": {
            "label": "Semestre 2",
            "matieres": {
              "dentDiagnostic": {
                "label": "Diagnostic",
                "accent": "#7a6a5a",
                "modules": [
                  {
                    "id": "dentDiagnostic",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentDiagnostic",
                    "optionCount": 4,
                    "accent": "#7a6a5a"
                  }
                ]
              },
              "dentSemiology2": {
                "label": "Semiology 2",
                "accent": "#8a6a7a",
                "modules": [
                  {
                    "id": "dentSemiology2",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentSemiology2",
                    "optionCount": 4,
                    "accent": "#8a6a7a"
                  }
                ]
              },
              "dentPhysiology": {
                "label": "Physiology",
                "accent": "#6a8a7a",
                "modules": [
                  {
                    "id": "dentPhysiology",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPhysiology",
                    "optionCount": 4,
                    "accent": "#6a8a7a"
                  }
                ]
              },
              "dentPeriodoncia": {
                "label": "Periodontology",
                "accent": "#9c6a5a",
                "modules": [
                  {
                    "id": "dentPeriodoncia",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPeriodoncia",
                    "optionCount": 4,
                    "accent": "#9c6a5a"
                  }
                ]
              },
              "dentOcclusion": {
                "label": "Occlusion",
                "accent": "#7a7a5a",
                "modules": [
                  {
                    "id": "dentOcclusion",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentOcclusion",
                    "optionCount": 4,
                    "accent": "#7a7a5a"
                  }
                ]
              },
              "dentPatho2Mid": {
                "label": "Pathology 2 — Midterm",
                "accent": "#a06a5a",
                "modules": [
                  {
                    "id": "dentPatho2Mid",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPatho2Mid",
                    "optionCount": 4,
                    "accent": "#a06a5a"
                  }
                ]
              },
              "dentPatho2Fin": {
                "label": "Pathology 2 — Final",
                "accent": "#a0745a",
                "modules": [
                  {
                    "id": "dentPatho2Fin",
                    "label": "Examen — 4 propositions",
                    "bankKey": "dentPatho2Fin",
                    "optionCount": 4,
                    "accent": "#a0745a"
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
};

window.CURSUS = CURSUS;
