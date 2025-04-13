const express = require('express');
const router = express.Router();

const studentsControllers = require('../controller/studentsControllers');

router.get('/', studentsControllers.getAllStudents);
router.get('/add', studentsControllers.studentForm);
router.get('/:id', studentsControllers.getStudent);
router.post('/:id', studentsControllers.updateStudent);
router.get('/:id/delete', studentsControllers.deleteStudent);
router.get('/:id/edit', studentsControllers.editStudent);
router.post('/', studentsControllers.pushStudent)

module.exports = router;
