import Student from '../models/S_mod.js'
import Manager from '../models/M_mod.js';
import Coach from '../models/C_mod.js';
import Role from '../models/Rols.js';
// רישום תלמיד חדש
export const registerStudent = async (req, res) => {
  const { name,age,email,phone, username, password,guardian } = req.body;
  try {
    const existingStudent = await Student.findOne({ username });
    if (existingStudent) return res.status(400).json({ message: 'שם משתמש קיים כבר' });

    const existingEmail = await Student.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'אימייל זה כבר בשימוש' });
    }

    if (age < 7 || age > 18) {
      return res.status(400).json({ message: 'גיל התלמיד חייב להיות בין 7 ל-18.' });
    }
    const phoneRegex = /^(050|051|052|053|054|055)\d{7}$/;
    if (!phoneRegex.test(phone) || !phoneRegex.test(guardian.phone)) {
      return res.status(400).json({ message: 'מספרי טלפון אסורים להיות אותו דבר' });
    }
    if (phone === guardian.phone) {
      return res.status(400).json({ message: 'מספר הטלפון של התלמיד והאפוטרופוס חייבים להיות שונים.' });
    }
    const newStudent = new Student({
      name,
      age,
      email,
      phone,
      username,
      password,
      guardian,
    });
    await newStudent.save();
    res.status(201).json({ message: 'הרשמה בוצעה בהצלחה', student: newStudent });
  } catch (error) {
    res.status(500).json({ message: 'שגיאת שרת', error: error.message });
  }
};

// התחברות
export const loginStudent = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  try {
    const student = await Student.findOne({ username });
    if (!student || student.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json(student); // Ensure this is the correct response
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// פרופיל תלמיד
export const getProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'תלמיד לא נמצא' });

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// הודעות
export const getMessages = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student.messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new request
export const createRequest = async (req, res) => {
  const { studentId, service, date, subject } = req.body;

  try {
    const newRequest = new Request({ studentId, service, date, subject });
    await newRequest.save();
    res.status(201).json({ message: 'בקשה נשלחה בהצלחה', request: newRequest });
  } catch (error) {
    res.status(500).json({ message: 'שגיאה בשרת', error: error.message });
  }
};

// Get all requests for a specific student
export const getStudentRequests = async (req, res) => {
  const { studentId } = req.params;

  try {
    const requests = await Request.find({ studentId });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'שגיאה בשרת', error: error.message });
  }
};
export const getAllManagersAndCoaches = async (req, res) => {
  try {
    const managers = await Manager.find({}, { name: 1, _id: 0 }); // Only fetch names
    const coaches = await Coach.find({}, { name: 1, _id: 0 }); // Only fetch names

    const roles = [
      { name: 'מנהל', list: managers },
      { name: 'מאמנים', list: coaches },
    ];

    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch roles', error });
  }
};
// לוחות זמנים
export const getTrainingSchedule = async (req, res) => {
  const { studentId } = req.params;
  try {
    const student = await Student.findById(studentId).select('trainingSchedule');
    if (!student) return res.status(404).json({ message: 'Student not found' });

    res.status(200).json({ trainingSchedule: student.trainingSchedule });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getCompetitionSchedule = async (req, res) => {
  const { studentId } = req.params;

  try {
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: 'Student not found.' });
    }

    res.status(200).json({ competitionSchedule: student.competitionSchedule });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// חדשות ועדכונים
export const getCommunityNews = async (_req, res) => {
  try {
    const news = await Student.find().select('communityNews');
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getUpdates = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student.updates);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
export const getAttendancePercentage = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);

    if (!student || !student.attendance || student.attendance.length === 0) {
      return res.status(404).json({ message: 'No attendance records found.' });
    }

    const totalSessions = student.attendance.length;
    const attendedSessions = student.attendance.filter(
      (record) => record.status === 'present'
    ).length;

    const attendancePercentage = Math.round((attendedSessions / totalSessions) * 100);

    res.status(200).json({ attendancePercentage, totalSessions, attendedSessions });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getRoles = async (req, res) => {
  try {
    const roles = await Role.find(); // Assuming you have a "Role" model
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch roles', error });
  }
};
