var express = require('express');
var router = express.Router();


var skillsCtrl = require('../controllers/skill')

//all actual paths start with "/skill"

//Get /skill
router.get('/', skillsCtrl.index);

//Get / skill/:id
router.get('/:id', skillsCtrl.show)

module.exports = router;
 