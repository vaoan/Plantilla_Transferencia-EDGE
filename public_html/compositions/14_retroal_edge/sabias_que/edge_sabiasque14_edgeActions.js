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






        Symbol.bindElementAction(compId, symbolName, "${todo_boton}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            sym.getSymbol("popup_animacion2").play();

            sym.play();



        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("stage");
    //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'popup_animacion'
    (function (symbolName) {



        Symbol.bindElementAction(compId, symbolName, "${btn_cerrar}", "mouseover", function (sym, e) {
            // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
            sym.getSymbol("btn_cerrar").play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_cerrar}", "mouseout", function (sym, e) {
            // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
            sym.getSymbol("btn_cerrar").playReverse();


        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_cerrar}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
            // sym.play(500); o sym.play("myLabel");
            sym.getComposition().getStage().play(0);

            // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
            // sym.play(500); o sym.play("myLabel");
            sym.play(0);



        });
        //Edge binding end



        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5467, function (sym, e) {
            var marcos = sym.$("marcos");
            //marcos.html('<canvas id="canvas" width="267" height="248" style="background-color:none"></canvas>');
            var element = $("<canvas/>");
            element.css({
                //background: "black",
                width: "267px",
                height: "248px",
                //width: "100%",
                //height: "100%",
                overflow: "visible"
            });
            marcos.html("");
            marcos.append(element);

            //console.log(marcos);

            var canvas, stage, exportRoot;

            canvas = $("canvas", marcos)[0];


            function init() {
                //canvas = document.getElementById("canvas");
                images = images || {};

                console.log(canvas);

                var loader = new createjs.LoadQueue(false);
                loader.installPlugin(createjs.Sound);
                loader.addEventListener("fileload", handleFileLoad);
                loader.addEventListener("complete", handleComplete);
                loader.loadManifest(lib.properties.manifest);

                //exportRoot.scaleX = exportRoot.scaleY = 10;
            }

            function handleFileLoad(evt) {
                if (evt.item.type == "image") {
                    images[evt.item.id] = evt.result;
                }
            }

            function handleComplete(evt) {
                exportRoot = new lib.marcos_sabiasque();

                stage = new createjs.Stage(canvas);
                stage.addChild(exportRoot);
                stage.update();

                stage.canvas.height = parseInt($(canvas).css("height"));
                stage.canvas.width = parseInt($(canvas).css("width"));

                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", stage);
            }

            function playSound(id, loop) {
                createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
            }

            init();

        });
        //Edge binding end

    })("popup_animacion");
    //Edge symbol end:'popup_animacion'

    //=========================================================

    //Edge symbol: 'bombillo_efecto'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function (sym, e) {
            // introducir código aquí
            // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
            // sym.play(500); o sym.play("myLabel");
            sym.play(0);

        });
        //Edge binding end

    })("bombillo_efecto");
    //Edge symbol end:'bombillo_efecto'

    //=========================================================

    //Edge symbol: 'btn_cerrar'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
            sym.stop();

        });
        //Edge binding end

    })("btn_cerrar");
    //Edge symbol end:'btn_cerrar'

    //=========================================================

    //Edge symbol: 'marcos_anim'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {






        });
        //Edge binding end

    })("marcos_anim");
    //Edge symbol end:'marcos_anim'

    //=========================================================

    //Edge symbol: 'anim_brazo'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // introducir código aquí
        });
        //Edge binding end

    })("anim_brazo");
    //Edge symbol end:'anim_brazo'

    //=========================================================

    //Edge symbol: 'anim_cabeza'
    (function (symbolName) {

    })("anim_cabeza");
    //Edge symbol end:'anim_cabeza'

    //=========================================================

    //Edge symbol: 'lypsing'
    (function (symbolName) {

    })("lypsing");
    //Edge symbol end:'lypsing'

    //=========================================================

    //Edge symbol: 'cejas_mov'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23929, function (sym, e) {
            // introducir código aquí
            sym.play(0);

        });
        //Edge binding end

    })("cejas_mov");
    //Edge symbol end:'cejas_mov'

    //=========================================================

    //Edge symbol: 'mov_ojos'
    (function (symbolName) {

    })("mov_ojos");
    //Edge symbol end:'mov_ojos'

    //=========================================================

    //Edge symbol: 'mov_pupilas'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13500, function (sym, e) {
            // introducir código aquí
            sym.play(0);

        });
        //Edge binding end

    })("mov_pupilas");
    //Edge symbol end:'mov_pupilas'

    //=========================================================

    //Edge symbol: 'parpadeo'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4371, function (sym, e) {
            // introducir código aquí
            sym.play(0);

        });
        //Edge binding end

    })("parpadeo");
    //Edge symbol end:'parpadeo'

    //=========================================================

    //Edge symbol: 'mov_cabeza'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18690, function (sym, e) {
            // introducir código aquí
            sym.play(0);

        });
        //Edge binding end

    })("mov_cabeza");
    //Edge symbol end:'mov_cabeza'

    //=========================================================

    //Edge symbol: 'mov_manito'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17329, function (sym, e) {
            // introducir código aquí
            // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
            // sym.play(500); o sym.play("myLabel");
            sym.play(0);

        });
        //Edge binding end

    })("mov_manito");
    //Edge symbol end:'mov_manito'

    //=========================================================

    //Edge symbol: 'prueba'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2278, function (sym, e) {
            // introducir código aquí
            // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
            // sym.play(500); o sym.play("myLabel");
            sym.play(0);

        });
        //Edge binding end

    })("prueba");
    //Edge symbol end:'prueba'

    //=========================================================

    //Edge symbol: 'todo_boton'
    (function (symbolName) {

    })("todo_boton");
    //Edge symbol end:'todo_boton'

    //=========================================================

    //Edge symbol: 'efect_ilum'
    (function (symbolName) {



        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 625, function (sym, e) {
            // introducir código aquí
            // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
            // sym.play(500); o sym.play("myLabel");
            sym.play("repitis");

        });
        //Edge binding end

    })("efect_ilum");
    //Edge symbol end:'efect_ilum'

    //=========================================================

    //Edge symbol: 'marcos'
    (function (symbolName) {



        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            //alert();


        });
        //Edge binding end

    })("marcos");
    //Edge symbol end:'marcos'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-87802654");