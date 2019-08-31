'use strict';

module.exports = class ResponsablesModel{
    
    constructor(res_rut, res_nombre, res_correo, res_direccion, res_telefono, res_ciudad) {
        this.res_rut = res_rut;
        this.res_nombre = res_nombre;
        this.res_correo = res_correo;
        this.res_direccion = res_direccion;
        this.res_telefono = res_telefono;
        this.res_ciudad = res_ciudad;
    }
};
