/**
 * @jest-environment jsdom
 */

describe('Coach Profile Functions', () => {
    let document;
  
    beforeEach(() => {
      // הכנת HTML בסיסי עבור הבדיקות
      const html = `
        <div class="profile-details">
          <span id="name-display"></span>
          <input id="name-input" style="display:none" />
          <span id="age-display"></span>
          <input id="age-input" style="display:none" />
          <span id="email-display"></span>
          <input id="email-input" style="display:none" />
          <span id="phone-display"></span>
          <input id="phone-input" style="display:none" />
          <span id="username-display"></span>
          <input id="username-input" style="display:none" />
          <span id="password-display"></span>
          <input id="password-input" style="display:none" />
          <button class="edit-button" style="display:block"></button>
          <button class="save-button" style="display:none"></button>
        </div>
      `;
      document = new DOMParser().parseFromString(html, 'text/html');
      global.document = document;
  
      // שמירה של פונקציות לטעינת פרופיל
      const { loadProfile, editProfile, saveProfile } = require('./coachprofile.js');
      global.loadProfile = loadProfile;
      global.editProfile = editProfile;
      global.saveProfile = saveProfile;
    });
  
    test('should load coach profile from localStorage or use default profile', () => {
      // במקרה שבו אין מידע ב-localStorage
      localStorage.clear();
      loadProfile();
  
      // בדיקה שהנתונים ב-display הם ברירת מחדל
      expect(document.getElementById('name-display').textContent).toBe('שם לדוגמה');
      expect(document.getElementById('age-display').textContent).toBe('40');
      expect(document.getElementById('email-display').textContent).toBe('coach@email.com');
      expect(document.getElementById('phone-display').textContent).toBe('050-1234567');
      expect(document.getElementById('username-display').textContent).toBe('coach123');
      expect(document.getElementById('password-display').textContent).toBe('coachpassword');
    });
  
    test('should switch to edit mode and display inputs', () => {
      editProfile();
  
      // בדיקה שה-inputים מוצגים וה-span מוסתרים
      document.querySelectorAll('.profile-details input').forEach(input => {
        expect(input.style.display).toBe('block');
      });
      document.querySelectorAll('.profile-details span').forEach(span => {
        expect(span.style.display).toBe('none');
      });
    });
  
    test('should save coach profile data to localStorage and update the display', () => {
      // סימולציה של עריכת נתונים
      document.getElementById('name-input').value = 'מאמן חדש';
      document.getElementById('age-input').value = '45';
      document.getElementById('email-input').value = 'newcoach@email.com';
      document.getElementById('phone-input').value = '050-7654321';
      document.getElementById('username-input').value = 'newcoach';
      document.getElementById('password-input').value = 'newpassword';
  
      // שמירה
      saveProfile();
  
      // בדיקה שהפרופיל נשמר ב-localStorage
      const savedProfile = JSON.parse(localStorage.getItem('coachProfile'));
      expect(savedProfile.name).toBe('מאמן חדש');
      expect(savedProfile.age).toBe('45');
      expect(savedProfile.email).toBe('newcoach@email.com');
      expect(savedProfile.phone).toBe('050-7654321');
      expect(savedProfile.username).toBe('newcoach');
      expect(savedProfile.password).toBe('newpassword');
  
      // בדיקה שהנתונים מוצגים מחדש בעמוד
      expect(document.getElementById('name-display').textContent).toBe('מאמן חדש');
      expect(document.getElementById('age-display').textContent).toBe('45');
      expect(document.getElementById('email-display').textContent).toBe('newcoach@email.com');
      expect(document.getElementById('phone-display').textContent).toBe('050-7654321');
      expect(document.getElementById('username-display').textContent).toBe('newcoach');
      expect(document.getElementById('password-display').textContent).toBe('newpassword');
    });
  });
  