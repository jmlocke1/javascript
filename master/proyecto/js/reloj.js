
$(document).ready(function(){
    function mueveReloj(offset){
        momentoActual = new Date(Date.now()+offset);
        hora = momentoActual.getHours();
        minuto = momentoActual.getMinutes();
        segundo = momentoActual.getSeconds();
        return hora + " : " + minuto + " : " + segundo;
    }
    // Reloj
    setInterval(function(){
        //var reloj = moment().format("hh:mm:ss a");
        //$('#reloj').html(reloj);
        var hora = 
        $('#reloj').html(moment().format("hh:mm:ss a"));
        $('#reloj2').html(moment(Date.now()+3600000).format("hh:mm:ss a"));
        $('#reloj3').html(moment(Date.now()+20000).format("hh:mm:ss a"));
    }, 1000);
    
});