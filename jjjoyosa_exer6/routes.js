const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.post('/save-student', controller.saveStudent);
router.post('/update', controller.updateStudent);
router.post('/remove-user', controller.removeUser);
router.post('/remove-all-user', controller.removeAllUsers);
router.get('/user', controller.getUser);
router.get('/members', controller.getAllMembers);

module.exports = router;
