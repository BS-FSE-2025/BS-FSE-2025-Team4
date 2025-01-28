import Manager from '../models/M_mod.js';
import Coach from '../models/C_mod.js';
import Student from '../models/S_mod.js';

// Manager login
export const loginManager = async (req, res) => {
    const { username, password } = req.body;
    try {
      const manager = await Manager.findOne({ username });
      if (!manager || manager.password !== password) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      res.status(200).json({ id: manager._id, username: manager.username });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
};
  
  // Manage training hours
export const manageTrainingHours = async (req, res) => {
    const { teamId, trainingHours } = req.body;
    try {
      const manager = await Manager.findById(req.managerId);
      const team = manager.teams.id(teamId);
      team.trainingHours = trainingHours;
      await manager.save();
      res.status(200).json({ message: 'Training hours updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
};
  
  // Manage teams
export const manageTeams = async (req, res) => {
    const { teamName, coachId, studentIds } = req.body;
    try {
      const manager = await Manager.findById(req.managerId);
      manager.teams.push({ teamName, coach: coachId, students: studentIds });
      await manager.save();
      res.status(201).json({ message: 'Team added successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
};
  
  // Get team status
export const getTeamStatus = async (req, res) => {
    try {
      const manager = await Manager.findById(req.managerId).populate('teams.students teams.coach');
      res.status(200).json(manager.teams);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
};
  
  // Manage roles
export const manageRoles = async (req, res) => {
    const { oldRole, newRole } = req.body;
    try {
      const manager = await Manager.findById(req.managerId);
      manager.roles.push({ oldRole, newRole });
      await manager.save();
      res.status(200).json({ message: 'Role updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Manage events
export const manageEvents = async (req, res) => {
    const { title, date, description, participants } = req.body;
    try {
      const manager = await Manager.findById(req.managerId);
      manager.events.push({ title, date, description, participants });
      await manager.save();
      res.status(201).json({ message: 'Event created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
};
  
  // Send notifications
export const sendNotifications = async (req, res) => {
    const { content, recipientType } = req.body;
    try {
      const manager = await Manager.findById(req.managerId);
      manager.notifications.push({ content, recipientType });
      await manager.save();
      res.status(201).json({ message: 'Notification sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
};
  
  // Get student profile
export const getStudentProfile = async (req, res) => {
    try {
      const student = await Student.findById(req.params.studentId);
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
};
  
  // Get coach profiles
export const getCoachProfiles = async (_req, res) => {
    try {
      const coaches = await Coach.find();
      res.status(200).json(coaches);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
};

export const logoutManager = async(_req,res)=>{
    try{
        res.status(200).json({messege: 'התנתק בהצלחה'});
    }catch (error){
        res.status(500).json({message:'server error'});
    }
};
  