'use strict';

const response = require('./res');
const connection = require('./koneksi');

exports.index = (req, res) => {
    res.ok("Aplikasi Rest API berjalan!");
}