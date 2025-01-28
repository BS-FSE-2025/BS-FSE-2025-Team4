import React from "react";

const PersonalArea = () => {
  const logOut = () => {
    // ניקוי אחסון מקומי ואחסון סשן
    localStorage.clear();
    sessionStorage.clear();

    // ניקוי מטמון הדפדפן (אם אפשרי)
    clearCache();

    // הפניה לדף התחברות
    window.location.href = "login.html";
  };

  const clearCache = () => {
    if ("caches" in window) {
      caches.keys()
        .then((cacheNames) => {
          cacheNames.forEach((cacheName) => {
            caches.delete(cacheName);
          });
        })
        .catch((error) => {
          console.error("שגיאה בניקוי מטמון:", error);
        });
    } else {
      console.warn("הדפדפן שלך אינו תומך בניקוי מטמון.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>ברוך הבא לאזור האישי</h1>
      <button style={styles.logoutButton} onClick={logOut}>התנתק</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    direction: "rtl",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
  },
  logoutButton: {
    display: "block",
    width: "200px",
    margin: "20px auto",
    padding: "10px",
    textAlign: "center",
    backgroundColor: "#ff4e4e",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  logoutButtonHover: {
    backgroundColor: "#ff1a1a",
  },
};

export default PersonalArea;
