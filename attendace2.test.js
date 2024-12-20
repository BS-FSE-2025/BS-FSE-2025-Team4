function addAttendance(studentName, attendanceStatus, studentList) {
    if (studentName.trim() === '') {
        throw new Error('הקריאה חייבת להכיל שם תלמיד תקין!');
    }

    const newRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    const attendanceCell = document.createElement('td');

    nameCell.innerText = studentName;
    attendanceCell.innerText = attendanceStatus === 'present' ? '✅' : '❌';
    attendanceCell.className = attendanceStatus === 'present' ? 'present' : 'absent';

    newRow.appendChild(nameCell);
    newRow.appendChild(attendanceCell);
    studentList.appendChild(newRow);
}

// ייצא את הפונקציה כדי שנוכל לבדוק אותה
module.exports = addAttendance;

