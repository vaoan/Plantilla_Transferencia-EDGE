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
      
      
      Symbol.bindElementAction(compId, symbolName, "${btnconversacion1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("globo1").show();
         
         
         sym.getSymbol("btnconversacion1").stop();
         
         // Mostrar un elemento 
         sym.$("btnconversacion2").show();
         sym.getSymbol("btnconversacion2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnconversacion2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("globo2").show();
         
         
         sym.getSymbol("btnconversacion2").stop();
         
         sym.getSymbol("btnconversacion3").play();
         sym.$("btnconversacion3").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnconversacion3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("glo3").show();
         sym.getSymbol("btnconversacion3").stop();
         
         sym.getSymbol("btnconversacion4").play();
         sym.$("btnconversacion4").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnconversacion4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("globo4").show();
         sym.getSymbol("btnconversacion4").stop();
         
         sym.getSymbol("btnconversacion5").play();
         sym.$("btnconversacion5").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnconversacion5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("globo5").show();
         sym.getSymbol("btnconversacion5").stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btnconversacion'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // introducir código aquí
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("btnconversacion");
   //Edge symbol end:'btnconversacion'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-24020702");