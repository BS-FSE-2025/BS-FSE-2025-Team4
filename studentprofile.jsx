import React, { useEffect, useState } from 'react';

const App = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    const greetingText =
      currentHour < 12
        ? 'בוקר טוב!'
        : currentHour < 18
        ? 'צהריים טובים!'
        : 'ערב טוב!';
    setGreeting(`${greetingText} אבו עאמר נאנסי`);
  }, []);

  const handleLogout = (e) => {
    const confirmLogout = window.confirm('האם אתה בטוח שברצונך להתנתק?');
    if (!confirmLogout) {
      e.preventDefault();
    }
  };

  const cardData = [
    {
      href: 'student_training_schedule.html',
      imgSrc: 'https://img.icons8.com/ios-filled/50/000000/calendar.png',
      alt: 'מערכת',
      title: 'מערכת אימונים',
    },
    {
      href: 'student_updates.html',
      imgSrc: 'https://img.icons8.com/ios-filled/50/000000/update-left-rotation.png',
      alt: 'עדכונים',
      title: 'עדכונים',
    },
    {
      href: 'student_news.html',
      imgSrc: 'https://img.icons8.com/ios-filled/50/000000/news.png',
      alt: 'חדשות ואירועים',
      title: 'חדשות ואירועים',
    },
    {
      href: 'Student_requests.html',
      imgSrc: 'https://img.icons8.com/ios-filled/50/000000/ask-question.png',
      alt: 'בקשות סטודנטים',
      title: 'בקשות סטודנטים',
    },
    {
      href: 'studentcompetitionschedule.html',
      imgSrc: 'https://img.icons8.com/ios-filled/50/000000/trophy.png',
      alt: 'תחריות',
      title: 'מערכת תחרויות',
    },
  ];

  return (
    <div>
      <header style={styles.header}>
        <div style={styles.headerLogo}>
          <button style={styles.button} onClick={() => (window.location.href = 'studentprofile.html')}>
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png"
              alt="משתמש"
              style={styles.headerImage}
            />
          </button>
          <div>
            <div style={styles.headerText}>{greeting}</div>
            <a href="Mpage.html" style={styles.logoutLink} onClick={handleLogout}>
              התנתקות
            </a>
          </div>
        </div>
      </header>

      <div style={styles.container}>
        <h2>יישומים חשובים</h2>
        <div style={styles.grid}>
          {cardData.map((card, index) => (
            <div
              key={index}
              style={styles.card}
              onClick={() => (window.location.href = card.href)}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img src={card.imgSrc} alt={card.alt} style={styles.cardImage} />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <footer style={styles.footer}>איזור אישי של התלמיד</footer>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: 'rgb(126, 177, 123)',
    color: 'rgb(3, 3, 3)',
    padding: '15px',
    textAlign: 'center',
  },
  headerLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  headerImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '2px solid rgb(254, 254, 255)',
  },
  headerText: {
    fontSize: '18px',
  },
  logoutLink: {
    color: 'rgb(239, 20, 20)',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'block',
    marginTop: '5px',
    textAlign: 'right',
  },
  container: {
    maxWidth: '1200px',
    margin: '20px auto',
    padding: '10px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '20px',
    cursor: 'pointer',
  },
  cardImage: {
    width: '50px',
    marginBottom: '10px',
  },
  footer: {
    textAlign: 'center',
    padding: '15px',
    backgroundColor: 'rgb(126, 177, 123)',
    color: 'rgb(253, 251, 251)',
    marginTop: '20px',
  },
};

export default App;
