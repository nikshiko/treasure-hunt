var cors = require('cors');
var express = require('express');
var app = express();
var port = process.env.PORT || 8081;
var bodyParser = require('body-parser');
var Colleague = require('./Colleague');
var mongoose = require('mongoose');
var User = require('./User');
//mongoose.Promise = require('bluebird');

app.listen(port);
app.use(bodyParser.json()); // support json encoded bodies
app.use(cors());//for solving no access origin
app.use(bodyParser.urlencoded({ extended: true }));// support encoded bodies
app.post('/reg/put', function(req, res) {
    var postname = req.body.name;
    var postpxid = req.body.tpxid;
    var postemail = req.body.email;
    var postpassword = req.body.password;
    console.log(postpxid);
    //console.log(postempid);
    mongoose.connect('mongodb://localhost/logindb');
    var jondoe =new User({
      name: postname,
      tpxid: postpxid,
      email: postemail,
      password: postpassword
    }).save( function(err){
      if (err) throw err;
    });
    mongoose.connection.close();
    res.sendStatus(200);
  });




app.post('/reg/check', function(req, res) {
mongoose.connect('mongodb://localhost/logindb');
Colleague.findOne({'empid' : req.body.empid }, function(err, colleagues) {
  if (colleagues==null){
    console.log(colleagues);
    console.log("no such employee");
    mongoose.connection.close();
    res.sendStatus(401);
  }
  else {
    console.log(colleagues);
    console.log(" found");
    mongoose.connection.close();
    res.sendStatus(200);
  }
});
});
