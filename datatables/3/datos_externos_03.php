<?php
	$miembros = array("data"=>array(
		array(
			"Rodrigo",
			"Torres Fuentes",
			"10/10/1985",
			"Zamora"
		),
		array(
			"Ana", 
			"López Yago", 
			"02/06/1985", 
			"León"
		),
		array(
			"Manuel", 
			"García Lago", 
			"18/04/1986", 
			"Barcelona"
		),
		array(
			"Carmen", 
			"Ortega Pérez", 
			"23/01/1986", 
			"Granada"
		),
		array(
			"Sonia", 
			"De Diego Salamanca", 
			"16/08/1985", 
			"Madrid"
		),
		array(
			"Susana", 
			"Barberá Fina", 
			"15/02/1987", 
			"Barcelona"
		),
		array(
			"Luis", 
			"Moscoso Yáñez", 
			"06/11/1988", 
			"Madrid"
		),
		array(
			"Pedro", 
			"Del Arco García", 
			"17/08/1987", 
			"Madrid"
		),
		array(
			"Sandra", 
			"Fernández Gómez", 
			"31/10/1985", 
			"Barcelona"
		),
		array(
			"Carmen", 
			"Doblado Porras", 
			"11/09/1988", 
			"Madrid"
		),
		array(
			"Pedro", 
			"Blanco Delgado", 
			"31/01/1986", 
			"Lugo"
		),
		array(
			"Raúl", 
			"Povedilla Martínez", 
			"15/03/1988", 
			"Valencia"
		),
		array(
			"Alfonso", 
			"López López", 
			"06/12/1985", 
			"Sevilla"
		),
		array(
			"Sonia", 
			"Martín Jaen", 
			"23/02/1987", 
			"Logroño"
		),
		array(
			"Carmen", 
			"Morales Torres", 
			"12/12/1988", 
			"Madrid"
		),
		array(
			"Antonio", 
			"De la Mata Fernández", 
			"10/04/1986", 
			"Barcelona"
		),
		array(
			"Diego", 
			"Torrecuadrada García", 
			"23/07/1987", 
			"Cáceres"
		),
		array(
			"Rosa", 
			"Blanco Gómez", 
			"22/06/1985", 
			"Cuenca"
		),
		array(
			"Cristina", 
			"Blanco Gómez", 
			"11/01/1987", 
			"Barcelona"
		),
		array(
			"Cristina", 
			"Martos Del Ángel", 
			"10/02/1986", 
			"Madrid"
		))
	);

	$JSON_deMiembros = json_encode($miembros, JSON_HEX_QUOT);

	echo $JSON_deMiembros;
?>