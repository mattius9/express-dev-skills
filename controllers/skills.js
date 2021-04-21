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

function addForm(req,res){
    res.render('skills/addSkill');
}

function addSkill(req,res){
    console.log(req.body);
    Skill.addSkill(req.body);
    res.redirect('/skills');
}
module.exports = {
    getAllSkills,
    getSkill,
    addForm,
    addSkill
}