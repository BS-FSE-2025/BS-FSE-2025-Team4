import React, { useState } from 'react';

const SignStudent = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [guardianType, setGuardianType] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = {
      name,
      age,
      email,
      phone,
      username,
      password,
      guardian: {
        name: guardianName,
        type: guardianType,
        phone: guardianPhone,
      },
    };

    console.log('Sending Data:', studentData);

    try {
      const response = await fetch('http://localhost:2025/api/students/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        direction: 'rtl',
        background: 'linear-gradient(0deg, rgba(159,215,156,1) 0%, rgba(253,187,45,1) 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        margin: '0',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '20px 30px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '450px',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#444' }}>הרשמת תלמיד</h1>

        {errorMessage.length > 0 && (
          <ul style={{ color: 'red', textAlign: 'right', listStyle: 'none', padding: 0, marginBottom: '20px' }}>
            {errorMessage.map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        )}

        <form onSubmit={handleSubmit}>
          {/* Student Information */}
          <h2 style={{ color: '#444', marginBottom: '10px' }}>פרטי התלמיד</h2>
          <label style={styles.label}>שם:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="שם התלמיד"
            required
            style={styles.input}
          />

          <label style={styles.label}>גיל:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="גיל התלמיד"
            required
            style={styles.input}
          />

          <label style={styles.label}>אימייל:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="אימייל התלמיד"
            required
            style={styles.input}
          />

          <label style={styles.label}>טלפון:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="טלפון התלמיד"
            required
            style={styles.input}
          />

          <label style={styles.label}>שם משתמש:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="שם משתמש"
            required
            style={styles.input}
          />

          <label style={styles.label}>סיסמה:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="סיסמה"
            required
            style={styles.input}
          />

          {/* Guardian Information */}
          <h2 style={{ color: '#444', marginBottom: '10px' }}>פרטי האפוטרופוס</h2>
          <label style={styles.label}>שם:</label>
          <input
            type="text"
            value={guardianName}
            onChange={(e) => setGuardianName(e.target.value)}
            placeholder="שם האפוטרופוס"
            required
            style={styles.input}
          />

          <label style={styles.label}>סוג:</label>
          <select
                 value={guardianType}
                 onChange={(e) => setGuardianType(e.target.value)}
                 required
                 style={styles.input} // Reuse the same input styles for consistency
                >
              <option value="" disabled>
                בחר סוג</option>
              <option value="mother">אמא</option>
              <option value="father">אבא</option>
              <option value="other">אחר</option>
          </select>

          <label style={styles.label}>טלפון:</label>
          <input
            type="text"
            value={guardianPhone}
            onChange={(e) => setGuardianPhone(e.target.value)}
            placeholder="טלפון האפוטרופוס"
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            הירשם
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#444',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default SignStudent;
