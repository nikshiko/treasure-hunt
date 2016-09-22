var cors = require('cors');
var express = require('express');
var app = express();
var port = process.env.PORT || 8123;
var bodyParser = require('body-parser');
//var User = require('./User');
var tp= "ty08";
var pass="yolo123";
app.listen(port);
app.use(bodyParser.json()); // support json encoded bodies
app.use(cors());//for solving no access origin
app.use(bodyParser.urlencoded({ extended: true }));// support encoded bodies
app.post('/', function(req, res) {
    if((req.body.tpxid==tp)&&(req.body.password==pass)){
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }

  });
