// Setup: Mock the DOM structure
document.body.innerHTML = `
    <input type="date" id="date-picker" />
    <table id="schedule-table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Group</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
`;

// Mock training data
const trainingData = [
    { date: '2024-12-21', time: '10:00 AM', location: 'Gym A', group: 'Group 1' },
    { date: '2024-12-21', time: '12:00 PM', location: 'Gym B', group: 'Group 2' },
    { date: '2024-12-22', time: '9:00 AM', location: 'Gym A', group: 'Group 3' },
    { date: '2024-12-22', time: '11:00 AM', location: 'Gym C', group: 'Group 4' },
];

// Define the function to test
function filterScheduleByDate(date) {
    const scheduleTable = document.querySelector('#schedule-table tbody');
    scheduleTable.innerHTML = '';
    const filteredData = trainingData.filter(training => training.date === date);
    if (filteredData.length === 0) {
        scheduleTable.innerHTML = '<tr><td colspan="4">No training sessions available for this date.</td></tr>';
    } else {
        filteredData.forEach(session => {
            const row = `<tr>
                <td>${session.date}</td>
                <td>${session.time}</td>
                <td>${session.location}</td>
                <td>${session.group}</td>
            </tr>`;
            scheduleTable.insertAdjacentHTML('beforeend', row);
        });
    }
}

// Tests
describe('filterScheduleByDate', () => {
    test('displays correct sessions for a given date', () => {
        filterScheduleByDate('2024-12-21');
        const rows = document.querySelectorAll('#schedule-table tbody tr');
        expect(rows.length).toBe(2); // Two sessions on this date
        expect(rows[0].textContent).toContain('10:00 AM');
        expect(rows[1].textContent).toContain('12:00 PM');
    });

    test('displays a message when no sessions are available', () => {
        filterScheduleByDate('2024-12-23'); // No sessions for this date
        const rows = document.querySelectorAll('#schedule-table tbody tr');
        expect(rows.length).toBe(1);
        expect(rows[0].textContent).toContain('No training sessions available for this date.');
    });

    test('clears previous results before displaying new ones', () => {
        filterScheduleByDate('2024-12-21');
        filterScheduleByDate('2024-12-22'); // Switch to a different date
        const rows = document.querySelectorAll('#schedule-table tbody tr');
        expect(rows.length).toBe(2); // Two sessions on this new date
        expect(rows[0].textContent).toContain('9:00 AM');
        expect(rows[1].textContent).toContain('11:00 AM');
    });
});
