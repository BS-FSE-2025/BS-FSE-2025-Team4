import React, { useState, useEffect } from "react";

function App() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // טוען את הפרופיל מ-LocalStorage כשהקומפוננטה נטענת
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("studentProfile")) || {};
    setProfile(savedProfile);
  }, []);

  // עדכון השדות בעריכה
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // שמירת הנתונים ב-LocalStorage
  const saveProfile = () => {
    localStorage.setItem("studentProfile", JSON.stringify(profile));
    setIsEditing(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>פרופיל משתמש</h1>
      <div style={styles.details}>
        <div style={styles.field}>
          <strong>שם:</strong>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              style={styles.input}
            />
          ) : (
            <span>{profile.name || "שם לא זמין"}</span>
          )}
        </div>
        <div style={styles.field}>
          <strong>אימייל:</strong>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              style={styles.input}
            />
          ) : (
            <span>{profile.email || "אימייל לא זמין"}</span>
          )}
        </div>
        <div style={styles.field}>
          <strong>טלפון:</strong>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              style={styles.input}
            />
          ) : (
            <span>{profile.phone || "טלפון לא זמין"}</span>
          )}
        </div>
        <div style={styles.field}>
          <strong>שם משתמש:</strong>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              style={styles.input}
            />
          ) : (
            <span>{profile.username || "שם משתמש לא זמין"}</span>
          )}
        </div>
        <div style={styles.field}>
          <strong>סיסמה:</strong>
          {isEditing ? (
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
              style={styles.input}
            />
          ) : (
            <span>{profile.password ? "" : "סיסמה לא זמינה"}</span>
          )}
        </div>
      </div>
      <div style={styles.buttons}>
        {isEditing ? (
          <button style={styles.saveButton} onClick={saveProfile}>
            שמור
          </button>
        ) : (
          <button style={styles.editButton} onClick={() => setIsEditing(true)}>
            ערוך
          </button>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    direction: "rtl",
  },
  header: {
    marginBottom: "20px",
  },
  details: {
    textAlign: "right",
  },
  field: {
    marginBottom: "15px",
  },
  input: {
    width: "95%",
    padding: "8px",
    marginTop: "5px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  buttons: {
    marginTop: "20px",
  },
  editButton: {
    padding: "10px 20px",
    backgroundColor: "#2196f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  saveButton: {
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;