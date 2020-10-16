var mysql = require('mysql');
var dbconn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'toor',
    database : 'mydb'
});

module.exports = dbconn;


