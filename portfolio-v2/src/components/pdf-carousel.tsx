"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFCarouselProps {
  pdfPath: string;
  title?: string;
}

export function PDFCarousel({ pdfPath, title }: PDFCarouselProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageLoading, setPageLoading] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const goToNextPage = () => {
    if (currentPage < numPages) {
      setPageLoading(true);
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setPageLoading(true);
      setCurrentPage(currentPage - 1);
    }
  };

  function onPageLoadSuccess() {
    setPageLoading(false);
  }

  return (
    <div className="space-y-4">
      {/* PDF Page Display */}
      <div
        ref={containerRef}
        className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-white shadow-md"
      >
        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="w-full aspect-[1500/844] flex items-center justify-center bg-secondary">
              <p className="text-muted-foreground">Loading PDF...</p>
            </div>
          }
        >
          <Page
            pageNumber={currentPage}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={containerWidth || 896}
            loading={
              <div className="w-full aspect-[1500/844] flex items-center justify-center bg-secondary/20">
                <p className="text-muted-foreground">Loading page...</p>
              </div>
            }
            onLoadSuccess={onPageLoadSuccess}
          />
        </Document>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Previous</span>
        </button>

        <div className="text-sm text-muted-foreground">
          Page {currentPage} {numPages > 0 && `of ${numPages}`}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === numPages}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="font-medium">Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
