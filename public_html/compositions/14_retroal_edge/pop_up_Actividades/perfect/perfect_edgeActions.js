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
   
   //Edge symbol: 'anim_trofeo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("anim_trofeo");
   //Edge symbol end:'anim_trofeo'

   //=========================================================
   
   //Edge symbol: 'mov_brillo'
   (function(symbolName) {   
   
   })("mov_brillo");
   //Edge symbol end:'mov_brillo'

   //=========================================================
   
   //Edge symbol: 'anim_cont-result'
   (function(symbolName) {   
   
   })("anim_cont-result");
   //Edge symbol end:'anim_cont-result'

   //=========================================================
   
   //Edge symbol: 'cont_resultados'
   (function(symbolName) {   
   
   })("cont_resultados");
   //Edge symbol end:'cont_resultados'

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
   
   //Edge symbol: 'popUp_perfect'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 815, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("popUp_perfect");
   //Edge symbol end:'popUp_perfect'

   //=========================================================
   
   //Edge symbol: 'amin_popup'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_cerrarPopup}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getComposition().getStage().$("popUp_perfect").hide();
         parent.$(parent.document).trigger({
                type: 'EDGE_Plantilla_ClosePopup',
                sym: sym,
                evt: e
            });

      });
      //Edge binding end

   })("amin_popup");
   //Edge symbol end:'amin_popup'

   //=========================================================
   
   //Edge symbol: 'btn_cerrarPopup'
   (function(symbolName) {   
   
   })("btn_cerrarPopup");
   //Edge symbol end:'btn_cerrarPopup'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-522838995");