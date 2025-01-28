describe('Student Requests Functionality', () => {
    beforeEach(() => {
      // Mock DOM elements for the form
      document.body.innerHTML = `
        <form id="requestForm">
          <input id="service" value="שירות 1" />
          <input id="date" type="date" value="2025-01-30" />
          <input id="subject" value="נושא הפגישה 1" />
          <button id="viewRequestBtn" style="display:none;" onclick="showRequestDetails()">הצג בקשה</button>
          <div id="message"></div>
          <div id="requestDetails" style="display:none;"></div>
        </form>
      `;
    });
  
    it('should display error if the selected date is in the past', () => {
      // Set the date to a past date
      document.getElementById('date').value = '2020-01-01';
  
      // Submit the form
      document.getElementById('requestForm').dispatchEvent(new Event('submit'));
  
      // Check the error message
      expect(document.getElementById('message').innerText).toBe('התאריך שציינת עבר, אתה לא יכול לשלוח בקשה עם תאריך עבר.');
      expect(document.getElementById('viewRequestBtn').style.display).toBe('none');
    });
  
    it('should successfully submit the form and store request data in localStorage', () => {
      // Set the date to a future date
      document.getElementById('date').value = '2025-01-30';
  
      // Submit the form
      document.getElementById('requestForm').dispatchEvent(new Event('submit'));
  
      // Check success message and button visibility
      expect(document.getElementById('message').innerText).toBe('הבקשה נשלחה בהצלחה!');
      expect(document.getElementById('viewRequestBtn').style.display).toBe('inline');
  
      // Check that request data is stored in localStorage
      const requestData = JSON.parse(localStorage.getItem('requestData'));
      expect(requestData).toEqual({
        service: 'שירות 1',
        date: '2025-01-30',
        subject: 'נושא הפגישה 1'
      });
    });
  
    it('should show request details when the "view request" button is clicked', () => {
      // Simulate submitting the form
      document.getElementById('date').value = '2025-01-30';
      document.getElementById('requestForm').dispatchEvent(new Event('submit'));
  
      // Simulate clicking the "view request" button
      document.getElementById('viewRequestBtn').dispatchEvent(new Event('click'));
  
      // Check that the request details are displayed
      const requestDetails = document.getElementById('requestDetails').innerHTML;
      expect(requestDetails).toContain('שירות מבוקש: שירות 1');
      expect(requestDetails).toContain('תאריך בקשה: 2025-01-30');
      expect(requestDetails).toContain('נושא הפגישה: נושא הפגישה 1');
    });
  
    it('should show a message if no request is stored in localStorage', () => {
      // Ensure localStorage is empty before the test
      localStorage.removeItem('requestData');
  
      // Call the function to show request details
      showRequestDetails();
  
      // Check that the appropriate message is displayed
      expect(document.getElementById('requestDetails').innerHTML).toBe('לא נמצאו בקשות לשמירה.');
    });
  });
  