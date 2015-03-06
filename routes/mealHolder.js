// RECEIVING USERNAME & PASSWORD DATA
// RECEIVING USERNAME & PASSWORD DATA
var data = require('../public/js/data.json');
var projects = require('../projects.json');
var global_datajson = require('../globaldata.json');
var models = require('../models');

/*exports.view = function(req, res){
	var length = parseInt(projects.length)
	var index = parseInt(req.params.id);
	//console.log(index)
	index = length - index -1;
	//console.log(index)
	//console.log(data.meal[index]);
	models.Project
		.find()
		.exec()
	//res.render('mealHolder',data.meal[index]);
	//console.log(projects[index].image);
	res.render('mealHolder', {"image" : projects[index].image, "name": projects[index].name, "time": projects[index].time, "date": projects[index].date, 
	"mood": projects[index].mood, "type": projects[index].type, "desc": projects[index].desc, "location" : projects[index].location, "id" : projects[index].id,
	"color": projects[index].color, "type_img": projects[index].type_img});
}*/


exports.view = function(req, res) {
  var index = parseInt(req.params.id);

  models.Project
  .find({"id": index})
  .exec(function afterQuery(err, projDB) {
	console.log(index);
	console.log(projDB[0]);
	res.render('mealHolder', projDB[0]); } );
}

