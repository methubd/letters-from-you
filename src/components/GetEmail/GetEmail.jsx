import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUpload = async () => {
    if (!file || !file.name.endsWith('.pdf')) {
      setStatus('Please select a PDF file to send.');
      return;
    }

    if (!email) {
      setStatus('Please enter your email address.');
      return;
    }

    const formData = new FormData();
    formData.append('pdf-file', file);
    formData.append('user-email', email);

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        body: formData,
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setProgress(percent);
        },
      });

      if (response.ok) {
        setStatus('File sent successfully.');
      } else {
        setStatus('Error sending file. Please try again later.');
      }
    } catch (error) {
      setStatus('Error sending file. Please try again later.');
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="pdf-file">Select PDF file to upload:</label>
        <input type="file" id="pdf-file" name="pdf-file" accept=".pdf" onChange={handleFileChange} />
      </div>

      <div>
        <label htmlFor="user-email">Email address:</label>
        <input type="email" id="user-email" name="user-email" value={email} onChange={handleEmailChange} />
      </div>

      <div>
        <button onClick={handleUpload}>Send</button>
      </div>

      {progress > 0 && (
        <div>
          <progress value={progress} max="100" />
        </div>
      )}

      {status && (
        <div>
          <p>{status}</p>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
