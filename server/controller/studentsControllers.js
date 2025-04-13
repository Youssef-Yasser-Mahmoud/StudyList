const Model = require('../model/studentsModel');

const getAllStudents = async (req, res) => {
  const students = await Model.students.find({});
  console.log(students);
  res.render('students', { students });
};

module.exports = { getAllStudents };
