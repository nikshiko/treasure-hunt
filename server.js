var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var answerChecker = require('./answerChecker');
var port = process.env.PORT ||8082;
var mongoose= require('mongoose');
var User = require('./User');
var Colleague = require('./Colleague');
//var cookieParser = require('cookie-parser');
//var session = require('express-session');
//app.use(cookieParser());
//app.use(session({secret: 'yolo123'}));
app.use(bodyParser.json());
app.use(cors());
app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/logindb');
app.post('/levels', function(req, res){
    console.log('here')
    console.log(req.body.answer+req.body.ques);
    if(req.body.tpxid==null){
      res.send("login");
    }
    else if (answerChecker.check(req.body.ques,req.body.answer)){
	     //code to be entered for updating progress
       //var tpx = req.session.tpxid;
       console.log(req.body.tpxid);

       User.findOne({'tpxid' : req.body.tpxid}, function(err, user){
         if(err) throw err;
         console.log(user);
         if(user.progress ==(req.body.ques -1)){
           //destroy session
           console.log(user.progress);
           user.progress = req.body.ques;
           console.log(user.progress);
           user.save();
           res.send('correct');
           //mongoose.connection.close();

         }
         else{
           console.log('reches here');
           //mongoose.connection.close();
           res.send('login');
         };

       });
      //res.status(200).send();
    } else{
        //mongoose.connection.close();
        res.send('wrong');
        //

    }
});

app.post('/login', function(req, res) {
	//mongoose.connect('mongodb://localhost/logindb');
    	User.findOne({'tpxid' : req.body.tpxid, 'password' : req.body.password}, function(err, user){
	       if(user==null){
	          //mongoose.connection.close();
	           res.status(400).send('wrongCredentials');
	}
	else {
       //code for creating session
       //req.session.tpxid=req.body.tpxid;
       //req.session.name=user.name;
	     //mongoose.connection.close();
	     res.send(user.progress.toString());
	}
	});
  });

app.post('/reg/put', function(req, res) {
    var postname = req.body.name;
    var postpxid = req.body.tpxid;
    var postemail = req.body.email;
    var postpassword = req.body.password;
    console.log(postpxid);
    //console.log(postempid);
    //mongoose.connect('mongodb://localhost/logindb');
	User.findOne({'tpxid' : req.body.tpxid }, function(err, user){
	if(user!=null){
	res.send("exists");
}
else{
    var jondoe =new User({
      name: postname,
      tpxid: postpxid,
      email: postemail,
      password: postpassword,
      progress: 0
    }).save( function(err){
      if (err) throw err;
    });
    //mongoose.connection.close();
    res.send("registered");
}
});
  });

app.post('/reg/check', function(req, res) {
//mongoose.connect('mongodb://localhost/logindb');
Colleague.findOne({'empid' : req.body.empid }, function(err, colleagues) {
  if (colleagues==null){
    console.log(colleagues);
    console.log("no such employee");
    //mongoose.connection.close();
    res.sendStatus(401);
  }
  else {
    console.log(colleagues);
    console.log(" found");
    //mongoose.connection.close();
    res.sendStatus(200);
  }
});
});

/*app.post('/logout', function(req, res) {
  req.session.destroy();
  res.send('login');
}); */

app.post('/admin', function(req, res) {
  var tpx = "admin";
  var password = "console";
  if((req.body.tpxid==tpx)&&(req.body.password==password)){
    //req.session.tpxid="admin";
    res.sendStatus(200);
  }
});

app.post('/admin/find', function(req, res) {
    User.find({}, function(err, users) {
    if (err) throw err;
    res.json(users);
    console.log(users);
  });
});

app.post('/admin/progress', function(req, res) {
    User.find({'progress' : req.body.progress}, function(err, users) {
    if (err) throw err;
    res.json(users);
    console.log(users);
  });
});
