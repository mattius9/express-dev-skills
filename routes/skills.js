var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');


router.use( function( req, res, next ) {
    // this middleware will call for each requested
    // and we checked for the requested query properties
    // if _method was existed
    // then we know, clients need to call DELETE request instead
    if ( req.query._method == 'DELETE' ) {
        // change the original METHOD
        // into DELETE method
        req.method = 'DELETE';
        // and set requested url to /user/12
        req.url = req.path;
    }       
    next(); 
});
/* GET users listing. */
router.get('/', skillsCtrl.getAllSkills);
router.get('/new', skillsCtrl.addForm);
router.get('/:id', skillsCtrl.getSkill);
router.post('/', skillsCtrl.addSkill);

router.delete('/:id',skillsCtrl.removeSkill);



module.exports = router;