$(document).ready(function(){
    // Validación
    $("form input[name='date']").datepicker({
        dateFormat: 'dd-mm-yy'
    });
    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: 'true'
    });
});