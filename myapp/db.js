var mongoose = require('mongoose');


Schema = mongoose.Schema;
var Articulo = new Schema({
		titulo: {type: String, required: true},
		contenido: {type: String},
		tags: {type: String},
		autor: {type: String},
		cabecera: {type: String},
		creado: { type: Date, default: Date.now }
	});

module.exports = mongoose.model('Articulo', Articulo);