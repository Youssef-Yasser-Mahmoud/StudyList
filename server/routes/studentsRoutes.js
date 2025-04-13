const express = require('express');
const router = express.Router();

const studentsControllers = require('../controller/studentsControllers');

router.get('/', studentsControllers.getAllStudents);


module.exports = router;
