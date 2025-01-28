import React, { useState } from 'react';

// Inline styles for the components
const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#8ea89e',
  },
  header: {
    backgroundColor: '#1b1b1b',
    color: 'white',
    textAlign: 'center',
    padding: '15px',
  },
  tabs: {
    display: 'flex',
    backgroundColor: '#f4f4f4',
    borderBottom: '1px solid #ccc',
  },
  tab: {
    flex: 1,
    padding: '10px',
    textAlign: 'center',
    border: 'none',
    background: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  activeTab: {
    backgroundColor: '#2d2d2d',
    color: 'white',
  },
  schedule: {
    padding: '20px',
  },
  event: {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  eventTime: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
  },
  eventDetails: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  eventLocation: {
    fontSize: '14px',
    color: '#777',
  },
};

// Event schedule data
const schedules = {
  Sunday: [
    { time: '10:00 AM', details: 'Soccer Practice', location: 'Field A' },
    { time: '1:00 PM', details: 'Team Meeting', location: 'Conference Room' },
  ],
  Monday: [
    { time: '3:00 PM', details: 'Conditioning Drills', location: 'Gym' },
  ],
  Tuesday: [],
  Wednesday: [
    { time: '6:00 PM', details: 'Match Preparation', location: 'Field B' },
  ],
  Thursday: [],
  Friday: [
    { time: '2:00 PM', details: 'Team Building Activity', location: 'Lounge' },
  ],
};

const App = () => {
  const [selectedDay, setSelectedDay] = useState('Sunday');

  // Function to update the selected day
  const updateSchedule = (day) => {
    setSelectedDay(day);
  };

  return (
    <div style={styles.appContainer}>
      <div style={styles.header}>
        <h1>Weekly Schedule</h1>
      </div>

      <div style={styles.tabs}>
        {Object.keys(schedules).map((day) => (
          <button
            key={day}
            style={{
              ...styles.tab,
              ...(selectedDay === day ? styles.activeTab : {}),
            }}
            onClick={() => updateSchedule(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <div style={styles.schedule}>
        {schedules[selectedDay].length === 0 ? (
          <p>No events scheduled for this day.</p>
        ) : (
          schedules[selectedDay].map((event, index) => (
            <div key={index} style={styles.event}>
              <div style={styles.eventTime}>{event.time}</div>
              <div style={styles.eventDetails}>{event.details}</div>
              <div style={styles.eventLocation}>Location: {event.location}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;