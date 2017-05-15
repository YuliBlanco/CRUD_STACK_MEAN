function inicio(){
	console.log("Has entrado en la página de Inicio");
	return "Inicio";	
}

function pagina1(){
	console.log("Has entrado en la página 1");
	return "Página 1";	
}

function pagina2(){
	console.log("Has entrado en la página 2");
	return "Página 2";	
}

function favicon(){
	console.log("Has entrado en el favicon");
	return "favicon";	
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;
