import React from 'react';

// Reusable Card Component
const Card = ({ href, backgroundColor, text }) => {
  return (
    <a
      href={href}
      style={{
        textDecoration: "none",
        backgroundColor,
        height: "100px",
        width: "250px",
        borderRadius: "10px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        cursor: "pointer",
        transition: "400ms",
        border: "1px solid transparent",
      }}
    >
      <p style={{ fontSize: "1em", fontWeight: "700", margin: 0 }}>{text}</p>
    </a>
  );
};

const MainPage = () => {
  return (
    <div
      style={{
        fontFamily: "Gill Sans, sans-serif",
        background: "linear-gradient(0deg, rgb(212, 215, 223) 0%, rgba(253, 187, 45, 1) 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card href="/login/student" backgroundColor="#53dba0" text="תלמיד" />
        <Card href="/login/coach" backgroundColor="#b3c9ed" text="מאמן" />
        <Card href="/login/manager" backgroundColor="#bd8e73" text="מנהל" />
      </div>
    </div>
  );
};

export default MainPage;
