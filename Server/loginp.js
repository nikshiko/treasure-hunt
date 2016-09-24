var cors = require('cors');
var express = require('express');
var app = express();
var port = process.env.PORT || 8123;
var bodyParser = require('body-parser');
var User = require('./User');
app.listen(port);
app.use(bodyParser.json()); // support json encoded bodies
app.use(cors());//for solving no access origin
app.use(bodyParser.urlencoded({ extended: true }));// support encoded bodies
app.post('/login', function(req, res) {
	mongoose.connect('mongodb://localhost/logindb');
    	User.findOne({'tpxid' : req.body.tpxid, 'password' : req.body.password}, function(err, users){
	if(users==null){
	mongoose.connection.close();
	res.sendStatus(400);		
	}
	else {
	mongoose.connection.close();
	res.sendStatus(200);
	}	
	});
  });
