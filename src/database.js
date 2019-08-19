const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'bjmns7kzvsnubc19qcus-mysql.services.clever-cloud.com',
    user: 'ug1byw8l46zz27st',
    password: 'vI45nwfW3NawIud5rMRx',
    database: 'bjmns7kzvsnubc19qcus',
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
