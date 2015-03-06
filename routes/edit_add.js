var data = require('../public/js/data.json');
var projects = require('../projects.json');
var global_datajson = require('../globaldata.json');
var models = require('../models');


// MAIN FUNCTION - RENDERS/SHOWS HTML
exports.edit_add = function(req, res){
	models.Project
		.find()
		.exec(
	function before_renderProjects(err, projects){
		models.Project2
			.find()

})
	global_datajson[0].total_cheat = req.params.id;
	console.log(global_datajson[0].total_cheat);
	global_datajson[0].cheat_left = global_datajson[0].total_cheat - global_datajson[0].cheat_had;
	console.log(global_datajson[0].cheat_left);
	console.log(global_datajson[0].cheat_had);
	if(global_datajson[0].cheat_left < 0)
	{
		global_datajson[0].cheat_left = 0;
	}

	
res.render('edit_add', {"meal" : projects, "total_cheat" : global_datajson[0].total_cheat,
	"cheat_left" : global_datajson[0].cheat_left, "cheat_had" : global_datajson[0].cheat_had});
}


/*var data = require("../public/js/data.json");

exports.edit_add= function(req, res) 
{
	//data.total_cheat = req.query.name;
	//data.cheat_left = data.total_cheat - data.cheat_had;
	console.log("atleast");
	data.total_cheat = req.params.id;
	data.cheat_left = data.total_cheat - data.cheat_had;
	
	// If you are changing the cheat meals in the middle of the month when you already had more cheat meals than the total allowed.
	if(data.cheat_left < 0)
	{
		data.cheat_left = 0;
	}
	res.render('edit_add', data);
}*/