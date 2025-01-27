// JavaScript code for "Coach Personal Area" page

// Function to dynamically update greeting based on the time of day
function updateGreeting() {
    const headerText = document.querySelector('.header-text');
    const currentHour = new Date().getHours();

    let greeting = "ערב טוב";
    if (currentHour < 12) {
        greeting = "בוקר טוב";
    } else if (currentHour < 18) {
        greeting = "צהריים טובים";
    }
    
    headerText.textContent = `${greeting}! מאמנים`;
}

// Function to handle logout
function handleLogout() {
    if (confirm('האם אתה בטוח שברצונך להתנתק?')) {
        // Redirect to main page or login page
        window.location.href = "Mpage.html";
    }
}

// Add event listeners for logout link
function setupLogoutEvent() {
    const logoutLink = document.querySelector('.logout-link');
    logoutLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        handleLogout();
    });
}

// Add hover effect to cards
function setupCardInteractivity() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            card.style.transform = 'scale(1)';
        });
    });
}

// Initialize all the page features
function initializePage() {
    updateGreeting();
    setupLogoutEvent();
    setupCardInteractivity();
}

// Run the initialization function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);
