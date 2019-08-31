'use strict';

var repository = require('../repositories/encargadosRepository');
var encargadosRepository = new repository();
var agregarEncargado = require('../uses_cases/agregarEncargado');
var deleteEncargado = require('../uses_cases/eliminarEncargado');
var consultarEncargados = require('../uses_cases/consultarEncargados');

var encargadosModel = require('../domain/models/encargadosmodel');

module.exports = {
	async getEncargados(req, res){

		try{
			const resp = await consultarEncargados({encargadosRepository});
			res.json(resp);
		}catch(err){
			console.log(err);
			res.json(err);
		}

	},

	async crearEncargado(req, res){
		try{
			var e = req.body;
			var encargado = new encargadosModel(e.enc_rut, e.enc_nombre, e.enc_ciudad);
	
			if(!encargado.enc_rut){
				res.json('Falta enc_rut');

			}else if(!encargado.enc_nombre){
				res.json('Falta enc_nombre');
			
			}else if(!encargado.enc_ciudad){
				res.json('Falta enc_ciudad');
			
			}else{
				const resp = await agregarEncargado(encargado , {encargadosRepository} );
				res.json(resp);
			}
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},

	async eliminarEncargado(req, res){
		try{
			var enc_rut = req.params.enc_rut;
			if(!enc_rut){
				res.json('Falta enc_rut');
			}else{
				const resp = await deleteEncargado(enc_rut , {encargadosRepository} );
				res.json(resp);
			}
		}catch(err){
			console.log(err);
			res.json(err);
		}
	}

};

