/**
 * @jest-environment jsdom
 */
//השתמשתי ב-jest לבדיקת הקוד
const fetchMock = require('jest-fetch-mock');//ספרייה שיוצרת מבנה HTML לבדיקת הקוד
fetchMock.enableMocks();

const { JSDOM } = require('jsdom');

describe('Mevents.js', () => {
  let dom;
  let document;
  let window;

  beforeEach(() => {
    //  מבנה חיקוי ל HTML להוספת אירוע
    const html = `
      <form class="event-form">
        <input id="event-name" value="Test Event" />
        <input id="event-date" value="2024-12-31" />
        <input id="event-time" value="18:00" />
        <input id="event-location" value="Test Location" />
        <textarea id="event-description">Test Description</textarea>
        <button type="submit">Submit</button>
      </form>
    `;
    dom = new JSDOM(html);  // התייחסות כאילו מדובר בדפדפן אמיתי
    document = dom.window.document; 
    window = dom.window;

    // חיקוי ל
    fetch.resetMocks();
  });

  it('should collect form data correctly', () => { //בדיקת תקינות הקלט
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;
    const eventLocation = document.getElementById('event-location').value;
    const eventDescription = document.getElementById('event-description').value;

    expect(eventName).toBe('Test Event'); 
    expect(eventDate).toBe('2024-12-31');
    expect(eventTime).toBe('18:00');
    expect(eventLocation).toBe('Test Location');
    expect(eventDescription).toBe('Test Description');
  });

  it('should validate and submit the form', async () => { //בדיקת הכנסת הנתונים לשרת
    // חיקוי ל fetch
    fetch.mockResponseOnce(JSON.stringify({ message: 'Event added successfully' }), { status: 200 });

    // חיקוי ל אירוע הכנסת הנתונים לשרת
    const form = document.querySelector('.event-form');
    const submitEvent = new window.Event('submit');
    let alertMessage = null;

    //חיקוי ל alert
    window.alert = (message) => {
      alertMessage = message;
    };

    // טופס הכנסת אירוע
    require('./Mevents.js');
    form.dispatchEvent(submitEvent);

    // מחכה לסיום הפעולה
    await new Promise((r) => setTimeout(r, 10));

    // בודק אם הפונקציה נקראה פעם אחת
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/add-event', expect.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName: 'Test Event',
        eventDate: '2024-12-31',
        eventTime: '18:00',
        eventLocation: 'Test Location',
        eventDescription: 'Test Description',
      }),
    }));
    expect(alertMessage).toBe('האירוע נוסף בהצלחה');
  });

  it('should show an alert if fields are missing', () => {
    const form = document.querySelector('.event-form');
    const eventName = document.getElementById('event-name');
    let alertMessage = null;

    // 
    eventName.value = '';

    // 
    window.alert = (message) => {
      alertMessage = message;
    };

    // 
    const submitEvent = new window.Event('submit');
    require('./Mevents.js');
    form.dispatchEvent(submitEvent);

    // בודק אם הפונקציה נקראה פעם אחת
    expect(alertMessage).toBe('אנא מלא את כל השדות');
  });
});
