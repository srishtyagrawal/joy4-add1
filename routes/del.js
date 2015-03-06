// RECEIVING USERNAME & PASSWORD DATA
//var data = require('../public/js/data.json');
//var projects = require('../projects.json');
var global_datajson = require('../globaldata.json');
var models = require('../models');

// MAIN FUNCTION - RENDERS/SHOWS HTML
exports.delMeal = function(req, res){
  var type;
  var projectID = req.query.id;
   models.Project
  .find({"id": projectID})
  .exec(before);
  function before (err, proj){
	if (proj[0].color=='redish')
	{
		console.log('am here');
		global_datajson[0].cheat_had = global_datajson[0].cheat_had-1;
		global_datajson[0].cheat_left = global_datajson[0].cheat_left+1
	}
  }
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
		.sort({"id":-1})
		.exec(
		function before_renderProjects(err, projDB){
			models.Project2
			.find()
			.exec(
			function render2(err, cheats){
				res.render('index', {"meal" : projDB, "total_cheat" : global_datajson[0].total_cheat,
				"cheat_left" : global_datajson[0].cheat_left, "cheat_had" : global_datajson[0].cheat_had});
			});
	});
}