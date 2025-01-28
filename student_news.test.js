import { displayNews, filterNews, newsData } from './student_news';

// יצירת Mock ל-HTML
document.body.innerHTML = `
  <div id="news-container"></div>
  <select id="category">
    <option value="">All</option>
    <option value="Events">Events</option>
    <option value="Notices">Notices</option>
    <option value="News">News</option>
  </select>
  <input type="date" id="start-date">
  <input type="date" id="end-date">
`;

describe('Unit tests for News App', () => {
  test('displayNews renders correct number of news items', () => {
    const mockNews = [
      { title: 'News 1', date: '2024-12-19', category: 'Events', content: 'Test content 1' },
      { title: 'News 2', date: '2024-12-20', category: 'Notices', content: 'Test content 2' },
    ];

    displayNews(mockNews);

    const newsContainer = document.getElementById('news-container');
    expect(newsContainer.children.length).toBe(2); // בדיקה אם יש 2 חדשות
    expect(newsContainer.innerHTML).toContain('News 1');
    expect(newsContainer.innerHTML).toContain('News 2');
  });

  test('displayNews shows message for empty news list', () => {
    displayNews([]);

    const newsContainer = document.getElementById('news-container');
    expect(newsContainer.innerHTML).toBe('<p>No news available for the selected filters.</p>');
  });

  test('filterNews filters news correctly by category', () => {
    document.getElementById('category').value = 'Events';

    filterNews();

    const newsContainer = document.getElementById('news-container');
    expect(newsContainer.innerHTML).toContain('Community Event'); // בדיקה אם פילטר עובד
    expect(newsContainer.innerHTML).not.toContain('Important Notice');
  });

  test('filterNews filters news correctly by date range', () => {
    document.getElementById('start-date').value = '2024-12-19';
    document.getElementById('end-date').value = '2024-12-20';

    filterNews();

    const newsContainer = document.getElementById('news-container');
    expect(newsContainer.innerHTML).toContain('Community Event');
    expect(newsContainer.innerHTML).toContain('Social Gathering');
    expect(newsContainer.innerHTML).not.toContain('New Community Project');
  });

  test('filterNews handles no matches correctly', () => {
    document.getElementById('category').value = 'News';
    document.getElementById('start-date').value = '2025-01-01';
    document.getElementById('end-date').value = '2025-01-31';

    filterNews();

    const newsContainer = document.getElementById('news-container');
    expect(newsContainer.innerHTML).toBe('<p>No news available for the selected filters.</p>');
  });
});
