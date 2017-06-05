var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');


var app = express();
   app.set('views', __dirname + '/views');
   app.set('view options', { layout: false });
   app.use(express.bodyParser());
   app.use(express.static(__dirname + '/public'));

 
var client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'agendapop',
});

client.database = 'agendapop';
var sql = ("INSERT INTO agendapop (nombre, lastname, email, phone, phonee, interes) VALUES ('a', 'b', 'c', 'd', 'e', 'f')");
console.log(sql);

app.get('/', function(req, res) {
    
    client.query('SELECT nombre, lastname, email, phone, phonee, interes FROM contactos',
            function selectCb(err, results, fields) {
                if (err) {
                    throw err;                  
                }

                res.render('index.pug', { agendapop: results });
            }
        );
});


app.post('/nueva', function(req, res) {

    client.query('INSERT INTO contactos (nombre, lastname, email, phone, phonee, interes) VALUES (?, ?, ?, ?, ?, ?)', [req.body.nombre, req.body.lastname, req.body.email, req.body.phone, req.body.phonee, req.body.interes],
            function() {
                console.log("el numero es:" +req.body.phone);
                res.redirect('/');
            }
        );
});
app.get('/editar/:id', function(req, res) {
   client.query('SELECT id, nombre, lastname, email, phone, phonee, interes FROM agendapop WHERE id = ?', [req.params.id],
           function selectCb(err, results, fields) {
               if (err) {
                   throw err;                  
               }
               
               res.render('edit.pug', { agendapop: results[0] });
           }
       );
});

app.post('/actualizar', function(req, res) {
   client.query('UPDATE agendapop SET id= ?, nombre = ?, lastname = ?, email = ?, phone = ?, phonee = ?, interes = ? WHERE id = ?', [req.body.nombre, req.body.apellido, req.body.cedula, req.body.carrera, req.body.fecha],
           function() {            
               res.redirect('/');
           }
       );
});

app.get('/borrar/:id', function(req, res) {
   client.query('DELETE FROM agendapop WHERE id = ?', [req.params.id],
       function() {
           res.redirect('/');
       }
   );
});
app.listen(3000);
