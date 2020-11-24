var mysql = require('mysql');
var dbconn = mysql.createConnection({
<<<<<<< HEAD
    host     : '192.168.80.134',
=======
    host     : '192.168.80.176',
>>>>>>> 568c3bfd0bf5d8cb65c15e9c0353cf65aaba0650
    user     : 'root',
    password : 'toor',
    database : 'mydb'
});

module.exports = dbconn;


