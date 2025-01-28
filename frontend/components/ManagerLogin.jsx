import React, { useState } from 'react';

const ManagerLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    console.log('Sending:', { username, password });

    try {
      const response = await fetch('http://localhost:2025/api/managers/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        // Redirect to the manager dashboard
        window.location.href = '/manager/dashboard';
      } else {
        const result = await response.json();
        setErrorMessage(result.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Error connecting to the server');
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(0deg, rgba(159,215,156,1) 0%, rgba(253,187,45,1) 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '60px',
          borderRadius: '20px',
          boxShadow: '0 0 10px rgba(198, 94, 94, 0.981)',
        }}
      >
        <h2 style={{ textAlign: 'right', fontSize: '25px', color: '#fdbb2d' }}>התחברות למנהל</h2>
        {errorMessage && (
          <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{errorMessage}</p>
        )}
        <form onSubmit={handleLogin}>
          <label htmlFor="username" style={{ textAlign: 'right', display: 'block' }}>
            :שם משתמש
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength={8}
            maxLength={10}
            pattern=".{8,10}"
            title="שם משתמש חייב להיות בין 8-10 תווים"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <label htmlFor="password" style={{ textAlign: 'right', display: 'block' }}>
            :סיסמה
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            minLength={8} 
            maxLength={10}
            pattern=".{8,10}"
            title="סיסמה חייבת להכיל בין 8-10 תווים"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#9fd79c',
              color: 'black',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            <b>התחבר</b>
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default ManagerLogin;