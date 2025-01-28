import React, { useState, useEffect } from "react";

const CoachRespond = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [response, setResponse] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(
          "https://example.com/students" 
        );
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!selectedStudent) newErrors.student = "שדה זה הינו חובה";
    if (!response.trim()) newErrors.response = "שדה זה הינו חובה";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // שליחת הנתונים לשרת
    console.log("Submitted: ", { selectedStudent, response });
    alert("מענה נשלח בהצלחה ");
    setResponse("");
    setSelectedStudent("");
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to bottom, #9fd79c, #fdbb2d)"
    },
    form: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px"
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#fdbb2d",
      textAlign: "center",
      marginBottom: "1.5rem",
      direction:"rtl"
    },
    label: {
      display: "block",
      fontWeight: "600",
      marginBottom: "0.5rem",
      color: "#333",
      direction:"rtl"
    },
    select: {
      width: "100%",
      padding: "0.5rem",
      borderRadius: "0.5rem",
      border: "2px solid #ccc",
      marginBottom: "1rem"
    },
    textarea: {
      width: "100%",
      padding: "0.5rem",
      borderRadius: "0.5rem",
      border: "2px solid #ccc",
      marginBottom: "1rem",
      direction:"rtl"
    },
    button: {
      width: "100%",
      padding: "0.5rem",
      backgroundColor: "#9fd79c",
      color: "#000",
      border: "none",
      borderRadius: "0.5rem",
      fontWeight: "bold",
      cursor: "pointer"
    },
    buttonHover: {
      backgroundColor: "#fdbb2d",
      color: "#fff"
    },
    errorText: {
      color: "red",
      fontSize: "0.875rem",
      marginTop: "-0.5rem",
      marginBottom: "1rem"
    }
  };

  return (
    <div style={{ ...styles.container, direction: "rtl" }}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>מענה על בקשות תלמידים</h2>
        <div>
          <label htmlFor="student" style={styles.label}>בחירת בקשה</label>
          <select
            id="student"
            style={styles.select}
            value={selectedStudent}
            onChange={(e) => {
              setSelectedStudent(e.target.value);
              setErrors((prev) => ({ ...prev, student: "" }));
            }}
          >
            <option value="">טוען בקשות...</option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
          {errors.student && <p style={styles.errorText}>{errors.student}</p>}
        </div>
        <div>
          <label htmlFor="content" style={styles.label}>מענה על בקשה</label>
          <textarea
            id="content"
            rows="5"
            style={styles.textarea}
            value={response}
            onChange={(e) => {
              setResponse(e.target.value);
              setErrors((prev) => ({ ...prev, response: "" }));
            }}
          ></textarea>
          {errors.response && <p style={styles.errorText}>{errors.response}</p>}
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          שליחה
        </button>
      </form>
    </div>
  );
};
export default CoachRespond;