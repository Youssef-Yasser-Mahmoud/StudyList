const Model = require('../model/studentsModel');

const getAllStudents = async (req, res) => {
  const students = await Model.students.find({});
  console.log(students);
  res.render('students', { students });
};

const studentForm = (req, res) => {
  res.render('addStudent');
};

const pushStudent = async (req, res) => {
  const studentObj = req.body;
  await Model.students.insertOne(studentObj);
  res.redirect('students');
};

const getStudent = (req, res) => {
  console.log(req.params.id)
  res.send('hi')
};

module.exports = { getAllStudents, studentForm, pushStudent, getStudent };
