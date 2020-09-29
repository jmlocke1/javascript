'use strict'

$(document).ready(function(){
    // MouseOver y MouseOut
    var caja = $('#caja');
    /*
    caja.mouseover(function(){
        $(this).css("background","red");
        console.log('He entrado en la caja');
    });
    caja.mouseout(function(){
        $(this).css("background", "green");
        console.log('He salido de la caja');
    });
    */
   function cambiaRojo(){
        $(this).css("background","red");
        $(this).first().text('He entrado en la caja');
        console.log('He entrado en la caja');
    }

    function cambiaVerde(){
        $(this).css("background", "green");
        $(this).first().text('He salido de la caja');
        console.log('He salido de la caja');
    }
    // Hover
    caja.hover(cambiaRojo, cambiaVerde);

    // Click, Doble click
    caja.click(function(){
        $(this).css("background", "blue")
        .css("color", "white");
        $(this).first().text('He hecho click');
    });
    caja.dblclick(function(){
        $(this).css("background", "pink")
        .css("color", "yellow");
        $(this).first().text('He hecho doble click');
    });

    // Focus y blur
    var nombre = $("#nombre");
    var defecto = nombre.css("border");
    var datos = $('#datos');
    console.log(defecto);
    nombre.focus(function(){
        $(this).css("border", "2px solid green");
    });
    nombre.blur(function(){
        $(this).css("border", defecto);
        console.log($(this).css("border"));
        datos.text($(this).val()).show();
    });

    // mousedown y mouseup
    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    });
    datos.mouseup(function(){
        $(this).css("border-color", "black");
    });

    // Mousemove
    var movimiento = $("#move");
    $(document).mousemove(function(){
        $('body').css("cursor", "none");
        movimiento.text(event.clientX + "," + event.clientY);
        movimiento.css("left", event.clientX - 30);
        movimiento.css("top", event.clientY -30);
    });

});