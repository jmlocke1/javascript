<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Uso de DataTables(Nuevo)</title>

    <!-- El CSS de DataTables -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4-4.1.1/jq-3.3.1/jszip-2.5.0/dt-1.10.22/af-2.3.5/b-1.6.4/b-colvis-1.6.4/b-html5-1.6.4/b-print-1.6.4/cr-1.5.2/fc-3.3.1/fh-3.1.7/kt-2.5.3/r-2.2.6/rg-1.1.2/rr-1.2.7/sc-2.0.3/sb-1.0.0/sp-1.2.0/sl-1.3.1/datatables.css"/>
    
    <!--<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/jszip-2.5.0/pdfmake-0.1.18/dt-1.10.12/af-2.1.2/b-1.2.2/b-colvis-1.2.2/b-flash-1.2.2/b-html5-1.2.2/b-print-1.2.2/cr-1.3.2/fc-3.2.2/fh-3.1.2/kt-2.1.3/r-2.1.0/rr-1.1.2/sc-1.4.2/se-1.2.0/datatables.min.css"/>-->
    <!-- El CSS de Bootstrap 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">-->
    <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">-->
</head>
<body>
    <h1>Conexión a varias tablas de la base de datos con DataTables</h1>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<table id="tabla_de_personal" class="table display table-striped table-bordered">
					<thead>
						<tr>
							<th>NOMBRE</th>
							<th>APELLIDO</th>
							<th>CARGO</th>
							<th>CIUDAD</th>
							<th>INGRESO</th>
							<th>SALARIO</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<!-- jQuery -->
	<script language="javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<!-- El JavaScript de DataTables -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
	<script type="text/javascript" src="https://cdn.datatables.net/v/bs4-4.1.1/jq-3.3.1/jszip-2.5.0/dt-1.10.22/af-2.3.5/b-1.6.4/b-colvis-1.6.4/b-html5-1.6.4/b-print-1.6.4/cr-1.5.2/fc-3.3.1/fh-3.1.7/kt-2.5.3/r-2.2.6/rg-1.1.2/rr-1.2.7/sc-2.0.3/sb-1.0.0/sp-1.2.0/sl-1.3.1/datatables.js"></script>
	<!--<script language="javascript" type="text/javascript" src="https://cdn.datatables.net/v/dt/jszip-2.5.0/pdfmake-0.1.18/dt-1.10.12/af-2.1.2/b-1.2.2/b-colvis-1.2.2/b-flash-1.2.2/b-html5-1.2.2/b-print-1.2.2/cr-1.3.2/fc-3.2.2/fh-3.1.2/kt-2.1.3/r-2.1.0/rr-1.1.2/sc-1.4.2/se-1.2.0/datatables.min.js"></script>-->
	<!-- El JavaScript de BootStrap
	<script language="javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->

	<!-- El código JavaScript -->
	<script language="javascript">
            class Lang {
                constructor (){
                    
                }
                
                emptyTable(){
                    return "No hay datos disponibles en la tabla.";
                }
                
                info(){
                    return "Del _START_ al _END_ de _TOTAL_ ";
                }
                infoEmpty(){
                    return "Mostrando 0 registros de un total de 0.";
                }
                infoFiltered(){
                    return "(filtrados de un total de _MAX_ registros)";
                }
                infoPostFix(){
                    return "(actualizados)";
                }
                lengthMenu(){
                    return "Mostrar  _MENU_  registros por página";
                }
            }
            var traductor = new Lang();
		var objetoDataTables_personal = $('#tabla_de_personal').DataTable({
			"language": {
				"emptyTable":			traductor.emptyTable(),
				"info":		   		traductor.info(),
				"infoEmpty":			traductor.infoEmpty(),
				"infoFiltered":			traductor.infoFiltered(),
				"infoPostFix":			traductor.infoPostFix(),
				"lengthMenu":			traductor.lengthMenu(),
				"loadingRecords":		"Cargando...",
				"processing":			"Procesando...",
				"search":				"Buscar:",
				"searchPlaceholder":	"Dato para buscar",
				"zeroRecords":			"No se han encontrado coincidencias.",
				"paginate": {
					"first":			"Primera",
					"last":				"Última",
					"next":				"Siguiente",
					"previous":			"Anterior"
				},
				"aria": {
					"sortAscending":	"Ordenación ascendente",
					"sortDescending":	"Ordenación descendente"
				}
			},
			"lengthMenu":				[[5, 10, 20, 25, 50, -1], [5, 10, 20, 25, 50, "Todos"]],
			"displayLength":			10,
			"serverSide":				true,
			"ajax":				"datos_externos_06.php",
			"columns" : [
				{"data": 0},
				{"data": 1},
				{"data": 2},
				{"data": 3}, 
				{"data": 4}, 
				{"data": 5}
			],
		});
		$('label').addClass('form-inline');
		$('select, input[type="search"]').addClass('form-control input-sm');
	</script>
</body>
</html>