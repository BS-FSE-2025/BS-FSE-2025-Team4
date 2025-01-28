import React from 'react';  //דרישת החבילה של ריאקט

const ManagerDashboard = () => {  //פונקציה שמחזירה את התוכן של הדף בשם ManagerDashboard
  return (
    <div  //התוכן של הדף
      style={{ //סגנון של הדף
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(0deg, rgba(159,215,156,1) 0%, rgb(250, 203, 77) 100%)',
        margin: 0,
        padding: 0,
      }}>
      <header  //כותרת הדף
        style={{
          backgroundColor: '#00294d',
          color: 'white',
          padding: '15px',
          textAlign: 'center',
        }}>
        <div   //כפתור התנתקות
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
          }}>
          <button
            onClick={() => alert('מעבר לפרופיל המאמן')}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png" alt="משתמש"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '2px solid white',
              }}/>
          </button>
          <div> {/*כיתוב בכותרת הדף*/}
            <div>ברוך שובך</div>
            <a
              href="#logout"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '14px',
                display: 'block',
                marginTop: '5px',
                textAlign: 'right',
              }}>
              התנתקות
            </a>
          </div>
        </div>
      </header>  
      <div    //תוכן הדף של המנהל
        style={{ 
            maxWidth: '1200px', margin: '20px auto', padding: '10px' 
            }}>
        <h2>יישומים חשובים</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '15px',
        }}>
        <div  //רישום שעות אימונים
            className="card"
            onClick={() => alert('מעבר לרישום שעות אימונים')}
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              padding: '20px',
              cursor: 'pointer',
            }}>
            <img src="https://img.icons8.com/ios-filled/50/000000/clock.png" alt="רישום שעות אימונים"
              style={{ 
                width: '50px', marginBottom: '10px' 
                }}/>
            <h3>חילוק שעות אימונים</h3>
        </div>
        <div    //חילוק קבוצות
            className="card"
            onClick={() => alert('מעבר לחילוק קבוצות')}
            style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '20px',
            cursor: 'pointer',
            }}>
            <img src="https://img.icons8.com/ios-filled/50/000000/split.png" alt="חילוק קבוצות"
            style={{
                width: '50px', marginBottom: '10px' 
                }}/>
            <h3>חילוק קבוצות</h3>
        </div>
        <div     //סטטוס קבוצות
            className="card"
            onClick={() => alert('מעבר לסטטוס קבוצות')}
            style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '20px',
            cursor: 'pointer',
            }}>
            <img src="https://img.icons8.com/ios-filled/50/000000/teams.png" alt="סטטוס קבוצות"
            style={{
                width: '50px', marginBottom: '10px' 
            }}/>
            <h3>סטטוס קבוצות</h3>
        </div>
        <div    //רשימת חוקים ותקנים
            className="card"
            onClick={() => alert('מעבר לרשימת חוקים ותקנים')}
            style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '20px',
            cursor: 'pointer',
            }}>
            <img src="https://img.icons8.com/ios-filled/50/000000/rules.png" alt="רשימת חוקים ותקנים"
            style={{
                width: '50px', marginBottom: '10px' 
            }}/>
            <h3>רשימת חוקים ותקנים </h3>
        </div>
        <div    //ניהול אירועים
            className="card"
            onClick={() => alert('מעבר לניהול אירועים')}
            style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '20px',
            cursor: 'pointer',
            }}>
            <img src="https://img.icons8.com/ios-filled/50/000000/event-accepted.png" alt="ניהול אירועים"
            style={{
                width: '50px', marginBottom: '10px' 
            }}/>
            <h3>ניהול אירועים</h3>
        </div>
        <div    //הודעות ועדכונים
            className="card"
            onClick={() => alert('מעבר להודעות ועדכונים')}
            style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '20px',
            cursor: 'pointer',
            }}>
            <img src="https://img.icons8.com/ios-filled/50/000000/sms.png" alt="הודעות ועדכונים"
            style={{
                width: '50px', marginBottom: '10px' 
            }}/>
            <h3>הודעות ועדכונים</h3>
        </div>
        <div      //פרופיל שחקנים
            className="card"
            onClick={() => alert('מעבר לפרופיל שחקנים')}
            style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '20px',
            cursor: 'pointer',
            }}>
            <img src="https://img.icons8.com/ios-filled/50/000000/football.png" alt="פרופיל שחקנים"
            style={{
                width: '50px', marginBottom: '10px' 
            }}/>
            <h3>פרופיל שחקנים</h3>
        </div>
        <div    //פרופיל מאמנים
            className="card"
            onClick={() => alert('מעבר לפרופיל מאמנים')}
            style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '20px',
            cursor: 'pointer',
            }}>
            <img src="https://img.icons8.com/ios-filled/50/000000/coach.png" alt="פרופיל מאמנים"
            style={{
                width: '50px', marginBottom: '10px' 
            }}/>
            <h3>פרופיל מאמנים</h3>
        </div>
    
        </div>
      </div>

      <footer  //כותרת התחתונה של הדף
        style={{
          textAlign: 'center',
          padding: '15px',
          backgroundColor: '#00294d',
          color: 'white',
          marginTop: '20px',
        }}
      >
        כל הזכויות שמורות &copy; 2025  {/*כיתוב כל הזכויות שמורות*/}
      </footer>
    </div>
  );
};

export default ManagerDashboard;  //יצוא הפונקציה ManagerDashboard