/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var play_general_sound = true;

(function () {
    $("body").on("EDGE_Container_loaded", function (evt) {
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
        $("[id*=btn]").hover(play_buttons);
        //console.log($("[id*=btn]"));
    });

    function play_buttons(evt) {
        if(play_general_sound){
            console.log(this);
            ion.sound.play("snap");
        }
    }
}());