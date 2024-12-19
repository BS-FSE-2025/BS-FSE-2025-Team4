// Event listener for the form submission
document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the data from the form
    var service = document.getElementById('service').value;
    var date = document.getElementById('date').value;
    var subject = document.getElementById('subject').value;

    // Get the current date in YYYY-MM-DD format
    var currentDate = new Date().toISOString().split('T')[0]; 

    // Check if the selected date has passed
    if (date < currentDate) {
        // If the selected date has passed, show a message and reset the form (back to the initial state)
        document.getElementById('message').innerText = "התאריך שציינת עבר. אתה לא יכול לשלוח בקשה עם תאריך עבר.";
        document.getElementById('viewRequestBtn').style.display = 'none'; // Hide the view request button

        // Reset the form to its initial state after the message
        document.getElementById('requestForm').reset();

        // Focus the user on the date input so they can re-enter it
        document.getElementById('date').focus();

        return; // Stop further execution
    }

    // If the date is valid, show a success message
    document.getElementById('message').innerText = "הבקשה נשלחה בהצלחה!";

    // Store the request data (you can store it in localStorage or any other storage)
    var requestData = {
        service: service,
        date: date,
        subject: subject
    };

    // Save the request in localStorage so we can display it later
    localStorage.setItem('requestData', JSON.stringify(requestData));

    // Clear the form after submission
    document.getElementById('requestForm').reset();

    // Show the "view request" button after successful submission
    document.getElementById('viewRequestBtn').style.display = 'inline';
});

// Function to show the request details
function showRequestDetails() {
    // Retrieve the saved request data from localStorage
    var requestData = JSON.parse(localStorage.getItem('requestData'));

    // Check if requestData exists in localStorage
    if (requestData) {
        var requestDetails = `
            <p><strong>שירות מבוקש:</strong> ${requestData.service}</p>
            <p><strong>תאריך בקשה:</strong> ${requestData.date}</p>
            <p><strong>נושא הפגישה:</strong> ${requestData.subject}</p>
        `;
        // Display the request details in the HTML
        document.getElementById('requestDetails').innerHTML = requestDetails;
        document.getElementById('requestDetails').style.display = 'block';
    } else {
        // If no request is found in localStorage, display a message
        document.getElementById('requestDetails').innerHTML = "לא נמצאו בקשות לשמירה.";
        document.getElementById('requestDetails').style.display = 'block';
    }
}
