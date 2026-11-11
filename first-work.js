/* Le Hanout — premier document, étape 4. */
window.HANOUT_FIRST_WORK = {
  "version": "1.5.0",
  "questions": [
    [
      "Vous devez préparer un tableau de quantités et de calculs. Quel outil est le plus adapté ?",
      [
        "Google Docs, pour rédiger le tableau comme un texte.",
        "Google Slides, pour répartir les lignes sur des diapositives.",
        "Google Sheets, pour organiser les données en cellules et utiliser des formules.",
        "Google Forms, pour disposer une question dans chaque colonne."
      ],
      2,
      "Sheets est le tableur. Docs sert surtout aux textes ; Slides aux présentations ; Forms aux questionnaires."
    ],
    [
      "Quel nom aide le mieux les collègues à retrouver une production du service ?",
      [
        "Le Hanout — Nom du service — Sujet — Date",
        "Le Hanout — Prénom du responsable — Version récente",
        "Travail du groupe — Dernière version — À garder",
        "Le Hanout — Document partagé — Nouvelle copie"
      ],
      0,
      "Le service, le sujet et la date rendent le fichier identifiable. Les auteurs sont aussi indiqués à l’intérieur."
    ],
    [
      "Pourquoi distinguer « Ce que nous savons », « Ce que nous proposons » et « À vérifier » ?",
      [
        "Pour répartir la rédaction entre les membres du service.",
        "Pour classer les informations selon leur date d’écriture.",
        "Pour transformer les idées retenues en consignes à appliquer.",
        "Pour séparer les faits établis, les idées du service et les informations encore incertaines."
      ],
      3,
      "Un fait vérifié n’est pas une proposition ; une information incertaine reste signalée jusqu’à vérification."
    ],
    [
      "Où ranger le premier document et comment limiter son accès ?",
      [
        "Dans Mon Drive personnel ; le lien suffit à donner automatiquement accès.",
        "Dans Travaux, dans le dossier partagé du service, avec accès général Limité et les personnes autorisées.",
        "Dans Progression Équipe, avec tous les fichiers JSON de chaque membre.",
        "Dans Présentations, en donnant un accès public pour faciliter la lecture."
      ],
      1,
      "Travaux contient la production du service. Les droits doivent être vérifiés ; copier le lien ne crée pas une autorisation."
    ],
    [
      "Que faut-il faire pour présenter cette production aux enseignants ?",
      [
        "Cocher l’étape et laisser le document sur son ordinateur.",
        "Envoyer seulement le questionnaire Forms pour faire valider le document.",
        "Coller le lien précis du document, vérifier les accès, indiquer sa contribution et demander une vérification.",
        "Coller le lien du dossier général sans préciser le fichier à lire."
      ],
      2,
      "Le lien précis permet de lire la production. Le score de compréhension et l’avancement déclaré ne remplacent pas la vérification des enseignants."
    ]
  ],
  "contributions": [
    [
      "mission",
      "J’ai reformulé la mission de notre service."
    ],
    [
      "file",
      "J’ai créé ou retrouvé le document de travail."
    ],
    [
      "name",
      "J’ai nommé le fichier et indiqué les auteurs et la date."
    ],
    [
      "content",
      "J’ai ajouté un fait, une proposition ou un point à vérifier."
    ],
    [
      "source",
      "J’ai vérifié une information ou indiqué sa source."
    ],
    [
      "folder",
      "J’ai rangé le fichier dans Travaux."
    ],
    [
      "sharing",
      "J’ai vérifié le partage et collé le lien du document."
    ],
    [
      "review",
      "J’ai présenté le travail aux enseignants pour vérification."
    ]
  ],
  "services": {
    "achats": {
      "tool": "sheets",
      "topic": "Produits — Premières pistes",
      "goal": "Préparer un premier tableau de produits à étudier, avec les quantités envisagées et les informations à vérifier.",
      "headers": [
        "Produit",
        "Quantité envisagée",
        "Ce que nous savons",
        "Ce que nous proposons",
        "Ce qui reste à vérifier",
        "Source"
      ],
      "rows": [
        [
          "À compléter",
          "",
          "",
          "",
          "",
          ""
        ]
      ],
      "example": [
        "Fait : un produit a été compté ou observé ; notez le constat et sa source.",
        "Proposition : une idée de produit ou de quantité à discuter.",
        "À vérifier : le stock réel, le besoin des clients ou la disponibilité."
      ]
    },
    "gestion": {
      "tool": "sheets",
      "topic": "Budget — Premières pistes",
      "goal": "Préparer les postes du budget de référence de 1 500 €, sans inventer les montants ni supposer que le solde disponible est confirmé.",
      "headers": [
        "Poste",
        "Prévision en €",
        "Ce que nous savons",
        "Ce que nous proposons",
        "Ce qui reste à vérifier",
        "Source"
      ],
      "rows": [
        [
          "Stock de produits",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "Mobilier",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "Communication",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "Réserve",
          "",
          "",
          "",
          "",
          ""
        ]
      ],
      "example": [
        "Fait : le montant de référence communiqué par les enseignants est de 1 500 €.",
        "Proposition : une répartition possible entre les postes, à argumenter.",
        "À vérifier : le solde réellement disponible, les devis et les conditions d’utilisation."
      ]
    },
    "espace": {
      "tool": "docs",
      "topic": "Espace — Premières observations",
      "goal": "Décrire l’espace envisagé et les premières idées d’aménagement. Les mesures et le matériel non contrôlés restent à vérifier.",
      "example": [
        "Fait : une observation réelle de l’espace, datée et décrite.",
        "Proposition : une idée d’emplacement pour les produits ou la caisse.",
        "À vérifier : les mesures, la circulation et le matériel réutilisable."
      ]
    },
    "vente": {
      "tool": "docs",
      "topic": "Questionnaire client — Brouillon",
      "goal": "Commencer le brouillon du questionnaire client dans Docs : les informations recherchées, les premières questions et les points à discuter avec Communication.",
      "example": [
        "Fait : un besoin exprimé lors d’une rencontre, avec sa date.",
        "Proposition : une question neutre à poser aux futurs clients.",
        "À vérifier : la compréhension des questions et les modalités de l’enquête."
      ]
    },
    "communication": {
      "tool": "docs",
      "topic": "Identité — Premières propositions",
      "goal": "Rassembler les propositions d’identité et de messages déjà produites, expliquer les choix et signaler ce qui reste à discuter au comité.",
      "example": [
        "Fait : une production existante, par exemple un croquis de logo.",
        "Proposition : un choix de couleur, de lettrage ou de message à argumenter.",
        "À vérifier : la lisibilité du support et les choix à discuter au comité."
      ]
    }
  }
};
// The shared link can be opened without choosing a pupil or writing to the carnet.
const firstWorkGuest = {service: 'achats', steps: {}};

function firstWorkGuestControls(serviceId) {
  const buttons = D.services.map(({id, name}) =>
    `<button class="soft smallbtn" data-workservice="${id}" aria-pressed="${id===serviceId}">${esc(name)}</button>`
  ).join('');
  return `<section class="journey-nav"><p>Consultation libre. Choisissez un service pour voir son exemple.</p>
    <div class="journey-stages" role="group" aria-label="Exemples par service">${buttons}</div></section>`;
}

function journeyNav(p,phase,number){const tasks=allTasks(p.service).filter(t=>t.phase===phase);return `<nav class="journey-nav" aria-label="Navigation libre dans le parcours"><div class="journey-sessions">${D.phases.map((title,i)=>`<button class="soft smallbtn ${phase===i+1?'selected':''}" data-phase="${i+1}" aria-current="${phase===i+1?'true':'false'}">${i+1}. ${esc(title)}</button>`).join('')}</div><div class="journey-stages">${tasks.map((t,i)=>`<button class="soft smallbtn ${i+1===number?'selected':''}" data-phase="${phase}" data-step="${i+1}" aria-label="Ouvrir l’étape ${i+1} : ${esc(t.title)}" aria-current="${i+1===number?'step':'false'}">${i+1}. ${esc(phase===1?['Adresse et accès','Dossiers','Organisation','Premier document'][i]:t.title)}${p.steps[t.id]?.done?' ✓':''}</button>`).join('')}</div><small>Navigation libre : consulter une action ne la marque pas comme réalisée.</small></nav>`;}
function firstWorkConfig(p){return window.HANOUT_FIRST_WORK.services[p.service];}
function cleanFirstWork(raw){return {card:Number.isInteger(raw?.card)?Math.max(0,Math.min(6,raw.card)):0,checks:Array.isArray(raw?.checks)?[...new Set(raw.checks.filter(x=>['mission','created','content','facts','filed','shared','review'].includes(x)))]:[]};}
function firstWorkState(p){if(!p.firstWork)p.firstWork=cleanFirstWork(null);return p.firstWork;}
function canonicalWorkURL(raw,tool){try{const u=new URL(String(raw||'').trim());if(u.protocol!=='https:'||u.hostname!=='docs.google.com')return '';const kind=tool==='sheets'?'spreadsheets':'document',re=new RegExp('^/'+kind+'/(?:u/\\d+/)?d/([\\w-]+)(?:/|$)'),m=u.pathname.match(re);return m?'https://docs.google.com/'+kind+'/d/'+m[1]+'/edit':'';}catch{return '';}}
function cleanTaskContributions(t,raw){if(t.phase===1&&/-4$/.test(t.id))return Array.isArray(raw)?[...new Set(raw.filter(k=>window.HANOUT_FIRST_WORK.contributions.some(([id])=>id===k)))]:[];return cleanContributions(t,raw);}
function firstWorkContributionText(p){return window.HANOUT_FIRST_WORK.contributions.filter(([id])=>(p.steps[p.service+'-4']?.contributions||[]).includes(id)).map(([,text])=>text).join('\n');}
function firstWorkDate(){return new Date().toLocaleDateString('fr-CA',{timeZone:'Europe/Paris'});}
function firstWorkTitle(p){return `Le Hanout — ${service(p.service).name} — ${firstWorkConfig(p).topic} — ${firstWorkDate()}`;}
function firstWorkTemplate(p){const s=service(p.service),c=firstWorkConfig(p),authors=p===firstWorkGuest?'[Prénoms des auteurs]':s.people.join(', ');if(c.tool==='sheets')return [['Service',s.name],['Auteurs',authors],['Date',firstWorkDate()],[],c.headers,...c.rows].map(row=>row.join('\t')).join('\n');return `LE HANOUT — ${s.name}\nSujet : ${c.topic}\nAuteurs : ${authors}\nDate : ${firstWorkDate()}\n\nCE QUE NOUS SAVONS\n[Un fait réellement observé ou vérifié, avec sa source : à compléter.]\n\nCE QUE NOUS PROPOSONS\n[Une idée du service et sa raison : à compléter.]\n\nCE QUI RESTE À VÉRIFIER\n[Une question, une information manquante ou une personne à consulter : à compléter.]`;}
function firstWorkCheck(p,key,text){return `<label class="checklabel"><input type="checkbox" data-workcheck="${key}" ${firstWorkState(p).checks.includes(key)?'checked':''} ${viewOnly||p===firstWorkGuest?'disabled':''}>${text}</label>`;}
function firstWorkLinkField(p,label){const c=firstWorkConfig(p),v=p.steps[p.service+'-4']||{};return `<div class="fields inline-production"><label for="workLink">${label}</label><input id="workLink" type="url" value="${esc(v.link||'')}" placeholder="${c.tool==='sheets'?'https://docs.google.com/spreadsheets/d/…/edit':'https://docs.google.com/document/d/…/edit'}" ${viewOnly||p===firstWorkGuest?'readonly':''}><p id="workLinkFeedback" class="helptext" role="status"></p></div>`;}
function sheetCellGuide(){return `<figure class="annotated-docs"><div class="annotated-image"><img src="${googleAsset('sheets-cellule')}" alt="Capture Google Sheets vide : les colonnes portent des lettres et les lignes des nombres ; A1 est la première cellule."><svg viewBox="0 0 850 280" aria-hidden="true"><defs><marker id="cellArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="#a7441e"/></marker></defs><g fill="none" stroke="#c65a20" stroke-width="3"><rect x="43" y="57" width="101" height="22"/><path d="M330 140L144 70" marker-end="url(#cellArrow)"/></g><text x="335" y="150" fill="#19364a" font-size="20" font-family="Arial">Cliquez dans A1, puis collez</text></svg></div><figcaption>A = première colonne ; 1 = première ligne. La cellule A1 est encadrée. Capture réelle d’une feuille vide.</figcaption></figure>`;}
function firstWorkJourney(p=current()){const guest=p===firstWorkGuest,s=service(p.service),c=firstWorkConfig(p),t=allTasks(p.service)[3],st=firstWorkState(p),card=st.card,v=p.steps[t.id]||{},url=canonicalWorkURL(v.link,c.tool),toolName=c.tool==='sheets'?'Google Sheets':'Google Docs',open=url||'https://docs.google.com/'+(c.tool==='sheets'?'spreadsheets':'document')+'/create';let body='';
if(card===0)body=`<h2>Comprendre notre premier travail</h2><p class="why">${esc(c.goal)}</p><p>À tour de rôle, chacun explique avec ses mots ce que le service veut préparer. Ouvrez votre cahier des charges si vous avez besoin d’aide.</p><div class="actions"><a class="soft" href="#service/${s.id}">Voir notre cahier des charges</a></div><div class="work-tool-choice">${icon(c.tool)}<div><b>${toolName}</b><p>${c.tool==='sheets'?'Un tableur organise les données en cellules. Il permet ensuite de faire des calculs.':'Un traitement de texte permet de rédiger et de structurer les informations.'}</p></div></div>${firstWorkCheck(p,'mission','J’ai expliqué la mission et je sais quel premier document nous préparons.')}`;
if(card===1)body=`<h2>Créer ou retrouver notre fichier</h2><p>Un seul fichier commun pour le service. Si un document utile existe déjà, ouvrez-le et complétez-le.</p><div class="actions">${link(open,url?'Ouvrir notre fichier '+toolName:'Créer notre fichier '+toolName,'primary')}</div><p>En haut à gauche, cliquez sur <b>${c.tool==='sheets'?'Feuille de calcul sans titre':'Document sans titre'}</b>. Donnez ce nom au fichier :</p><div class="copy-line"><b>${esc(firstWorkTitle(p))}</b><button class="soft smallbtn" data-workcopy="title">Copier le nom du fichier</button></div><p>Dans le nouvel onglet, cliquez dans la barre d’adresse. Faites <b>Ctrl+C</b> (Mac : Cmd+C), puis revenez ici et collez :</p>${firstWorkLinkField(p,'Lien de notre premier document — collez ici')}${firstWorkCheck(p,'created','Notre fichier existe et son nom indique le service, le sujet et la date.')}<details><summary>Où cliquer pour changer le titre ?</summary>${annotatedDocs('docs-nommer',p)}<p class="helptext">Exemple dans Google Docs : le titre se trouve aussi en haut à gauche dans Sheets. Copiez le nom demandé ci-dessus, adapté à votre service.</p></details>`;
if(card===2)body=`<h2>${c.tool==='sheets'?'Commencer notre tableau':'Structurer notre texte'}</h2><p>${firstWorkOpenLink(p,'Ouvrir notre fichier '+toolName)}</p><p>Indiquez <b>le service, les prénoms des auteurs et la date</b> dans le fichier. Vous pouvez partir de cette trame, puis la compléter avec votre travail réel.</p>${c.tool==='sheets'?`${sheetCellGuide()}<ol class="steps compact"><li>Cliquez sur <b>Copier la trame du tableau</b> ci-dessous.</li><li>Dans Sheets, cliquez une fois dans <b>A1</b>, puis faites <b>Ctrl+V</b> (Mac : Cmd+V). Les informations se répartissent dans les cellules.</li><li>Les trois premières lignes identifient le travail. Les titres du tableau sont en <b>ligne 5</b>. Cliquez dans une cellule à partir de la ligne 6 pour écrire.</li></ol><div class="tablewrap"><table class="org-example"><caption>Les titres à retrouver en ligne 5</caption><tr>${c.headers.map(h=>`<th>${esc(h)}</th>`).join('')}</tr>${c.rows.map(row=>`<tr>${row.map(x=>`<td>${esc(x)||'À compléter'}</td>`).join('')}</tr>`).join('')}</table></div>`:`<ol class="steps compact"><li>Cliquez sur <b>Copier la trame du texte</b> ci-dessous.</li><li>Dans Docs, cliquez dans la page blanche, puis faites <b>Ctrl+V</b> (Mac : Cmd+V).</li><li>Remplacez les éléments entre crochets par vos informations. Gardez les trois rubriques bien visibles.</li></ol><pre class="org-decision">${esc(firstWorkTemplate(p))}</pre>`}<button class="soft" data-workcopy="template">${c.tool==='sheets'?'Copier la trame du tableau':'Copier la trame du texte'}</button><p class="helptext">Si le fichier contient déjà votre travail, ajoutez seulement les éléments manquants au lieu de remplacer son contenu.</p>${firstWorkCheck(p,'content','Les auteurs, la date et la structure de notre travail sont indiqués.')}`;
if(card===3)body=`<h2>Séparer les faits, les idées et les questions</h2><p>Avant de présenter un document, le service doit montrer ce qui est fiable et ce qui demande encore du travail.</p><div class="fact-cards">${c.example.map((text,i)=>`<article><b>${['Ce que nous savons','Ce que nous proposons','Ce qui reste à vérifier'][i]}</b><p>${esc(text)}</p></article>`).join('')}</div><p>${firstWorkOpenLink(p,'Ouvrir notre fichier pour le compléter')}</p><p>Ajoutez au moins <b>une information réelle</b>, <b>une proposition</b> et <b>un point à vérifier</b>. Si aucun fait n’a encore été vérifié, écrivez-le clairement. Indiquez la source et la date de vos informations.</p><p class="helptext">Une quantité non comptée ou un montant inconnu reste vide ou porte la mention « à vérifier ». Une proposition n’est pas un fait confirmé.</p>${firstWorkCheck(p,'facts','Nous avons distingué les faits, les propositions et les informations encore à vérifier.')}`;
if(card===4)body=`<h2>Ranger le fichier dans Travaux</h2><p>${firstWorkOpenLink(p,'Ouvrir notre fichier')}</p><ol class="steps compact"><li>Dans ${toolName}, cliquez sur <b>Fichier → Déplacer</b>.</li><li>Dans la fenêtre, ouvrez <b>Tous les emplacements</b> et retrouvez le dossier partagé du service, dans les suggestions, la recherche ou <b>Partagés avec moi</b>.</li><li>Ouvrez <b>Travaux</b>, puis cliquez sur <b>Déplacer</b>. Si le dossier n’apparaît pas, sollicitez un enseignant.</li></ol><div class="folder-path">📁 Le Hanout → 📁 ${esc(s.name)} → 📁 Travaux → 📄 Notre premier document</div>${annotatedDocs('docs-deplacer',p)}<p class="helptext">Exemple de menu dans Docs ; la commande Déplacer se trouve aussi dans le menu Fichier de Sheets.</p><p>${link('https://drive.google.com/drive/folders/'+s.folder,'Ouvrir le dossier du service pour vérifier','soft')}</p>${firstWorkCheck(p,'filed','Notre fichier est visible dans Travaux, dans le Drive partagé du service.')}`;
if(card===5)body=`<h2>Partager notre production</h2><p>${firstWorkOpenLink(p,'Ouvrir notre fichier')}</p><ol class="steps compact"><li>Cliquez sur <b>Partager</b>, en haut à droite.</li><li>Vérifiez les personnes autorisées : membres du service et enseignants. Conservez <b>Accès général : Limité</b>. Si un accès manque, sollicitez l’enseignant.</li><li>Cliquez sur <b>Copier le lien</b>, puis revenez ici :</li></ol>${firstWorkLinkField(p,'Collez ici le lien de partage de votre production')}${annotatedDocs('docs-partage',p)}<p class="helptext">Le lien est ramené à l’adresse courte du même fichier, sans paramètres ajoutés. Cela ne change pas les autorisations. Testez l’ouverture du document avec un autre membre autorisé.</p>${firstWorkCheck(p,'shared','Le lien mène au bon fichier et les accès ont été vérifiés.')}`;
if(card===6)body=`<h2>Montrer ma contribution</h2>${firstWorkLinkField(p,'Lien du document à montrer aux enseignants')}<p>Cochez seulement ce que <b>vous avez personnellement fait</b>.</p><div class="org-contributions">${window.HANOUT_FIRST_WORK.contributions.map(([id,text])=>`<label class="checklabel"><input type="checkbox" data-workcontribution="${id}" ${(v.contributions||[]).includes(id)?'checked':''} ${viewOnly||p===firstWorkGuest?'disabled':''}>${esc(text)}</label>`).join('')}</div>${v.note?`<details><summary>Ma note conservée de l’ancienne version</summary><p>${esc(v.note)}</p></details>`:''}<div class="gate"><b>Demandez une vérification.</b> Montrez le fichier lié ci-dessus à Mme Miri ou à A. Zeboudj. Faites vérifier son nom, ses auteurs, sa structure, ses informations et son partage. Notez leur retour dans le document.</div>${firstWorkCheck(p,'review','J’ai sollicité les enseignants pour vérifier notre première production.')}${practiceUI(t,guest)}<label class="checklabel"><input id="taskDone" data-task="${t.id}" type="checkbox" ${v.done?'checked':''} ${viewOnly||p===firstWorkGuest?'disabled':''}>J’ai réalisé et vérifié cette étape. Cette coche déclare mon avancement.</label>${guest?'<p><button class="soft" data-start>Choisir mon prénom pour enregistrer mon travail</button></p>':saveFooter(p,t)}`;
return `<div class="startup-shell"><div class="startup-heading"><div><span class="eyebrow">NOUS ORGANISER · ÉTAPE 4 SUR 4</span><h1>Notre premier document</h1><p>${guest?esc(s.name):esc(p.name)+' · '+esc(s.name)}</p></div>${guest?'':`<div class="startup-progress"><b>${progress(p)} %</b><progress max="100" value="${progress(p)}" aria-label="Avancement déclaré"></progress><small>Avancement déclaré</small></div>`}</div>${guest?firstWorkGuestControls(s.id):''}${viewOnly?'<p class="warning">Consultation en lecture seule. <button class="soft smallbtn" id="leaveView">Revenir à mon profil</button></p>':''}${journeyNav(p,1,4)}<nav class="startup-dots" aria-label="Actions du premier document">${Array.from({length:7},(_,i)=>`<button class="${i===card?'active':''}" data-workcard="${i}" aria-label="Action ${i+1} sur 7" aria-current="${i===card?'step':'false'}">${i+1}</button>`).join('')}</nav><article class="taskcard startup-card"><span class="pill">UNE ACTION À LA FOIS · ${card+1}/7</span>${body}<div class="taskfoot">${card?`<button class="soft" data-workcard="${card-1}">← Précédent</button>`:'<a class="soft" href="#parcours/1/3">← Étape précédente</a>'}${card<6?`<button class="primary" data-workcard="${card+1}">Suivant →</button>`:'<button class="primary" data-next="4" data-phase="1">Séance suivante →</button>'}</div></article><p class="helptext">Vous pouvez consulter toutes les actions librement. Le pourcentage change seulement quand vous déclarez une étape réalisée.</p></div>`;
}
function bindFirstWork(){if(!document.querySelector('[data-workcard]'))return;const p=current()||firstWorkGuest,guest=p===firstWorkGuest;
  document.querySelectorAll('[data-workservice]').forEach(button => {
    button.onclick = () => { p.service = button.dataset.workservice; rerenderHere(); };
  });
const st=firstWorkState(p),id=p.service+'-4',c=firstWorkConfig(p);const update=()=>{if($('#workLinkFeedback'))$('#workLinkFeedback').textContent=canonicalWorkURL($('#workLink').value,c.tool)?'✓ Adresse du fichier enregistrée. Vérifiez aussi les autorisations.':'Collez le lien du fichier '+(c.tool==='sheets'?'Google Sheets':'Google Docs')+', et non celui du dossier.';};if($('#workLink'))$('#workLink').oninput=e=>{if(viewOnly||guest)return;const raw=e.target.value.slice(0,2000).trim(),url=canonicalWorkURL(raw,c.tool);if(url)e.target.value=url;saveTask(id,'link',url||raw);update();};document.querySelectorAll('[data-workcard]').forEach(b=>b.onclick=()=>{st.card=Number(b.dataset.workcard);if(!viewOnly&&!guest)stamp();render();});document.querySelectorAll('[data-workcheck]').forEach(b=>b.onchange=()=>{if(viewOnly||guest)return;st.checks=st.checks.filter(k=>k!==b.dataset.workcheck);if(b.checked)st.checks.push(b.dataset.workcheck);saveTask(id,'done',false);rerenderHere();});document.querySelectorAll('[data-workcontribution]').forEach(b=>b.onchange=()=>{if(viewOnly||guest)return;const ids=(p.steps[id]?.contributions||[]).filter(k=>k!==b.dataset.workcontribution);if(b.checked)ids.push(b.dataset.workcontribution);saveTask(id,'contributions',ids);rerenderHere();});if(!guest&&$('#taskFormDeclared'))$('#taskFormDeclared').onchange=e=>{saveTask(id,'formSubmitted',e.target.checked);saveTask(id,'formSentAt',new Date().toISOString());rerenderHere();};document.querySelectorAll('[data-workcopy]').forEach(b=>b.onclick=async()=>{const text=b.dataset.workcopy==='title'?firstWorkTitle(p):firstWorkTemplate(p);try{await navigator.clipboard.writeText(text);toast('Trame copiée. Collez-la dans votre document.');}catch{dialog('Copier la trame',`<p>Sélectionnez ce texte puis Ctrl+C (Mac : Cmd+C).</p><textarea readonly id="workCopyText">${esc(text)}</textarea>`);$('#workCopyText').select();}});update();}

function rerenderHere(){const y=window.scrollY;render();window.scrollTo({top:y,behavior:'instant'});}

function firstWorkOpenLink(p,label){const url=canonicalWorkURL(p.steps[p.service+'-4']?.link,firstWorkConfig(p).tool);return url?link(url,label,'primary'):'<button class="primary" data-workcard="1">Créer ou retrouver notre fichier · action 2</button>';}
