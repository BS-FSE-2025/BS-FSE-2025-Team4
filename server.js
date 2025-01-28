import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './routes/S_route.js';
import coachRoutes from './routes/C_route.js';
import managerRoutes from './routes/M_route.js';

dotenv.config(); // הפעלת קובץ הגדרות סביבה

const app = express(); // הגדרת אפליקציה חדשה

app.use(cors()); 
app.use(express.json()); //גישה לקוד של הבקשות בפורמט ג'ייסון

app.use('/api/students', studentRoutes);  
app.use('/api/coaches', coachRoutes);
app.use('/api/managers', managerRoutes);

app.post('/api/logout', (req, res) => {
  if (!req.session) {
    return res.status(400).json({ message: 'אין שום דבר להתנתק ממנו' });
  }
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'התנתקות נכשלה' });
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'התנתק בהצלחה' });
  });
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

const PORT = process.env.PORT || 2025;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));