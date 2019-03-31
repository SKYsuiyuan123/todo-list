const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 20,
  host: '47.99.181.157',
  user: 'root',
  password: '1234',
  database: 'study'
});

module.exports =
  pool;
