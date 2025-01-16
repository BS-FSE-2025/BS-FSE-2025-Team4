const tabs = document.querySelectorAll('.tab');
const schedule = document.getElementById('schedule');

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

// Function to update schedule based on selected day
function updateSchedule(day) {
  schedule.innerHTML = '';
  
  // Check if there are any events for the day
  if (schedules[day].length === 0) {
    schedule.innerHTML = '<p>No events scheduled for this day.</p>';
    return;
  }

  // If events exist, display them
  schedules[day].forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.className = 'event';
    eventDiv.innerHTML = `
      <div class="time">${event.time}</div>
      <div class="details">${event.details}</div>
      <div class="location">Location: ${event.location}</div>
    `;
    schedule.appendChild(eventDiv);
  });
}

// Add event listeners for tab clicks
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove the 'active' class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    
    // Add 'active' class to clicked tab
    tab.classList.add('active');
    
    // Update schedule for the selected day
    updateSchedule(tab.dataset.day);
  });
});

// Initialize the page with Sunday selected by default
tabs[0].classList.add('active');
updateSchedule('Sunday');
