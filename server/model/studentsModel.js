const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/studyList').then(() => {
  console.log('mongoose is connected');
});

const studentsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 9, max: 18 },
  grade: { type: String, enum: ['A', 'A+', 'B', 'B+', 'C', 'C+', 'F'] },
});

const students = mongoose.model('students', studentsSchema);

module.exports = { students };
