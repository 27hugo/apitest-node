'use strict';

module.exports = (enc_rut, {encargadosRepository}) => {
	return encargadosRepository.deleteEncargado(enc_rut);
};