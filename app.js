const BOOKS=[
{short:'Bhakti-rasāmṛta-sindhu',author:'Rūpa Gosvāmī',script:'Sanskrit · 4 divisions'},
{short:'Rāga-vartma-candrikā',author:'Viśvanātha Cakravartī',script:'Sanskrit · 2 illuminations'},
{short:'Ujjvala-nīlamaṇi',author:'Rūpa Gosvāmī',script:'Sanskrit · 15 chapters'},
{short:'Mādhurya-kādambinī',author:'Viśvanātha Cakravartī',script:'Sanskrit · 8 showers'},
{short:'Prema-bhakti-candrikā',author:'Narottama dāsa',script:'Bengali · 8 rays'},
{short:'Caitanya-caritāmṛta',author:'Kṛṣṇadāsa Kavirāja',script:'Bengali · 3 līlās'}
];

const VERSES=[
{ref:'Rāga-vartma-candrikā 1.5',deva:'रागानुगा भक्तिः रुचिमूला सदा भवेत्',translit:'rāgānugā bhaktiḥ rucimūlā sadā bhavet',english:'Spontaneous devotion takes its root in taste, and that taste is awakened by hearing of the moods of Vraja rather than by rule.'},
{ref:'Rāga-vartma-candrikā 1.6',deva:'लोभे तु शास्त्रम् अपेक्ष्यते न हि',translit:'lobhe tu śāstram apekṣyate na hi',english:'Where genuine greed has appeared, the practitioner no longer waits on injunction. The mood itself supplies the direction of practice.',note:'Cross-reference: Bhakti-rasāmṛta-sindhu 1.2.291 treats the same greed as the qualification.'},
{ref:'Rāga-vartma-candrikā 1.7',deva:'तत्र सिद्धरूपेण साधनं विधीयते',translit:'tatra siddha-rūpeṇa sādhanaṁ vidhīyate',english:'Practice is then performed in two forms at once: the body one has, and the perfected identity one meditates upon.'},
{ref:'Rāga-vartma-candrikā 1.8',deva:'श्रवणं कीर्तनं तस्य मूलम् एव सदा',translit:'śravaṇaṁ kīrtanaṁ tasya mūlam eva sadā',english:'Hearing and singing remain the root throughout, since the mood is transmitted through the voice of those who hold it.'}
];

const RESULTS=[
['Rāga-vartma-candrikā','1.5','…rāgānugā bhakti is rooted in taste, and taste follows from hearing of the moods of Vraja…','Sanskrit'],
['Bhakti-rasāmṛta-sindhu','1.2.270','…detachment is not the mother of this path; taste alone sets it in motion…','Sanskrit'],
['Mādhurya-kādambinī','Shower 3','…the creeper of devotion, once watered by hearing, bends of its own accord toward Vraja…','Sanskrit'],
['Prema-bhakti-candrikā','Ray 2','…keep the association of those whose taste is already awake, and your own will follow…','Bengali'],
['Caitanya-caritāmṛta','Madhya 22.107','…pure love is eternally established in the heart; hearing and chanting only awaken it…','Bengali']
];

const FORMS=[
'Article',
'New book',
'Poetic recitation',
'Song lyrics',
'Study notes',
'Daily reflection',
'Q&A',
'Class outline'
];

const I18N={
en:{
library:'Library',
search:'Search',
create:'Create',
saved:'My works',
books:'Loaded books',
titles:'titles',
collections:'Collections',
continue:'Continue',
sources:'Sources',
findSources:'Find sources',
remove:'Remove',
intent:'Intent',
form:'Form',
generateWork:'Generate a work',
generate:'Generate',
generatedWork:'Generated work',
from:'From',
saveWork:'Save work',
allBooks:'All books',
passages:'passages',
acrossBooks:'Across loaded books',
endSection:'End of section',
versesMarked:'verses marked',
firstIllumination:'First illumination',
newBook:'New book',
poeticRecitation:'Poetic recitation',
songLyrics:'Song lyrics',
studyNotes:'Study notes',
dailyReflection:'Daily reflection',
classOutline:'Class outline',
readingSelected:'Reading selected sources',
gathering:'Gathering relevant passages',
composing:'Composing in the chosen form',
assembling:'Assembling the source list',
savedToWorks:'Saved to My works',
english:'English',
slovenian:'Slovenščina',
sourcesCount:'sources',
draft:'draft',
noResults:'No passages found',
defaultIntent:'For a Sunday class of newcomers. Keep the Sanskrit terms but explain each one.'
},

sl:{
library:'Knjižnica',
search:'Iskanje',
create:'Ustvari',
saved:'Moja dela',
books:'Naložene knjige',
titles:'naslovov',
collections:'Zbirke',
continue:'Nadaljuj',
sources:'Viri',
findSources:'Poišči vire',
remove:'Odstrani',
intent:'Namen',
form:'Oblika',
generateWork:'Ustvari delo',
generate:'Ustvari',
generatedWork:'Ustvarjeno delo',
from:'Iz',
saveWork:'Shrani delo',
allBooks:'Vse knjige',
passages:'odlomkov',
acrossBooks:'Po naloženih knjigah',
endSection:'Konec odseka',
versesMarked:'označenih verzov',
firstIllumination:'Prva iluminacija',
newBook:'Nova knjiga',
poeticRecitation:'Pesniška recitacija',
songLyrics:'Besedilo pesmi',
studyNotes:'Študijski zapiski',
dailyReflection:'Dnevni razmislek',
classOutline:'Oris predavanja',
readingSelected:'Branje izbranih virov',
gathering:'Iskanje ustreznih odlomkov',
composing:'Sestavljanje v izbrani obliki',
assembling:'Pripravljanje seznama virov',
savedToWorks:'Shranjeno med Moja dela',
english:'English',
slovenian:'Slovenščina',
sourcesCount:'virov',
draft:'osnutek',
noResults:'Odlomkov ni bilo mogoče najti',
defaultIntent:'Za nedeljski razred začetnikov. Ohranite sanskrtske izraze, vendar vsakega razložite.'
}
};

let state={
screen:'library',
book:1,
query:'ruci',
filter:'All books',
form:'Article',
sources:[0,1,2,3],
script:true,
toast:'',
working:false,
step:0,
intent:'For a Sunday class of newcomers. Keep the Sanskrit terms but explain each one.',
lang:'en'
};

try{
Object.assign(
state,
JSON.parse(localStorage.getItem('rb-state')||'{}')
);
}catch(e){}

if(!state.lang){
state.lang='en';
}

function t(key){
return I18N[state.lang]?.[key] || I18N.en[key] || key;
}

function save(){
localStorage.setItem('rb-state',JSON.stringify(state));
}

function setLanguage(lang){
state.lang=lang;

if(lang==='sl'){
state.intent='Za nedeljski razred začetnikov. Ohranite sanskrtske izraze, vendar vsakega razložite.';
}else{
state.intent='For a Sunday class of newcomers. Keep the Sanskrit terms but explain each one.';
}

save();
render();
}

function go(screen){
state.screen=screen;
save();
render();
}

function toast(msg){
state.toast=msg;
render();

setTimeout(()=>{
state.toast='';
render();
},1800);
}

function languageSelector(){
return `
<div class="language-selector" style="display:flex;gap:6px;align-items:center;margin-bottom:14px">
<button
class="chip ${state.lang==='en'?'on':''}"
onclick="setLanguage('en')">
🇬🇧 EN
</button>

<button
class="chip ${state.lang==='sl'?'on':''}"
onclick="setLanguage('sl')">
🇸🇮 SL
</button>
</div>
`;
}

function nav(){
return `
<nav class="nav">
${[
['library','▦',t('library')],
['search','⌕',t('search')],
['create','✦',t('create')],
['saved','♡',t('saved')]
].map(([k,i,l])=>
`<button class="${state.screen===k?'active':''}" onclick="go('${k}')">
${i}<small>${l}</small>
</button>`
).join('')}
</nav>
`;
}

function layout(body){
return `
<div class="shell">
<main class="phone">
<div class="content">
${languageSelector()}
${body}
</div>
${nav()}
${state.toast?`<div class="toast">${state.toast}</div>`:''}
</main>
</div>
`;
}

function library(){

return layout(`
<div class="eyebrow">${t('library')}</div>

<h1>Rāgānugā Bhakti</h1>

<div class="section resume" onclick="go('reader')">

<div class="eyebrow">
${t('continue')} · 38%
</div>

<div class="title">
Rāga-vartma-candrikā
</div>

<div class="muted">
Viśvanātha Cakravartī Thākura · ${t('firstIllumination')}, verse 5
</div>

<div class="progress" style="margin-top:12px">
<i></i>
</div>

</div>

<div class="section">

<div style="display:flex;justify-content:space-between;margin-bottom:12px">

<h3>${t('books')}</h3>

<span class="muted">
${BOOKS.length} ${t('titles')}
</span>

</div>

<div class="grid">

${BOOKS.map((b,i)=>`
<div class="book" onclick="state.book=${i};go('reader')">

<div class="cover">
<strong>${b.short}</strong>
<span class="muted">${b.script}</span>
</div>

<div class="bookname">
${b.author}
</div>

</div>
`).join('')}

</div>
</div>

<div class="section">

<h3 style="margin-bottom:12px">
${t('collections')}
</h3>

${[
['4','Sources for the Sunday class','4 books · 11 verses marked','create'],
['7','On ruci and lobha','7 verses across 3 books','search'],
['2','Kirtan drafts','2 generated works','saved']
].map(x=>`

<div class="row" onclick="go('${x[3]}')">

<div class="num">${x[0]}</div>

<div class="grow">

<div>
${state.lang==='sl'
?({
'Sources for the Sunday class':'Viri za nedeljski razred',
'On ruci and lobha':'O ruci in lobhi',
'Kirtan drafts':'Osnutki kirtana'
}[x[1]]||x[1])
:x[1]}
</div>

<div class="muted">
${state.lang==='sl'
?({
'4 books · 11 verses marked':'4 knjige · 11 označenih verzov',
'7 verses across 3 books':'7 verzov v 3 knjigah',
'2 generated works':'2 ustvarjeni deli'
}[x[2]]||x[2])
:x[2]}
</div>

</div>

<span>›</span>

</div>

`).join('')}

</div>
`);
}

function reader(){

const b=BOOKS[state.book];

return layout(`

<div class="top">

<button class="back" onclick="go('library')">
‹
</button>

<div style="flex:1">

<strong>${b.short}</strong>

<div class="muted">
${b.author} · ${b.script}
</div>

</div>

<button
class="chip on"
onclick="state.script=!state.script;save();render()">

${state.script?'A अ':'A'}

</button>

</div>

${VERSES.map(v=>`

<div class="verse" onclick="toast('${v.ref}')">

<div class="ref">
${v.ref}
</div>

${state.script
?`
<div class="deva">${v.deva}</div>
<div class="translit">${v.translit}</div>
`
:''}

<div class="english">
${v.english}
</div>

${v.note
?`
<div class="note">
${v.note}
</div>
`
:''}

</div>

`).join('')}

<div class="muted" style="text-align:center">
${t('endSection')} · 38% · 4 ${t('versesMarked')}
</div>

`);
}

function search(){

let q=state.query.toLowerCase();

let rs=RESULTS.filter(r=>
(
r.join(' ').toLowerCase().includes(q)
||
!q
)
&&
(
state.filter==='All books'
||
state.filter===r[3]
)
);

return layout(`

<h2>${t('search')}</h2>

<input
class="search"
value="${state.query}"
oninput="state.query=this.value;save();render()"
placeholder="${t('acrossBooks')}">

<div class="chips">

${['All books','Sanskrit','Bengali'].map(f=>`

<button
class="chip ${state.filter===f?'on':''}"
onclick="state.filter='${f}';save();render()">

${f==='All books'?t('allBooks'):f}

</button>

`).join('')}

</div>

<div class="muted" style="margin-bottom:8px">

${rs.length} ${t('passages')}

</div>

${
rs.length
?
rs.map(r=>`

<div
class="result"
onclick="state.book=${BOOKS.findIndex(b=>r[0]===b.short)};go('reader')">

<div class="booktitle">
${r[0]} · ${r[1]}
</div>

<div class="muted">
${r[3]}
</div>

<div style="font-size:13px;line-height:1.55;margin-top:4px">
${r[2]}
</div>

</div>

`).join('')
:
`<div class="muted">${t('noResults')}</div>`
}

`);
}

function create(){

if(state.working){

return layout(`

<div class="working">

<div class="dot"></div>

<h2 style="margin-top:20px">
${t('generateWork')}…
</h2>

<div class="muted">

${
[
t('readingSelected'),
t('gathering'),
t('composing'),
t('assembling')
][state.step]
}

</div>

</div>

`);
}

const formTranslations={
'Article':state.lang==='sl'?'Članek':'Article',
'New book':state.lang==='sl'?'Nova knjiga':'New book',
'Poetic recitation':state.lang==='sl'?'Pesniška recitacija':'Poetic recitation',
'Song lyrics':state.lang==='sl'?'Besedilo pesmi':'Song lyrics',
'Study notes':state.lang==='sl'?'Študijski zapiski':'Study notes',
'Daily reflection':state.lang==='sl'?'Dnevni razmislek':'Daily reflection',
'Q&A':state.lang==='sl'?'Vprašanja in odgovori':'Q&A',
'Class outline':state.lang==='sl'?'Oris predavanja':'Class outline'
};

return layout(`

<div class="eyebrow">
${t('create')}
</div>

<h1>
${t('generateWork')}
</h1>

<div class="section card">

<h3>
${t('form')}
</h3>

<div
class="formgrid"
style="margin-top:10px">

${FORMS.map(f=>`

<button
class="select ${state.form===f?'on':''}"
onclick="state.form='${f}';save();render()">

${formTranslations[f]}

</button>

`).join('')}

</div>

</div>

<div class="card">

<h3>
${t('sources')}
</h3>

${state.sources.map(i=>`

<div class="source">

<span>
${BOOKS[i].short}
</span>

<button
class="remove"
onclick="state.sources=state.sources.filter(x=>x!==${i});save();render()">

${t('remove')}

</button>

</div>

`).join('')}

<button
class="chip on"
style="margin-top:10px"
onclick="go('search')">

+ ${t('findSources')}

</button>

</div>

<div class="card">

<h3>
${t('intent')}
</h3>

<textarea
class="textarea"
style="margin-top:10px"
oninput="state.intent=this.value;save()">${state.intent}</textarea>

</div>

<button
class="primary"
onclick="generate()">

${t('generate')} ${formTranslations[state.form]}

</button>

`);
}

function generate(){

state.working=true;
state.step=0;

render();

let tmr=setInterval(()=>{

state.step++;

if(state.step>=4){

clearInterval(tmr);

state.working=false;

go('result');

}else{

render();

}

},650);
}

function result(){

return layout(`

<div class="top">

<button
class="back"
onclick="go('create')">
‹
</button>

<div>

<strong>
${t('generatedWork')}
</strong>

<div class="muted">
${t('from')} ${state.sources.length} ${t('sourcesCount')} · English
</div>

</div>

</div>

<h1>
Taste Before Rule: How Rāgānugā Bhakti Begins
</h1>

<p class="muted">
A draft composed from the selected library sources.
</p>

<div class="section">

${
[
'The Gosvāmī literature is unusually precise about where spontaneous devotion starts. It starts with a taste that appears in the heart after hearing about the moods of the residents of Vraja.',
'Viśvanātha Cakravartī makes the sequence explicit: hearing produces greed, greed produces eligibility, and practice then takes the shape of rāgānugā.',
'Continue hearing and singing, keep the association of those in whom the taste is already awake, and let the perfected identity be a matter of meditation rather than announcement.'
]
.map(x=>`<p class="english">${x}</p>`)
.join('')
}

</div>

<div class="card section">

<h3>
${t('sources')}
</h3>

<div
class="muted"
style="margin-top:10px">

${state.sources.map((i,n)=>
`${n+1}. ${BOOKS[i].short} — ${BOOKS[i].author}`
).join('<br>')}

</div>

</div>

<button
class="primary"
onclick="toast('${t('savedToWorks')}')">

${t('saveWork')}

</button>

`);
}

function saved(){

return layout(`

<h2>
${t('saved')}
</h2>

<div class="row">

<div class="num">
A
</div>

<div class="grow">

<div>
Taste Before Rule: How Rāgānugā Bhakti Begins
</div>

<div class="muted">
${state.sources.length} ${t('sourcesCount')} · ${t('draft')}
</div>

</div>

</div>

<div class="row">

<div class="num">
K
</div>

<div class="grow">

<div>
Śrī Rādhā-viraha
</div>

<div class="muted">
Rāga Bhairavī · 6 lines
</div>

</div>

</div>

<div class="row">

<div class="num">
B
</div>

<div class="grow">

<div>
The Two Forms of Practice
</div>

<div class="muted">
Outline · 9 chapters
</div>

</div>

</div>

`);
}

function render(){

root.innerHTML=
state.screen==='library'
?library()
:state.screen==='reader'
?reader()
:state.screen==='search'
?search()
:state.screen==='create'
?create()
:state.screen==='result'
?result()
:saved();

}

const root=document.getElementById('app');

window.go=go;
window.generate=generate;
window.setLanguage=setLanguage;
window.state=state;

render();
