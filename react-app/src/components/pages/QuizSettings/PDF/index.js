import { Button } from "@material-ui/core";
import jsPDF from "jspdf";
import React, { useRef } from "react";
import ResultPdf from "./ResultPdf";
const PdfResult = ({ data, quiz }) => {
  console.log("pdf quiz", quiz);
  const resultPdfRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      orientation: "p",
      unit: "px",
      format: 'a4',
    });

    // Adding the fonts.

    doc.html(resultPdfRef.current, {
      async callback(doc) {
        await doc.save(
          `result_${quiz?.title?.toLowerCase().replace(" ", "_") || ""}`
        );
      },
      html2canvas: { scale: 0.47 }, // change the scale to whatever number you need
      // width: resultPdfRef.current.offsetWidth,
    });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{ justifySelf: "flex-end" }}
          onClick={handleGeneratePdf}
          variant="outlined"
        >
          Download Result
        </Button>

        <div ref={resultPdfRef} style={{ width: "100%" }}>
          <ResultPdf data={data} quiz={quiz} />
        </div>
      </div>
    </>
  );
};

export default PdfResult;
