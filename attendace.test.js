
// attendance.test.js - קובץ הבדיקות
const addAttendance = require('./attendance.js');

describe('addAttendance', () => {
    let studentList;

    beforeEach(() => {
        // ניצור אלמנט tbody כדי לבדוק הוספת תלמידים
        studentList = document.createElement('tbody');
    });

    test('לא יוסיף תלמיד עם שם ריק', () => {
        expect(() => {
            addAttendance('', 'present', studentList);
        }).toThrow('הקריאה חייבת להכיל שם תלמיד תקין!');
    });

    test('יוסיף תלמיד נוכח', () => {
        addAttendance('יוסי', 'present', studentList);
        expect(studentList.children.length).toBe(1);
        expect(studentList.children[0].children[0].innerText).toBe('יוסי');
        expect(studentList.children[0].children[1].innerText).toBe('✅');
    });

    test('יוסיף תלמיד חסר', () => {
        addAttendance('מאיה', 'absent', studentList);
        expect(studentList.children.length).toBe(1);
        expect(studentList.children[0].children[0].innerText).toBe('מאיה');
        expect(studentList.children[0].children[1].innerText).toBe('❌');
    });
});
