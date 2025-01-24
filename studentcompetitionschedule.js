const competitionsData = [
    {
        date: "2024-12-30",
        time: "18:00",
        location: "מגרש 1",
        teams: "קבוצה א' vs קבוצה ב'"
    },
    {
        date: "2024-12-31",
        time: "19:00",
        location: "מגרש 2",
        teams: "קבוצה ג' vs קבוצה ד'"
    },
    {
        date: "2025-01-01",
        time: "16:00",
        location: "מגרש 3",
        teams: "קבוצה ה' vs קבוצה ו'"
    }
];
function loadCompetitions() {
    const tableBody = document.querySelector("#schedule-table tbody");
    tableBody.innerHTML = ""; 
    competitionsData.forEach(competition => {
        const row = document.createElement("tr");
        const dateCell = document.createElement("td");
        dateCell.textContent = `${competition.date} ${competition.time}`;
        const locationCell = document.createElement("td");
        locationCell.textContent = competition.location;
        const teamsCell = document.createElement("td");
        teamsCell.textContent = competition.teams;
        row.appendChild(dateCell);
        row.appendChild(locationCell);
        row.appendChild(teamsCell);
        tableBody.appendChild(row);
    });
}
window.onload = loadCompetitions;
