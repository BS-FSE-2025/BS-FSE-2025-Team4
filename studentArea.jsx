import React, { useEffect, useState } from 'react';

const StudentPage = () => {
  const [greeting, setGreeting] = useState('ערב טוב!');
  const [userName, setUserName] = useState('אבו עאמר נאנסי');

  useEffect(() => {
    // Update greeting based on the time of the day
    const currentHour = new Date().getHours();
    const newGreeting =
      currentHour < 12
        ? 'בוקר טוב!'
        : currentHour < 18
        ? 'צהריים טובים!'
        : 'ערב טוב!';
    setGreeting(newGreeting);

    // Add hover effect to cards
    const handleMouseEnter = (e) => {
      e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      e.target.style.transform = 'scale(1.05)';
      e.target.style.transition = 'transform 0.2s, box-shadow 0.2s';
    };
    const handleMouseLeave = (e) => {
      e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
      e.target.style.transform = 'scale(1)';
    };

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm('האם אתה בטוח שברצונך להתנתק?');
    if (confirmLogout) {
      window.location.href = '/Mpage'; // Adjust the logout redirection link as needed
    }
  };

  const handleCardClick = (url) => {
    window.location.href = url;
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: 'linear-gradient(0deg, rgba(159, 215, 156, 1) 0%, rgb(250, 203, 77) 100%)', margin: 0, padding: 0 }}>
      <header style={{ backgroundColor: 'rgb(126, 177, 123)', color: 'rgb(3, 3, 3)', padding: '15px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
          <button onClick={() => (window.location.href = '/studentprofile.html')} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png" alt="משתמש" style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid rgb(254, 254, 255)' }} />
          </button>
          <div>
            <div style={{ fontSize: '18px' }}>{greeting} {userName}</div>
            <a href="#" onClick={handleLogout} style={{ color: 'rgb(239, 20, 20)', textDecoration: 'none', fontSize: '18px', display: 'block', marginTop: '5px', textAlign: 'right' }}>
              התנתקות
            </a>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '10px' }}>
        <h2>יישומים חשובים</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
          {[
            { href: '/student training schedule.html', imgSrc: 'https://img.icons8.com/ios-filled/50/000000/calendar.png', text: 'מערכת אימונים' },
            { href: '/student_updates.html', imgSrc: 'https://img.icons8.com/ios-filled/50/000000/update-left-rotation.png', text: 'עדכונים' },
            { href: '/student_news.html', imgSrc: 'https://img.icons8.com/ios-filled/50/000000/news.png', text: 'חדשות ואירועים' },
            { href: '/Student_requests.html', imgSrc: 'https://img.icons8.com/ios-filled/50/000000/ask-question.png', text: 'בקשות סטודנטים' },
            { href: '/studentcompetitionschedule.html', imgSrc: 'https://img.icons8.com/ios-filled/50/000000/trophy.png', text: 'מערכת תחרויות' }
          ].map((item, index) => (
            <div key={index} className="card" onClick={() => handleCardClick(item.href)} style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', textAlign: 'center', padding: '20px', cursor: 'pointer' }}>
              <img src={item.imgSrc} alt={item.text} style={{ width: '50px', marginBottom: '10px' }} />
              <h3 style={{ margin: 0, fontSize: '16px', color: '#333' }}>{item.text}</h3>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgb(126, 177, 123)', color: 'rgb(253, 251, 251)', marginTop: '20px' }}>
        איזור אישי של התלמיד
      </footer>
    </div>
  );
};

export default StudentPage;