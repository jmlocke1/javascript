"use strict"

window.addEventListener('load', function() {
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";
    formulario.addEventListener('submit', function(event){
        event.preventDefault();
        console.log("Formulario enviado");
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);
        if(nombre == null || nombre.trim().length == 0){
            alert("El nombre no es válido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es válido";
            //return false;
        }else {
            document.querySelector("#error_nombre").style.display = "none";
        }
        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("El apellido no es válido");
            //return false;
        }
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es válida");
            //return false;
        }
        box_dashed.style.display = "block";
        box_dashed.innerHTML = `
    <h3>Información del usuario</h3>
    <hr>
    <p>Nombre: ${nombre}</p>
    <p>Apellidos: ${apellidos}</p>
    <p>Edad: ${edad}</p>
`;
    });
});