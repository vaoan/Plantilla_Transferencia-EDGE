/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global EC */

//<editor-fold defaultstate="collapsed" desc="Global values">
EDGE_Plantilla = {
    play_general_sound: true,
    plantilla_sym: null,
    debug: true,
    base_audio: new Audio('sounds/snap.mp3'),
    config: null,
    popup_on_show: null,
    recurso_on_show: null
};
ion.sound({
    sounds: [
        {
            name: "snap"
        },
        {
            name: "button_click",
            volume: 0.2
        },
        {
            name: "staple_gun",
            volume: 0.3,
            preload: false
        }
    ],
    volume: 0.51,
    path: "sounds/",
    preload: true
});
//</editor-fold>

(function () {

    //<editor-fold defaultstate="collapsed" desc="generic functions">
    function getRemote() {
        return $.ajax({
            type: "GET",
            dataType: "json",
            url: "json/config.json",
            async: false
        });
    }

    function play_buttons(evt) {
        if (EDGE_Plantilla.play_general_sound) {
            var temp = EDGE_Plantilla.base_audio.cloneNode();
            temp.play("snap");
        }
    }

    function fullscreen() {
        if ($.fullscreen.isFullScreen()) {
            $.fullscreen.exit();
        } else {
            $("body").fullscreen();
        }
    }

    function close_popup() {
        var sym = EDGE_Plantilla.plantilla_sym;
        sym.getSymbol("contenedor_popup").$("popup_contenido_2").hide();
        sym.getSymbol("contenedor_popup").$("popup_contenido_1").hide();
        sym.$("contenedor_popup").hide();
    }

    function buscar_sym(sym, arrSymSearch) {
        var temp = sym;
        $.each(arrSymSearch, function (index, value) {
            EDGE_Plantilla.debug ? console.log(temp) : false;
            temp = temp.getSymbol(value);
        });
        EDGE_Plantilla.debug ? console.log(temp) : false;
        return temp;
    }

    $("body").on("EDGE_Container_loaded", function (evt) {
        EDGE_Plantilla.plantilla_sym = evt.sym;
        EDGE_Plantilla.config = getRemote().responseJSON;
        //EDGE_Plantilla.debug ? console.log(EDGE_Plantilla.config) : false;
    });

    $(document).on("EDGE_Plantilla_ClosePopup", function (evt) {
        play_buttons();
        close_popup();
        EDGE_Plantilla.debug ? console.log("close") : false;
        EDGE_Plantilla.popup_on_show = null;
    });
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Controles de la plantilla">
    $("body").on("EDGE_Self_Plantilla_ClickMenuTools", function (evt) {
        EDGE_Plantilla.debug ? console.log(evt) : false;
        EDGE_Plantilla.debug ? console.log(evt.evt.currentTarget.id) : false;
        switch (evt.evt.currentTarget.id) {
            case "Stage_barra_herramientas_barra_herramientasMov_btn_fullscreen":
                fullscreen();
                break;
            case "Stage_barra_herramientas_barra_herramientasMov_btn_creditos":
                mostrar_popup("creditos");
                break;
            case "Stage_barra_herramientas_barra_herramientasMov_btn_ayuda":
                mostrar_popup("ayudas");
                break;
            case "Stage_barra_herramientas_barra_herramientasMov_btn_audio":
                EDGE_Plantilla.play_general_sound = !EDGE_Plantilla.play_general_sound;
                break;
            case "Stage_barra_herramientas_barra_herramientasMov_btn_info":
                mostrar_popup("info");
                break;
            case "Stage_barra_herramientas_barra_herramientasMov_btn_acces":
                mostrar_popup("muy_bien", {mensaje: "¡Esto está BIEN!", titulo: "Excelente"});
                break;
        }

        play_buttons(evt);
    });

    $("body").on("EDGE_Self_Plantilla_ClickNav", function (evt) {
        EDGE_Plantilla.debug ? console.log(evt) : false;
        EDGE_Plantilla.debug ? console.log(evt.evt.currentTarget.id) : false;
        switch (evt.evt.currentTarget.id) {
            case "Stage_home":
                break;
            case "Stage_libros":
                break;
            case "Stage_libroA2":
                break;
            case "Stage_mapa":
                break;
            case "Stage_leyendo":
                mostrar_pagina("2");
                break;
            case "Stage_sol":
                break;
            case "Stage_papelera":
                break;
            case "Stage_pensar":
                break;
            case "Stage_docum":
                break;
            case "Stage_hablar":
                break;
            case "Stage_pdf":
                mostrar_pagina("3");
                break;
        }
        play_buttons(evt);
    });
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Popups">
    function mostrar_popup(strPopup, objRetro) {
        //EDGE_Plantilla.config
        var sym = EDGE_Plantilla.plantilla_sym;
        if (!EDGE_Plantilla.config.popups.hasOwnProperty(strPopup)) {
            console.error(strPopup, EDGE_Plantilla.config.popup, "POPUP No encontrado");
            return false;
        }
        var popup = EDGE_Plantilla.config.popups[strPopup];

        var sym_contenedor;

        switch (popup.type) {
            case "popup_mini":
                sym_contenedor = sym.getSymbol("contenedor_popup").$("popup_contenido_2");
                break;
            case "popup_full":
                sym_contenedor = sym.getSymbol("contenedor_popup").$("popup_contenido_2");
                break;
            default:
                console.error(popup.type, "POPUP tipo incorrecto");
                return false;
                break;
        }

        EDGE_Plantilla.popup_on_show = popup;

        if (!isEmpty(popup.symbols)) {
            if (!isEmpty(objRetro)) {
                $.each(objRetro, function (index, value) {
                    if (!popup.symbols.hasOwnProperty(index)) {
                        delete popup.symbols[index];
                    }
                });
            }
        } else {
            objRetro = null;
        }

        sym.$("contenedor_popup").show();
        sym_contenedor.show();

        // Load Third Composition and inject data
        var promise = EC.loadComposition(EDGE_Plantilla.config.default.url_pages + popup.url,
                sym_contenedor);

        promise.done(function (comp) {
            var stage = comp.getStage();
            if (!isEmpty(objRetro)) {
                $.each(objRetro, function (index, value) {
                    var arrSymSearch = popup.symbols[index];
                    var symFound = buscar_sym(stage, arrSymSearch);
                    console.log(typeof value)
                    if (typeof value === "string") {
                        $(symFound.ele).find("p").text(value);
                    }
                });
            }
        });

    }

    /* El POPUP envía un evento a la plantilla informando que ya está creado 
     * y está listo para recibir su estado inicial
     */
    $(document).on("EDGE_Plantilla_CreationCompletePop", function (evt) {
        EDGE_Plantilla.debug ? console.log("listen") : false;
        var popup = EDGE_Plantilla.popup_on_show;
        var sym = EDGE_Plantilla.plantilla_sym;

        var sym_contenedor;

        switch (popup.type) {
            case "popup_mini":
                sym_contenedor = sym.getSymbol("contenedor_popup").getSymbol("popup_contenido_2");
                break;
            case "popup_full":
                sym_contenedor = sym.getSymbol("contenedor_popup").getSymbol("popup_contenido_2");
                break;
            default:
                console.error(popup.type, "POPUP tipo incorrecto");
                return false;
                break;
        }

        EDGE_Plantilla.debug ? console.log(sym_contenedor) : false;

        $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger({
            type: 'EDGE_PopUp_CreationResponse',
            sym: evt.sym,
            identify: EDGE_Plantilla.popup_on_show
        });
    });
    //</editor-fold>

    function mostrar_pagina(strPagina, objRetro) {
        //EDGE_Plantilla.config
        var sym = EDGE_Plantilla.plantilla_sym;
        EDGE_Plantilla.debug ? console.log(strPagina) : false;

        if (!EDGE_Plantilla.config.paginas.hasOwnProperty(strPagina)) {
            console.error(strPagina, EDGE_Plantilla.config.paginas, "PAGINA No encontrado");
            return false;
        }
        var pagina = EDGE_Plantilla.config.paginas[strPagina];

        var sym_contenedor = sym.getSymbol("contened_home");

        EDGE_Plantilla.recurso_on_show = pagina;

        if (!isEmpty(pagina.symbols)) {
            if (!isEmpty(objRetro)) {
                $.each(objRetro, function (index, value) {
                    if (!pagina.symbols.hasOwnProperty(index)) {
                        delete pagina.symbols[index];
                    }
                });
            }
        } else {
            objRetro = null;
        }

        switch (pagina.type) {
            case "actividad":
            case "activity":

                var actividad =
                        EDGE_Plantilla.config.actividades[pagina.actividad];
                if (isEmpty(actividad)) {
                    console.error(pagina, "ACTIVIDAD no encontrada");
                    return false;
                } else {
                    pagina.activity = actividad;
                    pagina.url = actividad.url;
                    EDGE_Plantilla.debug ? console.log(actividad, EDGE_Plantilla.config.paginas, "Actividad found") : false;
                }

                break;
        }

        EDGE_Plantilla.debug ? console.log(strPagina, objRetro, pagina) : false;

        // Load Third Composition and inject data
        var promise = EC.loadComposition(EDGE_Plantilla.config.default.url_pages + pagina.url,
                sym_contenedor);

        promise.done(function (comp) {
            var stage = comp.getStage();
            if (!isEmpty(objRetro)) {
                $.each(objRetro, function (index, value) {
                    var arrSymSearch = pagina.symbols[index];
                    var symFound = buscar_sym(stage, arrSymSearch);
                    console.log(typeof value);
                    if (typeof value === "string") {
                        $(symFound.ele).find("p").text(value);
                    }
                });
            }
        });

    }
    /* El recurso envía un evento a la plantilla informando que ya está creado 
     * y está listo para recibir su estado inicial
     */
    $(document).on("EDGE_Plantilla_creationComplete", function (evt) {
        var temp_pagina = EDGE_Plantilla.recurso_on_show;

        switch (EDGE_Plantilla.recurso_on_show.actividad) {
            case "drag_drop":
                drag_drop_toscano_created(evt);
                break;
            case "drag_drop_many":
                drag_drop_toscano_created(evt);
                break;
        }
    });
    function drag_drop_toscano_created(evt) {
        var sym = EDGE_Plantilla.plantilla_sym;
        var sym_contenedor = sym.getSymbol("contened_home");

        EDGE_Plantilla.debug ? console.log(evt) : false;
        EDGE_Plantilla.debug ? console.log($('iframe', sym_contenedor.ele)[0], sym_contenedor) : false;

        // previous_data debe ser interpretado del scorm
        $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger({
            type: "EDGE_Recurso_sendPreviousData",
            block: false,
            previous_data: {
                "DROP_1_(Un cuadro azul)": ["DRAG_2_(bola verde)"],
                "DROP_2_(Un cuadro rojo)": ["DRAG_1_(bola rosada)"]
            },
            attempts: 0,
            sym: evt.sym,
            identify: EDGE_Plantilla.recurso_on_show
        });
    }

    /* El recurso ha enviado una petición de Submit, la plantilla debe decidir
     * que hacer con este request y enviarle una respuesta para que reaccione
     */
    $(document).on("EDGE_Plantilla_submitApplied", function (evt) {
        var temp_pagina = EDGE_Plantilla.recurso_on_show;

        switch (EDGE_Plantilla.recurso_on_show.actividad) {
            case "drag_drop":
                drag_drop_toscano_submit(evt);
                break;
            case "drag_drop_many":
                drag_drop_toscano_submit(evt);
                break;
        }
    });
    function drag_drop_toscano_submit(evt) {
        var sym = EDGE_Plantilla.plantilla_sym;
        var sym_contenedor = sym.getSymbol("contened_home");
        var is_empty = false;
        EDGE_Plantilla.debug ? console.log(evt) : false;

        if (evt.attempts >= evt.attempts_limit) {
            return false;
        }

        $.each(evt.answer, function (index, value) {
            //console.log(isEmpty(value));
            if (isEmpty(value)) {
                mostrar_popup("med_estrella");
                is_empty = true;
                return false;
            }
        });
        
        if(is_empty){
            return false;
        }

        var objEvt = {type: "EDGE_Recurso_postSubmitApplied", sym: evt.sym};

        if (evt.results !== "incorrect") {
            mostrar_popup("muy_bien", {mensaje: "Tu drag and drop ha sido respondido correctamente"});

            objEvt = merge_options(objEvt, {
                block: true,
                show_answers: false,
                attempts: evt.attempts
            });

        } else {
            var this_block = false;
            var this_show_answers = false;

            var intentos = evt.attempts + 1;
            if (intentos >= evt.attempts_limit) {
                this_block = true;
                this_show_answers = true;
                mostrar_popup("bronce");
            } else {
                mostrar_popup("plata");
            }

            objEvt = merge_options(objEvt, {
                block: this_block,
                show_answers: this_show_answers,
                attempts: intentos
            });
        }

        $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger(objEvt);
    }


}());