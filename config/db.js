const mysql = require('mysql2');

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'T0873868D',
  database: 'petcare'
});

module.exports = connection;
