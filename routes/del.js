// RECEIVING USERNAME & PASSWORD DATA
//var data = require('../public/js/data.json');
//var projects = require('../projects.json');
//var global_datajson = require('../globaldata.json');
var models = require('../models');

// MAIN FUNCTION - RENDERS/SHOWS HTML
exports.delMeal = function(req, res){

  var projectID = req.query.id;
   models.Project
  .find({"id": projectID})
  .remove()
  .exec(afterRemove);
  function afterRemove (err, projects){
  if(err) console.log(err);
  //res.send('ok');
  }
	models.Project
		.find()
		.exec(
		function before_renderProjects(err, projDB){
			models.Project2
			.find()
			.exec(
			function render2(err, cheats){
				res.render('index', {"meal" : projDB, "total_cheat" : cheats.total_cheat,
				"cheat_left" : cheats.cheat_left, "cheat_had" : cheats.cheat_had});
			});
	});
}