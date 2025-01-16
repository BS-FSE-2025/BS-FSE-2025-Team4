function checkPasswordLength(password) {
    if (password.length === 8) {
        console.log("הסיסמה באורך תקין.");
        return true;
    } else {
        alert("הסיסמה חייבת להיות בדיוק 8 תווים.");
        return false;
    }
}
const passwordInput = prompt("אנא הכנס סיסמה:");
if (checkPasswordLength(passwordInput)) {
    console.log("הסיסמה עברה את הבדיקה.");
} else {
    console.log("הסיסמה אינה תקינה.");
}
