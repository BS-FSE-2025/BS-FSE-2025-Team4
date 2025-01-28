import React, { useState } from "react";

const CancelTraining = () => {
    const [trainings, setTrainings] = useState([
        "אימון כושר קבוצתי",
        "אימון טכניקה",
        "אימון מתיחות"
    ]);
    const [selectedTraining, setSelectedTraining] = useState("");
    const [message, setMessage] = useState("");

    const handleCancel = () => {
        if (!selectedTraining) {
            setMessage("אנא בחר אימון לביטול");
        } else {
            setMessage(`האימון "${selectedTraining}" בוטל בהצלחה`);
            setSelectedTraining("");
            // remove the canceled training from the list:
            setTrainings(prevTrainings => prevTrainings.filter(t => t !== selectedTraining));
        }
    };

    return (
        <div className="container">
            <h1>ביטול אימונים</h1>
            <div className="form-group">
                <label htmlFor="training-select">בחר אימון לביטול:</label>
                <select
                    id="training-select"
                    value={selectedTraining}
                    onChange={e => setSelectedTraining(e.target.value)}
                >
                    <option value="" disabled>
                        בחר אימון...
                    </option>
                    {trainings.map((training, index) => (
                        <option key={index} value={training}>
                            {training}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleCancel}>בטל אימון</button>
            {message && <div className="message">{message}</div>}

            <style>{`
                body {
                    font-family: Arial, sans-serif;
                    background: rgb(159,215,156);
                    background: linear-gradient(0deg, rgba(159,215,156,1) 0%, rgba(253,187,45,1) 100%);
                    color: #333;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                }

                .container {
                    max-width: 500px;
                    margin: center;
                    text-align: center;
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    color: #0056b3;
                    margin-bottom: 20px;
                }

                .form-group {
                    margin-bottom: 30px;
                }

                label {
                    display: block;
                    margin-bottom: 10px;
                    font-weight: bold;
                }

                select {
                    width: 100%;
                    padding: 10px;
                    font-size: 1rem;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    text-align: center;
                }

                button {
                    padding: 10px 20px;
                    font-size: 1rem;
                    color: #fff;
                    background-color: #d9534f;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #c9302c;
                }

                .message {
                    margin-top: 20px;
                    font-size: 1.2rem;
                    color: green;
                }
            `}</style>
        </div>
    );
};

export default CancelTraining;