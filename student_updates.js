// Function to fetch and display updates
function fetchUpdates() {
    // Sample updates (in a real scenario, data could come from a server)
    const updates = [
        { id: 1, type: "ביטול אימון", date: "2024-12-21", description: "האימון של מחר בוטל עקב מזג אוויר סוער." },
        { id: 2, type: "עדכון אימון", date: "2024-12-22", description: "המשטר החדש של האימון יתחיל ביום ראשון." },
        { id: 3, type: "הודעה", date: "2024-12-23", description: "חדר הכושר ייסגר במהלך חג החנוכה." }
    ];

    // Get the container to display the updates
    const updatesContainer = document.getElementById('updates-container');
    
    // Clear any previous updates before displaying new ones
    updatesContainer.innerHTML = "";

    // Loop through the updates array and create HTML elements for each update
    updates.forEach(update => {
        const updateElement = document.createElement('div');
        updateElement.classList.add('update-item');  // Add a class for styling
        updateElement.innerHTML = `
            <h3>${update.type}</h3>
            <p>${update.description}</p>
            <p class="date">${update.date}</p>
        `;
        
        // Append each update to the updates container
        updatesContainer.appendChild(updateElement);
    });
}
