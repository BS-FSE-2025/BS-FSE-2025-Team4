import React, { useState } from "react";

const App = () => {
  const [teams, setTeams] = useState([]);

  const fetchTeamStatus = async () => {
    try {
      const response = await fetch("/api/team-status");
      const data = await response.json();
      setTeams(data);
    } catch (error) {
      console.error("Error fetching team status:", error);
    }
  };

  return (
    <div style={styles.container}>
      <header>
        <h1 style={styles.header}>סטטוס הקבוצות</h1>
      </header>

      <button style={styles.button} onClick={fetchTeamStatus}>סטטוס קבוצות</button>

      <div style={styles.teamsContainer}>
        {teams.map((team) => (
          <div key={team.teamName} style={styles.teamCard}>
            <h2 style={styles.teamName}>{team.teamName}</h2>
            <p style={styles.text}>משחקים ששוחקו: {team.totalGamesPlayed}</p>
            <p style={styles.text}>ניצחונות: {team.totalGamesWon}</p>
            <h3 style={styles.playersHeader}>שחקנים:</h3>
            <ul style={styles.playerList}>
              {team.players.map((player) => (
                <li key={player.name} style={styles.playerItem}>
                  {player.name} - משחקים: {player.gamesPlayed}, ניצחונות: {player.gamesWon}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(100deg, rgba(159, 215, 156, 1) 0%, rgb(250, 203, 77) 100%)",
  },
  header: {
    textAlign: "center",
    color: "#100101",
    fontSize: "32px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "18px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "block",
    margin: "20px auto",
    transition: "background-color 0.3s",
  },
  teamsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "20px",
    marginTop: "20px",
  },
  teamCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  teamName: {
    color: "#333",
    fontSize: "24px",
  },
  text: {
    fontSize: "18px",
    color: "#555",
  },
  playersHeader: {
    fontSize: "20px",
    color: "#333",
  },
  playerList: {
    listStyleType: "none",
    padding: 0,
  },
  playerItem: {
    fontSize: "16px",
    color: "#777",
  },
};

export default App;
