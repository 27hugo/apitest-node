const express = require('express');
const router = express.Router();
var encargadosModel = require('../domain/models/encargadosModel');

const db       = require('../database/database');

module.exports = class {

	getEncargados(){
		return new Promise( function(resolve, reject) {
			var sql = 'SELECT * FROM encargados';

			db.getConnection(global.SQLpool, function (err, conn){
				if(!err){
					conn.query(sql, function(err,result){
					if (err) reject();  
					console.log("Number of records selected: " + result.length);
					var encargados = [];
					result.forEach( e => {
						var encargado = new encargadosModel(e.enc_rut, e.enc_nombre, e.enc_ciudad);
						encargados.push(encargado);
					});
					resolve(encargados);
					});
				}else {
					reject();
				}
      			});
		});
	}

	createEncargado(encargado){
		return new Promise( function(resolve, reject) {
			var sql = 'INSERT INTO encargados VALUES (?,?,?)';
			var values = [encargado.enc_rut, encargado.enc_nombre, encargado.enc_ciudad];
			db.getConnection(global.SQLpool, function (err, conn){
				if(!err){
					conn.query(sql, values, function(err,result){
					if (err) reject(); 
					console.log("Number of records inserted: " + result.affectedRows);
					resolve(result.affectedRows);
					});
				}else {
					console.log(err);
					reject();
				}
      			});
		});
	}

	deleteEncargado(enc_rut){
		return new Promise( function(resolve, reject) {
			var sql = 'DELETE FROM encargados WHERE enc_rut=?';
			var values = [enc_rut];

			db.getConnection(global.SQLpool, function (err, conn){
				if(!err){
					conn.query(sql, values, function(err,result){
					if (err) reject();  
					console.log("Number of records deleted: " + result.affectedRows);
					if(result.affectedRows > 0)
						resolve(result.affectedRows);
					else
						reject();
					});
				}else {
					reject();
				}
      			});
		});
	}

}
