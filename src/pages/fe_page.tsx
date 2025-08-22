import React, { useState } from "react";

const PdfTextForm: React.FC<{ onSubmit: (pdfFile: File, text: string) => void }> = ({ onSubmit }) => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [text, setText] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfFile) {
      alert("Please upload a PDF file.");
      return;
    }
    onSubmit(pdfFile, text);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "2rem auto" }}>
      <div>
        <label htmlFor="pdf-upload">Upload PDF:</label>
        <input
          type="file"
          id="pdf-upload"
          accept="application/pdf"
          onChange={handleFileChange}
        />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <label htmlFor="text-input">Text:</label>
        <input
          type="text"
          id="text-input"
          value={text}
          onChange={handleTextChange}
          style={{ width: "100%" }}
        />
      </div>
      <button type="submit" style={{ marginTop: "1rem" }}>
        Submit
      </button>
    </form>
  );
};

export default PdfTextForm;