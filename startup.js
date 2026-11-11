/* Le Hanout — démarrage guidé, version 1.2.0. */
window.HANOUT_STARTUP = {
  "version": "1.2.0",
  "passwordExample": "ABHanout2026!",
  "createAccount": "https://accounts.google.com/signup",
  "gmail": "https://mail.google.com/",
  "questions": [
    [
      "À quoi sert Google Drive ?",
      [
        "À ranger, retrouver et partager des fichiers en ligne.",
        "À mettre en page uniquement des documents de texte.",
        "À envoyer des messages avec un objet et un destinataire.",
        "À fabriquer uniquement des questionnaires et des sondages."
      ],
      0,
      "Drive est l’espace où l’équipe range et partage ses fichiers."
    ],
    [
      "Qu’est-ce qu’un document partagé en accès « Limité » ?",
      [
        "Un fichier que toute personne trouvant le lien peut modifier.",
        "Un même fichier accessible aux personnes autorisées, selon leurs droits.",
        "Une copie différente envoyée à chaque membre, sans lien entre les copies.",
        "Un fichier que seul son auteur peut consulter, même après autorisation."
      ],
      1,
      "Limité : seules les personnes autorisées ont accès ; leurs droits peuvent différer."
    ],
    [
      "Quel outil faut-il ouvrir pour envoyer un mail professionnel ?",
      [
        "Google Docs",
        "Google Forms",
        "Gmail",
        "Google Drive"
      ],
      2,
      "Gmail permet de rédiger et d’envoyer un mail."
    ],
    [
      "Quel outil faut-il ouvrir pour rédiger le compte rendu du service ?",
      [
        "Google Sheets",
        "Google Docs",
        "Google Slides",
        "Google Forms"
      ],
      1,
      "Docs sert à rédiger et mettre en forme un texte."
    ],
    [
      "Quel outil faut-il ouvrir pour calculer le coût des produits dans un tableau ?",
      [
        "Google Forms",
        "Google Drive",
        "Google Docs",
        "Google Sheets"
      ],
      3,
      "Sheets est le tableur : cellules, tableaux et formules de calcul."
    ],
    [
      "Quel outil faut-il ouvrir pour préparer les diapositives du comité ?",
      [
        "Google Slides",
        "Gmail",
        "Google Sheets",
        "Google Forms"
      ],
      0,
      "Slides sert à créer une présentation en diapositives."
    ],
    [
      "Quel outil faut-il ouvrir pour créer un questionnaire ou un sondage ?",
      [
        "Google Docs",
        "Google Slides",
        "Google Forms",
        "Google Drive"
      ],
      2,
      "Forms sert à construire un questionnaire et recueillir les réponses."
    ],
    [
      "Qu’est-ce qu’un livrable ?",
      [
        "Le temps réservé à une réunion, même sans résultat écrit.",
        "Une tâche commencée que l’équipe pense terminer plus tard.",
        "La liste des personnes présentes pendant une séance.",
        "Un résultat concret attendu, que l’on peut remettre et vérifier."
      ],
      3,
      "Un inventaire Sheets ou une présentation Slides sont des livrables."
    ],
    [
      "Que signifie travailler de façon agile ?",
      [
        "Commencer toutes les tâches en même temps pour aller plus vite.",
        "Avancer par petites étapes, vérifier, recueillir un retour et ajuster.",
        "Changer d’objectif à chaque séance sans conserver de trace.",
        "Attendre que tout soit terminé pour montrer le travail."
      ],
      1,
      "Une équipe agile prépare une petite version, la vérifie puis l’améliore."
    ],
    [
      "Que signifie travailler de façon asynchrone ?",
      [
        "Travailler chacun de son côté sans partager ses informations.",
        "Travailler uniquement quand tout le monde est connecté ensemble.",
        "Contribuer à des moments différents en laissant des traces compréhensibles.",
        "Écrire tous en même temps dans des copies séparées du document."
      ],
      2,
      "Le dossier partagé et les traces permettent de reprendre le travail d’un collègue plus tard."
    ],
    [
      "Le chef de service est « accountable ». Cela signifie qu’il…",
      [
        "répond du résultat du service, suit les livrables, alerte et rend des comptes.",
        "réalise personnellement tous les documents à la place des membres.",
        "gère seulement les factures et les comptes bancaires du service.",
        "choisit seul les missions sans expliquer les décisions aux autres."
      ],
      0,
      "Il est comptable du résultat du service : il coordonne et rend des comptes. Chaque membre contribue."
    ]
  ],
  "folders": [
    "Organisation",
    "Travaux",
    "Sources et visuels",
    "Présentations",
    "Suivi des séances"
  ],
  "tools": [
    {
      "id": "drive",
      "name": "Google Drive",
      "purpose": "Ranger et partager nos fichiers.",
      "url": "https://drive.google.com/"
    },
    {
      "id": "gmail",
      "name": "Gmail",
      "purpose": "Écrire et envoyer un mail.",
      "url": "https://mail.google.com/"
    },
    {
      "id": "docs",
      "name": "Google Docs",
      "purpose": "Rédiger un texte ou un compte rendu.",
      "url": "https://docs.google.com/"
    },
    {
      "id": "sheets",
      "name": "Google Sheets",
      "purpose": "Construire un tableau et faire des calculs.",
      "url": "https://sheets.google.com/"
    },
    {
      "id": "slides",
      "name": "Google Slides",
      "purpose": "Préparer une présentation.",
      "url": "https://slides.google.com/"
    },
    {
      "id": "forms",
      "name": "Google Forms",
      "purpose": "Créer un questionnaire ou un sondage.",
      "url": "https://forms.google.com/"
    }
  ]
};

function normalName(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z]/g,'');}
function professionalEmail(first,last,email){const f=normalName(first),n=normalName(last),e=String(email||'').trim().toLowerCase();if(!f||!n||!/^[a-z]+(?:\.[a-z]+)*@gmail\.com$/.test(e))return false;const local=e.split('@')[0].replace(/\./g,'');return local===f+n||local===f+n+'pro';}
function cleanSetup(raw){return {familyName:typeof raw?.familyName==='string'?raw.familyName.slice(0,100):'',email:typeof raw?.email==='string'?raw.email.slice(0,160):''};}
function cleanStartup(raw){const result={};for(const n of [1,2]){const v=raw?.[n];result[n]={card:Number.isInteger(v?.card)?Math.max(0,Math.min(n===1?4:6,v.card)):0,checks:Array.isArray(v?.checks)?v.checks.filter(x=>typeof x==='string'&&/^[a-z0-9-]{1,30}$/.test(x)).slice(0,30):[]};}return result;}
function startupState(p,n){p.setup=cleanSetup(p.setup);if(!p.startup?.[n])p.startup=cleanStartup(p.startup);return p.startup[n];}
function stepExported(v){return !!v&&Number.isInteger(v.exportRevision)&&v.exportRevision===(v.revision||0);}
function progressFolder(p){return L.progressFolders?.[p.service]?.people[p.name]?.url||'https://drive.google.com/drive/folders/'+service(p.service).folder;}
function guideImage(name,alt){return `<figure class="google-capture"><img src="${googleAsset(name)}" alt="${esc(alt)}"><figcaption>Capture de Google Drive · les menus peuvent varier légèrement.</figcaption></figure>`;}
function saveFooter(p,t){
  if (p === guestProfile) return '<p><button class="soft" data-start>Choisir un profil pour enregistrer mon travail</button></p>';
  if (isTeacher(p.name)) return `<section class="save-step"><h3>Sauvegarde de démonstration</h3><button class="primary" data-export="${t.id}" ${journeyReadOnly()?'disabled':''}>Enregistrer la démonstration</button><p>Le fichier correspond à ce profil et à ce service.</p></section>`;
  const v=p.steps[t.id]||{};return `<section class="save-step"><h3>Garder une sauvegarde de mon travail</h3><p>1. Cliquez sur <b>Enregistrer ma progression</b>. Un fichier <b>.json</b> est téléchargé sur cet ordinateur.</p><div class="actions"><button class="primary" data-export="${t.id}" ${journeyReadOnly()?'disabled':''}>Enregistrer ma progression</button>${link(progressFolder(p),'2. Ouvrir mon dossier de progression','soft')}</div><p>3. Dans ce dossier : <b>Nouveau → Importer un fichier</b>. Sélectionnez le JSON dans <b>Téléchargements</b>, puis vérifiez qu’il apparaît.</p><p class="helptext">Le Hanout / ${esc(service(p.service).short)} / <b>Progression Équipe / ${esc(p.name)}</b>. Le téléchargement ne dépose pas le fichier dans Drive. Pour reprendre plus tard, téléchargez ce JSON puis cliquez sur « Importer ma sauvegarde » dans l’application.</p><details><summary>Voir où cliquer pour importer le JSON</summary>${guideImage('drive-nouveau','Dans le menu Nouveau de Google Drive, cliquez Importer un fichier, deuxième ligne.')}</details><p role="status">${stepExported(v)?'✓ Export demandé pour la dernière version. Vérifiez le fichier et son dépôt dans Drive.':'Pensez à enregistrer vos dernières modifications avant de quitter la séance.'}</p></section>`;}
function startupCheck(p,n,key,label){const checked=startupState(p,n).checks.includes(key);return `<label class="checklabel"><input type="checkbox" data-startcheck="${key}" data-startnumber="${n}" ${checked?'checked':''} ${journeyReadOnly()?'disabled':''}>${label}</label>`;}
function startupReady(p,n,card){const st=startupState(p,n),v=p.steps[`${p.service}-${n}`]||{};if(n===1){return [()=>professionalEmail(p.name,p.setup.familyName,p.setup.email),()=>st.checks.includes('access'),()=>serviceFolderLink(p.service,v.link)&&st.checks.includes('limited'),()=>st.checks.includes('theory'),()=>v.formSubmitted&&v.done&&stepExported(v)][card]();}return card<5?st.checks.includes('folder-'+card):card===5?isDriveFolder(v.link)&&st.checks.includes('personal-folder'):v.done&&stepExported(v);}
function isDriveFolder(value){try{const u=new URL(value);return u.protocol==='https:'&&u.hostname==='drive.google.com'&&/^\/drive\/(?:u\/\d+\/)?folders\/[-\w]+/.test(u.pathname);}catch{return false;}}
function serviceFolderLink(sid,value){try{const u=new URL(value);return isDriveFolder(value)&&u.pathname.split('/').pop()===service(sid).folder;}catch{return false;}}
function startupJourney(n){const p=journeyProfile(),s=service(p.service),t=allTasks(p.service)[n-1],v=p.steps[t.id]||{},st=startupState(p,n),card=st.card,total=n===1?5:7,folder='https://drive.google.com/drive/folders/'+s.folder;let body='';
if(n===1&&card===0)body=`<h2>Votre adresse professionnelle</h2><p>Vous avez déjà une adresse au bon format ? Écrivez-la ici, puis passez à la suite.</p><div class="fields"><label for="familyName">Votre nom de famille</label><input id="familyName" autocomplete="family-name" maxlength="100" value="${esc(p.setup.familyName)}" ${journeyReadOnly()?'readonly':''}><label for="professionalEmail">Votre adresse professionnelle Gmail</label><input id="professionalEmail" type="email" autocomplete="email" value="${esc(p.setup.email)}" placeholder="prenom.nom@gmail.com" ${journeyReadOnly()?'readonly':''}><p id="emailFeedback" role="status"></p></div><p>Formats attendus : <b>prenom.nom@gmail.com</b> ou <b>prenom.nom.pro@gmail.com</b>, sans numéro ajouté.</p><details><summary>Je dois créer une adresse au bon format</summary><p>${link(window.HANOUT_STARTUP.createAccount,'Créer mon compte Google','primary')}</p><p>Choisissez une adresse disponible au format indiqué. Si elle n’est pas disponible, demandez une alternative à votre enseignant.</p><p>Mot de passe demandé : <b>initiale du prénom + initiale du nom, en MAJUSCULES + Hanout2026!</b><br>Exemple pour les initiales AB : <b>ABHanout2026!</b></p><p>Le mot de passe se saisit uniquement chez Google. Aucun champ de mot de passe n’est demandé ici.</p></details>`;
if(n===1&&card===1)body=`<h2>Accéder au dossier du service</h2><p><b>Drive</b> est l’espace de rangement en ligne. Le <b>dossier partagé de votre service</b> rassemble les fichiers de votre équipe.</p><div class="actions">${link(folder,'Demander l’accès au dossier partagé de mon service','primary')}</div><p>Si Google indique que vous n’avez pas accès : cliquez sur <b>Demander l’accès</b>, avec votre adresse professionnelle. Si le dossier s’ouvre, vous avez déjà accès.</p><div class="actions">${link(window.HANOUT_STARTUP.gmail,'Ouvrir ma messagerie Gmail','soft')}</div><p>Repérez l’invitation ou la réponse à votre demande. Vérifiez que vous utilisez la bonne adresse Google. En cas de difficulté, sollicitez votre enseignant.</p>${startupCheck(p,n,'access','Le dossier de mon service s’ouvre avec mon adresse professionnelle.')}`;
if(n===1&&card===2)body=`<h2>Je comprends le partage dans Drive</h2><p>${link(folder,'Ouvrir le dossier du service','primary')}</p><ol class="steps compact"><li>En haut du dossier, cliquez sur son nom, puis <b>Partager → Partager</b>, ou sur l’icône des personnes.</li><li>Repérez <b>Accès général : Limité</b>. Seules les personnes autorisées peuvent ouvrir le dossier. Gardez ce réglage ; si vous ne pouvez pas le vérifier, sollicitez l’enseignant.</li><li>Cliquez sur <b>Copier le lien</b>.</li></ol>${guideImage('drive-partage','Fenêtre de partage : Accès général Limité, seules les personnes avec accès peuvent ouvrir, bouton Copier le lien en bas à gauche.')}<div class="fields"><label for="taskLink">4. Collez ici le lien de partage du Drive de votre service</label><input id="taskLink" data-task="${t.id}" type="url" value="${esc(v.link||'')}" placeholder="https://drive.google.com/drive/folders/…" ${journeyReadOnly()?'readonly':''}><p id="folderFeedback" role="status"></p></div>${startupCheck(p,n,'limited','J’ai vérifié : l’accès général est Limité.')}`;
if(n===1&&card===3)body=`<h2>Le bon outil pour la bonne action</h2><div class="google-tools">${window.HANOUT_STARTUP.tools.map(x=>`<a href="${x.url}" target="_blank" rel="noopener noreferrer"><img src="${googleAsset(x.id)}" alt=""><b>${x.name}</b><span>${x.purpose}</span></a>`).join('')}</div><details open><summary>Quatre mots pour travailler ensemble</summary><dl class="startup-terms"><dt>Livrable</dt><dd>Un résultat concret attendu et vérifiable : un inventaire Sheets, un compte rendu Docs, une présentation Slides.</dd><dt>Agile</dt><dd>Avancer par petites étapes, vérifier, demander un retour et ajuster. Exemple : montrer une première liste avant de la compléter.</dd><dt>Asynchrone</dt><dd>Travailler à des moments différents. Les documents partagés et les traces permettent à un collègue de reprendre plus tard.</dd><dt>Accountable · comptable du résultat</dt><dd>Le chef de service répond des productions de son service. Il suit les livrables, coordonne, alerte si le travail n’avance pas et rend des comptes. Il ne fait pas tout seul : chaque membre reste responsable de sa contribution.</dd></dl></details><p>Une adresse identifiable permet de partager les bons fichiers et de travailler ensemble, de façon agile et asynchrone.</p>${startupCheck(p,n,'theory','J’ai lu les explications. Je peux donner un exemple de chaque terme.')}`;
if(n===1&&card===4)body=`<h2>Je montre que j’ai compris</h2>${missionFormUI(t)}<p>Le questionnaire porte sur Drive, le partage, les six outils Google et les quatre mots expliqués juste avant.</p><label class="checklabel"><input id="taskDone" data-task="${t.id}" type="checkbox" ${v.done?'checked':''} ${journeyReadOnly()?'disabled':''}>Mon adresse est renseignée, mon accès et mon lien de partage sont vérifiés.</label>${saveFooter(p,t)}`;
if(n===2&&card<5){const name=window.HANOUT_STARTUP.folders[card];body=`<h2>Créer le dossier « ${esc(name)} »</h2><p>${link(folder,'Ouvrir le dossier du service','primary')}</p><p>Restez dans le dossier principal du service. Si <b>${esc(name)}</b> existe déjà, ouvrez-le pour vérifier son nom ; ne créez pas de doublon.</p><ol class="steps compact"><li>Cliquez sur <b>Nouveau</b> en haut à gauche.</li><li>Choisissez <b>Nouveau dossier</b>.</li><li>Écrivez exactement <b>${esc(name)}</b>, puis cliquez sur <b>Créer</b>.</li></ol>${guideImage('drive-nouveau','Menu Nouveau de Google Drive : Nouveau dossier est la première ligne.')}<p class="why">${['Organisation : les rôles, les décisions et le planning du service.','Travaux : les productions en cours, tableaux et comptes rendus.','Sources et visuels : les photos, les documents de référence et les sources.','Présentations : les supports Google Slides à présenter au comité.','Suivi des séances : les comptes rendus personnels de chaque séance.'][card]}</p>${startupCheck(p,n,'folder-'+card,'Le dossier '+esc(name)+' est visible dans le Drive de mon service.')}`;}
if(n===2&&card===5)body=`<h2>Créer votre dossier de comptes rendus</h2><p>${link(folder,'Ouvrir le dossier du service','primary')}</p><ol class="steps compact"><li>Double-cliquez sur <b>Suivi des séances</b>.</li><li>Cliquez sur <b>Nouveau → Nouveau dossier</b>.</li><li>Nommez-le <b>${esc(p.name)}</b>. S’il existe déjà, ouvrez-le.</li><li>Ouvrez ce dossier à votre prénom. Cliquez dans la barre d’adresse du navigateur, puis <b>Ctrl+C</b> (Mac : Cmd+C).</li></ol><div class="folder-path">📁 ${esc(s.short)} → 📁 Suivi des séances → 📁 <b>${esc(p.name)}</b></div><div class="fields"><label for="taskLink">5. Collez ici l’adresse de votre dossier « ${esc(p.name)} »</label><input id="taskLink" data-task="${t.id}" type="url" value="${esc(v.link||'')}" placeholder="https://drive.google.com/drive/folders/…" ${journeyReadOnly()?'readonly':''}><p id="folderFeedback" role="status"></p></div><p>Vos comptes rendus iront ici. Vos sauvegardes JSON vont dans <b>Progression Équipe / ${esc(p.name)}</b>, déjà créé pour vous.</p>${startupCheck(p,n,'personal-folder','Mon dossier à mon prénom est dans Suivi des séances.')}`;
if(n===2&&card===6)body=`<h2>Vérifier le rangement du service</h2><p>Voici le résultat attendu. Les dossiers de progression sont déjà créés.</p><div class="folder-tree" role="img" aria-label="Arborescence du dossier partagé de votre service"><b>📁 ${esc(s.name)}</b><ul>${window.HANOUT_STARTUP.folders.map(x=>`<li>📁 ${x}${x==='Suivi des séances'?`<ul>${s.people.map(y=>`<li>📁 ${esc(y)} · comptes rendus</li>`).join('')}</ul>`:''}</li>`).join('')}<li>📁 Progression Équipe <small>· déjà créé</small><ul>${s.people.map(y=>`<li>📁 ${esc(y)} · fichiers JSON</li>`).join('')}</ul></li></ul></div><label class="checklabel"><input id="taskDone" data-task="${t.id}" type="checkbox" ${v.done?'checked':''} ${journeyReadOnly()?'disabled':''}>J’ai vérifié les dossiers et renseigné le lien de mon dossier personnel.</label>${missionFormUI(t)}${saveFooter(p,t)}`;
return `<div class="startup-shell"><div class="startup-heading"><div><span class="eyebrow">NOUS ORGANISER · ÉTAPE ${n} SUR 4</span><h1>${n===1?'Mon adresse et mon accès':'Les dossiers du service'}</h1><p>${p===guestProfile?esc(s.name):esc(p.name)+' · '+esc(s.name)}</p></div>${p===guestProfile?'':`<div class="startup-progress"><b>${progress(p)} %</b><progress max="100" value="${progress(p)}" aria-label="Avancement déclaré"></progress><small>Avancement déclaré</small></div>`}</div>${viewOnly?'<p class="warning">Consultation : sauvegarde en lecture seule.</p>':''}${journeyNav(p,1,n)}<nav class="startup-dots" aria-label="Actions de cette étape">${Array.from({length:total},(_,i)=>`<button class="${i===card?'active':''}" data-startcard="${i}" data-startnumber="${n}"  aria-label="Action ${i+1} sur ${total}" aria-current="${i===card?'step':'false'}">${i+1}</button>`).join('')}</nav><article class="taskcard startup-card"><span class="pill">UNE ACTION À LA FOIS · ${card+1}/${total}</span>${body}<div class="taskfoot">${card?`<button class="soft" data-startcard="${card-1}" data-startnumber="${n}">← Précédent</button>`:'<a class="soft" href="#accueil">Accueil</a>'}${card<total-1?`<button class="primary" id="startupNext" data-startcard="${card+1}" data-startnumber="${n}" >Suivant →</button>`:`<button class="primary" data-next="${n}" data-phase="1" >Continuer →</button>`}</div></article><p class="helptext">Vos réponses restent dans le carnet de ce navigateur et dans votre export JSON. Pour conserver votre travail, terminez l’étape par l’enregistrement.</p></div>`;
}
function bindStartup(){const p=journeyProfile();const part=location.hash.slice(1).split('/'),n=Number(part[2])||1;if(part[0]!=='parcours'||(Number(part[1])||1)!==1||n>2)return;const st=startupState(p,n),id=`${p.service}-${n}`;
const feedback=()=>{if($('#emailFeedback')){const valid=professionalEmail(p.name,p.setup.familyName,p.setup.email);$('#emailFeedback').textContent=valid?'✓ Format conforme. Vous pouvez continuer.':'Indiquez votre nom et une adresse contenant votre prénom et votre nom, sans numéro.';}if($('#folderFeedback')){const valid=n===1?serviceFolderLink(p.service,p.steps[id]?.link):isDriveFolder(p.steps[id]?.link);$('#folderFeedback').textContent=valid?'✓ Le lien a le format attendu. Vérifiez aussi les autorisations dans Drive.':'Collez le lien du dossier Google Drive demandé ci-dessus.';}};
for(const [sel,key] of [['#familyName','familyName'],['#professionalEmail','email']])if($(sel))$(sel).oninput=e=>{if(journeyReadOnly())return;p.setup[key]=e.target.value.slice(0,key==='email'?160:100);saveTask(id,'done',false);feedback();};
if($('#taskLink'))$('#taskLink').oninput=e=>{saveTask(id,'link',e.target.value.slice(0,2000).trim());feedback();};
document.querySelectorAll('[data-startcard]').forEach(b=>b.onclick=()=>{const next=Number(b.dataset.startcard);st.card=next;if(!journeyReadOnly())stamp();render();});
document.querySelectorAll('[data-startcheck]').forEach(b=>b.onchange=()=>{if(journeyReadOnly())return;st.checks=st.checks.filter(x=>x!==b.dataset.startcheck);if(b.checked)st.checks.push(b.dataset.startcheck);saveTask(id,'done',false);rerenderHere();});
if($('#taskFormDeclared'))$('#taskFormDeclared').onchange=e=>{saveTask(id,'formSubmitted',e.target.checked);saveTask(id,'formSentAt',new Date().toISOString());rerenderHere();};feedback();}

function resumeRoute(p){return /^parcours\/[1-4]\/[1-4]$/.test(p?.lastRoute||'')?p.lastRoute:'parcours/1/1';}

function googleAsset(name){return window.HANOUT_GOOGLE_ASSETS?.[name]||`assets/google/${name}.png`;}
