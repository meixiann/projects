var express = require("express");
var app = express();
var db = require('./db');

module.exports = function(app){
app.post('/', function(req, res){


let sql = "SELECT * FROM employees"
db.query(sql, function (err, records){
if(err) throw err;
 var table ='<h2>' + "Staff Details" + '</h2>';
			for(var i=0; i<records.length; i++){    
        table +='<br></td><b>Staff ID: </b><td>'+ records[i].id +" <br/></td><b>Name: </b><td>"+ records[i].name +" <br/></td><b>Age: </b><td>" + records[i].age +" <br/></td><b>Department: </b><td>"+ records[i].department +" <br/></td><b>Pay: </b><td>" + records[i].pay +'<br>------------------------</td></tr>';
			}  

console.log('Data received from DB:\n');
res.send(table);
console.log(records);
console.table(records);
});
});
}

