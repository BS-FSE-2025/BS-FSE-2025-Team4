import mongoose from 'mongoose';

const requestSchema = mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  service: { type: String, required: true },
  date: { type: Date, required: true },
  subject: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
});

export default mongoose.model('Request', requestSchema);