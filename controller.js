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
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
}

// menampilkan semua data mahasiswa berdasarkan id
exports.tampilDataMhsId = (req, res) => {
    let id = req.params.id;
    connection.query(
        'SELECT * FROM mahasiswa WHERE id = ?', [id],
        (error, rows, fields) => {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    )
}

// menambahkan data mahasiswa
exports.tambahMhs = (req, res) => {
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?, ?, ?)',
        [nim, nama, jurusan],
        (error, rows, fields) => {
            if (error) {
                console.log(error);
            } else {
                response.ok('Berhasil Menambahkan data', res);
            }
        }
    )
}

// mengubah data mahasiswa berdasarkan id
exports.ubahDataMhs = (req, res) => {
    let id = req.params.id;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query(
        'UPDATE mahasiswa SET nim = ?, nama = ?, jurusan = ? WHERE id = ?',
        [nim, nama, jurusan, id],
        (error, rows, fields) => {
            if (error) {
                console.log(error);
            } else {
                response.ok('Berhasil Mengubah data', res);
            }
        }
    )
}

// menghapus data mahasiswa
exports.hapusDataMhs = (req, res) => {
    let id = req.params.id;

    connection.query(
        'DELETE FROM mahasiswa WHERE id = ?',
        [id],
        (error, rows, fields)=> {
            if(error){
                console.log(error);
            }else{
                response.ok('Berhasil Menghapus data', res);
            }
        }
    )
}