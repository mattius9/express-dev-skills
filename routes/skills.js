var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.getAllSkills);
router.get('/:id', skillsCtrl.getSkill);

module.exports = router;