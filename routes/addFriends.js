// RECEIVING USERNAME & PASSWORD DATA
var data = require('../public/js/data.json');

exports.add = function(req, res){
	console.log(data);
	myfunction2();
	req.body.name   //ASK FOR HELP BRAH
};

function myfunction2(){
		console.log("SUCCESS!");
		var username = $('#username2').val();
		var password = $('#password2').val();
		console.log(username);
		console.log(password);

		$.ajax('js/data.json', {
		dataType: 'json',
      	success: function(results)
      	{
        	for(var index =0; index < results.userpass.length; index++)
        	{
        		if(results.userpass[index].username == username)
        		{
          			/*window.location="http://www.newlocation.com";*/
          			$('#alert2').show()
          			return true;
        		}
        	}
			$('#alert3').show()
			//add to JSON

			var newuser = new Object();
			newuser["username"] = username;
			newuser["password"] = password;



			data[userpass].push(newuser);
			console.log(results.userpass[2].username);
			console.log(results.userpass[2].password);
			return false;
      	}
    	});


    }