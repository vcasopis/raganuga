
(async function () {
  const pdfjsLib = await import(
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@6.2.108/build/pdf.min.mjs'
  );

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@6.2.108/build/pdf.worker.min.mjs';

  const pdfPath = 'books/Bhakti-rasāmṛta-sindhu.pdf';

  try {
    const loadingTask = pdfjsLib.getDocument({
      url: pdfPath,
      enableScripting: false
    });

    const pdf = await loadingTask.promise;

    const page = await pdf.getPage(20);
    const content = await page.getTextContent();

    const text = content.items
      .map(item => item.str || '')
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();

    console.log('PDF.js TEST — USPEŠEN');
    console.log('PDF:', pdfPath);
    console.log('Število strani:', pdf.numPages);
    console.log('Besedilo 1. strani:', text.slice(0, 1000));

    const box = document.createElement('div');
    box.style.position = 'fixed';
    box.style.left = '20px';
    box.style.right = '20px';
    box.style.bottom = '20px';
    box.style.padding = '20px';
    box.style.background = '#ffffff';
    box.style.color = '#111111';
    box.style.zIndex = '99999';
    box.style.border = '2px solid #333';
    box.style.borderRadius = '12px';
    box.style.fontFamily = 'sans-serif';

    box.innerHTML =
      '<strong>PDF.js TEST — USPEŠEN ✅</strong><br><br>' +
      'PDF ima ' + pdf.numPages + ' strani.<br><br>' +
      '<strong>Začetek besedila:</strong><br>' +
      text.slice(0, 500);

    document.body.appendChild(box);

  } catch (error) {
    console.error('PDF.js TEST — NAPAKA ❌', error);

    const box = document.createElement('div');
    box.style.position = 'fixed';
    box.style.left = '20px';
    box.style.right = '20px';
    box.style.bottom = '20px';
    box.style.padding = '20px';
    box.style.background = '#ffffff';
    box.style.color = '#111111';
    box.style.zIndex = '99999';
    box.style.border = '2px solid #900';
    box.style.borderRadius = '12px';
    box.style.fontFamily = 'sans-serif';

    box.innerHTML =
      '<strong>PDF.js TEST — NAPAKA ❌</strong><br><br>' +
      String(error);

    document.body.appendChild(box);
  }
})();
