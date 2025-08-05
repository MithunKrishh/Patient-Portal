import React, { useEffect, useState } from 'react';

const DownloadReport = () => {
  const [canDownload, setCanDownload] = useState(false);
  const [testName, setTestName] = useState('');

  useEffect(() => {
    const flag = localStorage.getItem('reportAvailable');
    const name = localStorage.getItem('testName');

    if (flag === 'true') {
      setCanDownload(true);
      setTestName(name || '');
    }
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/dummy-report.pdf'; // ✅ must be in public/assets folder
    link.download = 'Lab-Report.pdf';
    link.click();
  };

  return (
    <div style={{ marginTop: '80px', padding: '20px', textAlign: 'center' }}>
      <h2>Download Your Lab Report</h2>

      {canDownload ? (
        <>
          <p>Report available for: <strong>{testName}</strong></p>
          <button
            onClick={handleDownload}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Download Report
          </button>
        </>
      ) : (
        <p style={{ fontSize: '18px', color: 'gray', marginTop: '40px' }}>
          No results available.
        </p>
      )}
    </div>
  );
};

export default DownloadReport;
