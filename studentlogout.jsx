import React from 'react';

const App = () => {
  const handleLogout = (event) => {
    event.preventDefault(); // מניעת ברירת מחדל

    // מחיקת המידע של המשתמש (לדוגמה, טוקן מ-localStorage)
    localStorage.removeItem('authToken');

    // הודעה למשתמש על יציאה
    alert('You have been logged out successfully.');

    // הפניה לעמוד ההתחברות
    window.location.href = '/login.html'; // ניתן להחליף בנתיב הרצוי
  };

  return (
    <div style={styles.body}>
      <div style={styles.userArea}>
        <h1>ברוך הבא, תלמיד!</h1>
        <a href="/login.html" style={styles.logoutButton} onClick={handleLogout}>
          Log Out
        </a>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '50px',
    direction: 'rtl',
  },
  userArea: {
    margin: '20px auto',
    width: '300px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  logoutButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'inline-block',
    transition: 'background-color 0.3s',
  },
};

export default App;
