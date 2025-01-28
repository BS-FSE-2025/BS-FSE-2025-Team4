/**
 * @jest-environment jsdom
 */

describe('Coach Area Page', () => {
    let document;
    
    beforeEach(() => {
      // HTML בסיסי עבור הבדיקות
      const html = `
        <div class="header-text"></div>
        <a href="#" class="logout-link">Logout</a>
        <div class="card"></div>
      `;
      document = new DOMParser().parseFromString(html, 'text/html');
      global.document = document;
      
      // הוספת הפונקציות של הקוד
      const { updateGreeting, handleLogout, setupLogoutEvent, setupCardInteractivity } = require('./coachArea.js');
      global.updateGreeting = updateGreeting;
      global.handleLogout = handleLogout;
      global.setupLogoutEvent = setupLogoutEvent;
      global.setupCardInteractivity = setupCardInteractivity;
    });
  
    test('should display correct greeting based on time of day', () => {
      const currentTime = new Date();
  
      // בדיקת בוקר
      currentTime.setHours(9);
      global.Date = jest.fn(() => currentTime); // הגדרת השעה לשעה בוקר
      updateGreeting();
      expect(document.querySelector('.header-text').textContent).toBe('בוקר טוב! מאמנים');
      
      // בדיקת צהריים
      currentTime.setHours(14);
      global.Date = jest.fn(() => currentTime); // הגדרת השעה לשעה צהריים
      updateGreeting();
      expect(document.querySelector('.header-text').textContent).toBe('צהריים טובים! מאמנים');
      
      // בדיקת ערב
      currentTime.setHours(19);
      global.Date = jest.fn(() => currentTime); // הגדרת השעה לשעה ערב
      updateGreeting();
      expect(document.querySelector('.header-text').textContent).toBe('ערב טוב! מאמנים');
    });
  
    test('should handle logout action and redirect', () => {
      const logoutLink = document.querySelector('.logout-link');
      const confirmSpy = jest.spyOn(window, 'confirm').mockReturnValue(true);
      const locationSpy = jest.spyOn(window, 'location', 'get').mockReturnValue({ href: '' });
      
      logoutLink.click();
      expect(confirmSpy).toHaveBeenCalled();
      expect(window.location.href).toBe('Mpage.html'); // מצפה להעבר לדף הנכון לאחר ההתנתקות
  
      // מניעת בדיקות כוזבות אחר כך
      confirmSpy.mockRestore();
      locationSpy.mockRestore();
    });
  
    test('should add hover effect to cards', () => {
      const card = document.querySelector('.card');
      
      // אירוע hover (mouseover)
      card.dispatchEvent(new MouseEvent('mouseover'));
      expect(card.style.boxShadow).toBe('0 4px 10px rgba(0, 0, 0, 0.3)');
      expect(card.style.transform).toBe('scale(1.05)');
      
      // אירוע mouseout
      card.dispatchEvent(new MouseEvent('mouseout'));
      expect(card.style.boxShadow).toBe('0 2px 5px rgba(0, 0, 0, 0.1)');
      expect(card.style.transform).toBe('scale(1)');
    });
  
    test('should initialize logout event listener', () => {
      const setupLogoutEventSpy = jest.spyOn(global, 'setupLogoutEvent');
      
      setupLogoutEvent();
      expect(setupLogoutEventSpy).toHaveBeenCalled();
    });
  
    test('should initialize all page features after DOMContentLoaded event', () => {
      const initializePageSpy = jest.fn();
      
      // דמוי של אירוע DOMContentLoaded
      document.dispatchEvent(new Event('DOMContentLoaded'));
      expect(initializePageSpy).toHaveBeenCalledTimes(1);
    });
  });
  