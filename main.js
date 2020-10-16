var express = require("express");
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));

//Getting the html template from main.html
 app.get('/',function(req,res){
  res.sendFile(__dirname+'/main.html');
});


app.get('/query',function(req,res){
  res.sendFile(__dirname+'/query.html'); 
  require('./query')(app);
});


//input script
app.get('/input',function(req,res){
  res.sendFile(__dirname+'/input.html'); 
  require('./input')(app);
});


//insert script
app.get('/insert',function(req,res){
  res.sendFile(__dirname+'/insert.html');
  require('./insert')(app);
});


//delete script
app.get('/delete',function(req,res){
  res.sendFile(__dirname+'/delete.html');
  require('./delete')(app);
});


var server = app.listen(8888, function() {
console.log('App listening on port 8888!')
});



