/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'popup_ret-media'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 815, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("popup_ret-media");
   //Edge symbol end:'popup_ret-media'

   //=========================================================
   
   //Edge symbol: 'anim_brillo-medest'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("rep_brillos");

      });
      //Edge binding end

   })("anim_brillo-medest");
   //Edge symbol end:'anim_brillo-medest'

   //=========================================================
   
   //Edge symbol: 'anim_medEstrella'
   (function(symbolName) {   
   
   })("anim_medEstrella");
   //Edge symbol end:'anim_medEstrella'

   //=========================================================
   
   //Edge symbol: 'anim_resultados'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_verResp}", "click", function(sym, e) {
         // evento de botón que conducirá a ver resultados

      });
      //Edge binding end

   })("anim_resultados");
   //Edge symbol end:'anim_resultados'

   //=========================================================
   
   //Edge symbol: 'simb_resultados'
   (function(symbolName) {   
   
   })("simb_resultados");
   //Edge symbol end:'simb_resultados'

   //=========================================================
   
   //Edge symbol: 'btn_verResp'
   (function(symbolName) {   
   
   })("btn_verResp");
   //Edge symbol end:'btn_verResp'

   //=========================================================
   
   //Edge symbol: 'Num_respondidas'
   (function(symbolName) {   
   
   })("Num_respondidas");
   //Edge symbol end:'Num_respondidas'

   //=========================================================
   
   //Edge symbol: 'cantidad_preguntas'
   (function(symbolName) {   
   
   })("cantidad_preguntas");
   //Edge symbol end:'cantidad_preguntas'

   //=========================================================
   
   //Edge symbol: 'btn_cerrarPopup'
   (function(symbolName) {   
   
   })("btn_cerrarPopup");
   //Edge symbol end:'btn_cerrarPopup'

   //=========================================================
   
   //Edge symbol: 'anim_popMed'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_cerrarPopup}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         parent.$(parent.document).trigger({
                type: 'EDGE_Plantilla_ClosePopup',
                sym: sym,
                evt: e
            });

      });
      //Edge binding end

   })("anim_popMed");
   //Edge symbol end:'anim_popMed'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-285378685");