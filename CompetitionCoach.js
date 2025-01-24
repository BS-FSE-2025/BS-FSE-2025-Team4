document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table');
    const headers = table.querySelectorAll('th');
    const rows = Array.from(table.querySelectorAll('tbody tr'));

    // Function to sort the table rows by a specific column
    function sortTable(index, isDate = false) {
        const sortedRows = rows.sort((a, b) => {
            const cellA = a.cells[index].textContent.trim();
            const cellB = b.cells[index].textContent.trim();

            if (isDate) {
                const dateA = new Date(cellA);
                const dateB = new Date(cellB);
                return dateA - dateB;  // Sort dates in ascending order
            }

            return cellA.localeCompare(cellB);  // Sort strings alphabetically
        });

        // Reattach the sorted rows to the table body
        const tbody = table.querySelector('tbody');
        sortedRows.forEach(row => tbody.appendChild(row));
    }

    // Attach click event to each header to trigger sorting
    headers.forEach((header, index) => {
        header.addEventListener('click', () => {
            // Check if the clicked header is for the Date column
            const isDateColumn = index === 1;
            sortTable(index, isDateColumn);
        });
    });
});
