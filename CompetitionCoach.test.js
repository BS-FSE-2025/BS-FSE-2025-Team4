const { addCompetition } = require('./CompetitionCoach');

describe('addCompetition', () => {
    test('should return a competition object with the correct name and date', () => {
        const name = "Tennis Championship";
        const date = "2024-05-01";

        const competition = addCompetition(name, date);

        // בדיקה שהתוצאה היא אובייקט עם השם וה תאריך הנכונים
        expect(competition.name).toBe(name);
        expect(competition.date).toBe(date);
        expect(competition.status).toBe('active');
    });

    test('should throw an error if name or date is missing', () => {
        expect(() => {
            addCompetition("Tennis Championship");
        }).toThrow("Both name and date are required!");

        expect(() => {
            addCompetition(null, "2024-05-01");
        }).toThrow("Both name and date are required!");

        expect(() => {
            addCompetition("Tennis Championship", null);
        }).toThrow("Both name and date are required!");
    });
});
