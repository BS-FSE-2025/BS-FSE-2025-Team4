import React, { useState } from 'react';

function App() {
  // State to store the input values and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle the form submission
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Hardcoded credentials for demo purposes
    const validUsername = 'coach';
    const validPassword = 'password123';

    // Validate the credentials
    if (username === validUsername && password === validPassword) {
      // Redirect to the 'welcome.html' page (or you can use React Router to navigate to another page)
      alert('Login successful!');
      window.location.href = 'welcome.html'; // Replace with the actual redirect URL
    } else {
      // Display error message
      setErrorMessage('Invalid username or password!');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginContainer}>
        <h2 style={styles.heading}>התחברות למנהל</h2>
        <form onSubmit={handleLogin}>
          <label style={styles.label} htmlFor="username">:שם משתמש</label>
          <input
            style={styles.input}
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength="8"
            maxLength="8"
            pattern=".{8}"
            title="שם המשתמש חייב להיות בדיוק 8 תווים"
            aria-label="שם משתמש"
          />
          <label style={styles.label} htmlFor="password">:סיסמה</label>
          <input
            style={styles.input}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
            maxLength="8"
            pattern=".{8}"
            title="הסיסמה חייבת להיות בדיוק 8 תווים"
            aria-label="סיסמה"
          />
          <button style={styles.button} type="submit"><b>התחבר</b></button>
        </form>
        {/* Display error message if login failed */}
        {errorMessage && <div style={styles.errorMessage}>{errorMessage}</div>}
        <div style={styles.cards}>
          <a href="Mpage.html" style={styles.card}>
            <p style={styles.tip}>🏠</p>
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(0deg, rgba(159, 215, 156, 1) 0%, rgba(253, 187, 45, 1) 100%)',
    margin: 0,
    fontFamily: 'Arial, sans-serif',
  },
  loginContainer: {
    backgroundColor: '#fff',
    padding: '60px',
    borderRadius: '20px',
    boxShadow: '0 0 10px rgba(198, 94, 94, 0.981)',
    width: '300px',
    textAlign: 'right',
  },
  heading: {
    marginBottom: '30px',
    color: '#fdbb2d',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    direction: 'rtl',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#9fd79c',
    color: '#000',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  buttonHover: {
    backgroundColor: '#fdbb2d',
    color: 'white',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginTop: '10px',
  },
  cards: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  card: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#74b81b',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  cardHover: {
    backgroundColor: '#9fd79c',
  },
  tip: {
    fontSize: '20px',
    margin: '0',
    color: 'white',
  },
};

export default App;