import express from 'express';

import {
    loginCoach,
    getTrainingSchedule,
    updateTrainingSchedule,
    getCompetitionSchedule,
    updateCompetitionSchedule,
    createTrainingPlan,
    getTrainingPlan,
    respondToStudentRequests,
    evaluateStudentPerformance,
    markAttendance,
    getNews,
    cancelTraining,
} from '../controllers/C_cont.js';

const router = express.Router();

// Login
router.post('/login', loginCoach);

// Training schedule
router.get('/training-schedule', getTrainingSchedule);
router.put('/training-schedule', updateTrainingSchedule);

// Competition schedule
router.get('/competition-schedule', getCompetitionSchedule);
router.put('/competition-schedule', updateCompetitionSchedule);

// Training plan
router.post('/training-plan', createTrainingPlan);
router.get('/training-plan/:studentId', getTrainingPlan);

// Respond to student requests
router.post('/respond', respondToStudentRequests);

// Evaluate student performance
router.post('/evaluate', evaluateStudentPerformance);

// Attendance
router.post('/attendance', markAttendance);

// News
router.get('/news', getNews);

// Cancel training
router.post('/cancel-training', cancelTraining);

export default router; 