import React from "react";

const AdminDashboard = () => {
  const cards = [
    {
      href: "training_schedule.html",
      imgSrc: "https://img.icons8.com/ios-filled/50/000000/calendar.png",
      title: "רישום שעות אימון",
    },
    {
      href: "stddivision.html",
      imgSrc: "https://img.icons8.com/ios-filled/50/000000/group.png",
      title: "חילוק תלמידים",
    },
    {
      href: "status.html",
      imgSrc: "https://img.icons8.com/ios-filled/50/000000/teamwork.png",
      title: "סטטוס הצוות",
    },
    {
      href: "ruls.html",
      imgSrc: "https://img.icons8.com/ios-filled/50/000000/contract.png",
      title: "חוקים ותקנונים",
    },
    {
      href: "mangevent.html",
      imgSrc: "https://img.icons8.com/ios-filled/50/000000/event.png",
      title: "ניהול אירועים",
    },
    {
      href: "mangevent.html",
      imgSrc: "https://img.icons8.com/ios-filled/50/000000/trophy.png",
      title: "ניהול טורנירים",
    },
    {
      href: "update.html",
      imgSrc: "https://img.icons8.com/ios-filled/50/000000/email.png",
      title: "שליחת עדכונים",
    },
    {
      href: "view.html",
      imgSrc: "https://img.icons8.com/ios-filled/50/000000/student-male.png",
      title: "צפייה בפרופילים",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(0deg, rgba(159,215,156,1) 0%, rgb(250, 203, 77) 100%)",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header style={{ backgroundColor: "#00294d", color: "white", padding: "15px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
          <button
            onClick={() => (window.location.href = "adminprofile.html")}
            style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png"
              alt="משתמש"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            />
          </button>
          <div>
            <div style={{ fontSize: "18px" }}>שלום מנהל</div>
            <a
              href="index.html"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
                display: "block",
                marginTop: "5px",
                textAlign: "right",
              }}
            >
              התנתקות
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "20px auto", padding: "10px" }}>
        <h2 style={{ textAlign: "center" }}>אפשרויות ניהול</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                padding: "20px",
                cursor: "pointer",
              }}
              onClick={() => (window.location.href = card.href)}
            >
              <img src={card.imgSrc} alt={card.title} style={{ width: "50px", marginBottom: "10px" }} />
              <h3 style={{ margin: "0", fontSize: "16px", color: "#333" }}>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "15px", backgroundColor: "#00294d", color: "white", marginTop: "20px" }}>
        איזור אישי של מנהל
      </footer>
    </div>
  );
};

export default AdminDashboard;