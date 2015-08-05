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
   
   //Edge symbol: 'titulo_banner'
   (function(symbolName) {   
   
   })("titulo_banner");
   //Edge symbol end:'titulo_banner'

   //=========================================================
   
   //Edge symbol: 'popup_informacion'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_cerrar}", "click", function(sym, e) {
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

   })("popup_informacion");
   //Edge symbol end:'popup_informacion'

   //=========================================================
   
   //Edge symbol: 'btn_cerrar'
   (function(symbolName) {   
   
   })("btn_cerrar");
   //Edge symbol end:'btn_cerrar'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-24527128");