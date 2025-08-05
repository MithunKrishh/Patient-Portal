import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // for redirecting

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate(); // initialize navigate

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/patients/register', formData);

      if (response.status === 201 || response.status === 200) {
        alert('Patient registered successfully!');
        setFormData({ name: '', email: '', phone: '' }); // optional reset
        navigate('/'); // redirect to homepage
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error while submitting:', error);
      alert('Error occurred. Check console or try again.');
    }
  };

  // inline styling
  const styles = {
    page: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      paddingTop: '80px',
      backgroundColor: '#f9f9f9',
      fontFamily: "'Segoe UI', sans-serif"
    },
    formBox: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '400px'
    },
    title: {
      textAlign: 'center',
      marginBottom: '1.5rem',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '1rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '1rem'
    },
    button: {
      width: '100%',
      backgroundColor: '#000',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.formBox}>
        <div style={styles.title}>Register</div>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default Register;
