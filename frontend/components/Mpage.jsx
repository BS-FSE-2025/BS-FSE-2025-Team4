import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div
      style={{
        fontFamily: 'Gill Sans, sans-serif',
        background: 'linear-gradient(0deg, rgb(212, 215, 223) 0%, rgba(253,187,45,1) 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        margin: '0',
        padding: '0',
      }}>
      <div
        className="cards"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
          justifyContent: "center",
          flex: "1", // Ensure cards take up the remaining space
          paddingTop: "70px",
        }}>
        <Link to="/login/student" 
          className="card red"
          style={{
            textDecoration: "none",
            background: "linear-gradient(135deg, #A8E6CF,rgb(33, 217, 109))", 
            height: "100px",
            width: "250px",
            borderRadius: "10px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            cursor: "pointer",
            transition: "400ms",
            border: "1px solid transparent",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
          <p className="tip" 
              style={{ 
                fontSize: "1em", 
                fontWeight: "700" 
              }}>
                  תלמיד
          </p>
        </Link>
        <Link to="/login/coach"
          className="card blue"
          style={{
            textDecoration: "none",
            background: "linear-gradient(135deg, #D4EFDF,rgb(47, 176, 101))",
            height: "100px",
            width: "250px",
            borderRadius: "10px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            cursor: "pointer",
            transition: "400ms",
            border: "1px solid transparent",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
          <p className="tip" style={{ fontSize: "1em", fontWeight: "700" }}>מאמן</p>
        </Link>
        <Link to="/login/manager"
          className="card green"
          style={{
            textDecoration: "none",
            background: "linear-gradient(135deg, #EAF8E6,rgb(20, 105, 88))",
            height: "100px",
            width: "250px",
            borderRadius: "10px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            cursor: "pointer",
            transition: "400ms",
            border: "1px solid transparent",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
          <p className="tip" style={{ fontSize: "1em", fontWeight: "700" }}>מנהל</p>
        </Link>
      </div>
    </div>
  );
};
export default MainPage;