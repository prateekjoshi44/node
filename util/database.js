const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'eCommerce',
    password: '9068'
});

module.exports = pool.promise();