// טעינת נתוני הפרופיל מה-LocalStorage
function loadProfile() {
    const profile = JSON.parse(localStorage.getItem('studentProfile')) || {};

    // מילוי התצוגה בנתונים
    document.getElementById('name-display').textContent = profile.name || "שם לא זמין";
    document.getElementById('email-display').textContent = profile.email || "אימייל לא זמין";
    document.getElementById('phone-display').textContent = profile.phone || "טלפון לא זמין";
    document.getElementById('username-display').textContent = profile.username || "שם משתמש לא זמין";
    document.getElementById('password-display').textContent = profile.password ? "********" : "סיסמה לא זמינה";

    // מילוי השדות בערכים קיימים
    document.getElementById('name-input').value = profile.name || "";
    document.getElementById('email-input').value = profile.email || "";
    document.getElementById('phone-input').value = profile.phone || "";
    document.getElementById('username-input').value = profile.username || "";
    document.getElementById('password-input').value = profile.password || "";
}

// מעבר למצב עריכה
function editProfile() {
    document.querySelectorAll('.profile-details input').forEach(input => {
        input.style.display = 'block';
    });
    document.querySelectorAll('.profile-details span').forEach(span => {
        span.style.display = 'none';
    });
    document.querySelector('.edit-button').style.display = 'none';
    document.querySelector('.save-button').style.display = 'inline-block';
}

// שמירת השינויים ב-LocalStorage
function saveProfile() {
    const profile = {
        name: document.getElementById('name-input').value,
        email: document.getElementById('email-input').value,
        phone: document.getElementById('phone-input').value,
        username: document.getElementById('username-input').value,
        password: document.getElementById('password-input').value,
    };

    // שמירה ב-LocalStorage
    localStorage.setItem('studentProfile', JSON.stringify(profile));

    // עדכון התצוגה
    loadProfile();

    // מעבר חזרה למצב תצוגה
    document.querySelectorAll('.profile-details input').forEach(input => {
        input.style.display = 'none';
    });
    document.querySelectorAll('.profile-details span').forEach(span => {
        span.style.display = 'inline';
    });
    document.querySelector('.edit-button').style.display = 'inline-block';
    document.querySelector('.save-button').style.display = 'none';
}

// קריאה לפונקציה בעת טעינת הדף
window.onload = loadProfile;
