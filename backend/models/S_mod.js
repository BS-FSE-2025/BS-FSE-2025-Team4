import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({ //מציין את המאפיינים של האובייקט
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String , required: true, unique:true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    team: { type: String },
    guardian: {
        name: { type: String, required: true },
        type: { type: String, required: true , enum: ['אמא', 'אבא', 'אחר', 'mother', 'father', 'other'] },
        phone: { type: String, required: true },
    },
    messages: [
        {
          sender: { type: String }, // Sender name (Coach or Manager)
          content: { type: String },
          date: { type: Date, default: Date.now },
        },
    ],
      trainingSchedule: [
        {
          date: { type: Date },
          activity: { type: String },
          time: { type: String },
          attendance: { type: String, enum: ['present', 'absent'] },
        },
    ],
      competitionSchedule: [
        {
          competitionName: { type: String },
          date: { type: Date },
          location: { type: String },
        },
    ],
      communityNews: [String], // List of community news
      updates: [
        {
          type: { type: String }, // 'message' or 'evaluation'
          sender: { type: String },
          content: { type: String },
          date: { type: Date, default: Date.now },
        },
    ],
});

const Student = mongoose.model('students', studentSchema);

export default Student;