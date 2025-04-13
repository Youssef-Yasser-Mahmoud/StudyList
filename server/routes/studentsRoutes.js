const express = require('express');
const router = express.Router();

const studentsControllers = require('../controller/studentsControllers');

router.get('/', studentsControllers.getAllStudents);
router.get('/add', studentsControllers.studentForm);
router.get('/:id', studentsControllers.getStudent);
router.post('/', studentsControllers.pushStudent)

module.exports = router;
