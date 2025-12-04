import React, { useRef } from 'react';
import { Image, Video } from 'lucide-react';
import './UploadForm.css';

const UploadForm = ({ onUpload, isProcessing }) => {
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) onUpload(file);
  };

  return (
    <div className="upload-form">
      <div className="upload-grid">
        <div className="upload-zone" onClick={() => !isProcessing && imageInputRef.current?.click()}>
          <input ref={imageInputRef} type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
          <div className="upload-icon"><Image size={32} color="#ffffff" /></div>
          <div className="upload-content">
            <p className="upload-label">Upload Image</p>
            <p className="upload-hint">Click to browse or drag and drop</p>
          </div>
        </div>

        <div className="upload-zone" onClick={() => !isProcessing && videoInputRef.current?.click()}>
          <input ref={videoInputRef} type="file" accept="video/*" onChange={handleFileChange} style={{ display: 'none' }} />
          <div className="upload-icon"><Video size={32} color="#ffffff" /></div>
          <div className="upload-content">
            <p className="upload-label">Upload Video</p>
            <p className="upload-hint">Click to browse or drag and drop</p>
          </div>
        </div>
      </div>

      {isProcessing && (
        <div className="processing">
          <div className="spinner"></div>
          <p>Processing...</p>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
