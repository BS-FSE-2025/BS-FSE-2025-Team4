document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.event-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Collect form data
        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const eventTime = document.getElementById('event-time').value;
        const eventLocation = document.getElementById('event-location').value;
        const eventDescription = document.getElementById('event-description').value;

        // אם לא מילאו את כל השדות 
        if (!eventName || !eventDate || !eventTime || !eventLocation || !eventDescription) {
            alert('אנא מלא את כל השדות');
            return;
        }

        // אחסון הנתונים במשתנה
        const eventData = {
            eventName,
            eventDate,
            eventTime,
            eventLocation,
            eventDescription
        };

         // שליחת נתונים לשרת
        fetch('/add-event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(response => response.json())
        .then(data => {
            alert('האירוע נוסף בהצלחה');
            form.reset(); //אתחול הטופס אחרי הכנסת הנתונים
        })
        .catch(error => {
            console.error('Error:', error);
            alert('שגיאה בהוספת האירוע');
        });

    });
});