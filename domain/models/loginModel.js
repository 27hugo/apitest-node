'use strict';

module.exports = class LoginModel{
    
    constructor(log_enc_rut, log_token, log_ultima_conexion, log_contrasena) {
        this.log_enc_rut = log_enc_rut;
        this.log_token = log_token;
        this.log_ultima_conexion = log_ultima_conexion;
        this.log_contrasena = log_contrasena;
    }
};
