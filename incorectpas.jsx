import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length === 8) {
      alert("הסיסמה עברה את הבדיקה!");
      console.log("הסיסמה באורך תקין.");
    } else {
      setErrorMessage("הסיסמה חייבת להיות בדיוק 8 תווים.");
      console.log("הסיסמה אינה תקינה.");
    }
  };

  const handleInputChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage(""); // איפוס הודעת השגיאה
  };

  // עיצוב פנימי
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(180deg, #91d18b, #f8f8b3)",
      margin: 0,
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
    },
    container: {
      backgroundColor: "#fff",
      padding: "20px 30px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      maxWidth: "400px",
      width: "100%",
    },
    label: {
      display: "block",
      marginBottom: "10px",
      fontSize: "16px",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      marginBottom: "20px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
    },
    button: {
      backgroundColor: "#4caf50",
      color: "white",
      fontSize: "16px",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
    errorMessage: {
      color: "red",
      fontSize: "14px",
      marginTop: "-10px",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>בדיקת סיסמה</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password" style={styles.label}>
            הכנס סיסמה:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="הכנס סיסמה בת 8 תווים"
            style={styles.input}
            required
          />
          {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
          <button type="submit" style={styles.button}>
            בדוק סיסמה
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;