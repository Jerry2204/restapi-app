'use strict';

const response = require('./res');
const connection = require('./koneksi');

exports.index = (req, res) => {
    response.ok("Aplikasi Rest API berjalan!", res);
}

// menampilkan semua data mahasiswa

exports.tampilDataMhs = (req, res) => {
    connection.query(
        'SELECT * FROM mahasiswa',
        (error, rows, fields) => {
            if(error){
                connection.log(error);
            }else{
                response.ok(rows, res);
            }
        });
}