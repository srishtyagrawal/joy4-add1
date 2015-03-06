exports.view = function(req, res){
	var name = req.params.name;
	//console.log("The meal name is "+name);
	//res.render('mealHolder',{
	//	'projectName': name
	//});

	var data = {
		"image" :"foodThumbail.jpg"
	}
    
    res.render('upload',data);
};
