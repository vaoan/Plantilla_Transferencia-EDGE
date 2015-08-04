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
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         //$('#Stage_contenedor_padre').sortable();
         //sym.$('contenedor_padre').sortable();
         $('body').trigger({
            type: 'ed_activity_enviar',
            sym: sym
         });         
      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn_enviar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón // aca va acciones del boton de enviar
         $('body').trigger({
            type: 'ed_check_list',
            sym: sym,
            evt: e
         });  
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'obj1_txt'
   (function(symbolName) {   
   
   })("obj1_txt");
   //Edge symbol end:'obj1_txt'

   //=========================================================
   
   //Edge symbol: 'obj2_txt'
   (function(symbolName) {   
   
   })("obj2_txt");
   //Edge symbol end:'obj2_txt'

   //=========================================================
   
   //Edge symbol: 'obj3_txt'
   (function(symbolName) {   
   
   })("obj3_txt");
   //Edge symbol end:'obj3_txt'

   //=========================================================
   
   //Edge symbol: 'obj4_txt'
   (function(symbolName) {   
   
   })("obj4_txt");
   //Edge symbol end:'obj4_txt'

   //=========================================================
   
   //Edge symbol: 'obj5_txt'
   (function(symbolName) {   
   
   })("obj5_txt");
   //Edge symbol end:'obj5_txt'

   //=========================================================
   
   //Edge symbol: 'obj1_par'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${par1}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
      });
         //Edge binding end

   })("obj1_par");
   //Edge symbol end:'obj1_par'

   //=========================================================
   
   //Edge symbol: 'obj2_par'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${par2}", "mouseover", function(sym, e) {

      });
         //Edge binding end

   })("obj2_par");
   //Edge symbol end:'obj2_par'

   //=========================================================
   
   //Edge symbol: 'obj3_par'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${par3}", "mouseover", function(sym, e) {

      });
      //Edge binding end

   })("obj3_par");
   //Edge symbol end:'obj3_par'

   //=========================================================
   
   //Edge symbol: 'obj4_par'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${par4}", "mouseover", function(sym, e) {

      });
      //Edge binding end

   })("obj4_par");
   //Edge symbol end:'obj4_par'

   //=========================================================
   
   //Edge symbol: 'obj5_par'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${par5}", "mouseover", function(sym, e) {


      });
      //Edge binding end

   })("obj5_par");
   //Edge symbol end:'obj5_par'

   //=========================================================
   
   //Edge symbol: 'contenedor_padre'
   (function(symbolName) {   
   
   })("contenedor_padre");
   //Edge symbol end:'contenedor_padre'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-18191759");