(async function () {
  const pdfjsLib = await import(
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@6.2.108/build/pdf.min.mjs'
  );

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@6.2.108/build/pdf.worker.min.mjs';

  const BOOKS = [
    {
      title: 'Bhakti-rasāmṛta-sindhu',
      file: 'books/Bhakti-rasāmṛta-sindhu.pdf'
    },
    {
      title: 'Rāga-vartma-candrikā',
      file: 'books/RagaVartmaCandrika_eng_2nd_ed.pdf'
    },
    {
      title: 'Ujjvala-nīlamaṇi',
      file: 'books/Ujjvala-nilamani-kirana_1Ed_2013.pdf'
    },
    {
      title: 'Mādhurya-kādambinī',
      file: 'books/Madhurya-kadambini-eng-1ed.pdf'
    },
    {
      title: 'Prema-bhakti-candrikā',
      file: 'books/Sri_Prema_Bhakti_Candrika.pdf'
    },
    {
      title: 'Caitanya-caritāmṛta — Ādi-līlā',
      file: 'books/Sri Caitanya-cartamrta Adi-lila.pdf'
    },
    {
      title: 'Caitanya-caritāmṛta — Madhya-līlā',
      file: 'books/Sri Caitanya-cartamrta Madhya-lila.pdf'
    },
    {
      title: 'Caitanya-caritāmṛta — Antya-līlā',
      file: 'books/Sri Caitanya-cartamrta Antya-lila.pdf'
    }
  ];

  const box = document.createElement('div');

  box.style.position = 'fixed';
  box.style.left = '20px';
  box.style.right = '20px';
  box.style.top = '20px';
  box.style.maxHeight = '90vh';
  box.style.overflow = 'auto';
  box.style.padding = '20px';
  box.style.background = '#ffffff';
  box.style.color = '#111111';
  box.style.zIndex = '99999';
  box.style.border = '2px solid #333';
  box.style.borderRadius = '12px';
  box.style.fontFamily = 'sans-serif';
  box.style.lineHeight = '1.5';

  box.innerHTML =
    '<strong>PDF TEST — pripravljam vseh 8 knjig ...</strong><br><br>' +
    'Prosimo počakaj.';

  document.body.appendChild(box);

  let totalPages = 0;
  let totalTextPages = 0;
  let totalCharacters = 0;

  try {
    for (let bookIndex = 0; bookIndex < BOOKS.length; bookIndex++) {
      const book = BOOKS[bookIndex];

      box.innerHTML =
        '<strong>PDF TEST — berem knjigo ' +
        (bookIndex + 1) +
        ' / ' +
        BOOKS.length +
        '</strong><br><br>' +
        '<strong>' +
        book.title +
        '</strong><br><br>' +
        'Pripravljam PDF ...';

      const loadingTask = pdfjsLib.getDocument({
        url: book.file,
        enableScripting: false
      });

      const pdf = await loadingTask.promise;

      totalPages += pdf.numPages;

      let bookTextPages = 0;
      let bookCharacters = 0;

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const content = await page.getTextContent();

        const text = content.items
          .map(item => item.str || '')
          .join(' ')
          .replace(/\s+/g, ' ')
          .trim();

        if (text) {
          bookTextPages++;
          totalTextPages++;
          bookCharacters += text.length;
          totalCharacters += text.length;
        }

        if (
          pageNumber === 1 ||
          pageNumber % 25 === 0 ||
          pageNumber === pdf.numPages
        ) {
          box.innerHTML =
            '<strong>PDF TEST — berem knjigo ' +
            (bookIndex + 1) +
            ' / ' +
            BOOKS.length +
            '</strong><br><br>' +
            '<strong>' +
            book.title +
            '</strong><br><br>' +
            'Stran: ' +
            pageNumber +
            ' / ' +
            pdf.numPages +
            '<br>' +
            'Strani z besedilom v tej knjigi: ' +
            bookTextPages +
            '<br>' +
            'Znakov v tej knjigi: ' +
            bookCharacters.toLocaleString();
        }
      }

      console.log(
        'PDF TEST:',
        book.title,
        pdf.numPages,
        'strani,',
        bookTextPages,
        'strani z besedilom,',
        bookCharacters,
        'znakov'
      );
    }

    box.innerHTML = `
      <strong>PDF TEST — VSEH 8 KNJIG USPEŠNO PREBRANIH ✅</strong>
      <br><br>

      <strong>Rezultat:</strong>
      <br><br>

      Skupaj PDF knjig: ${BOOKS.length}<br>
      Skupaj strani: ${totalPages}<br>
      Strani z besedilom: ${totalTextPages}<br>
      Skupaj znakov: ${totalCharacters.toLocaleString()}<br><br>

      <strong>Knjige:</strong>
      <br><br>

      ${BOOKS.map((book, index) =>
        (index + 1) + '. ' + book.title
      ).join('<br>')}

      <br><br>

      <strong>PDF.js je pripravljen za iskanje po celotni knjižnici. 🎉</strong>
    `;

  } catch (error) {
    console.error('PDF TEST — NAPAKA ❌', error);

    box.innerHTML =
      '<strong>PDF TEST — NAPAKA ❌</strong><br><br>' +
      String(error);
  }
})();
