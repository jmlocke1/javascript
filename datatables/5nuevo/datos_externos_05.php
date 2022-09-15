<?php
// Establecemos la codificacion para las llamadas y respuestas HTTP
mb_internal_encoding ('UTF-8');

/* CREAMOS LA CONEXION A LA BASE DE DATOS, O BIEN LA IMPORTAMOS 
DESDE UN ARCHIVO EXTERNO DE CONFIGURACION. */
$conexion = new PDO('mysql:host=localhost;dbname=datatables;charset=UTF8', 'usprueba', 'usprueba');
$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

/* RECUPERAMOS TODOS LOS PARAMETROS DE $_GET. LOS QUE NO APAREZCAN EN LA CONSULTA 
RECIBIRAN UN VALOR PREDETERMINADO. ESTOS DATOS SON LOS QUE SE RECIBEN CADA VEZ QUE EL 
PLUGIN DATATABLES LLAMA A ESTE SCRIPT. */
$datosDeLlamada = $_GET;

/* SE INDICA(N) LA(S) TABLA(S) QUE SE VA(N) A USAR EN LA CONSULTA. */
$tablasDeBBDD = array(
        'personal'
);

/* SE DEFINE LA LISTA DE COLUMNAS QUE SE DEVOLVERON PARA SER MOSTRADAS EN 
LA TABLA HTML. 
LOS NOMBRES DE ESTAS COLUMNAS DEBEN COINCIDIR CON LOS DE LAS COLUMNAS DE 
LA(S) TABLA(S) AFECTADA(S) POR LA CONSULTA. */
$columnasParaRetorno = array(
        $tablasDeBBDD[0].'.nombre', 
        $tablasDeBBDD[0].'.apellido', 
        $tablasDeBBDD[0].'.cargo',
        $tablasDeBBDD[0].'.ciudad',
        $tablasDeBBDD[0].'.fecha_de_ingreso',
        $tablasDeBBDD[0].'.salario_bruto_anual'
);
$numeroDeColumnas = count($columnasParaRetorno);

//////////////////////////////////////////////// REGLAS DE FILTRADO ////////////////////////////
/* PREPARAMOS EL FILTRADO POR COLUMNAS PARA LA CAJA DE BUSQUEDA */
$reglasDeFiltradoDeUsuario = array ();
if(isset($datosDeLlamada['search']['value']) && $datosDeLlamada['search']['value'] !== ""){
    for ($i = 0; $i < $numeroDeColumnas; $i++) {
        if(isset($datosDeLlamada['columns'][$i]['searchable']) && $datosDeLlamada['columns'][$i]['searchable'] == 'true'){
            $reglasDeFiltradoDeUsuario[] = $columnasParaRetorno[$i]." LIKE '%".addslashes($datosDeLlamada['search']['value'])."%'";
        }
    }
}


if (!empty($reglasDeFiltradoDeUsuario)){
        $reglasDeFiltradoDeUsuario = ' ('.implode(" OR ", $reglasDeFiltradoDeUsuario).') ';
} else {
        $reglasDeFiltradoDeUsuario = '';
}

/* SE COMPONE TODA LA REGLA DE FILTRADO. 
EN ESTE EJEMPLO ES MUY SIMPLE, PORQUE SÓLO USAMOS LA CAJA DE BUSQUEDA, 
PERO MÁS ADELANTE VEREMOS OTROS USOS. */
$reglasDeFiltrado = $reglasDeFiltradoDeUsuario;
//////////////////////////////////////////// FIN DE REGLAS DE FILTRADO ///////////////////////////

/////////////////////////// REGLAS DE ORDENACION ////////////////////////
/* SE COMPONE LA REGLA DE ORDENACION. */
$reglasDeOrdenacion = array ();
if (isset($datosDeLlamada['order'][0]['column'] )) {
    $columnasDeOrdenacion = count($datosDeLlamada['order']);
    for($i = 0; $i < $columnasDeOrdenacion; $i ++) {
        if ($datosDeLlamada['columns'][$i]['orderable'] == 'true') {
                $reglasDeOrdenacion [] = $columnasParaRetorno[intval($datosDeLlamada['order'][$i]['column'])].($datosDeLlamada['order'][$i]['dir'] === 'asc'?' asc':' desc');
        }
    }
}

if (!empty($reglasDeOrdenacion)) {
        $reglasDeOrdenacion = " ORDER BY ".implode(", ", $reglasDeOrdenacion);
} else {
        $reglasDeOrdenacion = "";
}

/* SE COMPONE LA REGLA DE LIMITACION DE REGISTROS. */
$reglaDeLimitacion = ($datosDeLlamada['length'] > 0)?' LIMIT '.$datosDeLlamada['start'].', '.$datosDeLlamada['length'].';':';';
/////////////////////////////////////// FIN DE REGLAS DE ORDENACION ////////////////////

/* SE PREPARA LA CONSULTA DE RECUPERACION DEL DATASET SOLICITADO. */
$consulta = "SELECT ".implode(', ', $columnasParaRetorno)." ";
$consulta .= "FROM ".implode(', ', $tablasDeBBDD)." ";
$consulta .= "WHERE 1 ";
if ($reglasDeFiltrado > "") $consulta .= "AND (".$reglasDeFiltrado.") ";
$consulta .= $reglasDeOrdenacion;
$consulta .= $reglaDeLimitacion;
$hacerConsulta = $conexion->prepare($consulta);
$hacerConsulta->execute();
$DataSet = $hacerConsulta->fetchAll(PDO::FETCH_ASSOC);
$hacerConsulta->closeCursor();

/* SI ES NECESARIO ADAPTAR ALGUN DATO PARA PRESENTACION, SE ADAPTA AQUI. 
SI ES NECESARIOS AGREGAR ENLACES, REFERENCIAS A IMAGENES, O CUALQUIER OTRA COSA, 
SE INCLUYE EN ESTA SECCION. 
EN ESTE CASO, LO ÚNICO QUE VAMOS A HACER ES DARLE FORMATO AL SALARIO ANUAL. */
foreach ($DataSet as $keyDL=>$DL){
        $DataSet[$keyDL]['fecha_de_ingreso'] = date("d-m-Y", strtotime($DL['fecha_de_ingreso']));
        $DataSet[$keyDL]['salario_bruto_anual'] = number_format($DL['salario_bruto_anual'], 2, ",", ".").' €';
}

/* CALCULO DE DATOS INFORMATIVOS DE REGISTROS. */
$numeroDeRegistrosDelDataSet = count($DataSet);

/* CALCULO DEL TOTAL DE REGISTROS QUE CUMPLEN LAS REGLAS 
DE FILTRADO SIN ORDENACION NI LIMITACION. */
$consulta = "SELECT COUNT(".$columnasParaRetorno[0].") ";
$consulta .= "FROM ".implode(', ', $tablasDeBBDD)." ";
$consulta .= "WHERE 1 ";
if ($reglasDeFiltrado > "") $consulta .= "AND (".$reglasDeFiltrado.") ";
$hacerConsulta = $conexion->prepare($consulta);
$hacerConsulta->execute();
$totalDeRegistrosConFiltrado = $hacerConsulta->fetch(PDO::FETCH_NUM)[0];
$hacerConsulta->closeCursor();
/* TOTAL DE REGISTROS DE LA TABLA PRIMARIA (O UNICA, SI SOLO HAY UNA). */
$consulta = "SELECT COUNT(".$columnasParaRetorno[0].") ";
$consulta .= "FROM ".$tablasDeBBDD[0].";";
$hacerConsulta = $conexion->prepare($consulta);
$hacerConsulta->execute();
$totalDeRegistrosEnBruto = $hacerConsulta->fetch(PDO::FETCH_NUM)[0];
$hacerConsulta->closeCursor();

// SE PREPARA UNA MATRIZ CON TODOS LOS DATOS NECESARIOS PARA LA SALIDA.
$matrizDeSalida = array(
        "draw" => intval($datosDeLlamada['draw']),
        "recordsTotal" => strval($totalDeRegistrosEnBruto),
        "recordsFiltered" => strval($totalDeRegistrosConFiltrado),
        "data" => array () 
);
foreach ($DataSet as $DL){
        $registro = array();
        foreach ($DL as $dato) $registro[] = $dato;
        $matrizDeSalida['data'][] = $registro;
        unset($registro);
}

$salidaDeDataSet = json_encode ($matrizDeSalida, JSON_HEX_QUOT);

/* SE DEVUELVE LA SALIDA */
echo $salidaDeDataSet;
?>