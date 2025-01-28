import React, { useState } from "react";

const SignStudent = () => {
  // Student Info
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Guardian Info
  const [guardianName, setGuardianName] = useState("");
  const [guardianType, setGuardianType] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");

  // Error State
  const [errorMessage, setErrorMessage] = useState([]);

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect Data
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

    // Validation
    const errors = [];
    const phoneRegex = /^(050|051|052|053|054|055)\d{7}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d.$!%*?&]{8,10}$/;

    if (!phoneRegex.test(studentData.phone)) {
      errors.push("מספר הטלפון של התלמיד חייב להיות באורך של 10 ספרות ולהתחיל ב-050 עד 055.");
    }
    if (!phoneRegex.test(studentData.guardian.phone)) {
      errors.push("מספר הטלפון של האפוטרופוס חייב להיות באורך של 10 ספרות ולהתחיל ב-050 עד 055.");
    }
    if (studentData.phone === studentData.guardian.phone) {
      errors.push("מספר הטלפון של התלמיד והאפוטרופוס חייבים להיות שונים.");
    }
    if (studentData.age < 7 || studentData.age > 18) {
      errors.push("גיל התלמיד חייב להיות בין 7 ל-18.");
    }
    if (studentData.username.length < 8 || studentData.username.length > 10) {
      errors.push("שם המשתמש חייב להיות באורך של 8 עד 10 תווים.");
    }
    if (studentData.password.length < 8 || studentData.password.length > 10) {
      errors.push("הסיסמה חייבת להיות באורך של 8 עד 10 תווים.");
    }
    if (studentData.password === studentData.username) {
      errors.push("הסיסמה חייבת להיות שונה משם המשתמש.");
    }
    if (!passwordRegex.test(studentData.password)) {
      errors.push("הסיסמה חייבת להכיל לפחות אות קטנה, אות גדולה, מספר ותו מיוחד.");
    }

    if (errors.length > 0) {
      setErrorMessage(errors);
      return;
    }

    setErrorMessage([]);

    try {
      const response = await fetch("http://localhost:2025/api/students/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
      } else {
        const result = await response.json();
        alert(`Error: ${result.error}`);
      }
    } catch (err) {
      console.error("Error submitting data:", err);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        direction: "rtl",
        background: "linear-gradient(0deg, rgba(159,215,156,1) 0%, rgba(253,187,45,1) 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        margin: "0",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>הרשמת תלמיד</h1>
        {errorMessage.length > 0 && (
          <div style={{ color: "red", marginBottom: "20px" }}>
            <ul>
              {errorMessage.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Student Info */}
          <h2 style={{ marginBottom: "10px" }}>פרטי התלמיד</h2>
          <label>שם:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="שם התלמיד"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <label>גיל:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="גיל התלמיד"
            required
            min="7"
            max="18"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <label>אימייל:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="אימייל התלמיד"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <label>טלפון:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="טלפון התלמיד"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <label>שם משתמש:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="שם משתמש"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <label>סיסמה:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="סיסמה"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          {/* Guardian Info */}
          <h2 style={{ marginBottom: "10px" }}>פרטי האפוטרופוס</h2>
          <label>שם:</label>
          <input
            type="text"
            value={guardianName}
            onChange={(e) => setGuardianName(e.target.value)}
            placeholder="שם האפוטרופוס"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <label>סוג:</label>
          <input
            type="text"
            value={guardianType}
            onChange={(e) => setGuardianType(e.target.value)}
            placeholder="אמא/אבא/אחר"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <label>טלפון:</label>
          <input
            type="text"
            value={guardianPhone}
            onChange={(e) => setGuardianPhone(e.target.value)}
            placeholder="טלפון האפוטרופוס"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            הירשם
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignStudent;
