var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactos');
var Contactos = mongoose.model('contactos', mongoose.Schema({
	name:String,
	lastname:String,
	email:String,
	phone:String,
	phonee:String,
	interes:String	
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/contactos', function(req, res){
	Contactos.find(function(err, contactos){
		if(err)
			res.send(err);
		res.json(contactos);
	});
});

app.get('/api/contactos/:id', function(req, res){
	
	Contactos.findOne({_id:req.params.id}, function(err, contactos){
		if(err)
			res.send(err);
		res.json(contactos);
	});
});

app.post('/api/contactos', function(req, res){
		Contactos.create( req.body, function(err, contactos){
		if(err)
			res.send(err);
		res.json(contactos);
	});
});

app.delete('/api/contactos/:id', function(req, res){
	
		Contactos.findOneAndRemove({_id:req.params.id}, function(err, contactos){
		if(err)
			res.send(err);
		res.json(contactos);
	});
});

app.put('/api/contactos/:id', function(req, res){
	var query = {
		name:req.body.name,
		dept:req.body.lastname,
		area:req.body.email,
		status:req.body.phone,
		contact:req.body.phonee,
		salary:req.body.interes
	};
	Contactos.findOneAndUpdate({_id:req.params.id}, query,  function(err, contactos){
		if(err)
			res.send(err);
		res.json(contactos);
	});
});
app.listen(3000, function(){
	console.log('server is running on port 3000');
});
