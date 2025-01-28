import Coach from '../models/C_mod.js';
import Student from '../models/S_mod.js';

export const loginCoach = async (req, res) => {
  const { username, password } = req.body;
  try {
      const coach = await Coach.findOne({ username });
      if (!coach || coach.password !== password) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }
      res.status(200).json({ id: coach._id, username: coach.username });
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
export const getTrainingSchedule = async (req, res) => {
  try {
      const coach = await Coach.findById(req.coachId);
      res.status(200).json(coach.trainingSchedule);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
export const updateTrainingSchedule = async (req, res) => {
  const { date, activity, time } = req.body;
  try {
      const coach = await Coach.findById(req.coachId);
      coach.trainingSchedule.push({ date, activity, time });
      await coach.save();
      res.status(200).json(coach.trainingSchedule);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
export const getCompetitionSchedule = async (req, res) => {
  try {
      const coach = await Coach.findById(req.coachId);
      res.status(200).json(coach.competitionSchedule);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
export const updateCompetitionSchedule = async (req, res) => {
  const { name, date, location } = req.body;
  try {
      const coach = await Coach.findById(req.coachId);
      coach.competitionSchedule.push({ name, date, location });
      await coach.save();
      res.status(200).json(coach.competitionSchedule);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
export const createTrainingPlan = async (req, res) => {
  const { studentId, planDetails, date } = req.body;
  try {
      const coach = await Coach.findById(req.coachId);
      coach.trainingPlans.push({ student: studentId, planDetails, date });
      await coach.save();
      res.status(201).json({ message: 'Training plan created' });
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
export const getTrainingPlan = async (req, res) => {
  const { studentId } = req.params;
  try {
      const coach = await Coach.findById(req.coachId).populate('trainingPlans.student');
      const plans = coach.trainingPlans.filter(plan => plan.student._id.toString() === studentId);
      res.status(200).json(plans);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
export const respondToStudentRequests = async (req, res) => {
  const { studentId, response } = req.body;
  try {
      const student = await Student.findById(studentId);
      student.messages.push({ sender: 'Coach', content: response });
      await student.save();
      res.status(200).json({ message: 'Response sent' });
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
export const evaluateStudentPerformance = async (req, res) => {
  const { studentId, evaluation } = req.body;
  try {
      const student = await Student.findById(studentId);
      student.performanceEvaluations = student.performanceEvaluations || [];
      student.performanceEvaluations.push({ coach: req.coachId, evaluation });
      await student.save();
      res.status(200).json({ message: 'Performance evaluation added' });
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
export const markAttendance = async (req, res) => {
  const { studentId, date, status } = req.body;
  try {
      const coach = await Coach.findById(req.coachId);
      coach.attendance.push({ student: studentId, date, status });
      await coach.save();
      res.status(200).json({ message: 'Attendance marked' });
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
export const getNews = async (req, res) => {
  try {
      const coach = await Coach.findById(req.coachId);
      res.status(200).json(coach.news);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
export const cancelTraining = async (req, res) => {
  const { date } = req.body;
  try {
      const coach = await Coach.findById(req.coachId);
      coach.trainingSchedule = coach.trainingSchedule.filter(session => session.date.toISOString() !== new Date(date).toISOString());
      await coach.save();
      res.status(200).json({ message: 'Training cancelled' });
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
