// requestForm.test.js
//איך עושים בדיקת יחידה לכוד הזה
// נניח שהקוד שלך נמצא בקובץ בשם requestForm.js
import './requestForm'; // או כל שם אחר לקובץ שלך

describe('Request Form', () => {
    beforeEach(() => {
        // נניח שאתה משתמש ב-DOM, ניצור אלמנטים לדוגמה
        document.body.innerHTML = `
            <form id="requestForm">
                <input id="service" value="שירות לדוגמה" />
                <input id="date" value="2023-10-01" />
                <input id="subject" value="נושא לדוגמה" />
                <button type="submit">שלח</button>
            </form>
            <div id="message"></div>
            <button id="viewRequestBtn" style="display:none;">צפה בבקשה</button>
            <div id="requestDetails"></div>
        `;
    });

    test('should show error message for past date', () => {
        // הגדרת תאריך עבר
        document.getElementById('date').value = '2020-01-01';

        // שליחת הטופס
        document.getElementById('requestForm').dispatchEvent(new Event('submit'));

        // בדוק שההודעה מתעדכנת
        expect(document.getElementById('message').innerText).toBe("התאריך שציינת עבר, אתה לא יכול לשלוח בקשה עם תאריך עבר.");
        expect(document.getElementById('viewRequestBtn').style.display).toBe('none');
    });

    test('should show success message for valid date', () => {
        // הגדרת תאריך עתידי
        document.getElementById('date').value = '2023-12-01';

        // שליחת הטופס
        document.getElementById('requestForm').dispatchEvent(new Event('submit'));

        // בדוק שההודעה מתעדכנת
        expect(document.getElementById('message').innerText).toBe("הבקשה נשלחה בהצלחה!");
        expect(document.getElementById('viewRequestBtn').style.display).toBe('inline');
    });

    test('should store request data in localStorage', () => {
        // הגדרת תאריך עתידי
        document.getElementById('date').value = '2023-12-01';

        // שליחת הטופס
        document.getElementById('requestForm').dispatchEvent(new Event('submit'));

        // בדוק שהנתונים נשמרים ב-localStorage
        const requestData = JSON.parse(localStorage.getItem('requestData'));
        expect(requestData).toEqual({
            service: "שירות לדוגמה",
            date: "2023-12-01",
            subject: "נושא לדוגמה"
        });
    });

    test('should show request details', () => {
        // הגדרת תאריך עתידי
        document.getElementById('date').value = '2023-12-01';
        document.getElementById('requestForm').dispatchEvent(new Event('submit'));

        // קריאה לפונקציה להציג את הפרטים
        showRequestDetails();

        // בדוק שהפרטים מוצגים כראוי
        expect(document.getElementById('requestDetails').innerHTML).toContain("שירות מבוקש: שירות לדוגמה");
        expect(document.getElementById('requestDetails').innerHTML).toContain("תאריך בקשה: 2023-12-01");
        expect(document.getElementById('requestDetails').innerHTML).toContain("נושא הפגישה: נושא לדוגמה");
    });
});