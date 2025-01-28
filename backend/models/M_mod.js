import mongoose from 'mongoose';

const managerSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: [
    {
      oldRole: { type: String },
      newRole: { type: String },
      assignedAt: { type: Date, default: Date.now },
    },
  ],
  events: [
    {
      title: { type: String, required: true },
      date: { type: Date, required: true },
      description: { type: String },
    },
  ],
  notifications: [
    {
      content: { type: String, required: true },
      date: { type: Date, default: Date.now },
      recipientType: { type: String, enum: ['student', 'coach', 'all'] },
    },
  ],
  teams: [
    {
      teamName: { type: String, required: true },
      coach: { type: mongoose.Schema.Types.ObjectId, ref: 'coaches' }, // Reference to coaches
      students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'students' }], // Reference to students
    },
  ],
});

const Manager = mongoose.model('Manager', managerSchema);

export default Manager;