// Importing necessary testing libraries
const { findGroup } = require('../Coachplan'); // Assuming the function is exported

describe('Coachplan.js Unit Tests', () => {
  // Mock DOM elements
  document.body.innerHTML = `
    <input id="age-input" type="number" value="10" />
    <input id="week-input" type="number" value="5" />
    <div id="result"></div>
  `;

  beforeEach(() => {
    // Clear previous result before each test
    document.getElementById('result').innerHTML = '';
  });

  it('should find the correct group based on age and week', () => {
    // Simulate valid input
    document.getElementById('age-input').value = 9;
    document.getElementById('week-input').value = 5;

    // Call the findGroup function
    findGroup();

    // Check the result
    const result = document.getElementById('result').innerHTML;

    expect(result).toContain("הגיל שלך מתאים ל-קבוצה ג'");
    expect(result).toContain("ימי אימונים: ראשון ושני");
    expect(result).toContain("שעות: 17:00–18:30");
    expect(result).toContain("אימון היום: משחקונים 2x2 עם דגש על שיתוף פעולה");
    expect(result).toContain("בשבוע 5: תחרות בסיסית לכל הקבוצות בימי שבת");
  });

  it('should show an error message for invalid age input', () => {
    // Simulate invalid age input
    document.getElementById('age-input').value = 6;  // Age outside valid range
    document.getElementById('week-input').value = 5;

    // Call the findGroup function
    findGroup();

    // Check the result
    const result = document.getElementById('result').innerHTML;
    expect(result).toContain("נא להכניס גיל תקין בין 7 ל-18.");
  });

  it('should show an error message for invalid week input', () => {
    // Simulate invalid week input
    document.getElementById('age-input').value = 10;
    document.getElementById('week-input').value = 9;  // Week outside valid range

    // Call the findGroup function
    findGroup();

    // Check the result
    const result = document.getElementById('result').innerHTML;
    expect(result).toContain("נא להכניס שבוע תקין בין 1 ל-8.");
  });

  it('should handle no suitable group found', () => {
    // Simulate age with no matching group
    document.getElementById('age-input').value = 6;
    document.getElementById('week-input').value = 5;

    // Call the findGroup function
    findGroup();

    // Check the result
    const result = document.getElementById('result').innerHTML;
    expect(result).toContain("לא נמצאה קבוצה מתאימה.");
  });
});
