import React, { useState } from "react";

const PasswordCheck = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length === 8) {
      console.log("הסיסמה עברה את הבדיקה.");
      setErrorMessage("");
      alert("הסיסמה באורך תקין.");
    } else {
      console.log("הסיסמה אינה תקינה.");
      setErrorMessage("הסיסמה חייבת להיות בדיוק 8 תווים.");
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(180deg, #91d18b, #f8f8b3)",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px 30px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h1 style={{ color: "#333" }}>בדיקת סיסמה</h1>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "10px", fontSize: "16px" }}
          >
            הכנס סיסמה:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="הכנס סיסמה בת 8 תווים"
            value={password}
            onChange={handlePasswordChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              marginBottom: "20px",
              border: password.length === 8 ? "1px solid green" : "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          {errorMessage && (
            <div
              style={{
                color: "red",
                fontSize: "14px",
                marginTop: "-10px",
                marginBottom: "10px",
              }}
            >
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              fontSize: "16px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            בדוק סיסמה
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordCheck;
