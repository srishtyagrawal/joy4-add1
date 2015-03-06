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
					cheats.cheat_had = 10;
					cheats.cheat_had = cheats.cheat_had+1;
					cheats.cheat_left = cheats.cheat_left-1;
				}
			})
		});

}
