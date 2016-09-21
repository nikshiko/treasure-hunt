/**
 * Created by kidboyks on 19/9/16.
 */
/* Hello, World! program in node.js */
/*var MongoClient = require('mongodb').MongoClient;
 var assert = require('assert');
 var url = 'mongodb://localhost:27017/test';
 MongoClient.connect(url, function(err, db) {
 assert.equal(null, err);
 console.log("Connected correctly to server.");
 db.close();
 });
 var http = require("http");
 http.createServer(function(request, response){
 response.writeHead(200, {'Content-Type': 'text/plain'});

 // Send the response body as "Hello World"
 response.end('Connected correctly to server.\n');
 }).listen(8081);

 console.log("Hello, World!")*/
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');

// routes will go here

// start the server
app.listen(port);
/*app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));// support encoded bodies
app.post('/', function(req, res) {
    var postname = req.body.name;
    var postpxid = req.body.tpxid;
    var postemail = req.body.email;
    var postpassword = req.body.password;
    console.log(postpxid);
    /!*mongooseConnect(postname,postpxid,postemail,postpassword);*!/

    //res.send(user_id + ' ' + token + ' ' + geo);
});*/
app.get('/get',function(req,res){
res.send("this my appn");
});
/*function mongooseConnect(postname,postpxid,postemail,postpassword){
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost/logindb');
    var Schema = mongoose.Schema;
    var userSchema = new Schema({
        name:   { type: String, required: true },
        tpxid:  { type: String, required: true, unique: true },
        email:  { type: String, required: true },
        password: { type: String, required: true }
    });
    var User = mongoose.model('User', userSchema);
    var jondoe =new User({
        name: postname,
        tpxid: postpxid,
        email: postemail,
        password: postpassword
    });
    jondoe.save();
    console.log(" added");
}*/
