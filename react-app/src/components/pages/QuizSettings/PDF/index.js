import { Button } from "@material-ui/core";
import jsPDF from "jspdf";
import React, { useRef } from "react";
import ResultPdf from "./ResultPdf";
const PdfResult = () => {
  const resultPdfRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");

    doc.html(resultPdfRef.current, {
      async callback(doc) {
        await doc.save("result");
      },
    });
  };
  return (
    <>
        <div>
      <Button variant="outlined">Download Result</Button>
      <br />
      <div ref={resultPdfRef}>
        <ResultPdf resultPdfRef={resultPdfRef} />
      </div>
    </div>
    </>
  );
};

export default PdfResult;
