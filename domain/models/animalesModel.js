'use strict';

module.exports = class AnimalesModel{
    
    constructor(ani_id, ani_nombre, ani_color, ani_tipo, ani_estado, ani_enc_rut, ani_res_rut, ani_fecha_ing, ani_fecha_sal, ani_edad) {
        this.ani_id = ani_id;
        this.ani_nombre = ani_nombre;
        this.ani_color = ani_color;
        this.ani_tipo = ani_tipo;
        this.ani_estado = ani_estado;
        this.ani_enc_rut = ani_enc_rut;
        this.ani_res_rut = ani_res_rut;
        this.ani_fecha_ing = ani_fecha_ing;
        this.ani_fecha_sal = ani_fecha_sal;
        this.ani_edad = ani_edad;
    }
};
