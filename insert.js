var express = require("express");
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));

module.exports = function(app){
app.post('/insert', function(req, res){
  var id = req.body.id;
	var name = req.body.name;
  var age = req.body.age;
  var department = req.body.department;
  var pay = req.body.pay;
  var sql = "INSERT INTO employees (id, name, age,department, pay) VALUES ('"+id+"', '"+name+"', '"+age+"','"+department+"', '"+pay+"')";
  
  
  db.query(sql, function (err, result) {
    if (err) throw err;
    
   var table  ='<h2>' + "1 record inserted" + '</h2>';
    console.log("1 record inserted");
<<<<<<< HEAD
    //table += '<a href= "http://192.168.80.140:8888">  Go back to home </a>'
=======
    table += '<a href= "http://development.com:8888">  Go back to home </a>'
>>>>>>> 65edf9ead1c3635c7427c83f7465487434fc9237
    res.send(table);
  });
})

}
