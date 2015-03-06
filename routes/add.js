//var projects = require('../projects.json');
var global_datajson = require('../globaldata.json');
var models = require('../models');
var index=0;
var newMeal;

exports.addMeal= function(req, res) {
newMeal= 
{
	'name': req.query.name,
	'time':  req.query.time,
	'date' :  req.query.date,
	'image': req.query.address,
	'desc' :  req.query.desc,
	'mood': req.query.mood,
	'color': req.query.health,
	'location' : req.query.loc,
	'id': index,
	'type_img': req.query.type_img
}
	
	models.Project
		.find()
		.exec(
		function before_renderProjects(err, projDB){
			index = projDB.length;
	newMeal.id = index;
	var new_meal = new models.Project(newMeal); 
	new_meal.save(afterSaving);
	function afterSaving(err){
		res.render('add',newMeal);
	}
			models.Project2
			.find()
			.exec(
			function render2(er,cheats){
				if (req.query.health == "redish")
				{
					/*var update_cheat=
					{
						'total_cheat': cheats[0].total_cheat,
						'cheat_had': cheats[0].cheat_had+1,
						'cheat_left': cheats[0].cheat_left-1
					}
					var new_cheat = new models.Project2(update_cheat); 
					new_cheat.save();
					//models.Project2.update({total_cheat:10},{$set: { cheat_left:8}});*/
					global_datajson[0].cheat_had = global_datajson[0].cheat_had+1;
					global_datajson[0].cheat_left = global_datajson[0].cheat_left-1
				}
			})
		});

}
