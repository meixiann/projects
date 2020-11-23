var mysql = require('mysql');
var dbconn = mysql.createConnection({
    host     : '192.168.80.176',
    user     : 'root',
    password : 'toor',
    database : 'mydb'
});

module.exports = dbconn;


