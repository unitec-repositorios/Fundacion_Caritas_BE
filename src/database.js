const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'caritas',
    password: 'caritas123',
    database: 'caritas',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(err) {
        console.log(err);
        return;
    }
    else {
        console.log('Connected succesfully to mysql');
    }
});

module.exports = mysqlConnection;