import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookTest = () => {
  const navigate = useNavigate();

  const dummyTests = [
    {
      name: 'Complete Blood Count',
      price: 50,
      description: 'Checks for infections, anemia, and other disorders.'
    },
    {
      name: 'Urine Analysis',
      price: 30,
      description: 'Analyzes urine for kidney or liver problems.'
    },
    {
      name: 'Chest X-Ray',
      price: 100,
      description: 'Detects lung, heart, and chest conditions.'
    }
  ];

  const handleClick = (testName) => {
    alert(`${testName} booked successfully!`);
    localStorage.setItem('reportAvailable', 'true');
    localStorage.setItem('testName', testName);
    navigate('/');
  };

  return (
    <div style={{ marginTop: '80px', padding: '20px' }}>
      <h2>Available Lab Tests</h2>
      {dummyTests.map((test, index) => (
        <div
          key={index}
          style={{
            marginBottom: '20px',
            borderBottom: '1px solid #ccc',
            paddingBottom: '10px'
          }}
        >
          <h3
            onClick={() => handleClick(test.name)}
            style={{ color: 'blue', cursor: 'pointer', marginBottom: '5px' }}
          >
            {test.name}
          </h3>
          <p>{test.description}</p>
          <strong>₹{test.price}</strong>
        </div>
      ))}
    </div>
  );
};

export default BookTest;
