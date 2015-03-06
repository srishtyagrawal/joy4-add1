// RECEIVING USERNAME & PASSWORD DATA
//var data = require('../public/js/data.json');

exports.view = function(req, res){
	//var name = req.params.name;
	//console.log("The meal name is "+name);
	//res.render('mealHolder',{
	//	'projectName': name
	//});
    res.render('edit');
    //res.render('edit', data);
}