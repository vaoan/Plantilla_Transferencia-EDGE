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
   
   //Edge symbol: 'pop-up_diploma'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 815, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("pop-up_diploma");
   //Edge symbol end:'pop-up_diploma'

   //=========================================================
   
   //Edge symbol: 'anim-diploma'
   (function(symbolName) {   
   
   })("anim-diploma");
   //Edge symbol end:'anim-diploma'

   //=========================================================
   
   //Edge symbol: 'brillo-diploma'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("rep_brillos");

      });
      //Edge binding end

   })("brillo-diploma");
   //Edge symbol end:'brillo-diploma'

   //=========================================================
   
   //Edge symbol: 'salida_diploma'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2415, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("salida_diploma");
   //Edge symbol end:'salida_diploma'

   //=========================================================
   
   //Edge symbol: 'anim_recuadro'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_verResp}", "click", function(sym, e) {
         // boton que se configurará para ir a ver respuestas

      });
      //Edge binding end

   })("anim_recuadro");
   //Edge symbol end:'anim_recuadro'

   //=========================================================
   
   //Edge symbol: 'simbolo_resultados'
   (function(symbolName) {   
   
   })("simbolo_resultados");
   //Edge symbol end:'simbolo_resultados'

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
   
   //Edge symbol: 'btn_verResp'
   (function(symbolName) {   
   
   })("btn_verResp");
   //Edge symbol end:'btn_verResp'

   //=========================================================
   
   //Edge symbol: 'btn_cerrarPopup'
   (function(symbolName) {   
   
   })("btn_cerrarPopup");
   //Edge symbol end:'btn_cerrarPopup'

   //=========================================================
   
   //Edge symbol: 'anim_popUp'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_cerrarPopup}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("anim_popUp");
   //Edge symbol end:'anim_popUp'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-273037625");