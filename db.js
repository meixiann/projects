var mysql = require('mysql');
var dbconn = mysql.createConnection({

    host     : '192.168.80.134',
    host     : '192.168.80.120',
    host     : '192.168.80.137',
    user     : 'root',
    password : 'toor',
    database : 'mydb'
});

module.exports = dbconn;


