import React, { useState } from 'react';
import './app.css';
import UploadForm from './components/UploadForm';
import ResultDisplay from './components/ResultDisplay';
import { Shield } from 'lucide-react';

function App() {
  const [result, setResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpload = async (file) => {
    setIsProcessing(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Failed to connect to backend");

      const data = await response.json();

      setResult({
        fileUrl: `http://127.0.0.1:8000${data.file_url}`,
        fileType: data.file_type,
        detections: [], // optional, YOLO detection info can be added
      });
    } catch (err) {
      alert("Error connecting to backend: " + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    if (result?.fileUrl) URL.revokeObjectURL(result.fileUrl);
    setResult(null);
    setIsProcessing(false);
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="header-icon">
            <Shield size={28} color="#ffffff" />
          </div>
          <h1 className="header-title">Helmet Detection</h1>
          <p className="header-subtitle">
            Instant Helmet Check with AI.
          </p>
        </header>

        {!result ? (
          <UploadForm onUpload={handleUpload} isProcessing={isProcessing} />
        ) : (
          <ResultDisplay
            result={result}
            onReset={handleReset}
            isProcessing={isProcessing}
          />
        )}
      </div>
    </div>
  );
}

export default App;
