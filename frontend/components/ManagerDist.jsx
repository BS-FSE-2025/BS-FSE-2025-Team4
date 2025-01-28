import React, { useState } from "react";

const TrainingHoursManager = () => {
    const [coaches, setCoaches] = useState([
        { id: 1, name: "Coach A", groups: [] },
        { id: 2, name: "Coach B", groups: [] },
        { id: 3, name: "Coach C", groups: [] },
    ]);
    const [selectedCoachId, setSelectedCoachId] = useState(null);
    const [group, setGroup] = useState("");
    const [hours, setHours] = useState("");

    const handleAssignHours = () => {
        if (!selectedCoachId || !group || !hours) {
            alert("אנא בחר מאמן, קבוצה, והכנס שעות.");
            return;
        }

        setCoaches(prevCoaches =>
            prevCoaches.map(coach =>
                coach.id === selectedCoachId
                    ? {
                          ...coach,
                          groups: [
                              ...coach.groups,
                              { group, hours: parseInt(hours, 10) },
                          ],
                      }
                    : coach
            )
        );

        setGroup("");
        setHours("");
    };

    const selectedCoach = coaches.find(coach => coach.id === selectedCoachId);

    return (
        <div className="container">
            <h1 className="title">רישום שעות אימון</h1>

            <div className="form-group">
                <label htmlFor="coach-select">בחר מאמן:</label>
                <select
                    id="coach-select"
                    value={selectedCoachId || ""}
                    onChange={e => setSelectedCoachId(parseInt(e.target.value, 10))}
                >
                    <option value="" disabled>
                        בחר מאמן
                    </option>
                    {coaches.map(coach => (
                        <option key={coach.id} value={coach.id}>
                            {coach.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="group">קבוצה:</label>
                <input
                    type="text"
                    id="group"
                    value={group}
                    onChange={e => setGroup(e.target.value)}
                    placeholder="הכנס שם קבוצה"
                />
            </div>

            <div className="form-group">
                <label htmlFor="hours">שעות:</label>
                <input
                    type="number"
                    id="hours"
                    value={hours}
                    onChange={e => setHours(e.target.value)}
                    placeholder="הכנס שעות"
                    min="0"
                />
            </div>

            <button className="btn" onClick={handleAssignHours}>הוסף שעות</button>

            {selectedCoach && (
                <div className="summary">
                    <h2 className="subtitle">שעות של {selectedCoach.name}</h2>
                    <ul className="assignments">
                        {selectedCoach.groups.map((assignment, index) => (
                            <li key={index} className="assignment-item">
                                קבוצה: {assignment.group}, שעות: {assignment.hours}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

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
                    min-height: 100vh;
                    direction: rtl;
                }

                .container {
                    max-width: 600px;
                    width: 100%;
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                .title {
                    text-align: center;
                    margin-bottom: 20px;
                    color: #007BFF;
                }

                .form-group {
                    margin-bottom: 15px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .form-group label {
                    font-weight: bold;
                }

                .form-group input,
                .form-group select {
                    width: 100%;
                    padding: 10px;
                    font-size: 14px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }

                .btn {
                    padding: 10px 20px;
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                    text-align: center;
                }

                .btn:hover {
                    background-color: #0056b3;
                }

                .summary {
                    margin-top: 20px;
                    text-align: center;
                }

                .subtitle {
                    margin-bottom: 10px;
                    color: #007BFF;
                }

                .assignments {
                    list-style: none;
                    padding: 0;
                }

                .assignment-item {
                    background-color: #f9f9f9;
                    padding: 10px;
                    margin-bottom: 5px;
                    border-radius: 5px;
                    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
};

export default TrainingHoursManager;