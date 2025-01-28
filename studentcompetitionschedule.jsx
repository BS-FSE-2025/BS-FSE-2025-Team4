import React from "react";

const studentcompetitionschedule = () => {
  const competitionsData = [
    {
      date: "2024-12-30",
      time: "18:00",
      location: "מגרש 1",
      teams: "קבוצה א' vs קבוצה ב'",
    },
    {
      date: "2024-12-31",
      time: "19:00",
      location: "מגרש 2",
      teams: "קבוצה ג' vs קבוצה ד'",
    },
    {
      date: "2025-01-01",
      time: "16:00",
      location: "מגרש 3",
      teams: "קבוצה ה' vs קבוצה ו'",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "0",
        padding: "0",
        backgroundColor: "#f4f4f4",
        direction: "rtl",
      }}
    >
      <header
        style={{
          backgroundColor: "#00294d",
          color: "white",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: "0" }}>לוח תחרויות</h1>
      </header>
      <div
        style={{
          maxWidth: "800px",
          margin: "20px auto",
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  padding: "10px",
                  border: "1px solid #ddd",
                  backgroundColor: "#00294d",
                  color: "white",
                }}
              >
                תאריך ושעה
              </th>
              <th
                style={{
                  textAlign: "center",
                  padding: "10px",
                  border: "1px solid #ddd",
                  backgroundColor: "#00294d",
                  color: "white",
                }}
              >
                מיקום
              </th>
              <th
                style={{
                  textAlign: "center",
                  padding: "10px",
                  border: "1px solid #ddd",
                  backgroundColor: "#00294d",
                  color: "white",
                }}
              >
                קבוצות
              </th>
            </tr>
          </thead>
          <tbody>
            {competitionsData.map((competition, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
                }}
              >
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid #ddd",
                  }}
                >
                  {competition.date} {competition.time}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid #ddd",
                  }}
                >
                  {competition.location}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid #ddd",
                  }}
                >
                  {competition.teams}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default studentcompetitionschedule;
