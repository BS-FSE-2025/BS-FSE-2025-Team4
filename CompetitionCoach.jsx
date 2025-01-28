import React, { useState } from "react";

const CompetitionCoach = () => {
  const [competitions, setCompetitions] = useState([
    { team: "Team A", date: "2025-01-10", time: "16:00" },
    { team: "Team B", date: "2025-01-12", time: "18:30" },
    { team: "Team C", date: "2025-01-15", time: "14:00" },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: "", ascending: true });

  const sortData = (key, isDate = false) => {
    const sortedCompetitions = [...competitions].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      if (isDate) {
        return sortConfig.ascending
          ? new Date(valueA) - new Date(valueB)
          : new Date(valueB) - new Date(valueA);
      }

      return sortConfig.ascending
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });

    setCompetitions(sortedCompetitions);
    setSortConfig({ key, ascending: !sortConfig.ascending });
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", paddingTop: "20px" }}>
      <header
      
        style={{
          textAlign: "center",
          backgroundColor: "#4caf50",
          padding: "20px",
          color: "white",
        }}
      >
        <h1>Competition coach</h1>
      </header>
      
      {/* Image section */}
      <div>
        <img
          src="/football.jpg" // Ensure the image path is correct (place it in the public folder)
          style={{
            margin: "20px auto",
            display: "block",
            borderRadius: "100px",
            height: "30vh",
          }}
        />
      </div>

      <section
        style={{
          backgroundColor: "white",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "1.8em",
            color: "#333",
            marginBottom: "15px",
          }}
        >
          Your Teams' Upcoming Competitions
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th
                onClick={() => sortData("team")}
                style={{
                  padding: "12px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                  backgroundColor: "#4caf50",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Team
              </th>
              <th
                onClick={() => sortData("date", true)}
                style={{
                  padding: "12px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                  backgroundColor: "#4caf50",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Date
              </th>
              <th
                onClick={() => sortData("time")}
                style={{
                  padding: "12px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                  backgroundColor: "#4caf50",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {competitions.map((competition, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f1f1f1")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    index % 2 === 0 ? "#f9f9f9" : "white")
                }
              >
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  {competition.team}
                </td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  {competition.date}
                </td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  {competition.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CompetitionCoach;
