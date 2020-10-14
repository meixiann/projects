var  http = require('http');
var  mysql = require('mysql');
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function (req, res){
	res.sendFile(__dirname + "/insert.html");
});

var mysql = require('mysql');
var dbconn = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'toor',
database : 'mydb'
});

app.post('/insert', function(req, res){
  var id = req.body.id;
	var name = req.body.name;
  var age = req.body.age;
  var department = req.body.department;
  var pay = req.body.pay;
 
 dbconn.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO employees (id, name, age,department, pay) VALUES ('"+id+"', '"+name+"', '"+age+"','"+department+"', '"+pay+"')";
  dbconn.query(sql, function (err, result) {
    if (err) throw err;
    res.send("1 record inserted");
    console.log("1 record inserted");
     res.end();
  });
  });
})

var server = app.listen(8888, function() {
console.log('App listening on port 8888!')
});
