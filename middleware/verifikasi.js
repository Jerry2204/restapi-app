const jwt = require('jsonwebtoken');
const config = require('../config/secret');

verifikasi = ()=>{
    return (req, res, next) => {
        let role = req.body.role;
        // cek authorize header
        let tokenWithBearer = req.headers.authorization;
        if(tokenWithBearer){
            let token = tokenWithBearer.split(' ')[1];
            // verifikasi
            jwt.verify(token, config.secret, (error, decode) => {
                if(error){
                    return res.status(401).send({auth: false, message: 'Token tidak terdaftar!'});
                }else{
                    if(role == 2){
                        req.auth = decode;
                        next();
                    }else{
                        return res.status(401).send({auth: false, message: 'Gagal mengakses role lain!'});
                    }
                }
            });
        }else{
            return res.status(401).send({auth: false, message: 'Token tidak tersedia!'});

        }
    }
}

module.exports = verifikasi;