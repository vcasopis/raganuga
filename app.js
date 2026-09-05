const BOOKS = [
    {
    id: 'bhakti-rasamrita-sindhu',
    short: 'Bhakti-rasāmṛta-sindhu',
    author: 'Rūpa Gosvāmī',
    script: 'Sanskrit · 4 divisions',
    pdf: 'books/Bhakti-rasāmṛta-sindhu.pdf'
  },
  {
    id: 'raga-vartma-candrika',
    short: 'Rāga-vartma-candrikā',
    author: 'Viśvanātha Cakravartī',
    script: 'Sanskrit · 2 illuminations',
    pdf: 'books/RagaVartmaCandrika_eng_2nd_ed.pdf'
  },
  {
    id: 'ujjvala-nilamani',
    short: 'Ujjvala-nīlamaṇi',
    author: 'Rūpa Gosvāmī',
    script: 'Sanskrit · 15 chapters',
    pdf: 'books/Ujjvala-nilamani-kirana_1Ed_2013.pdf'
  },
  {
    id: 'madhurya-kadambini',
    short: 'Mādhurya-kādambinī',
    author: 'Viśvanātha Cakravartī',
    script: 'Sanskrit · 8 showers',
    pdf: 'books/Madhurya-kadambini-eng-1ed.pdf'
  },
  {
    id: 'prema-bhakti-candrika',
    short: 'Prema-bhakti-candrikā',
    author: 'Narottama dāsa',
    script: 'Bengali · 8 rays',
    pdf: 'books/Sri_Prema_Bhakti_Candrika.pdf'
  },
  {
    id: 'caitanya-caramitamrita',
    short: 'Caitanya-caritāmṛta',
    author: 'Kṛṣṇadāsa Kavirāja',
    script: 'Bengali · 3 līlās',
    pdfs: [
      {
        id: 'adi-lila',
        title: 'Ādi-līlā',
        file: 'books/Sri Caitanya-cartamrta Adi-lila.pdf'
      },
      {
        id: 'madhya-lila',
        title: 'Madhya-līlā',
        file: 'books/Sri Caitanya-cartamrta Madhya-lila.pdf'
      },
      {
        id: 'antya-lila',
        title: 'Antya-līlā',
        file: 'books/Sri Caitanya-cartamrta Antya-lila.pdf'
      }
    ]
  }
];


const FALLBACK_BOOK = {
  id: 'sample-book',
  title: 'Rāgānugā Bhakti — Sample Book',
  author: 'Sample Edition',
  language: 'English',
  chapters: [
    {
      id: 'chapter-1',
      title: 'The Beginning of Taste',
      verses: [
        {
          ref: '1.1',
          sanskrit: 'ruciḥ bhakti-pathasya hṛdayam',
          transliteration: 'ruciḥ bhakti-pathasya hṛdayam',
          english: 'Taste is the heart of the devotional path.',
          slovenian: 'Okus oziroma notranja naklonjenost je srce poti predanosti.'
        },
        {
          ref: '1.2',
          sanskrit: 'śravaṇāt sa bhāvaḥ vardhate',
          transliteration: 'śravaṇāt sa bhāvaḥ vardhate',
          english: 'Through attentive hearing, that devotional mood gradually becomes stronger.',
          slovenian: 'S pozornim poslušanjem se ta notranji odnos postopoma krepi.'
        }
      ]
    },
    {
      id: 'chapter-2',
      title: 'Hearing and Practice',
      verses: [
        {
          ref: '2.1',
          sanskrit: 'śravaṇaṁ kīrtanaṁ ca',
          transliteration: 'śravaṇaṁ kīrtanaṁ ca',
          english: 'Hearing and chanting are essential parts of devotional practice.',
          slovenian: 'Poslušanje in petje sta bistvena dela predanega duhovnega praktikovanja.'
        },
        {
          ref: '2.2',
          sanskrit: 'smaraṇaṁ sevayā saha',
          transliteration: 'smaraṇaṁ sevayā saha',
          english: 'Remembrance becomes deeper when joined with service.',
          slovenian: 'Spominjanje postaja globlje, ko je povezano s služenjem.'
        }
      ]
    }
  ]
};


const FORMS = [
  'Article',
  'New book',
  'Poetic recitation',
  'Song lyrics',
  'Study notes',
  'Daily reflection',
  'Q&A',
  'Class outline'
];


const I18N = {
  en: {
    library: 'Library',
    search: 'Search',
    create: 'Create',
    saved: 'My works',
    books: 'Loaded books',
    titles: 'titles',
    collections: 'Collections',
    continue: 'Continue',
    sources: 'Sources',
    findSources: 'Find sources',
    remove: 'Remove',
    intent: 'Intent',
    form: 'Form',
    generateWork: 'Generate a work',
    generate: 'Generate',
    generatedWork: 'Generated work',
    from: 'From',
    saveWork: 'Save work',
    allBooks: 'All books',
    passages: 'passages',
    acrossBooks: 'Search loaded books…',
    endSection: 'End of section',
    versesMarked: 'verses marked',
    firstIllumination: 'First illumination',
    newBook: 'New book',
    poeticRecitation: 'Poetic recitation',
    songLyrics: 'Song lyrics',
    studyNotes: 'Study notes',
    dailyReflection: 'Daily reflection',
    classOutline: 'Class outline',
    readingSelected: 'Reading selected sources',
    gathering: 'Gathering relevant passages',
    composing: 'Composing in the chosen form',
    assembling: 'Assembling the source list',
    savedToWorks: 'Saved to My works',
    english: 'English',
    slovenian: 'Slovenščina',
    sourcesCount: 'sources',
    draft: 'draft',
    noResults: 'No passages found',
    searching: 'Preparing the library search…',
    defaultIntent: 'For a Sunday class of newcomers. Keep the Sanskrit terms but explain each one.',
    sampleBook: 'Sample book',
    chapters: 'chapters',
    chapter: 'Chapter',
    previous: 'Previous',
    next: 'Next',
    loading: 'Loading book…',
    bookLoaded: 'Book loaded',
    reader: 'Reader',
    showScript: 'Show Sanskrit',
    hideScript: 'Hide Sanskrit',
    bookmark: 'Bookmark',
    bookmarked: 'Bookmarked',
    removed: 'Bookmark removed',
    loadingFailed: 'Could not load the sample book.',
    backToLibrary: 'Back to Library',
    noBookmarks: 'No bookmarks yet.',
    openBookmark: 'Open',
    removeBookmark: 'Remove bookmark',
    savedWorks: 'Saved works',
    resultIn: 'in',
    chapterResult: 'Chapter',
    searchHint: 'Search Sanskrit, transliteration, English or Slovenian text.',
    openPdf: 'Open PDF',
    choosePart: 'Choose a part',
    adiLila: 'Ādi-līlā',
    madhyaLila: 'Madhya-līlā',
    antyaLila: 'Antya-līlā',
    pagesIndexed: 'indexed pages',
    preparingSearch: 'Preparing search index…',
    searchReady: 'Library search ready',
    rebuildingSearch: 'Building the library index…',
    pdfPage: 'PDF · page',
    openPage: 'Open page',
    indexedPages: 'Indexed pages'
  },

  sl: {
    library: 'Knjižnica',
    search: 'Iskanje',
    create: 'Ustvari',
    saved: 'Moja dela',
    books: 'Naložene knjige',
    titles: 'naslovov',
    collections: 'Zbirke',
    continue: 'Nadaljuj',
    sources: 'Viri',
    findSources: 'Poišči vire',
    remove: 'Odstrani',
    intent: 'Namen',
    form: 'Oblika',
    generateWork: 'Ustvari delo',
    generate: 'Ustvari',
    generatedWork: 'Ustvarjeno delo',
    from: 'Iz',
    saveWork: 'Shrani delo',
    allBooks: 'Vse knjige',
    passages: 'odlomkov',
    acrossBooks: 'Išči po naloženih knjigah…',
    endSection: 'Konec odseka',
    versesMarked: 'označenih verzov',
    firstIllumination: 'Prva iluminacija',
    newBook: 'Nova knjiga',
    poeticRecitation: 'Pesniška recitacija',
    songLyrics: 'Besedilo pesmi',
    studyNotes: 'Študijski zapiski',
    dailyReflection: 'Dnevni razmislek',
    classOutline: 'Oris predavanja',
    readingSelected: 'Branje izbranih virov',
    gathering: 'Iskanje ustreznih odlomkov',
    composing: 'Sestavljanje v izbrani obliki',
    assembling: 'Pripravljanje seznama virov',
    savedToWorks: 'Shranjeno med Moja dela',
    english: 'English',
    slovenian: 'Slovenščina',
    sourcesCount: 'virov',
    draft: 'osnutek',
    noResults: 'Odlomkov ni bilo mogoče najti',
    searching: 'Pripravljam iskanje po knjižnici…',
    defaultIntent: 'Za nedeljski razred začetnikov. Ohranite sanskrtske izraze, vendar vsakega razložite.',
    sampleBook: 'Vzorčna knjiga',
    chapters: 'poglavij',
    chapter: 'Poglavje',
    previous: 'Prejšnje',
    next: 'Naslednje',
    loading: 'Nalaganje knjige…',
    bookLoaded: 'Knjiga naložena',
    reader: 'Bralnik',
    showScript: 'Prikaži sanskrt',
    hideScript: 'Skrij sanskrt',
    bookmark: 'Zaznamek',
    bookmarked: 'Zaznamovano',
    removed: 'Zaznamek odstranjen',
    loadingFailed: 'Vzorčne knjige ni bilo mogoče naložiti.',
    backToLibrary: 'Nazaj v knjižnico',
    noBookmarks: 'Zaenkrat ni zaznamkov.',
    openBookmark: 'Odpri',
    removeBookmark: 'Odstrani zaznamek',
    savedWorks: 'Shranjena dela',
    resultIn: 'v',
    chapterResult: 'Poglavje',
    searchHint: 'Išči po sanskrtu, transliteraciji, angleškem ali slovenskem besedilu.',
    openPdf: 'Odpri PDF',
    choosePart: 'Izberi del',
    adiLila: 'Ādi-līlā',
    madhyaLila: 'Madhya-līlā',
    antyaLila: 'Antya-līlā',
    pagesIndexed: 'indeksiranih strani',
    preparingSearch: 'Pripravljam iskalni indeks…',
    searchReady: 'Iskanje po knjižnici je pripravljeno',
    rebuildingSearch: 'Gradim indeks knjižnice…',
    pdfPage: 'PDF · stran',
    openPage: 'Odpri stran',
    indexedPages: 'Indeksirane strani'
  }
};


let state = {
  screen: 'library',
  book: 0,
  query: '',
  filter: 'All books',
  form: 'Article',
  sources: [0, 1, 2, 3],
  script: true,
  toast: '',
  working: false,
  step: 0,
  intent: 'For a Sunday class of newcomers. Keep the Sanskrit terms but explain each one.',
  lang: 'en',
  loadedBook: null,
  loadedBookId: null,
  chapter: 0,
  bookmarks: [],
  searchIndex: [],
  searchReady: false,
  searchLoading: false
};


try {
  Object.assign(
    state,
    JSON.parse(localStorage.getItem('rb-state') || '{}')
  );
} catch (e) {}


if (!state.lang) {
  state.lang = 'en';
}

if (!Array.isArray(state.bookmarks)) {
  state.bookmarks = [];
}

if (!Array.isArray(state.sources)) {
  state.sources = [0, 1, 2, 3];
}


function t(key) {
  return I18N[state.lang]?.[key] || I18N.en[key] || key;
}


function save() {
  try {
    const savedState = {
      screen: state.screen,
      book: state.book,
      query: state.query,
      filter: state.filter,
      form: state.form,
      sources: state.sources,
      script: state.script,
      toast: state.toast,
      working: state.working,
      step: state.step,
      intent: state.intent,
      lang: state.lang,
      loadedBook: state.loadedBook,
      loadedBookId: state.loadedBookId,
      chapter: state.chapter,
      bookmarks: state.bookmarks
    };

    localStorage.setItem(
      'rb-state',
      JSON.stringify(savedState)
    );
  } catch (error) {
    console.warn(
      'Could not save app state:',
      error
    );
  }
}


function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


function escapeAttribute(value) {
  return String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'");
}


function setLanguage(lang) {
  state.lang = lang;

  state.intent =
    lang === 'sl'
      ? I18N.sl.defaultIntent
      : I18N.en.defaultIntent;

  save();
  render();
}


function go(screen) {

  /*
    IMPORTANT:
    If the user leaves Search, cancel any pending
    request that would put the focus back into
    the Search field.
  */

  if (typeof searchFocusFrame !== 'undefined' &&
      searchFocusFrame !== null) {

    cancelAnimationFrame(
      searchFocusFrame
    );

    searchFocusFrame = null;
  }

  state.screen = screen;

  save();
  render();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


function toast(message) {
  state.toast = message;
  render();

  setTimeout(() => {
    state.toast = '';
    render();
  }, 1800);
}


function languageSelector() {
  return `
    <div class="language-selector">

      <button
        class="chip ${state.lang === 'en' ? 'on' : ''}"
        onclick="setLanguage('en')">
        🇬🇧 EN
      </button>

      <button
        class="chip ${state.lang === 'sl' ? 'on' : ''}"
        onclick="setLanguage('sl')">
        🇸🇮 SL
      </button>

    </div>
  `;
}


function nav() {
  return `
    <nav class="nav">

      ${[
        ['library', '▦', t('library')],
        ['search', '⌕', t('search')],
        ['create', '✦', t('create')],
        ['saved', '♡', t('saved')]
      ].map(([key, icon, label]) => `
        <button
          class="${state.screen === key ? 'active' : ''}"
          onclick="go('${key}')">

          ${icon}
          <small>${label}</small>

        </button>
      `).join('')}

    </nav>
  `;
}


function layout(body) {
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
            ? `<div class="toast">${escapeHtml(state.toast)}</div>`
            : ''
        }

      </main>

    </div>
  `;
}


/* =========================================================
   LIBRARY
   ========================================================= */

function library() {
  return layout(`

    <div class="eyebrow">
      ${t('library')}
    </div>

    <h1>
      Rāgānugā Bhakti
    </h1>

    


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

        ${BOOKS.map((book, index) => `

          <div
            class="book"
            onclick="openBook(${index})">

            <div class="cover">

              <strong>
                ${escapeHtml(book.short)}
              </strong>

              <span class="muted">
                ${escapeHtml(book.script)}
              </span>

            </div>

            <div class="bookname">
              ${escapeHtml(book.author)}
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
      ].map(item => `

        <div
          class="row"
          onclick="go('${item[3]}')">

          <div class="num">
            ${item[0]}
          </div>

          <div class="grow">

            <div>
              ${
                state.lang === 'sl'
                  ? ({
                      'Sources for the Sunday class':
                        'Viri za nedeljski razred',
                      'On ruci and lobha':
                        'O ruci in lobhi',
                      'Kirtan drafts':
                        'Osnutki kirtana'
                    }[item[1]] || item[1])
                  : item[1]
              }
            </div>

            <div class="muted">

              ${
                state.lang === 'sl'
                  ? ({
                      '4 books · 11 verses marked':
                        '4 knjige · 11 označenih verzov',
                      '7 verses across 3 books':
                        '7 verzov v 3 knjigah',
                      '2 generated works':
                        '2 ustvarjeni deli'
                    }[item[2]] || item[2])
                  : item[2]
              }

            </div>

          </div>

          <span>›</span>

        </div>

      `).join('')}

    </div>

  `);
}


/* =========================================================
   BOOK OPENING
   ========================================================= */

function openBook(index) {
  state.book = index;
  state.chapter = 0;

  const book = BOOKS[index];

  if (!book) {
    return;
  }

  if (book.sample) {
    loadSampleBook();
    return;
  }

  if (Array.isArray(book.pdfs) && book.pdfs.length) {
    state.screen = 'reader';
    save();
    render();
    return;
  }

  if (book.pdf) {
    save();

    window.open(
      book.pdf,
      '_blank',
      'noopener,noreferrer'
    );

    return;
  }

  go('reader');
}


function openPdf(file, page) {
  if (!file) {
    return;
  }

  const target =
    page
      ? file + '#page=' + encodeURIComponent(page)
      : file;

  window.open(
    target,
    '_blank',
    'noopener,noreferrer'
  );
}


async function loadSampleBook() {
  state.loadedBook = null;
  state.loadedBookId = 'sample-book';
  state.screen = 'reader';

  save();
  render();

  try {
    const response = await fetch(
      'data/sample-book.json',
      {
        cache: 'no-store'
      }
    );

    if (!response.ok) {
      throw new Error(
        'HTTP ' + response.status
      );
    }

    const data = await response.json();

    state.loadedBook = data;
    state.loadedBookId =
      data.id || 'sample-book';

    if (
      state.chapter < 0 ||
      state.chapter >=
        (data.chapters || []).length
    ) {
      state.chapter = 0;
    }

    save();
    render();

  } catch (error) {

    console.error(
      'Sample book loading error:',
      error
    );

    state.loadedBook = FALLBACK_BOOK;
    state.loadedBookId = 'sample-book';

    save();
    render();

    setTimeout(() => {
      toast(t('loadingFailed'));
    }, 100);
  }
}


function getCurrentBook() {

  if (state.book === 0) {

    if (state.loadedBook) {
      return state.loadedBook;
    }

    return FALLBACK_BOOK;
  }

  const meta = BOOKS[state.book];

  return {
    id: meta?.id || '',
    title: meta?.short || '',
    author: meta?.author || '',
    language: meta?.script || '',
    chapters: []
  };
}


/* =========================================================
   PROGRESS
   ========================================================= */

function getProgress(bookIndex) {

  const book = BOOKS[bookIndex];

  if (!book) {
    return 0;
  }

  const value = Number(
    localStorage.getItem(
      'rb-progress-' + book.id
    ) || 0
  );

  return Math.max(
    0,
    Math.min(100, value)
  );
}


function setProgress(bookId, value) {

  const safeValue = Math.max(
    0,
    Math.min(
      100,
      Math.round(value)
    )
  );

  localStorage.setItem(
    'rb-progress-' + bookId,
    String(safeValue)
  );
}


function updateReadingProgress() {

  const book = getCurrentBook();

  if (
    !book ||
    !Array.isArray(book.chapters) ||
    book.chapters.length === 0
  ) {
    return;
  }

  const progress =
    ((state.chapter + 1) /
      book.chapters.length) *
    100;

  setProgress(
    book.id || 'sample-book',
    progress
  );
}


function currentChapter() {

  const book = getCurrentBook();

  if (
    !book ||
    !Array.isArray(book.chapters)
  ) {
    return null;
  }

  return (
    book.chapters[state.chapter] ||
    null
  );
}


/* =========================================================
   BOOKMARKS
   ========================================================= */

function isBookmarked(ref) {

  return state.bookmarks.some(
    bookmark =>
      bookmark.bookId ===
        state.loadedBookId &&
      Number(bookmark.chapter) ===
        Number(state.chapter) &&
      String(bookmark.ref) ===
        String(ref)
  );
}


function toggleBookmark(ref) {

  const existing =
    state.bookmarks.findIndex(
      bookmark =>
        bookmark.bookId ===
          state.loadedBookId &&
        Number(bookmark.chapter) ===
          Number(state.chapter) &&
        String(bookmark.ref) ===
          String(ref)
    );

  if (existing >= 0) {

    state.bookmarks.splice(
      existing,
      1
    );

    save();
    render();

    setTimeout(() => {
      toast(t('removed'));
    }, 50);

    return;
  }

  const book = getCurrentBook();
  const chapter = currentChapter();

  const verse =
    (chapter?.verses || []).find(
      item =>
        String(item.ref) ===
        String(ref)
    );

  state.bookmarks.push({

    bookId:
      state.loadedBookId ||
      book.id ||
      'sample-book',

    bookTitle:
      book.title ||
      'Rāgānugā Bhakti — Sample Book',

    author:
      book.author ||
      'Sample Edition',

    chapter:
      Number(state.chapter),

    chapterTitle:
      chapter?.title || '',

    ref:
      String(ref),

    english:
      verse?.english || '',

    slovenian:
      verse?.slovenian || '',

    sanskrit:
      verse?.sanskrit || '',

    transliteration:
      verse?.transliteration || '',

    created:
      new Date().toISOString()
  });

  save();
  render();

  setTimeout(() => {
    toast(t('bookmarked'));
  }, 50);
}


function previousChapter() {

  if (state.chapter > 0) {

    state.chapter--;

    updateReadingProgress();

    save();
    render();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}


function nextChapter() {

  const book = getCurrentBook();

  if (
    book.chapters &&
    state.chapter <
      book.chapters.length - 1
  ) {

    state.chapter++;

    updateReadingProgress();

    save();
    render();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  } else {

    updateReadingProgress();

    toast(t('endSection'));
  }
}


/* =========================================================
   READER
   ========================================================= */

function reader() {

  const meta = BOOKS[state.book];

  if (!meta) {

    return layout(`
      <h2>${t('reader')}</h2>

      <div class="muted">
        ${t('loading')}
      </div>
    `);
  }


  if (
    Array.isArray(meta.pdfs) &&
    meta.pdfs.length
  ) {

    return layout(`

      <div class="top">

        <button
          class="back"
          onclick="go('library')">
          ‹
        </button>

        <div style="flex:1">

          <strong>
            ${escapeHtml(meta.short)}
          </strong>

          <div class="muted">
            ${escapeHtml(meta.author)}
          </div>

        </div>

      </div>


      <div class="section">

        <div class="eyebrow">
          ${t('reader')}
        </div>

        <h2>
          ${escapeHtml(meta.short)}
        </h2>

        <p class="muted">
          ${escapeHtml(meta.author)}
          ·
          ${escapeHtml(meta.script)}
        </p>

        <h3 style="margin-top:24px">
          ${t('choosePart')}
        </h3>

        <div
          style="
            display:grid;
            gap:12px;
            margin-top:14px
          ">

          ${meta.pdfs.map(part => `

            <button
              class="select"
              style="
                text-align:left;
                padding:16px
              "
              onclick="
                openPdf(
                  '${escapeAttribute(part.file)}'
                )
              ">

              <strong>
                ${escapeHtml(part.title)}
              </strong>

              <div
                class="muted"
                style="margin-top:4px">

                PDF

              </div>

            </button>

          `).join('')}

        </div>

      </div>

    `);
  }


  if (meta.pdf) {

    return layout(`

      <div class="top">

        <button
          class="back"
          onclick="go('library')">
          ‹
        </button>

        <div style="flex:1">

          <strong>
            ${escapeHtml(meta.short)}
          </strong>

          <div class="muted">
            ${escapeHtml(meta.author)}
          </div>

        </div>

      </div>


      <div class="section">

        <div class="eyebrow">
          ${t('reader')}
        </div>

        <h2>
          ${escapeHtml(meta.short)}
        </h2>

        <p class="muted">
          ${escapeHtml(meta.author)}
        </p>

        <button
          class="primary"
          onclick="
            openPdf(
              '${escapeAttribute(meta.pdf)}'
            )
          ">

          ${t('openPdf')}

        </button>

      </div>

    `);
  }


  if (
    meta.sample &&
    !state.loadedBook
  ) {

    return layout(`

      <div class="top">

        <button
          class="back"
          onclick="go('library')">
          ‹
        </button>

        <div style="flex:1">

          <strong>
            ${escapeHtml(meta.short)}
          </strong>

          <div class="muted">
            ${escapeHtml(meta.author)}
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


  const book = getCurrentBook();
  const chapter = currentChapter();

  if (!chapter) {

    return layout(`

      <div class="top">

        <button
          class="back"
          onclick="go('library')">
          ‹
        </button>

        <div style="flex:1">

          <strong>
            ${escapeHtml(book.title)}
          </strong>

          <div class="muted">
            ${escapeHtml(book.author)}
          </div>

        </div>

      </div>

      <div class="muted">
        ${t('loading')}
      </div>

    `);
  }


  const progress =
    book.chapters.length
      ? Math.round(
          ((state.chapter + 1) /
            book.chapters.length) *
            100
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
          ${escapeHtml(book.title)}
        </strong>

        <div class="muted">
          ${escapeHtml(book.author)}
        </div>

      </div>

      <button
        class="chip ${state.script ? 'on' : ''}"
        onclick="
          state.script=!state.script;
          save();
          render();
        ">

        ${state.script ? 'A अ' : 'A'}

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
        ${state.chapter + 1}
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
      ${escapeHtml(chapter.title)}
    </h2>


    <div class="section">

      ${
        (chapter.verses || [])
          .map(verse => `

            <div
              class="verse"
              onclick="
                toggleBookmark(
                  '${escapeAttribute(verse.ref)}'
                )
              ">

              <div
                style="
                  display:flex;
                  justify-content:space-between;
                  align-items:center
                ">

                <div class="ref">
                  ${escapeHtml(verse.ref)}
                </div>

                <div
                  class="muted"
                  style="font-size:11px">

                  ${
                    isBookmarked(verse.ref)
                      ? '★'
                      : '☆'
                  }

                </div>

              </div>


              ${
                state.script
                  ? `

                    <div class="deva">
                      ${escapeHtml(
                        verse.sanskrit || ''
                      )}
                    </div>

                    <div class="translit">
                      ${escapeHtml(
                        verse.transliteration || ''
                      )}
                    </div>

                  `
                  : ''
              }


              <div class="english">

                ${
                  state.lang === 'sl'
                    ? escapeHtml(
                        verse.slovenian ||
                        verse.english ||
                        ''
                      )
                    : escapeHtml(
                        verse.english ||
                        ''
                      )
                }

              </div>


              ${
                verse.note
                  ? `
                    <div class="note">
                      ${escapeHtml(
                        verse.note
                      )}
                    </div>
                  `
                  : ''
              }

            </div>

          `)
          .join('')
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
          item =>
            item.bookId ===
            state.loadedBookId
        ).length
      }

    </div>

  `);
}


/* =========================================================
   PDF SEARCH ENGINE
   ========================================================= */

const PDFJS_VERSION = '6.2.108';

const SEARCH_DB_NAME = 'raganuga-search-db';
const SEARCH_DB_VERSION = 1;
const SEARCH_STORE_NAME = 'pages';

let pdfjsPromise = null;


/*
  Used only to keep the Search input focused while
  typing. Navigation cancels this frame.
*/
let searchFocusFrame = null;


function normalizeSearchText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}


function makeSearchSnippet(result) {

  const source =
    state.lang === 'sl'
      ? (
          result.slovenian ||
          result.english ||
          result.sanskrit ||
          ''
        )
      : (
          result.english ||
          result.sanskrit ||
          ''
        );

  const text =
    String(source)
      .replace(/\s+/g, ' ')
      .trim();

  if (text.length <= 320) {
    return text;
  }

  const query =
    normalizeSearchText(
      state.query
    );

  const normalized =
    normalizeSearchText(
      text
    );

  const pos =
    query
      ? normalized.indexOf(query)
      : -1;

  if (pos >= 0) {

    const start =
      Math.max(
        0,
        pos - 120
      );

    const end =
      Math.min(
        text.length,
        start + 320
      );

    return (
      (start > 0 ? '…' : '') +
      text.slice(start, end) +
      (end < text.length ? '…' : '')
    );
  }

  return text.slice(0, 320) + '…';
}


function getPdfEntries() {

  const entries = [];

  BOOKS.forEach(book => {

    if (book.pdf) {

      entries.push({
        bookId: book.id,
        bookTitle: book.short,
        author: book.author,
        chapterTitle: 'PDF',
        pdf: book.pdf
      });

      return;
    }

    if (
      Array.isArray(book.pdfs)
    ) {

      book.pdfs.forEach(part => {

        entries.push({
          bookId: book.id,
          bookTitle: book.short,
          author: book.author,
          chapterTitle: part.title,
          pdf: part.file,
          partId: part.id
        });

      });
    }
  });

  return entries;
}


async function getPdfJs() {

  if (!pdfjsPromise) {

    pdfjsPromise =
      import(
        'https://cdn.jsdelivr.net/npm/pdfjs-dist@' +
        PDFJS_VERSION +
        '/build/pdf.min.mjs'
      )
      .then(pdfjsLib => {

        pdfjsLib
          .GlobalWorkerOptions
          .workerSrc =
            'https://cdn.jsdelivr.net/npm/pdfjs-dist@' +
            PDFJS_VERSION +
            '/build/pdf.worker.min.mjs';

        return pdfjsLib;
      });
  }

  return pdfjsPromise;
}


function openSearchDatabase() {

  return new Promise(
    (resolve, reject) => {

      if (!('indexedDB' in window)) {

        reject(
          new Error(
            'IndexedDB ni podprt v tem brskalniku.'
          )
        );

        return;
      }

      const request =
        indexedDB.open(
          SEARCH_DB_NAME,
          SEARCH_DB_VERSION
        );

      request.onupgradeneeded =
        function () {

          const db =
            request.result;

          if (
            !db.objectStoreNames.contains(
              SEARCH_STORE_NAME
            )
          ) {

            const store =
              db.createObjectStore(
                SEARCH_STORE_NAME,
                {
                  keyPath: 'id'
                }
              );

            store.createIndex(
              'bookId',
              'bookId',
              {
                unique: false
              }
            );

            store.createIndex(
              'pdf',
              'pdf',
              {
                unique: false
              }
            );
          }
        };

      request.onsuccess =
        function () {

          resolve(
            request.result
          );
        };

      request.onerror =
        function () {

          reject(
            request.error ||
            new Error(
              'IndexedDB error.'
            )
          );
        };
    }
  );
}


function clearSearchDatabase() {

  return openSearchDatabase()
    .then(db => {

      return new Promise(
        (resolve, reject) => {

          const transaction =
            db.transaction(
              SEARCH_STORE_NAME,
              'readwrite'
            );

          const store =
            transaction.objectStore(
              SEARCH_STORE_NAME
            );

          const request =
            store.clear();

          request.onsuccess =
            () => resolve();

          request.onerror =
            () =>
              reject(
                request.error
              );

          transaction.oncomplete =
            () => db.close();

          transaction.onerror =
            () =>
              reject(
                transaction.error
              );
        }
      );
    });
}


function loadCachedSearchIndex() {

  return openSearchDatabase()
    .then(db => {

      return new Promise(
        (resolve, reject) => {

          const transaction =
            db.transaction(
              SEARCH_STORE_NAME,
              'readonly'
            );

          const store =
            transaction.objectStore(
              SEARCH_STORE_NAME
            );

          const request =
            store.getAll();

          request.onsuccess =
            function () {

              const rows =
                request.result || [];

              db.close();

              resolve(rows);
            };

          request.onerror =
            function () {

              db.close();

              reject(
                request.error
              );
            };
        }
      );
    });
}


function saveSearchRows(rows) {

  return openSearchDatabase()
    .then(db => {

      return new Promise(
        (resolve, reject) => {

          const transaction =
            db.transaction(
              SEARCH_STORE_NAME,
              'readwrite'
            );

          const store =
            transaction.objectStore(
              SEARCH_STORE_NAME
            );

          rows.forEach(row => {

            store.put(row);

          });

          transaction.oncomplete =
            function () {

              db.close();
              resolve();
            };

          transaction.onerror =
            function () {

              db.close();

              reject(
                transaction.error
              );
            };
        }
      );
    });
}


function makeSearchRow(
  bookId,
  bookTitle,
  author,
  chapterTitle,
  pdf,
  page,
  text
) {

  const cleanText =
    String(text || '')
      .replace(/\s+/g, ' ')
      .trim();

  return {

    id:
      bookId +
      '|' +
      pdf +
      '|' +
      page,

    bookId,
    bookTitle,
    author,
    chapterIndex: 0,
    chapterTitle:
      chapterTitle +
      ' · page ' +
      page,

    ref:
      'p. ' +
      page,

    page,
    pdf,

    sanskrit:
      cleanText,

    transliteration:
      cleanText,

    english:
      cleanText,

    slovenian:
      cleanText,

    normalized:
      normalizeSearchText(
        [
          bookTitle,
          author,
          chapterTitle,
          cleanText
        ].join(' ')
      )
  };
}


async function buildPdfSearchIndex() {

  const pdfjsLib =
    await getPdfJs();

  const entries =
    getPdfEntries();

  const rows = [];

  let totalPages = 0;

  for (
    let bookNumber = 0;
    bookNumber < entries.length;
    bookNumber++
  ) {

    const entry =
      entries[bookNumber];

    const loadingTask =
      pdfjsLib.getDocument({
        url: entry.pdf,
        enableScripting: false
      });

    const pdf =
      await loadingTask.promise;

    totalPages +=
      pdf.numPages;

    for (
      let pageNumber = 1;
      pageNumber <= pdf.numPages;
      pageNumber++
    ) {

      const page =
        await pdf.getPage(
          pageNumber
        );

      const content =
        await page.getTextContent();

      const text =
        content.items
          .map(
            item =>
              item.str || ''
          )
          .join(' ')
          .replace(/\s+/g, ' ')
          .trim();

      if (text) {

        rows.push(
          makeSearchRow(
            entry.bookId,
            entry.bookTitle,
            entry.author,
            entry.chapterTitle,
            entry.pdf,
            pageNumber,
            text
          )
        );
      }

      if (
        pageNumber === 1 ||
        pageNumber % 25 === 0 ||
        pageNumber === pdf.numPages
      ) {

        state.searchIndex =
          rows.slice();

        if (
          state.screen === 'search'
        ) {
          render();
        }
      }
    }

    try {
      await pdf.destroy();
    } catch (e) {}
  }

  return {
    rows,
    totalPages
  };
}


async function buildSearchIndex() {

  if (
    state.searchReady ||
    state.searchLoading
  ) {
    return;
  }

  state.searchLoading = true;

  if (state.screen === 'search') {
    render();
  }

  try {

    /*
      First load the small structured sample book.
    */

    let sampleResults = [];

    try {

      const response =
        await fetch(
          'data/sample-book.json',
          {
            cache: 'no-store'
          }
        );

      if (!response.ok) {
        throw new Error(
          'HTTP ' +
          response.status
        );
      }

      const book =
        await response.json();

      (book.chapters || [])
        .forEach(
          (
            chapter,
            chapterIndex
          ) => {

            (chapter.verses || [])
              .forEach(
                verse => {

                  sampleResults.push({

                    id:
                      'sample|' +
                      chapterIndex +
                      '|' +
                      verse.ref,

                    bookId:
                      book.id,

                    bookTitle:
                      book.title,

                    author:
                      book.author,

                    chapterIndex,

                    chapterTitle:
                      chapter.title,

                    ref:
                      verse.ref,

                    sanskrit:
                      verse.sanskrit ||
                      '',

                    transliteration:
                      verse.transliteration ||
                      '',

                    english:
                      verse.english ||
                      '',

                    slovenian:
                      verse.slovenian ||
                      '',

                    normalized:
                      normalizeSearchText(
                        [
                          book.title,
                          book.author,
                          chapter.title,
                          verse.ref,
                          verse.sanskrit,
                          verse.transliteration,
                          verse.english,
                          verse.slovenian
                        ].join(' ')
                      )
                  });

                }
              );
          }
        );

    } catch (error) {

      const book =
        FALLBACK_BOOK;

      (book.chapters || [])
        .forEach(
          (
            chapter,
            chapterIndex
          ) => {

            (chapter.verses || [])
              .forEach(
                verse => {

                  sampleResults.push({

                    id:
                      'sample|' +
                      chapterIndex +
                      '|' +
                      verse.ref,

                    bookId:
                      book.id,

                    bookTitle:
                      book.title,

                    author:
                      book.author,

                    chapterIndex,

                    chapterTitle:
                      chapter.title,

                    ref:
                      verse.ref,

                    sanskrit:
                      verse.sanskrit ||
                      '',

                    transliteration:
                      verse.transliteration ||
                      '',

                    english:
                      verse.english ||
                      '',

                    slovenian:
                      verse.slovenian ||
                      '',

                    normalized:
                      normalizeSearchText(
                        [
                          book.title,
                          book.author,
                          chapter.title,
                          verse.ref,
                          verse.sanskrit,
                          verse.transliteration,
                          verse.english,
                          verse.slovenian
                        ].join(' ')
                      )
                  });

                }
              );
          }
        );
    }


    /*
      Try to use the saved PDF index first.
    */

    let cachedRows = [];

    try {

      cachedRows =
        await loadCachedSearchIndex();

    } catch (error) {

      console.warn(
        'Could not load cached search index:',
        error
      );

    }


    const expectedPdfCount =
      getPdfEntries().length;


    const cachedPdfRows =
      cachedRows.filter(
        row =>
          row &&
          row.pdf
      );


    /*
      The current cache is valid only when it
      contains data for all eight PDF parts.
    */

    const cachedPdfIds =
      new Set(
        cachedPdfRows.map(
          row =>
            row.bookId +
            '|' +
            row.pdf
        )
      );


    const expectedPdfIds =
      new Set(
        getPdfEntries().map(
          entry =>
            entry.bookId +
            '|' +
            entry.pdf
        )
      );


    const cacheComplete =
      expectedPdfCount > 0 &&
      cachedPdfIds.size ===
        expectedPdfIds.size &&
      [...expectedPdfIds].every(
        id =>
          cachedPdfIds.has(id)
      );


    let pdfRows = [];


    if (cacheComplete) {

      pdfRows =
        cachedPdfRows;

      console.log(
        'Rāgānugā Search: saved index found.',
        pdfRows.length,
        'pages.'
      );

    } else {

      /*
        The cache is incomplete or belongs
        to an older version. Rebuild it.
      */

      try {
        await clearSearchDatabase();
      } catch (error) {
        console.warn(
          'Could not clear old search index:',
          error
        );
      }

      const built =
        await buildPdfSearchIndex();

      pdfRows =
        built.rows;

      try {

        await saveSearchRows(
          pdfRows
        );

        console.log(
          'Rāgānugā Search: PDF index saved.',
          pdfRows.length,
          'pages.'
        );

      } catch (error) {

        console.warn(
          'Could not save PDF search index:',
          error
        );

      }
    }


    state.searchIndex =
      sampleResults.concat(
        pdfRows
      );

    state.searchReady = true;

  } catch (error) {

    console.error(
      'Search index loading error:',
      error
    );

    state.searchIndex = [];

    state.searchReady = false;

    toast(
      state.lang === 'sl'
        ? 'Iskanja ni bilo mogoče pripraviti.'
        : 'Could not prepare the library search.'
    );

  } finally {

    state.searchLoading = false;

    if (
      state.screen === 'search'
    ) {
      render();
    }
  }
}


/* =========================================================
   SEARCH QUERY
   ========================================================= */

function setSearchQuery(value) {

  state.query = value;

  render();

  /*
    Cancel any older focus request first.
  */

  if (
    searchFocusFrame !== null
  ) {

    cancelAnimationFrame(
      searchFocusFrame
    );

    searchFocusFrame = null;
  }


  /*
    Restore focus only after the Search
    screen has finished rendering.
  */

  searchFocusFrame =
    requestAnimationFrame(() => {

      searchFocusFrame = null;

      /*
        IMPORTANT:
        Only restore focus if we are still
        actually on the Search screen.
      */

      if (
        state.screen !== 'search'
      ) {
        return;
      }

      const input =
        document.querySelector(
          '.search'
        );

      if (input) {

        input.focus();

        const end =
          input.value.length;

        input.setSelectionRange(
          end,
          end
        );
      }
    });
}


function setSearchFilter(value) {
  state.filter = value;
  save();
  render();
}


function getVisibleSearchResults() {

  const query =
    normalizeSearchText(
      state.query.trim()
    );

  let results =
    state.searchIndex;


  if (
    state.filter === 'Slovenian'
  ) {

    results =
      results.filter(
        item =>
          item.bookId ===
          'sample-book'
      );
  }


  if (
    query
  ) {

    results =
      results.filter(
        item => {

          const text =
            item.normalized ||
            normalizeSearchText(
              [
                item.bookTitle,
                item.author,
                item.chapterTitle,
                item.ref,
                item.sanskrit,
                item.transliteration,
                item.english,
                item.slovenian
              ].join(' ')
            );

          return text.includes(
            query
          );
        }
      );
  }


  return results;
}


function search() {

  if (
    !state.searchReady &&
    !state.searchLoading
  ) {

    buildSearchIndex();
  }


  if (
    !state.searchReady
  ) {

    return layout(`

      <h2>
        ${t('search')}
      </h2>

      <input
        class="search"
        value="${escapeAttribute(
          state.query
        )}"
        oninput="
          setSearchQuery(
            this.value
          )
        "
        placeholder="${t(
          'acrossBooks'
        )}">

      <div
        class="muted"
        style="
          margin-top:20px
        ">

        ${
          state.searchLoading
            ? t('preparingSearch')
            : t('searching')
        }

      </div>

      ${
        state.searchIndex.length
          ? `
            <div
              class="muted"
              style="margin-top:10px">

              ${state.searchIndex.length}
              ${t('pagesIndexed')}

            </div>
          `
          : ''
      }

    `);
  }


  const results =
    getVisibleSearchResults();


  return layout(`

    <h2>
      ${t('search')}
    </h2>


    <input
      class="search"
      value="${escapeAttribute(
        state.query
      )}"
      oninput="
        setSearchQuery(
          this.value
        )
      "
      placeholder="${t(
        'acrossBooks'
      )}">


    <div
      class="muted"
      style="
        margin-top:8px;
        margin-bottom:16px
      ">

      ${t('searchHint')}

    </div>


    <div class="chips">

      ${[
        ['All books', t('allBooks')],
        ['English', 'English'],
        ['Slovenian', 'Slovenščina'],
        ['Sanskrit', 'Sanskrit']
      ].map(
        ([value, label]) => `

          <button
            class="chip ${
              state.filter === value
                ? 'on'
                : ''
            }"
            onclick="
              setSearchFilter(
                '${escapeAttribute(
                  value
                )}'
              )
            ">

            ${label}

          </button>

        `
      ).join('')}

    </div>


    <div
      class="muted"
      style="
        margin-bottom:8px
      ">

      ${results.length}
      ${t('passages')}

    </div>


    ${
      results.length

        ? results
            .slice(0, 100)
            .map(
              (
                result,
                index
              ) => `

                <div
                  class="result"
                  onclick="
                    openSearchResult(
                      ${index}
                    )
                  ">

                  <div
                    class="booktitle">

                    ${escapeHtml(
                      result.bookTitle
                    )}

                    ·

                    ${escapeHtml(
                      result.ref
                    )}

                  </div>


                  <div
                    class="muted">

                    ${
                      result.pdf
                        ? escapeHtml(
                            result.chapterTitle
                          )
                        : (
                            escapeHtml(
                              t(
                                'chapterResult'
                              )
                            ) +
                            ' ' +
                            (
                              Number(
                                result.chapterIndex
                              ) + 1
                            ) +
                            ' · ' +
                            escapeHtml(
                              result.chapterTitle
                            )
                          )
                    }

                  </div>


                  <div
                    style="
                      font-size:13px;
                      line-height:1.55;
                      margin-top:4px
                    ">

                    ${escapeHtml(
                      makeSearchSnippet(
                        result
                      )
                    )}

                  </div>


                  ${
                    result.pdf
                      ? `

                        <button
                          class="chip on"
                          style="
                            margin-top:10px
                          "
                          onclick="
                            event.stopPropagation();
                            openPdf(
                              '${escapeAttribute(
                                result.pdf
                              )}',
                              ${Number(
                                result.page
                              )}
                            );
                          ">

                          ${t('openPage')}

                        </button>

                      `
                      : `
                        <div
                          class="muted"
                          style="
                            margin-top:7px;
                            font-size:11px
                          ">

                          ${escapeHtml(
                            result.sanskrit
                          )}

                        </div>
                      `
                  }

                </div>

              `
            )
            .join('')

        : `

          <div class="muted">
            ${t('noResults')}
          </div>

        `
    }


    ${
      results.length > 100
        ? `

          <div
            class="muted"
            style="
              margin-top:16px;
              padding-bottom:30px
            ">

            ${
              state.lang === 'sl'
                ? `Prikazanih je prvih 100 zadetkov od ${results.length}.`
                : `Showing the first 100 results of ${results.length}.`
            }

          </div>

        `
        : ''
    }

  `);
}


function openSearchResult(index) {

  const visibleResults =
    getVisibleSearchResults();

  const result =
    visibleResults[index];

  if (!result) {
    return;
  }


  /*
    PDF result:
    open the exact PDF page.
  */

  if (
    result.pdf
  ) {

    state.screen =
      'search';

    save();

    openPdf(
      result.pdf,
      result.page
    );

    return;
  }


  /*
    Structured sample-book result.
  */

  state.book = 0;

  state.loadedBookId =
    'sample-book';

  state.chapter =
    Number(
      result.chapterIndex
    ) || 0;

  state.screen =
    'reader';

  save();
  render();


  if (
    !state.loadedBook ||
    state.loadedBook.id !==
      result.bookId
  ) {

    loadSampleBook()
      .then(() => {

        state.chapter =
          Number(
            result.chapterIndex
          ) || 0;

        save();
        render();

        scrollToVerse(
          result.ref
        );

      });

  } else {

    setTimeout(() => {

      scrollToVerse(
        result.ref
      );

    }, 100);
  }
}


function scrollToVerse(ref) {

  setTimeout(() => {

    const verses =
      document.querySelectorAll(
        '.verse'
      );

    for (
      const verse of verses
    ) {

      const reference =
        verse.querySelector(
          '.ref'
        );

      if (
        reference &&
        reference.textContent
          .trim() ===
          String(ref)
      ) {

        verse.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });

        verse.style.outline =
          '2px solid currentColor';

        setTimeout(() => {

          verse.style.outline = '';

        }, 1800);

        break;
      }
    }

  }, 150);
}


/* =========================================================
   CREATE
   ========================================================= */

function create() {

  if (state.working) {

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


  const formTranslations = {

    'Article':
      state.lang === 'sl'
        ? 'Članek'
        : 'Article',

    'New book':
      state.lang === 'sl'
        ? 'Nova knjiga'
        : 'New book',

    'Poetic recitation':
      state.lang === 'sl'
        ? 'Pesniška recitacija'
        : 'Poetic recitation',

    'Song lyrics':
      state.lang === 'sl'
        ? 'Besedilo pesmi'
        : 'Song lyrics',

    'Study notes':
      state.lang === 'sl'
        ? 'Študijski zapiski'
        : 'Study notes',

    'Daily reflection':
      state.lang === 'sl'
        ? 'Dnevni razmislek'
        : 'Daily reflection',

    'Q&A':
      state.lang === 'sl'
        ? 'Vprašanja in odgovori'
        : 'Q&A',

    'Class outline':
      state.lang === 'sl'
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

        ${FORMS.map(form => `

          <button
            class="select ${
              state.form === form
                ? 'on'
                : ''
            }"
            onclick="
              state.form=
                '${escapeAttribute(
                  form
                )}';
              save();
              render();
            ">

            ${formTranslations[form]}

          </button>

        `).join('')}

      </div>

    </div>


    <div class="card">

      <h3>
        ${t('sources')}
      </h3>

      ${state.sources
        .map(index => {

          const book =
            BOOKS[index];

          if (!book) {
            return '';
          }

          return `

            <div class="source">

              <span>
                ${escapeHtml(
                  book.short
                )}
              </span>

              <button
                class="remove"
                onclick="
                  state.sources=
                    state.sources.filter(
                      x=>x!==${index}
                    );
                  save();
                  render();
                ">

                ${t('remove')}

              </button>

            </div>

          `;
        })
        .join('')}


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
        ">${escapeHtml(
          state.intent
        )}</textarea>

    </div>


    <button
      class="primary"
      onclick="generate()">

      ${t('generate')}
      ${formTranslations[state.form]}

    </button>

  `);
}


function generate() {

  state.working = true;
  state.step = 0;

  render();

  const timer =
    setInterval(() => {

      state.step++;

      if (state.step >= 4) {

        clearInterval(timer);

        state.working = false;

        go('result');

      } else {

        render();

      }

    }, 650);
}


/* =========================================================
   RESULT
   ========================================================= */

function result() {

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

      <p class="english">

        The Gosvāmī literature is unusually precise about where spontaneous devotion starts. It starts with a taste that appears in the heart after hearing about the moods of the residents of Vraja.

      </p>


      <p class="english">

        Viśvanātha Cakravartī makes the sequence explicit: hearing produces greed, greed produces eligibility, and practice then takes the shape of rāgānugā.

      </p>


      <p class="english">

        Continue hearing and singing, keep the association of those in whom the taste is already awake, and let the perfected identity be a matter of meditation rather than announcement.

      </p>

    </div>


    <div class="card section">

      <h3>
        ${t('sources')}
      </h3>

      <div
        class="muted"
        style="margin-top:10px">

        ${
          state.sources
            .map(
              (index, number) =>
                `${number + 1}. ${
                  escapeHtml(
                    BOOKS[index]?.short || ''
                  )
                } — ${
                  escapeHtml(
                    BOOKS[index]?.author || ''
                  )
                }`
            )
            .join('<br>')
        }

      </div>

    </div>


    <button
      class="primary"
      onclick="
        toast(
          '${escapeAttribute(
            t('savedToWorks')
          )}'
        )
      ">

      ${t('saveWork')}

    </button>

  `);
}


/* =========================================================
   SAVED / BOOKMARKS
   ========================================================= */

function openBookmark(index) {

  const bookmark =
    state.bookmarks[index];

  if (!bookmark) {
    return;
  }


  const bookIndex =
    BOOKS.findIndex(
      book =>
        book.id ===
        bookmark.bookId
    );


  if (
    bookIndex < 0 ||
    BOOKS[bookIndex].sample
  ) {

    state.book = 0;

    state.loadedBookId =
      'sample-book';

    state.chapter =
      Number(
        bookmark.chapter
      ) || 0;

    state.screen =
      'reader';

    save();
    render();

    loadSampleBook()
      .then(() => {

        const book =
          getCurrentBook();

        if (
          book.chapters &&
          book.chapters.length
        ) {

          state.chapter =
            Math.max(
              0,
              Math.min(
                state.chapter,
                book.chapters.length - 1
              )
            );

        }

        save();
        render();

        scrollToVerse(
          bookmark.ref
        );

      });

    return;
  }


  const book =
    BOOKS[bookIndex];

  if (book.pdf) {

    state.book =
      bookIndex;

    save();

    openPdf(
      book.pdf
    );

    return;
  }


  if (
    Array.isArray(book.pdfs) &&
    book.pdfs.length
  ) {

    state.book =
      bookIndex;

    state.screen =
      'reader';

    save();
    render();

    return;
  }
}


function removeBookmark(index) {

  if (
    index < 0 ||
    index >= state.bookmarks.length
  ) {
    return;
  }

  state.bookmarks.splice(
    index,
    1
  );

  save();
  render();

  setTimeout(() => {
    toast(t('removed'));
  }, 50);
}


function saved() {

  const bookmarks =
    state.bookmarks;

  return layout(`

    <h2>
      ${t('saved')}
    </h2>


    <div class="section">

      <div class="row">

        <div class="num">
          ★
        </div>

        <div class="grow">

          <div>
            ${t('bookmark')}
          </div>

          <div class="muted">
            ${bookmarks.length}
          </div>

        </div>

      </div>


      ${
        bookmarks.length

          ? bookmarks
              .map(
                (
                  bookmark,
                  index
                ) => `

                  <div
                    class="row"
                    style="
                      cursor:pointer;
                      align-items:flex-start
                    "
                    onclick="
                      openBookmark(
                        ${index}
                      )
                    ">

                    <div class="num">
                      ★
                    </div>


                    <div class="grow">

                      <div>

                        ${escapeHtml(
                          bookmark.bookTitle ||
                          'Rāgānugā Bhakti — Sample Book'
                        )}

                      </div>


                      <div class="muted">

                        ${escapeHtml(
                          bookmark.chapterTitle ||
                          `${t('chapter')} ${
                            Number(
                              bookmark.chapter ||
                              0
                            ) + 1
                          }`
                        )}

                        ·

                        ${escapeHtml(
                          bookmark.ref || ''
                        )}

                      </div>


                      <div
                        style="
                          margin-top:7px;
                          line-height:1.5
                        ">

                        ${
                          state.lang === 'sl'
                            ? escapeHtml(
                                bookmark.slovenian ||
                                bookmark.english ||
                                ''
                              )
                            : escapeHtml(
                                bookmark.english ||
                                ''
                              )
                        }

                      </div>


                      <div
                        style="
                          display:flex;
                          gap:8px;
                          margin-top:10px
                        ">

                        <button
                          class="chip on"
                          onclick="
                            event.stopPropagation();
                            openBookmark(
                              ${index}
                            );
                          ">

                          ${t('openBookmark')}

                        </button>


                        <button
                          class="chip"
                          onclick="
                            event.stopPropagation();
                            removeBookmark(
                              ${index}
                            );
                          ">

                          ${t('removeBookmark')}

                        </button>

                      </div>

                    </div>

                  </div>

                `
              )
              .join('')

          : `

            <div
              class="muted"
              style="padding:18px 0">

              ${t('noBookmarks')}

            </div>

          `
      }

    </div>


    <div class="row">

      <div class="num">
        A
      </div>

      <div
        class="grow"
        onclick="go('result')"
        style="cursor:pointer">

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


/* =========================================================
   RENDER
   ========================================================= */

function render() {

  const root =
    document.getElementById('app');

  if (!root) {
    return;
  }

  root.innerHTML =

    state.screen === 'library'
      ? library()

    : state.screen === 'reader'
      ? reader()

    : state.screen === 'search'
      ? search()

    : state.screen === 'create'
      ? create()

    : state.screen === 'result'
      ? result()

    : state.screen === 'saved'
      ? saved()

    : library();
}


/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.setLanguage =
  setLanguage;

window.go =
  go;

window.toast =
  toast;

window.openBook =
  openBook;

window.openPdf =
  openPdf;

window.previousChapter =
  previousChapter;

window.nextChapter =
  nextChapter;

window.toggleBookmark =
  toggleBookmark;

window.openBookmark =
  openBookmark;

window.removeBookmark =
  removeBookmark;

window.setSearchQuery =
  setSearchQuery;

window.setSearchFilter =
  setSearchFilter;

window.openSearchResult =
  openSearchResult;

window.generate =
  generate;

window.save =
  save;

window.render =
  render;


/* =========================================================
   START
   ========================================================= */

render();
