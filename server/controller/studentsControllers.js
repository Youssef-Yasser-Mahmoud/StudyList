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

const getStudent = async (req, res) => {
  const studentId = req.params.id;
  const student = await Model.students.findOne({ _id: studentId });
  res.render('studentPage', { student });
};

const editStudent = async (req, res) => {
  const studentId = req.params.id;
  const student = await Model.students.findById(studentId);
  res.render('editStudent', { student });
};

const updateStudent = async (req, res) => {
  const studentId = req.params.id;
  await Model.students.findByIdAndUpdate(studentId, req.body)
  res.redirect('/')
}

module.exports = { getAllStudents, studentForm, pushStudent, getStudent, editStudent, updateStudent };
