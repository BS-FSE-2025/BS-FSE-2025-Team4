import React, { useEffect } from 'react';

// CSS Styling (inline for demonstration purposes)
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(0deg, rgba(159,215,156,1) 0%, rgb(250, 203, 77) 100%)',
        margin: 0,
        padding: 0,
    },
    header: {
        backgroundColor: '#00294d',
        color: 'white',
        padding: '15px',
        textAlign: 'center',
    },
    headerLogo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
    },
    headerButton: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
    },
    headerImg: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '2px solid white',
    },
    headerText: {
        fontSize: '18px',
    },
    logoutLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '14px',
        display: 'block',
        marginTop: '5px',
        textAlign: 'right',
    },
    logoutLinkHover: {
        textDecoration: 'underline',
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
    cardImg: {
        width: '50px',
        marginBottom: '10px',
    },
    cardTitle: {
        margin: 0,
        fontSize: '16px',
        color: '#333',
    },
    footer: {
        textAlign: 'center',
        padding: '15px',
        backgroundColor: '#00294d',
        color: 'white',
        marginTop: '20px',
    },
    // Responsive Design
    '@media (max-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 480px)': {
        gridTemplateColumns: '1fr',
    },
};

// Logout Button Component
function LogoutButton() {
    const handleLogout = () => {
        const confirmLogout = window.confirm('האם אתה בטוח שברצונך להתנתק?');
        if (confirmLogout) {
            window.location.href = "Mpage.html"; // Redirect on logout
        }
    }

    return (
        <button onClick={handleLogout} style={styles.logoutLink}>
            התנתקות
        </button>
    );
}

// Card Component
function Card({ link, icon, title }) {
    return (
        <div style={styles.card} onClick={() => window.location.href = link}>
            <img src={icon} alt={title} style={styles.cardImg} />
            <h3 style={styles.cardTitle}>{title}</h3>
        </div>
    );
}

// Coach Dashboard Component
function CoachDashboard() {
    useEffect(() => {
        // Function to update greeting based on the time of day
        const updateGreeting = () => {
            const headerText = document.querySelector('.header-text');
            const currentHour = new Date().getHours();

            let greeting = "ערב טוב";
            if (currentHour < 12) {
                greeting = "בוקר טוב";
            } else if (currentHour < 18) {
                greeting = "צהריים טובים";
            }

            headerText.textContent = `${greeting}! מאמנים`;
        };

        updateGreeting();
    }, []);

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <div style={styles.headerLogo}>
                    <button style={styles.headerButton} onClick={() => window.location.href = 'coachprofile.html'}>
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png" alt="משתמש" style={styles.headerImg} />
                    </button>
                    <div>
                        <div className="header-text" style={styles.headerText}>ערב טוב! מאמנים</div>
                        <LogoutButton />
                    </div>
                </div>
            </header>

            <h2>יישומים חשובים</h2>
            <div style={styles.grid}>
                <Card link="TrainingCoach.html" icon="https://img.icons8.com/ios-filled/50/000000/calendar.png" title="מערכת אימונים" />
                <Card link="Coachplan.html" icon="https://img.icons8.com/ios-filled/50/000000/dumbbell.png" title="תכנית אימונים" />
                <Card link="coachrespond.html" icon="https://img.icons8.com/ios-filled/50/000000/ask-question.png" title="תצוגת בקשות" />
                <Card link="studentPerformance.html" icon="https://img.icons8.com/ios-filled/50/000000/student-male.png" title="ערך תלמידים" />
                <Card link="attendance.html" icon="https://img.icons8.com/ios-filled/50/000000/attendance-mark.png" title="בדיקת נוכחות" />
                <Card link="C_news.html" icon="https://img.icons8.com/ios-filled/50/000000/news.png" title="חדשות ואירועים" />
                <Card link="cancel_training.html" icon="https://img.icons8.com/ios-filled/50/000000/delete.png" title="בטל אימון" />
                <Card link="CompetitionCoach.html" icon="https://img.icons8.com/ios-filled/50/000000/trophy.png" title="מערכת תחרויות" />
            </div>

            <footer style={styles.footer}>
                איזור אישי של המאמנים
            </footer>
        </div>
    );
}

export default CoachDashboard;
