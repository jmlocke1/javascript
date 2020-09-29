$(document).ready(function(){

    if(window.location.href.indexOf('index') > -1){
        
    }
    // Selector de tema

    var theme = $('#theme');
    /*
    try {
        let theme_en_uso = localStorage.getItem('Theme');
        console.log('La longitud del tema es:'+localStorage.getItem('Theme').length);
        theme.attr('href', theme_en_uso);
    } catch (error) {
        console.log("Estoy guardando el tema actual");
        localStorage.setItem('Theme', theme.attr('href'));
    }*/
    // Localstorage limpio o con un tema guardado
    
    if(localStorage.length <= 0 || localStorage === 'undefined'){
        localStorage.setItem('Theme', theme.attr('href'));
        console.log('La longitud del tema es:'+localStorage.getItem('Theme').length);
    }else {
        try {
            let theme_en_uso = localStorage.getItem('Theme');
            console.log('La longitud del tema es:'+localStorage.getItem('Theme').length);
            theme.attr('href', theme_en_uso);
        } catch (error) {
            console.log("Estoy guardando el tema actual");
            localStorage.setItem('Theme', theme.attr('href'));
        }
    }
    $('#to-green').click(function(){
        theme.attr('href', 'css/green.css');
        localStorage.setItem("Theme", "css/green.css");
    });

    $('#to-red').click(function(){
        theme.attr('href', 'css/red.css');
        localStorage.setItem("Theme", "css/red.css");
    });

    $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css');
        localStorage.setItem("Theme", "css/blue.css");
    });

    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // Login falso

    $('#login form').submit(function(){
        var form_name = $('#form_name').val();
        localStorage.setItem('form_name', form_name);
    });

    var form_name = localStorage.getItem('form_name');
    var about_parrafo = $('#about p');
    if(form_name != null && form_name != 'undefined'){
        about_parrafo.html("Bienvenido, "+form_name);
        about_parrafo.append('<br><a href="#" id="logout">Cerrar sesión</a>');
        $('#login').hide();
    }
    
    $('#logout').click(function(e){
        localStorage.removeItem('form_name');
        localStorage.removeItem('Theme');
        location.reload();
    });
});