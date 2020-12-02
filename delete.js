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

app.post('/delete', function(req, res){
  var id = req.body.id;

 var sql = "DELETE FROM employees WHERE id = '" +  id + "'"
  db.query(sql, function (err, result) {
    if (err) throw err;
    
    var table  ='<h2>' + "1 record deleted" + '</h2>';
    console.log("1 record deleted");
    //table += '<a href= "http://192.168.80.140:8888">  Go back to home </a>'
    res.send(table);
    
  });
})
}
