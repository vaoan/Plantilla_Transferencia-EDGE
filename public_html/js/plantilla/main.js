/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global EC */

//<editor-fold defaultstate="collapsed" desc="Global values">
var play_general_sound = true;
var plantilla_sym;
var debug = true;
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
var audio = new Audio('sounds/snap.mp3');
//</editor-fold>

(function () {

    function play_buttons(evt) {
        if (play_general_sound) {
            //ion.sound.play("snap");
            var temp = audio.cloneNode();
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
        var sym = plantilla_sym;
        sym.getSymbol("contenedor_popup").$("popup_contenido_2").hide();
        sym.getSymbol("contenedor_popup").$("popup_contenido_1").hide();
        sym.$("contenedor_popup").hide();
    }

    function call_pop_creditos() {
        var sym = plantilla_sym;
        sym.$("contenedor_popup").show();
        sym.getSymbol("contenedor_popup").$("popup_contenido_2").show();
        EC.loadComposition("compositions/popup_creditos/popup_creditos.html",
                sym.getSymbol("contenedor_popup").$("popup_contenido_2"));
    }

    $("body").on("EDGE_Container_loaded", function (evt) {
        plantilla_sym = evt.sym;
    });

    $(document).on("EDGE_Plantilla_ClosePopup", function (evt) {
        play_buttons();
        close_popup();
        console.log("close");
    });

    $("body").on("EDGE_Plantilla_ClickMenuTools", function (evt) {
        console.log(evt);
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
                play_general_sound = !play_general_sound;
                break;
            case "Stage_barra_herramientas_barra_herramientasMov_btn_info":
                break;
            case "Stage_barra_herramientas_barra_herramientasMov_btn_acces":
                break;
        }

        play_buttons(evt);
    });


}());