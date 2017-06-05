var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12345678',
  database : 'node'
});

connection.connect();

connection.query('SELECT * FROM users', function (error, results, fields) {
  if (error) throw error;
  results.forEach(function(val, key){
  	 console.log('nombres: ' +val.name)
  });
 });


connection.end();