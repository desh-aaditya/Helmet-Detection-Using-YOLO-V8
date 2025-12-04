import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import './ResultDisplay.css';

const ResultDisplay = ({ result, onReset, isProcessing }) => {
  const [mediaLoaded, setMediaLoaded] = useState(false);

  return (
    <div className="result-display">
      <div className="media-container">
        {isProcessing && (
          <div className="media-overlay">
            <div className="spinner"></div>
            <p>Processing...</p>
          </div>
        )}

        {!mediaLoaded && !isProcessing && (
          <div className="media-loader">
            <div className="spinner"></div>
          </div>
        )}

        {result.fileType === 'image' ? (
          <img
            src={result.fileUrl}
            alt="Processed Result"
            className={`media ${mediaLoaded ? 'loaded' : ''}`}
            onLoad={() => setMediaLoaded(true)}
          />
        ) : (
          <video
            src={result.fileUrl}
            controls
            autoPlay
            className={`media ${mediaLoaded ? 'loaded' : ''}`}
            onLoadedData={() => setMediaLoaded(true)}
          />
        )}
      </div>

      <div className="reset-container">
        <button className="reset-button" onClick={onReset} disabled={isProcessing}>
          <RotateCcw size={20} /> Upload New File
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;
