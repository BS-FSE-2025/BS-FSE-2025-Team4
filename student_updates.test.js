/**
 * @jest-environment jsdom
 */

describe('fetchUpdates Function', () => {
    let document;
  
    beforeEach(() => {
      // הכנת HTML בסיסי עבור הבדיקות
      const html = `
        <div id="updates-container"></div>
      `;
      document = new DOMParser().parseFromString(html, 'text/html');
      global.document = document;
  
      // טוען את הפונקציה לבדיקה
      const { fetchUpdates } = require('./student_updates.js');
      global.fetchUpdates = fetchUpdates;
    });
  
    test('should display the correct number of updates', () => {
      // קריאה לפונקציה
      fetchUpdates();
  
      // בדיקה שמספר העדכונים בקונטיינר שווה לאורך המערך
      const updatesContainer = document.getElementById('updates-container');
      const updates = updatesContainer.getElementsByClassName('update-item');
      expect(updates.length).toBe(3); // מספר העדכונים לפי מערך הדוגמה
    });
  
    test('should display the correct content for each update', () => {
      fetchUpdates();
  
      const updatesContainer = document.getElementById('updates-container');
      const updates = updatesContainer.getElementsByClassName('update-item');
  
      // בדיקה עבור עדכון 1
      expect(updates[0].querySelector('h3').textContent).toBe('ביטול אימון');
      expect(updates[0].querySelector('p').textContent).toBe('האימון של מחר בוטל עקב מזג אוויר סוער.');
      expect(updates[0].querySelector('.date').textContent).toBe('2024-12-21');
  
      // בדיקה עבור עדכון 2
      expect(updates[1].querySelector('h3').textContent).toBe('עדכון אימון');
      expect(updates[1].querySelector('p').textContent).toBe('המשטר החדש של האימון יתחיל ביום ראשון.');
      expect(updates[1].querySelector('.date').textContent).toBe('2024-12-22');
  
      // בדיקה עבור עדכון 3
      expect(updates[2].querySelector('h3').textContent).toBe('הודעה');
      expect(updates[2].querySelector('p').textContent).toBe('חדר הכושר ייסגר במהלך חג החנוכה.');
      expect(updates[2].querySelector('.date').textContent).toBe('2024-12-23');
    });
  
    test('should clear previous updates before displaying new ones', () => {
      // יצירת תוכן קודם בקונטיינר
      const updatesContainer = document.getElementById('updates-container');
      updatesContainer.innerHTML = '<div class="update-item">Old Update</div>';
  
      // קריאה לפונקציה
      fetchUpdates();
  
      // בדיקה שהתוכן הקודם נמחק
      expect(updatesContainer.innerHTML.includes('Old Update')).toBe(false);
  
      // בדיקה שהתוכן החדש מוצג
      const updates = updatesContainer.getElementsByClassName('update-item');
      expect(updates.length).toBe(3);
    });
  });
  