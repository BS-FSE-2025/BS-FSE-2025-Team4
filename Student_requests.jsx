import { useState, useEffect } from "react";

const App = () => {
  const [service, setService] = useState("מנהל");
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [requestDetails, setRequestDetails] = useState(null);

  // Load saved request data from localStorage on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRequest = localStorage.getItem("requestData");
      if (storedRequest) {
        setRequestDetails(JSON.parse(storedRequest));
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the current date
    const currentDate = new Date().toISOString().split("T")[0];

    // Check if the selected date has passed
    if (date < currentDate) {
      setMessage("התאריך שציינת עבר, נסה שנית");
      setRequestDetails(null);
      return;
    }

    // Save the request data
    const requestData = {
      service,
      date: formatDate(date), // Format date as DD/MM/YYYY
      subject,
    };

    localStorage.setItem("requestData", JSON.stringify(requestData));
    setRequestDetails(requestData);

    setMessage("הבקשה שלך נשלחה בהצלחה!");
    setDate(""); // Reset the date input
    setSubject(""); // Reset the subject input
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  const resetForm = () => {
    setService("מנהל");
    setDate("");
    setSubject("");
    setMessage("");
    setRequestDetails(null);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        direction: "rtl",
        background:
          "linear-gradient(0deg, rgba(159,215,156,1) 0%, rgba(253,187,45,1) 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          width: "50%",
          margin: "50px auto",
          padding: "30px",
          backgroundColor: "#e3ebf1",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(19, 93, 190, 0.981)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>
          מערכת שליחת בקשת סטודנט למנהל / למאמן בקהילה
        </h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="service">בחר שירות מבוקש:</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              margin: "8px 0",
              border: "2px solid #170c58",
              borderRadius: "25px",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            <option value="מנהל">מנהל</option>
            <option value="מאמן 1">מאמן 1</option>
            <option value="מאמן 2">מאמן 2</option>
            <option value="מאמן 3">מאמן 3</option>
          </select>

          <label htmlFor="date">תאריך בקשה:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              margin: "8px 0",
              border: "2px solid #170c58",
              borderRadius: "25px",
              fontSize: "16px",
              textAlign: "center",
            }}
          />

          <label htmlFor="subject">נושא הפגישה:</label>
          <textarea
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="כתוב את הבקשה שלך..."
            required
            style={{
              width: "100%",
              padding: "8px",
              margin: "8px 0",
              border: "2px solid #170c58",
              borderRadius: "25px",
              fontSize: "16px",
              textAlign: "center",
              height: "120px",
              resize: "none",
            }}
          ></textarea>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <button
              type="submit"
              style={{
                width: "48%",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              שלח בקשה
            </button>
            <button
              type="button"
              onClick={resetForm}
              style={{
                width: "48%",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              אפס טופס
            </button>
          </div>
        </form>

        <div id="message" style={{ color: "red", textAlign: "center" }}>
          {message}
        </div>

        {requestDetails && (
          <div
            id="requestDetails"
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
              textAlign: "center",
            }}
          >
            <p>
              <strong>שירות מבוקש:</strong> {requestDetails.service}
            </p>
            <p>
              <strong>תאריך בקשה:</strong> {requestDetails.date}
            </p>
            <p>
              <strong>נושא הפגישה:</strong> {requestDetails.subject}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
