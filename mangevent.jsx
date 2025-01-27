import React, { useState, useEffect } from "react";

const App = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: "", date: "", description: "" });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/events");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/add-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        alert("האירוע נשמר בהצלחה");
        fetchEvents();
        setNewEvent({ name: "", date: "", description: "" });
      } else {
        alert("שגיאה בשמירת האירוע");
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>ניהול אירועים וטורנירים</h1>
      </header>

      <div style={styles.formContainer}>
        <h2>הוסף אירוע או טורניר חדש</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="eventName">שם האירוע/טורניר:</label>
          <input
            type="text"
            id="eventName"
            name="name"
            value={newEvent.name}
            onChange={handleInputChange}
            required
            style={styles.input}
          />

          <label htmlFor="eventDate">תאריך האירוע:</label>
          <input
            type="date"
            id="eventDate"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            required
            style={styles.input}
          />

          <label htmlFor="eventDescription">תיאור האירוע:</label>
          <textarea
            id="eventDescription"
            name="description"
            value={newEvent.description}
            onChange={handleInputChange}
            rows="4"
            required
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>שלח את האירוע</button>
        </form>
      </div>

      <div style={styles.eventsList}>
        <h2>אירועים וטורנירים קיימים</h2>
        {events.map((event, index) => (
          <div key={index} style={styles.eventItem}>
            <h3>{event.name}</h3>
            <p><strong>תאריך:</strong> {event.date}</p>
            <p><strong>תיאור:</strong> {event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#e0a20f",
    color: "#040404",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    color: "#f8f4f4",
    backgroundImage: "url('https://i.pinimg.com/564x/9a/a4/f0/9aa4f04cfa90e4f4d90eae31729343f7.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "50px 20px",
  },
  formContainer: {
    backgroundColor: "#fa6508",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    marginTop: "30px",
    maxWidth: "600px",
    margin: "30px auto",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  button: {
    backgroundColor: "#25e054",
    color: "#f6fff3",
    border: "none",
    padding: "15px 25px",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  eventsList: {
    marginTop: "40px",
    maxWidth: "900px",
    margin: "40px auto",
  },
  eventItem: {
    backgroundColor: "#ffffff",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 5px 10px rgba(168, 22, 22, 0.1)",
  },
};

export default App;