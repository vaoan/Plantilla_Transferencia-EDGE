(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes

// library properties:
    lib.properties = {
        width: 267,
        height: 248,
        fps: 24,
        color: "#FFFFFF",
        manifest: [
            {src: "images/_01_torzo.png", id: "_01_torzo"},
            {src: "images/_02_antebrazo1.png", id: "_02_antebrazo1"},
            {src: "images/_03_brazo1.png", id: "_03_brazo1"},
            {src: "images/_04_brazocomp.png", id: "_04_brazocomp"},
            {src: "images/_05_mano1.png", id: "_05_mano1"},
            {src: "images/_06_mano2.png", id: "_06_mano2"},
            {src: "images/_07_mano3.png", id: "_07_mano3"},
            {src: "images/_08_cara.png", id: "_08_cara"},
            {src: "images/_09_ceja1.png", id: "_09_ceja1"},
            {src: "images/_10_ceja2.png", id: "_10_ceja2"},
            {src: "images/_11_pupilas.png", id: "_11_pupilas"},
            {src: "images/_12_ojos.png", id: "_12_ojos"},
            {src: "images/_13_cuello_chaq.png", id: "_13_cuello_chaq"},
            {src: "images/_19_parpados74.png", id: "_19_parpados74"},
            {src: "images/boca_A.png", id: "boca_A"},
            {src: "images/boca_dL.png", id: "boca_dL"},
            {src: "images/boca_i.png", id: "boca_i"},
            {src: "images/boca_mpb.png", id: "boca_mpb"},
            {src: "images/boca_ou.png", id: "boca_ou"},
            {src: "sounds/Nuestrarealidad.mp3", id: "Nuestrarealidad"}
        ]
    };



// symbols:



    (lib._01_torzo = function () {
        this.initialize(img._01_torzo);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 114, 167);


    (lib._02_antebrazo1 = function () {
        this.initialize(img._02_antebrazo1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 75, 88);


    (lib._03_brazo1 = function () {
        this.initialize(img._03_brazo1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 67, 69);


    (lib._04_brazocomp = function () {
        this.initialize(img._04_brazocomp);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 75, 136);


    (lib._05_mano1 = function () {
        this.initialize(img._05_mano1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 53, 32);


    (lib._06_mano2 = function () {
        this.initialize(img._06_mano2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 59, 35);


    (lib._07_mano3 = function () {
        this.initialize(img._07_mano3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 46, 39);


    (lib._08_cara = function () {
        this.initialize(img._08_cara);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 67, 69);


    (lib._09_ceja1 = function () {
        this.initialize(img._09_ceja1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 15, 7);


    (lib._10_ceja2 = function () {
        this.initialize(img._10_ceja2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 22, 8);


    (lib._11_pupilas = function () {
        this.initialize(img._11_pupilas);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 24, 5);


    (lib._12_ojos = function () {
        this.initialize(img._12_ojos);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 37, 8);


    (lib._13_cuello_chaq = function () {
        this.initialize(img._13_cuello_chaq);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 29, 39);


    (lib._19_parpados74 = function () {
        this.initialize(img._19_parpados74);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 34, 7);


    (lib.boca_A = function () {
        this.initialize(img.boca_A);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 47, 35);


    (lib.boca_dL = function () {
        this.initialize(img.boca_dL);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 46, 32);


    (lib.boca_i = function () {
        this.initialize(img.boca_i);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 46, 32);


    (lib.boca_mpb = function () {
        this.initialize(img.boca_mpb);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 45, 30);


    (lib.boca_ou = function () {
        this.initialize(img.boca_ou);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 47, 38);


    (lib.pupilitas = function () {
        this.initialize();

        // Capa 1
        this.instance = new lib._11_pupilas();
        this.instance.setTransform(-12, -2.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-12, -2.5, 24, 5);


    (lib.parp_marcos = function () {
        this.initialize();

        // Capa 1
        this.instance = new lib._19_parpados74();
        this.instance.setTransform(-17, -3.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-17, -3.5, 34, 7);


    (lib.mov_manita = function () {
        this.initialize();

        // Capa 1
        this.instance = new lib._05_mano1();
        this.instance.setTransform(-26.5, -16);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-26.5, -16, 53, 32);


    (lib.mov_manga = function () {
        this.initialize();

        // Capa 1
        this.instance = new lib._03_brazo1();
        this.instance.setTransform(-33.5, -34.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-33.5, -34.5, 67, 69);


    (lib.mano2_anim = function () {
        this.initialize();

        // Capa 1
        this.instance = new lib._06_mano2();
        this.instance.setTransform(-29.5, -17.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-29.5, -17.5, 59, 35);


    (lib.mano_senalando = function () {
        this.initialize();

        // Capa 1
        this.instance = new lib._07_mano3();
        this.instance.setTransform(-23, -19.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-23, -19.5, 46, 39);


    (lib.manito12 = function () {
        this.initialize();

        // Capa 1
        this.instance = new lib._07_mano3();
        this.instance.setTransform(-23, -19.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-23, -19.5, 46, 39);


    (lib.hombro_izgmov = function () {
        this.initialize();

        // Capa 1
        this.instance = new lib._02_antebrazo1();
        this.instance.setTransform(-37.5, -44);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-37.5, -44, 75, 88);


    (lib.cuello_marcos = function () {
        this.initialize();

        // Capa 1
        this.instance = new lib._13_cuello_chaq();
        this.instance.setTransform(-14.5, -19.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-14.5, -19.5, 29, 39);


    (lib.ceja1_mov = function () {
        this.initialize();

        // Capa 1
        this.instance = new lib._10_ceja2();
        this.instance.setTransform(-10.7, -4.6, 1, 1, 3.2);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-11.2, -4.6, 22.4, 9.3);


    (lib.ceja_peq_mov = function () {
        this.initialize();

        // Capa 1
        this.instance = new lib._09_ceja1();
        this.instance.setTransform(-7.7, -3, 1, 1, -4);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-7.7, -4, 15.5, 8.1);


    (lib.bocas = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.instance = new lib.boca_mpb();
        this.instance.setTransform(-23.8, -17.6, 1.046, 1.046);

        this.instance_1 = new lib.boca_A();
        this.instance_1.setTransform(-24.5, -16, 1.035, 1.052);

        this.instance_2 = new lib.boca_dL();
        this.instance_2.setTransform(-23.5, -15.7, 1.035, 1.035);

        this.instance_3 = new lib.boca_i();
        this.instance_3.setTransform(-24.2, -16.8, 1.052, 1.052);

        this.instance_4 = new lib.boca_ou();
        this.instance_4.setTransform(-24.1, -15.3, 1.026, 1.026);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.instance_1}]}, 1).to({state: [{t: this.instance_2}]}, 1).to({state: [{t: this.instance_3}]}, 1).to({state: [{t: this.instance_4}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-23.8, -17.6, 47.1, 31.4);


    (lib.parpadeo = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // parpadeo_anim
        this.instance = new lib.parp_marcos("synched", 0);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off: false}, 0).wait(3).to({startPosition: 0}, 0).to({_off: true}, 1).wait(35).to({_off: false}, 0).wait(3).to({startPosition: 0}, 0).to({_off: true}, 1).wait(59).to({_off: false}, 0).wait(2).to({startPosition: 0}, 0).to({_off: true}, 1).wait(16).to({_off: false}, 0).wait(3).to({startPosition: 0}, 0).to({_off: true}, 1).wait(35));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;


    (lib.mov_pupilas = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // pupilas_movi
        this.instance = new lib.pupilitas("synched", 0);
        this.instance.setTransform(0.6, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({startPosition: 0}, 0).wait(18).to({startPosition: 0}, 0).to({x: -1.6, y: 0.1}, 7).wait(65).to({startPosition: 0}, 0).to({x: 0.6, y: 0}, 6).wait(55).to({startPosition: 0}, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.4, -2.5, 24, 5);


    (lib.mano_derecha = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // mov_mano
        this.instance = new lib.mov_manita();
        this.instance.setTransform(20, -1, 1, 1, 0, 0, 0, 20, -1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({rotation: -5.3}, 56, cjs.Ease.get(-1)).to({rotation: -9}, 41).wait(161).to({rotation: 0}, 64).wait(28));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26.5, -16, 53, 32);


    (lib.lipsyng_marcos = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_23 = function () {
            playSound("Nuestrarealidad");
        }
        this.frame_532 = function () {
            /* Detener en este fotograma
             La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
             También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
             */

            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(509).call(this.frame_532).wait(1));

        // bocas
        this.instance = new lib.bocas("single", 0);
        this.instance.setTransform(22.5, 15, 1, 1, 0, 0, 0, 22.5, 15);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({startPosition: 0}, 0).wait(3).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(3).to({startPosition: 4}, 0).wait(3).to({startPosition: 2}, 0).wait(1).to({startPosition: 4}, 0).wait(2).to({startPosition: 0}, 0).wait(3).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 0}, 0).wait(9).to({startPosition: 1}, 0).wait(1).to({startPosition: 2}, 0).wait(2).to({startPosition: 0}, 0).wait(2).to({startPosition: 0}, 0).wait(1).to({startPosition: 4}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 2}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 2}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(3).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(1).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(3).to({startPosition: 4}, 0).wait(1).to({startPosition: 3}, 0).wait(3).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 0}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 2}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 2}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(3).to({startPosition: 4}, 0).wait(4).to({startPosition: 3}, 0).wait(3).to({startPosition: 4}, 0).wait(1).to({startPosition: 0}, 0).wait(11).to({startPosition: 1}, 0).wait(3).to({startPosition: 0}, 0).wait(2).to({startPosition: 4}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(1).to({startPosition: 0}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 2}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(1).to({startPosition: 2}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 1}, 0).wait(1).to({startPosition: 2}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 0}, 0).wait(1).to({startPosition: 4}, 0).wait(1).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 2}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 0}, 0).wait(2).to({startPosition: 4}, 0).wait(3).to({startPosition: 0}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 2}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 4}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(2).to({startPosition: 4}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(2).to({startPosition: 0}, 0).wait(9).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(1).to({startPosition: 0}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 0}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 0}, 0).wait(2).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(3).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(3).to({startPosition: 4}, 0).wait(3).to({startPosition: 3}, 0).wait(3).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 2}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(3).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 0}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(1).to({startPosition: 3}, 0).wait(4).to({startPosition: 1}, 0).wait(2).to({startPosition: 2}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 2}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 2}, 0).wait(2).to({startPosition: 0}, 0).wait(13).to({startPosition: 0}, 0).wait(1).to({startPosition: 4}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 3}, 0).wait(1).to({startPosition: 4}, 0).wait(2).to({startPosition: 0}, 0).wait(2).to({startPosition: 4}, 0).wait(2).to({startPosition: 0}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(2).to({startPosition: 3}, 0).wait(4).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 0}, 0).wait(2).to({startPosition: 4}, 0).wait(1).to({startPosition: 2}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 0}, 0).wait(1).to({startPosition: 4}, 0).wait(2).to({startPosition: 2}, 0).wait(1).to({startPosition: 3}, 0).wait(3).to({startPosition: 3}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(3).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 4}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(1).to({startPosition: 3}, 0).wait(3).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 2}, 0).wait(2).to({startPosition: 0}, 0).wait(7).to({startPosition: 1}, 0).wait(3).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 3}, 0).wait(1).to({startPosition: 4}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 4}, 0).wait(1).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(2).to({startPosition: 1}, 0).wait(3).to({startPosition: 3}, 0).wait(1).to({startPosition: 4}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(3).to({startPosition: 1}, 0).wait(2).to({startPosition: 2}, 0).wait(2).to({startPosition: 0}, 0).wait(8).to({startPosition: 1}, 0).wait(2).to({startPosition: 2}, 0).wait(1).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(3).to({startPosition: 4}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 4}, 0).wait(1).to({startPosition: 3}, 0).wait(1).to({startPosition: 1}, 0).wait(1).to({startPosition: 2}, 0).wait(1).to({startPosition: 1}, 0).wait(2).to({startPosition: 3}, 0).wait(2).to({startPosition: 1}, 0).wait(1).to({startPosition: 3}, 0).wait(4).to({startPosition: 1}, 0).wait(3).to({startPosition: 0}, 0).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-23.8, -17.6, 47.1, 31.4);


    (lib.cejas_mov = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // ceja_peque
        this.instance = new lib.ceja_peq_mov("synched", 0);
        this.instance.setTransform(-19.6, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({startPosition: 0}, 0).wait(44).to({startPosition: 0}, 0).to({regX: -0.1, regY: -0.1, rotation: -4.2, y: -2.2}, 6).wait(103).to({startPosition: 0}, 0).to({regX: 0, regY: 0, rotation: -6, y: 0.3}, 6).to({rotation: -7.2, y: 0.4}, 14).wait(84).to({startPosition: 0}, 0).to({rotation: 0, y: 0}, 7).wait(22));

        // ceja_grande
        this.instance_1 = new lib.ceja1_mov("synched", 0);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({startPosition: 0}, 0).wait(44).to({startPosition: 0}, 0).to({rotation: 3, y: -1.8}, 6).wait(103).to({startPosition: 0}, 0).to({rotation: 2.6, y: -2.1}, 6).to({rotation: 3.2, y: -2.5}, 14).wait(84).to({startPosition: 0}, 0).to({rotation: 0, y: 0}, 7).wait(22));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27.3, -4.6, 38.6, 9.3);


    (lib.brazo_mov = function () {
        this.initialize();

        // brazo_derecha
        this.instance = new lib._04_brazocomp();
        this.instance.setTransform(-37.5, -68);

        // mano_abajo
        this.instance_1 = new lib.mano_derecha();
        this.instance_1.setTransform(-31.2, 49, 1, 1, 0, 0, 0, 17.6, -7.2);

        this.addChild(this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-75.3, -68, 112.8, 140.2);


    (lib.brazo_izq_mov = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_434 = function () {
            /* Detener en este fotograma
             La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
             También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
             */

            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(434).call(this.frame_434).wait(1));

        // mano2-2
        this.instance = new lib.mano2_anim("synched", 0);
        this.instance.setTransform(-44.1, -20.9, 1, 1, 15, 0, 0, 26.8, -9.2);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(236).to({_off: false}, 0).to({alpha: 1}, 2).to({rotation: 0, x: -45.6, y: -21.1}, 5).wait(21).to({startPosition: 0}, 0).to({regX: 26.9, rotation: 11, x: -45.5, y: -21.2}, 17, cjs.Ease.get(-1)).wait(62).to({startPosition: 0}, 0).to({regX: 26.8, rotation: 26, x: -45.6, y: -18.5}, 8).to({alpha: 0}, 2).wait(82));

        // mano1-2
        this.instance_1 = new lib.manito12("synched", 0);
        this.instance_1.setTransform(-46.9, -14.2, 1.007, 0.985, 0, -85.5, 94.5, 20.8, 13.1);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(231).to({_off: false}, 0).to({alpha: 1}, 2).to({skewX: -136.7, skewY: 43.3, x: -44.4, y: -19.3}, 3).to({alpha: 0}, 2).wait(113).to({scaleX: 1.09}, 0).to({scaleX: 1.01, alpha: 1}, 2).to({skewX: -113.8, skewY: 66.2, y: -16.9}, 3).to({alpha: 0}, 2).wait(77));

        // mano1
        this.instance_2 = new lib.mano_senalando("synched", 0);
        this.instance_2.setTransform(-57.2, 5.6, 1, 1, 0, 0, 0, 20, 10.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({startPosition: 0}, 0).wait(20).to({startPosition: 0}, 0).to({x: -63.2, y: -16}, 10, cjs.Ease.get(1)).to({x: -63.6, y: -17.2}, 19, cjs.Ease.get(1)).wait(38).to({startPosition: 0}, 0).to({regY: 10.5, rotation: 45, x: -66.4, y: -13.9}, 7, cjs.Ease.get(-1)).wait(20).to({startPosition: 0}, 0).to({regX: 20.1, rotation: 0, x: -63.5, y: -17.5}, 6, cjs.Ease.get(-1)).wait(2).to({startPosition: 0}, 0).to({regX: 20, rotation: 45, x: -66.4, y: -13.9}, 4, cjs.Ease.get(1)).wait(4).to({startPosition: 0}, 0).to({regX: 20.1, rotation: 0, x: -63.5, y: -17.5}, 6, cjs.Ease.get(-1)).wait(2).to({startPosition: 0}, 0).to({regX: 20, rotation: 45, x: -66.4, y: -13.9}, 4, cjs.Ease.get(0.99)).wait(53).to({startPosition: 0}, 0).to({x: -52}, 8).to({regX: 20.1, rotation: 37, x: -50.7, y: -13.8}, 5).to({alpha: 0}, 2).wait(123).to({rotation: 49.9, x: -50.8}, 0).to({rotation: 37, x: -50.7, alpha: 1}, 2).to({regX: 20, regY: 10.4, rotation: 0, x: -57.2, y: 5.6}, 18, cjs.Ease.get(-1)).wait(59));

        // manga
        this.instance_3 = new lib.mov_manga("synched", 0);
        this.instance_3.setTransform(-1.4, 44.3, 1, 1, -11.7, 0, 0, 24.9, 24);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({startPosition: 0}, 0).wait(20).to({startPosition: 0}, 0).to({rotation: -0.5, x: -17.8, y: 34.1}, 10, cjs.Ease.get(1)).to({regX: 24.8, rotation: 0, x: -18.8, y: 33.5}, 19, cjs.Ease.get(1)).wait(146).to({startPosition: 0}, 0).to({rotation: 8, x: -9.2, y: 37.9}, 8).wait(132).to({startPosition: 0}, 0).to({regX: 24.9, rotation: -11.7, x: -1.4, y: 44.3}, 18, cjs.Ease.get(-1)).wait(59));

        // hombro_izg
        this.instance_4 = new lib.hombro_izgmov("synched", 0);
        this.instance_4.setTransform(21.6, -32.8, 1, 1, -18.2, 0, 0, 23.2, -32);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({startPosition: 0}, 0).wait(20).to({startPosition: 0}, 0).to({rotation: -0.8, x: 23.1, y: -32}, 10, cjs.Ease.get(1)).to({rotation: 0, x: 23.2}, 19, cjs.Ease.get(1)).wait(146).to({startPosition: 0}, 0).to({rotation: -8.5, y: -33.6}, 8).wait(132).to({startPosition: 0}, 0).to({rotation: -18.2, x: 21.6, y: -32.8}, 18, cjs.Ease.get(-1)).wait(59));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-100.2, -48.6, 159.2, 115.1);


    (lib.mov_ojos = function () {
        this.initialize();

        // parpados
        this.instance = new lib.parpadeo();
        this.instance.setTransform(-1.2, 0);

        // mov_cejas
        this.instance_1 = new lib.cejas_mov();
        this.instance_1.setTransform(8.8, -7.1);

        // pupilas
        this.instance_2 = new lib.mov_pupilas();
        this.instance_2.setTransform(-1.4, 1);

        // ojos_blanco
        this.instance_3 = new lib._12_ojos();
        this.instance_3.setTransform(-18.5, -4);

        // bocas
        this.instance_4 = new lib.lipsyng_marcos();
        this.instance_4.setTransform(5.5, 28);

        this.addChild(this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-18.5, -11.8, 47.3, 53.6);


    (lib.anim_cabezaTodo = function () {
        this.initialize();

        // ojos
        this.instance = new lib.mov_ojos();
        this.instance.setTransform(-14.2, 7.8);

        // frente-nariz
        this.instance_1 = new lib._08_cara();
        this.instance_1.setTransform(-33.5, -34.5);

        this.addChild(this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-33.5, -34.5, 67, 84.1);


    (lib.mov_cabezaToda = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // giro_cabeza
        this.instance = new lib.anim_cabezaTodo();
        this.instance.setTransform(6.4, 40.4, 1, 1, 0, 0, 0, 6.4, 40.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({rotation: 4.9, x: 6.5}, 30, cjs.Ease.get(-1)).wait(95).to({rotation: 0, x: 6.4}, 19).to({rotation: -1.7}, 27, cjs.Ease.get(-1)).to({rotation: 0}, 18).wait(63));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-33.5, -34.5, 67, 84.1);


    (lib.cuerpomarcos = function () {
        this.initialize();

        // cuello_chaqueta
        this.instance = new lib.cuello_marcos("synched", 0);
        this.instance.setTransform(4.9, -74.9, 1, 1.001, 0, -2.3, 0);

        // brazocomp1
        this.instance_1 = new lib.brazo_mov();
        this.instance_1.setTransform(49.5, -46.4, 1, 1, 0, 0, 0, 0, -50.8);

        // cabeza_marcos
        this.instance_2 = new lib.mov_cabezaToda();
        this.instance_2.setTransform(-1.6, -124.4);

        // torzo
        this.instance_3 = new lib._01_torzo();
        this.instance_3.setTransform(-57, -102.1);

        // brazo_izq
        this.instance_4 = new lib.brazo_izq_mov();
        this.instance_4.setTransform(-44.1, -56.8, 1, 1, 0, 0, 0, 16.4, -35.2);

        this.addChild(this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-160.7, -158.9, 247.7, 235.5);


// stage content:
    (lib.marcos_sabiasque = function () {
        this.initialize();
        
        console.log("AAA");

        // cuerpoMarcos
        this.instance = new lib.cuerpomarcos();
        this.instance.setTransform(178.6, 164.5);
        //this.instance.setTransform(10, 50);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(151.4, 129.6, 247.7, 235.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {});
var lib, images, createjs, ss;