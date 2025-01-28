const { JSDOM } = require('jsdom');

// HTML mockup
const html = `
  <div id="training-schedule"></div>
  <button id="add-training-btn">Add Training</button>
  <input id="training-input" />
  <div id="message"></div>
`;

let dom;
let document;
let addButton;
let scheduleDiv;
let inputField;
let messageDiv;

// פונקציה לדימוי קובץ JavaScript שלך
beforeEach(() => {
  // יצירת דף HTML דינמי לפני כל בדיקה
  dom = new JSDOM(html);
  document = dom.window.document;

  // הגעת אל האלמנטים
  addButton = document.getElementById('add-training-btn');
  scheduleDiv = document.getElementById('training-schedule');
  inputField = document.getElementById('training-input');
  messageDiv = document.getElementById('message');

  // הנחת שהקובץ שלך מציין את הפונקציות שלך
  require('./TrainingCoach');  // כלול את הקובץ שלך כאן
});

test('should display a training when the button is clicked', () => {
  // הזנת אימון בתיבה
  inputField.value = 'Soccer Practice';

  // לחיצה על כפתור הוספת אימון
  addButton.click();

  // ודא שהאימון נוסף ללוח הזמנים
  expect(scheduleDiv.innerHTML).toContain('Soccer Practice');
});

test('should show an error message if the input is empty', () => {
  // השאר את שדה הקלט ריק
  inputField.value = '';

  // לחיצה על כפתור הוספת אימון
  addButton.click();

  // ודא שההודעת שגיאה מוצגת
  expect(messageDiv.innerHTML).toBe('Please enter a training session!');
});

test('should clear the input field after adding a training', () => {
  // הזנת אימון בתיבה
  inputField.value = 'Yoga Session';

  // לחיצה על כפתור הוספת אימון
  addButton.click();

  // ודא שהשדה ריק אחרי הוספת האימון
  expect(inputField.value).toBe('');
});

test('should not add duplicate training sessions', () => {
  // הוספת אימון ראשון
  inputField.value = 'Cycling Practice';
  addButton.click();

  // הוספת אימון שני אותו אימון
  inputField.value = 'Cycling Practice';
  addButton.click();

  // ודא שהאימון לא נוסף פעמיים
  const trainings = scheduleDiv.querySelectorAll('div');
  expect(trainings.length).toBe(1);
});
