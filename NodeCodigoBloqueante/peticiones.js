function inicio(respuesta){
	console.log("Has entrado en la página de Inicio");
		respuesta.writeHead(200,{"Content-type":"text/html"});
 		respuesta.write("Esta es la página de Inicio");
 		respuesta.end()

	/* codigo bloqueante
	var ahora = new Date().getTime();
	while (new Date().getTime() < ahora + 10000);
	return "Inicio";	*/
}

function pagina1(respuesta){
	console.log("Has entrado en la página número 1");
		respuesta.writeHead(200,{"Content-type":"text/html"});
 		respuesta.write("Esta es la página de Inicio");
 		respuesta.end()
}


function pagina2(respuesta){
	console.log("Has entrado en la página número 2");
		respuesta.writeHead(200,{"Content-type":"text/html"});
 		respuesta.write("Esta es la página de Inicio");
 		respuesta.end()
}

function favicon(respuesta){
	console.log("Has entrado en la página de favicon");
		respuesta.writeHead(200,{"Content-type":"text/html"});
 		respuesta.write("");
 		respuesta.end()
}
exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
