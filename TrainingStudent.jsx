import React, { useEffect, useState } from "react";

const Schedule = () => {
  const [trainings, setTrainings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        // שליפת נתוני אימונים מ-API (להחליף ב-URL מתאים)
        const response = await fetch("/api/get-trainings");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTrainings(data);
      } catch (err) {
        console.error("שגיאה בשליפת נתונים:", err);
        setError("לא ניתן להציג את לוח הזמנים");
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
            <th style={{ border: "1px solid #ccc", padding: "10px", backgroundColor: "#f4f4f4" }}>תאריך</th>
            <th style={{ border: "1px solid #ccc", padding: "10px", backgroundColor: "#f4f4f4" }}>שעה</th>
            <th style={{ border: "1px solid #ccc", padding: "10px", backgroundColor: "#f4f4f4" }}>מיקום</th>
            <th style={{ border: "1px solid #ccc", padding: "10px", backgroundColor: "#f4f4f4" }}>קבוצה רלוונטית</th>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td colSpan="4" style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>{error}</td>
            </tr>
          ) : trainings.length > 0 ? (
            trainings.map((training, index) => (
              <tr
                key={index}
                style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff" }}
              >
                <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>{training.date}</td>
                <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>{training.time}</td>
                <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>{training.location}</td>
                <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>{training.group}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>טוען נתונים...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;