var express = require("express");
var app = express();
var db = require('./db');

module.exports = function(app){
app.post('/query', function(req, res, next){

let sql = "SELECT * FROM employees"
db.query(sql, function (err, records){
if(err) throw err;
 var table ='<h2>' + "Staff Details" + '</h2>';
			for(var i=0; i<records.length; i++){    
        table +='<br></td><b>Staff ID: </b><td>'+ records[i].id +" <br/></td><b>Name: </b><td>"+ records[i].name +" <br/></td><b>Age: </b><td>" + records[i].age +" <br/></td><b>Department: </b><td>"+ records[i].department +" <br/></td><b>Pay: </b><td>" + records[i].pay +'<br>------------------------</td></tr></br>';
			}  
//table += '<a href= "http://development.com:8888">  Go back to home </a>'
console.log('Data received from DB:\n');
res.send(table);
console.log(records);
console.table(records);
//db.end();
});
});
}
