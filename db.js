var mysql = require('mysql');
var dbconn = mysql.createConnection({
<<<<<<< HEAD
    host     : 'local-host',
=======

    host     : '192.168.80.134',
>>>>>>> e2a9b42c409138dbc32c8ad1532584f09361900e
    user     : 'root',
    password : 'toor',
    database : 'mydb'
});

module.exports = dbconn;


