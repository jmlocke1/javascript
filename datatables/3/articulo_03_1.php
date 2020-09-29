<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Uso de DataTables</title>
	<!-- El CSS de DataTables -->
	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/jszip-2.5.0/pdfmake-0.1.18/dt-1.10.12/af-2.1.2/b-1.2.2/b-colvis-1.2.2/b-flash-1.2.2/b-html5-1.2.2/b-print-1.2.2/cr-1.3.2/fc-3.2.2/fh-3.1.2/kt-2.1.3/r-2.1.0/rr-1.1.2/sc-1.4.2/se-1.2.0/datatables.min.css"/>
</head>
<body>
	<table id="tabla_de_miembros">
		<thead>
			<tr style="height: 18px; border: 2px solid #000000; background-color: #e3e3e3; ">
				<th style="text-align: left;">NOMBRE</th>
				<th style="text-align: left;">APELLIDOS</th>
				<th style="text-align: left;">INGRESO</th>
				<th style="text-align: left;">PROVINCIA</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Rodrigo</td>
				<td>Torres Fuentes</td>
				<td>10/10/1985</td>
				<td>Zamora</td>
			</tr>
			<tr>
				<td>Ana</td>
				<td>López Yago</td>
				<td>02/06/1985</td>
				<td>León</td>
			</tr>
			<tr>
				<td>Manuel</td>
				<td>García Lago</td>
				<td>18/04/1986</td>
				<td>Barcelona</td>
			</tr>
			<tr>
				<td>Carmen</td>
				<td>Ortega Pérez</td>
				<td>23/01/1986</td>
				<td>Granada</td>
			</tr>
			<tr>
				<td>Sonia</td>
				<td>De Diego Salamanca</td>
				<td>16/08/1985</td>
				<td>Madrid</td>
			</tr>
			<tr>
				<td>Susana</td>
				<td>Barberá Fina</td>
				<td>15/02/1987</td>
				<td>Barcelona</td>
			</tr>
			<tr>
				<td>Luis</td>
				<td>Moscoso Yáñez</td>
				<td>06/11/1988</td>
				<td>Madrid</td>
			</tr>
			<tr>
				<td>Pedro</td>
				<td>Del Arco García</td>
				<td>17/08/1987</td>
				<td>Madrid</td>
			</tr>
			<tr>
				<td>Sandra</td>
				<td>Fernández Gómez</td>
				<td>31/10/1985</td>
				<td>Barcelona</td>
			</tr>
			<tr>
				<td>Carmen</td>
				<td>Doblado Porras</td>
				<td>11/09/1988</td>
				<td>Madrid</td>
			</tr>
			<tr>
				<td>Pedro</td>
				<td>Blanco Delgado</td>
				<td>31/01/1986</td>
				<td>Lugo</td>
			</tr>
			<tr>
				<td>Raúl</td>
				<td>Povedilla Martínez</td>
				<td>15/03/1988</td>
				<td>Valencia</td>
			</tr>
			<tr>
				<td>Alfonso</td>
				<td>López López</td>
				<td>06/12/1985</td>
				<td>Sevilla</td>
			</tr>
			<tr>
				<td>Sonia</td>
				<td>Martín Jaen</td>
				<td>23/02/1987</td>
				<td>Logroño</td>
			</tr>
			<tr>
				<td>Carmen</td>
				<td>Morales Torres</td>
				<td>12/12/1988</td>
				<td>Madrid</td>
			</tr>
			<tr>
				<td>Antonio</td>
				<td>De la Mata Fernández</td>
				<td>10/04/1986</td>
				<td>Barcelona</td>
			</tr>
			<tr>
				<td>Diego</td>
				<td>Torrecuadrada García</td>
				<td>23/07/1987</td>
				<td>Cáceres</td>
			</tr>
			<tr>
				<td>Rosa</td>
				<td>Blanco Gómez</td>
				<td>22/06/1985</td>
				<td>Cuenca</td>
			</tr>
			<tr>
				<td>Cristina</td>
				<td>Blanco Gómez</td>
				<td>11/01/1987</td>
				<td>Barcelona</td>
			</tr>
			<tr>
				<td>Cristina</td>
				<td>Martos Del Ángel</td>
				<td>10/02/1986</td>
				<td>Madrid</td>
			</tr>
		</tbody>
	</table>
 
	<!-- jQuery -->
	<script language="javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<!-- El JavaScript de DataTables -->
	<script language="javascript" type="text/javascript" src="https://cdn.datatables.net/v/dt/jszip-2.5.0/pdfmake-0.1.18/dt-1.10.12/af-2.1.2/b-1.2.2/b-colvis-1.2.2/b-flash-1.2.2/b-html5-1.2.2/b-print-1.2.2/cr-1.3.2/fc-3.2.2/fh-3.1.2/kt-2.1.3/r-2.1.0/rr-1.1.2/sc-1.4.2/se-1.2.0/datatables.min.js"></script>
 
	<!-- El código JavaScript -->
	<script language="javascript">
		$('#tabla_de_miembros').DataTable({
			'paging':		false,
			'ordering':		false,
			'info':			false,
			'searching':	false 
		});
	</script>
</body>
</html>