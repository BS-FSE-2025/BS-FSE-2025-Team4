import React, { useEffect, useState } from "react";

const App = () => {
  const [trainings, setTrainings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await fetch("/api/get-trainings"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTrainings(data);
      } catch (err) {
        console.error("Error fetching data:", err);
     
      }
    };

    fetchTrainings();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", direction: "rtl", backgroundColor: "#f9f9f9", margin: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>לוח זמנים לאימונים</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
        <thead>
          <tr>
            <th style={headerStyle}>תאריך</th>
            <th style={headerStyle}>שעה</th>
            <th style={headerStyle}>מיקום</th>
            <th style={headerStyle}>קבוצה רלוונטית</th>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>{error}</td>
            </tr>
          ) : trainings.length > 0 ? (
            trainings.map((training, index) => (
              <tr key={index} style={index % 2 === 0 ? rowEvenStyle : {}}>
                <td style={cellStyle}>{training.date}</td>
                <td style={cellStyle}>{training.time}</td>
                <td style={cellStyle}>{training.location}</td>
                <td style={cellStyle}>{training.group}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>טוען נתונים...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const headerStyle = {
  backgroundColor: "#f4f4f4",
  padding: "10px",
  border: "1px solid #ccc",
  textAlign: "center",
};

const cellStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  textAlign: "center",
};

const rowEvenStyle = {
  backgroundColor: "#f9f9f9",
};

export default App;
