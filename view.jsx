import React, { useState } from "react";

const App = () => {
  const [studentDetails, setStudentDetails] = useState(null);
  const [coachDetails, setCoachDetails] = useState(null);

  const getStudentProfile = async (studentId) => {
    try {
      const response = await fetch(`/api/student/${studentId}`);
      const data = await response.json();
      setStudentDetails(data);
    } catch (error) {
      console.error("Error fetching student profile:", error);
    }
  };

  const getCoachProfile = async (coachId) => {
    try {
      const response = await fetch(`/api/coach/${coachId}`);
      const data = await response.json();
      setCoachDetails(data);
    } catch (error) {
      console.error("Error fetching coach profile:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>צפיה בפרופילים</h1>

      <div style={styles.profileSection}>
        <h2>פרופיל תלמיד</h2>
        <button
          onClick={() => getStudentProfile("student_id_here")}
          style={styles.button}
        >
          הצג פרופיל תלמיד
        </button>
        {studentDetails && (
          <div style={styles.detailsContainer}>
            <p><strong>שם התלמיד:</strong> {studentDetails.name}</p>
            <p><strong>גיל:</strong> {studentDetails.age}</p>
            <p><strong>הישגים:</strong> {studentDetails.achievements.join(", ")}</p>
            <p><strong>התקדמות:</strong> {studentDetails.progress}</p>
            <p><strong>קבוצה:</strong> {studentDetails.team}</p>
          </div>
        )}
      </div>

      <div style={styles.profileSection}>
        <h2>פרופיל מאמן</h2>
        <button
          onClick={() => getCoachProfile("coach_id_here")}
          style={styles.button}
        >
          הצג פרופיל מאמן
        </button>
        {coachDetails && (
          <div style={styles.detailsContainer}>
            <p><strong>שם המאמן:</strong> {coachDetails.name}</p>
            <p><strong>טלפון:</strong> {coachDetails.phone}</p>
            <p><strong>קבוצות תחת ניהולו:</strong> {coachDetails.teamsManaged.join(", ")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(100deg, rgba(159,215,156,1) 0%, rgb(250, 203, 77) 100%)",
    margin: "0",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    color: "#333",
  },
  profileSection: {
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px 20px",
    textAlign: "center",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    textDecoration: "none",
    border: "none",
    marginTop: "10px",
  },
  detailsContainer: {
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "5px",
    marginTop: "10px",
    textAlign: "left",
    maxWidth: "600px",
    margin: "10px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default App;
