var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var answerChecker = require('./answerChecker');
var port = process.env.PORT ||8080;


app.use(bodyParser.json());
app.use(cors());
app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', function(req, res){
    console.log('here')
    console.log(req.body.answer+req.body.ques);
    if (answerChecker.check(req.body.ques,req.body.answer)){
      /*function getNextLevel (ques) {
        var levels = {
          1: function () {
            return '300'
          },
          2: function () {
            return 'https://expressjs.com/';
          },
          3: function () {
            return 'https://nodejs.org/en/';
          },
          4: function () {
            return 'http://mean.io/#!/';
          },
        };
        return levels[ques]();
      }*/
      //var url= getNextLevel(req.body.ques);
      res.status(200).send();
    } else{
        res.status(418).send('wrong');

    }
});
