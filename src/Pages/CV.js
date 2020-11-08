import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../Components/Button';
import './CV.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function CVPdf() {
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="CV">
      <Document
        file="https://share.danjones.dev/Daniel_Jones_CV.pdf"
        onLoadSuccess={({numPages}) => setNumPages(numPages)}
      >
        <Page pageNumber={page} renderAnnotationLayer={false} />
      </Document>
      <div className="pages">
        <FontAwesomeIcon
          className={`page-btn ${page === 1 && 'disabled'}`}
          icon={faChevronLeft}
          onClick={() => setPage(page === 1 ? 1 : page-1)}
        />
        <span>{page}/{numPages}</span>
        <FontAwesomeIcon
          className={`page-btn ${page === numPages && 'disabled'}`}
          icon={faChevronRight}
          onClick={() => setPage(page === numPages ? numPages : page+1)}
        />
      </div>
    </div>
  );
}

export default function CVPage() {
  return (
    <div className="CVPage">
      <div className="topcol"></div>
      <CVPdf />
      <div className="download">
        <Button href="https://share.danjones.dev/Daniel_Jones_CV.pdf" download target="_blank">
          Download
        </Button>
        <span>
          Printing? Download a B&W version
          <a
            href="https://share.danjones.dev/Daniel_Jones_CV_print.pdf"
            download
            target="_blank"
          >
            here
          </a>
        </span>
      </div>
    </div>
  );
}
