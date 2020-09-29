'use strict'
$(document).ready(function(){
    // Selector de id
    var rojo = $("#rojo").css("background", "red")
                        .css("color", "white");
    var amarillo = $("#amarillo").css("background", "yellow")
                            .css("color", "green");
    var verde = $("#verde").css("background", "green").css("color", "yellow");
    var miClase = $(".zebra");
    //miClase.css("border", "4px dashed black");
    $(".sin_borde").click(function(){
        console.log("Click dado!");
        //$(this).addClass('zebra');
    });

    // Selectores de etiqueta
    var parrafos = $('p').css("cursor", "pointer");
    parrafos.click(function(){
        var that = $(this);
        if(that.hasClass("zebra")){
            that.removeClass("zebra");
        }else{
            that.addClass('zebra');
        }        
    });

    // Selectores de atributo
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue');

    // Otros selectores
    // $('p,a').addClass('margen-superior');
    var busqueda = $('#caja').find('.resaltado');
    
    console.log(busqueda);
});