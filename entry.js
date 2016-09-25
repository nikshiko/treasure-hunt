var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var answerChecker = require('./answerChecker');
var port = process.env.PORT ||8082;
var tp= "ty08";
var pass="yolo123";

app.use(bodyParser.json());
app.use(cors());
app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', function(req, res){

    console.log(req.body.answer+req.body.ques);
    if (answerChecker.check(req.body.ques,req.body.answer)){

      res.status(200).send();
    } else{
        res.status(418).send('wrong');

    }
});
app.post('/login', function(req, res) {
    if((req.body.tpxid==tp)&&(req.body.password==pass)){
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }

  });
