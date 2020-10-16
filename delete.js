var  http = require('http');
var  mysql = require('mysql');
var db = require('./db');

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));

module.exports = function(app){

app.post('/', function(req, res){
  var id = req.body.id;

 db.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM employees WHERE id = '" +  id + "'"
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send("1 record deleted");
    console.log("1 record deleted");
     res.end();
  });
  });
})
}
