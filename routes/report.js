var projects = require('../projects.json');
var global_datajson = require('../globaldata.json');
var models = require('../models');

exports.view = function(req, res){
	var name = req.params.name;    
	models.Project
		.find()
		.exec()
    res.render('report',{"total_cheat" : global_datajson[0].total_cheat,
	"cheat_left" : global_datajson[0].cheat_left, "cheat_had" : global_datajson[0].cheat_had});
}








