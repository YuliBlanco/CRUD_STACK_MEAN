var mongoose = require('mongoose');
require ('./db.js');

var dbURI = 'mongodb://localhost/codigodiario';

mongoose.connection.on('connected', function () {
console.log('Mongoose conectado a ' + dbURI);
});

