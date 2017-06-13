//verificamos que nuestro formulario realmente no este vacio y venga por POST
if (!empty($_POST)){
 
    $nombre = trim($_POST['nombre']);
    $email = trim($_POST['email']);
    $web = trim($_POST['web']);
    $comentario = trim($_POST['comentario']);
    $error=0;
 
    if ($nombre==''){
        $error++;
        $detalle .= 'Nombre
';
    }elseif ($email==''){
        $error++;
        $detalle .= 'Email
';
    }elseif(!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email)) {
        $error++;
        $detalle .= 'Email
';
    }elseif ($web==''){
        $error++;
        $detalle .= 'Sitio web
';
    }elseif ($comentario==''){
        $error++;
        $detalle .= 'Comentarios
';
    }
 
        //confirmamos que nuestro form no posee errores no validados por el JS
    if ($error == 0){
        //Instanciamos la conexion
        $conn = new MongoClient();
        //hacemos la llamada a la BD
        $db = $conn->foxdb;
 
        //creamos el objeto que luego insertaremos en nuestra BD
        $doc = array("usuario"=>(object)array("nombre" => $nombre,
                                "email" => $email,
                                "web" => $web,
                                "comentario" =>$comentario,
                                "info" => (object)array( "x" => 203, "y" => 102),"versions" => array("0.9.7", "0.9.8", "0.9.9"))
        );
 
        //creamos nuestro collection
        $collection = $db->rsContacto;
 
        //insertamos nuestro objeto en el collection
        if ($collection->insert($doc)){
            $respuesta = array('estado'=>'ok', 'detalle'=>'enviado con exito');
        }else{
            $respuesta = array('estado'=>'error', 'detalle'=>'error en el guardado');
        }
    }else{
        $respuesta = array('estado'=>'error', 'detalle'=>'error con los siguientes datos '.$detalle);
    }
}else{
    $respuesta = array('estado'=>'error', 'detalle'=>'No se puede realizar el envio'.$_POST['submit']);
}
//imprimimos en JSON la respuesta al formulario para la respuesta de la vista.
echo json_encode($respuesta);

function registros(){
    $conn = new MongoClient();
    $db = $conn->foxdb;
 
    $collection = $db->rsContacto;
 
    //$busqueda = array('usuario.nombre' => 'hunterfox');
    $busqueda = array();
 
    $regs = $collection->find($busqueda,array("usuario.nombre" => 1,"usuario.email"=>1,"usuario.web"=>1,"usuario.comentario"=>1));
    $array = iterator_to_array($regs);
 
    foreach($array as $r => $elem){
        $tabla .= '
'.$r.''.$elem['usuario']['nombre'].''.$elem['usuario']['email'].'
';
    }
    return $tabla;
}