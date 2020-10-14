var  http = require('http');
var  mysql = require('mysql');
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function (req, res){
	res.sendFile(__dirname + "/index.html");
});

var mysql = require('mysql');
var dbconn = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'toor',
database : 'mydb'
});

dbconn.connect(function(err){
if(err){
console.log('Database connection error');
}else{
console.log('Database connection successful');
}
});

app.post('/', function(req, res){
	var id = req.body.id;
 
let sql = "SELECT * FROM employees WHERE id = '" +  id + "'"
dbconn.query(sql, function (err, records){
if(err) throw err;
 var table ='<h2>' + "Staff Details" + '</h2>';
			for(var i=0; i<records.length; i++){    
        table +='<br></td><b>Staff ID: </b><td>'+ records[i].id +" <br/></td><b>Name: </b><td>"+ records[i].name +" <br/></td><b>Age: </b><td>" + records[i].age +" <br/></td><b>Department: </b><td>"+ records[i].department +" <br/></td><b>Pay: </b><td>" + records[i].pay +'<br></td></tr>';
			}  


console.log('Data received from DB:\n');
res.send(table);
console.log(records);
console.table(records);

});	
});


var server = app.listen(8888, function() {
console.log('App listening on port 8888!')
});
