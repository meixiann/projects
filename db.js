var mysql = require('mysql');
var dbconn = mysql.createConnection({
    host     : '192.168.0.64',
    user     : 'root',
    password : 'toor',
    database : 'mydb'
});

module.exports = dbconn;


