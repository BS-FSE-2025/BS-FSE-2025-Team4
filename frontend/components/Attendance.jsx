import React, { useState, useEffect } from "react";

const Attendance = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("https://your-mongodb-api-endpoint.com/students"); // קריאה לשרת על מנת לקבל את כל התלמידים
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleCheckboxChange = (id, type) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => {
        if (student.id === id) {
          return {
            ...student,
            present: type === "present" ? !student.present : false,
            absent: type === "absent" ? !student.absent : false,
          };
        }
        return student;
      })
    );
  };

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(0deg, rgba(159,215,156,1) 0%, rgba(253,187,45,1) 100%)",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      margin: 0,
    },
    table: {
      backgroundColor: "#ddd",
      color: "#000",
      width: "80%",
      borderCollapse: "collapse",
      margin: "20px 0",
      boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
      overflow: "hidden",
    },
    th: {
      backgroundColor: "#4d41f6",
      color: "#fff",
      padding: "15px",
    },
    td: {
      textAlign: "center",
      padding: "15px",
    },
    rowHover: {
      transition: "background-color 0.3s",
    },
    present: {
      backgroundColor: "#d4edda",
    },
    absent: {
      backgroundColor: "#f8d7da",
    },
    checkboxContainer: {
      position: "relative",
      paddingLeft: "35px",
      marginBottom: "12px",
      cursor: "pointer",
      fontSize: "22px",
      userSelect: "none",
    },
    checkmark: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "25px",
      width: "25px",
      backgroundColor: "#bcbbbb",
    },
    checkmarkChecked: {
      backgroundColor: "#2196F3",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#4d41f6", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", marginBottom: "20px" }}>
        נוכחות
      </h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>לא נוכח</th>
            <th style={styles.th}>נוכח</th>
            <th style={styles.th}>שם</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              style={
                student.present
                  ? styles.present
                  : student.absent
                  ? styles.absent
                  : null
              }
            >
              <td style={styles.td}>
                <label style={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    checked={student.absent}
                    onChange={() => handleCheckboxChange(student.id, "absent")}
                  />
                  <div style={{
                    ...styles.checkmark,
                    ...(student.absent ? styles.checkmarkChecked : {}),
                  }}></div>
                </label>
              </td>
              <td style={styles.td}>
                <label style={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    checked={student.present}
                    onChange={() => handleCheckboxChange(student.id, "present")}
                  />
                  <div style={{
                    ...styles.checkmark,
                    ...(student.present ? styles.checkmarkChecked : {}),
                  }}></div>
                </label>
              </td>
              <td style={styles.td}>{student.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;