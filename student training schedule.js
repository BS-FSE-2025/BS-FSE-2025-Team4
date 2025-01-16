document.addEventListener("DOMContentLoaded", async () => {
    const tableBody = document.querySelector("tbody");
  
    try {
      // שליפת נתוני אימונים מ-API (להחליף ב-URL מתאים)
      const response = await fetch("/api/get-trainings");
      const trainings = await response.json();
  
      // הוספת השורות לטבלה
      trainings.forEach((training) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${training.date}</td>
          <td>${training.time}</td>
          <td>${training.location}</td>
          <td>${training.group}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error("שגיאה בשליפת נתונים:", error);
      tableBody.innerHTML = `<tr><td colspan="4">לא ניתן להציג את לוח הזמנים</td></tr>`;
    }
  });
  