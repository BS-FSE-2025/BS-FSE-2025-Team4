import React, { useState } from "react";

const App = () => {
  // Sample updates data (mocked)
  const updatesData = [
    { id: 1, type: "ביטול אימון", date: "2024-12-21", description: "האימון של מחר בוטל עקב מזג אוויר סוער." },
    { id: 2, type: "עדכון אימון", date: "2024-12-22", description: "המשטר החדש של האימון יתחיל ביום ראשון." },
    { id: 3, type: "הודעה", date: "2024-12-23", description: "חדר הכושר ייסגר במהלך חג החנוכה." },
  ];

  const [updates, setUpdates] = useState([]); // State to store the updates

  // Function to fetch and display updates
  const fetchUpdates = () => {
    setUpdates(updatesData); // Simulate fetching updates
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(0deg, rgba(159,215,156,1) 0%, rgba(253,187,45,1) 100%)",
        height: "100vh",
        padding: "60px",
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>העדכונים האישיים שלך</h1>

        {/* Button to fetch updates */}
        <button
          onClick={fetchUpdates}
          style={{
            display: "block",
            margin: "20px auto",
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          הצג עדכונים
        </button>

        {/* Display updates */}
        <div style={{ marginTop: "20px" }}>
          {updates.length === 0 ? (
            <p style={{ textAlign: "center", color: "#555" }}>אין עדכונים להצגה.</p>
          ) : (
            updates.map((update) => (
              <div
                key={update.id}
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "15px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{update.type}</h3>
                <p>{update.description}</p>
                <p style={{ fontSize: "12px", color: "#888" }}>{update.date}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;