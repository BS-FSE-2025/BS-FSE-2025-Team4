document.addEventListener('DOMContentLoaded', () => {
    const headerText = document.querySelector('.header-text');
    const currentHour = new Date().getHours();
    const greeting =
        currentHour < 12
            ? 'בוקר טוב!'
            : currentHour < 18
            ? 'צהריים טובים!'
            : 'ערב טוב!';
    headerText.textContent = `${greeting} אבו עאמר נאנסי`;
});
const logoutLink = document.querySelector('.logout-link');
logoutLink.addEventListener('click', (e) => {
    const confirmLogout = confirm('האם אתה בטוח שברצונך להתנתק?');
    if (!confirmLogout) {
        e.preventDefault();
    }
});
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.2s, box-shadow 0.2s';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        card.style.transform = 'scale(1)';
    });
});
const redirectButtons = document.querySelectorAll('.card');
redirectButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('onclick').match(/location.href='(.*?)'/)[1];
        window.location.href = link;
    });
});

  
