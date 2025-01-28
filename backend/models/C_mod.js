import mongoose from 'mongoose';

const coachSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'students' }], // Linked students
    
});

const Coach = mongoose.model('coaches', coachSchema);
export default Coach;
/*
trainingSchedule: [
        {
            date: { type: Date, required: true },
            activity: { type: String, required: true },
            time: { type: String, required: true },
        },
    ],
    competitionSchedule: [
        {
            name: { type: String, required: true },
            date: { type: Date, required: true },
            location: { type: String, required: true },
        },
    ],
    trainingPlans: [
        {
            student: { type: mongoose.Schema.Types.ObjectId, ref: 'students' },
            planDetails: { type: String, required: true },
            date: { type: Date, required: true },
        },
    ],
    attendance: [
        {
            student: { type: mongoose.Schema.Types.ObjectId, ref: 'students' },
            date: { type: Date, required: true },
            status: { type: String, enum: ['present', 'absent'], required: true },
        },
    ],
    news: [{ type: String }], // Community news
    */