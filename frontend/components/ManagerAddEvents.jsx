import React, { useState } from "react";

const AddEventForm = () => {
    const [formData, setFormData] = useState({
        eventName: "",
        eventDate: "",
        eventTime: "",
        eventLocation: "",
        eventDescription: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { eventName, eventDate, eventTime, eventLocation, eventDescription } = formData;

        if (!eventName || !eventDate || !eventTime || !eventLocation || !eventDescription) {
            alert("אנא מלא את כל השדות");
            return;
        }

        fetch("/add-event", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then(() => {
                alert("האירוע נוסף בהצלחה");
                setFormData({
                    eventName: "",
                    eventDate: "",
                    eventTime: "",
                    eventLocation: "",
                    eventDescription: ""
                });
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("שגיאה בהוספת האירוע");
            });
    };

    return (
        <div className="container">
            <h1>אירוע חדש</h1>
            <form className="event-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="eventName"
                        name="eventName"
                        placeholder=":שם האירוע"
                        value={formData.eventName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        placeholder=":תאריך האירוע"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="time"
                        id="eventTime"
                        name="eventTime"
                        placeholder=":שעה"
                        value={formData.eventTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="eventLocation"
                        name="eventLocation"
                        placeholder=":מיקום"
                        value={formData.eventLocation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        id="eventDescription"
                        name="eventDescription"
                        rows="4"
                        placeholder=":תיאור האירוע"
                        value={formData.eventDescription}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">הוסף אירוע</button>
            </form>

            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: Arial, sans-serif;
                    background: rgb(159,215,156);
                    background: linear-gradient(0deg, rgba(159,215,156,1) 0%, rgba(253,187,45,1) 100%);
                    padding: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    direction: rtl;
                }

                .container {
                    max-width: 500px;
                    width: 100%;
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .event-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }

                .event-form input,
                .event-form textarea {
                    padding: 10px;
                    border: 1px solid #9fd79c;
                    border-radius: 15px;
                    width: 100%;
                    text-align: right;
                }

                .event-form button {
                    padding: 10px;
                    background-color: #9fd79c;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .event-form button:hover {
                    background-color: #c1703d;
                }
            `}</style>
        </div>
    );
};

export default AddEventForm;