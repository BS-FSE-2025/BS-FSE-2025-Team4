// Handle the login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Clear any previous error message
    document.getElementById('error-message').textContent = '';

    // Get user input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Hardcoded credentials for demo purposes
    var validUsername = 'coach';
    var validPassword = 'password123';

    // Validate the credentials
    if (username === validUsername && password === validPassword) {
        // Login successful: redirect to another page (e.g., dashboard)
        alert('Login successful!');
        window.location.href = 'welcome.html'; // Replace with the actual redirect URL
    } else {
        // Login failed: display error message
        document.getElementById('error-message').textContent = 'Invalid username or password!';
    }
});
   