var Skill = require('../models/skill');

function getAllSkills(req,res){
    res.render('skills/index', {
        skill: Skill.getAll(),
    })
}

function getSkill(req,res){
    res.render('skills/showSkill',{
        skill: Skill.getOne(req.params.id)
    })
}
module.exports = {
    getAllSkills,
    getSkill
}