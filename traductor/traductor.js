
class Traductor {
    constructor(defaultLanguage, selectedLanguage){
        this.defaultLanguage = defaultLanguage;
        this.selectedLanguage = selectedLanguage;
        this.workLanguage = this.createWorkingLanguage();
    }
    
    traduce(){
        var etiquetasATraducir = document.getElementsByName("traduccion");
        //etiquetasATraducir.forEach(this.traduceElemento);
        for(var label in etiquetasATraducir){
            this.traduceElemento(etiquetasATraducir[label]);
        }
    }
    traduceElemento(elemento){
        var etiquetaATraducir = this.aplicaParam(elemento);
        elemento.textContent = etiquetaATraducir;
    }
    aplicaParam(elemento){
        var param = elemento.textContent.split("|");
        // La etiqueta está en el primer elemento del vector
        var texto = this.workLanguage[param[0].trim()];
        for(var i = 1; i < param.length; i++){
                texto = texto.replace("$"+i, param[i]);
        }		
        return decodeHTMLEntities(texto);
    }
    
    createWorkingLanguage(){
        let work = new Array();
        for(var label in this.defaultLanguage){
            work[label] = this.defaultLanguage[label];
        }
        for(var label in this.selectedLanguage){
            work[label] = this.selectedLanguage[label];
        }
        return work;
    }
}
function traduce(){
    var etiquetasATraducir = document.getElementsByName("traduccion");
    etiquetasATraducir.forEach(traduceElemento);
}
function traduceElemento(elemento){
    var etiquetaATraducir = aplicaParam(elemento);
    elemento.textContent = etiquetaATraducir;
}
function aplicaParam(elemento){
    var param = elemento.textContent.split("|");
    // La etiqueta está en el primer elemento del vector
    var texto = workLanguage[param[0].trim()];
    for(var i = 1; i < param.length; i++){
            texto = texto.replace("$"+i, param[i]);
    }		
    return decodeHTMLEntities(texto);
}

function createWorkingLanguage(defaultLanguage, selectedLanguage){
    let work = new Array();
    for(var label in defaultLanguage){
        work[label] = defaultLanguage[label];
    }
    for(var label in selectedLanguage){
        work[label] = selectedLanguage[label];
    }
    return work;
}

/**
 * Función que decodifica las entidades HTML
 * @param {type} text
 * @returns {.document@call;createElement.value|textArea.value}
 */
function decodeHTMLEntities(text) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}