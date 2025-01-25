// groupFinder.test.js
const findGroup = require('./groupFinder');

describe("findGroup Function", () => {
    test("Valid age and week returns correct group", () => {
        const result = findGroup(12, 3);
        expect(result).toEqual({
            groupName: "קבוצה ב'",
            days: ["שלישי", "רביעי"],
            time: "15:30–17:00",
            activity: "פיתוח קואורדינציה קבוצתית",
            competition: null
        });
    });

    test("Invalid age returns error", () => {
        const result = findGroup(6, 3);
        expect(result).toEqual({ error: "נא להכניס גיל תקין בין 7 ל-18." });
    });

    test("Invalid week returns error", () => {
        const result = findGroup(12, 9);
        expect(result).toEqual({ error: "נא להכניס שבוע תקין בין 1 ל-8." });
    });

    test("Competition week returns correct competition", () => {
        const result = findGroup(13, 7);
        expect(result).toEqual({
            groupName: "קבוצה ג'",
            days: ["שלישי", "רביעי"],
            time: "17:00–18:30",
            activity: "תרגול הגנה והתקפה",
            competition: "תחרות חצי גמר"
        });
    });

    test("No matching group returns error", () => {
        const result = findGroup(19, 2);
        expect(result).toEqual({ error: "לא נמצאה קבוצה מתאימה." });
    });
});
