const BOOKS=[
  {
    id:'sample-book',
    short:'Rāgānugā Bhakti — Sample Book',
    author:'Sample Edition',
    script:'English · 2 chapters',
    sample:true
  },
  {
    id:'bhakti-rasamrita-sindhu',
    short:'Bhakti-rasāmṛta-sindhu',
    author:'Rūpa Gosvāmī',
    script:'Sanskrit · 4 divisions'
  },
  {
    id:'raga-vartma-candrika',
    short:'Rāga-vartma-candrikā',
    author:'Viśvanātha Cakravartī',
    script:'Sanskrit · 2 illuminations'
  },
  {
    id:'ujjvala-nilamani',
    short:'Ujjvala-nīlamaṇi',
    author:'Rūpa Gosvāmī',
    script:'Sanskrit · 15 chapters'
  },
  {
    id:'madhurya-kadambini',
    short:'Mādhurya-kādambinī',
    author:'Viśvanātha Cakravartī',
    script:'Sanskrit · 8 showers'
  },
  {
    id:'prema-bhakti-candrika',
    short:'Prema-bhakti-candrikā',
    author:'Narottama dāsa',
    script:'Bengali · 8 rays'
  },
  {
    id:'caitanya-caramrita',
    short:'Caitanya-caritāmṛta',
    author:'Kṛṣṇadāsa Kavirāja',
    script:'Bengali · 3 līlās'
  }
];

const FALLBACK_VERSES=[
  {
    ref:'1.1',
    sanskrit:'ruciḥ bhakti-pathasya hṛdayam',
    transliteration:'ruciḥ bhakti-pathasya hṛdayam',
    english:'Taste is the heart of the devotional path.',
    slovenian:'Okus oziroma notranja naklonjenost je srce poti predanosti.'
  },
  {
    ref:'1.2',
    sanskrit:'śravaṇāt sa bhāvaḥ vardhate',
    transliteration:'śravaṇāt sa bhāvaḥ vardhate',
    english:'Through attentive hearing, that devotional mood gradually becomes stronger.',
    slovenian:'S pozornim poslušanjem se ta notranji odnos postopoma krepi.'
  },
  {
    ref:'2.1',
    sanskrit:'śravaṇaṁ kīrtanaṁ ca',
    transliteration:'śravaṇaṁ kīrtanaṁ ca',
    english:'Hearing and chanting are essential parts of devotional practice.',
    slovenian:'Poslušanje in petje sta bistvena dela predanega duhovnega praktikovanja.'
  },
  {
    ref:'2.2',
    sanskrit:'smaraṇaṁ sevayā saha',
    transliteration:'smaraṇaṁ sevayā saha',
    english:'Remembrance becomes deeper when joined with service.',
    slovenian:'Spominjanje postaja globlje, ko je povezano s služenjem.'
  }
];

const RESULTS=[
  [
    'Rāga-vartma-candrikā',
    '1.5',
    '…rāgānugā bhakti is rooted in taste, and taste follows from hearing of the moods of Vraja…',
    'Sanskrit'
  ],
  [
    'Bhakti-rasāmṛta-sindhu',
    '1.2.270',
    '…detachment is not the mother of this path; taste alone sets it in motion…',
    'Sanskrit'
  ],
  [
    'Mādhurya-kādambinī',
    'Shower 3',
    '…the creeper of devotion, once watered by hearing, bends of its own accord toward Vraja…',
    'Sanskrit'
  ],
  [
    'Prema-bhakti-candrikā',
    'Ray 2',
    '…keep the association of those whose taste is already awake, and your own will follow…',
    'Bengali'
  ],
  [
    'Caitanya-caritāmṛta',
    'Madhya 22.107',
    '…pure love is eternally established in the heart; hearing and chanting only awaken it…',
    'Bengali'
  ]
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
    defaultIntent:'For a Sunday class of newcomers. Keep the Sanskrit terms but explain each one.',
    sampleBook:'Sample book',
    chapters:'chapters',
    chapter:'Chapter',
    previous:'Previous',
    next:'Next',
    loading:'Loading book…',
    bookLoaded:'Book loaded',
    reader:'Reader',
    showScript:'Show Sanskrit',
    hideScript:'Hide Sanskrit',
    bookmark:'Bookmark',
    bookmarked:'Bookmarked',
    bookmarks:'Bookmarks',
    noBookmarks:'No bookmarks yet',
    loadingFailed:'Could not load the sample book.',
    backToLibrary:'Back to Library',
    openBookmark:'Open',
    removeBookmark:'Remove bookmark',
    savedWorks:'Saved works',
    clickToOpen:'Click to open this bookmark',
    removed:'Bookmark removed'
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
    defaultIntent:'Za nedeljski razred začetnikov. Ohranite sanskrtske izraze, vendar vsakega razložite.',
    sampleBook:'Vzorčna knjiga',
    chapters:'poglavij',
    chapter:'Poglavje',
    previous:'Prejšnje',
    next:'Naslednje',
    loading:'Nalaganje knjige…',
    bookLoaded:'Knjiga naložena',
    reader:'Bralnik',
    showScript:'Prikaži sanskrt',
    hideScript:'Skrij sanskrt',
    bookmark:'Zaznamek',
    bookmarked:'Zaznamovano',
    bookmarks:'Zaznamki',
    noBookmarks:'Zaznamkov še ni',
    loadingFailed:'Vzorčne knjige ni bilo mogoče naložiti.',
    backToLibrary:'Nazaj v knjižnico',
    openBookmark:'Odpri',
    removeBookmark:'Odstrani zaznamek',
    savedWorks:'Shranjena dela',
    clickToOpen:'Klikni za odprtje tega zaznamka',
    removed:'Zaznamek odstranjen'
  }
};

let state={
  screen:'library',
  book:0,
  query:'ruci',
  filter:'All books',
  form:'Article',
  sources:[0,1,2,3],
  script:true,
  toast:'',
  working:false,
  step:0,
  intent:'For a Sunday class of newcomers. Keep the Sanskrit terms but explain each one.',
  lang:'en',
  loadedBook:null,
  loadedBookId:null,
  chapter:0,
  bookmarks:[]
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

if(!Array.isArray(state.bookmarks)){
  state.bookmarks=[];
}

function t(key){
  return I18N[state.lang]?.[key] || I18N.en[key] || key;
}

function save(){
  localStorage.setItem(
    'rb-state',
    JSON.stringify(state)
  );
}

function setLanguage(lang){

  state.lang=lang;

  state.intent=
    lang==='sl'
      ? I18N.sl.defaultIntent
      : I18N.en.defaultIntent;

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
    <div class="language-selector">

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
      ].map(([k,i,l])=>`

        <button
          class="${state.screen===k?'active':''}"
          onclick="go('${k}')">

          ${i}

          <small>
            ${l}
          </small>

        </button>

      `).join('')}

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

        ${
          state.toast
          ? `<div class="toast">${state.toast}</div>`
          : ''
        }

      </main>

    </div>
  `;
}

function library(){

  return layout(`

    <div class="eyebrow">
      ${t('library')}
    </div>

    <h1>
      Rāgānugā Bhakti
    </h1>

    <div
      class="section resume"
      onclick="openBook(0)">

      <div class="eyebrow">
        ${t('continue')}
      </div>

      <div class="title">
        Rāgānugā Bhakti — Sample Book
      </div>

      <div class="muted">
        Sample Edition · ${t('sampleBook')}
      </div>

      <div
        class="progress"
        style="margin-top:12px">

        <i
          style="width:${getProgress(0)}%">
        </i>

      </div>

    </div>

    <div class="section">

      <div
        style="
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:12px
        ">

        <h3>
          ${t('books')}
        </h3>

        <span class="muted">
          ${BOOKS.length} ${t('titles')}
        </span>

      </div>

      <div class="grid">

        ${BOOKS.map((b,i)=>`

          <div
            class="book"
            onclick="openBook(${i})">

            <div class="cover">

              <strong>
                ${b.short}
              </strong>

              <span class="muted">
                ${b.script}
              </span>

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
        [
          '4',
          'Sources for the Sunday class',
          '4 books · 11 verses marked',
          'create'
        ],
        [
          '7',
          'On ruci and lobha',
          '7 verses across 3 books',
          'search'
        ],
        [
          '2',
          'Kirtan drafts',
          '2 generated works',
          'saved'
        ]
      ].map(x=>`

        <div
          class="row"
          onclick="go('${x[3]}')">

          <div class="num">
            ${x[0]}
          </div>

          <div class="grow">

            <div>
              ${
                state.lang==='sl'
                ? ({
                    'Sources for the Sunday class':
                      'Viri za nedeljski razred',
                    'On ruci and lobha':
                      'O ruci in lobhi',
                    'Kirtan drafts':
                      'Osnutki kirtana'
                  }[x[1]] || x[1])
                : x[1]
              }
            </div>

            <div class="muted">
              ${
                state.lang==='sl'
                ? ({
                    '4 books · 11 verses marked':
                      '4 knjige · 11 označenih verzov',
                    '7 verses across 3 books':
                      '7 verzov v 3 knjigah',
                    '2 generated works':
                      '2 ustvarjeni deli'
                  }[x[2]] || x[2])
                : x[2]
              }
            </div>

          </div>

          <span>
            ›
          </span>

        </div>

      `).join('')}

    </div>

  `);
}

function openBook(index){

  state.book=index;
  state.chapter=0;

  if(BOOKS[index]?.sample){

    loadSampleBook();

  }else{

    go('reader');

  }
}

async function loadSampleBook(){

  state.loadedBook=null;
  state.loadedBookId='sample-book';
  state.screen='reader';

  save();
  render();

  try{

    const response=await fetch(
      'data/sample-book.json',
      {cache:'no-store'}
    );

    if(!response.ok){

      throw new Error(
        'HTTP '+response.status
      );

    }

    const data=await response.json();

    state.loadedBook=data;
    state.loadedBookId='sample-book';

    if(
      !Array.isArray(state.loadedBook.chapters)
    ){
      state.loadedBook.chapters=[];
    }

    save();
    render();

  }catch(error){

    console.error(
      'Sample book loading error:',
      error
    );

    state.loadedBook={
      id:'sample-book',
      title:'Rāgānugā Bhakti — Sample Book',
      author:'Sample Edition',
      language:'English',

      chapters:[
        {
          id:'chapter-1',
          title:'The Beginning of Taste',
          verses:FALLBACK_VERSES.slice(0,2)
        },
        {
          id:'chapter-2',
          title:'Hearing and Practice',
          verses:FALLBACK_VERSES.slice(2,4)
        }
      ]
    };

    save();
    render();

    setTimeout(()=>{
      toast(t('loadingFailed'));
    },100);

  }
}

function getCurrentBook(){

  if(state.book===0){

    if(state.loadedBook){

      return state.loadedBook;

    }

    return {
      id:'sample-book',
      title:'Rāgānugā Bhakti — Sample Book',
      author:'Sample Edition',
      language:'English',
      chapters:[]
    };

  }

  const meta=BOOKS[state.book];

  return {
    id:meta?.id || '',
    title:meta?.short || '',
    author:meta?.author || '',
    language:meta?.script || '',
    chapters:[]
  };
}

function getProgress(bookIndex){

  const book=BOOKS[bookIndex];

  if(!book){
    return 0;
  }

  const key='rb-progress-'+book.id;

  const value=Number(
    localStorage.getItem(key)||0
  );

  return Math.max(
    0,
    Math.min(100,value)
  );
}

function setProgress(bookId,value){

  const safeValue=Math.max(
    0,
    Math.min(100,Math.round(value))
  );

  localStorage.setItem(
    'rb-progress-'+bookId,
    String(safeValue)
  );
}

function currentChapter(){

  const book=getCurrentBook();

  if(!book.chapters){
    return null;
  }

  return book.chapters[state.chapter] || null;
}

function isBookmarked(ref){

  return state.bookmarks.some(
    b=>
      b.bookId==='sample-book' &&
      Number(b.chapter)===Number(state.chapter) &&
      b.ref===ref
  );
}

function toggleBookmark(ref){

  const existing=
    state.bookmarks.findIndex(
      b=>
        b.bookId==='sample-book' &&
        Number(b.chapter)===Number(state.chapter) &&
        b.ref===ref
    );

  if(existing>=0){

    state.bookmarks.splice(existing,1);

    save();

    toast(t('bookmark'));

  }else{

    const book=getCurrentBook();
    const chapter=currentChapter();

    const verse=
      chapter?.verses?.find(
        v=>v.ref===ref
      );

    state.bookmarks.push({

      bookId:'sample-book',

      bookTitle:
        book?.title ||
        'Rāgānugā Bhakti — Sample Book',

      author:
        book?.author ||
        'Sample Edition',

      chapter:Number(state.chapter)||0,

      chapterTitle:
        chapter?.title ||
        '',

      ref:String(ref),

      english:
        verse?.english ||
        '',

      slovenian:
        verse?.slovenian ||
        '',

      sanskrit:
        verse?.sanskrit ||
        '',

      transliteration:
        verse?.transliteration ||
        '',

      created:new Date().toISOString()

    });

    save();

    toast(t('bookmarked'));

  }

  render();
}

async function openBookmark(index){

  const bookmark=
    state.bookmarks[index];

  if(!bookmark){
    return;
  }

  /*
    Vedno uporabljamo sample-book,
    ker je to trenutno edina knjiga,
    ki ima dejansko vsebino v JSON datoteki.
  */

  state.book=0;
  state.loadedBookId='sample-book';
  state.chapter=
    Number(bookmark.chapter)||0;
  state.screen='reader';

  save();
  render();

  await loadSampleBook();

  /*
    loadSampleBook ponovno naloži JSON.
    Zato poglavje nastavimo še enkrat
    po končanem nalaganju.
  */

  state.book=0;
  state.loadedBookId='sample-book';

  const chapterCount=
    state.loadedBook?.chapters?.length || 0;

  if(chapterCount>0){

    state.chapter=Math.max(
      0,
      Math.min(
        Number(bookmark.chapter)||0,
        chapterCount-1
      )
    );

  }else{

    state.chapter=0;

  }

  state.screen='reader';

  save();
  render();

  /*
    Poskusimo po kratkem zamiku
    pripeljati uporabnika do konkretnega verza.
  */

  setTimeout(()=>{

    const ref=String(bookmark.ref||'');

    if(!ref){
      return;
    }

    const elements=
      document.querySelectorAll('.verse');

    for(const element of elements){

      const refElement=
        element.querySelector('.ref');

      if(
        refElement &&
        refElement.textContent.trim()===ref
      ){

        element.scrollIntoView({
          behavior:'smooth',
          block:'center'
        });

        break;
      }

    }

  },100);

}

function removeBookmark(index){

  if(
    index<0 ||
    index>=state.bookmarks.length
  ){
    return;
  }

  state.bookmarks.splice(index,1);

  save();

  render();

  toast(t('removed'));
}

function previousChapter(){

  if(state.chapter>0){

    state.chapter--;

    updateReadingProgress();

    save();
    render();

  }

}

function nextChapter(){

  const book=getCurrentBook();

  if(
    book.chapters &&
    state.chapter<book.chapters.length-1
  ){

    state.chapter++;

    updateReadingProgress();

    save();
    render();

  }else{

    updateReadingProgress();

    toast(t('endSection'));

  }
}

function updateReadingProgress(){

  const book=getCurrentBook();

  if(
    !book ||
    !book.chapters ||
    book.chapters.length===0
  ){

    return;

  }

  const progress=
    ((state.chapter+1)/
    book.chapters.length)*100;

  setProgress(
    book.id || 'sample-book',
    progress
  );
}

function reader(){

  const b=BOOKS[state.book];

  if(!b){

    return layout(`

      <h2>
        ${t('reader')}
      </h2>

      <div class="muted">
        ${t('loading')}
      </div>

    `);

  }

  if(
    b.sample &&
    !state.loadedBook
  ){

    return layout(`

      <div class="top">

        <button
          class="back"
          onclick="go('library')">
          ‹
        </button>

        <div style="flex:1">

          <strong>
            ${b.short}
          </strong>

          <div class="muted">
            ${b.author}
          </div>

        </div>

      </div>

      <div class="working">

        <div class="dot"></div>

        <h2 style="margin-top:20px">
          ${t('loading')}
        </h2>

        <div class="muted">
          data/sample-book.json
        </div>

      </div>

    `);

  }

  const book=getCurrentBook();

  const chapter=currentChapter();

  if(!chapter){

    return layout(`

      <div class="top">

        <button
          class="back"
          onclick="go('library')">
          ‹
        </button>

        <div style="flex:1">

          <strong>
            ${book.title}
          </strong>

          <div class="muted">
            ${book.author}
          </div>

        </div>

      </div>

      <div class="muted">
        ${t('loading')}
      </div>

    `);

  }

  const progress=
    book.chapters.length
    ? Math.round(
        ((state.chapter+1)/
        book.chapters.length)*100
      )
    : 0;

  return layout(`

    <div class="top">

      <button
        class="back"
        onclick="go('library')">
        ‹
      </button>

      <div style="flex:1">

        <strong>
          ${book.title}
        </strong>

        <div class="muted">
          ${book.author}
        </div>

      </div>

      <button
        class="chip ${state.script?'on':''}"
        onclick="
          state.script=!state.script;
          save();
          render();
        ">

        ${
          state.script
          ? 'A अ'
          : 'A'
        }

      </button>

    </div>

    <div
      class="muted"
      style="
        display:flex;
        justify-content:space-between;
        margin-bottom:18px
      ">

      <span>
        ${t('chapter')}
        ${state.chapter+1}
        /
        ${book.chapters.length}
      </span>

      <span>
        ${progress}%
      </span>

    </div>

    <div
      class="progress"
      style="margin-bottom:28px">

      <i style="width:${progress}%"></i>

    </div>

    <h2>
      ${chapter.title}
    </h2>

    <div class="section">

      ${
        (chapter.verses || []).map(v=>`

          <div
            class="verse"
            onclick="
              toggleBookmark(
                '${escapeAttribute(v.ref)}'
              )
            "
            style="
              cursor:pointer;
              position:relative
            ">

            <div
              style="
                display:flex;
                justify-content:space-between;
                align-items:center
              ">

              <div class="ref">
                ${v.ref}
              </div>

              <div
                class="muted"
                style="
                  font-size:18px;
                  line-height:1
                ">

                ${
                  isBookmarked(v.ref)
                  ? '★'
                  : '☆'
                }

              </div>

            </div>

            ${
              state.script
              ? `

                <div class="deva">
                  ${v.sanskrit || ''}
                </div>

                <div class="translit">
                  ${v.transliteration || ''}
                </div>

              `
              : ''
            }

            <div class="english">

              ${
                state.lang==='sl'
                ? (
                    v.slovenian ||
                    v.english ||
                    ''
                  )
                : (
                    v.english ||
                    ''
                  )
              }

            </div>

            ${
              v.note
              ? `
                <div class="note">
                  ${v.note}
                </div>
              `
              : ''
            }

          </div>

        `).join('')
      }

    </div>

    <div
      style="
        display:flex;
        gap:10px;
        margin-top:30px;
        max-width:950px
      ">

      <button
        class="chip"
        style="flex:1;padding:12px"
        onclick="previousChapter()">

        ‹ ${t('previous')}

      </button>

      <button
        class="chip on"
        style="flex:1;padding:12px"
        onclick="nextChapter()">

        ${t('next')} ›

      </button>

    </div>

    <div
      class="muted"
      style="
        text-align:center;
        margin-top:20px
      ">

      ${t('bookmark')}:
      ${
        state.bookmarks.filter(
          x=>x.bookId==='sample-book'
        ).length
      }

    </div>

  `);
}

function search(){

  const q=
    state.query.toLowerCase();

  const rs=
    RESULTS.filter(r=>
      (
        r.join(' ')
          .toLowerCase()
          .includes(q)
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

    <h2>
      ${t('search')}
    </h2>

    <input
      class="search"
      value="${escapeAttribute(state.query)}"
      oninput="
        state.query=this.value;
        save();
        render();
      "
      placeholder="${t('acrossBooks')}">

    <div class="chips">

      ${[
        'All books',
        'Sanskrit',
        'Bengali'
      ].map(f=>`

        <button
          class="chip ${state.filter===f?'on':''}"
          onclick="
            state.filter='${f}';
            save();
            render();
          ">

          ${
            f==='All books'
            ? t('allBooks')
            : f
          }

        </button>

      `).join('')}

    </div>

    <div
      class="muted"
      style="margin-bottom:8px">

      ${rs.length}
      ${t('passages')}

    </div>

    ${
      rs.length

      ?

      rs.map(r=>`

        <div
          class="result"
          onclick="
            state.book=
              BOOKS.findIndex(
                b=>r[0]===b.short
              );
            go('reader');
          ">

          <div class="booktitle">
            ${r[0]} · ${r[1]}
          </div>

          <div class="muted">
            ${r[3]}
          </div>

          <div
            style="
              font-size:13px;
              line-height:1.55;
              margin-top:4px
            ">

            ${r[2]}

          </div>

        </div>

      `).join('')

      :

      `<div class="muted">
        ${t('noResults')}
      </div>`
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

    'Article':
      state.lang==='sl'
      ? 'Članek'
      : 'Article',

    'New book':
      state.lang==='sl'
      ? 'Nova knjiga'
      : 'New book',

    'Poetic recitation':
      state.lang==='sl'
      ? 'Pesniška recitacija'
      : 'Poetic recitation',

    'Song lyrics':
      state.lang==='sl'
      ? 'Besedilo pesmi'
      : 'Song lyrics',

    'Study notes':
      state.lang==='sl'
      ? 'Študijski zapiski'
      : 'Study notes',

    'Daily reflection':
      state.lang==='sl'
      ? 'Dnevni razmislek'
      : 'Daily reflection',

    'Q&A':
      state.lang==='sl'
      ? 'Vprašanja in odgovori'
      : 'Q&A',

    'Class outline':
      state.lang==='sl'
      ? 'Oris predavanja'
      : 'Class outline'

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
            onclick="
              state.form='${f}';
              save();
              render();
            ">

            ${formTranslations[f]}

          </button>

        `).join('')}

      </div>

    </div>

    <div class="card">

      <h3>
        ${t('sources')}
      </h3>

      ${state.sources.map(i=>{

        const book=BOOKS[i];

        if(!book){
          return '';
        }

        return `

          <div class="source">

            <span>
              ${book.short}
            </span>

            <button
              class="remove"
              onclick="
                state.sources=
                  state.sources.filter(
                    x=>x!==${i}
                  );
                save();
                render();
              ">

              ${t('remove')}

            </button>

          </div>

        `;

      }).join('')}

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
        oninput="
          state.intent=this.value;
          save();
        ">${state.intent}</textarea>

    </div>

    <button
      class="primary"
      onclick="generate()">

      ${t('generate')}
      ${formTranslations[state.form]}

    </button>

  `);
}

function generate(){

  state.working=true;
  state.step=0;

  render();

  const timer=setInterval(()=>{

    state.step++;

    if(state.step>=4){

      clearInterval(timer);

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
          ${t('from')}
          ${state.sources.length}
          ${t('sourcesCount')}
          · English
        </div>

      </div>

    </div>

    <h1>
      Taste Before Rule:
      How Rāgānugā Bhakti Begins
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
        .map(x=>`
          <p class="english">
            ${x}
          </p>
        `)
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

        ${
          state.sources.map((i,n)=>
            `${n+1}. ${BOOKS[i]?.short || ''} — ${BOOKS[i]?.author || ''}`
          ).join('<br>')
        }

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

  const bookmarks=
    Array.isArray(state.bookmarks)
      ? state.bookmarks
      : [];

  return layout(`

    <div class="eyebrow">
      ${t('savedWorks')}
    </div>

    <h2>
      ${t('saved')}
    </h2>

    <div class="section">

      <div
        class="card"
        style="
          padding:18px;
          margin-bottom:0
        ">

        <h3>
          ${t('bookmarks')}
        </h3>

        <div
          class="muted"
          style="margin-top:6px">

          ${bookmarks.length}

        </div>

      </div>

    </div>

    ${
      bookmarks.length===0

      ?

      `
        <div
          class="muted"
          style="
            padding:30px 10px;
            text-align:center
          ">

          ${t('noBookmarks')}

        </div>
      `

      :

      bookmarks.map((b,i)=>{

        /*
          Podpora za stare zaznamke:
          če je bil zaznamek ustvarjen s staro
          verzijo aplikacije, lahko nima bookTitle,
          chapterTitle ali text.
        */

        const bookTitle=
          b.bookTitle ||
          'Rāgānugā Bhakti — Sample Book';

        const chapterTitle=
          b.chapterTitle ||
          (
            Number(b.chapter)===1
              ? 'Hearing and Practice'
              : 'The Beginning of Taste'
          );

        const ref=
          b.ref ||
          '';

        const displayText=
          state.lang==='sl'
            ? (
                b.slovenian ||
                b.text ||
                b.english ||
                ''
              )
            : (
                b.english ||
                b.text ||
                b.slovenian ||
                ''
              );

        return `

          <div
            class="row"
            onclick="openBookmark(${i})"
            style="
              align-items:flex-start;
              cursor:pointer;
              margin-bottom:10px
            ">

            <div
              class="num"
              style="
                font-size:20px
              ">

              ★

            </div>

            <div class="grow">

              <div
                style="
                  font-weight:600;
                  margin-bottom:4px
                ">

                ${bookTitle}

              </div>

              <div class="muted">

                ${chapterTitle}
                ·
                ${ref}

              </div>

              ${
                displayText
                ? `
                  <div
                    style="
                      font-size:13px;
                      line-height:1.55;
                      margin-top:8px
                    ">

                    ${displayText}

                  </div>
                `
                : ''
              }

              <div
                class="muted"
                style="
                  font-size:11px;
                  margin-top:8px
                ">

                ${t('clickToOpen')}

              </div>

              <div
                style="
                  display:flex;
                  gap:8px;
                  margin-top:10px;
                  flex-wrap:wrap
                ">

                <button
                  class="chip on"
                  onclick="
                    event.stopPropagation();
                    openBookmark(${i});
                  ">

                  ${t('openBookmark')}

                </button>

                <button
                  class="chip"
                  onclick="
                    event.stopPropagation();
                    removeBookmark(${i});
                  ">

                  ${t('removeBookmark')}

                </button>

              </div>

            </div>

          </div>

        `;

      }).join('')
    }

    <div class="section">

      <div
        class="row"
        onclick="go('result')">

        <div class="num">
          A
        </div>

        <div class="grow">

          <div>
            Taste Before Rule:
            How Rāgānugā Bhakti Begins
          </div>

          <div class="muted">
            ${state.sources.length}
            ${t('sourcesCount')}
            · ${t('draft')}
          </div>

        </div>

      </div>

    </div>

  `);
}

function escapeAttribute(value){

  return String(value)
    .replace(/\\/g,'\\\\')
    .replace(/'/g,"\\'");
}

function render(){

  const root=
    document.getElementById('app');

  if(!root){
    return;
  }

  root.innerHTML=

    state.screen==='library'
      ? library()

    : state.screen==='reader'
      ? reader()

    : state.screen==='search'
      ? search()

    : state.screen==='create'
      ? create()

    : state.screen==='result'
      ? result()

    : saved();
}

window.go=go;
window.generate=generate;
window.setLanguage=setLanguage;
window.openBook=openBook;
window.previousChapter=previousChapter;
window.nextChapter=nextChapter;
window.toggleBookmark=toggleBookmark;
window.openBookmark=openBookmark;
window.removeBookmark=removeBookmark;
window.loadSampleBook=loadSampleBook;
window.state=state;

render();
