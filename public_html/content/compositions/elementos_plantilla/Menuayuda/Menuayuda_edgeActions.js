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
   
   //Edge symbol: 'btn_cerrar'
   (function(symbolName) {   
   
   })("btn_cerrar");
   //Edge symbol end:'btn_cerrar'

   //=========================================================
   
   //Edge symbol: 'banner_superior'
   (function(symbolName) {   
   
   })("banner_superior");
   //Edge symbol end:'banner_superior'

   //=========================================================
   
   //Edge symbol: 'btn_verdenuevo'
   (function(symbolName) {   
   
   })("btn_verdenuevo");
   //Edge symbol end:'btn_verdenuevo'

   //=========================================================
   
   //Edge symbol: 'falso_blanco'
   (function(symbolName) {   
   
   })("falso_blanco");
   //Edge symbol end:'falso_blanco'

   //=========================================================
   
   //Edge symbol: 'popup_ayuda'
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

      Symbol.bindElementAction(compId, symbolName, "${btn_verdenuevo}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);
         

      });
      //Edge binding end

   })("popup_ayuda");
   //Edge symbol end:'popup_ayuda'

   //=========================================================
   
   //Edge symbol: 'descripccion'
   (function(symbolName) {   
   
   })("descripccion");
   //Edge symbol end:'descripccion'

   //=========================================================
   
   //Edge symbol: 'd_home'
   (function(symbolName) {   
   
   })("d_home");
   //Edge symbol end:'d_home'

   //=========================================================
   
   //Edge symbol: 'd_Bibliografia'
   (function(symbolName) {   
   
   })("d_Bibliografia");
   //Edge symbol end:'d_Bibliografia'

   //=========================================================
   
   //Edge symbol: 'd_Glosario'
   (function(symbolName) {   
   
   })("d_Glosario");
   //Edge symbol end:'d_Glosario'

   //=========================================================
   
   //Edge symbol: 'd_mapa'
   (function(symbolName) {   
   
   })("d_mapa");
   //Edge symbol end:'d_mapa'

   //=========================================================
   
   //Edge symbol: 'd_Sapertura'
   (function(symbolName) {   
   
   })("d_Sapertura");
   //Edge symbol end:'d_Sapertura'

   //=========================================================
   
   //Edge symbol: 'd_Context'
   (function(symbolName) {   
   
   })("d_Context");
   //Edge symbol end:'d_Context'

   //=========================================================
   
   //Edge symbol: 'd_contenidos'
   (function(symbolName) {   
   
   })("d_contenidos");
   //Edge symbol end:'d_contenidos'

   //=========================================================
   
   //Edge symbol: 'items_descrip'
   (function(symbolName) {   
   
   })("items_descrip");
   //Edge symbol end:'items_descrip'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-35995121");