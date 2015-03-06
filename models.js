
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
	"name":String,
	"time": String,
	"date":String,
	"image": String,
	"mood" : String,
	"type" : String,
	"desc" : String,
	"location" : String,
	"id": Number,
	"color":String,
	"type_img":String
});
//console.log(ProjectSchema);

var ProjectSchema2 = new Mongoose.Schema({
	"total_cheat" : Number,
	"cheat_left"  : Number,
	"cheat_had"   : Number
});

exports.Project = Mongoose.model('Project', ProjectSchema);
exports.Project2 = Mongoose.model('Project2', ProjectSchema2);



