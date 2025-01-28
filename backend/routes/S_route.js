import express from 'express';
import {
  loginStudent,
  registerStudent,
  getProfile,
  updateProfile,
  getMessages,
  createRequest,
  getStudentRequests,
  getTrainingSchedule,
  getCompetitionSchedule,
  getCommunityNews,
  getUpdates,
  getAttendancePercentage,
  getAllManagersAndCoaches,
} from '../controllers/S_cont.js';

const router = express.Router();

// רישום
router.post('/add', registerStudent);

// התחברות
router.post('/login', loginStudent);

// פרופיל
router.get('/profile/:id', getProfile);
router.put('/profile/:id', updateProfile);

// הודעות
router.get('/messages/:id', getMessages);

router.post('/request', createRequest); // Create a new request
router.get('/:studentId/requests', getStudentRequests); // Get all requests for a student
router.get('/rols',getAllManagersAndCoaches);

// לוחות זמנים
router.get('/:studentId/training-schedule', getTrainingSchedule);
router.get('/:studentId/competition-schedule', getCompetitionSchedule);

// חדשות ועדכונים
router.get('/community-news', getCommunityNews);
router.get('/updates/:id', getUpdates);
 //אחוז נוכחות (בר נוכחות)
router.get('/:studentId/attendance-percentage', getAttendancePercentage);

export default router; 