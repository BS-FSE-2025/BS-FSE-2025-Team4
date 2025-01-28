import React, { useState } from 'react';

const TeamIdentification = () => {
  const [age, setAge] = useState('');
  const [week, setWeek] = useState('');
  const [result, setResult] = useState('');

  // Training data
  const trainingData = [
    {
      ageRange: [7, 10],
      days: ['ראשון', 'שני'],
      groups: [
        { age: 7, name: "קבוצה א'", time: "14:00–15:30", activity: "תרגול מסירות, כדרור ועצירת כדור" },
        { age: 8, name: "קבוצה ב'", time: "15:30–17:00", activity: "פיתוח מוטוריקה עם תרגילי סלאלום וכדרור" },
        { age: 9, name: "קבוצה ג'", time: "17:00–18:30", activity: "משחקונים 2x2 עם דגש על שיתוף פעולה" },
        { age: 10, name: "קבוצה ד'", time: "18:30–20:00", activity: "משחק חופשי ומשימות אישיות" }
      ]
    },
    {
      ageRange: [11, 14],
      days: ['שלישי', 'רביעי'],
      groups: [
        { age: 11, name: "קבוצה א'", time: "14:00–15:30", activity: "תרגול טכניקות מתקדמות" },
        { age: 12, name: "קבוצה ב'", time: "15:30–17:00", activity: "פיתוח קואורדינציה קבוצתית" },
        { age: 13, name: "קבוצה ג'", time: "17:00–18:30", activity: "תרגול הגנה והתקפה" },
        { age: 14, name: "קבוצה ד'", time: "18:30–20:00", activity: "ניתוח משחק ומשחקונים" }
      ]
    },
    {
      ageRange: [15, 18],
      days: ['חמישי', 'שישי'],
      groups: [
        { age: 15, name: "קבוצה א'", time: "14:00–15:30", activity: "אימונים פיזיים מתקדמים" },
        { age: 16, name: "קבוצה ב'", time: "15:30–17:00", activity: "אסטרטגיות משחק" },
        { age: 17, name: "קבוצה ג'", time: "17:00–18:30", activity: "משחקים טקטיים" },
        { age: 18, name: "קבוצה ד'", time: "18:30–20:00", activity: "ניתוח משחק ותרגול אישי" }
      ]
    }
  ];

  // Function to find the appropriate group based on age and week
  const findGroup = () => {
    const ageInput = parseInt(age);
    const weekInput = parseInt(week);

    // Check if age and week are valid
    if (isNaN(ageInput) || ageInput < 7 || ageInput > 18) {
      setResult("נא להכניס גיל תקין בין 7 ל-18.");
      return;
    }

    if (isNaN(weekInput) || weekInput < 1 || weekInput > 8) {
      setResult("נא להכניס שבוע תקין בין 1 ל-8.");
      return;
    }

    // Find the appropriate group based on age
    let selectedGroup = null;
    let selectedDays = [];
    let selectedTime = "";
    let selectedActivity = "";

    for (const training of trainingData) {
      if (ageInput >= training.ageRange[0] && ageInput <= training.ageRange[1]) {
        selectedGroup = training.groups.find(group => group.age === ageInput);
        selectedDays = training.days;
        selectedTime = selectedGroup.time;
        selectedActivity = selectedGroup.activity;
        break;
      }
    }

    // Display the result
    if (selectedGroup) {
      let competitionType = "";
      if (weekInput >= 5 && weekInput <= 8) {
        if (weekInput === 5) competitionType = "תחרות בסיסית";
        else if (weekInput === 6) competitionType = "תחרות רבע גמר";
        else if (weekInput === 7) competitionType = "תחרות חצי גמר";
        else if (weekInput === 8) competitionType = "תחרות גמר";

        setResult(`
          הגיל שלך מתאים ל-${selectedGroup.name}
          <br/>
          <strong>ימי אימונים:</strong> ${selectedDays.join(" ו")}
          <br/>
          <strong>שעות:</strong> ${selectedTime}
          <br/>
          <strong>אימון היום:</strong> ${selectedActivity}
          <br/>
          <strong>בשבוע ${weekInput}:</strong> ${competitionType} לכל הקבוצות בימי שבת
        `);
      }
    } else {
      setResult("לא נמצאה קבוצה מתאימה.");
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', margin: '20px', background: 'url(plan1.jpg) no-repeat center center fixed', backgroundSize: 'cover' }}>
      <h1 style={{ textAlign: 'center' }}>זיהוי קבוצה ואימון</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <label htmlFor="age-input">הכנס את גילך (בין 7 ל-18):</label>
        <input
          type="number"
          id="age-input"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="הכנס גיל"
          min="7"
          max="18"
        />

        <label htmlFor="week-input">הכנס את השבוע (בין 1 ל-8):</label>
        <input
          type="number"
          id="week-input"
          value={week}
          onChange={(e) => setWeek(e.target.value)}
          placeholder="הכנס שבוע"
          min="1"
          max="8"
        />

        <button onClick={findGroup}>מצא קבוצה ואימון (אחרי השבוע החמישי)</button>

        <div
          style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            borderRadius: '4px',
            boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
          }}
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </div>
    </div>
  );
};

export default TeamIdentification;