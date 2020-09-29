$(document).ready(function(){

    // Mover elemento por la página

    $('.elemento').draggable();

    // Redimensionar
    $(".elemento").resizable();

    // Seleccionar y ordenar elementos
    //$(".lista-seleccionable").selectable();
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log('Ha cambiado la lista');
        }
    });

    // Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro del área");
        }
    });

    // Efectos
    $("#mostrar").click(function(){
        $('.caja-efectos').toggle('shake', 4000);
    });

    // Tooltip
    $(document).tooltip();
    
    // Dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });
    
    // Datepicker
    $("#calendario").datepicker();

    // Tabs
    $("#pestanas").tabs();
    $('#tabs-1').load("tabs-1.txt");
    $('#tabs-2').load("tabs-2.txt");
    $('#tabs-3').load("tabs-3.txt");
});