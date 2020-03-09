<?php
/**
 * Clase que implementa una factoría (factory) de elementos de traducción.
 * En este caso particular, no devuelve un objeto traductor, sino el texto ya
 * traducido, o preparado para su traducción posterior por otro objeto externo
 *
 * @author jmizquierdomar
 */
class Traductor {
    private static $traductor;
    
    /**
     * Función que, a partir de una etiqueta y unos posibles parámetros, devuelve
     * el texto traducido al idioma seleccionado en ese momento en el sistema.
     * El lenguaje del sistema no se maneja en esta clase, lo maneja íntegramente
     * el objeto traductor.
     * @param type $label
     * @return type
     */
    public static function traduce($label) {
        return "<span name='traduccion'  style='color:red'>".implode("|",func_get_args())."</span>";
    }
    


}
