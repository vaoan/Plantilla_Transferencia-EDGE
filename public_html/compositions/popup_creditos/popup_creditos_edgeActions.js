/***********************
 * Acciones de composición de Adobe Edge Animate
 *
 * Editar este archivo con precaución, teniendo cuidado de conservar 
 * las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
 * capacidad de interactuar con estas acciones en Adobe Edge Animate
 *
 ***********************/
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

    //Edge symbol: 'stage'
    (function (symbolName) {


    })("stage");
    //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'popup_creditos'
    (function (symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${cerrar}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            parent.$(parent.document).trigger({
                type: 'Edge_Plantilla_ClosePopup',
                sym: sym,
                evt: e
            });

            sym.getSymbolElement().hide();

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${boton_ver2}", "click", function (sym, e) {

            // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
            // sym.play(500); o sym.play("myLabel");
            sym.getSymbol("creditos").play(0);



        });
        //Edge binding end

    })("popup_creditos");
    //Edge symbol end:'popup_creditos'

    //=========================================================

    //Edge symbol: 'titulo_creditos'
    (function (symbolName) {

    })("titulo_creditos");
    //Edge symbol end:'titulo_creditos'

    //=========================================================

    //Edge symbol: 'creditos'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("creditos");
    //Edge symbol end:'creditos'

    //=========================================================

    //Edge symbol: 'banner_superior'
    (function (symbolName) {

    })("banner_superior");
    //Edge symbol end:'banner_superior'

    //=========================================================

    //Edge symbol: 'falsob_boton'
    (function (symbolName) {

    })("falsob_boton");
    //Edge symbol end:'falsob_boton'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-35468122");