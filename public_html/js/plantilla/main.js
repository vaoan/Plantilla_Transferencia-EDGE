/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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

    function preload() {

    }

    function unset_preload() {

    }

    function call_pop_muybien() {
        var sym = plantilla_sym;
        //sym.getComposition().getStage().$("contenedor_popup").show();
        //EC.loadComposition("compositions/MuyBienPopup/muyBien_edge.html", sym.getSymbol("contened_contenidos"));

        EC.loadComposition("compositions/MuyBienPopup/muyBien_edge.html", sym.getSymbol("contened_home"));
        

    }



    $("body").on("EDGE_Container_loaded", function (evt) {
        plantilla_sym = evt.sym;

        //$("[id*=btn]").not("[id*=tooltip], [id*=menu-desp]").hover(play_buttons);
        //console.log($("[id*=btn]"));

        $("body").on("EDGE_Plantilla_click", function (evt) {
            console.log(evt);
            switch (evt.evt.currentTarget.id) {
                case "Stage_barra_herramientas_barra_herramientasMov_btn_fullscreen":
                    fullscreen();
                    break;
                case "Stage_barra_herramientas_barra_herramientasMov_btn_creditos":
                    call_pop_muybien();
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
    });




}());