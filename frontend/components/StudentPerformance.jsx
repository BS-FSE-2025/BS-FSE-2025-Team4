import React, { useState, useEffect } from "react";

const StudentPerformance = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [trainingName, setTrainingName] = useState("");
  const [performanceReview, setPerformanceReview] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("https://your-mongodb-api-endpoint.com/students"); // Replace with actual endpoint
        const data = await response.json();
        setStudents(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching students:", error);
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      studentId: selectedStudent,
      trainingName,
      performanceReview,
    };

    console.log("Form submitted:", formData);
    alert("Data submitted successfully!");
    setSelectedStudent("");
    setTrainingName("");
    setPerformanceReview("");
  };

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(0deg, rgba(159,215,156,1) 0%, rgba(253,187,45,1) 100%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: 0,
    },
    form: {
      backgroundColor: "#fff",
      padding: "2rem",
      width: "40%",
      borderRadius: "20px",
      boxShadow: "0 0 10px rgba(198, 94, 94, 0.981)",
      display: "flex",
      flexDirection: "column",
    },
    title: {
      marginBottom: "1.5rem",
      color: "#fdbb2d",
      fontSize: "1.5rem",
      textAlign: "center",
    },
    label: {
      float: "right",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    select: {
      width: "100%",
      padding: "0.5rem",
      marginBottom: "1rem",
      border: "2px solid #ccc",
      borderRadius: "15px",
    },
    textarea: {
      width: "100%",
      padding: "0.5rem",
      marginBottom: "1rem",
      border: "2px solid #ccc",
      borderRadius: "15px",
    },
    button: {
      width: "100%",
      padding: "0.5rem",
      backgroundColor: "#9fd79c",
      color: "#000",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    buttonHover: {
      backgroundColor: "#fdbb2d",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>הערכת תלמידים</h2>
        {isLoading ? (
          <p>מעלה תלמידים...</p>
        ) : (
          <>
            <div>
              <label htmlFor="student" style={styles.label}>בחר תלמיד:</label>
              <select
                id="student"
                style={styles.select}
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
              >
                <option value="">טוען תלמידים...</option>
                {students.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="trainingName" style={styles.label}>שם האימון:</label>
              <textarea
                id="trainingName"
                rows="1"
                style={styles.textarea}
                value={trainingName}
                onChange={(e) => setTrainingName(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="performanceReview" style={styles.label}>הערכת תלמיד</label>
              <textarea
                id="performanceReview"
                rows="3"
                style={styles.textarea}
                value={performanceReview}
                onChange={(e) => setPerformanceReview(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
              שליחה
            </button>
          </>
        )}
      </form>
    </div>
  );
};
export default StudentPerformance;