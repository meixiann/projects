var  http = require('http');
var  mysql = require('mysql');
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function (req, res){
	res.sendFile(__dirname + "/delete.html");
 
});

var mysql = require('mysql');
var dbconn = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'toor',
database : 'mydb'
});

app.post('/delete', function(req, res){
  var id = req.body.id;

 dbconn.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM employees WHERE id = '" +  id + "'"
  dbconn.query(sql, function (err, result) {
    if (err) throw err;
    res.send("1 record deleted");
    console.log("1 record deleted");
     res.end();
  });
  });
})

var server = app.listen(8888, function() {
console.log('App listening on port 8888!')
});
