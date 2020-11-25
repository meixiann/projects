var mysql = require('mysql');
var dbconn = mysql.createConnection({
<<<<<<< HEAD
    host     : 'local-host',
=======
<<<<<<< HEAD
    host     : 'local-host',
=======

    host     : '192.168.80.134',
>>>>>>> e2a9b42c409138dbc32c8ad1532584f09361900e
>>>>>>> 3803200c1387304acbc34795b6310c593605e7c4
    user     : 'root',
    password : 'toor',
    database : 'mydb'
});

module.exports = dbconn;


