/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var play_general_sound = true;
var plantilla_sym;
var debug = true;

(function () {
    
    function play_buttons(evt) {
        if (play_general_sound) {
            //console.log(this);
            ion.sound.play("snap");
        }
    }

    function preload() {

    }

    function unset_preload() {

    }

    function call_pop_muybien() {
        var sym = plantilla_sym;
        sym.getComposition().getStage().$("contenedor_popup").show();
    }
    
    
    
    $("body").on("EDGE_Container_loaded", function (evt) {
        plantilla_sym = evt.sym;
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
        $("[id*=btn]").not("[id*=tooltip], [id*=menu-desp]").hover(play_buttons);
        //console.log($("[id*=btn]"));

        $.on("EDGE_Plantilla_click", function (evt) {
            console.log(evt);
            switch (evt.currentTarget.id) {
                case "Stage_barra_herramientas_barra_herramientasMov_btn_info":
                    console.log("info_btn");
                    if (evt.currentTarget.prop("")) {
                        preload();
                    }
                    break;
            }
        });
    });

    


}());