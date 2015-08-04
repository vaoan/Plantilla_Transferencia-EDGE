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


        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // Creaton complete
            
        });
        //Edge binding end

    })("stage");
   //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'muybien_cont'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 815, function (sym, e) {
            // introducir código aquí
            sym.getSymbol("trans_popup").getSymbol("anim_medalla").getSymbol("mov_perp_trofeo").play();

            sym.getSymbol("trans_popup").play();

        });
        //Edge binding end

    })("muybien_cont");
   //Edge symbol end:'muybien_cont'

    //=========================================================

    //Edge symbol: 'anim_medalla'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5050, function (sym, e) {
            // introducir código aquí
            // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
            // sym.play(500); o sym.play("myLabel");
            sym.play(0);

        });
        //Edge binding end

    })("anim_medalla");
   //Edge symbol end:'anim_medalla'

    //=========================================================

    //Edge symbol: 'mov_perp_trofeo'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1355, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("mov_perp_trofeo");
   //Edge symbol end:'mov_perp_trofeo'

    //=========================================================

    //Edge symbol: 'brillitos'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3625, function (sym, e) {
            // introducir código aquí
            // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
            // sym.play(500); o sym.play("myLabel");
            sym.play("repitis");

        });
        //Edge binding end

    })("brillitos");
   //Edge symbol end:'brillitos'

    //=========================================================

    //Edge symbol: 'recuad_texto'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("recuad_texto");
   //Edge symbol end:'recuad_texto'

    //=========================================================

    //Edge symbol: 'trans_popup'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

        

      Symbol.bindElementAction(compId, symbolName, "${btn_cerrar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
      });
      //Edge binding end

    })("trans_popup");
   //Edge symbol end:'trans_popup'

   //=========================================================
   
   //Edge symbol: 'btn_cerrar'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${cerrar}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            // Ocultar un elemento 
            sym.getComposition().getStage().$("muybien_cont").hide();


        });
           //Edge binding end

   })("btn_cerrar");
   //Edge symbol end:'btn_cerrar'

   //=========================================================
   
   //Edge symbol: 'titulo'
   (function(symbolName) {   
   
   })("titulo");
   //Edge symbol end:'titulo'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-29934699");