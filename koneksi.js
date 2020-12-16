let mysql = require('mysql');

// membuat koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrestapi'
});

conn.connect((err) => {
    if(err) return err;
    console.log('Mysql berhasil terkoneksi');
});

module.exports = conn;