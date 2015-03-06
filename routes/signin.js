// RECEIVING USERNAME & PASSWORD DATA
var data = require('../public/js/pass.json');

exports.view = function(req, res){
	var name = req.params.name;

    res.render('signin',data);
}