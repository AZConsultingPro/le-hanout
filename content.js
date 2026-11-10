/* Le Hanout — contenu pédagogique, 8 novembre 2026. */
window.HANOUT = {
  version: '1.2.0',
  root: 'https://drive.google.com/drive/folders/1aJ8bxLvIZW_MwmrWaVCotDhk_1ZBGB9Y',
  teachers: 'Mme A. Miri et A. Zeboudj',
  phases: ['Nous organiser', 'Observer et rechercher', 'Comparer et préparer', 'Présenter et décider'],
  services: [
    {id:'achats',name:'Achats et approvisionnement',short:'Achats',icon:'box',color:'#e7ba53',people:['Benissa','Ilyana','Assiya'],folder:'1csojHtX4g6pBSANogVpzfPyjdzayW4Lw',goal:'Proposer une petite offre, justifiée par le stock, les besoins et des prix comparables.',deliver:'Inventaire, comparatif fournisseurs, proposition d’achats et présentation Slides.'},
    {id:'espace',name:'Point de vente et merchandising',short:'Point de vente',icon:'store',color:'#d8967b',people:['Adam','Islam','Lionel'],folder:'1iZSQaEnHrxiC7UJP2wDzN3tCF7JxSoDb',goal:'Proposer un espace accueillant, pratique et réalisable à partir de mesures et de matériel vérifiés.',deliver:'Relevé de l’espace, compte rendu technique, deux propositions et budget mobilier.'},
    {id:'vente',name:'Vente et relation client',short:'Relation client',icon:'chat',color:'#a4b6d3',people:['Titli','Farell'],folder:'1S1jMLcUy9LKyi96DIuFnVZjZPGUs3JqZ',goal:'Rencontrer élèves et adultes, comprendre leurs besoins et préparer l’accueil, la fidélité et les usages de paiement.',deliver:'Enquête Docs et Forms, journal des rencontres, synthèse clients, procédure d’accueil et proposition de fidélité.'},
    {id:'communication',name:'Communication et image',short:'Communication',icon:'spark',color:'#b0bba0',people:['Chaïma','Jana','Issam'],folder:'1kXxNK5o9Abo9zCFdeOZskipCxuuXs7Mi',goal:'Expliquer l’identité du Hanout et rendre ses messages clairs et cohérents.',deliver:'Identité argumentée, charte, fidélité avec Vente, plan de communication et journal du projet.'},
    {id:'gestion',name:'Gestion et développement',short:'Développement',icon:'chart',color:'#baa9cc',people:['Selmene','Maxim'],folder:'1QNL9y1fn_B05LzFl0DaXl8fsluvfi7h_',goal:'Construire un budget et identifier des partenaires ou financeurs adaptés aux besoins réels.',deliver:'Budget à 1 500 €, partenaires et financements, comparatif des paiements, argumentaire et présentation Slides.'}
  ],
  // Une tâche = un objectif vérifiable. Les quatre phases ont chacune quatre tâches.
  common1: [
    ['Votre adresse de travail','Une adresse professionnelle permet d’identifier l’expéditeur et de partager les bons fichiers.',[
      'Ouvrez Google avec l’enseignant. Si vous avez déjà un compte scolaire adapté, faites-le vérifier avant de créer un autre compte.',
      'Si la création est nécessaire, ouvrez « Créer un compte ». Proposez une adresse du type prenom.nom.pro, selon sa disponibilité. Suivez les conditions affichées avec l’adulte.',
      'Choisissez vous-même votre mot de passe. Ne l’écrivez jamais dans l’application, un document partagé ou un message à l’enseignant.',
      'Notez uniquement votre adresse. Venez la transmettre à Mme Miri ou à A. Zeboudj : ils vous donneront accès au dossier de votre service.',
      'Ouvrez votre messagerie et repérez l’invitation. Si elle n’apparaît pas, demandez à l’adulte de vérifier l’adresse et les accès.'
    ],'Votre adresse transmise et votre accès demandé.','Votre adresse est exacte ; vous savez vous reconnecter sans partager votre mot de passe.','mail',true],
    ['Retrouver et organiser votre dossier','Un classement commun permet de continuer le travail d’un collègue et de retrouver les preuves.',[
      'Cliquez sur « Dossier de mon service ». Connectez-vous au compte auquel l’enseignant a donné accès.',
      'Si « Accès refusé » apparaît, ne créez pas de dossier de remplacement. Montrez le message à l’enseignant.',
      'Dans le dossier du service, cliquez sur « Nouveau », puis « Nouveau dossier ». Créez Organisation, Travaux, Sources et visuels, Présentations et Suivi des séances, seulement s’ils n’existent pas.',
      'Dans Suivi des séances, créez un dossier à votre prénom. Copiez son adresse dans le champ « Lien de ma production » ci-dessous.',
      'Ouvrez « Partager » sur le dossier du service. Vérifiez avec l’adulte les membres du service et les deux enseignants. Conservez l’accès général « Limité ».'
    ],'Une arborescence commune et un sous-dossier personnel de suivi.','Pas de doublon ; chaque membre et les enseignants ont les accès nécessaires.','drive',true],
    ['Choisir un responsable et répartir les missions','Coordonner signifie faire avancer le groupe en donnant une place à chacun.',[
      'Chacun dit s’il souhaite prendre la responsabilité du service et ce qu’il s’engage à faire.',
      'Écoutez toutes les candidatures. Votez ; en cas d’égalité, échangez puis revotez avec l’enseignant.',
      'Choisissez ensemble : responsabilité tournante ou maintenue sur plusieurs séances. Fixez une date de bilan et demandez l’accord de l’enseignant.',
      'Dans Organisation, créez un Google Docs nommé « Le Hanout — Notre service — Organisation ». Écrivez la décision et les responsabilités acceptées.',
      'Ajoutez un tableau : tâche / responsable / autre participant / date prévue. Chacun doit produire et présenter une partie du travail.',
      'Le responsable coordonne et alerte en cas de difficulté. Il ne commande pas seul et ne fait pas tout le travail.'
    ],'Une décision démocratique et une répartition écrite.','Tous ont une tâche ; la durée de responsabilité et le prochain bilan sont précisés.','docs',true],
    ['Préparer le premier document de service','Un document professionnel indique son objet, ses auteurs et ce qui reste à vérifier.',[
      'Lisez la mission de votre service et les quatre séances. Reformulez votre objectif chacun à votre tour.',
      'Ouvrez le dossier Travaux. Cliquez sur Nouveau, puis Google Docs ou Google Sheets selon votre première mission.',
      'Remplacez « Sans titre » par « Le Hanout — Service — Sujet — AAAA-MM-JJ ». Dans le document, indiquez vos prénoms et la date.',
      'Créez trois rubriques : Ce que nous savons / Ce que nous proposons / Ce qui reste à vérifier.',
      'Reprenez les productions existantes si vous en avez. Une production existante n’est pas automatiquement validée.',
      'Montrez votre organisation à un enseignant puis répondez individuellement au questionnaire de l’étape 1.'
    ],'Un premier document rangé et partagé.','Le titre est clair, les auteurs sont identifiés et les inconnues sont signalées.','docs',true]
  ],
  specific: {
    achats: [
      ['Inventorier le stock existant','Avant de dépenser, l’acheteur vérifie ce qui existe déjà pour éviter les achats inutiles.',[
        'Demandez à l’enseignant quel lot vous pouvez manipuler. Préparez une feuille pour compter avant la saisie.',
        'Dans Travaux, créez un Google Sheets nommé « Le Hanout — Achats — Inventaire — Date ».',
        'Ligne 1, saisissez : Produit / Format / Lot / Quantité comptée / Mention de date / Date lue / État ou anomalie / Emplacement / Vérifié par.',
        'Comptez les unités qui pourraient être vendues, pas seulement les cartons. Pour des dates différentes, utilisez des lignes différentes.',
        'Recopiez les informations visibles. Écrivez « à vérifier » si elles sont inconnues. Aucun élève ne décide seul du devenir d’un produit.',
        'Faites recompter au moins deux lignes par un autre membre puis montrez-les à l’enseignant.'
      ],'Un inventaire contrôlé de cinq lignes minimum ou du lot complet s’il est plus petit.','Quantités en unités de vente, lots séparés et anomalies signalées.','sheets',true],
      ['Justifier les produits envisagés','Une offre répond à un besoin ; elle ne se résume pas aux préférences des acheteurs.',[
        'Créez un onglet « Produits envisagés » avec Produit / Format / Besoin supposé / Indice ou source / Stock existant / Point à vérifier.',
        'Proposez cinq produits maximum pour un démarrage limité. Les exemples de boissons ou de confiseries ne sont pas des achats décidés.',
        'Consultez Vente : quelles informations du questionnaire pourront aider à choisir ? En attendant les réponses validées, indiquez « hypothèse ».',
        'Pour chaque produit, précisez stockage, conditionnement, date et contraintes à faire examiner par les adultes.',
        'Classez vos idées : à étudier / à vérifier / non retenu, avec une raison.'
      ],'Cinq hypothèses argumentées, distinctes du stock inventorié.','Une source ou une hypothèse explicite pour chaque besoin.','sheets',false],
      ['Relever et comparer les fournisseurs','Un fournisseur propose des produits. Comparer le coût par unité évite de confondre petit prix du lot et bonne offre.',[
        'Créez l’onglet « Comparatif fournisseurs ». Copiez les en-têtes du modèle disponible dans la boîte à outils Sheets.',
        'Choisissez un même produit et un même format. Cherchez une offre sur METRO, Carrefour et E.Leclerc. Un prix peut varier selon le magasin, la date et les conditions d’accès.',
        'Pour METRO, faites vérifier les conditions de compte et de carte professionnelle par l’enseignant. Si le prix n’est pas accessible, notez « non accessible » ; ne l’inventez pas.',
        'Relevez fournisseur / lien / date / format / nombre d’unités / prix du lot / frais attribuables / HT ou TTC / disponibilité.',
        'Calculez le coût unitaire : (prix du lot + frais attribuables) ÷ nombre d’unités. Exemple fictif : 6 € ÷ 12 = 0,50 €.',
        'Ne faites une moyenne que sur des offres comparables et complètes. Notez le nombre d’offres ; une moyenne de prix d’achat n’est pas un prix de revente.'
      ],'Un comparatif sourcé sur au moins deux offres accessibles et comparables.','Mêmes formats, quantités connues, base de prix cohérente et frais identifiés.','sheets',true],
      ['Préparer une proposition de prix','Un prix de vente est une hypothèse à confronter aux clients et aux coûts.',[
        'Créez l’onglet « Proposition ». Reprenez le coût unitaire vérifié, la quantité envisagée et le coût d’achat total.',
        'Testez un prix de vente égal au double du coût : coût 0,60 €, prix envisagé 1,20 €. Indiquez « simulation ».',
        'Calculez les recettes si tout est vendu puis l’écart avant autres frais. Pour 20 unités : achat 12 €, recettes 24 €, écart 12 €.',
        'Ajoutez : invendus possibles, pertes, transport et autres frais à examiner. L’écart n’est pas un bénéfice net garanti.',
        'Partagez votre tableau avec Gestion. Demandez à Vente si le prix envisagé est cohérent avec les besoins étudiés.',
        'Présentez les hypothèses à l’enseignant. Aucun achat ni prix réel de vente n’est engagé à cette étape.'
      ],'Une simulation expliquée, avec limites et liste des vérifications.','Le calcul peut être refait par un autre élève.','sheets',true],
      ['Croiser les recherches avec Gestion','Deux services vérifient ensemble les données avant une décision budgétaire.',[
        'Proposez à Gestion un créneau court, validé par les enseignants. Préparez trois questions précises.',
        'Montrez l’inventaire, les offres et les calculs. Distinguez ce qui est disponible, supposé et inconnu.',
        'Comparez les résultats de Gestion avec les vôtres. En cas d’écart, retrouvez le format, la source ou les frais.',
        'Rédigez dans Docs un compte rendu : présents / constats / points d’accord / corrections / prochaine action / responsable / échéance.',
        'Mettez à jour le tableau, sans effacer l’explication de vos corrections.'
      ],'Un compte rendu de réunion et un comparatif corrigé.','Gestion dispose du lien et peut expliquer le coût proposé.','agenda',true],
      ['Choisir ce que le comité doit arbitrer','Une proposition claire permet de discuter d’un choix précis.',[
        'Préparez deux options de petite offre : produits, quantités et coût total.',
        'Pour chaque option, écrivez deux avantages et une limite, fondés sur vos relevés.',
        'Formulez votre recommandation et ce qui reste à confirmer avec les adultes.',
        'Choisissez les tableaux utiles pour vos diapositives. Évitez de projeter une feuille entière illisible.'
      ],'Deux options et une recommandation argumentée.','Les montants correspondent aux tableaux et restent des propositions.','slides',true]
    ],
    espace: [
      ['Observer et photographier l’espace','Un aménagement part de l’usage réel du lieu et de ses contraintes.',[
        'Faites confirmer par l’enseignant les espaces que vous pouvez observer et photographier.',
        'Photographiez une vue d’ensemble puis les zones utiles, sans personne ni document identifiable.',
        'Dans Sources et visuels, rangez les photos avec un nom : zone / vue / date. Indiquez qui les a prises.',
        'Dans un Google Docs, décrivez chaque zone : accès, circulation, rangement, visibilité des produits et de la caisse.',
        'Repérez sans manipuler les installations : prises visibles, point d’eau, poubelle à proximité, mobilier et obstacles.'
      ],'Deux ou trois photos utiles et un relevé d’observation.','Lieu identifié ; aucune dimension supposée ; photos autorisées.','docs',true],
      ['Mesurer et dessiner un premier plan','Les mesures permettent de vérifier si une idée tient dans l’espace.',[
        'Demandez un mètre à l’enseignant ; il vous indiquera si vous devez vous adresser au secrétariat ou au responsable technique.',
        'À deux, relevez longueur, profondeur et dimensions utiles du mobilier existant. Ne montez pas sur le mobilier.',
        'Notez la même unité partout, par exemple les centimètres. Mesurez une seconde fois en cas de doute.',
        'Dessinez un rectangle sur papier. Reportez portes, mobilier, obstacles et prises visibles. Écrivez les mesures ; notez les inconnues.',
        'Ajoutez les usages envisagés : produits, prix, caisse, stock et trajet du client. Faites vérifier la circulation par l’adulte.'
      ],'Un croquis coté et une liste des équipements à vérifier.','Chaque mesure a une unité ; le croquis ne vaut pas validation technique.','plan',true],
      ['Préparer la rencontre technique','Un partenaire interne peut aider à trouver du matériel et à éviter des achats inutiles.',[
        'Demandez au secrétariat ou à votre enseignant le nom et les coordonnées professionnelles du responsable technique.',
        'Consignez ces coordonnées uniquement dans votre document Drive privé, avec la source. Ne les inscrivez pas dans un export destiné au site public.',
        'Listez vos questions : mobilier disponible, état, dimensions, transport, installation, prises et contraintes.',
        'Préparez un mail : présentation de la classe, objectif du rendez-vous, deux créneaux possibles, durée proposée et remerciement.',
        'Montrez le brouillon à l’enseignant avant envoi. Convenez avec lui de la personne qui enverra et participera au rendez-vous.',
        'Si le rendez-vous a lieu, prenez des notes. Sinon, notez « réponse attendue » et préparez une proposition provisoire.'
      ],'Un brouillon validable et une liste de questions, puis un compte rendu si rencontre.','Aucun contact ni accord inventé ; aucun message envoyé sans validation.','mail',true],
      ['Comparer réemploi et achat','Le réemploi peut réduire les dépenses et prolonger la vie du matériel.',[
        'Dans Sheets, créez Mobilier / Quantité / Dimensions / Provenance / Coût / Livraison / État / Source / À vérifier.',
        'Distinguez matériel du lycée, prêt ou don, occasion et achat neuf. « Gratuit » ne signifie pas forcément sans transport ni installation.',
        'Recherchez deux offres comparables, par exemple chez IKEA ou Brico Dépôt. Darty est une autre piste si l’équipement étudié le justifie.',
        'Relevez les prix et les dimensions sur la source ; ne présentez pas une enseigne comme toujours moins chère.',
        'Additionnez les coûts et partagez les résultats avec Gestion. Demandez une vérification des contraintes par les adultes.'
      ],'Un budget mobilier avec au moins une piste de réemploi.','Pas d’achat lancé ; dimensions, coûts et disponibilités vérifiés ou signalés.','sheets',true],
      ['Illustrer deux aménagements','Une simulation rend une proposition plus facile à comprendre, mais ne remplace pas les mesures.',[
        'Partez du croquis coté. Dessinez deux options avec des formes simples dans Slides : rectangles pour les meubles, flèches pour la circulation.',
        'Si un outil IA autorisé est accessible, utilisez uniquement une photo validée, sans personne ni information personnelle.',
        'Utilisez le prompt guidé de la boîte à outils. Demandez de conserver les portes, les proportions et les équipements visibles.',
        'Comparez le résultat aux mesures. Notez deux éléments respectés et un élément faux ou à vérifier.',
        'Conservez le croquis même si vous générez une image. Légendez « illustration — dimensions et faisabilité à vérifier ».'
      ],'Deux propositions illustrées et une critique de leurs limites.','La circulation et les zones sont lisibles ; le visuel ne prétend pas être un plan validé.','plan',true],
      ['Recommander un aménagement','Le comité a besoin de connaître à la fois l’intérêt et le coût de chaque option.',[
        'Pour chaque option, préparez un avantage client, un avantage pour le service et une contrainte.',
        'Ajoutez le budget correspondant et les points techniques restant à arbitrer.',
        'Échangez avec Gestion pour éviter de compter deux fois la même dépense.',
        'Préparez une recommandation et une question claire au comité : quelle option retenir pour approfondissement ?'
      ],'Un comparatif de deux options, illustré et chiffré.','Le matériel proposé correspond au budget et aux mesures disponibles.','slides',true]
    ],
    vente: [
      ['Définir ce que l’on veut apprendre','Une enquête sert à comprendre les besoins avant de choisir l’offre.',[
        'Dans Travaux, créez un Google Docs « Le Hanout — Vente — Questionnaire en préparation ».',
        'Écrivez l’objectif en une phrase : comprendre les besoins des lycéens pour préparer une petite offre adaptée.',
        'Chacun propose deux informations utiles à rechercher : produits, moments, formats, prix ou attentes.',
        'Distinguez information utile et donnée personnelle inutile. Aucun nom, téléphone ou adresse électronique n’est nécessaire à cette enquête.',
        'Préparez une première liste de cinq à huit questions maximum.'
      ],'L’objectif et un premier brouillon de questions.','Chaque question répond à un besoin d’information précis.','docs',false],
      ['Écrire des questions compréhensibles','Le type de réponse doit permettre d’obtenir l’information recherchée sans influencer la personne.',[
        'Créez un tableau dans Docs : Information recherchée / Question / Type / Choix proposés / Pourquoi.',
        'Écrivez au moins deux questions ouvertes. Exemple : « Quel besoin rencontrez-vous pendant les pauses ? »',
        'Ajoutez des questions fermées avec des choix équilibrés. Prévoyez « autre » ou « aucun » lorsque cela est pertinent.',
        'Distinguez QCU, un seul choix, et QCM, plusieurs choix. Indiquez le nombre de réponses autorisées si nécessaire.',
        'Pour un prix, nommez un produit et un format précis. Ne mélangez pas le prix d’une canette et celui d’un lot.',
        'Relisez : une seule idée par question, mots simples et aucune formulation comme « Vous aimez…, non ? ».'
      ],'Un questionnaire Docs annoté avec les types de questions.','Questions neutres ; réponses possibles adaptées ; prix relié à un format.','docs',true],
      ['Coopérer avec Communication','Un autre service peut repérer ce qui n’est pas clair pour le public.',[
        'Avec l’enseignant, consultez les disponibilités du service Communication et proposez deux créneaux courts.',
        'Préparez l’objectif du rendez-vous : améliorer la clarté du questionnaire, pas faire réaliser le travail par l’autre service.',
        'Partagez le lien du brouillon avec les droits nécessaires. Montrez vos questions et expliquez vos choix.',
        'Demandez un retour sur les mots difficiles, l’ordre des questions et le message d’introduction.',
        'Écrivez un compte rendu avec trois corrections retenues, les auteurs des modifications et l’échéance.'
      ],'Un compte rendu de coopération et une nouvelle version du questionnaire.','Chaque membre de Vente contribue et sait expliquer au moins une correction.','agenda',true],
      ['Tester puis créer le Google Forms','Tester évite de diffuser un questionnaire incompréhensible.',[
        'Avec l’accord de l’enseignant, faites tester le brouillon à deux camarades. L’un questionne, l’autre observe ; inversez les rôles.',
        'Notez une incompréhension et corrigez-la dans Docs. Deux tests ne représentent pas l’ensemble des lycéens.',
        'Dans le dossier Travaux, cliquez Nouveau, Plus, Google Forms. Donnez un titre et une phrase expliquant l’objectif.',
        'Recopiez les questions relues. Choisissez Réponse courte ou Paragraphe pour l’ouvert ; Choix multiples pour QCU ; Cases à cocher pour QCM.',
        'Vérifiez avec l’adulte les paramètres : pas de collecte d’adresse inutile ; pas de résumé public des réponses.',
        'Utilisez l’aperçu pour tester. Gardez le formulaire en préparation ; ne diffusez pas encore le lien aux lycéens.'
      ],'Un Forms préparé et une trace des corrections issues du test.','Les paramètres et chaque question ont été relus.','forms',true],
      ['Préparer la demande de diffusion','Un questionnaire diffusé engage le projet : son objectif et son public doivent être explicites.',[
        'Rédigez une courte introduction : qui porte Le Hanout, pourquoi répondre, durée estimée et usage des réponses.',
        'Préparez deux modalités de diffusion à discuter, dont Pronote si l’établissement l’autorise.',
        'Précisez qui diffuserait, à quel public et sur quelle période. Ces éléments restent des propositions.',
        'Montrez la version complète à l’enseignant. Listez les questions à soumettre au comité avant toute administration.'
      ],'Une proposition de diffusion et les points à faire valider.','Aucune diffusion générale avant accord adulte.','docs',true],
      ['Expliquer comment exploiter les réponses','Une enquête doit permettre de prendre une décision, tout en reconnaissant ses limites.',[
        'Dans Docs, préparez un tableau : Question / Ce que nous compterons ou regrouperons / Décision que cela pourrait aider.',
        'Pour un QCU, prévoyez de compter les choix ; pour une réponse ouverte, de regrouper les idées proches.',
        'Écrivez les limites : nombre de réponses, public interrogé, réponses manquantes ou ambiguës.',
        'Préparez la présentation du questionnaire et de sa méthode. N’inventez pas de résultats avant la diffusion.'
      ],'Un plan d’analyse et une présentation du questionnaire à valider.','Le public et les limites sont identifiés.','slides',true]
    ],
    communication: [
      ['Rassembler les travaux existants','Classer un travail déjà réalisé permet de le réutiliser et d’expliquer son état.',[
        'Retrouvez les propositions de logo, les explications graphiques et les supports de votre première présentation.',
        'Copiez ou déplacez les fichiers autorisés dans Sources et visuels, sans supprimer les originaux utiles.',
        'Créez un Google Docs : Production / Auteur / Date / Lien / Statut / Prochaine correction.',
        'Utilisez les statuts : proposition / à corriger / validé par l’enseignant. Ne déclarez pas une validation inexistante.',
        'Chacun explique une partie du travail déjà réalisé. Le parcours sert à organiser et approfondir ces acquis.'
      ],'Un inventaire des productions existantes.','Les fichiers s’ouvrent et leur statut est explicite.','drive',true],
      ['Expliquer le logo','Un logo aide à reconnaître un projet ; sa justification doit être liée au public et aux usages.',[
        'Dans Docs, répondez : qui est notre public ? Que propose Le Hanout ? Quelle valeur voulons-nous transmettre ?',
        'Insérez la proposition existante. Expliquez le symbole, les couleurs et la façon d’écrire le nom « Le Hanout ».',
        'Vérifiez la lisibilité en petit et en noir et blanc. Faites lire le nom à une personne extérieure au service.',
        'Recensez les usages envisagés : diapositive, étiquette, affiche, enseigne. Une image trop détaillée peut devenir illisible.',
        'Demandez quelle version doit être présentée ou corrigée. Ne publiez pas sur un réseau social à cette étape.'
      ],'Un brief et une justification courte du logo.','Nom exact, public identifié et une limite reconnue.','docs',true],
      ['Préparer une charte simple','Une charte graphique aide les services à produire des supports cohérents.',[
        'Choisissez une police simple et lisible, par exemple Arial. Expliquez le choix par la lecture à distance.',
        'Proposez deux couleurs principales et une couleur de fond claire. Vérifiez le contraste entre texte et fond.',
        'Définissez la place du logo validé, du titre, de la date et du numéro de diapositive.',
        'Créez une page témoin dans Slides. Évitez les longs paragraphes et les polices minuscules.',
        'Partagez cette proposition avec les autres services après validation adulte. Les choix restent révisables.'
      ],'Une page de charte et une diapositive témoin.','Chaque règle a une raison et peut être appliquée par un autre service.','slides',true],
      ['Aider Vente à préparer son questionnaire','Communiquer, c’est aussi rendre un message compréhensible.',[
        'Organisez un court échange avec Titli et Farell avec l’accord de l’enseignant.',
        'Lisez leur brouillon sans écrire à leur place. Repérez les mots difficiles et les questions qui influencent.',
        'Demandez : que cherchez-vous à savoir ? Quel type de réponse vous aidera ?',
        'Proposez trois améliorations et laissez Vente expliquer celles qu’il retient.',
        'Rédigez un compte rendu commun : présents, corrections retenues, répartition et prochaine date.'
      ],'Une trace de coopération et trois retours argumentés.','Vente reste auteur de son questionnaire ; chacun participe.','agenda',true],
      ['Créer un visuel Canva utile','Un visuel sert un message ; il ne doit pas empêcher de modifier les textes de présentation.',[
        'Ouvrez Canva avec le compte autorisé. Choisissez un format adapté : présentation 16:9 ou visuel destiné à une diapositive.',
        'Reprenez le logo proposé ou validé et les couleurs de la charte. Vérifiez les éléments gratuits disponibles.',
        'Créez un seul visuel utile : proposition d’affiche, composition du logo ou exemple de signalétique.',
        'Téléchargez-le au format PNG dans Sources et visuels. Conservez aussi le lien vers la création modifiable.',
        'Dans Slides : Insertion, Image, Importer depuis l’ordinateur. Ajoutez un titre et une légende modifiables.'
      ],'Un visuel exporté et inséré dans Slides, avec son lien source.','Visuel lisible, nom exact et absence de date d’ouverture non confirmée.','canva',true],
      ['Préparer les choix d’identité à arbitrer','Le comité doit comprendre ce qu’il choisit et dans quels usages.',[
        'Présentez la proposition actuelle et une variante seulement si elle apporte une différence utile.',
        'Comparez lisibilité, cohérence avec les valeurs, simplicité d’impression et usages.',
        'Listez les validations demandées : version du logo, couleurs, prochaine production.',
        'Préparez la justification orale et les fichiers qui permettront aux autres services de réutiliser la version retenue.'
      ],'Une recommandation graphique et des fichiers accessibles.','Les choix sont expliqués ; aucune décision du comité n’est anticipée.','slides',true]
    ],
    gestion: [
      ['Comprendre le budget de départ','Un budget prévoit comment utiliser les moyens disponibles et conserve une réserve.',[
        'Créez un Google Sheets « Le Hanout — Gestion — Budget et financements ».',
        'Notez : 1 500 € collectés l’année dernière par les terminales EPC auprès de KPMG, selon les informations transmises par les enseignants.',
        'Demandez à l’établissement de confirmer le solde réellement disponible et les modalités d’utilisation. Ce financement passé ne garantit pas un nouveau don.',
        'Créez les catégories : marchandises / mobilier et matériel / communication / autres frais / réserve.',
        'Ajoutez Montant proposé / Justification / Source / Vérifié ou à vérifier. Le total proposé doit être égal à 1 500 €.'
      ],'Un budget provisoire, avec l’origine du financement et une réserve.','Pas de double comptage ; solde à confirmer ; total vérifié.','sheets',true],
      ['Distinguer les formes de soutien','Un partenaire peut apporter de l’argent, du matériel, des compétences, du temps ou des contacts.',[
        'Ouvrez le lexique : partenaire, financeur, don, subvention, mécénat et financement participatif.',
        'Dans Docs, écrivez un exemple de soutien utile au Hanout pour trois formes différentes.',
        'Distinguez rechercher des fonds et obtenir des fonds : nous préparons une demande ; aucun accord n’est garanti.',
        'Identifiez le porteur de la demande avec l’enseignant : le service élève prépare, l’établissement valide les démarches.',
        'Listez un besoin concret qui pourrait justifier une aide complémentaire. N’ajoutez pas une dépense seulement pour demander de l’argent.'
      ],'Trois exemples de soutien et un besoin argumenté.','Partenaire et financeur ne sont pas confondus.','docs',false],
      ['Repérer des partenaires et financeurs','Une recherche efficace vérifie qui peut demander quoi, pour quelles actions et à quelles dates.',[
        'Créez un onglet Pistes : Organisme / Type de soutien / Public éligible / Actions financées / Dépenses acceptées / Dates / Source / Vérifications.',
        'Commencez par La Trousse à projets et sa charte. Repérez les conditions applicables aux projets pédagogiques et le rôle des adultes.',
        'Explorez avec l’enseignant une piste de collectivité et une piste d’entreprise ou d’association locale. Une aide repérée n’est pas une aide acquise.',
        'Pour chaque piste, recopiez l’adresse de la page officielle et la date de consultation. Cherchez les conditions, pas seulement une page de présentation.',
        'Si l’éligibilité ou la date n’est pas claire, écrivez une question à poser et « à confirmer ». Ne remplissez pas un dossier à l’aveugle.'
      ],'Trois pistes documentées, dont une analysée plus précisément.','Les critères et les inconnues sont visibles ; aucune promesse inventée.','sheets',true],
      ['Relier le projet aux objectifs du partenaire','Un argument de financement doit correspondre à une action réelle du projet.',[
        'Dans Docs, créez Objectif du financeur / Action réelle du Hanout / Preuve ou engagement / Point à vérifier.',
        'Pour le réemploi : demandez à Merchandising quel mobilier existant peut réellement être réutilisé.',
        'Pour l’économie circulaire : précisez comment prolonger l’usage d’objets ou réduire un gaspillage identifié.',
        'N’ajoutez pas une étiquette « écologique » sans action concrète. N’inventez ni chiffres d’impact ni engagement déjà pris.',
        'Sélectionnez une piste pertinente et expliquez pourquoi une autre convient moins au projet.'
      ],'Un tableau de correspondance et une sélection justifiée.','Chaque argument a une action et une preuve ou une vérification associée.','docs',true],
      ['Croiser les coûts des autres services','Le budget global évite que deux services comptent la même dépense ou oublient un frais.',[
        'Organisez deux échanges courts : avec Achats pour les marchandises, avec Merchandising pour le mobilier.',
        'Demandez les liens des tableaux, les quantités, les frais et les sources. Vérifiez au moins un calcul par service.',
        'Construisez deux scénarios : démarrage limité avec réemploi / développement avec besoins supplémentaires.',
        'Pour chaque scénario, montrez dépenses, réserve, financement disponible annoncé et besoin complémentaire éventuel.',
        'Conservez les calculs dans Sheets. Si le total dépasse les moyens disponibles, expliquez quels choix sont nécessaires.'
      ],'Deux scénarios chiffrés et un compte rendu des échanges.','Pas de dépense en double ; réserve et frais visibles.','sheets',true],
      ['Préparer une demande et une recommandation','Un financeur doit comprendre le projet, le besoin et ce que son aide rendrait possible.',[
        'Rédigez un brouillon : présentation du Hanout / objectif pédagogique / besoin chiffré / soutien demandé / utilisation prévue.',
        'Ajoutez le lien entre le projet et les objectifs vérifiés du partenaire. Indiquez les autres moyens déjà annoncés.',
        'Préparez les questions encore ouvertes et la personne adulte qui pourrait porter la démarche.',
        'Montrez le brouillon à l’enseignant. Aucun envoi, collecte ou engagement n’a lieu sans son accord.',
        'Dans Slides, recommandez un scénario et une piste de soutien ; expliquez les conditions et les limites.'
      ],'Un brouillon de demande et une recommandation au comité.','Montants cohérents, partenaire pertinent et démarche à valider.','slides',true]
    ]
  },
  common3: [
    ['Construire les quatre diapositives','Slides rassemble les preuves et les choix pour permettre au comité de décider.',[
      'Dans Présentations : Nouveau, Google Slides, présentation vierge. Nommez « Le Hanout — Service — Comité de direction — Date ».',
      'Choisissez un format 16:9, une police lisible et un fond clair. Suivez la charte proposée par Communication si elle est validée.',
      'Diapositive 1 : service, mission, prénoms et rôles, date et nom de la réunion.',
      'Diapositive 2 : travail réalisé, constats et preuves utiles. Distinguez réalisation et projet.',
      'Diapositive 3 : deux propositions, avantages, limites et coûts lorsque c’est pertinent.',
      'Diapositive 4 : recommandation, décisions demandées, points à vérifier et prochaine action.',
      'Ajoutez le logo validé s’il existe, la date et le numéro des diapositives. Gardez les textes modifiables dans Slides. Canva fournit seulement les visuels utiles.'
    ],'Quatre diapositives minimum, rangées et partagées.','Texte lisible à distance, sources des chiffres et demandes de décision précises.','slides',true],
    ['Vérifier et préparer la prise de parole','Une présentation est un travail d’équipe, préparé pour le public qui doit décider.',[
      'Vérifiez chaque lien et chaque chiffre. Demandez à un autre membre de refaire un calcul ou de reformuler une justification.',
      'Répartissez dix minutes : mission 1 min / avancées 3 min / options 4 min / décisions demandées 2 min.',
      'Inscrivez qui présente chaque partie dans les notes Slides. Chaque membre prend la parole.',
      'Répétez en chronométrant. Expliquez les termes ; évitez de lire intégralement le texte projeté.',
      'Montrez le support à l’enseignant. Préparez les réponses aux questions : pourquoi ce choix ? Quel coût ? Quelle preuve ? Quelle limite ?',
      'Répondez individuellement au questionnaire de l’étape 3 puis exportez votre progression.'
    ],'Un support vérifié et une répartition orale répétée.','Dix minutes respectées ; chacun connaît sa partie et une limite du travail.','slides',true]
  ],
  common4: [
    ['Comprendre le conseil d’administration','Présenter Le Hanout au lycée demande d’expliquer l’utilité, les moyens et les conditions du projet.',[
      'Ouvrez l’insert « Conseil d’administration » depuis la boîte à outils.',
      'Distinguez le comité de direction pédagogique, qui réunit les services, et le conseil d’administration du lycée.',
      'Repérez qui siège au CA : direction, représentants des personnels, des parents, des élèves, collectivités et personnalités qualifiées.',
      'Comprenez son rôle : décisions relevant de l’organisation, du projet et du budget de l’établissement.',
      'Avec les enseignants, précisez ce que nous souhaitons lui présenter et les décisions à demander. La date et l’ordre du jour restent à confirmer.'
    ],'Une explication simple du rôle du CA et de notre objectif.','Vous ne confondez pas proposition, vote pédagogique et autorisation de l’établissement.','ca',true],
    ['Participer au comité de direction','Les services réunissent leurs travaux pour construire une proposition commune.',[
      'Installez les tables pour que chacun puisse voir les autres et l’écran, selon les consignes de la salle.',
      'Ouvrez la présentation du service. Présentez pendant dix minutes ; les autres notent leurs questions.',
      'Écoutez chaque option avant de voter ou de formuler un avis. Les enseignants précisent ce qui peut être décidé dans ce cadre.',
      'Notez les demandes d’autorisation et les informations manquantes. Les achats, publications et modalités d’ouverture restent à valider par les adultes.',
      'Si le temps manque, conservez les questions dans le relevé. Les cinq présentations occupent déjà cinquante minutes.'
    ],'Une présentation collective et des questions prises en note.','Chaque élève participe et les limites des décisions sont explicites.','slides',true],
    ['Consigner les décisions et préparer le CA','Une réunion devient utile lorsque ses décisions et ses suites sont accessibles.',[
      'Dans le dossier Comités de direction, préparez avec l’enseignant un Docs « Le Hanout — Relevé de décisions — Date ».',
      'Écrivez pour chaque point : proposition / avis du comité / décision validée ou en attente / responsable / échéance.',
      'Ne transformez pas un vote du groupe en autorisation d’achat ou d’ouverture.',
      'Repérez les éléments de votre service à intégrer à la présentation commune au CA. Les enseignants coordonnent le support final.',
      'Mettez à jour vos documents et indiquez les corrections à réaliser avant cette présentation.'
    ],'Un relevé partagé et la prochaine action de chaque service.','Le statut des décisions et leur responsable sont clairement indiqués.','docs',true],
    ['Clore la séance et transmettre votre progression','Une trace permet aux enseignants et aux membres absents de reprendre le travail.',[
      'Répondez individuellement au questionnaire de l’étape 4.',
      'Cliquez « Mon bilan ». Relisez les étapes déclarées et décrivez ce que vous avez personnellement fait, vérifié et appris.',
      'Ajoutez une difficulté, une décision attendue et votre prochaine action. Ne déclarez pas un travail qui n’a pas eu lieu.',
      'Téléchargez votre compte rendu puis votre sauvegarde de progression. Conservez les deux fichiers sur l’ordinateur.',
      'Dans le Drive du service, déposez le compte rendu dans Suivi des séances / votre prénom et le JSON dans Progression Équipe / votre prénom. Vérifiez la présence de chaque fichier.',
      'À la prochaine séance, téléchargez la sauvegarde depuis Drive si nécessaire et choisissez « Reprendre une sauvegarde » dans l’application.'
    ],'Un compte rendu lisible et une sauvegarde de reprise déposés dans Drive.','Les fichiers portent votre prénom et la date ; ils s’ouvrent et sont accessibles aux enseignants.','drive',true]
  ]
};

window.HANOUT.lexicon = {
    'agile':['Avancer par petites étapes, vérifier puis ajuster grâce aux retours.','Nous montrons un premier tableau avant de le compléter.'],
    'asynchrone':['Travailler à des moments différents en laissant des traces compréhensibles.','Le collègue absent peut reprendre grâce au dossier partagé et au compte rendu.'],
    'accountable':['Être comptable du résultat : le suivre, alerter et rendre des comptes.','Le chef de service répond des livrables ; chaque membre participe et répond de sa contribution.'],
    'document partagé':['Un même fichier accessible aux personnes autorisées selon leurs droits.','Avec un accès général Limité, avoir le lien ne suffit pas : il faut une autorisation.'],
 'partenaire':['Personne ou organisation qui aide le projet avec du matériel, du temps, des conseils, des contacts ou de l’argent.','Une entreprise qui donne une étagère peut devenir partenaire.'],
 'financeur':['Personne ou organisme qui apporte de l’argent à un projet.','Une aide financière doit avoir des conditions et un usage connus.'],
 'fournisseur':['Organisation qui propose les produits ou services dont nous avons besoin.','Une enseigne peut fournir des marchandises au lycée.'],
 'service':['Groupe chargé d’un ensemble de missions dans une organisation.','Achats prépare les propositions d’approvisionnement.'],
 'responsable':['Personne qui coordonne une mission et suit son avancement.','Le responsable vérifie que chacun a une tâche.'],
 'coordonner':['Organiser les tâches pour qu’elles avancent ensemble.','Prévoir un échange entre Achats et Gestion.'],
 'échéance':['Date à laquelle une tâche doit être terminée ou réexaminée.','Préparer le tableau avant la prochaine séance.'],
 'livrable':['Production concrète à remettre à la fin d’une tâche.','Un tableau contrôlé ou une présentation.'],
 'inventaire':['Liste de ce qui existe réellement, avec des quantités vérifiées.','Compter les unités de chaque produit en stock.'],
 'stock':['Produits conservés en attente de leur utilisation ou de leur vente.','Les marchandises déjà présentes au lycée.'],
 'réception':['Moment où l’on reçoit et contrôle une livraison.','Comparer les tenues commandées aux tenues reçues.'],
 'bon de commande':['Document qui décrit ce qui a été demandé au fournisseur.','Il indique notamment produits et quantités commandés.'],
 'bon de livraison':['Document qui accompagne la livraison et indique ce que le fournisseur annonce avoir livré.','Il doit être confronté à ce qui a été reçu.'],
 'écart':['Différence entre deux quantités ou deux montants.','10 commandés et 8 reçus : il manque 2 unités.'],
 'lot':['Ensemble de plusieurs unités regroupées.','Un carton contenant 12 canettes.'],
 'format':['Taille ou quantité d’un produit.','Une canette de 33 cl et une bouteille de 1 litre sont deux formats.'],
 'coût unitaire':['Coût d’une seule unité du produit.','Un lot de 12 à 6 € revient à 0,50 € par unité, avant autres frais éventuels.'],
 'prix de vente':['Somme demandée au client pour un produit.','1,20 € est ici une hypothèse à faire valider.'],
 'recettes':['Argent obtenu par les ventes.','20 unités vendues 1 € donnent 20 € de recettes.'],
 'bénéfice net':['Ce qui reste lorsque toutes les charges ont été prises en compte.','La différence entre achat et vente ne suffit pas à le connaître.'],
 'HT':['Hors taxes : montant avant ajout de la TVA.','Ne comparez pas sans explication un prix HT et un prix TTC.'],
 'TTC':['Toutes taxes comprises : montant incluant les taxes.','Relevez toujours la base indiquée par la source.'],
 'budget':['Prévision des ressources et des dépenses d’un projet.','Répartir 1 500 € entre besoins et réserve.'],
 'réserve':['Part des moyens que l’on ne prévoit pas de dépenser immédiatement.','Elle aide à faire face à un besoin encore inconnu.'],
 'scénario':['Une façon possible d’organiser ou de financer le projet.','Démarrer avec du réemploi ou avec du mobilier neuf.'],
 'réemploi':['Utiliser de nouveau un objet existant pour un usage adapté.','Réutiliser une étagère du lycée après vérification.'],
 'économie circulaire':['Façon de produire et de consommer qui cherche à prolonger la vie des objets et à limiter les déchets.','Réemployer du mobilier plutôt que le jeter.'],
 'subvention':['Aide financière accordée par un organisme sous certaines conditions.','Il faut vérifier qui peut demander l’aide et quelles dépenses sont acceptées.'],
 'don':['Argent ou bien donné sans remboursement attendu.','Une entreprise peut proposer du matériel ; l’établissement examine son acceptation.'],
 'mécénat':['Soutien à une action d’intérêt général, sans contrepartie commerciale équivalente.','La forme du soutien et son acceptation sont à examiner avec l’établissement.'],
 'financement participatif':['Collecte auprès de plusieurs personnes pour financer un projet présenté.','La Trousse à projets propose un cadre pour des projets pédagogiques.'],
 'levée de fonds':['Démarche pour réunir de l’argent afin de réaliser un projet. Ici, il s’agit de rechercher des soutiens adaptés.','Préparer une demande argumentée ne garantit pas d’obtenir les fonds.'],
 'éligibilité':['Conditions à remplir pour pouvoir demander une aide.','Le territoire, le porteur du projet ou la date peuvent compter.'],
 'critère':['Élément utilisé pour comparer ou choisir.','Le prix, la solidité et la lisibilité sont des critères possibles.'],
 'arbitrage':['Choix entre plusieurs options en tenant compte de leurs avantages et limites.','Choisir entre deux aménagements après comparaison.'],
 'merchandising':['Organisation des produits et de l’espace pour rendre l’offre visible, compréhensible et pratique.','Placer les prix près des bons produits.'],
 'circulation':['Chemin que les personnes peuvent emprunter dans un espace.','Vérifier que le mobilier ne bloque pas le passage.'],
 'simulation':['Représentation ou calcul pour étudier une possibilité.','Une image d’aménagement n’est pas une installation réelle.'],
 'question ouverte':['Question à laquelle la personne répond avec ses propres mots.','« De quoi auriez-vous besoin pendant une pause ? »'],
 'question fermée':['Question pour laquelle des réponses sont proposées.','Choisir parmi plusieurs formats.'],
 'QCU':['Question à choix unique : une seule réponse peut être choisie.','Dans Forms : Choix multiples.'],
 'QCM':['Question à choix multiples : plusieurs réponses peuvent être choisies.','Dans Forms : Cases à cocher.'],
 'neutre':['Qui ne pousse pas vers une réponse attendue.','« Quels produits souhaitez-vous ? » plutôt que « Vous aimez les bonbons, non ? ».'],
 'charte graphique':['Règles communes pour les couleurs, les polices et les usages du logo.','Tous les services peuvent utiliser le même style de diapositive.'],
 'brief':['Petit document qui explique le besoin et les contraintes avant de créer.','Public, message, couleurs et usages d’un logo.'],
 'logo':['Signe visuel qui aide à reconnaître une organisation ou un projet.','Le logo proposé doit rester lisible en petit.'],
 'source':['Origine d’une information que l’on peut retrouver.','Le lien d’une offre fournisseur et sa date de consultation.'],
 'hypothèse':['Idée ou valeur provisoire qu’il faut vérifier.','Un produit pourrait répondre à un besoin : il reste à enquêter.'],
 'dossier':['Espace qui rassemble des fichiers.','Le dossier Travaux de votre service.'],
 'lien':['Adresse permettant d’ouvrir une page, un dossier ou un document.','Le lien de votre présentation Slides.'],
 'accès':['Autorisation d’ouvrir ou de modifier un contenu.','Un enseignant partage le dossier avec votre adresse.'],
 'lecteur':['Personne autorisée à consulter un fichier sans le modifier.','Utile pour consulter un document validé.'],
 'éditeur':['Personne autorisée à modifier un fichier.','Les membres d’un service peuvent corriger leur tableau.'],
 'importer':['Faire entrer un fichier dans un outil.','Ajouter votre sauvegarde à l’application pour reprendre.'],
 'exporter':['Créer un fichier à partir de votre travail pour le conserver ou le transmettre.','Télécharger votre progression puis la déposer dans Drive.'],
 'sauvegarde':['Copie de vos informations permettant de reprendre le travail.','Le fichier de progression contient les étapes, réponses et notes.'],
 'cellule':['Case d’un tableur repérée par une colonne et une ligne.','B2 est la case de la colonne B et de la ligne 2.'],
 'onglet':['Page d’un même fichier tableur.','Inventaire et Comparatif fournisseurs peuvent être deux onglets.'],
 'formule':['Instruction de calcul dans une cellule, commençant par =.','Pour diviser B2 par C2 : =B2/C2.'],
 'diapositive':['Page d’une présentation projetée.','La troisième diapositive compare vos propositions.'],
 'compte rendu':['Trace écrite de ce qui a été fait, constaté ou décidé.','Il précise aussi ce qui reste à faire.'],
 'comité de direction':['Dans notre projet, réunion pédagogique des cinq services avec les enseignants pour comparer et préparer les choix.','Il ne remplace pas les décisions de l’établissement.'],
 'conseil d’administration':['Instance du lycée qui prend les décisions relevant de ses compétences, notamment sur le projet, l’organisation et le budget.','Nous préparons une présentation claire du Hanout pour cette instance.']
};

window.HANOUT.tools = {
 drive:{title:'Drive · classer et partager',url:'https://drive.google.com/',steps:['Ouvrez le dossier du service avec le compte autorisé.','Cliquez Nouveau → Nouveau dossier pour classer vos travaux.','Nommez les fichiers avant de commencer : projet, service, sujet et date.','Partager → ajoutez seulement les personnes autorisées avec le rôle adapté.','Pour déposer une sauvegarde : Nouveau → Importer un fichier → choisissez le fichier téléchargé.','Vérifiez que le fichier apparaît dans le bon dossier et qu’il peut être ouvert.'],tip:'Un lien public vers l’application ne donne pas accès aux dossiers privés.'},
 docs:{title:'Docs · rédiger un document',url:'https://docs.google.com/',steps:['Dans le bon dossier Drive : Nouveau → Google Docs → Document vierge.','Cliquez sur Sans titre et donnez un nom explicite.','Écrivez un titre, la date, le service et vos prénoms.','Utilisez des sous-titres : objectif, constats, propositions, points à vérifier.','Insertion → Tableau pour organiser tâches ou questions.','Vérifiez l’enregistrement et partagez avec le service et les enseignants.'],tip:'Un compte rendu décrit des faits et des décisions ; une idée reste indiquée comme proposition.'},
 sheets:{title:'Sheets · organiser et calculer',url:'https://sheets.google.com/',steps:['Dans Travaux : Nouveau → Google Sheets. Donnez un titre.','Cliquez A1, saisissez le premier en-tête puis utilisez Tab pour passer à B1.','Une ligne correspond à un produit, un lot ou une offre. Ne fusionnez pas les données différentes.','Une formule commence par =. Exemple : =B2/C2 pour le prix du lot en B2 et la quantité en C2.','Ajoutez un onglet avec le bouton + en bas. Nommez-le.','Refaites un calcul à la main et faites-le vérifier. Si une donnée manque, laissez le calcul en attente.'],tip:'Modèle comparatif : Produit | Format | Fournisseur | Source | Date | Quantité du lot | Prix du lot | Frais | HT/TTC | Coût unitaire | À vérifier.'},
 forms:{title:'Forms · construire un questionnaire',url:'https://forms.google.com/',steps:['Préparez d’abord les questions dans Docs et faites-les relire.','Dans Drive : Nouveau → Plus → Google Forms.','Donnez un titre et une introduction courte. Ajoutez les questions avec +.','Choix multiples = QCU ; Cases à cocher = QCM ; Paragraphe = réponse ouverte longue.','Faites vérifier les paramètres de collecte et de visibilité des réponses.','Testez en aperçu. Demandez l’accord adulte avant de publier ou diffuser.'],tip:'Le questionnaire des clients est différent des questionnaires individuels de compréhension du parcours.'},
 slides:{title:'Slides · préparer le comité',url:'https://slides.google.com/',steps:['Dans Présentations : Nouveau → Google Slides → Présentation vierge.','Nommez le fichier. Choisissez un format 16:9 dans les paramètres de page.','Utilisez une police simple, un fond clair et un texte assez grand pour être lu à distance.','Créez au moins quatre pages : mission / avancées / options / décisions demandées.','Insertion → Image pour un visuel Canva exporté. Gardez les titres et textes modifiables.','Ajoutez date, numéro et logo validé s’il existe. Partagez, puis répétez pendant dix minutes.'],tip:'Repère de départ : titres autour de 32 points, texte autour de 24 points ; vérifiez en projection réelle.'},
 canva:{title:'Canva · créer un visuel',url:'https://www.canva.com/',steps:['Connectez-vous avec le compte autorisé et choisissez une création gratuite adaptée.','Reprenez les choix de couleurs et de police du service Communication.','Ajoutez seulement les éléments utiles au message ; vérifiez leurs conditions d’utilisation.','Partager → Télécharger → PNG pour une image. Les intitulés peuvent varier.','Rangez le fichier dans Sources et visuels et conservez le lien de création.','Dans Slides : Insertion → Image → Importer depuis l’ordinateur.'],tip:'Canva complète Slides ; il n’est pas nécessaire pour chaque page ou chaque service.'},
 mail:{title:'Mail · écrire professionnellement',url:'https://mail.google.com/',steps:['Vérifiez le destinataire avec l’enseignant ; ne devinez pas son adresse.','Écrivez un objet précis : Le Hanout — Demande de rendez-vous.','Présentez la classe et votre service puis le besoin en deux phrases.','Proposez deux créneaux et une durée, sans imposer une disponibilité.','Terminez par un remerciement et les prénoms des auteurs avec leur service.','Relisez et montrez le brouillon à l’enseignant avant envoi.'],tip:'Ne communiquez jamais de mot de passe. Les coordonnées internes restent dans Drive.'},
 agenda:{title:'Agenda · organiser un échange',url:'https://calendar.google.com/',steps:['Demandez aux personnes concernées leurs disponibilités professionnelles.','Proposez deux créneaux compatibles avec le cours et faites confirmer par l’enseignant.','Créez un événement avec titre, durée, lieu et objectif.','Ajoutez le lien du document de travail, accessible aux participants.','Avant d’envoyer l’invitation, vérifiez destinataires et autorisation adulte.','Après la réunion, écrivez les décisions et les prochaines tâches dans Docs.'],tip:'Voir votre propre agenda ne permet pas de connaître automatiquement celui d’un autre service.'},
 plan:{title:'Espace · croquis et simulation',url:'https://slides.google.com/',steps:['Prenez des mesures réelles avec le matériel autorisé.','Dessinez l’espace et notez toutes les dimensions avec leur unité.','Dans Slides, utilisez des rectangles pour les meubles et des flèches pour la circulation.','Placez les produits, les prix, la caisse et le rangement.','Facultatif : utilisez une IA autorisée avec une photo validée. Comparez toujours le résultat aux mesures.','Notez sur le visuel : illustration ; dimensions et faisabilité à vérifier.'],tip:'Prompt : « Nous préparons Le Hanout, point de vente pédagogique. À partir de cette photo autorisée et de ces mesures [compléter], propose un aménagement simple avec [mobilier disponible]. Conserve les ouvertures et une circulation dégagée. Liste les dimensions ou contraintes inconnues. Ne prétends pas que le plan est à l’échelle ou validé. »'},
 ca:{title:'Comprendre le conseil d’administration',url:'https://www.service-public.gouv.fr/particuliers/vosdroits/F1393',steps:['Le CA est une instance qui délibère sur les affaires du lycée relevant de ses compétences.','Il intervient notamment sur le projet d’établissement, l’organisation et le budget.','Il réunit la direction et des représentants des personnels, des parents, des élèves, des collectivités ainsi que des personnalités qualifiées.','Notre comité de direction pédagogique rassemble les services pour préparer une proposition commune. Il ne remplace pas le CA.','Devant le CA, nous expliquons : utilité pédagogique, public, fonctionnement proposé, moyens et points à autoriser.','Les enseignants précisent avec la direction la date, les modalités de présentation et les décisions à demander.'],tip:'Pourquoi présenter ? Pour montrer un projet préparé, justifier les moyens et permettre un examen éclairé par l’établissement.'}
};
window.HANOUT.sources = [
 ['Conseil d’administration — Service Public','https://www.service-public.gouv.fr/particuliers/vosdroits/F1393'],
 ['La Trousse à projets — Éduscol','https://eduscol.education.gouv.fr/6465/financez-vos-projets-avec-la-trousse-projets'],
 ['Charte et éligibilité — La Trousse à projets','https://trousseaprojets.fr/website/pages/8-la-charte'],
 ['METRO — conditions pour devenir client','https://www.metro.fr/devenir-client'],
 ['Carrefour — offres à relever','https://www.carrefour.fr/'],
 ['E.Leclerc — offres à relever','https://www.e.leclerc/'],
 ['IKEA — mobilier à comparer','https://www.ikea.com/fr/fr/'],
 ['Brico Dépôt — mobilier et matériel à comparer','https://www.bricodepot.fr/'],
 ['Darty — équipement à comparer si utile','https://www.darty.com/'],
 ['Aide officielle Google Workspace','https://support.google.com/a/users/?hl=fr']
];
