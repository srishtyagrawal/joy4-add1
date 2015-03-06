// RECEIVING USERNAME & PASSWORD DATA

var models = require('../models');


// MAIN FUNCTION - RENDERS/SHOWS HTML
exports.view = function(req, res){
	models.Project
		.find()
		.exec(
		function before_renderProjects(err, projDB){
			models.Project2
			.find()
			.exec(
			function render2(err, cheats){
				console.log('here it is');
				//console.log(cheats[1].total_cheat);
				//console.log(cheats[1].cheat_left);
				//console.log(cheats[1].cheat_had);
				console.log(cheats);
				res.render('index', {"meal" : projDB, "total_cheat" : cheats.total_cheat,
				"cheat_left" : cheats.cheat_left, "cheat_had" : cheats.cheat_had});
			});
	});
}

/*
models.GlobalData.find(function(err, global_data){
	models.Project
		.find()
		.exec(renderProjects);
		
	function renderProjects(err, projects){
			console.log("2");
			console.log(projects);
			console.log(projects);
	
			//console.log(meal);
	}
})*/