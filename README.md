שם בפרוחקט :- בנית קהיךה מרחבית 
תיאור הפרויקט :- הקהילה שלנו מיועדת לילדים תלמידי בית ספר בין הגילאים 7-18, שיש שם חוסר במסגרות ספורטיביות קהילתיות המקדמות פעילות גופנית ומודעות לבריאות ,הקהילה ליגת הכדורגל שלנו מציעה מסגרת ספורטיבית ומהנה (הליגה תהיה מאורגנת לפי קבוצות גיל) , בניגוד לקאנטרי קלאב ברהט שאין לו תחרויות ורק מציע מנוי לאימונים או כרטיס יומי, האתר של הקהילה שלנו מספק חוויית ספורט קבוצתית שמחזקת את המודעות לספורט, משפרת כישורים חברתיים ובונה קהילה מאוחדת סביב ערכי בריאות וכיף.


מאפינים :- רשימה של הדברים שהמערכת או הממשק מספקים
-Mpage 
-StudentSignin 
-StudentLogin 
-studentArea
-studentprofile 
-studentlodout
-מערכת אימונים 
-עדכונים
-חדשות ואירועים 
בקשות סטודנטים 
- מערכת תחרויות 



-logcoach
-coachArea
-coachprofile
-מערכת אימונים 
-תכנית אימונים
-תצוגת בקשות 
-ערך תלמיד 
-בדחקת נוכחות 
- חדשןת ואירועים 
-בטל אימון
-מעאכת תחרוחות 
-Clogout (יצאת מאמן )


-logmanager
-managerArea
-managerprofile
-רישום שעות אימונים 
- חלוקת קבוצות 
-סטאטוס הצוות 
-רשימת חוקים ותיקונים 
- ניהול אירועים
-שלח הודעה
-צפה פרופיל תלמיד 
-צפה פרופיל מאמן 
-Mlogout


	הגדרת הבעיה:
בעיר שלנו זיהינו בעיה משמעותית של חוסר מודעות לחשיבות הספורט, במיוחד בקרב ילדים ובני נוער. היעדר המודעות הזו יוצר מספר אתגרים הפוגעים בהתפתחות האישית, החברתית והקהילתית, למשל: גורם אורח חיים ישבני, חוסר חיבור קהילתי, ופוגע בפיתוח כישרונות של ילדים מוכשרים.

אפשר לראות את שמודעות לספורט היא דבר שחסר בקהילות מסוימות לפי המאמר "sport clubs taking an active role in the integration of refugees ", שמדבר על איך ספורט קהילתי יכול למלא תפקיד בטיפוח התחושה של שייכות לקהילה, אפשר לראות את ההתייחסות לבעיה שלנו בעמוד השלישי פסקה ראשונה של המאמר.

לכן, יש צורך דחוף ליצור מודעות רחבה ולבנות מסגרות ספורטיביות מתאימות שיקדמו אורח חיים בריא, יחזקו את הקשרים החברתיים בקהילה ויעניקו לילדים ולבני הנוער את הכלים שהם צריכים כדי לממש את הפוטנציאל שלהם.


טכנולוגיות:
רשימה של הטכנולוגיות שנעשה בהן שימוש (HTML, CSS, JavaScript ,reac.jsx').




מיצרים הפרויקט :- 
נאנסי אבו עמאר 
נור אבו פראח 
יארא אבו רביעה
אלין אלאסד 

השתמשנו בשלושת סכימות והן 
 Node.js/backend/  node_moodules/ server.js .-1
  frontend -src / components = react .jsx /-2
DataBace in Mongo -3



מבנה הפרויקט 
1- מבנה פרויקט frontend 
- index.html
-package.json
-main.jsx
-App.jsx


frontend --------- components
-bar.jsx 
-Clogout.jsx
-coachArea.jsx
-Coachplan.jsx
-coachprofile.jsx
-CompetitionCoach.jsx
-CompetitionStudent.jsx
-ErrorBoundary.jsx
-incorectpas.jsx
-logcoach.jsx.jsx
-Logout.jsx
-ManagerDashboard.jsx
-managerlogin.jsx
-mangerArea.jsx
-mangevent.jsx
-Mlogout.jsx
-Mpage.jsx
-rols.jsx
-status.jsx
-student_news.jsx
-Student_requests.jsx
-student_update.jsx
-studentArea.jsx
-StudentLogin.jsx
-studentlodout.jsx
-Studentperformance.jsx
-StudentSignin.jsx
-studentprofile.jsx
-TrainingCoach.jsx
-TrainingStudent.jsx
-update.jsx
view.jsx











2- מבנה REACT 
-index.html
-App.jsx
-package.jcon
-README.md


3- מבנה  backend 
- config(db.js)

-controllers(C_cont.js/M_count.js/S_cont.js)
-models(C_mod.js/M_mod.js/S_mod.js)
-routes(C_route.js/M_routs.js/S_routs.js)
-server.js
-package.json
-package-lock.json
-.env
-.gitignore



מה יש  ב MondoDB

-Coachplan
-student_requests
-incorectpas
-manger
-mangevent
-student log out 
-student training schedule
- students
-couches





בדיקות יחידה בפרויקט שלנו 
- Coachplan.test.js
-Student_requests.text.js 
-Student_requests.test.js
-logcoach.test.js
-student_updates.test.js
-coachprofile.test.js
-coachArea.test.js
-CompetitionCoach.test.js
-TrainingCoach.test.js

