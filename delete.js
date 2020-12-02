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
<<<<<<< HEAD
    //table += '<a href= "http://192.168.80.140:8888">  Go back to home </a>'
=======
    table += '<a href= "http://development.com:8888">  Go back to home </a>'
>>>>>>> 65edf9ead1c3635c7427c83f7465487434fc9237
    res.send(table);
    
  });
})
}
