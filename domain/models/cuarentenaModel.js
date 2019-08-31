'use strict';

module.exports = class CuarentenaModel{
    
    constructor(cua_id, cua_tipo, cua_fecha_ing, cua_fecha_sal, cua_nivel, cua_ani_id) {
        this.cua_id = cua_id;
        this.cua_tipo = cua_tipo;
        this.cua_fecha_ing = cua_fecha_ing;
        this.cua_fecha_sal=  cua_fecha_sal;
        this.cua_nivel = cua_nivel;
        this.cua_ani_id = cua_ani_id;
    }
};
