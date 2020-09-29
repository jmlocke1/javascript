$(document).ready(function(){
    // Load
    $('#datos').load("texto.txt");
    // Get y Post
    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });;
    });

   

    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        }
        console.log(usuario);
        /*
        $.post($(this).attr('action'), usuario, function(response){
            $("#datos").append("<p>"+response.name+" "+response.web+"</p>");
            
            console.log(response);
        }).done(function(){
            alert("Usuario añadido correctamente");
        });
*/
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            success: function(response){
                $("#datos").append("<p>"+response.name+" "+response.web+"</p>");
                console.log(response);
            },
            error: function(){
                console.log("Ha ocurrido un error");
            },
            timeout: 10000
        });
        return false;
    });
});