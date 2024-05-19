// components/PdfViewer.js
import { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.mjs`;

const PdfViewer = ({ pdfUrl }) => {
  const [pdf, setPdf] = useState(null);
  const canvasRef = useRef();
  const rendering = useRef(false);

  useEffect(() => {
    const fetchPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdfDocument = await loadingTask.promise;
      setPdf(pdfDocument);
    };

    fetchPdf();
  }, [pdfUrl]);

  useEffect(() => {
    if (pdf) {
      const renderPage = async (pageNumber) => {
        if (rendering.current) {
          return; // Skip if another rendering is in progress
        }
        rendering.current = true;
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
        rendering.current = false;
      };

      renderPage(1); // Render the first page
    }
  }, [pdf]);

  return <canvas ref={canvasRef} />;
};

export default PdfViewer;
