import React, { useState } from 'react';

const newsData = [
    { title: "Community Event", date: "2024-12-20", category: "אירועים", content: "Join us for a fun event in the community!" },
    { title: "Important Notice", date: "2024-12-18", category: "הודעות", content: "Reminder about the upcoming meeting." },
    { title: "New Community Project", date: "2024-12-21", category: "חדשות", content: "We're excited to announce a new project." },
    { title: "Social Gathering", date: "2024-12-19", category: "אירועים", content: "Don't miss the social gathering this weekend!" },
];

const NewsApp = () => {
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filteredNews, setFilteredNews] = useState(newsData);

    // Function to filter the news based on the selected category and dates
    const filterNews = () => {
        const filtered = newsData.filter(news => {
            const matchesCategory = category ? news.category === category : true;
            const matchesStartDate = startDate ? new Date(news.date) >= new Date(startDate) : true;
            const matchesEndDate = endDate ? new Date(news.date) <= new Date(endDate) : true;

            return matchesCategory && matchesStartDate && matchesEndDate;
        });
        setFilteredNews(filtered);
    };

    // Function to display the news items
    const displayNews = (newsItems) => {
        if (newsItems.length === 0) {
            return <p>אין חדשות זמינות עבור הפילטרים שנבחרו.</p>;
        }

        return newsItems.map(news => (
            <div key={news.title} className="news-item">
                <h3>{news.title}</h3>
                <p className="date"><strong>תאריך:</strong> {news.date}</p>
                <p className="category"><strong>קטגוריה:</strong> {news.category}</p>
                <p className="content">{news.content}</p>
            </div>
        ));
    };

    return (
        <div className="container">
            <h1>חדשות הקהילה</h1>
            <div className="filters">
                <label htmlFor="category">קטגוריה:</label>
                <select
                    id="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    <option value="">כל הקטגוריות</option>
                    <option value="אירועים">אירועים</option>
                    <option value="הודעות">הודעות</option>
                    <option value="חדשות">חדשות</option>
                </select>

                <label htmlFor="start-date">תאריך התחלה:</label>
                <input
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                />

                <label htmlFor="end-date">תאריך סיום:</label>
                <input
                    type="date"
                    id="end-date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                />

                <button onClick={filterNews}>
                    סנן חדשות
                </button>
            </div>

            <div id="news-container" className="news-container">
                {displayNews(filteredNews)}
            </div>

            <style>
                {`
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
                        justify-content: center;  /* מרכז את התוכן אופקית */
                        align-items: center;      /* מרכז את התוכן אנכית */
                        height: 100vh;            /* מאפשר למרכז את התוכן בתוך הגובה של הדף */
                        direction: rtl;           /* טקסט מימין לשמאל */
                    }

                    .container {
                        max-width: 800px;
                        width: 100%;
                        background-color: white;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }

                    h1 {
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    .filters {
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                    }

                    .filters label {
                        font-size: 14px;
                    }

                    .filters select, 
                    .filters input, 
                    .filters button {
                        width: 100%;
                        padding: 10px;
                        font-size: 14px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                    }

                    .filters button {
                        background-color: #007BFF;
                        color: white;
                        cursor: pointer;
                        border: none;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .filters button:hover {
                        background-color: #0056b3;
                    }

                    .news-container {
                        margin-top: 20px;
                    }

                    .news-item {
                        background-color: #f9f9f9;
                        padding: 15px;
                        margin-bottom: 15px;
                        border-radius: 8px;
                        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
                    }

                    .news-item h3 {
                        margin-bottom: 10px;
                        font-size: 18px;
                    }

                    .news-item p {
                        margin: 5px 0;
                    }

                    .news-item .date {
                        font-size: 12px;
                        color: #888;
                    }

                    .news-item .category {
                        font-size: 12px;
                        color: #007BFF;
                        font-weight: bold;
                    }

                    .news-item .content {
                        margin-top: 10px;
                        font-size: 14px;
                    }
                `}
            </style>
        </div>
    );
};

export default NewsApp;
