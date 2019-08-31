'use strict';

var app = require('./app'),
    infoApp = require('./package.json'),
    config = require('./config');

    app.listen(config.app.port, function () {
        console.log(`${infoApp.name} (v ${infoApp.version}) funcionando en http://localhost:${config.app.port} `);
    });
