var models = require('../models');
var global_datajson = require('../globaldata.json');
var index=0;

exports.edit_add= function(req, res) {	
	models.Project
		.find()
		.sort({"id":-1})
		.exec(
		function before_renderProjects(err, projDB){
			models.Project2
			.find()
			.exec(
			function render2(er,cheats){
				/*console.log(cheats);
			    var last = cheats.length;
				var update_cheat=
				{
					'total_cheat': req.params.id,
					'cheat_left': req.params.id - cheats[0].cheat_had,
					'cheat_had': cheats[0].cheat_had
				}
				console.log(update_cheat);
				var new_cheat = new models.Project2(update_cheat); 
				new_cheat.save(after);
				console.log('///////////////////////////');
				console.log(cheats);
				function after(err){
				res.render('edit_add', {"meal" : projDB, "total_cheat" : cheats[last].total_cheat,
			    "cheat_left" : cheats[last].cheat_left, "cheat_had" : cheats[last].cheat_had});*/
				global_datajson[0].total_cheat = req.params.id;
				console.log(global_datajson[0].total_cheat);
				global_datajson[0].cheat_left = global_datajson[0].total_cheat - global_datajson[0].cheat_had;
				console.log(global_datajson[0].cheat_left);
				console.log(global_datajson[0].cheat_had);
				/*if(global_datajson[0].cheat_left < 0)
				{
					global_datajson[0].cheat_left = 0;
				}*/
				res.render('edit_add', {"meal" : projDB, "total_cheat" : global_datajson[0].total_cheat,
				"cheat_left" : global_datajson[0].cheat_left, "cheat_had" : global_datajson[0].cheat_had});
				
				});
		});

}



/*
var models = require('../models');


// MAIN FUNCTION - RENDERS/SHOWS HTML
exports.edit_add = function(req, res){
	models.Project
		.find()
		.exec(
	function before_renderProjects(err, projects){
		models.Project2
			.find()
			.exec(
			function render2(er,cheats){
			console.log(cheats);
			var last = cheats.length;
			var update_cheat=
			{
				'total_cheat': req.params.id,
				'cheat_had': cheats[0].cheat_had,
				'cheat_left': req.params.id - cheats[0].cheat_had
			}
			var new_cheat = new models.Project2(update_cheat); 
			new_cheat.save(afterSaving);
			})
	}
			
			function afterSaving(err){
			console.log(cheats);
			res.render('edit_add', {"meal" : projects, "total_cheat" : cheats[last].total_cheat,
			"cheat_left" : cheats[last].cheat_left, "cheat_had" : cheats[last].cheat_had});
			}
	//});});}
	}
*/