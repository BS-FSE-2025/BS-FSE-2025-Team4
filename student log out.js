document.addEventListener('DOMContentLoaded', function () {
    // Get the user area and logout button
    const userArea = document.getElementById('user-area');

    // Create the logout button dynamically
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Log Out';
    logoutButton.className = 'logout-button';
    userArea.appendChild(logoutButton);

    // Handle the logout click event
    logoutButton.addEventListener('click', function () {
        // Simulate logout by redirecting to login page
        alert('You have been logged out.');
        window.location.href = '/login.html'; // Replace with your login page path
    });
});

