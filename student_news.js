// Sample news data
const newsData = [
    { title: "Community Event", date: "2024-12-20", category: "Events", content: "Join us for a fun event in the community!" },
    { title: "Important Notice", date: "2024-12-18", category: "Notices", content: "Reminder about the upcoming meeting." },
    { title: "New Community Project", date: "2024-12-21", category: "News", content: "We're excited to announce a new project." },
    { title: "Social Gathering", date: "2024-12-19", category: "Events", content: "Don't miss the social gathering this weekend!" },
];

// Function to display news items
function displayNews(newsItems) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Clear existing news

    if (newsItems.length === 0) {
        newsContainer.innerHTML = '<p>No news available for the selected filters.</p>';
        return;
    }

    newsItems.forEach(news => {
        const newsElement = document.createElement('div');
        newsElement.classList.add('news-item');
        newsElement.innerHTML = `
            <h3>${news.title}</h3>
            <p><strong>Date:</strong> ${news.date}</p>
            <p><strong>Category:</strong> ${news.category}</p>
            <p>${news.content}</p>
        `;
        newsContainer.appendChild(newsElement);
    });
}

// Function to filter news based on category and date range
function filterNews() {
    const category = document.getElementById('category').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    const filteredNews = newsData.filter(news => {
        // Filter by category if specified
        const matchesCategory = category ? news.category === category : true;

        // Filter by start date if specified
        const matchesStartDate = startDate ? new Date(news.date) >= new Date(startDate) : true;

        // Filter by end date if specified
        const matchesEndDate = endDate ? new Date(news.date) <= new Date(endDate) : true;

        return matchesCategory && matchesStartDate && matchesEndDate;
    });

    // Display the filtered news
    displayNews(filteredNews);
}

// Initial display of all news
displayNews(newsData);
