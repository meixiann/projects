var mysql = require('mysql');
var dbconn = mysql.createConnection({
    host     : 'local-host',
    user     : 'root',
    password : 'toor',
    database : 'mydb'
});

module.exports = dbconn;


