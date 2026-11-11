/* Le Hanout — Organisation, étape 3, version 1.3.0. */
window.HANOUT_ORGANIZATION = {
  "version": "1.3.0",
  "questions": [
    [
      "Après le vote, quelle trace permet au service de savoir qui fait quoi ?",
      [
        "Le prénom du responsable et le résultat du vote, sans date de bilan.",
        "La décision, la durée du mandat, une date de bilan et les tâches attribuées à chacun.",
        "Une liste de tâches communes, sans préciser qui doit les réaliser.",
        "Un calendrier de réunions, sans préciser les responsabilités."
      ],
      1,
      "Le document garde la décision et la répartition : chacun connaît sa tâche et le prochain bilan."
    ],
    [
      "Vous voulez présenter les tâches et leurs responsables dans votre document. Que choisissez-vous ?",
      [
        "Google Sheets, puis une capture du tableau collée dans le texte.",
        "Google Forms, puis une question pour chaque tâche à réaliser.",
        "Google Slides, puis une diapositive pour chaque membre du service.",
        "Google Docs : Insertion → Tableau, puis le nombre de colonnes et de lignes."
      ],
      3,
      "Ici, un tableau dans Docs suffit à organiser du texte. Sheets sera utile pour les calculs."
    ],
    [
      "Un membre n’arrive pas à ouvrir le document. Quel contrôle faut-il faire ?",
      [
        "Vérifier son compte Google et ses droits, tout en gardant l’accès général Limité.",
        "Passer le fichier à Toute personne disposant du lien pour régler le problème.",
        "Envoyer seulement une copie PDF, sans vérifier l’accès au document commun.",
        "Changer le titre du document pour qu’il apparaisse dans sa recherche."
      ],
      0,
      "Limité protège le dossier. Il faut vérifier la bonne adresse et l’autorisation avec l’enseignant si nécessaire."
    ],
    [
      "Une information nécessaire à la répartition du travail n’est pas comprise. Que faire ?",
      [
        "La supprimer du document pour ne conserver que les informations connues.",
        "La reprendre du travail d’un autre service sans vérifier qu’elle convient.",
        "Écrire « à vérifier », demander une explication puis mettre le document à jour.",
        "Laisser la case vide et attendre la prochaine présentation pour en parler."
      ],
      2,
      "Signaler ce qui reste à vérifier permet de demander de l’aide et de corriger la trace commune."
    ],
    [
      "Comment montrer aux enseignants que cette étape a été réalisée ?",
      [
        "Coller le lien du dossier général et cocher l’avancement de son équipe.",
        "Coller le lien du document dans la case prévue, vérifier les accès et demander sa vérification aux enseignants.",
        "Envoyer seulement le questionnaire Forms, dont le score valide aussi la production.",
        "Décrire oralement la décision et conserver le document sur son compte personnel."
      ],
      1,
      "Le lien mène à la production précise. La vérification des enseignants est distincte de l’avancement déclaré et du score Forms."
    ]
  ],
  "contributions": [
    [
      "vote",
      "J’ai présenté mon engagement ou participé au vote."
    ],
    [
      "roles",
      "J’ai proposé ou vérifié la répartition des tâches."
    ],
    [
      "document",
      "J’ai créé, nommé ou rangé le document Google Docs."
    ],
    [
      "decision",
      "J’ai écrit ou relu la décision et la date du bilan."
    ],
    [
      "table",
      "J’ai inséré ou complété le tableau des tâches."
    ],
    [
      "sharing",
      "J’ai vérifié les accès et collé le lien de notre document."
    ],
    [
      "review",
      "J’ai demandé aux enseignants de vérifier notre travail."
    ]
  ]
};
function canonicalDocURL(raw){try{const u=new URL(String(raw||'').trim());if(u.protocol!=='https:'||u.hostname!=='docs.google.com')return '';const m=u.pathname.match(/^\/document\/(?:u\/\d+\/)?d\/([\w-]+)(?:\/|$)/);return m?'https://docs.google.com/document/d/'+m[1]+'/edit':'';}catch{return '';}}
function cleanOrganization(raw,sid){const s=service(sid);return {card:Number.isInteger(raw?.card)?Math.max(0,Math.min(6,raw.card)):0,leader:s?.people.includes(raw?.leader)?raw.leader:'',tenure:['tournante','plusieurs'].includes(raw?.tenure)?raw.tenure:'',reviewDate:typeof raw?.reviewDate==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(raw.reviewDate)&&Number.isFinite(Date.parse(raw.reviewDate))?raw.reviewDate:'',checks:Array.isArray(raw?.checks)?[...new Set(raw.checks.filter(x=>['vote','named','filed','decision','table','limited','review'].includes(x)))]:[]};}
function cleanContributions(t,raw){return /-3$/.test(t.id)&&t.phase===1&&Array.isArray(raw)?[...new Set(raw.filter(x=>window.HANOUT_ORGANIZATION.contributions.some(([key])=>key===x)))]:[];}
function organizationState(p){if(!p.organization)p.organization=cleanOrganization(null,p.service);return p.organization;}
function contributionText(p){const ids=p.steps[p.service+'-3']?.contributions||[];return window.HANOUT_ORGANIZATION.contributions.filter(([key])=>ids.includes(key)).map(([,text])=>text).join('\n');}
function organizationDecision(p){const o=organizationState(p),s=service(p.service);return `LE HANOUT — ${s.name}\nDate de la réunion : ${new Date().toLocaleDateString('fr-FR',{timeZone:'Europe/Paris'})}\nParticipants : ${s.people.join(', ')}\n\nAprès échange et vote, notre service choisit ${o.leader||'[prénom à compléter]'} comme responsable.\nLa responsabilité est ${o.tenure==='tournante'?'tournante':o.tenure==='plusieurs'?'maintenue sur plusieurs séances':'[durée à préciser]'}.\nProchain bilan : ${o.reviewDate||'[date à fixer]'}.\nCette organisation sera présentée aux enseignants pour accord.\n\nLe responsable coordonne, suit les livrables, alerte et rend des comptes. Chaque membre réalise sa contribution.\nRépartition du travail : voir le tableau ci-dessous.`;}
function organizationCheck(p,key,label){return `<label class="checklabel"><input type="checkbox" data-orgcheck="${key}" ${organizationState(p).checks.includes(key)?'checked':''} ${journeyReadOnly()?'disabled':''}>${label}</label>`;}
function organizationLinkField(p,label){const v=p.steps[p.service+'-3']||{};return `<div class="fields inline-production"><label for="orgLink">${label}</label><input type="url" id="orgLink" data-task="${p.service}-3" value="${esc(v.link||'')}" placeholder="https://docs.google.com/document/d/…/edit" ${journeyReadOnly()?'readonly':''}><p id="orgLinkFeedback" class="helptext" role="status"></p></div>`;}
function annotatedDocs(name,p){let dimensions,markup,caption,alt;const rows=service(p.service).people.length+1;
if(name==='docs-tableau'){dimensions='0 0 574 250';markup=`<rect x="6" y="1" width="76" height="24"/><rect x="8" y="62" width="319" height="32"/><rect x="333" y="123" width="72" height="${rows*18}"/><path d="M520 215 L402 ${125+(rows-1)*18}" marker-end="url(#org-arrow)"/>`;caption=`1. Insertion → 2. Tableau → 3. Sélectionnez 4 colonnes × ${rows} lignes. Le cadre orange montre la zone à sélectionner.`;alt=`Capture Google Docs annotée : menu Insertion, sous-menu Tableau et grille de 4 colonnes sur ${rows} lignes.`;}
else if(name==='docs-nommer'){dimensions='0 0 550 96';markup='<rect x="5" y="1" width="426" height="32"/><path d="M480 75 L330 25" marker-end="url(#org-arrow)"/>';caption='Cliquez sur le nom du document, en haut à gauche. Écrivez le titre demandé, puis appuyez sur Entrée.';alt='Capture Google Docs : le champ du titre est encadré, une flèche indique où cliquer.';}
else if(name==='docs-deplacer'){dimensions='0 0 324 370';markup='<rect x="4" y="1" width="62" height="23"/><rect x="6" y="322" width="307" height="31"/><path d="M285 285 L135 334" marker-end="url(#org-arrow)"/>';caption='Dans Google Docs : Fichier → Déplacer. Choisissez ensuite le dossier Organisation de votre service.';alt='Capture du menu Fichier de Google Docs : la commande Déplacer est encadrée.';}
else{dimensions='0 0 490 171';markup='<rect x="5" y="1" width="474" height="83"/><rect x="6" y="111" width="164" height="48"/><path d="M300 132 L165 136" marker-end="url(#org-arrow)"/>';caption='Gardez Accès général : Limité, puis cliquez sur Copier le lien en bas à gauche.';alt='Capture Google Docs : accès général Limité et bouton Copier le lien encadrés.';}
return `<figure class="annotated-docs"><div class="annotated-image ${name==='docs-deplacer'?'narrow':''}">${name==='docs-tableau'?`<div class="org-table-crop"><img src="${googleAsset(name)}" alt="${esc(alt)}"></div>`:`<img src="${googleAsset(name)}" alt="${esc(alt)}">`}<svg viewBox="${dimensions}" aria-hidden="true"><defs><marker id="org-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#a7441e" stroke="none"/></marker></defs><g fill="none" stroke="#c65a20" stroke-width="3">${markup}</g></svg></div><figcaption>${esc(caption)} <small>Capture réelle ; les menus peuvent varier.</small></figcaption></figure>`;}
function organizationReady(p,card){const o=organizationState(p),v=p.steps[p.service+'-3']||{},has=k=>o.checks.includes(k);return !![()=>!!o.leader&&!!o.tenure&&!!o.reviewDate&&has('vote'),()=>!!canonicalDocURL(v.link)&&has('named'),()=>has('filed'),()=>has('decision'),()=>has('table'),()=>!!canonicalDocURL(v.link)&&has('limited'),()=>!!v.contributions?.length&&v.formSubmitted&&has('review')&&v.done&&stepExported(v)][card]();}
function organizationJourney(){const p=journeyProfile(),s=service(p.service),t=allTasks(p.service)[2],o=organizationState(p),v=p.steps[t.id]||{},card=o.card,doc=canonicalDocURL(v.link),title=`Le Hanout — ${s.name} — Organisation`;let body='';
if(card===0)body=`<h2>Choisir notre responsable</h2><p>Chacun dit s’il souhaite être responsable et quel engagement il prend. Écoutez toutes les candidatures, puis <b>votez</b>. En cas d’égalité, échangez et revotez ; sollicitez un enseignant si besoin.</p><p>Le responsable est <button class="term" data-term="accountable">accountable</button> : il suit les productions, coordonne, alerte et rend des comptes. Chacun réalise sa part.</p><div class="org-choices"><div><label for="orgLeader">Qui a été choisi ?</label><select id="orgLeader" ${journeyReadOnly()?'disabled':''}><option value="">Choisir le prénom…</option>${s.people.map(n=>`<option ${o.leader===n?'selected':''}>${esc(n)}</option>`).join('')}</select></div><div><label for="orgTenure">Pour quelle durée ?</label><select id="orgTenure" ${journeyReadOnly()?'disabled':''}><option value="">Choisir ensemble…</option><option value="tournante" ${o.tenure==='tournante'?'selected':''}>Responsabilité tournante</option><option value="plusieurs" ${o.tenure==='plusieurs'?'selected':''}>Plusieurs séances, avec un bilan</option></select></div><div><label for="orgReviewDate">Date du prochain bilan</label><input id="orgReviewDate" type="date" value="${o.reviewDate}" ${journeyReadOnly()?'readonly':''}></div></div>${organizationCheck(p,'vote','Nous avons voté et chacun connaît la durée et la date du bilan.')}<p class="helptext">Vous soumettrez cette organisation aux enseignants. La responsabilité peut évoluer après le bilan.</p>`;
if(card===1)body=`<h2>Créer notre document Google Docs</h2><p>Un membre crée <b>un seul document pour le service</b>. Les autres l’aideront à le compléter.</p><div class="actions">${link(doc||'https://docs.google.com/document/create',doc?'Rouvrir notre document Google Docs':'Créer notre Google Docs','primary')}</div><p>Dans le nouvel onglet : cliquez sur <b>Document sans titre</b> en haut à gauche. Écrivez ce nom, puis appuyez sur Entrée :</p><div class="copy-line"><b>${esc(title)}</b><button class="soft smallbtn" data-orgcopy="title">Copier le titre</button></div>${annotatedDocs('docs-nommer',p)}<p>Cliquez dans la barre d’adresse du document. Faites <b>Ctrl+C</b> (Mac : Cmd+C), puis revenez ici et collez :</p>${organizationLinkField(p,'Lien de notre document Google Docs — collez ici')}${organizationCheck(p,'named','Notre document est créé et porte le nom du service.')}<p class="helptext">Si le service possède déjà ce document, ouvrez-le et collez son lien ici. Ne créez pas de doublon. Docs enregistre automatiquement les modifications dans Drive.</p>`;
if(card===2)body=`<h2>Ranger le document dans Organisation</h2><p>${link(doc,'Ouvrir notre document','primary')}</p><p>Un document créé directement dans Docs peut être dans <b>Mon Drive</b>. Il doit rejoindre le dossier partagé du service.</p>${annotatedDocs('docs-deplacer',p)}<ol class="steps compact"><li>Dans le document, cliquez <b>Fichier → Déplacer</b>.</li><li>Ouvrez <b>Tous les emplacements</b>, puis cherchez le dossier partagé du service dans <b>Partagés avec moi</b> ou les suggestions. Vous pouvez utiliser la recherche de cette fenêtre.</li><li>Ouvrez le dossier de votre service, puis <b>Organisation</b>. Cliquez sur <b>Déplacer</b>. Si Google demande une confirmation d’accès ou si le dossier n’est pas proposé, sollicitez l’enseignant.</li></ol><div class="folder-path">📁 Le Hanout → 📁 ${esc(s.name)} → 📁 Organisation → 📄 Notre document</div><p>${link('https://drive.google.com/drive/folders/'+s.folder,'Ouvrir le dossier du service pour vérifier','soft')}</p>${organizationCheck(p,'filed','Notre document apparaît dans Organisation, dans le dossier partagé du service.')}`;
if(card===3)body=`<h2>Écrire notre décision</h2><p>${link(doc,'Ouvrir notre document','primary')}</p><p>Cliquez dans la page blanche et écrivez la décision du groupe. Vous pouvez copier cette trame, la coller dans Docs, puis la <b>relire et l’ajuster ensemble</b>.</p><pre class="org-decision">${esc(organizationDecision(p))}</pre><button class="soft" data-orgcopy="decision">Copier notre trame de décision</button><p>Vérifiez les prénoms, la durée et la date du bilan. Si la réunion a eu lieu un autre jour, corrigez sa date. Placez le curseur sur une ligne vide après le texte : vous allez y insérer le tableau.</p>${organizationCheck(p,'decision','La décision est écrite dans Docs et nous l’avons relue ensemble.')}`;
if(card===4)body=`<h2>Insérer le tableau des tâches</h2><p>${link(doc,'Ouvrir notre document','primary')}</p><p>Nous utilisons un <b>tableau dans Google Docs</b> pour ranger du texte. Ce n’est pas un tableur Sheets : aucun calcul n’est demandé ici.</p><ol class="steps compact"><li>Dans Docs, cliquez sur une ligne vide sous votre décision.</li><li>Cliquez sur <b>Insertion → Tableau</b>.</li><li>Dans la grille, comptez <b>4 cases vers la droite</b> : ce sont les 4 colonnes. Puis <b>${s.people.length+1} cases vers le bas</b> : une ligne de titres et une ligne par membre. Cliquez sur la dernière case de ce rectangle.</li></ol>${annotatedDocs('docs-tableau',p)}<p>Écrivez les quatre titres de la première ligne. Cliquez dans chaque cellule pour la compléter ; la touche <b>Tabulation</b> passe à la cellule suivante.</p><div class="tablewrap"><table class="org-example"><caption>Exemple à adapter : une tâche précise et une date par personne</caption><thead><tr><th>Tâche</th><th>Responsable de la tâche</th><th>Autre participant</th><th>Date prévue</th></tr></thead><tbody>${s.people.map((n,i)=>`<tr><td>${esc(['Préparer une première production du service','Relire les informations et noter les points à vérifier','Préparer les éléments à présenter au comité'][i])}</td><td>${esc(n)}</td><td>${esc(s.people[(i+1)%s.people.length])}</td><td>À fixer ensemble</td></tr>`).join('')}</tbody></table></div><p>Choisissez vos tâches réelles dans <a href="#service/${s.id}">le cahier des charges du service</a>. Un responsable de tâche réalise ou suit cette tâche ; le chef de service coordonne l’ensemble.</p>${organizationCheck(p,'table','Chaque membre a une tâche précise ; les participants et les dates sont renseignés.')}`;
if(card===5)body=`<h2>Partager et coller le lien ici</h2><p>${link(doc,'Ouvrir notre document','primary')}</p><ol class="steps compact"><li>Dans Docs, cliquez sur <b>Partager</b>, en haut à droite.</li><li>Vérifiez que les membres du service et les enseignants ont accès grâce au dossier partagé. Gardez <b>Accès général : Limité</b>. Si une personne manque ou si le réglage diffère, sollicitez l’enseignant.</li><li>Cliquez sur <b>Copier le lien</b>. Revenez ici et collez-le dans la case juste dessous.</li></ol>${organizationLinkField(p,'Collez ici le lien de partage de votre production')}${annotatedDocs('docs-partage',p)}<p class="helptext">L’application conserve une adresse courte du même document, sans les paramètres ajoutés après « ? ». Elle ne change ni les droits ni le contenu. Dans les boutons, le lien apparaît sous un libellé lisible.</p>${organizationCheck(p,'limited','Nous avons vérifié les personnes autorisées et l’accès général Limité.')}`;
if(card===6)body=`<h2>Montrer mon travail et demander sa vérification</h2>${organizationLinkField(p,'Lien de notre production à montrer aux enseignants')}<h3>En tant que membre de l’équipe…</h3><p>Cochez seulement ce que <b>vous avez personnellement fait</b>. Plusieurs réponses sont possibles.</p><div class="org-contributions">${window.HANOUT_ORGANIZATION.contributions.map(([key,text])=>`<label class="checklabel"><input type="checkbox" data-orgcontribution="${key}" ${(v.contributions||[]).includes(key)?'checked':''} ${journeyReadOnly()?'disabled':''}>${esc(text)}</label>`).join('')}</div>${v.note?`<details><summary>Ma note enregistrée dans l’ancienne version</summary><p>${esc(v.note)}</p></details>`:''}<div class="gate"><b>Faites vérifier votre production.</b> Montrez le document lié ci-dessus à Mme Miri ou à A. Zeboudj. Demandez-leur de vérifier le vote, le tableau et les accès. Consignez leur retour dans le document ; une coche ou un score Forms ne constitue pas leur validation.</div>${organizationCheck(p,'review','J’ai sollicité les enseignants pour vérifier notre progression.')}<details><summary>Une information n’est pas comprise ?</summary><p>Écrivez « à vérifier » dans le document, demandez une explication et complétez après vérification. Ne confondez pas une inconnue et une information confirmée.</p></details>${practiceUI(t)}<label class="checklabel"><input id="taskDone" data-task="${t.id}" type="checkbox" ${v.done?'checked':''} ${journeyReadOnly()?'disabled':''}>Notre décision, notre tableau et le lien sont renseignés ; j’ai indiqué ma contribution.</label>${saveFooter(p,t)}`;
return `<div class="startup-shell"><div class="startup-heading"><div><span class="eyebrow">NOUS ORGANISER · ÉTAPE 3 SUR 4</span><h1>Notre organisation</h1><p>${p===guestProfile?esc(s.name):esc(p.name)+' · '+esc(s.name)}</p></div>${p===guestProfile?'':`<div class="startup-progress"><b>${progress(p)} %</b><progress max="100" value="${progress(p)}" aria-label="Avancement déclaré"></progress><small>Avancement déclaré</small></div>`}</div>${viewOnly?'<p class="warning">Consultation de la sauvegarde en lecture seule. <button class="soft smallbtn" id="leaveView">Revenir à mon profil</button></p>':''}${journeyNav(p,1,3)}<nav class="startup-dots" aria-label="Actions de l’étape Organisation">${Array.from({length:7},(_,i)=>`<button data-orgcard="${i}" class="${i===card?'active':''}"  aria-label="Action ${i+1} sur 7" aria-current="${i===card?'step':'false'}">${i+1}</button>`).join('')}</nav><article class="taskcard startup-card"><span class="pill">UNE ACTION À LA FOIS · ${card+1}/7</span>${body}<div class="taskfoot">${card?`<button class="soft" data-orgcard="${card-1}">← Précédent</button>`:'<a class="soft" href="#parcours/1/2">← Étape précédente</a>'}${card<6?`<button class="primary" id="orgNext" data-orgcard="${card+1}" >Suivant →</button>`:`<button class="primary" data-next="3" data-phase="1" >Continuer →</button>`}</div></article><p class="helptext">Vos choix et contributions sont conservés dans votre progression. En fin d’étape, téléchargez le JSON et déposez-le dans Progression Équipe / ${esc(p.name)}.</p></div>`;
}
function bindOrganization(){if(!document.querySelector('[data-orgcard]'))return;const p=journeyProfile();const o=organizationState(p),id=p.service+'-3';const update=()=>{const field=$('#orgLink');if(field){const valid=canonicalDocURL(field.value);$('#orgLinkFeedback').textContent=valid?'✓ Lien du document enregistré. Vérifiez ses droits dans Google Docs.':'Collez l’adresse du document Google Docs, et non le lien du dossier Drive.';}};for(const [selector,key] of [['#orgLeader','leader'],['#orgTenure','tenure'],['#orgReviewDate','reviewDate']])if($(selector))$(selector).onchange=e=>{if(journeyReadOnly())return;o[key]=e.target.value;saveTask(id,'done',false);update();};if($('#orgLink'))$('#orgLink').oninput=e=>{if(journeyReadOnly())return;const raw=e.target.value.slice(0,2000).trim(),url=canonicalDocURL(raw);if(url)e.target.value=url;saveTask(id,'link',url||raw);update();};document.querySelectorAll('[data-orgcard]').forEach(b=>b.onclick=()=>{const next=Number(b.dataset.orgcard);o.card=next;if(!journeyReadOnly())stamp();render();});document.querySelectorAll('[data-orgcheck]').forEach(b=>b.onchange=()=>{if(journeyReadOnly())return;o.checks=o.checks.filter(x=>x!==b.dataset.orgcheck);if(b.checked)o.checks.push(b.dataset.orgcheck);saveTask(id,'done',false);rerenderHere();});document.querySelectorAll('[data-orgcontribution]').forEach(b=>b.onchange=()=>{if(journeyReadOnly())return;const v=p.steps[id]||{},items=(v.contributions||[]).filter(x=>x!==b.dataset.orgcontribution);if(b.checked)items.push(b.dataset.orgcontribution);saveTask(id,'contributions',items);rerenderHere();});if($('#taskFormDeclared'))$('#taskFormDeclared').onchange=e=>{saveTask(id,'formSubmitted',e.target.checked);saveTask(id,'formSentAt',new Date().toISOString());rerenderHere();};document.querySelectorAll('[data-orgcopy]').forEach(b=>b.onclick=async()=>{const text=b.dataset.orgcopy==='title'?`Le Hanout — ${service(p.service).name} — Organisation`:organizationDecision(p);try{await navigator.clipboard.writeText(text);toast('Texte copié. Revenez dans Google Docs et collez-le.');}catch{dialog('Copier le texte',`<p>Sélectionnez le texte, puis Ctrl+C (Mac : Cmd+C).</p><textarea readonly id="orgCopyText">${esc(text)}</textarea>`);$('#orgCopyText').select();}});update();}
