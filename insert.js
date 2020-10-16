var express = require("express");
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));

module.exports = function(app){
app.post('/', function(req, res){
  var id = req.body.id;
	var name = req.body.name;
  var age = req.body.age;
  var department = req.body.department;
  var pay = req.body.pay;
 
 db.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO employees (id, name, age,department, pay) VALUES ('"+id+"', '"+name+"', '"+age+"','"+department+"', '"+pay+"')";
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send("1 record inserted");
    console.log("1 record inserted");
     res.end();
  });
  });
  //res.sendFile(__dirname+'/main.html');
})

}
