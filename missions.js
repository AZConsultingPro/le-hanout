/* Le Hanout — cahiers des charges et ateliers, 9 novembre 2026. */
window.HANOUT_MISSIONS = {
  "version": "1.1.0",
  "briefs": {
    "achats": {
      "role": "Transformer les besoins des clients et le stock réel en une proposition d’achat chiffrée, utile et raisonnable.",
      "parent": "Direction achats ou direction des opérations",
      "clients": "Vente transmet les besoins ; Gestion vérifie le budget et les frais d’encaissement ; Point de vente confirme les capacités de rangement.",
      "outputs": [
        [
          "Inventaire contrôlé",
          "Google Sheets : produit, unité, lot, quantité, état, date et double comptage."
        ],
        [
          "Offre argumentée et quantités",
          "Google Sheets : besoin, preuve ou hypothèse, quantité de départ, justification et contrainte."
        ],
        [
          "Comparatif fournisseurs",
          "Au moins deux offres comparables et accessibles : format, prix, frais, date et lien."
        ],
        [
          "Coûts et prix proposés",
          "Calculs modifiables, prix acceptable étudié avec Vente, marge avant autres frais et limites."
        ],
        [
          "Proposition de commande",
          "Brouillon du bon de commande, total, conditions et statut « à valider »."
        ],
        [
          "Décision à présenter",
          "Deux options, recommandation, preuves, budget et diapositives."
        ]
      ],
      "milestones": [
        "Le stock est compté et contrôlé.",
        "Les produits, quantités et fournisseurs sont comparés.",
        "Les calculs et la commande proposée sont vérifiés par Gestion et un adulte.",
        "Le comité dispose de deux options et de questions précises."
      ]
    },
    "espace": {
      "role": "Concevoir un espace de vente accueillant et réalisable, à partir du lieu réel et des ressources du lycée.",
      "parent": "Direction commerciale / responsable du point de vente",
      "clients": "Achats transmet les produits et volumes ; Vente décrit le parcours client ; Gestion chiffre ; le responsable technique et l’intendance renseignent le matériel disponible.",
      "outputs": [
        [
          "Dossier photos et observations",
          "Vues autorisées, légendes, emplacements, contraintes et date."
        ],
        [
          "Relevé de mesures",
          "Plan coté, unités, portes, circulation, prises visibles et dimensions du mobilier."
        ],
        [
          "Compte rendu technique",
          "Fonction et coordonnées professionnelles confirmées, besoins, matériel réutilisable et réponses."
        ],
        [
          "Comparatif du mobilier",
          "Réemploi / achat, dimensions, état, prix, livraison, source et coût total."
        ],
        [
          "Deux propositions d’aménagement",
          "Plan A et plan B avec produits, prix, caisse, rangement et circulation."
        ],
        [
          "Budget et recommandation",
          "Option conseillée, avantages, limites, autorisations et diapositives."
        ]
      ],
      "milestones": [
        "Le lieu est observé et mesuré.",
        "Le matériel disponible et les besoins sont vérifiés.",
        "Deux implantations sont dessinées et chiffrées.",
        "La recommandation peut être discutée en comité."
      ]
    },
    "vente": {
      "role": "Connaître les futurs clients en les rencontrant, puis préparer une relation commerciale accueillante et fiable.",
      "parent": "Direction commerciale",
      "clients": "Communication coécrit le questionnaire et la fidélité ; Achats reçoit les besoins et prix acceptables ; Gestion reçoit les habitudes de paiement.",
      "outputs": [
        [
          "Plan d’enquête",
          "Objectifs, élèves et adultes à rencontrer, méthode et autorisation."
        ],
        [
          "Questionnaire argumenté",
          "Google Docs : question, type, choix de réponse et utilité pour une décision."
        ],
        [
          "Forms testé et QR code",
          "Version corrigée, lien répondant vérifié et diffusion validée."
        ],
        [
          "Compte rendu des rencontres",
          "Nombre de personnes, observations anonymes, exemples et limites de l’enquête."
        ],
        [
          "Synthèse des besoins clients",
          "Résultats réels, prix acceptables, habitudes de paiement et recommandations."
        ],
        [
          "Accueil et fidélité",
          "Procédure d’accueil, traitement des demandes, proposition de fidélité et diapositives."
        ]
      ],
      "milestones": [
        "Nous savons quelles informations chercher.",
        "Le questionnaire et le protocole sont testés et validés.",
        "Nous rencontrons les clients après autorisation ; sinon le protocole est prêt.",
        "Les enseignements et la procédure d’accueil sont présentés."
      ]
    },
    "communication": {
      "role": "Rendre Le Hanout identifiable et raconter son développement avec des contenus exacts, compréhensibles et autorisés.",
      "parent": "Direction communication ou marketing",
      "clients": "Tous les services donnent des faits et relisent les contenus ; Vente coopère sur l’enquête et la fidélité ; Gestion étudie le coût des supports et publicités.",
      "outputs": [
        [
          "Travaux et brief",
          "Logo existant, intentions, public visé, valeurs et sources des visuels."
        ],
        [
          "Propositions de logo argumentées",
          "Version lisible, petit format et monochrome ; choix final à faire valider."
        ],
        [
          "Charte et modèles",
          "Couleurs, polices, règles du logo, modèle Slides et support de fidélité."
        ],
        [
          "Projet de carte de fidélité",
          "Mécanisme étudié avec Vente, avantage, conditions et coût vérifié avec Gestion."
        ],
        [
          "Plan de communication",
          "Public, canal, objectif, format, calendrier, responsable et statut de validation."
        ],
        [
          "Journal de bord et contenus",
          "Articles courts, photos/vidéos autorisées, difficultés, avancées, prochain objectif et diapositives."
        ]
      ],
      "milestones": [
        "Les travaux existants sont retrouvés et compris.",
        "L’identité et la coopération avec Vente sont documentées.",
        "Des contenus et un calendrier sont prêts à faire valider.",
        "Les choix d’identité et la vie du projet sont présentés."
      ]
    },
    "gestion": {
      "role": "Vérifier comment utiliser les 1 500 € et préparer les ressources, partenaires et moyens de paiement nécessaires au projet.",
      "parent": "Direction administrative et financière ; développement / partenariats selon l’entreprise",
      "clients": "Achats chiffre le stock ; Point de vente chiffre le mobilier ; Communication chiffre les supports ; Vente décrit les usages des clients ; les adultes confirment les autorisations.",
      "outputs": [
        [
          "Budget prévisionnel",
          "1 500 € de référence, dépenses sourcées, réserve et solde par scénario."
        ],
        [
          "Tableau des soutiens possibles",
          "Argent, matériel, temps, compétences ; besoin et intérêt pour le partenaire."
        ],
        [
          "Fiches financeurs et éligibilité",
          "Actions financées, porteur autorisé, conditions, échéance, source et date."
        ],
        [
          "Argumentaire de financement",
          "Besoin chiffré, action réelle, impact attendu, preuve et demande précise."
        ],
        [
          "Comparatif d’encaissement",
          "Solutions autorisables, frais complets, conditions, simulation et recommandation."
        ],
        [
          "Dossier de recommandation",
          "Scénarios comparés, demande de soutien en brouillon, décisions attendues et diapositives."
        ]
      ],
      "milestones": [
        "Le budget de référence et les besoins sont compris.",
        "Des partenaires sont repérés avec des critères vérifiés.",
        "Le budget, les paiements et la demande de soutien sont chiffrés.",
        "Le comité peut examiner une recommandation documentée."
      ]
    }
  },
  "workshops": {
    "achats-5": {
      "lesson": "Un inventaire est une photographie du stock à une date : nous comptons ce qui existe réellement. Un tableur sert à ranger les données et à refaire les calculs sans tout recopier.",
      "sections": [
        {
          "title": "Créer le tableau de comptage",
          "why": "Éviter un achat inutile et repérer les écarts.",
          "steps": [
            "Demandez quel stock vous êtes autorisés à inventorier. Le contrôle des tenues professionnelles terminé sert d’expérience ; ne confondez pas ce lot avec le futur stock du Hanout.",
            "Préparez une feuille, un crayon et, si utile, une calculatrice. À deux : l’un compte, l’autre note ; inversez ensuite.",
            "Ouvrez le dossier du service → Travaux → Nouveau → Google Sheets → Feuille de calcul vierge. Nommez le fichier « Le Hanout — Achats — Stock et offre — Date ».",
            "En bas, double-cliquez « Feuille 1 » et écrivez « Inventaire ». Cliquez A1 puis recopiez les colonnes du modèle. La touche Tab passe à la colonne suivante.",
            "Une ligne correspond à un produit, un format et un lot. Comptez les unités vendables. Notez les cartons et leur contenu si cela aide à vérifier.",
            "Cliquez le numéro 1 → Affichage → Figer → 1 ligne si ce menu est disponible. Élargissez une colonne en faisant glisser la limite entre ses lettres.",
            "Faites recompter deux lignes sans regarder le premier résultat. En cas d’écart, recomptez et expliquez la correction."
          ],
          "deliver": "Un onglet Inventaire daté et contrôlé.",
          "check": "Quantités réelles, même unité de vente et anomalies signalées.",
          "table": {
            "headers": [
              "Produit",
              "Format / unité vendue",
              "Lot / date lue",
              "Quantité",
              "État / écart",
              "Emplacement",
              "Compté par",
              "Vérifié par"
            ],
            "rows": [
              [
                "Exemple fictif : eau",
                "Bouteille 50 cl",
                "Lot A — à lire",
                "12",
                "À contrôler",
                "Étagère A",
                "Élève 1",
                "Élève 2"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Faire un inventaire, c’est…",
          [
            "Compter le stock réel à une date",
            "Écrire ce que nous aimerions acheter"
          ],
          0,
          "Le souhait d’achat est une autre liste."
        ],
        [
          "Pourquoi choisir Sheets ?",
          [
            "Pour organiser des lignes et effectuer des calculs",
            "Pour remplacer le comptage réel"
          ],
          0,
          "Le tableur organise les résultats ; il ne compte pas les produits."
        ]
      ]
    },
    "achats-6": {
      "lesson": "Une offre argumentée explique à quel besoin chaque produit répond et pourquoi la quantité proposée reste raisonnable. Une hypothèse doit être signalée tant que les clients ne l’ont pas confirmée.",
      "sections": [
        {
          "title": "Proposer des produits ET des quantités",
          "why": "Limiter le risque d’invendus et justifier l’utilisation du budget.",
          "steps": [
            "Rouvrez le même fichier Sheets depuis Travaux. Cliquez + en bas ; renommez le nouvel onglet « Offre proposée ».",
            "Recopiez les en-têtes du modèle en ligne 1. Proposez cinq produits maximum pour une première offre.",
            "Pour chaque produit, indiquez le besoin, la source ou « hypothèse à vérifier avec Vente », le stock utilisable et le volume de ventes supposé.",
            "Proposez la quantité à acheter. Exemple de raisonnement : besoin de test de 24 unités, stock utilisable de 6 → 18 unités à prévoir, puis vérifier le conditionnement du fournisseur.",
            "Demandez à Vente ce que les rencontres clients permettront de confirmer : format, préférence, prix et fréquence d’achat.",
            "Notez les contraintes de stockage et les vérifications adultes. Ajoutez un statut : à étudier / à corriger / proposé."
          ],
          "deliver": "Une offre argumentée avec quantités et limites.",
          "check": "Chaque quantité a une justification et chaque besoin une source ou un statut d’hypothèse.",
          "table": {
            "headers": [
              "Produit / format",
              "Besoin client",
              "Preuve / hypothèse",
              "Stock utilisable",
              "Quantité envisagée à acheter",
              "Pourquoi cette quantité ?",
              "Contrainte / statut"
            ],
            "rows": [
              [
                "Eau 50 cl — fictif",
                "Se désaltérer",
                "Hypothèse à confirmer",
                "6",
                "18",
                "Test limité à 24 au total",
                "Stockage à valider"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Une liste argumentée doit préciser…",
          [
            "Le besoin, les quantités et leur justification",
            "Seulement les noms des produits"
          ],
          0,
          "Une proposition doit pouvoir être discutée."
        ],
        [
          "Les clients n’ont pas encore répondu. Nous écrivons…",
          [
            "Hypothèse à vérifier",
            "Besoin confirmé"
          ],
          0,
          "Ne transformez pas une idée en résultat réel."
        ]
      ]
    },
    "achats-7": {
      "lesson": "Comparer exige une base identique : même produit, même format, même quantité de référence et même base HT/TTC. Une promotion n’est utile que si elle répond au besoin sans créer du surstock.",
      "sections": [
        {
          "title": "Relever deux offres comparables",
          "why": "Savoir pourquoi une offre coûte moins cher au total.",
          "steps": [
            "Dans Sheets, créez « Fournisseurs ». Recopiez les colonnes du modèle.",
            "Cherchez le même produit chez METRO, Carrefour, E.Leclerc et/ou un commerce proche. Un tarif peut dépendre du magasin et de la carte professionnelle : faites vérifier les conditions de METRO par l’adulte.",
            "Pour chaque offre accessible, notez le nombre d’unités, le prix du lot, les frais attribuables et la base HT ou TTC. Si un prix manque, écrivez « à vérifier ».",
            "Cliquez F2 et saisissez =(C2+D2)/E2 puis Entrée, uniquement si C2,D2,E2 contiennent des nombres et E2 est supérieur à zéro.",
            "Cliquez F2 ; faites glisser le petit carré en bas à droite vers les autres lignes. Vérifiez que la formule de F3 utilise C3,D3,E3.",
            "Demandez à l’adulte quelle base de prix utiliser pour le projet. Ne comparez pas un prix HT et un prix TTC comme s’ils étaient identiques.",
            "Relevez date, lien et durée d’une promotion. Comparez l’achat immédiat et l’attente : besoin réel, fin de promotion, stockage, quantité minimale et risque de date courte."
          ],
          "deliver": "Un comparatif sourcé, avec coût par unité et conditions.",
          "check": "Au moins deux offres accessibles, formats identiques, frais et dates renseignés.",
          "table": {
            "headers": [
              "Fournisseur / produit-format",
              "Base HT ou TTC",
              "Prix du lot (€)",
              "Frais attribuables (€)",
              "Unités du lot",
              "Coût unitaire (€)",
              "Date / lien / conditions"
            ],
            "rows": [
              [
                "Fournisseur A — fictif",
                "TTC",
                "6",
                "0",
                "12",
                "= (6+0)/12 → 0,50",
                "Exemple pédagogique"
              ],
              [
                "Fournisseur B — fictif",
                "TTC",
                "5,40",
                "1,80",
                "12",
                "= (5,40+1,80)/12 → 0,60",
                "Exemple pédagogique"
              ]
            ]
          },
          "links": [
            [
              "METRO",
              "https://www.metro.fr/"
            ],
            [
              "Carrefour",
              "https://www.carrefour.fr/"
            ],
            [
              "E.Leclerc",
              "https://www.e.leclerc/"
            ]
          ]
        }
      ],
      "questions": [
        [
          "Lot de 6 € pour 12 unités, sans frais : coût unitaire ?",
          [
            "0,50 €",
            "2 €"
          ],
          0,
          "6 ÷ 12 = 0,50."
        ],
        [
          "Une promotion sur 100 unités est-elle forcément utile ?",
          [
            "Non, il faut vérifier le besoin et le stockage",
            "Oui, dès que le prix baisse"
          ],
          0,
          "Acheter trop peut augmenter les invendus."
        ]
      ]
    },
    "achats-8": {
      "lesson": "Le prix de vente doit tenir compte du coût et des clients. Le prix psychologique est une zone de prix perçue comme acceptable ; un prix trop bas peut aussi faire douter de la qualité. Une petite enquête donne des indices, pas une certitude.",
      "sections": [
        {
          "title": "Calculer une proposition de prix",
          "why": "Relier coût, acceptabilité et risque.",
          "steps": [
            "Créez l’onglet « Prix proposés » et les colonnes du modèle. Reprenez un coût unitaire vérifié.",
            "En B2, saisissez 0,60 ; en C2, 20 ; en D2, 1,20. Ce sont des nombres fictifs pour vous entraîner.",
            "En E2, tapez =B2*C2 pour le coût d’achat. En F2, tapez =C2*D2 pour les recettes si tout est vendu. En G2, tapez =F2-E2.",
            "En H2, saisissez une quantité réellement vendue supposée, par exemple 15. En I2, tapez =H2*D2-E2 : cela retranche tout le stock acheté, même les invendus.",
            "Avec Vente, étudiez deux questions neutres : « À partir de quel prix ce produit vous semblerait-il trop cher ? » et « En dessous de quel prix douteriez-vous de sa qualité ? ». Faites relire la formulation avant enquête.",
            "Comparez plusieurs prix possibles aux résultats disponibles. Doubler le coût est seulement une simulation, pas une règle universelle.",
            "Ajoutez transport, pertes et frais d’encaissement fournis par Gestion. Ne nommez pas G2 « bénéfice net »."
          ],
          "deliver": "Deux prix envisagés avec calculs, acceptabilité et limites.",
          "check": "Un camarade peut refaire les formules ; invendus et frais sont visibles.",
          "table": {
            "headers": [
              "Produit",
              "Coût unitaire",
              "Quantité achetée",
              "Prix vente envisagé",
              "Coût achat",
              "Recettes si tout vendu",
              "Écart avant autres frais",
              "Ventes supposées",
              "Recettes partielles - achat"
            ],
            "rows": [
              [
                "Produit fictif",
                "0,60",
                "20",
                "1,20",
                "=B2*C2 → 12",
                "=C2*D2 → 24",
                "=F2-E2 → 12",
                "15",
                "=H2*D2-E2 → 6"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "L’écart recettes moins achat du stock est-il le bénéfice net ?",
          [
            "Non, d’autres frais restent à déduire",
            "Oui, toujours"
          ],
          0,
          "Transport, paiement et autres charges comptent aussi."
        ],
        [
          "Le prix psychologique aide à étudier…",
          [
            "Le prix perçu comme acceptable par les clients",
            "Le prix que préfère personnellement l’acheteur"
          ],
          0,
          "Les réponses donnent des indices à confronter aux coûts."
        ]
      ]
    },
    "achats-9": {
      "lesson": "Une réunion entre services sert à corriger les écarts et à partager des données utilisables, pas seulement à annoncer que le travail est fait.",
      "sections": [
        {
          "title": "Faire contrôler les calculs par Gestion",
          "why": "Éviter de bâtir le budget sur des données différentes.",
          "steps": [
            "Dans un Docs de réunion, écrivez trois questions : les coûts sont-ils comparables ? Les frais sont-ils inclus ? Quelle enveloppe est possible ?",
            "Proposez deux créneaux à Gestion et faites confirmer le rendez-vous. Préparez les liens des onglets.",
            "Pendant la rencontre, montrez un calcul de bout en bout et demandez à Gestion de le refaire.",
            "En cas d’écart, vérifiez format, quantité, HT/TTC, frais et date de la source.",
            "Écrivez les corrections, leur responsable et l’échéance. Mettez à jour les tableaux, puis envoyez le lien aux membres concernés."
          ],
          "deliver": "Un compte rendu et des chiffres cohérents entre services.",
          "check": "Les mêmes coûts alimentent l’offre et le budget global.",
          "table": {
            "headers": [
              "Point",
              "Constat",
              "Correction",
              "Responsable",
              "Échéance",
              "Lien"
            ],
            "rows": [
              [
                "Coût du lot",
                "Transport oublié",
                "Ajouter les frais",
                "À répartir",
                "À fixer",
                "Lien Sheets"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Si les deux services trouvent des coûts différents…",
          [
            "Nous retrouvons la cause et corrigeons",
            "Nous gardons la moyenne sans vérifier"
          ],
          0,
          "Un écart peut venir du format ou des frais."
        ],
        [
          "Une réunion utile laisse…",
          [
            "Des décisions, responsables et prochaines actions",
            "Seulement la liste des présents"
          ],
          0,
          "La trace permet de poursuivre le travail."
        ]
      ]
    },
    "achats-10": {
      "lesson": "Un bon de commande précise une demande d’achat. Il peut engager l’organisation lorsqu’il est émis par une personne habilitée : votre document reste un brouillon pédagogique jusqu’à validation.",
      "sections": [
        {
          "title": "Préparer deux options et un brouillon de commande",
          "why": "Permettre un choix avant tout engagement.",
          "steps": [
            "Dans Sheets, comparez une offre prudente et une offre plus large : produits, quantités, total et limites.",
            "Dans Docs, créez « Le Hanout — PROPOSITION DE COMMANDE — Date ». Inscrivez très visiblement « Brouillon pédagogique — ne pas envoyer ».",
            "Ajoutez fournisseur envisagé, références, désignation, unités par lot, nombre de lots, prix, frais, total, disponibilité et conditions à confirmer.",
            "Reprenez uniquement les identifiants de l’établissement que l’adulte vous autorise à utiliser. Ne signez pas au nom du lycée.",
            "Vérifiez quantité × prix et total. Faites relire par Gestion puis l’enseignant.",
            "Préparez votre recommandation pour Slides et une demande de décision précise. Aucun envoi au fournisseur ni achat sans autorisation."
          ],
          "deliver": "Deux options et un bon de commande en brouillon.",
          "check": "Total vérifié ; statut, validations et inconnues visibles.",
          "table": {
            "headers": [
              "Référence",
              "Désignation",
              "Lots",
              "Prix du lot",
              "Montant"
            ],
            "rows": [
              [
                "À vérifier",
                "Produit / conditionnement",
                "2",
                "6 €",
                "12 €"
              ]
            ]
          },
          "template": "PROPOSITION DE COMMANDE — BROUILLON, NE PAS ENVOYER\nService / auteurs / date :\nFournisseur envisagé :\nRéférences et quantités :\nTotal produits / frais / total général :\nConditions et disponibilité à confirmer :\nAvis Gestion :\nValidation adulte attendue :"
        }
      ],
      "questions": [
        [
          "Le brouillon de commande doit-il être envoyé directement ?",
          [
            "Non, il doit être validé par l’adulte habilité",
            "Oui, dès que le groupe vote"
          ],
          0,
          "Le vote pédagogique ne donne pas le pouvoir d’engager le lycée."
        ],
        [
          "Une proposition au comité comporte…",
          [
            "Des options chiffrées, leurs limites et une recommandation",
            "Un total sans explication"
          ],
          0,
          "Le comité doit comprendre les conséquences du choix."
        ]
      ]
    },
    "espace-5": {
      "lesson": "Les photos gardent une trace de l’état initial et permettent d’expliquer un problème à quelqu’un qui n’est pas sur place. Une photo ne remplace pas une mesure.",
      "sections": [
        {
          "title": "Constituer le dossier d’observation",
          "why": "Faire partir les propositions du lieu réel.",
          "steps": [
            "Demandez l’autorisation d’accéder au lieu et de le photographier. Utilisez le matériel autorisé par le lycée.",
            "Prenez une vue d’ensemble puis deux vues des zones utiles ; évitez les personnes et documents identifiables.",
            "Ouvrez Sources et visuels dans le Drive du service → Nouveau → Importer un fichier. Choisissez les photos autorisées.",
            "Renommez chaque fichier « Zone — Vue — Date ». Ouvrez Travaux → Nouveau → Google Docs.",
            "Dans le Docs, cliquez Insertion → Image → Drive et ajoutez une photo. Écrivez sous l’image : lieu, date, auteur et ce qu’elle montre.",
            "Décrivez les accès, les obstacles, la caisse possible, les prises visibles, l’eau et la poubelle. Notez « non observé » si nécessaire ; ne manipulez pas les installations."
          ],
          "deliver": "Un dossier de vues légendées et une liste des contraintes.",
          "check": "Photos utiles et autorisées ; aucun renseignement inventé.",
          "table": {
            "headers": [
              "Zone",
              "Constat",
              "Conséquence pour la vente",
              "À vérifier"
            ],
            "rows": [
              [
                "Entrée",
                "Passage à observer",
                "Préserver la circulation",
                "Mesure à prendre"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Les photos servent surtout à…",
          [
            "Documenter le lieu et expliquer les contraintes",
            "Déduire toutes les dimensions exactes"
          ],
          0,
          "Il faut mesurer séparément."
        ],
        [
          "Une prise visible peut-elle être testée ou modifiée par le groupe ?",
          [
            "Non, nous demandons au responsable autorisé",
            "Oui, pour vérifier le branchement"
          ],
          0,
          "L’observation ne donne pas l’autorisation d’intervenir."
        ]
      ]
    },
    "espace-6": {
      "lesson": "Un plan coté indique des dimensions. L’échelle conserve un rapport constant entre le dessin et la réalité : à 1:20, un mètre réel devient cinq centimètres sur le papier.",
      "sections": [
        {
          "title": "Préparer et effectuer les mesures",
          "why": "Vérifier que les meubles et les passages tiennent réellement.",
          "steps": [
            "Demandez à l’enseignant un mètre ruban, une feuille, un crayon et si utile une règle. Il vous orientera vers le secrétariat ou le responsable technique.",
            "Faites un croquis et nommez les côtés A, B, C. Travaillez à deux, sans monter sur un meuble ni déplacer du matériel sans accord.",
            "Mesurez longueur, profondeur, largeur des portes et mobilier disponible. Notez toutes les mesures en centimètres avec l’auteur et la date.",
            "Relisez chaque valeur à voix haute ; l’autre élève la note et une seconde lecture vérifie les dimensions clés.",
            "Indiquez sur le croquis les portes et leur ouverture, prises observées, rangement et obstacles.",
            "Pour le dessin papier à 1:20, divisez chaque mesure réelle en cm par 20 : 300 cm → 15 cm. Écrivez l’échelle. Les largeurs de circulation nécessaires sont à valider par l’adulte compétent."
          ],
          "deliver": "Un relevé de mesures et un plan coté.",
          "check": "Unités cohérentes ; dimensions clés revérifiées ; aucune cote supposée.",
          "table": {
            "headers": [
              "Élément",
              "Mesure réelle en cm",
              "Contrôlé par",
              "Dessin 1:20 en cm"
            ],
            "rows": [
              [
                "Mur A — exemple",
                "300",
                "À renseigner",
                "15"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "À l’échelle 1:20, 200 cm se dessinent sur…",
          [
            "10 cm",
            "200 cm"
          ],
          0,
          "200 ÷ 20 = 10."
        ],
        [
          "Quel équipement préparer pour mesurer ?",
          [
            "Mètre, feuille, crayon et travail à deux",
            "Uniquement une photographie"
          ],
          0,
          "Les dimensions doivent être relevées et notées."
        ]
      ]
    },
    "espace-7": {
      "lesson": "Le responsable technique et l’intendance peuvent renseigner le matériel, les contraintes et les conditions d’utilisation. Leurs fonctions sont complémentaires ; nous vérifions qui répond à chaque besoin.",
      "sections": [
        {
          "title": "Préparer une rencontre professionnelle",
          "why": "Chercher d’abord ce qui peut être réemployé.",
          "steps": [
            "Demandez à l’enseignant de confirmer la fonction et le prénom du responsable technique : « Brahim » est une information à vérifier. Demandez aussi le bon interlocuteur à l’intendance.",
            "Obtenez leurs coordonnées professionnelles auprès du lycée ; ne recherchez pas leurs coordonnées personnelles. Notez fonction, adresse vérifiée et origine de l’information dans un Docs interne.",
            "Listez cinq questions : quel matériel disponible ? quelles dimensions ? quel état ? quelles conditions de déplacement ? quelles contraintes du lieu ?",
            "Dans votre messagerie autorisée, préparez un brouillon avec objet, présentation du projet, objectif, durée et deux créneaux. Faites valider les destinataires et le message avant envoi.",
            "Pendant la réunion, notez les réponses sans promettre de déplacer ou acheter du matériel.",
            "Rédigez le compte rendu : disponibles / à vérifier / indisponibles, responsable de la suite et échéance. Transmettez le lien à Gestion."
          ],
          "deliver": "Une fiche contact interne et un compte rendu technique.",
          "check": "Coordonnées confirmées ; disponibilité et autorisation distinguées.",
          "template": "Objet : Le Hanout — demande de rendez-vous sur le matériel disponible\nBonjour,\nNous préparons l’aménagement du point de vente pédagogique Le Hanout avec nos enseignants.\nNous souhaitons connaître le mobilier réutilisable et les contraintes du lieu.\nSeriez-vous disponible [créneau 1] ou [créneau 2] pour un échange de [durée] ?\nMerci pour votre aide.\nPrénoms / service / enseignant référent\nBROUILLON À FAIRE VALIDER"
        }
      ],
      "questions": [
        [
          "Le matériel présent au lycée est-il automatiquement disponible ?",
          [
            "Non, il faut confirmer son utilisation",
            "Oui, dès qu’il semble inutilisé"
          ],
          0,
          "Présence et disponibilité sont différentes."
        ],
        [
          "Quelle adresse inscrire dans le document interne ?",
          [
            "Une coordonnée professionnelle confirmée",
            "Une adresse personnelle trouvée sur Internet"
          ],
          0,
          "Le lycée confirme le bon interlocuteur."
        ]
      ]
    },
    "espace-8": {
      "lesson": "Réemployer consiste à utiliser à nouveau un objet. Le budget doit comparer le coût complet : meuble, transport, accessoires et éventuelle remise en état.",
      "sections": [
        {
          "title": "Chiffrer réemploi et achat",
          "why": "Éviter de comparer seulement les étiquettes de prix.",
          "steps": [
            "Ouvrez Travaux → Nouveau → Google Sheets. Nommez « Le Hanout — Mobilier et budget — Date ».",
            "Recopiez les colonnes du modèle. Pour chaque besoin, cherchez d’abord une option réemployée confirmée.",
            "Pour l’achat neuf, comparez des dimensions et usages proches chez IKEA, Brico Dépôt ou un fournisseur pertinent. Ne supposez pas qu’une enseigne est toujours moins chère.",
            "En G2, tapez =C2*D2+E2+F2. Saisissez des nombres dans C à F, et zéro pour un frais confirmé nul. Une inconnue reste à vérifier, pas zéro.",
            "Notez le lien, la date, la disponibilité et les contraintes de montage. Faites vérifier stabilité et aptitude à l’usage par l’adulte compétent.",
            "Transmettez à Gestion le coût de chaque option et les points manquants."
          ],
          "deliver": "Un budget mobilier avec réemploi et achat comparables.",
          "check": "Frais complets, dimensions et sources visibles.",
          "table": {
            "headers": [
              "Besoin / option",
              "Dimensions",
              "Quantité",
              "Prix unitaire (€)",
              "Transport (€)",
              "Remise en état (€)",
              "Total (€)",
              "Source / disponibilité"
            ],
            "rows": [
              [
                "Étagère — fictif",
                "À mesurer",
                "1",
                "30",
                "10",
                "0",
                "=C2*D2+E2+F2 → 40",
                "Exemple"
              ]
            ]
          },
          "links": [
            [
              "IKEA",
              "https://www.ikea.com/fr/fr/"
            ],
            [
              "Brico Dépôt",
              "https://www.bricodepot.fr/"
            ]
          ]
        }
      ],
      "questions": [
        [
          "Un meuble gratuit peut-il avoir un coût ?",
          [
            "Oui, transport ou remise en état par exemple",
            "Non, gratuit signifie toujours coût total nul"
          ],
          0,
          "Il faut examiner l’ensemble des besoins."
        ],
        [
          "Une dimension inconnue doit être…",
          [
            "Vérifiée avant de retenir l’implantation",
            "Remplacée par une estimation présentée comme exacte"
          ],
          0,
          "Le plan dépend des dimensions réelles."
        ]
      ]
    },
    "espace-9": {
      "lesson": "Une simulation sert à comparer des idées. Elle ne valide ni la sécurité, ni les dimensions, ni le droit de transformer le lieu.",
      "sections": [
        {
          "title": "Dessiner les options A et B",
          "why": "Rendre visibles les conséquences de deux choix.",
          "steps": [
            "Commencez par un plan papier mesuré. Pour un outil simple déjà accessible, ouvrez Google Slides → Insertion → Forme → rectangle pour représenter le mobilier.",
            "Ajoutez dimensions et légende. Une représentation schématique doit porter « non à l’échelle » ; seul un dessin dont les proportions ont été vérifiées peut annoncer une échelle.",
            "Dupliquez la diapositive : faites une option A et une option B. Placez produits, prix, caisse, réserve et flèches de circulation.",
            "Facultatif avec l’adulte : ouvrez le site officiel Sweet Home 3D et examinez la version gratuite installable ou l’accès en ligne disponible. N’installez rien et ne souscrivez rien sans accord ; les conditions des versions peuvent différer.",
            "Si l’outil est disponible, dessinez les murs avec les mesures puis ajoutez le mobilier et ses dimensions. Sinon gardez Slides ou le plan papier : les livrables restent les mêmes.",
            "Exportez ou capturez les deux propositions selon les possibilités autorisées ; rangez-les dans Sources et visuels et relevez les limites."
          ],
          "deliver": "Deux implantations compréhensibles avec contraintes et légende.",
          "check": "Les ouvertures et les passages restent visibles ; faisabilité à valider.",
          "links": [
            [
              "Sweet Home 3D — site officiel",
              "https://www.sweethome3d.com/fr/"
            ]
          ]
        }
      ],
      "questions": [
        [
          "Un rendu 3D suffit-il à valider le lieu ?",
          [
            "Non, mesures et vérifications adultes restent nécessaires",
            "Oui, si le résultat paraît réaliste"
          ],
          0,
          "Un joli rendu peut être irréalisable."
        ],
        [
          "Si le logiciel n’est pas accessible…",
          [
            "Nous utilisons le plan papier ou Slides",
            "Nous prenons un abonnement sans demander"
          ],
          0,
          "L’objectif est de comparer les implantations."
        ]
      ]
    },
    "espace-10": {
      "lesson": "Recommander signifie choisir une option et expliquer pourquoi elle répond mieux aux critères, tout en reconnaissant ses limites.",
      "sections": [
        {
          "title": "Préparer la recommandation d’aménagement",
          "why": "Aider le comité à arbitrer sur des faits.",
          "steps": [
            "Dans un Docs ou Sheets, comparez A et B sur coût, réemploi, capacité, visibilité, rangement et circulation.",
            "Demandez à Achats si l’offre et les quantités peuvent être rangées ; demandez à Vente de simuler le parcours d’un client.",
            "Demandez à Gestion de vérifier les totaux. Repérez les contraintes non résolues avec l’interlocuteur technique.",
            "Choisissez l’option conseillée et une solution de repli. Écrivez les autorisations encore nécessaires.",
            "Préparez les images et montants utiles pour Slides ; faites apparaître le matériel réutilisé et le budget restant."
          ],
          "deliver": "Une recommandation argumentée et des demandes de décision.",
          "check": "Choix fondé sur les mesures, l’usage et le coût complet.",
          "table": {
            "headers": [
              "Critère",
              "Option A",
              "Option B",
              "Source / réserve"
            ],
            "rows": [
              [
                "Coût total",
                "À calculer",
                "À calculer",
                "Budget mobilier"
              ],
              [
                "Réemploi",
                "À décrire",
                "À décrire",
                "Compte rendu technique"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Pourquoi simuler le parcours client ?",
          [
            "Pour vérifier l’usage réel du lieu",
            "Pour remplacer le budget"
          ],
          0,
          "Le client doit pouvoir comprendre et circuler."
        ],
        [
          "Une recommandation solide indique…",
          [
            "Les avantages et les limites",
            "Uniquement les points positifs"
          ],
          0,
          "Les limites aident à décider sans mauvaise surprise."
        ]
      ]
    },
    "vente-5": {
      "lesson": "Une enquête sert à prendre des décisions. Rencontrer les clients permet aussi de comprendre leurs raisons et leurs difficultés, au-delà des cases cochées.",
      "sections": [
        {
          "title": "Préparer ce que nous voulons apprendre",
          "why": "Relier chaque question à une décision du projet.",
          "steps": [
            "Dans Travaux → Nouveau → Google Docs, créez « Le Hanout — Enquête clients — Date ».",
            "Écrivez les décisions à éclairer : produits, formats, prix, moments d’achat, paiement et intérêt pour une fidélité.",
            "Prévoyez de rencontrer élèves ET adultes, selon les lieux et créneaux autorisés par les enseignants.",
            "Construisez le tableau du modèle. Distinguez ce qui sera compté dans Forms et les observations anonymes notées après la conversation.",
            "Préparez une phrase de présentation et un objectif de rencontres réaliste à faire valider. Un échantillon de convenance ne représente pas automatiquement tout le lycée."
          ],
          "deliver": "Un plan d’enquête avec public et décisions visées.",
          "check": "Chaque information cherchée a une utilité ; les limites sont connues.",
          "table": {
            "headers": [
              "Décision",
              "Information recherchée",
              "Question possible",
              "Service destinataire"
            ],
            "rows": [
              [
                "Choisir un paiement",
                "Moyens utilisables",
                "Comment pourriez-vous payer ?",
                "Gestion"
              ],
              [
                "Choisir une offre",
                "Produits souhaités",
                "Quels produits vous seraient utiles ?",
                "Achats"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Pourquoi aller à la rencontre des clients ?",
          [
            "Pour comprendre leurs réponses et leurs besoins",
            "Seulement pour obtenir plus de clics"
          ],
          0,
          "La conversation apporte du contexte."
        ],
        [
          "Dix réponses de personnes proches prouvent-elles l’avis de tout le lycée ?",
          [
            "Non, il faut signaler la limite de l’échantillon",
            "Oui, quel que soit le recrutement"
          ],
          0,
          "Le mode de recrutement influence les résultats."
        ]
      ]
    },
    "vente-6": {
      "lesson": "Une question ouverte laisse formuler une réponse. Une question fermée propose des choix. Un QCU autorise une réponse ; un QCM peut en autoriser plusieurs. Une formulation neutre n’oriente pas la réponse.",
      "sections": [
        {
          "title": "Rédiger le questionnaire dans Docs",
          "why": "Faire vérifier le fond avant de construire le formulaire.",
          "steps": [
            "Dans le Docs d’enquête, ajoutez un tableau : question / utilité / type / réponses / correction.",
            "Proposez six à huit questions courtes, une seule idée par question. Évitez « Vous aimez notre superbe projet ? ».",
            "Prévoyez des choix adaptés, et « autre », « aucun » ou « je ne sais pas » quand c’est utile. Ne demandez pas de nom ni de coordonnées pour cette enquête de besoins.",
            "Pour le paiement, distinguez espèces, carte, téléphone sans contact et autres usages à préciser. Ne supposez pas que tout téléphone permet tout paiement.",
            "Pour le prix, définissez d’abord le produit et le format. Étudiez avec l’enseignant la formulation du prix trop cher et du prix trop bas pour inspirer confiance.",
            "Relisez chaque question à voix haute : un camarade peut-il comprendre sans explication supplémentaire ?"
          ],
          "deliver": "Une version Docs avec types et justifications.",
          "check": "Questions neutres, choix cohérents et aucune collecte inutile.",
          "table": {
            "headers": [
              "Question",
              "À quoi sert-elle ?",
              "Type",
              "Réponses prévues"
            ],
            "rows": [
              [
                "Quel format vous conviendrait ?",
                "Choisir le format",
                "QCU",
                "Petit / grand / aucun / autre"
              ],
              [
                "Pourquoi ?",
                "Comprendre le choix",
                "Ouverte",
                "Texte libre"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Pour autoriser plusieurs choix dans Forms, nous choisissons…",
          [
            "Cases à cocher",
            "Choix multiples à réponse unique"
          ],
          0,
          "Le vocabulaire du menu Forms diffère parfois du mot QCM."
        ],
        [
          "Une question neutre…",
          [
            "Laisse répondre sans suggérer la bonne réponse",
            "Présente notre option comme la meilleure"
          ],
          0,
          "Le but est de découvrir les besoins."
        ]
      ]
    },
    "vente-7": {
      "lesson": "La coopération avec Communication apporte un regard sur la clarté du message. La fidélité se travaille ensemble : intérêt client, règle compréhensible et coût soutenable.",
      "sections": [
        {
          "title": "Organiser une réunion questionnaire et fidélité",
          "why": "Croiser les compétences des deux services.",
          "steps": [
            "Proposez deux créneaux à Communication avec un objectif et les liens du Docs.",
            "Répartissez les rôles : un élève explique, un autre prend les notes ; chaque service donne son avis.",
            "Demandez quelles questions manquent et faites reformuler les questions ambiguës.",
            "Examinez la carte de fidélité déjà préparée : pour qui ? quel avantage ? après combien d’achats ? comment le suivi fonctionne-t-il ?",
            "Écrivez deux mécanismes possibles. Faites demander à Gestion le coût de l’avantage et des supports.",
            "Notez points d’accord, corrections, responsables et échéance. Ne promettez pas encore d’avantage aux clients."
          ],
          "deliver": "Un compte rendu commun et deux options de fidélité.",
          "check": "Le coût et les conditions restent visibles ; les services ont des tâches réparties.",
          "table": {
            "headers": [
              "Sujet",
              "Proposition",
              "Avantage client",
              "Coût / risque",
              "Action suivante"
            ],
            "rows": [
              [
                "Fidélité",
                "Option à décrire",
                "À expliquer",
                "À chiffrer avec Gestion",
                "Faire valider"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "La carte de fidélité concerne…",
          [
            "Vente, Communication et Gestion",
            "Uniquement le dessin du service Communication"
          ],
          0,
          "Le mécanisme et son coût comptent aussi."
        ],
        [
          "Avant de promettre une récompense…",
          [
            "Nous vérifions les conditions, le coût et la validation",
            "Nous imprimons la carte immédiatement"
          ],
          0,
          "Une promesse doit pouvoir être tenue."
        ]
      ]
    },
    "vente-8": {
      "lesson": "Le test vérifie le contenu et l’usage du formulaire. Le lien de réponse sert aux clients ; le lien de modification reste réservé aux personnes autorisées.",
      "sections": [
        {
          "title": "Créer et tester le Google Forms",
          "why": "Éviter de diffuser une enquête incompréhensible ou inaccessible.",
          "steps": [
            "Après relecture adulte du Docs, ouvrez le dossier Travaux → Nouveau → Plus → Google Forms, selon les menus disponibles.",
            "Nommez le formulaire ; ajoutez une courte présentation, sa durée approximative et l’usage des réponses.",
            "Cliquez la première question et recopiez le texte validé. Choisissez « Choix multiples » pour une réponse, « Cases à cocher » pour plusieurs, ou « Réponse courte / Paragraphe » pour une réponse libre.",
            "Cliquez + à droite pour ajouter la suivante. Rendez obligatoires seulement les questions nécessaires et prévoyez une réponse adaptée quand la personne ne sait pas.",
            "Avec l’enseignant, vérifiez les paramètres de collecte, d’accès et de visibilité ; le questionnaire clients ne doit pas publier les réponses individuelles.",
            "Cliquez Aperçu (icône œil si présente). Faites tester par deux personnes autorisées ; corrigez et distinguez les réponses de test des réponses de l’enquête.",
            "Après validation, utilisez Publier ou Envoyer selon l’interface pour obtenir le lien répondant. Faites-le ouvrir sur un appareil autorisé comme le ferait un client."
          ],
          "deliver": "Un Forms corrigé et un lien répondant vérifié.",
          "check": "Version identique au Docs approuvé, accès testé et données limitées."
        }
      ],
      "questions": [
        [
          "Quel lien donner au client ?",
          [
            "Le lien pour répondre au formulaire",
            "Le lien pour modifier les questions"
          ],
          0,
          "Les clients ne doivent pas modifier l’enquête."
        ],
        [
          "Pourquoi tester avant diffusion ?",
          [
            "Pour repérer les ambiguïtés et problèmes d’accès",
            "Pour fabriquer des réponses positives"
          ],
          0,
          "Les tests doivent être identifiés séparément."
        ]
      ]
    },
    "vente-9": {
      "lesson": "Une enquête en face à face reste volontaire. Le QR code facilite l’accès au questionnaire ; la relation se construit par la présentation, l’écoute et la reformulation.",
      "sections": [
        {
          "title": "Aller à la rencontre des clients",
          "why": "Connaître réellement les personnes auxquelles le projet s’adresse.",
          "steps": [
            "Faites valider lieu, créneau, phrase de présentation et répartition des binômes. Sans accord, préparez une simulation en classe.",
            "Pour le QR code, utilisez l’outil autorisé proposé par le navigateur ou Canva. Collez uniquement le lien répondant validé ; ne créez pas de compte ni d’abonnement juste pour le QR code.",
            "Testez le QR code sur un appareil autorisé ; gardez aussi un lien court lisible ou une solution accompagnée si la personne n’a pas de téléphone.",
            "Présentez-vous : « Bonjour, nous préparons Le Hanout, un projet pédagogique. Accepteriez-vous de nous donner votre avis ? ». Respectez un refus.",
            "Laissez répondre sans influencer. Écoutez une remarque, reformulez et demandez confirmation. Ne photographiez ni n’enregistrez la personne sans autorisation adaptée.",
            "Après chaque échange, notez sans identité : élève/adulte si utile, besoin évoqué, difficulté, idée. Ne saisissez aucune information sensible.",
            "Comptez les rencontres, les refus et les réponses obtenues. Transmettez les besoins à Achats et les habitudes de paiement à Gestion."
          ],
          "deliver": "Un journal de rencontres anonymisé ou un protocole prêt si l’autorisation manque.",
          "check": "Participation volontaire, QR testé, aucune réponse inventée.",
          "table": {
            "headers": [
              "Date / créneau",
              "Public rencontré",
              "Besoin / remarque anonyme",
              "Conséquence pour le projet"
            ],
            "rows": [
              [
                "À renseigner",
                "Élève ou adulte",
                "À noter après échange",
                "À discuter avec le service concerné"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Une personne refuse de répondre. Nous…",
          [
            "La remercions et respectons son choix",
            "Insistons jusqu’à obtenir une réponse"
          ],
          0,
          "La participation est volontaire."
        ],
        [
          "Le QR code remplace-t-il l’accueil ?",
          [
            "Non, il aide à ouvrir le questionnaire",
            "Oui, toute conversation devient inutile"
          ],
          0,
          "La rencontre permet de comprendre les besoins."
        ]
      ]
    },
    "vente-10": {
      "lesson": "Analyser consiste à transformer les réponses en enseignements sans dépasser ce qu’elles permettent de dire. Une procédure décrit ce qu’il faut faire dans une situation donnée.",
      "sections": [
        {
          "title": "Présenter les résultats et préparer l’accueil",
          "why": "Faire remonter une connaissance utile des clients.",
          "steps": [
            "Dans Forms, ouvrez Réponses. Avec l’enseignant, distinguez tests et réponses réelles. Si l’enquête n’a pas eu lieu, présentez uniquement le protocole et les résultats attendus, sans chiffres fabriqués.",
            "Dans un Sheets ou Docs de synthèse, notez nombre de réponses, méthode, dates, résultats et limites. Pour chaque résultat, ajoutez « donc nous proposons… ».",
            "Expliquez un besoin découvert grâce à la discussion, sans citer une personne identifiable. Transmettez aux services concernés.",
            "Dans Docs, écrivez cinq étapes d’accueil : saluer / écouter et reformuler / présenter une réponse adaptée / encaisser selon la procédure autorisée / remercier et conclure.",
            "Ajoutez les situations : produit absent, question sans réponse, réclamation, paiement refusé. Écouter, noter et demander à l’adulte plutôt que promettre ce qu’on ne peut décider.",
            "Jouez un dialogue à deux, inversez les rôles et corrigez la procédure. Préparez les preuves et la fidélité pour Slides."
          ],
          "deliver": "Une synthèse clients et une procédure testée.",
          "check": "Les limites, la coopération fidélité et le recours à l’adulte sont explicités.",
          "table": {
            "headers": [
              "Situation",
              "Phrase possible",
              "Action",
              "Relais adulte"
            ],
            "rows": [
              [
                "Produit absent",
                "Je vérifie les alternatives possibles.",
                "Consulter l’offre autorisée",
                "Si aucune réponse fiable"
              ],
              [
                "Paiement refusé",
                "Le paiement ne semble pas confirmé.",
                "Suivre la procédure validée",
                "Ne pas considérer une capture comme preuve suffisante"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Peut-on présenter des réponses attendues comme des résultats ?",
          [
            "Non, il faut attendre les réponses réelles",
            "Oui, si elles semblent probables"
          ],
          0,
          "Il faut distinguer protocole et résultats."
        ],
        [
          "Face à une demande que nous ne pouvons traiter…",
          [
            "Nous expliquons et sollicitons l’adulte compétent",
            "Nous promettons une solution au hasard"
          ],
          0,
          "La fiabilité fait partie de l’accueil."
        ]
      ]
    },
    "communication-5": {
      "lesson": "Le brief est une consigne partagée : public, message, valeurs et contraintes. Documenter l’existant évite de perdre le travail déjà réalisé.",
      "sections": [
        {
          "title": "Rassembler le travail et préparer le journal",
          "why": "Créer une mémoire commune du projet.",
          "steps": [
            "Dans Sources et visuels, rassemblez les logos et visuels existants. Nommez les versions, auteurs et dates sans écraser les fichiers d’origine.",
            "Dans Travaux → Nouveau → Google Docs, créez « Le Hanout — Brief et journal de projet ».",
            "Écrivez le public, le message et les valeurs que vous voulez faire percevoir. Distinguez ce qui a déjà été présenté de ce qui est validé.",
            "Créez une rubrique journal avec les colonnes du modèle. À chaque séance, demandez à un autre service une avancée, une difficulté et une prochaine action.",
            "Réservez un court temps de collecte ; choisissez un sujet utile plutôt que tout filmer. Faites relire les faits par le service concerné."
          ],
          "deliver": "Un brief et un journal de bord initialisé.",
          "check": "Versions conservées, faits vérifiables et auteurs identifiés.",
          "table": {
            "headers": [
              "Date",
              "Service / sujet",
              "Fait réalisé",
              "Difficulté / solution",
              "Prochaine étape",
              "Preuve / statut"
            ],
            "rows": [
              [
                "À compléter",
                "Service rencontré",
                "À vérifier avec lui",
                "Sans mettre une personne en cause",
                "Action précise",
                "Lien interne"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Un journal de projet doit raconter…",
          [
            "Des faits vérifiés, les difficultés et la suite",
            "Seulement des réussites imaginées"
          ],
          0,
          "Une difficulté expliquée montre aussi le travail."
        ],
        [
          "Pourquoi garder les anciennes versions du logo ?",
          [
            "Pour comprendre et argumenter les évolutions",
            "Pour multiplier les fichiers sans titre"
          ],
          0,
          "Les versions doivent être classées clairement."
        ]
      ]
    },
    "communication-6": {
      "lesson": "Un logo identifie le projet. Une piste artistique inspire une recherche ; elle ne remplace pas votre décision argumentée. La corne d’abondance peut évoquer la diversité des ressources et leur mise en commun.",
      "sections": [
        {
          "title": "Explorer une identité lisible",
          "why": "Donner du sens au dessin et au lettrage.",
          "steps": [
            "Observez la piste « Boutique de découvertes » dans la page Entre les services → Atelier graphique. Le lettrage et la corne sont des propositions provisoires.",
            "Dans Canva ou sur papier, réalisez deux variantes : avec emblème / avec nom et signe simplifié. Utilisez les caractères latins pour garder « Le Hanout » immédiatement lisible.",
            "Pour la corne, explorez une silhouette simple qui rassemble des ressources ; un médaillon et un dessin gravé peuvent suggérer le collectif et le partage. Évitez les détails qui disparaissent en petit.",
            "Montrez à deux personnes autorisées le nom sans l’expliquer : peuvent-elles le lire ? Testez aussi petit format, noir et blanc et fond clair.",
            "Dans un Docs, écrivez l’intention, les formes, les couleurs, les avantages et les limites de chaque variante. Utilisez des éléments créés par vous ou dont l’usage est autorisé.",
            "Préparez le choix à présenter au comité. Le service Communication reste auteur de la proposition de logo."
          ],
          "deliver": "Deux pistes testées et un argumentaire.",
          "check": "Nom lisible, petits formats testés et origine des éléments connue."
        }
      ],
      "questions": [
        [
          "La piste de l’application est-elle le logo définitif ?",
          [
            "Non, Communication doit proposer et argumenter",
            "Oui, les élèves n’ont plus de choix"
          ],
          0,
          "La direction artistique sert d’inspiration."
        ],
        [
          "Pourquoi tester en petit et en noir et blanc ?",
          [
            "Pour vérifier que le signe reste identifiable",
            "Pour éviter de réfléchir aux couleurs"
          ],
          0,
          "Un logo doit fonctionner sur plusieurs supports."
        ]
      ]
    },
    "communication-7": {
      "lesson": "Une charte graphique donne des règles simples pour que tous les supports semblent appartenir au même projet. La lisibilité des consignes passe avant la décoration.",
      "sections": [
        {
          "title": "Écrire une charte utilisable par les autres",
          "why": "Éviter que chaque service réinvente ses diapositives.",
          "steps": [
            "Dans Docs, créez « Le Hanout — Charte graphique proposée ». Insérez uniquement le logo retenu ou indiquez clairement « proposition ».",
            "Choisissez deux ou trois couleurs. Notez leur code et leur usage : fond, titres, accents. Vérifiez que le texte ressort nettement.",
            "Réservez le lettrage calligraphique au nom ou à un titre court ; gardez Arial ou une police simple pour les paragraphes et tableaux.",
            "Dans Slides, créez une diapositive modèle avec titre, logo validé s’il existe, date et numéro. Utilisez un fond clair et un corps de texte d’environ 24 points ou plus selon le volume.",
            "Préparez un exemple de titre, de tableau et de légende photo. Partagez le lien avec tous les services après validation."
          ],
          "deliver": "Une charte courte et un modèle Slides.",
          "check": "Codes, polices, usages et statut de validation explicites.",
          "table": {
            "headers": [
              "Élément",
              "Choix proposé",
              "Usage / raison"
            ],
            "rows": [
              [
                "Couleur principale",
                "Bleu profond #19364A",
                "Titres / contraste"
              ],
              [
                "Accent",
                "Or #C69545",
                "Repères, pas petits textes"
              ],
              [
                "Texte",
                "Arial",
                "Lecture simple"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Où utiliser le lettrage très décoratif ?",
          [
            "Sur le nom ou un titre court",
            "Sur toutes les longues consignes"
          ],
          0,
          "Les textes de travail doivent rester faciles à lire."
        ],
        [
          "La charte doit permettre…",
          [
            "À tous les services de créer des supports cohérents",
            "À Communication seule de comprendre le logo"
          ],
          0,
          "Une règle partagée doit être utilisable."
        ]
      ]
    },
    "communication-8": {
      "lesson": "La communication et la relation client se rejoignent dans le questionnaire et la fidélité : message compréhensible, expérience client et promesse réaliste.",
      "sections": [
        {
          "title": "Coopérer sur le questionnaire et la carte",
          "why": "Concevoir un dispositif utile et compréhensible.",
          "steps": [
            "Organisez avec Vente une réunion courte et ouvrez le questionnaire Docs. Reformulez les questions qui paraissent orientées ou difficiles.",
            "Vérifiez que le message de présentation explique le projet et l’usage du questionnaire sans promettre une ouverture déjà décidée.",
            "Ouvrez votre projet de carte de fidélité. Écrivez le mécanisme en une phrase et testez si Vente peut l’expliquer.",
            "Comparez deux options : support papier sans données nominatives et autre dispositif à faire examiner par l’adulte. Ne collectez pas de coordonnées sans besoin validé.",
            "Avec Gestion, chiffrez impression et avantages offerts. Indiquez conditions, durée et validation nécessaires avant diffusion.",
            "Rangez le compte rendu commun et transmettez le lien aux trois services."
          ],
          "deliver": "Un questionnaire relu et une fidélité proposée avec coût et conditions.",
          "check": "Le mécanisme est clair ; aucune promesse non validée.",
          "table": {
            "headers": [
              "Option fidélité",
              "Fonctionnement",
              "Avantage",
              "Coût",
              "Point à valider"
            ],
            "rows": [
              [
                "Option A",
                "À décrire",
                "À définir",
                "À chiffrer",
                "Accord adulte"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Un joli support suffit-il pour une carte de fidélité ?",
          [
            "Non, la règle et son coût doivent être compris",
            "Oui, le fonctionnement viendra après"
          ],
          0,
          "La promesse faite aux clients doit être tenable."
        ],
        [
          "Le questionnaire peut-il être reformulé sans Vente ?",
          [
            "Il faut travailler et relire ensemble",
            "Communication décide seule de toutes les questions"
          ],
          0,
          "Les deux services ont des compétences complémentaires."
        ]
      ]
    },
    "communication-9": {
      "lesson": "Un canal est le moyen de faire passer un message. Instagram ou Snapchat sont des pistes : choix du public, conditions d’usage, compte institutionnel autorisé et validation précèdent la publication.",
      "sections": [
        {
          "title": "Préparer des contenus et un calendrier",
          "why": "Choisir un message utile au bon public.",
          "steps": [
            "Dans Sheets, créez « Le Hanout — Calendrier de communication ». Copiez le modèle.",
            "Pour chaque contenu, écrivez public, objectif, canal envisagé, format et date. Comparez aussi affichage au lycée et présentation en personne.",
            "Pour Instagram et éventuellement Snapchat, demandez à l’adulte si le canal et le compte du projet sont autorisés et qui peut administrer. Ne créez pas de compte au nom d’un élève pour représenter le projet.",
            "Dans Canva, cliquez Créer un design et choisissez un format adapté. Ajoutez un titre court, un visuel autorisé et un message clair. Téléchargez en PNG, puis insérez le visuel dans Slides : Insertion → Image.",
            "Pour une publicité payante éventuelle, recherchez avec l’adulte les conditions et outils de devis officiels. Notez audience, durée, plafond, source et date ; ne lancez aucune campagne.",
            "Envoyez à Gestion une hypothèse chiffrée ou « coût à vérifier ». Comparez avec un scénario sans publicité payante."
          ],
          "deliver": "Un calendrier et deux brouillons de contenus.",
          "check": "Public, objectif, coûts et validation avant publication précisés.",
          "table": {
            "headers": [
              "Date prévue",
              "Public",
              "Objectif",
              "Canal",
              "Format / contenu",
              "Responsable",
              "Coût / source",
              "Statut"
            ],
            "rows": [
              [
                "À fixer",
                "Élèves et adultes",
                "Expliquer le projet",
                "Affiche / réseau à valider",
                "Visuel et message court",
                "À répartir",
                "À vérifier",
                "Brouillon"
              ]
            ]
          },
          "links": [
            [
              "Instagram — centre d’aide",
              "https://help.instagram.com/"
            ],
            [
              "Snapchat — assistance",
              "https://help.snapchat.com/"
            ]
          ]
        }
      ],
      "questions": [
        [
          "Un compte personnel d’élève doit-il porter les recettes ou la communication officielle du projet ?",
          [
            "Non, l’adulte définit le cadre autorisé",
            "Oui, s’il est volontaire"
          ],
          0,
          "Les comptes et responsabilités doivent être définis par les adultes."
        ],
        [
          "Une publicité payante peut-elle être lancée pour voir ?",
          [
            "Non, il faut chiffrer et faire autoriser",
            "Oui, si le montant semble petit"
          ],
          0,
          "Le devis ou l’hypothèse précède la dépense."
        ]
      ]
    },
    "communication-10": {
      "lesson": "Le storytelling raconte le projet à partir de faits. Photos, courtes vidéos sous-titrées et articles doivent éclairer le travail, sans exposer inutilement des personnes.",
      "sections": [
        {
          "title": "Raconter une avancée et une difficulté",
          "why": "Donner des preuves de l’engagement et des apprentissages.",
          "steps": [
            "Choisissez une avancée réelle d’un service. Demandez-lui ce qui a été fait, pourquoi, quelle difficulté est apparue et quelle est la prochaine action.",
            "Préparez un article de cinq à huit lignes avec les questions du modèle. Faites relire les faits au service concerné.",
            "Pour une photo ou vidéo, faites vérifier le droit de capter ET de diffuser sur le canal prévu. Si le cadre n’est pas confirmé, photographiez les objets ou documents autorisés sans personne identifiable.",
            "Pour une courte vidéo, préparez trois plans utiles, une durée adaptée et des sous-titres lisibles. N’ajoutez pas de musique dont les droits ne sont pas vérifiés.",
            "Classez fichiers sources et version proposée dans Drive : date, sujet, auteur, canal et statut. Évitez de ranger des autorisations nominatives dans un dossier public.",
            "Faites valider avant publication. Pour le comité, choisissez un exemple de contenu et les décisions attendues sur identité, fidélité et canaux."
          ],
          "deliver": "Un article et un contenu visuel proposés, relus et classés.",
          "check": "Faits exacts ; autorisations adaptées ; publication séparée de la production.",
          "template": "LE JOURNAL DU HANOUT\nDate / titre / auteur :\nQu’avons-nous fait ?\nPourquoi ?\nQuelle difficulté avons-nous rencontrée ?\nComment avons-nous avancé ?\nQuelle est la prochaine étape ?\nService ayant relu les faits :\nVisuel / source / autorisation vérifiée par :\nCanal envisagé / validation adulte :"
        }
      ],
      "questions": [
        [
          "Une autorisation de prendre une photo vaut-elle pour toute diffusion ?",
          [
            "Non, le canal et les conditions de diffusion doivent être vérifiés",
            "Oui, automatiquement"
          ],
          0,
          "Captation et diffusion doivent être examinées."
        ],
        [
          "Raconter une difficulté consiste à…",
          [
            "Expliquer un obstacle et les actions pour avancer",
            "Désigner publiquement un élève responsable"
          ],
          0,
          "Le journal documente le travail sans mettre les personnes en cause."
        ]
      ]
    },
    "gestion-5": {
      "lesson": "Un budget prévisionnel estime les ressources et les dépenses avant d’agir. Le budget de référence est de 1 500 € collectés l’an dernier auprès de KPMG ; le solde utilisable reste à confirmer avec l’établissement.",
      "sections": [
        {
          "title": "Comparer deux répartitions des 1 500 €",
          "why": "Faire des choix compatibles avec les moyens disponibles.",
          "steps": [
            "Dans Travaux → Nouveau → Google Sheets, créez « Le Hanout — Budget prévisionnel — Date ».",
            "Créez l’onglet « Scénarios » et recopiez le modèle. Les deux colonnes sont des exemples fictifs à remplacer par des propositions sourcées.",
            "En B8, tapez =B2+B3+B4+B5+B6. En B9, tapez =1500-B8. Recommencez pour C8 et C9 avec la colonne C.",
            "La réserve en ligne 6 fait partie de l’enveloppe allouée ; ce n’est pas une dépense déjà effectuée. La ligne 7 rappelle la ressource de référence et ne doit pas entrer dans le total B8.",
            "Demandez à Achats les coûts de stock, à Point de vente le mobilier et à Communication les supports et éventuelles publicités. Ajoutez les frais d’encaissement étudiés plus loin.",
            "Comparez un scénario privilégiant le réemploi et un autre avec plus de mobilier. Demandez à l’adulte de confirmer le solde et les règles d’utilisation."
          ],
          "deliver": "Deux budgets équilibrés avec sources et inconnues.",
          "check": "Les allocations ne dépassent pas 1 500 € ; ressource, réserve et dépenses distinguées.",
          "table": {
            "headers": [
              "Poste (lignes 2 à 9)",
              "Scénario A fictif (€)",
              "Scénario B fictif (€)"
            ],
            "rows": [
              [
                "Stock",
                "500",
                "450"
              ],
              [
                "Mobilier",
                "400",
                "650"
              ],
              [
                "Communication",
                "100",
                "100"
              ],
              [
                "Encaissement",
                "100",
                "100"
              ],
              [
                "Réserve",
                "400",
                "200"
              ],
              [
                "Ressource de référence",
                "1500",
                "1500"
              ],
              [
                "Total alloué",
                "=B2+B3+B4+B5+B6 → 1500",
                "=C2+C3+C4+C5+C6 → 1500"
              ],
              [
                "Reste à allouer",
                "=1500-B8 → 0",
                "=1500-C8 → 0"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Le budget prévisionnel sert à…",
          [
            "Anticiper les besoins et comparer les choix",
            "Prouver que toutes les dépenses ont déjà eu lieu"
          ],
          0,
          "Prévision et réalisation sont différentes."
        ],
        [
          "Quelle est la ressource de référence du projet ?",
          [
            "1 500 €, avec solde à confirmer",
            "2 500 € disponibles sans vérification"
          ],
          0,
          "Les 1 500 € annoncés viennent de la collecte précédente auprès de KPMG."
        ]
      ]
    },
    "gestion-6": {
      "lesson": "Un partenaire peut apporter de l’argent, du matériel, du temps ou des compétences. La levée de fonds désigne ici la recherche de ressources pour le projet, sans promesse de rendement financier.",
      "sections": [
        {
          "title": "Partir des besoins avant de chercher des aides",
          "why": "Demander un soutien concret et utile.",
          "steps": [
            "Dans Docs, listez les besoins non couverts par les scénarios : matériel, produits, impression, accompagnement, financement.",
            "Associez à chaque besoin un type de soutien possible : don, prêt de matériel autorisé, mise à disposition, conseil ou aide financière.",
            "Expliquez dans votre document les termes partenaire, financeur, don, mécénat et subvention à l’aide du lexique.",
            "Pour chaque soutien, écrivez à quoi il servira et qui, côté établissement, serait autorisé à le recevoir.",
            "Ne présentez pas une entreprise comme partenaire acquis sans accord. La collecte précédente auprès de KPMG ne garantit pas un nouveau financement."
          ],
          "deliver": "Une carte des besoins et soutiens recherchés.",
          "check": "Besoin précis, forme de soutien et porteur autorisé à vérifier.",
          "table": {
            "headers": [
              "Besoin",
              "Montant / moyen",
              "Soutien possible",
              "Pourquoi utile ?",
              "Interlocuteur adulte"
            ],
            "rows": [
              [
                "Impression",
                "À chiffrer",
                "Don en nature / devis",
                "Informer les clients",
                "À confirmer"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Un partenaire doit-il forcément donner de l’argent ?",
          [
            "Non, il peut apporter du matériel ou du temps",
            "Oui, sinon ce n’est pas un partenaire"
          ],
          0,
          "Plusieurs formes de soutien existent."
        ],
        [
          "KPMG a aidé l’an dernier. Un nouveau don est-il acquis ?",
          [
            "Non, aucune nouvelle aide n’est garantie",
            "Oui, il suffit de le mettre dans le budget"
          ],
          0,
          "Une aide passée ne vaut pas engagement futur."
        ]
      ]
    },
    "gestion-7": {
      "lesson": "L’éligibilité signifie répondre aux conditions d’une aide. Une piste n’est pas un financement : le type de porteur, le territoire, l’objet, les dépenses et l’échéance doivent correspondre.",
      "sections": [
        {
          "title": "Vérifier des pistes de financement",
          "why": "Éviter les demandes hors sujet ou impossibles.",
          "steps": [
            "Dans Sheets, créez « Financeurs et partenaires ». Recherchez d’abord via les sites officiels des collectivités, fondations ou entreprises et les contacts institutionnels confirmés par les enseignants.",
            "Pour chaque piste, notez nom, site officiel, projet financé, type de porteur admissible, territoire, montant ou nature de soutien, dépenses admises et date limite.",
            "Classez chaque critère : oui / non / à vérifier. Un lycée n’est pas automatiquement éligible à une aide réservée aux associations.",
            "Vérifiez la date de l’appel et son statut ouvert ou fermé. Si une condition manque, notez le contact officiel à interroger avec l’adulte.",
            "Retenez deux ou trois pistes argumentées plutôt qu’une longue liste non vérifiée. Ne contactez pas d’organisme sans validation du message et de l’interlocuteur."
          ],
          "deliver": "Deux ou trois fiches de pistes avec critères sourcés.",
          "check": "Sources datées, statut et porteur autorisé identifiés.",
          "table": {
            "headers": [
              "Organisme / source",
              "Actions soutenues",
              "Porteur éligible",
              "Territoire / échéance",
              "Aide possible",
              "Oui / non / à vérifier",
              "Prochaine vérification"
            ],
            "rows": [
              [
                "Piste à rechercher",
                "À relever mot pour mot puis expliquer",
                "À vérifier",
                "À dater",
                "Sans garantie",
                "À vérifier",
                "Avec enseignant"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Une aide réservée aux associations finance-t-elle automatiquement le lycée ?",
          [
            "Non, il faut vérifier le porteur autorisé",
            "Oui, si le projet est intéressant"
          ],
          0,
          "Les critères d’accès sont déterminants."
        ],
        [
          "Une page ancienne d’appel à projets suffit-elle ?",
          [
            "Non, il faut vérifier la période et les conditions actuelles",
            "Oui, les aides ne changent jamais"
          ],
          0,
          "La date et le statut doivent être vérifiés."
        ]
      ]
    },
    "gestion-8": {
      "lesson": "Un financeur doit comprendre la correspondance entre ses objectifs et des actions réelles. L’économie circulaire, l’inclusion et l’égalité filles-garçons se démontrent par des pratiques et des preuves.",
      "sections": [
        {
          "title": "Construire une correspondance honnête",
          "why": "Montrer l’intérêt du projet sans inventer des engagements.",
          "steps": [
            "Dans Docs, écrivez pour chaque piste l’objectif du financeur avec sa source, puis expliquez-le avec vos mots.",
            "En face, décrivez une action effectivement proposée au Hanout : réemploi du mobilier, limitation des pertes, accessibilité de la participation, responsabilités et prises de parole partagées.",
            "Définissez une preuve simple : nombre de meubles réemployés, suivi des pertes, répartition réelle des rôles ou adaptation testée. Ne comptez pas une intention comme un résultat.",
            "Demandez aux autres services si l’action est réalisable et à l’enseignant si elle est retenue.",
            "Écrivez le besoin à financer, le montant justifié, l’usage et le résultat attendu. Si la correspondance est faible, écartez la piste plutôt que modifier artificiellement le récit."
          ],
          "deliver": "Un argumentaire besoin / action / preuve / soutien.",
          "check": "Aucune valeur affichée sans action concrète correspondante.",
          "table": {
            "headers": [
              "Objectif du financeur",
              "Action Le Hanout",
              "Preuve prévue",
              "Besoin chiffré",
              "Statut"
            ],
            "rows": [
              [
                "Économie circulaire — à vérifier",
                "Réemployer une étagère",
                "Matériel réellement réutilisé",
                "Transport à chiffrer",
                "Proposition"
              ]
            ]
          }
        }
      ],
      "questions": [
        [
          "Comment montrer un engagement d’économie circulaire ?",
          [
            "Avec une action réelle de réemploi et sa preuve",
            "En ajoutant seulement un symbole vert"
          ],
          0,
          "Une valeur doit se traduire en actes."
        ],
        [
          "Si le projet ne répond pas aux critères d’un financeur…",
          [
            "Nous écartons la piste ou vérifions honnêtement",
            "Nous inventons une action pour correspondre"
          ],
          0,
          "La demande doit rester exacte."
        ]
      ]
    },
    "gestion-9": {
      "lesson": "Une solution de paiement se compare sur son coût complet et son usage réel. Un téléphone peut utiliser le sans-contact d’une carte ou une application avec QR code : ces parcours ne sont pas identiques.",
      "sections": [
        {
          "title": "Étudier les paiements avec Vente",
          "why": "Rendre l’encaissement accessible et soutenable.",
          "steps": [
            "Avec Vente, relevez les moyens que les clients peuvent réellement utiliser : espèces, carte, téléphone sans contact, application. Ne demandez pas de données bancaires.",
            "Demandez d’abord à la direction et au service de gestion qui peut encaisser, au nom de quelle structure, sur quel compte et avec quels justificatifs. Aucun compte au nom d’un élève. Un compte au nom d’un enseignant n’est pas une solution acquise : il doit être examiné par l’établissement et compatible avec les conditions du prestataire.",
            "Comparez les solutions autorisables : dispositif de l’établissement, terminal, encaissement sur téléphone compatible, lien ou QR code. PayPal et Revolut sont des pistes à vérifier, pas des offres gratuites présumées.",
            "Créez l’onglet « Paiements — conditions » : solution, titulaire admissible, moyens clients, matériel, connexion, achat/location, abonnement, frais fixes, taux, délai de versement, remboursement et source datée.",
            "Pour un QR code, vérifiez s’il exige une application ou un compte client. Pour le sans-contact, vérifiez appareil et cartes compatibles.",
            "Copiez ensuite le modèle de simulation. Entrez un taux comme 1,5 % et non 1,5. En G2, tapez =B2*C2 ; en H2, =D2+E2+B2*F2+G2*I2.",
            "Comparez les mêmes nombres de ventes et paniers pour toutes les solutions, puis un petit et un grand panier. Demandez à un camarade de refaire les calculs.",
            "Ajoutez les frais au budget et recommandez une solution avec ses limites. Après accord adulte seulement, préparez avec Vente la procédure : montant annoncé, paiement, confirmation effective, trace, incident et remboursement selon les règles du lycée."
          ],
          "deliver": "Un comparatif daté, une simulation et une recommandation à valider.",
          "check": "Coûts complets et conditions confirmés ; aucune ouverture de compte ou transaction réelle.",
          "table": {
            "headers": [
              "Solution (fictive)",
              "Nb ventes B",
              "Panier C (€)",
              "Matériel D (€)",
              "Abonnement E (€)",
              "Fixe/vente F (€)",
              "CA G (€)",
              "Coût total H (€)",
              "Taux I"
            ],
            "rows": [
              [
                "Exemple A",
                "100",
                "2",
                "0",
                "0",
                "0,10",
                "=B2*C2 → 200",
                "=D2+E2+B2*F2+G2*I2 → 13",
                "1,5 %"
              ]
            ]
          },
          "links": [
            [
              "PayPal — tarifs officiels",
              "https://www.paypal.com/fr/business/fees"
            ],
            [
              "Revolut — frais Business",
              "https://www.revolut.com/fr-FR/legal/business-fees/"
            ],
            [
              "Revolut — conditions personnelles",
              "https://www.revolut.com/fr-FR/legal/terms/"
            ]
          ]
        },
        {
          "title": "Réconcilier le budget des services",
          "why": "Intégrer les vrais coûts au même endroit.",
          "steps": [
            "Réunissez les liens stock, mobilier, communication et paiement.",
            "Avec chaque service, vérifiez date, quantité, base de prix et coût complet.",
            "Mettez à jour les deux scénarios à 1 500 €, en indiquant les inconnues.",
            "Notez les corrections et préparez une demande de décision au comité."
          ],
          "deliver": "Un budget global cohérent.",
          "check": "Chaque montant renvoie à une source ou à une hypothèse identifiée."
        }
      ],
      "questions": [
        [
          "0 € d’abonnement signifie-t-il encaissement gratuit ?",
          [
            "Non, il peut y avoir des frais par transaction",
            "Oui, dans tous les cas"
          ],
          0,
          "Il faut additionner tous les coûts."
        ],
        [
          "Un QR code de paiement fonctionne-t-il forcément pour tous les clients ?",
          [
            "Non, il faut vérifier les moyens et applications nécessaires",
            "Oui, tout téléphone suffit"
          ],
          0,
          "Le parcours client dépend de la solution."
        ]
      ]
    },
    "gestion-10": {
      "lesson": "Un dossier de financement explique qui porte le projet, à quel besoin répond la demande et comment les moyens seront utilisés. Il reste en brouillon jusqu’à validation des adultes habilités.",
      "sections": [
        {
          "title": "Préparer la demande et la recommandation",
          "why": "Permettre une décision documentée et une prise de contact autorisée.",
          "steps": [
            "Dans Docs, créez « Le Hanout — Demande de soutien — BROUILLON — Date ».",
            "Présentez le projet pédagogique, les publics, les actions retenues, le budget de référence et le besoin complémentaire précis.",
            "Expliquez le lien réel avec les objectifs du partenaire, la forme de soutien demandée et les preuves prévues.",
            "Ajoutez le calendrier, les limites et les pièces à demander à l’établissement. Les coordonnées et signatures officielles sont confirmées par l’adulte.",
            "Préparez un message de contact en brouillon : destinataire officiel, objet, présentation courte, demande et disponibilité. Faites valider avant envoi.",
            "Dans Slides, comparez deux scénarios budgétaires et présentez paiements, pistes de soutien et décisions attendues. Ne comptez aucun soutien non accordé comme acquis."
          ],
          "deliver": "Un dossier et un courriel en brouillon, plus la recommandation.",
          "check": "Demande précise, chiffres cohérents et autorisation avant contact.",
          "template": "DEMANDE DE SOUTIEN — BROUILLON\nPorteur du projet à confirmer :\nPrésentation du Hanout et public :\nBesoin et montant / nature du soutien :\nActions réelles et correspondance avec le partenaire :\nBudget de référence : 1 500 €, solde à confirmer\nUtilisation envisagée du soutien :\nCalendrier et preuves prévues :\nPièces / signataire / validation adulte :"
        }
      ],
      "questions": [
        [
          "Une aide demandée mais non accordée est…",
          [
            "Une ressource potentielle à distinguer du budget confirmé",
            "De l’argent déjà disponible"
          ],
          0,
          "Ne dépensez pas une promesse non confirmée."
        ],
        [
          "Avant d’envoyer le dossier…",
          [
            "Les adultes valident destinataire, contenu et porteur",
            "Le service signe au nom du lycée"
          ],
          0,
          "Les élèves préparent ; les adultes habilités engagent."
        ]
      ]
    }
  }
};

Object.assign(window.HANOUT.lexicon, {"cahier des charges": ["Document qui précise le travail attendu, ses contraintes et les critères de réussite.", "Le service vérifie ses livrables avant de demander la validation."], "jalon": ["Étape importante qui permet de vérifier où en est le projet.", "Un inventaire contrôlé est un jalon avant de préparer les achats."], "prix psychologique": ["Zone de prix que les clients peuvent juger acceptable, entre trop cher et si bas que la qualité paraît douteuse.", "Vente étudie les réactions à un produit et un format précis ; Achats compare aux coûts."], "marge": ["Différence entre un prix de vente et un coût d’achat, avant les autres frais selon le calcul utilisé.", "Vendu 1,20 € et acheté 0,60 € : écart de 0,60 €, qui n’est pas encore le bénéfice net."], "conditionnement": ["Manière dont le fournisseur regroupe et emballe les produits.", "Un carton de 24 canettes doit être distingué de la canette vendue."], "panier moyen": ["Montant moyen dépensé lors d’une vente.", "200 € de ventes pour 100 passages en caisse donnent 2 € par vente en moyenne."], "encaissement": ["Opération qui consiste à recevoir et enregistrer un paiement.", "La procédure du lycée précise comment vérifier que le paiement est reçu."], "commission": ["Frais prélevés pour un service, parfois fixes et parfois proportionnels au montant.", "Un prestataire peut facturer un pourcentage et un montant par vente."], "sans-contact": ["Paiement avec une carte ou un appareil compatible approché d’un dispositif prévu pour cela.", "Un téléphone compatible peut utiliser un portefeuille de paiement ; ce n’est pas la même chose qu’un QR code."], "QR code": ["Image composée de petits carrés qui permet notamment d’ouvrir un lien en la scannant.", "Le QR de l’enquête ouvre le lien répondant ; celui d’un paiement dépend de la solution choisie."], "fidélité": ["Relation dans laquelle un client revient ; un dispositif de fidélité cherche à encourager ce retour.", "La carte proposée doit avoir des règles claires et un coût soutenable."], "storytelling": ["Manière de raconter un projet avec un fil compréhensible et des faits exacts.", "Le journal raconte une avancée, une difficulté et la prochaine étape."], "canal": ["Moyen utilisé pour communiquer avec un public.", "Affiche, rencontre, Instagram ou message dans l’outil du lycée sont des canaux différents."], "budget prévisionnel": ["Estimation des ressources et dépenses avant leur réalisation.", "Gestion compare deux utilisations des 1 500 €, avec une réserve."], "inclusion": ["Organisation qui permet à des personnes aux besoins différents de participer réellement.", "Proposer une explication et une solution sans téléphone pour l’enquête."], "égalité filles-garçons": ["Égal accès aux responsabilités, aux activités et à la parole, sans stéréotype lié au genre.", "Observer la répartition réelle des rôles et la prise de parole."], "échantillon": ["Ensemble des personnes interrogées dans une enquête.", "Des élèves et adultes rencontrés à certains créneaux ne représentent pas automatiquement tout le lycée."], "échelle": ["Rapport entre une dimension dessinée et la dimension réelle.", "À 1:20, 200 cm réels se dessinent sur 10 cm."], "procédure": ["Suite d’actions décrivant comment traiter une situation.", "Saluer, écouter, proposer, encaisser selon le cadre autorisé et remercier."]});
window.HANOUT.sources.push(["Google Sheets — démarrer", "https://support.google.com/docs/answer/6000292?hl=fr"],["Sweet Home 3D — site officiel", "https://www.sweethome3d.com/fr/"],["PayPal — tarifs", "https://www.paypal.com/fr/business/fees"],["Revolut — frais Business", "https://www.revolut.com/fr-FR/legal/business-fees/"]);
