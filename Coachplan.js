// Training data
const trainingData = [
    {
        ageRange: [7, 10], // Corrected age range
        days: ["ראשון", "שני"],
        groups: [
            { age: 7, name: "קבוצה א'", time: "14:00–15:30", activity: "תרגול מסירות, כדרור ועצירת כדור" },
            { age: 8, name: "קבוצה ב'", time: "15:30–17:00", activity: "פיתוח מוטוריקה עם תרגילי סלאלום וכדרור" },
            { age: 9, name: "קבוצה ג'", time: "17:00–18:30", activity: "משחקונים 2x2 עם דגש על שיתוף פעולה" },
            { age: 10, name: "קבוצה ד'", time: "18:30–20:00", activity: "משחק חופשי ומשימות אישיות" }
        ]
    },
    {
        ageRange: [11, 14],
        days: ["שלישי", "רביעי"],
        groups: [
            { age: 11, name: "קבוצה א'", time: "14:00–15:30", activity: "תרגול טכניקות מתקדמות" },
            { age: 12, name: "קבוצה ב'", time: "15:30–17:00", activity: "פיתוח קואורדינציה קבוצתית" },
            { age: 13, name: "קבוצה ג'", time: "17:00–18:30", activity: "תרגול הגנה והתקפה" },
            { age: 14, name: "קבוצה ד'", time: "18:30–20:00", activity: "ניתוח משחק ומשחקונים" }
        ]
    },
    {
        ageRange: [15, 18],
        days: ["חמישי", "שישי"],
        groups: [
            { age: 15, name: "קבוצה א'", time: "14:00–15:30", activity: "אימונים פיזיים מתקדמים" },
            { age: 16, name: "קבוצה ב'", time: "15:30–17:00", activity: "אסטרטגיות משחק" },
            { age: 17, name: "קבוצה ג'", time: "17:00–18:30", activity: "משחקים טקטיים" },
            { age: 18, name: "קבוצה ד'", time: "18:30–20:00", activity: "ניתוח משחק ותרגול אישי" }
        ]
    }
];

// Function to find the appropriate group based on age and week
function findGroup() {
    const age = parseInt(document.getElementById('age-input').value);
    const week = parseInt(document.getElementById('week-input').value);
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ""; // Clear previous results

    // Check if age and week are valid
    if (isNaN(age) || age < 7 || age > 18) {
        resultContainer.innerHTML = "<p>נא להכניס גיל תקין בין 7 ל-18.</p>";
        return;
    }

    if (isNaN(week) || week < 1 || week > 8) {
        resultContainer.innerHTML = "<p>נא להכניס שבוע תקין בין 1 ל-8.</p>";
        return;
    }

    // Find the appropriate group based on age
    let selectedGroup = null;
    let selectedDays = [];
    let selectedTime = "";
    let selectedActivity = "";

    for (const training of trainingData) {
        if (age >= training.ageRange[0] && age <= training.ageRange[1]) {
            // Find the exact group based on age
            selectedGroup = training.groups.find(group => group.age === age);
            selectedDays = training.days;
            selectedTime = selectedGroup.time;
            selectedActivity = selectedGroup.activity;
            break;
        }
    }

    // Display the result
    if (selectedGroup) {
        resultContainer.innerHTML = `
            <p>הגיל שלך מתאים ל-${selectedGroup.name}</p>
            <p><strong>ימי אימונים:</strong> ${selectedDays.join(" ו")}</p>
            <p><strong>שעות:</strong> ${selectedTime}</p>
            <p><strong>אימון היום:</strong> ${selectedActivity}</p>
        `;

        // Competitions for weeks 5-8
        if (week >= 5 && week <= 8) {
            let competitionType = "";
            if (week === 5) {
                competitionType = "תחרות בסיסית";
            } else if (week === 6) {
                competitionType = "תחרות רבע גמר";
            } else if (week === 7) {
                competitionType = "תחרות חצי גמר";
            } else if (week === 8) {
                competitionType = "תחרות גמר";
            }
            resultContainer.innerHTML += `
                <p><strong>בשבוע ${week}:</strong> ${competitionType} לכל הקבוצות בימי שבת</p>
            `;
        }
    } else {
        resultContainer.innerHTML = "<p>לא נמצאה קבוצה מתאימה.</p>";
    }
}
