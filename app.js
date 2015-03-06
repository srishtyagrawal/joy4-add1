
/**
 * Module dependencies.
 */

//var express = require('express');
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , fs = require('fs')
  , path = require('path');

var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');
/*
// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS */
var local_database_name = 'lab7';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);


var index = require('./routes/index');
var report = require('./routes/report');
var upload = require('./routes/upload');
var edit = require('./routes/edit');
var signin = require('./routes/signin');
var mealHolder = require('./routes/mealHolder');
var add = require('./routes/add')
var del = require('./routes/del')
var edit_add = require('./routes/edit_add')
var reportalt = require('./routes/reportalt')

// Example route
// var user = require('./routes/user');

var app = express();


// all environments

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());
app.use(express.multipart());
app.use(app.router);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', signin.view);
app.get('/home', index.view);
app.get('/viewingMeal/:id', mealHolder.view);
app.get('/report', report.view);
app.get('/upload', upload.view);
app.get('/edit', edit.view);
app.get('/add', add.addMeal);
app.get('/del', del.delMeal);
app.get('/edit_add/:id', edit_add.edit_add);
app.get('/reportalt', reportalt.view);
app.post('/add/new', add.addMeal);
//app.post('/viewingMeal/:id/delete', mealHolder.deleteProject);
//app.get('/user', user.list);

// Example route
// app.get('/users', user.list);




//Handle the file upload
app.post('/upload', function(req, res) {
	console.log(req.files);
	if (!fs.existsSync(__dirname + "/public/img"))
		fs.mkdirParent(__dirname + "/public/img");
	
	//Handle the file
	fs.readFile(req.files.imageUploader.path, function(err, data) {
		var newPath = __dirname + '/public/img/' + req.files.imageUploader.name;
		fs.writeFile(newPath, data, function(err) {
			console.log(err);
      var data = {
        "image" : req.files.imageUploader.name
      }
      res.render('upload',data);
			//res.send("Picture uploaded yaaa");
			//res.end();
		});
	});
});

fs.mkdirParent = function(dirPath, mode, callback) {
	//Call the standard fs.mkdir
  	fs.mkdir(dirPath, mode, function(error) {
    	//When it fail in this way, do the custom steps
    	if (error && error.errno === 34) {
      		//Create all the parents recursively
      		fs.mkdirParent(path.dirname(dirPath), mode, callback);
      		//And then the directory
      		fs.mkdirParent(dirPath, mode, callback);
    	}

    	//Manually run the callback since we used our own callback to do all these
    	callback && callback(error);
  	});
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

