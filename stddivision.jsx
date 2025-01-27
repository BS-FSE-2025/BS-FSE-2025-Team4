import React, { useState, useEffect } from "react";

const App = () => {
  const [students, setStudents] = useState([]);
  const [showGroups, setShowGroups] = useState(false);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:3000/students");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleSaveGroups = async () => {
    const updatedStudents = students.map(student => ({
      studentId: student._id,
      group: student.group || ""
    }));

    try {
      const response = await fetch("http://localhost:3000/update-groups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ students: updatedStudents })
      });

      if (response.ok) {
        alert("הקבוצות עודכנו בהצלחה");
      } else {
        alert("שגיאה בשמירת הקבוצות");
      }
    } catch (error) {
      console.error("Error saving groups:", error);
    }
  };

  const handleGroupChange = (id, group) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student._id === id ? { ...student, group } : student
      )
    );
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => {
        setShowGroups(true);
        fetchStudents();
      }}>
        חלוקת קבוצות
      </button>

      {showGroups && (
        <div style={styles.groupsSection}>
          <h2>חלק את התלמידים לקבוצות</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>שם תלמיד</th>
                <th style={styles.tableHeader}>קבוצה</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student._id}>
                  <td style={styles.tableCell}>{student.name}</td>
                  <td style={styles.tableCell}>
                    <input
                      type="text"
                      value={student.group || ""}
                      onChange={e => handleGroupChange(student._id, e.target.value)}
                      placeholder="הזן קבוצה"
                      style={styles.input}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button style={styles.button} onClick={handleSaveGroups}>שמור קבוצות</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(100deg, rgba(159, 215, 156, 1) 0%, rgb(250, 203, 77) 100%)"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#5eac1e",
    color: "rgb(10, 10, 10)",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
    display: "block"
  },
  groupsSection: {
    marginTop: "20px"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px"
  },
  tableHeader: {
    padding: "10px",
    backgroundColor: "#f8f8f8",
    textAlign: "center"
  },
  tableCell: {
    padding: "10px",
    border: "1px solid #efeaea",
    textAlign: "center"
  },
  input: {
    width: "100%",
    padding: "5px",
    border: "1px solid #f5f0f0",
    borderRadius: "5px"
  }
};

export default App;