var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.getAllSkills);
router.get('/new', skillsCtrl.addForm);
router.get('/:id', skillsCtrl.getSkill);
router.post('/', skillsCtrl.addSkill);


module.exports = router;