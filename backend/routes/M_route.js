import express from 'express';
import {
    loginManager,
    manageTrainingHours,
    manageTeams,
    getTeamStatus,
    manageRoles,
    manageEvents,
    sendNotifications,
    getStudentProfile,
    getCoachProfiles,
    logoutManager,
  } from '../controllers/M_cont.js';
  
  const router = express.Router();
  
  // Authentication
  router.post('/login', loginManager);
  
  // Distribution of training hours
  router.post('/training-hours', manageTrainingHours);
  
  // Distribution of teams
  router.post('/teams', manageTeams);
  router.get('/teams/status', getTeamStatus);
  
  // Roles management
  router.post('/roles', manageRoles);
  
  // Events management
  router.post('/events', manageEvents);
  
  // Notifications
  router.post('/notifications', sendNotifications);
  
  // Access profiles
  router.get('/students/:studentId', getStudentProfile);
  router.get('/coaches', getCoachProfiles);

  // Logout Route
  router.post('/logout', logoutManager);

export default router;