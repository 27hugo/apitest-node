'use strict';

var config = {
    app: {
        port: 8080
    },
    controllers: [{
        name: 'version',
        url: 'http://localhost:8080/api/v1/version'
    }],
    secret: "cadena secreta para el acceso a la api"

};

module.exports = config;
