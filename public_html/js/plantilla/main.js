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
    popup_on_show: null
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
            url: "config.json",
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

        if (!isEmpty(objRetro)) {
            $.each(objRetro, function (index, value) {
                if (!popup.symbols.hasOwnProperty(index)) {
                    delete popup.symbols[index];
                }
            });
        }

        sym.$("contenedor_popup").show();
        sym_contenedor.show();

        // Load Third Composition and inject data
        var promise = EC.loadComposition(EDGE_Plantilla.config.default.url_pages + popup.url,
                sym_contenedor);

        promise.done(function (comp) {
            var stage = comp.getStage();
            
            $.each(objRetro, function (index, value) {
                var arrSymSearch = popup.symbols[index];
                var symFound = buscar_sym(stage, arrSymSearch);
                console.log(typeof value)
                if(typeof value === "string"){
                    $(symFound.ele).find("p").text(value);
                }
            });
            // Set text fields in external composition
            //stage.$("title").html("EdgeDocks.com");
            //stage.$("body").html("Everything Edge: News, Tutorials, Components and much more...");
            // Listen for events dispatched by the external composition
            // stage.$("btn").click(function () { sym.play(); });
        });

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

    function call_pop_creditos() {
        mostrar_popup("muy_bien", {mensaje: "¡Esto está BIEN!", titulo : "Excelente"});
    }

    $("body").on("EDGE_Plantilla_ClickMenuTools", function (evt) {
        EDGE_Plantilla.debug ? console.log(evt) : false;
        EDGE_Plantilla.debug ? console.log(evt.evt.currentTarget.id) : false;
        switch (evt.evt.currentTarget.id) {
            case "Stage_barra_herramientas_barra_herramientasMov_btn_fullscreen":
                fullscreen();
                break;
            case "Stage_barra_herramientas_barra_herramientasMov_btn_creditos":
                call_pop_creditos();
                break;
            case "Stage_barra_herramientas_barra_herramientasMov_btn_ayudas":
                break;
            case "Stage_barra_herramientas_barra_herramientasMov_btn_audio":
                EDGE_Plantilla.play_general_sound = !EDGE_Plantilla.play_general_sound;
                break;
            case "Stage_barra_herramientas_barra_herramientasMov_btn_info":
                break;
            case "Stage_barra_herramientas_barra_herramientasMov_btn_acces":
                break;
        }

        play_buttons(evt);
    });

    $("body").on("EDGE_Plantilla_ClickNav", function (evt) {
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
                break;
        }
        play_buttons(evt);
    });
}());