// RECEIVING USERNAME & PASSWORD DATA
var global_datajson = require('../globaldata.json');
var models = require('../models');


// MAIN FUNCTION - RENDERS/SHOWS HTML
exports.view = function(req, res){
	models.Project
		.find()
		.sort({"id":-1})
		.exec(
		function before_renderProjects(err, projDB){
			models.Project2
			.find()
			.exec(
			function render2(err, cheats){
				/*console.log(cheats);
				last = cheats.length-1;
				res.render('index', {"meal" : projDB, "total_cheat" : cheats[last].total_cheat,
				"cheat_left" : cheats[last].cheat_left, "cheat_had" : cheats[last].cheat_had});*/
				res.render('index', {"meal" : projDB, "total_cheat" : global_datajson[0].total_cheat,
				"cheat_left" : global_datajson[0].cheat_left, "cheat_had" : global_datajson[0].cheat_had});

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