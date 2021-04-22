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
    Skill.addSkill(req.body);
    res.redirect('/skills');
}

function removeSkill(req,res){
    console.log(req.params.id);
    Skill.removeSkill(req.params.id);
    res.redirect('/skills');
}

function editForm(req,res){
    res.render('skills/editSkill', {skill: Skill.getOne(req.params.id)});
}

function editSkill(req,res){
    Skill.editSkill(req.body);
    res.redirect('/skills');
}
module.exports = {
    getAllSkills,
    getSkill,
    addForm,
    addSkill,
    removeSkill,
    editForm,
    editSkill
}