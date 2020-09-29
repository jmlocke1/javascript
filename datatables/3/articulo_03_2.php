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
	</table>

	<!-- jQuery -->
	<script language="javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<!-- El JavaScript de DataTables -->
	<script language="javascript" type="text/javascript" src="https://cdn.datatables.net/v/dt/jszip-2.5.0/pdfmake-0.1.18/dt-1.10.12/af-2.1.2/b-1.2.2/b-colvis-1.2.2/b-flash-1.2.2/b-html5-1.2.2/b-print-1.2.2/cr-1.3.2/fc-3.2.2/fh-3.1.2/kt-2.1.3/r-2.1.0/rr-1.1.2/sc-1.4.2/se-1.2.0/datatables.min.js"></script>

	<!-- El código JavaScript -->
	<script language="javascript">
		$('#tabla_de_miembros').DataTable({
			'ajax':			'datos_externos_03.php'
		});
	</script>
</body>
</html>