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


        Symbol.bindElementAction(compId, symbolName, "${leyendo}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto

            sym.getSymbol("leyendo").getSymbol("tool_btn1").play();

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${leyendo}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("leyendo").getSymbol("tool_btn1").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${sol}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto

            sym.getSymbol("sol").getSymbol("tooltip_btn2").play();

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${sol}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto

            sym.getSymbol("sol").getSymbol("tooltip_btn2").playReverse();

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${papelera}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto

            sym.getSymbol("papelera").getSymbol("tootip_btn3").play();

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${papelera}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto

            sym.getSymbol("papelera").getSymbol("tootip_btn3").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${pensar}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("pensar").getSymbol("tooltip_btn4").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${pensar}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("pensar").getSymbol("tooltip_btn4").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${docum}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("docum").getSymbol("tooltip_bnt5").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${docum}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("docum").getSymbol("tooltip_bnt5").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${hablar}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("hablar").getSymbol("tooltip_btn6").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${hablar}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("hablar").getSymbol("tooltip_btn6").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${home}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("home").getSymbol("tool_Home").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${home}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("home").getSymbol("tool_Home").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${libros}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("libros").getSymbol("tool_libros").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${libros}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("libros").getSymbol("tool_libros").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${libroA2}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("libroA2").getSymbol("tooltip_librosA").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${libroA2}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("libroA2").getSymbol("tooltip_librosA").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${mapa}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("mapa").getSymbol("tooltip_mapa").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${mapa}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("mapa").getSymbol("tooltip_mapa").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${pdf}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("pdf").getSymbol("tooltip_PDF").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${pdf}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("pdf").getSymbol("tooltip_PDF").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_menu-desp}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            sym.getSymbol("barra_herramientas").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${leyendo}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            sym.getSymbol("contened_apertura").play();

            // Mostrar un elemento 
            sym.getSymbol("leyendo").$("estado_borde").show();

            // Ocultar un elemento 
            sym.getSymbol("sol").$("estado_borde2").hide();

            // Ocultar un elemento 
            sym.getSymbol("papelera").$("estado_borde3").hide();


            // Ocultar un elemento 
            sym.getSymbol("pensar").$("estado_borde4").hide();

            // Ocultar un elemento 
            sym.getSymbol("docum").$("estado_borde5").hide();

            // Ocultar un elemento 
            sym.getSymbol("hablar").$("estado_borde6").hide();

            // Ocultar un elemento 
            sym.getSymbol("pdf").$("estado_bordePDF").hide();

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contextual").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contenidos").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contenedor_recordemos").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contend_preguntas").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_cierre").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_PDF").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_biblio").stop(0);
            sym.getSymbol("libros").$("estado_bordelibro").hide();

            sym.getSymbol("libroA2").$("estado_bordeglos").hide();
            sym.getSymbol("contened_glos").stop(0);

            sym.getSymbol("mapa").$("estado_bordemapa").hide();
            sym.getSymbol("contened_mapa").stop(0);







        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${sol}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            sym.getSymbol("contened_contextual").play();

            // Mostrar un elemento 
            sym.getSymbol("sol").$("estado_borde2").show();

            // Ocultar un elemento 
            sym.getSymbol("leyendo").$("estado_borde").hide();

            // Ocultar un elemento 
            sym.getSymbol("papelera").$("estado_borde3").hide();


            // Ocultar un elemento 
            sym.getSymbol("pensar").$("estado_borde4").hide();

            // Ocultar un elemento 
            sym.getSymbol("docum").$("estado_borde5").hide();

            // Ocultar un elemento 
            sym.getSymbol("hablar").$("estado_borde6").hide();

            // Ocultar un elemento 
            sym.getSymbol("pdf").$("estado_bordePDF").hide();





            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_apertura").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contenidos").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contenedor_recordemos").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contend_preguntas").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_cierre").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_PDF").stop(0);

            sym.getSymbol("contened_biblio").stop(0);
            sym.getSymbol("libros").$("estado_bordelibro").hide();

            sym.getSymbol("libroA2").$("estado_bordeglos").hide();
            sym.getSymbol("contened_glos").stop(0);

            sym.getSymbol("mapa").$("estado_bordemapa").hide();
            sym.getSymbol("contened_mapa").stop(0);








        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${papelera}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            sym.getSymbol("contened_contenidos").play();

            // Mostrar un elemento 
            sym.getSymbol("papelera").$("estado_borde3").show();

            // Ocultar un elemento 
            sym.getSymbol("leyendo").$("estado_borde").hide();

            // Ocultar un elemento 
            sym.getSymbol("sol").$("estado_borde2").hide();

            // Ocultar un elemento 
            sym.getSymbol("pensar").$("estado_borde4").hide();

            // Ocultar un elemento 
            sym.getSymbol("hablar").$("estado_borde6").hide();

            // Ocultar un elemento 
            sym.getSymbol("pdf").$("estado_bordePDF").hide();




            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_apertura").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contextual").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contenedor_recordemos").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_cierre").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_PDF").stop(0);

            sym.getSymbol("contened_biblio").stop(0);
            sym.getSymbol("libros").$("estado_bordelibro").hide();

            sym.getSymbol("libroA2").$("estado_bordeglos").hide();
            sym.getSymbol("contened_glos").stop(0);

            sym.getSymbol("mapa").$("estado_bordemapa").hide();
            sym.getSymbol("contened_mapa").stop(0);






        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${pensar}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            sym.getSymbol("contenedor_recordemos").play();

            // Mostrar un elemento 
            sym.getSymbol("pensar").$("estado_borde4").show();

            // Ocultar un elemento 
            sym.getSymbol("leyendo").$("estado_borde").hide();

            // Ocultar un elemento 
            sym.getSymbol("sol").$("estado_borde2").hide();

            // Ocultar un elemento 
            sym.getSymbol("papelera").$("estado_borde3").hide();


            // Ocultar un elemento 
            sym.getSymbol("docum").$("estado_borde5").hide();


            // Ocultar un elemento 
            sym.getSymbol("hablar").$("estado_borde6").hide();

            // Ocultar un elemento 
            sym.getSymbol("pdf").$("estado_bordePDF").hide();





            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_apertura").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contenidos").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contextual").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contend_preguntas").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contend_preguntas").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_cierre").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_PDF").stop(0);

            sym.getSymbol("contened_biblio").stop(0);
            sym.getSymbol("libros").$("estado_bordelibro").hide();

            sym.getSymbol("libroA2").$("estado_bordeglos").hide();
            sym.getSymbol("contened_glos").stop(0);

            sym.getSymbol("mapa").$("estado_bordemapa").hide();
            sym.getSymbol("contened_mapa").stop(0);







        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${docum}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            sym.getSymbol("contend_preguntas").play();

            // Mostrar un elemento 
            sym.getSymbol("docum").$("estado_borde5").show();

            // Ocultar un elemento 
            sym.getSymbol("leyendo").$("estado_borde").hide();

            // Ocultar un elemento 
            sym.getSymbol("sol").$("estado_borde2").hide();

            // Ocultar un elemento 
            sym.getSymbol("papelera").$("estado_borde3").hide();


            // Ocultar un elemento 
            sym.getSymbol("pensar").$("estado_borde4").hide();

            // Ocultar un elemento 
            sym.getSymbol("hablar").$("estado_borde6").hide();

            // Ocultar un elemento 
            sym.getSymbol("pdf").$("estado_bordePDF").hide();




            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_apertura").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contenidos").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contextual").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contenedor_recordemos").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_cierre").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_PDF").stop(0);

            sym.getSymbol("contened_biblio").stop(0);
            sym.getSymbol("libros").$("estado_bordelibro").hide();

            sym.getSymbol("libroA2").$("estado_bordeglos").hide();
            sym.getSymbol("contened_glos").stop(0);

            sym.getSymbol("mapa").$("estado_bordemapa").hide();
            sym.getSymbol("contened_mapa").stop(0);






        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${hablar}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            sym.getSymbol("contened_cierre").play();

            // Mostrar un elemento 
            sym.getSymbol("hablar").$("estado_borde6").show();

            // Ocultar un elemento 
            sym.getSymbol("leyendo").$("estado_borde").hide();

            // Ocultar un elemento 
            sym.getSymbol("sol").$("estado_borde2").hide();

            // Ocultar un elemento 
            sym.getSymbol("papelera").$("estado_borde3").hide();

            // Ocultar un elemento 
            sym.getSymbol("pensar").$("estado_borde4").hide();

            // Ocultar un elemento 
            sym.getSymbol("docum").$("estado_borde5").hide();

            // Ocultar un elemento 
            sym.getSymbol("pdf").$("estado_bordePDF").hide();


            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_apertura").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contenidos").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contextual").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contenedor_recordemos").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contend_preguntas").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_PDF").stop(0);

            sym.getSymbol("contened_biblio").stop(0);
            sym.getSymbol("libros").$("estado_bordelibro").hide();

            sym.getSymbol("libroA2").$("estado_bordeglos").hide();
            sym.getSymbol("contened_glos").stop(0);

            sym.getSymbol("mapa").$("estado_bordemapa").hide();
            sym.getSymbol("contened_mapa").stop(0);







        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${pdf}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            sym.getSymbol("contened_PDF").play();

            // Mostrar un elemento 
            sym.getSymbol("pdf").$("estado_bordePDF").show();

            // Ocultar un elemento 
            sym.getSymbol("leyendo").$("estado_borde").hide();

            // Ocultar un elemento 
            sym.getSymbol("sol").$("estado_borde2").hide();

            // Ocultar un elemento 
            sym.getSymbol("papelera").$("estado_borde3").hide();

            // Ocultar un elemento 
            sym.getSymbol("pensar").$("estado_borde4").hide();

            // Ocultar un elemento 
            sym.getSymbol("docum").$("estado_borde5").hide();

            // Ocultar un elemento 
            sym.getSymbol("hablar").$("estado_borde6").hide();

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_apertura").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contenidos").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contextual").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_cierre").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contenedor_recordemos").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contend_preguntas").stop(0);

            sym.getSymbol("contened_biblio").stop(0);
            sym.getSymbol("libros").$("estado_bordelibro").hide();

            sym.getSymbol("libroA2").$("estado_bordeglos").hide();
            sym.getSymbol("contened_glos").stop(0);

            sym.getSymbol("mapa").$("estado_bordemapa").hide();
            sym.getSymbol("contened_mapa").stop(0);







        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${libros}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            sym.getSymbol("contened_biblio").play();

            // Mostrar un elemento 
            sym.getSymbol("libros").$("estado_bordelibro").show();

            // Ocultar un elemento 
            sym.getSymbol("leyendo").$("estado_borde").hide();

            // Ocultar un elemento 
            sym.getSymbol("sol").$("estado_borde2").hide();

            // Ocultar un elemento 
            sym.getSymbol("papelera").$("estado_borde3").hide();

            // Ocultar un elemento 
            sym.getSymbol("pensar").$("estado_borde4").hide();

            // Ocultar un elemento 
            sym.getSymbol("docum").$("estado_borde5").hide();

            // Ocultar un elemento 
            sym.getSymbol("hablar").$("estado_borde6").hide();

            // Ocultar un elemento 
            sym.getSymbol("pdf").$("estado_bordePDF").hide();

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_apertura").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_PDF").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contenidos").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contextual").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_cierre").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contenedor_recordemos").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contend_preguntas").stop(0);


            sym.getSymbol("libroA2").$("estado_bordeglos").hide();
            sym.getSymbol("contened_glos").stop(0);


            sym.getSymbol("mapa").$("estado_bordemapa").hide();
            sym.getSymbol("contened_mapa").stop(0);










        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${libroA2}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            sym.getSymbol("contened_glos").play();

            // Mostrar un elemento 
            sym.getSymbol("libroA2").$("estado_bordeglos").show();

            sym.getSymbol("libros").$("estado_bordelibro").hide();

            // Ocultar un elemento 
            sym.getSymbol("leyendo").$("estado_borde").hide();

            // Ocultar un elemento 
            sym.getSymbol("sol").$("estado_borde2").hide();

            // Ocultar un elemento 
            sym.getSymbol("papelera").$("estado_borde3").hide();

            // Ocultar un elemento 
            sym.getSymbol("pensar").$("estado_borde4").hide();

            // Ocultar un elemento 
            sym.getSymbol("docum").$("estado_borde5").hide();

            // Ocultar un elemento 
            sym.getSymbol("hablar").$("estado_borde6").hide();

            // Ocultar un elemento 
            sym.getSymbol("pdf").$("estado_bordePDF").hide();

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_apertura").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_PDF").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contenidos").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contextual").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_cierre").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contenedor_recordemos").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contend_preguntas").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_biblio").stop(0);

            sym.getSymbol("mapa").$("estado_bordemapa").hide();
            sym.getSymbol("contened_mapa").stop(0);


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${mapa}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            sym.getSymbol("contened_mapa").play();

            // Mostrar un elemento 
            sym.getSymbol("mapa").$("estado_bordemapa").show();

            sym.getSymbol("libroA2").$("estado_bordeglos").hide();

            sym.getSymbol("libros").$("estado_bordelibro").hide();

            // Ocultar un elemento 
            sym.getSymbol("leyendo").$("estado_borde").hide();

            // Ocultar un elemento 
            sym.getSymbol("sol").$("estado_borde2").hide();

            // Ocultar un elemento 
            sym.getSymbol("papelera").$("estado_borde3").hide();

            // Ocultar un elemento 
            sym.getSymbol("pensar").$("estado_borde4").hide();

            // Ocultar un elemento 
            sym.getSymbol("docum").$("estado_borde5").hide();

            // Ocultar un elemento 
            sym.getSymbol("hablar").$("estado_borde6").hide();

            // Ocultar un elemento 
            sym.getSymbol("pdf").$("estado_bordePDF").hide();

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_apertura").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_PDF").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contenidos").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contextual").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_cierre").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contenedor_recordemos").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contend_preguntas").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_biblio").stop(0);


            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_glos").stop(0);


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${home}", "click", function (sym, e) {

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_home").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_apertura").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_PDF").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contenidos").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_contextual").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_cierre").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contenedor_recordemos").stop(0);
            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contend_preguntas").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_biblio").stop(0);


            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_glos").stop(0);

            // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
            // sym.stop(500); o sym.stop("miEtiqueta");
            sym.getSymbol("contened_mapa").stop(0);


            // Mostrar un elemento 
            sym.getSymbol("mapa").$("estado_bordemapa").hide();

            sym.getSymbol("libroA2").$("estado_bordeglos").hide();

            sym.getSymbol("libros").$("estado_bordelibro").hide();

            // Ocultar un elemento 
            sym.getSymbol("leyendo").$("estado_borde").hide();

            // Ocultar un elemento 
            sym.getSymbol("sol").$("estado_borde2").hide();

            // Ocultar un elemento 
            sym.getSymbol("papelera").$("estado_borde3").hide();

            // Ocultar un elemento 
            sym.getSymbol("pensar").$("estado_borde4").hide();

            // Ocultar un elemento 
            sym.getSymbol("docum").$("estado_borde5").hide();

            // Ocultar un elemento 
            sym.getSymbol("hablar").$("estado_borde6").hide();

            // Ocultar un elemento 
            sym.getSymbol("pdf").$("estado_bordePDF").hide();




        });
        //Edge binding end

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // Plantilla creada
            $("body").trigger({
                type: "EDGE_Container_loaded",
                sym: sym
            });

        });
        //Edge binding end

    })("stage");
    //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'home'
    (function (symbolName) {

    })("home");
    //Edge symbol end:'home'

    //=========================================================

    //Edge symbol: 'libros'
    (function (symbolName) {

    })("libros");
    //Edge symbol end:'libros'

    //=========================================================

    //Edge symbol: 'libroA'
    (function (symbolName) {

    })("libroA");
    //Edge symbol end:'libroA'

    //=========================================================

    //Edge symbol: 'mapa'
    (function (symbolName) {

    })("mapa");
    //Edge symbol end:'mapa'

    //=========================================================

    //Edge symbol: 'leyendo'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function (sym, e) {
            // introducir código aquí
        });
        //Edge binding end

    })("leyendo");
    //Edge symbol end:'leyendo'

    //=========================================================

    //Edge symbol: 'sol'
    (function (symbolName) {

    })("sol");
    //Edge symbol end:'sol'

    //=========================================================

    //Edge symbol: 'papelera'
    (function (symbolName) {

    })("papelera");
    //Edge symbol end:'papelera'

    //=========================================================

    //Edge symbol: 'pensar'
    (function (symbolName) {

    })("pensar");
    //Edge symbol end:'pensar'

    //=========================================================

    //Edge symbol: 'docum'
    (function (symbolName) {

    })("docum");
    //Edge symbol end:'docum'

    //=========================================================

    //Edge symbol: 'hablar'
    (function (symbolName) {

    })("hablar");
    //Edge symbol end:'hablar'

    //=========================================================

    //Edge symbol: 'pdf'
    (function (symbolName) {

    })("pdf");
    //Edge symbol end:'pdf'

    //=========================================================

    //Edge symbol: 'tool_btn1'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tool_btn1");
    //Edge symbol end:'tool_btn1'

    //=========================================================

    //Edge symbol: 'tooltipMov'
    (function (symbolName) {

    })("tooltipMov");
    //Edge symbol end:'tooltipMov'

    //=========================================================

    //Edge symbol: 'tooltip_btn2'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tooltip_btn2");
    //Edge symbol end:'tooltip_btn2'

    //=========================================================

    //Edge symbol: 'tooltipMov2'
    (function (symbolName) {

    })("tooltipMov2");
    //Edge symbol end:'tooltipMov2'

    //=========================================================

    //Edge symbol: 'tootip_btn3'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tootip_btn3");
    //Edge symbol end:'tootip_btn3'

    //=========================================================

    //Edge symbol: 'tooltipMov3'
    (function (symbolName) {

    })("tooltipMov3");
    //Edge symbol end:'tooltipMov3'

    //=========================================================

    //Edge symbol: 'tooltip_btn4'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tooltip_btn4");
    //Edge symbol end:'tooltip_btn4'

    //=========================================================

    //Edge symbol: 'tooltipMov4'
    (function (symbolName) {

    })("tooltipMov4");
    //Edge symbol end:'tooltipMov4'

    //=========================================================

    //Edge symbol: 'tooltip_bnt5'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tooltip_bnt5");
    //Edge symbol end:'tooltip_bnt5'

    //=========================================================

    //Edge symbol: 'tooltipMov5'
    (function (symbolName) {

    })("tooltipMov5");
    //Edge symbol end:'tooltipMov5'

    //=========================================================

    //Edge symbol: 'tooltip_btn6'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tooltip_btn6");
    //Edge symbol end:'tooltip_btn6'

    //=========================================================

    //Edge symbol: 'tooltipMov6'
    (function (symbolName) {

    })("tooltipMov6");
    //Edge symbol end:'tooltipMov6'

    //=========================================================

    //Edge symbol: 'tool_Home'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tool_Home");
    //Edge symbol end:'tool_Home'

    //=========================================================

    //Edge symbol: 'tool_homeMov'
    (function (symbolName) {

    })("tool_homeMov");
    //Edge symbol end:'tool_homeMov'

    //=========================================================

    //Edge symbol: 'tool_libros'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tool_libros");
    //Edge symbol end:'tool_libros'

    //=========================================================

    //Edge symbol: 'tool_librosMov'
    (function (symbolName) {

    })("tool_librosMov");
    //Edge symbol end:'tool_librosMov'

    //=========================================================

    //Edge symbol: 'tooltip_librosA'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tooltip_librosA");
    //Edge symbol end:'tooltip_librosA'

    //=========================================================

    //Edge symbol: 'tooltip_librosAmov'
    (function (symbolName) {

    })("tooltip_librosAmov");
    //Edge symbol end:'tooltip_librosAmov'

    //=========================================================

    //Edge symbol: 'tooltip_mapa'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tooltip_mapa");
    //Edge symbol end:'tooltip_mapa'

    //=========================================================

    //Edge symbol: 'tooltip_mapaMov'
    (function (symbolName) {

    })("tooltip_mapaMov");
    //Edge symbol end:'tooltip_mapaMov'

    //=========================================================

    //Edge symbol: 'tooltip_PDF'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tooltip_PDF");
    //Edge symbol end:'tooltip_PDF'

    //=========================================================

    //Edge symbol: 'tooltip_PDFmov'
    (function (symbolName) {

    })("tooltip_PDFmov");
    //Edge symbol end:'tooltip_PDFmov'

    //=========================================================

    //Edge symbol: 'barra_herramientas'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("barra_herramientas");
    //Edge symbol end:'barra_herramientas'

    //=========================================================

    //Edge symbol: 'barra_herramientasMov'
    (function (symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${btn_fullscreen}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("btn_fullscreen").getSymbol("tooltip_fs").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_fullscreen}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("btn_fullscreen").getSymbol("tooltip_fs").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("btn_creditos").getSymbol("tooltip_cred").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("btn_creditos").getSymbol("tooltip_cred").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_ayuda}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("btn_ayuda").getSymbol("tooltip_ayuda").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_ayuda}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("btn_ayuda").getSymbol("tooltip_ayuda").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_audio}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("btn_audio").getSymbol("tooltip_audio").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_audio}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("btn_audio").getSymbol("tooltip_audio").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_info}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("btn_info").getSymbol("tooltip_info").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_info}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("btn_info").getSymbol("tooltip_info").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_acces}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("btn_acces").getSymbol("tooltip_acces").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_acces}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("btn_acces").getSymbol("tooltip_acces").playReverse();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_fullscreen}", "click", function (sym, e) {
            // Fullscreen

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "click", function (sym, e) {
            // Popup de creditos

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_ayuda}", "click", function (sym, e) {
            //  poup ayuda

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_audio}", "click", function (sym, e) {
            // funcion de sonido

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_info}", "click", function (sym, e) {
            // poup de informaccion
            // Mostrar un elemento 
            // Plantilla creada
            $.trigger({
                type: "EDGE_Plantilla_click",
                sym: sym,
                evt: e
            });
            
            //console.log(e);
        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_acces}", "click", function (sym, e) {
            // popup de accesibilidad

        });
        //Edge binding end

    })("barra_herramientasMov");
    //Edge symbol end:'barra_herramientasMov'

    //=========================================================

    //Edge symbol: 'btn_fullscreen'
    (function (symbolName) {

    })("btn_fullscreen");
    //Edge symbol end:'btn_fullscreen'

    //=========================================================

    //Edge symbol: 'btn_creditos'
    (function (symbolName) {

    })("btn_creditos");
    //Edge symbol end:'btn_creditos'

    //=========================================================

    //Edge symbol: 'btn_ayuda'
    (function (symbolName) {

    })("btn_ayuda");
    //Edge symbol end:'btn_ayuda'

    //=========================================================

    //Edge symbol: 'btn_audio'
    (function (symbolName) {

    })("btn_audio");
    //Edge symbol end:'btn_audio'

    //=========================================================

    //Edge symbol: 'btn_info'
    (function (symbolName) {

    })("btn_info");
    //Edge symbol end:'btn_info'

    //=========================================================

    //Edge symbol: 'btn_acces'
    (function (symbolName) {

    })("btn_acces");
    //Edge symbol end:'btn_acces'

    //=========================================================

    //Edge symbol: 'tooltip_fs'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tooltip_fs");
    //Edge symbol end:'tooltip_fs'

    //=========================================================

    //Edge symbol: 'tooltip_fsMov'
    (function (symbolName) {

    })("tooltip_fsMov");
    //Edge symbol end:'tooltip_fsMov'

    //=========================================================

    //Edge symbol: 'tooltip_cred'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tooltip_cred");
    //Edge symbol end:'tooltip_cred'

    //=========================================================

    //Edge symbol: 'tooltip_credMov'
    (function (symbolName) {

    })("tooltip_credMov");
    //Edge symbol end:'tooltip_credMov'

    //=========================================================

    //Edge symbol: 'tooltip_ayuda'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tooltip_ayuda");
    //Edge symbol end:'tooltip_ayuda'

    //=========================================================

    //Edge symbol: 'tooltip_ayudaMov'
    (function (symbolName) {

    })("tooltip_ayudaMov");
    //Edge symbol end:'tooltip_ayudaMov'

    //=========================================================

    //Edge symbol: 'tooltip_audio'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tooltip_audio");
    //Edge symbol end:'tooltip_audio'

    //=========================================================

    //Edge symbol: 'tooltip_audioMov'
    (function (symbolName) {

    })("tooltip_audioMov");
    //Edge symbol end:'tooltip_audioMov'

    //=========================================================

    //Edge symbol: 'tooltip_info'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tooltip_info");
    //Edge symbol end:'tooltip_info'

    //=========================================================

    //Edge symbol: 'tooltip_infoMov'
    (function (symbolName) {

    })("tooltip_infoMov");
    //Edge symbol end:'tooltip_infoMov'

    //=========================================================

    //Edge symbol: 'tooltip_acces'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("tooltip_acces");
    //Edge symbol end:'tooltip_acces'

    //=========================================================

    //Edge symbol: 'tooltip_accesMov'
    (function (symbolName) {

    })("tooltip_accesMov");
    //Edge symbol end:'tooltip_accesMov'

    //=========================================================

    //Edge symbol: 'contened_apertura'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("contened_apertura");
    //Edge symbol end:'contened_apertura'

    //=========================================================

    //Edge symbol: 'contened_contextual'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("contened_contextual");
    //Edge symbol end:'contened_contextual'

    //=========================================================

    //Edge symbol: 'contened_contenidos'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("contened_contenidos");
    //Edge symbol end:'contened_contenidos'

    //=========================================================

    //Edge symbol: 'contenedor_recordemos'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("contenedor_recordemos");
    //Edge symbol end:'contenedor_recordemos'

    //=========================================================

    //Edge symbol: 'contend_preguntas'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {

            sym.stop();

        });
        //Edge binding end

    })("contend_preguntas");
    //Edge symbol end:'contend_preguntas'

    //=========================================================

    //Edge symbol: 'contened_cierre'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("contened_cierre");
    //Edge symbol end:'contened_cierre'

    //=========================================================

    //Edge symbol: 'contened_PDF'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("contened_PDF");
    //Edge symbol end:'contened_PDF'

    //=========================================================

    //Edge symbol: 'contened_biblio'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("contened_biblio");
    //Edge symbol end:'contened_biblio'

    //=========================================================

    //Edge symbol: 'contened_glos'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("contened_glos");
    //Edge symbol end:'contened_glos'

    //=========================================================

    //Edge symbol: 'contened_mapa'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("contened_mapa");
    //Edge symbol end:'contened_mapa'

    //=========================================================

    //Edge symbol: 'contened_home'
    (function (symbolName) {

    })("contened_home");
    //Edge symbol end:'contened_home'

    //=========================================================

    //Edge symbol: 'contenedor_popup'
    (function (symbolName) {

    })("contenedor_popup");
    //Edge symbol end:'contenedor_popup'

    //=========================================================

    //Edge symbol: 'popup_contenido_1'
    (function (symbolName) {

    })("popup_contenido_1");
    //Edge symbol end:'popup_contenido_1'

    //=========================================================

    //Edge symbol: 'poup_contenido_2'
    (function (symbolName) {

    })("poup_contenido_2");
    //Edge symbol end:'poup_contenido_2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-5617841");