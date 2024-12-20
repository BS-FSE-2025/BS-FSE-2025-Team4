// Mock the DOM structure
document.body.innerHTML = `
    <form id="requestForm">
        <input id="service" value="Consultation" />
        <input id="date" />
        <input id="subject" value="Budget Planning" />
        <button type="submit">Submit</button>
    </form>
    <div id="message"></div>
    <button id="viewRequestBtn" style="display: none;">View Request</button>
    <div id="requestDetails" style="display: none;"></div>
`;

// Import the code to test (paste your code here or import from another file)
require('./yourScript.js');

describe('Form Submission', () => {
    test('should display an error if the selected date has passed', () => {
        const dateInput = document.getElementById('date');
        const message = document.getElementById('message');
        const form = document.getElementById('requestForm');

        // Set a past date
        const pastDate = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        dateInput.value = pastDate;

        // Trigger form submission
        form.dispatchEvent(new Event('submit', { bubbles: true }));

        // Check if the correct message is displayed
        expect(message.innerText).toBe("התאריך שציינת עבר, אתה לא יכול לשלוח בקשה עם תאריך עבר.");
        expect(document.getElementById('viewRequestBtn').style.display).toBe('none');
        expect(dateInput.value).toBe('');
    });

    test('should display success message and save data for valid date', () => {
        const dateInput = document.getElementById('date');
        const message = document.getElementById('message');
        const form = document.getElementById('requestForm');
         // Set a future date
         const futureDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];
         dateInput.value = futureDate;
 
         // Trigger form submission
         form.dispatchEvent(new Event('submit', { bubbles: true }));
 
         // Check if the success message is displayed
         expect(message.innerText).toBe("הבקשה נשלחה בהצלחה!");
         expect(document.getElementById('viewRequestBtn').style.display).toBe('inline');
 
         // Check if the data is saved in localStorage
         const savedData = JSON.parse(localStorage.getItem('requestData'));
         expect(savedData).toEqual({
             service: "Consultation",
             date: futureDate,
             subject: "Budget Planning"
         });
     });
 });