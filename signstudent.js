document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        clearErrorMessages();

        const name = document.getElementById('name').value.trim(); // מקבל את הערך שהוזן בשדה ומסיר רווחים מתחילתו וסופו
        const age = document.getElementById('age').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const parentPhone = document.getElementById('parent-phone').value.trim();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        const validationErrors = validateForm(name, age, email, phone, parentPhone, username, password); // ביצוע תקינות ערכים
        if (validationErrors !== true) {  // אם יש שגיאות
            displayErrorMessages(validationErrors);
            return;
        }

        console.log('התחברת בהצלחה'); // הדפסת הודעה בקונסול
        alert('התחברת בהצלחה!');
    });

    function validateForm(name, age, email, phone, parentPhone, username, password) { //פונקציה לבדיקת תקינות ערכים
        const errors = {}; // מערך לשמירת השגיאות

        if (!name) errors.name = 'חובה למלא את השם שלך'; // אם השדה ריק, מוסיף הודעת שגיאה למערך
        else if (name.search(/[0-9]/) >= 0) errors.name = 'השם לא יכול לכלול מספרים';
 
        if (!age) errors.age = 'חובה למלא את הגיל שלך';
        else if (isNaN(age) || age < 7 || age > 18) errors.age = 'הגיל חייב להיות בגילאי 7-18 בלבד';

        if (!email) errors.email = 'חובה למלא את האימייל שלך';
        else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'האימייל חייב לכלול @ ולהיות חוקי';

        if (!phone) errors.phone = 'חובה למלא את מספר הטלפון שלך';
        else if (phone.length !== 10 || phone.search(/[0-9]/) < 0 || !phone.startsWith('05')) {
            errors.phone = 'מספר הטלפון חייב להיות מספרים בלבד, בדיוק 10 ספרות ולהתחיל ב-05';
        }

        if (!parentPhone) errors['parent-phone'] = 'חובה למלא את מספר הטלפון של ההורה';
        else if (parentPhone.length !== 10 || parentPhone.search(/[0-9]/) < 0 || !parentPhone.startsWith('05')) {
            errors['parent-phone'] = 'מספר הטלפון של ההורה חייב להיות מספרים בלבד, בדיוק 10 ספרות ולהתחיל ב-05';
        }

        if (phone === parentPhone) errors['parent-phone'] = 'מספר הטלפון שלך ושל ההורה לא יכולים להיות זהים';

        if (!username) errors.username = 'חובה למלא את שם המשתמש שלך';
        else if (username.length !== 8) errors.username = 'שם המשתמש חייב להיות בדיוק 8 תווים';

        if (!password) errors.password = 'חובה למלא את הסיסמה שלך';
        else if (password.length !== 8) errors.password = 'הסיסמה חייבת להיות בדיוק 8 תווים';
        else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!#$%^&*_.]/.test(password)) {
            errors.password = 'הסיסמה חייבת לכלול אותיות קטנות וגדולות, מספרים ותווים מיוחדים (!#$%^&*_)';
        }

        return Object.keys(errors).length === 0 ? true : errors;
    }

    function displayErrorMessages(errors) {  // פונקציה להצגת הודעות שגיאה
        for (const [key, message] of Object.entries(errors)) {  // מעבר על המערך של השגיאות
            const inputField = document.getElementById(key);
            if (inputField) {
                inputField.value = ''; // מחיקת הערך שהוזן בשדה
                inputField.placeholder = message; // שם הודעת שגיאה בתוך השדה
                inputField.classList.add('error'); // הוספת סגנון לשדה עם הודעת שגיאה
            }
        }
    }

    function clearErrorMessages() {   // פונקציה לניקוי הודעות שגיאה
        const inputs = document.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.placeholder = ''; // מנקה את ההודעה שכבר קיימת
            input.classList.remove('error'); // מחזיר את הסגנון למצבו הרגיל
        });
    }
});