import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FePage from './pages/fe_page';
import FinalPage from './pages/final_page';

function App() {
  const [page, setPage] = useState("form");
  const [result, setResult] = useState(null);

  const handleSubmit = async (pdfFile, text, geminiApiKey) => {
    setPage("loading");
    const formData = new FormData();
    formData.append("pdf", pdfFile);
    formData.append("description", text);
    formData.append("gemini_api_key", geminiApiKey);

    try {
      // const response = await fetch("https://resume-matcher-backend-whz7.onrender.com/api/upload", {
      const response = await fetch("http://127.0.0.1:8000/api/upload", {

      method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data);
      setPage("final");
      console.log("Response:", data);
    } catch (error) {
      alert("Error: " + error.message);
      setPage("form");
    }
  };

  return (
    <>
  {page === "form" && <FePage onSubmit={handleSubmit} />}
      {page === "loading" && <div style={{textAlign: "center", marginTop: "2rem"}}>Loading...</div>}
      {page === "final" && <FinalPage result={result} />}
    </>
  );
}

export default App
