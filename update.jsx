import React, { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => setAlert(""), 3000); // מנקה את ההודעה לאחר 3 שניות
  };

  const sendEmail = () => {
    if (message) {
      const email = "email@example.com"; // כתובת אימייל של המאמן או תלמיד
      const subject = "עדכון חשוב";
      const body = encodeURIComponent(message);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    } else {
      showAlert("אנא הכנס הודעה לשליחה.");
    }
  };

  const sendSMS = () => {
    if (message) {
      const phoneNumber = "0500000000"; // מספר טלפון של המאמן או תלמיד
      const body = encodeURIComponent(message);
      window.location.href = `sms:${phoneNumber}?body=${body}`;
    } else {
      showAlert("אנא הכנס הודעה לשליחה.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>שליחת עדכונים למאמנים ולתלמידים</h2>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>הודעה:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="הכנס את ההודעה שלך כאן..."
            style={styles.textarea}
          ></textarea>
        </div>
        <div style={styles.buttonContainer}>
          <button type="button" style={styles.button} onClick={sendEmail}>שלח באימייל</button>
          <button type="button" style={styles.button} onClick={sendSMS}>שלח בהודעת SMS</button>
        </div>
        {alert && <div style={styles.alert}>{alert}</div>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(100deg, rgba(159,215,156,1) 0%, rgb(250, 203, 77) 100%)",
    margin: 0,
    padding: "20px",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "18px",
    color: "#040404",
    marginBottom: "10px",
    display: "block",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "vertical",
    minHeight: "150px",
    transition: "border-color 0.3s ease",
  },
  textareaFocus: {
    borderColor: "#4CAF50",
    outline: "none",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "15px 30px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    flex: 1,
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
  alert: {
    color: "red",
    textAlign: "center",
    fontSize: "14px",
    marginTop: "10px",
  },
};

export default App;