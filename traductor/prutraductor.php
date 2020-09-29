<?php
require_once 'Traductor.php';
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Ejercicio 11 - DOM básico</title>
	<script type="text/javascript">
	var etiqueta = {HOLA:"Hola Mundo $1 $2", ADIOS:"Adiós amigos, hasta siempre", ESPERO:"Fumando espero", SALUDO: "Hola, $1 $2"};
	function traduce(){
		var etiquetasATraducir = document.getElementsByName("traduccion");
		etiquetasATraducir.forEach(traduceElemento);
	}
	function traduceElemento(elemento){
		var etiquetaATraducir = aplicaParam(elemento);
		elemento.textContent = etiquetaATraducir;
	}
	function aplicaParam(elemento){
		var param = elemento.textContent.split("|");
		// La etiqueta está en el primer elemento del vector
		var texto = etiqueta[param[0].trim()];
		for(var i = 1; i < param.length; i++){
			texto = texto.replace("$"+i, param[i]);
		}		
		return texto;
	}
	window.onload = function() {
		// Numero de enlaces de la pagina
		var enlaces = document.getElementsByTagName("a");
		var numEnlaces = enlaces.length;
		var respuesta = "El número de enlaces de la página es: "+ numEnlaces + "<br>";
		// Direccion del penultimo enlace
		var penultimo = enlaces[numEnlaces - 2];
		respuesta = respuesta + "La dirección del penúltimo enlace es: " + penultimo.href + "<br>";
		// Numero de enlaces que apuntan a http://prueba
		var apuntanAPrueba = 0;
		for(var i = 0; i < numEnlaces; i++) {
			if(enlaces[i].href == "http://prueba/"){
				apuntanAPrueba++;
			}
		}
		respuesta = respuesta + "Hay "+apuntanAPrueba+" enlaces que apuntan a http://prueba<br>";
		// Numero de enlaces del tercer párrafo
		var parrafos = document.getElementsByTagName("p");
		var tercerParrafo = parrafos[2];
		numEnlaces = tercerParrafo.getElementsByTagName("a").length;
		respuesta = respuesta + "En total hay "+parrafos.length+" párrafos, y hay "+numEnlaces+" enlaces en el tercer párrafo<br>";
		document.getElementById("respuesta").innerHTML = respuesta;
		traduce();
	}
	</script>
</head>
<body>
	<p>Primer párrafo (qué original soy) <?= Traductor::traduce("HOLA","cruel"," y, malvado") ?></p>
<p><?= Traductor::traduce("SALUDO", "José", "Miguel") ?>Lorem ipsum dolor sit amet, <a href="http://prueba/">consectetuer adipiscing elit</a>.
 Sed mattis enim vitae orci. Phasellus libero. Maecenas nisl arcu, 
consequat congue, commodo nec, commodo ultricies, turpis. Quisque sapien
 nunc, posuere vitae, rutrum et, luctus at, pede. Pellentesque massa 
ante, ornare id, aliquam vitae, ultrices porttitor, pede. Nullam sit 
amet nisl elementum elit convallis malesuada. Phasellus magna sem, 
semper quis, faucibus ut, rhoncus non, mi. <a href="http://prueba2/">Fusce porta</a>.
 Duis pellentesque, felis eu adipiscing ullamcorper, odio urna consequat
 arcu, at posuere ante quam non dolor. Lorem ipsum dolor sit amet, 
consectetuer adipiscing elit. Duis scelerisque. Donec lacus neque, 
vehicula in, eleifend vitae, venenatis ac, felis. Donec arcu. Nam sed 
tortor nec ipsum aliquam ullamcorper. Duis accumsan metus eu urna. 
Aenean vitae enim. Integer lacus. Vestibulum venenatis erat eu odio. 
Praesent id metus.</p>
<p><?= Traductor::traduce("ESPERO") ?></span> Aenean at nisl. Maecenas egestas dapibus odio. Vestibulum ante ipsum 
primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin 
consequat auctor diam. <a href="http://prueba/">Ut bibendum blandit est</a>.
 Curabitur vestibulum. Nunc malesuada porttitor sapien. Aenean a lacus 
et metus venenatis porta. Suspendisse cursus, sem non dapibus tincidunt,
 lorem magna porttitor felis, id sodales dolor dolor sed urna. Sed 
rutrum nulla vitae tellus. Sed quis eros nec lectus tempor lacinia. 
Aliquam nec lectus nec neque aliquet dictum. Etiam <a href="http://prueba3/">consequat sem quis massa</a>.
 Donec aliquam euismod diam. In magna massa, mattis id, pellentesque sit
 amet, porta sit amet, lectus. Curabitur posuere. Aliquam in elit. Fusce
 condimentum, arcu in scelerisque lobortis, ante arcu scelerisque mi, at
 cursus mi risus sed tellus.</p>
<p>Donec sagittis, nibh nec ullamcorper tristique, pede velit feugiat 
massa, at sollicitudin justo tellus vitae justo. Vestibulum aliquet, 
nulla sit amet imperdiet suscipit, nunc erat laoreet est, a <a href="http://prueba/">aliquam leo odio sed sem</a>.
 Quisque eget eros vehicula diam euismod tristique. Ut dui. Donec in 
metus sed risus laoreet sollicitudin. Proin et nisi non arcu sodales 
hendrerit. In sem. Cras id augue eu lorem dictum interdum. Donec 
pretium. Proin <a href="http://prueba4/">egestas</a> adipiscing ligula. 
Duis iaculis laoreet turpis. Mauris mollis est sit amet diam. Curabitur 
hendrerit, eros quis malesuada tristique, ipsum odio euismod tortor, a 
vestibulum nisl mi at odio. <a href="http://prueba5/">Sed non lectus non est pellentesque</a> auctor. <?= Traductor::traduce("ADIOS") ?></p>
<div id="respuesta"></div>

</body>
</html>