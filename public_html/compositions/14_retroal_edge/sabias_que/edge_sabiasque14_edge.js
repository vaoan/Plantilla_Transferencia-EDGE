/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            "http://code.createjs.com/easeljs-0.8.1.min.js",
            "http://code.createjs.com/tweenjs-0.6.1.min.js",
            "http://code.createjs.com/movieclip-0.8.1.min.js",
            "http://code.createjs.com/preloadjs-0.6.1.min.js",
            "http://code.createjs.com/soundjs-0.6.1.min.js",
            js+"marcos_sabiasque.js",
            js+"marcos_sabiasque_func.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'todo_boton',
                            symbolName: 'todo_boton',
                            type: 'rect',
                            rect: ['869', '285', '165', '66', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'popup_animacion2',
                            symbolName: 'popup_animacion',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0', '1053', '367', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1053px', '367px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,0)"]
                        }
                    }
                },
                timeline: {
                    duration: 5831,
                    autoPlay: true,
                    data: [
                        [
                            "eid3685",
                            "display",
                            0,
                            0,
                            "easeOutExpo",
                            "${popup_animacion2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3684",
                            "display",
                            23,
                            0,
                            "easeOutExpo",
                            "${popup_animacion2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "popup_animacion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1px', '1px', '1053px', '367px', 'auto', 'auto'],
                            id: 'cuadro_negro',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.79)', [270, [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,0.00)', 100]]]]
                        },
                        {
                            rect: ['179px', '56px', '694px', '281px', 'auto', 'auto'],
                            type: 'image',
                            id: 'cont_textos',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/prueb_sabiasque07.png', '0px', '0px']
                        },
                        {
                            rect: ['288px', '40px', '303px', '22px', 'auto', 'auto'],
                            id: 'franja_naranja',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/prueb_sabiasque08.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.02', '0.02']],
                            display: 'none',
                            rect: ['197px', '49px', '199px', '74px', 'auto', 'auto'],
                            id: 'recuadro-titulo',
                            fill: ['rgba(0,0,0,0)', 'images/grande05.png', '0px', '0px']
                        },
                        {
                            rect: ['230px', '208px', '59px', '7px', 'auto', 'auto'],
                            type: 'image',
                            id: 'puntos_naranja',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/grande04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.93', '0.93']],
                            display: 'none',
                            rect: ['305px', '-8px', '131px', '126px', 'auto', 'auto'],
                            id: 'globito',
                            fill: ['rgba(0,0,0,0)', 'images/grande02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['1', '0.93']],
                            display: 'none',
                            rect: ['239px', '32px', '140px', '74px', 'auto', 'auto'],
                            id: 'textosabiasque',
                            fill: ['rgba(0,0,0,0)', 'images/grande03.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.31609', '0.31609']],
                            type: 'rect',
                            display: 'none',
                            symbolName: 'bombillo_efecto',
                            rect: ['410px', '14px', '188', '286', 'auto', 'auto'],
                            id: 'bombillo_efecto'
                        },
                        {
                            rect: ['746px', '60px', '124', '36', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            display: 'none',
                            symbolName: 'btn_cerrar',
                            cursor: 'pointer',
                            id: 'btn_cerrar'
                        },
                        {
                            type: 'text',
                            rect: ['252px', '124px', '398px', '194px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 13px;\">dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 13px;\">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 13px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 13px;\">Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 13px;\">Cum sociis natoque penatibus et magnis dis parturient montes.</span></p>',
                            id: 'Text',
                            textStyle: ['', '', '13px', '', ''],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(140,140,140,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            transform: [[], ['-471'], [], ['0', '0']],
                            display: 'block',
                            rect: ['700px', '150px', '200px', '200px', 'auto', 'auto'],
                            id: 'circulo_personaje',
                            fill: ['rgba(0,0,0,0)', 'images/prueb_sabiasque11.png', '0px', '0px']
                        },
                        {
                            rect: ['626', '118', '267', '248', 'auto', 'auto'],
                            symbolName: 'marcos',
                            id: 'marcos',
                            opacity: '0',
                            clip: 'rect(247px 267px 248px 0px)',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1053px', '367px']
                        }
                    }
                },
                timeline: {
                    duration: 5831,
                    autoPlay: true,
                    data: [
                        [
                            "eid79",
                            "scaleY",
                            1080,
                            220,
                            "easeInQuart",
                            "${bombillo_efecto}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid97",
                            "scaleY",
                            1300,
                            130,
                            "easeInQuart",
                            "${bombillo_efecto}",
                            '1',
                            '1.07'
                        ],
                        [
                            "eid102",
                            "scaleY",
                            1430,
                            110,
                            "easeOutQuart",
                            "${bombillo_efecto}",
                            '1.07',
                            '0.95'
                        ],
                        [
                            "eid118",
                            "scaleY",
                            1540,
                            95,
                            "easeOutQuart",
                            "${bombillo_efecto}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid292",
                            "scaleY",
                            4605,
                            202,
                            "linear",
                            "${bombillo_efecto}",
                            '1',
                            '0.31609'
                        ],
                        [
                            "eid270",
                            "display",
                            0,
                            0,
                            "easeOutExpo",
                            "${cont_textos}",
                            'none',
                            'none'
                        ],
                        [
                            "eid264",
                            "display",
                            4455,
                            0,
                            "easeOutQuart",
                            "${cont_textos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid266",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${puntos_naranja}",
                            'none',
                            'none'
                        ],
                        [
                            "eid256",
                            "display",
                            3807,
                            0,
                            "linear",
                            "${puntos_naranja}",
                            'none',
                            'block'
                        ],
                        [
                            "eid310",
                            "location",
                            4927,
                            139,
                            "linear",
                            "${franja_naranja}",
                            [[287.64, 51, 0, 0, 0, 0,0],[363, 48, 0, 0, 0, 0,75.42]]
                        ],
                        [
                            "eid126",
                            "scaleY",
                            1955,
                            545,
                            "easeInQuart",
                            "${recuadro-titulo}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid135",
                            "scaleY",
                            2500,
                            135,
                            "easeInQuart",
                            "${recuadro-titulo}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid147",
                            "scaleY",
                            2635,
                            115,
                            "easeInQuart",
                            "${recuadro-titulo}",
                            '1.1',
                            '0.95'
                        ],
                        [
                            "eid151",
                            "scaleY",
                            2750,
                            110,
                            "easeInQuart",
                            "${recuadro-titulo}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid125",
                            "scaleX",
                            1955,
                            545,
                            "easeInQuart",
                            "${recuadro-titulo}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid134",
                            "scaleX",
                            2500,
                            135,
                            "easeInQuart",
                            "${recuadro-titulo}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid146",
                            "scaleX",
                            2635,
                            115,
                            "easeInQuart",
                            "${recuadro-titulo}",
                            '1.1',
                            '0.95'
                        ],
                        [
                            "eid150",
                            "scaleX",
                            2750,
                            110,
                            "easeInQuart",
                            "${recuadro-titulo}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid311",
                            "display",
                            0,
                            0,
                            "linear",
                            "${franja_naranja}",
                            'none',
                            'none'
                        ],
                        [
                            "eid304",
                            "display",
                            4927,
                            0,
                            "linear",
                            "${franja_naranja}",
                            'none',
                            'block'
                        ],
                        [
                            "eid297",
                            "height",
                            4605,
                            202,
                            "linear",
                            "${puntos_naranja}",
                            '24px',
                            '7px'
                        ],
                        [
                            "eid272",
                            "opacity",
                            4455,
                            472,
                            "linear",
                            "${cont_textos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid172",
                            "location",
                            3140,
                            110,
                            "easeInQuart",
                            "${globito}",
                            [[516.5, 194.5, 0, 0, 0, 0,0],[525.5, 194.5, 0, 0, 0, 0,9]]
                        ],
                        [
                            "eid160",
                            "location",
                            3250,
                            300,
                            "easeInQuart",
                            "${globito}",
                            [[525.5, 194.5, 0, 0, 0, 0,0],[224.25, 194.5, 0, 0, 0, 0,301.25]]
                        ],
                        [
                            "eid201",
                            "location",
                            3625,
                            108,
                            "easeOutQuart",
                            "${globito}",
                            [[224.25, 194.5, 0, 0, 0, 0,0],[298.5, 194.5, 0, 0, 0, 0,74.25]]
                        ],
                        [
                            "eid286",
                            "location",
                            4605,
                            202,
                            "linear",
                            "${globito}",
                            [[298.5, 194.5, 0, 0, 0, 0,0],[192.5, 78, 0, 0, 0, 0,157.51]]
                        ],
                        [
                            "eid331",
                            "scaleX",
                            5186,
                            144,
                            "linear",
                            "${circulo_personaje}",
                            '0',
                            '1'
                        ],
                        [
                            "eid343",
                            "scaleX",
                            5330,
                            54,
                            "linear",
                            "${circulo_personaje}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid347",
                            "scaleX",
                            5384,
                            44,
                            "linear",
                            "${circulo_personaje}",
                            '1.14999',
                            '0.92'
                        ],
                        [
                            "eid349",
                            "scaleX",
                            5428,
                            39,
                            "linear",
                            "${circulo_personaje}",
                            '0.92',
                            '1'
                        ],
                        [
                            "eid248",
                            "scaleY",
                            3697,
                            77,
                            "linear",
                            "${textosabiasque}",
                            '0',
                            '1'
                        ],
                        [
                            "eid250",
                            "scaleY",
                            3774,
                            53,
                            "linear",
                            "${textosabiasque}",
                            '1',
                            '1.11'
                        ],
                        [
                            "eid254",
                            "scaleY",
                            3827,
                            47,
                            "linear",
                            "${textosabiasque}",
                            '1.11',
                            '1'
                        ],
                        [
                            "eid40",
                            "scaleY",
                            565,
                            270,
                            "easeInQuart",
                            "${globito}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid44",
                            "scaleY",
                            835,
                            165,
                            "linear",
                            "${globito}",
                            '1',
                            '1.07'
                        ],
                        [
                            "eid48",
                            "scaleY",
                            1000,
                            80,
                            "linear",
                            "${globito}",
                            '1.07',
                            '0.93'
                        ],
                        [
                            "eid58",
                            "scaleY",
                            1080,
                            85,
                            "easeOutQuart",
                            "${globito}",
                            '0.93',
                            '1'
                        ],
                        [
                            "eid325",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid324",
                            "display",
                            5044,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid5919",
                            "opacity",
                            5467,
                            364,
                            "easeOutQuart",
                            "${marcos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid255",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textosabiasque}",
                            'none',
                            'none'
                        ],
                        [
                            "eid229",
                            "display",
                            3697,
                            0,
                            "linear",
                            "${textosabiasque}",
                            'none',
                            'block'
                        ],
                        [
                            "eid332",
                            "scaleY",
                            5186,
                            144,
                            "linear",
                            "${circulo_personaje}",
                            '0',
                            '1'
                        ],
                        [
                            "eid344",
                            "scaleY",
                            5330,
                            54,
                            "linear",
                            "${circulo_personaje}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid348",
                            "scaleY",
                            5384,
                            44,
                            "linear",
                            "${circulo_personaje}",
                            '1.14999',
                            '0.92'
                        ],
                        [
                            "eid350",
                            "scaleY",
                            5428,
                            39,
                            "linear",
                            "${circulo_personaje}",
                            '0.92',
                            '1'
                        ],
                        [
                            "eid301",
                            "height",
                            4605,
                            202,
                            "linear",
                            "${textosabiasque}",
                            '232px',
                            '74px'
                        ],
                        [
                            "eid91",
                            "rotateZ",
                            1080,
                            220,
                            "easeInQuart",
                            "${bombillo_efecto}",
                            '-70deg',
                            '0deg'
                        ],
                        [
                            "eid95",
                            "rotateZ",
                            1300,
                            130,
                            "easeInQuart",
                            "${bombillo_efecto}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid101",
                            "rotateZ",
                            1430,
                            110,
                            "easeOutQuart",
                            "${bombillo_efecto}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid39",
                            "scaleX",
                            565,
                            270,
                            "easeInQuart",
                            "${globito}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid43",
                            "scaleX",
                            835,
                            165,
                            "linear",
                            "${globito}",
                            '1',
                            '1.07'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            1000,
                            80,
                            "linear",
                            "${globito}",
                            '1.07',
                            '0.93'
                        ],
                        [
                            "eid57",
                            "scaleX",
                            1080,
                            85,
                            "easeOutQuart",
                            "${globito}",
                            '0.93',
                            '1'
                        ],
                        [
                            "eid175",
                            "scaleX",
                            3300,
                            155,
                            "easeInQuart",
                            "${globito}",
                            '1',
                            '1.22'
                        ],
                        [
                            "eid176",
                            "scaleX",
                            3455,
                            95,
                            "easeInQuart",
                            "${globito}",
                            '1.22',
                            '1'
                        ],
                        [
                            "eid294",
                            "height",
                            4605,
                            202,
                            "linear",
                            "${recuadro-titulo}",
                            '234px',
                            '74px'
                        ],
                        [
                            "eid335",
                            "rotateZ",
                            5186,
                            144,
                            "linear",
                            "${circulo_personaje}",
                            '-471deg',
                            '0deg'
                        ],
                        [
                            "eid352",
                            "rotateZ",
                            5330,
                            75,
                            "linear",
                            "${circulo_personaje}",
                            '0deg',
                            '18deg'
                        ],
                        [
                            "eid354",
                            "rotateZ",
                            5405,
                            41,
                            "linear",
                            "${circulo_personaje}",
                            '18deg',
                            '0deg'
                        ],
                        [
                            "eid288",
                            "width",
                            4605,
                            202,
                            "linear",
                            "${globito}",
                            '423px',
                            '131px'
                        ],
                        [
                            "eid131",
                            "rotateZ",
                            1955,
                            545,
                            "easeInQuart",
                            "${recuadro-titulo}",
                            '14deg',
                            '0deg'
                        ],
                        [
                            "eid328",
                            "display",
                            5186,
                            0,
                            "linear",
                            "${circulo_personaje}",
                            'block',
                            'block'
                        ],
                        [
                            "eid186",
                            "location",
                            3300,
                            66,
                            "easeInQuart",
                            "${bombillo_efecto}",
                            [[504, 157, 0, 0, 0, 0,0],[511, 157, 0, 0, 0, 0,7]]
                        ],
                        [
                            "eid187",
                            "location",
                            3366,
                            39,
                            "easeInQuart",
                            "${bombillo_efecto}",
                            [[511, 157, 0, 0, 0, 0,0],[504, 157, 0, 0, 0, 0,7]]
                        ],
                        [
                            "eid179",
                            "location",
                            3405,
                            145,
                            "easeInQuart",
                            "${bombillo_efecto}",
                            [[504, 157, 0, 0, 0, 0,0],[188.25, 157, 0, 0, 0, 0,315.75]]
                        ],
                        [
                            "eid181",
                            "location",
                            3550,
                            75,
                            "easeInQuart",
                            "${bombillo_efecto}",
                            [[188.25, 157, 0, 0, 0, 0,0],[206.75, 157, 0, 0, 0, 0,18.5]]
                        ],
                        [
                            "eid203",
                            "location",
                            3625,
                            108,
                            "easeOutQuart",
                            "${bombillo_efecto}",
                            [[206.75, 157, 0, 0, 0, 0,0],[279, 157, 0, 0, 0, 0,72.25]]
                        ],
                        [
                            "eid290",
                            "location",
                            4605,
                            202,
                            "linear",
                            "${bombillo_efecto}",
                            [[279, 157, 0, 0, 0, 0,0],[188, 62, 0, 0, 0, 0,131.55]]
                        ],
                        [
                            "eid73",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${bombillo_efecto}",
                            'none',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            1080,
                            0,
                            "easeOutQuart",
                            "${bombillo_efecto}",
                            'none',
                            'block'
                        ],
                        [
                            "eid338",
                            "left",
                            5186,
                            144,
                            "linear",
                            "${circulo_personaje}",
                            '733px',
                            '712px'
                        ],
                        [
                            "eid299",
                            "left",
                            4605,
                            202,
                            "linear",
                            "${textosabiasque}",
                            '469px',
                            '239px'
                        ],
                        [
                            "eid78",
                            "scaleX",
                            1080,
                            220,
                            "easeInQuart",
                            "${bombillo_efecto}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid96",
                            "scaleX",
                            1300,
                            130,
                            "easeInQuart",
                            "${bombillo_efecto}",
                            '1',
                            '1.07'
                        ],
                        [
                            "eid103",
                            "scaleX",
                            1430,
                            110,
                            "easeOutQuart",
                            "${bombillo_efecto}",
                            '1.07',
                            '0.95'
                        ],
                        [
                            "eid117",
                            "scaleX",
                            1540,
                            95,
                            "easeOutQuart",
                            "${bombillo_efecto}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid191",
                            "scaleX",
                            3455,
                            62,
                            "easeOutQuart",
                            "${bombillo_efecto}",
                            '1',
                            '1.28'
                        ],
                        [
                            "eid193",
                            "scaleX",
                            3517,
                            58,
                            "easeOutQuart",
                            "${bombillo_efecto}",
                            '1.28',
                            '1'
                        ],
                        [
                            "eid291",
                            "scaleX",
                            4605,
                            202,
                            "linear",
                            "${bombillo_efecto}",
                            '1',
                            '0.31609'
                        ],
                        [
                            "eid309",
                            "scaleX",
                            4927,
                            139,
                            "linear",
                            "${franja_naranja}",
                            '0.28',
                            '1'
                        ],
                        [
                            "eid295",
                            "width",
                            4605,
                            202,
                            "linear",
                            "${recuadro-titulo}",
                            '630px',
                            '199px'
                        ],
                        [
                            "eid259",
                            "opacity",
                            3807,
                            211,
                            "linear",
                            "${puntos_naranja}",
                            '0',
                            '1'
                        ],
                        [
                            "eid339",
                            "top",
                            5186,
                            144,
                            "linear",
                            "${circulo_personaje}",
                            '221px',
                            '142px'
                        ],
                        [
                            "eid263",
                            "location",
                            3895,
                            252,
                            "easeOutQuart",
                            "${puntos_naranja}",
                            [[324, 219.77, 0, 0, 0, 0,0],[504, 220, 0, 0, 0, 0,180]]
                        ],
                        [
                            "eid296",
                            "location",
                            4605,
                            202,
                            "linear",
                            "${puntos_naranja}",
                            [[504, 220, 0, 0, 0, 0,0],[252.5, 86.5, 0, 0, 0, 0,284.74]]
                        ],
                        [
                            "eid322",
                            "opacity",
                            5066,
                            137,
                            "linear",
                            "${btn_cerrar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid323",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_cerrar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid319",
                            "display",
                            5066,
                            0,
                            "linear",
                            "${btn_cerrar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "width",
                            4605,
                            202,
                            "linear",
                            "${puntos_naranja}",
                            '188px',
                            '59px'
                        ],
                        [
                            "eid5916",
                            "clip",
                            5467,
                            364,
                            "easeOutQuart",
                            "${marcos}",
                            [247,267,248,0],
                            [0,267,248,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid196",
                            "location",
                            3625,
                            108,
                            "easeOutQuart",
                            "${recuadro-titulo}",
                            [[512, 166, 0, 0, 0, 0,0],[581, 166, 0, 0, 0, 0,69]]
                        ],
                        [
                            "eid293",
                            "location",
                            4605,
                            202,
                            "linear",
                            "${recuadro-titulo}",
                            [[581, 166, 0, 0, 0, 0,0],[274.5, 68, 0, 0, 0, 0,321.79]]
                        ],
                        [
                            "eid287",
                            "height",
                            4605,
                            202,
                            "linear",
                            "${globito}",
                            '405px',
                            '126px'
                        ],
                        [
                            "eid3",
                            "top",
                            28,
                            500,
                            "easeOutExpo",
                            "${cuadro_negro}",
                            '367px',
                            '1px'
                        ],
                        [
                            "eid279",
                            "top",
                            4455,
                            242,
                            "linear",
                            "${cuadro_negro}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid302",
                            "width",
                            4605,
                            202,
                            "linear",
                            "${textosabiasque}",
                            '442px',
                            '140px'
                        ],
                        [
                            "eid122",
                            "display",
                            0,
                            0,
                            "easeInQuart",
                            "${recuadro-titulo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            1955,
                            0,
                            "easeInQuart",
                            "${recuadro-titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${globito}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            565,
                            0,
                            "linear",
                            "${globito}",
                            'none',
                            'block'
                        ],
                        [
                            "eid300",
                            "top",
                            4605,
                            202,
                            "linear",
                            "${textosabiasque}",
                            '48px',
                            '32px'
                        ],
                            [ "eid89", "trigger", 835, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bombillo_efecto}', [] ] ]
                    ]
                }
            },
            "bombillo_efecto": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bulb',
                            rect: ['0px', '0px', '188px', '286px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/grande01.png', '0px', '0px']
                        },
                        {
                            rect: ['58px', '37px', '74px', '91px', 'auto', 'auto'],
                            id: 'grande06',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/grande06.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '188px', '286px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid67",
                            "opacity",
                            209,
                            378,
                            "easeOutQuart",
                            "${grande06}",
                            '0',
                            '0.670000'
                        ],
                        [
                            "eid64",
                            "opacity",
                            587,
                            738,
                            "easeOutQuart",
                            "${grande06}",
                            '0.670000',
                            '0.19'
                        ],
                        [
                            "eid65",
                            "opacity",
                            1325,
                            675,
                            "easeOutQuart",
                            "${grande06}",
                            '0.19',
                            '0.67'
                        ],
                        [
                            "eid69",
                            "opacity",
                            2000,
                            500,
                            "easeOutQuart",
                            "${grande06}",
                            '0.670000',
                            '0'
                        ]
                    ]
                }
            },
            "btn_cerrar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '124px', '36px', 'auto', 'auto'],
                            id: 'prueb_sabiasque102',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/prueb_sabiasque102.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '124px', '36px', 'auto', 'auto'],
                            id: 'cerrar_neutro',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/prueb_sabiasque09.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '124px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 304,
                    autoPlay: true,
                    data: [
                        [
                            "eid2982",
                            "opacity",
                            108,
                            196,
                            "linear",
                            "${cerrar_neutro}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2983",
                            "display",
                            0,
                            0,
                            "linear",
                            "${prueb_sabiasque102}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2984",
                            "display",
                            108,
                            0,
                            "linear",
                            "${prueb_sabiasque102}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "marcos_anim": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'anim_brazo',
                            symbolName: 'anim_brazo',
                            rect: ['-48px', '36px', '80', '92', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'torzo1',
                            type: 'image',
                            rect: ['0px', '0px', '112px', '163px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/torzo2.png', '0px', '0px']
                        },
                        {
                            id: 'mov_manito',
                            symbolName: 'mov_manito',
                            rect: ['5', '140px', '64', '46', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'brazo-codo',
                            type: 'image',
                            rect: ['47px', '33px', '95px', '143px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brazo-codo.png', '0px', '0px']
                        },
                        {
                            id: 'mov_cabeza',
                            symbolName: 'mov_cabeza',
                            rect: ['18', '-57', '64', '66', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'cuello_chaqueta2',
                            rect: ['45px', '8px', '28px', '40px', 'auto', 'auto'],
                            transform: [[], ['-4'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/cuello_chaqueta.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '112px', '163px']
                        }
                    }
                },
                timeline: {
                    duration: 23929.206913431,
                    autoPlay: true,
                    data: [
                        [
                            "eid369",
                            "left",
                            5467,
                            0,
                            "linear",
                            "${anim_brazo}",
                            '-48px',
                            '-48px'
                        ],
                        [
                            "eid366",
                            "top",
                            5467,
                            0,
                            "linear",
                            "${anim_brazo}",
                            '36px',
                            '36px'
                        ]
                    ]
                }
            },
            "anim_brazo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-14'], [0, 0, 0], [1, 1, 1]],
                            id: 'antebrazo1',
                            type: 'image',
                            rect: ['6px', '-1px', '75px', '86px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/antebrazo1.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['17'], [0, 0, 0], [1, 1, 1]],
                            id: 'brazo1',
                            type: 'image',
                            rect: ['-27px', '16px', '79px', '74px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brazo1.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['11'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            display: 'block',
                            id: 'mano2-2',
                            opacity: '1',
                            rect: ['-39px', '-4px', '50px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mano2-2.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['14'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            display: 'none',
                            id: 'mano2',
                            opacity: '0',
                            rect: ['-53px', '10px', '55px', '33px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mano2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '92px']
                        }
                    }
                },
                timeline: {
                    duration: 12000,
                    autoPlay: true,
                    data: [
                        [
                            "eid698",
                            "rotateZ",
                            2404,
                            229,
                            "linear",
                            "${brazo1}",
                            '17deg',
                            '9deg'
                        ],
                        [
                            "eid701",
                            "rotateZ",
                            3190,
                            422,
                            "linear",
                            "${brazo1}",
                            '9deg',
                            '17deg'
                        ],
                        [
                            "eid703",
                            "rotateZ",
                            3612,
                            254,
                            "linear",
                            "${brazo1}",
                            '17deg',
                            '9deg'
                        ],
                        [
                            "eid1273",
                            "rotateZ",
                            9558,
                            242,
                            "linear",
                            "${brazo1}",
                            '9deg',
                            '28deg'
                        ],
                        [
                            "eid1344",
                            "rotateZ",
                            11835,
                            126,
                            "linear",
                            "${brazo1}",
                            '28deg',
                            '17deg'
                        ],
                        [
                            "eid756",
                            "location",
                            2404,
                            229,
                            "linear",
                            "${mano2-2}",
                            [[11.85, 11.5, 0, 0, 0, 0,0],[2.5, 19.5, 0, 0, 0, 0,12.31]]
                        ],
                        [
                            "eid761",
                            "location",
                            3190,
                            422,
                            "linear",
                            "${mano2-2}",
                            [[2.5, 19.5, 0, 0, 0, 0,0],[11.5, 11.5, 0, 0, 0, 0,12.04]]
                        ],
                        [
                            "eid763",
                            "location",
                            3612,
                            254,
                            "linear",
                            "${mano2-2}",
                            [[11.5, 11.5, 0, 0, 0, 0,0],[2.5, 21.5, 0, 0, 0, 0,13.45]]
                        ],
                        [
                            "eid977",
                            "location",
                            6851,
                            273,
                            "linear",
                            "${mano2-2}",
                            [[2.5, 21.5, 0, 0, 0, 0,0],[-4.5, 26.5, 0, 0, 0, 0,8.6]]
                        ],
                        [
                            "eid1034",
                            "location",
                            8196,
                            304,
                            "linear",
                            "${mano2-2}",
                            [[-4.5, 26.5, 0, 0, 0, 0,0],[3.5, 19.5, 0, 0, 0, 0,10.63]]
                        ],
                        [
                            "eid1368",
                            "location",
                            11961,
                            39,
                            "linear",
                            "${mano2-2}",
                            [[3.5, 19.5, 0, 0, 0, 0,0],[11.5, 11.5, 0, 0, 0, 0,11.31]]
                        ],
                        [
                            "eid1114",
                            "opacity",
                            8500,
                            69,
                            "linear",
                            "${mano2-2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1357",
                            "opacity",
                            11961,
                            39,
                            "linear",
                            "${mano2-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid594",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2-2}",
                            [101,50],
                            [101,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5950",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2-2}",
                            [101,50],
                            [101,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5951",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2-2}",
                            [101,50],
                            [101,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5952",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${mano2-2}",
                            [101,50],
                            [101,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5953",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2-2}",
                            [101,50],
                            [101,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5954",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2-2}",
                            [101,50],
                            [101,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1179",
                            "opacity",
                            8500,
                            60,
                            "linear",
                            "${mano2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1353",
                            "opacity",
                            11961,
                            39,
                            "linear",
                            "${mano2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1045",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mano2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1044",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${mano2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1276",
                            "location",
                            9558,
                            242,
                            "linear",
                            "${mano2}",
                            [[-0.2, 19.91, 0, 0, 0, 0,0],[20.8, 9.89, 0, 0, 0, 0,23.27]]
                        ],
                        [
                            "eid1349",
                            "location",
                            11835,
                            126,
                            "linear",
                            "${mano2}",
                            [[20.8, 9.9, 0, 0, 0, 0,0],[7.8, 14.89, 0, 0, 0, 0,13.92]]
                        ],
                        [
                            "eid1043",
                            "rotateZ",
                            8560,
                            250,
                            "linear",
                            "${mano2}",
                            '35deg',
                            '0deg'
                        ],
                        [
                            "eid1279",
                            "rotateZ",
                            9558,
                            242,
                            "linear",
                            "${mano2}",
                            '0deg',
                            '22deg'
                        ],
                        [
                            "eid1350",
                            "rotateZ",
                            11835,
                            126,
                            "linear",
                            "${mano2}",
                            '22deg',
                            '9deg'
                        ],
                        [
                            "eid1365",
                            "rotateZ",
                            11961,
                            39,
                            "linear",
                            "${mano2}",
                            '9deg',
                            '14deg'
                        ],
                        [
                            "eid592",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${antebrazo1}",
                            [78,12],
                            [78,12],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5955",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${antebrazo1}",
                            [78,12],
                            [78,12],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5956",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${antebrazo1}",
                            [78,12],
                            [78,12],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5957",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${antebrazo1}",
                            [78,12],
                            [78,12],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5958",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${antebrazo1}",
                            [78,12],
                            [78,12],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5959",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${antebrazo1}",
                            [78,12],
                            [78,12],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid593",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${brazo1}",
                            [80,81],
                            [80,81],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5960",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${brazo1}",
                            [80,81],
                            [80,81],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5961",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${brazo1}",
                            [80,81],
                            [80,81],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5962",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${brazo1}",
                            [80,81],
                            [80,81],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5963",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${brazo1}",
                            [80,81],
                            [80,81],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5964",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${brazo1}",
                            [80,81],
                            [80,81],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mano2-2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1115",
                            "display",
                            8569,
                            0,
                            "linear",
                            "${mano2-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1354",
                            "display",
                            11961,
                            0,
                            "linear",
                            "${mano2-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid758",
                            "rotateZ",
                            2750,
                            304,
                            "linear",
                            "${mano2-2}",
                            '11deg',
                            '28deg'
                        ],
                        [
                            "eid766",
                            "rotateZ",
                            3500,
                            366,
                            "linear",
                            "${mano2-2}",
                            '28deg',
                            '39deg'
                        ],
                        [
                            "eid870",
                            "rotateZ",
                            5680,
                            248,
                            "linear",
                            "${mano2-2}",
                            '39deg',
                            '19deg'
                        ],
                        [
                            "eid871",
                            "rotateZ",
                            5928,
                            204,
                            "linear",
                            "${mano2-2}",
                            '19deg',
                            '39deg'
                        ],
                        [
                            "eid974",
                            "rotateZ",
                            6851,
                            273,
                            "linear",
                            "${mano2-2}",
                            '39deg',
                            '74deg'
                        ],
                        [
                            "eid1031",
                            "rotateZ",
                            8196,
                            304,
                            "linear",
                            "${mano2-2}",
                            '74deg',
                            '18deg'
                        ],
                        [
                            "eid1363",
                            "rotateZ",
                            11961,
                            39,
                            "linear",
                            "${mano2-2}",
                            '18deg',
                            '11deg'
                        ],
                        [
                            "eid1039",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2}",
                            [96,30],
                            [96,30],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5965",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2}",
                            [96,30],
                            [96,30],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5966",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2}",
                            [96,30],
                            [96,30],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5967",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${mano2}",
                            [96,30],
                            [96,30],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5968",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2}",
                            [96,30],
                            [96,30],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5969",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2}",
                            [96,30],
                            [96,30],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "anim_cabeza": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cabeza',
                            rect: ['0px', '0px', '64px', '66px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cabeza.png', '0px', '0px']
                        },
                        {
                            id: 'lypsing_bocas',
                            rect: ['2', '55', '45', '30', 'auto', 'auto'],
                            symbolName: 'lypsing',
                            type: 'rect'
                        },
                        {
                            id: 'cejas_mov',
                            rect: ['-1px', '32', '14', '6', 'auto', 'auto'],
                            symbolName: 'cejas_mov',
                            type: 'rect'
                        },
                        {
                            id: 'mov_ojos',
                            rect: ['0', '38', '35', '8', 'auto', 'auto'],
                            symbolName: 'mov_ojos',
                            type: 'rect'
                        },
                        {
                            id: 'parpadeo',
                            rect: ['1px', '40', '32', '6', 'auto', 'auto'],
                            symbolName: 'parpadeo',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '64px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 23929.206913431,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "lypsing": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'boca_m',
                            type: 'image',
                            rect: ['0px', '-1px', '45px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/boca4.png', '0px', '0px']
                        },
                        {
                            rect: ['-2px', '-1px', '47px', '35px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'boca_ou',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/boca1.png', '0px', '0px']
                        },
                        {
                            rect: ['-1px', '-1px', '46px', '32px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'boca_dL',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/boca2.png', '0px', '0px']
                        },
                        {
                            rect: ['-2px', '-1px', '47px', '35px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'boca_A',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/boca3.png', '0px', '0px']
                        },
                        {
                            rect: ['-1px', '-1px', '46px', '32px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'boca_i',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/boca5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '45px', '30px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cejas_mov": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'cejas_comp',
                            rect: ['0', '-3px', '37', '8', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'ceja2',
                                rect: ['0px', '3px', '14px', '6px', 'auto', 'auto'],
                                transform: [[], ['-8'], [0, 0, 0], [1, 1, 1]],
                                fill: ['rgba(0,0,0,0)', 'images/ceja2.png', '0px', '0px']
                            },
                            {
                                id: 'cejagrande',
                                type: 'image',
                                rect: ['16px', '1px', '21px', '7px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/ceja12.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '14px', '6px']
                        }
                    }
                },
                timeline: {
                    duration: 23929.206913431,
                    autoPlay: true,
                    data: [
                        [
                            "eid404",
                            "top",
                            1892,
                            491,
                            "linear",
                            "${cejas_comp}",
                            '-1px',
                            '-3px'
                        ],
                        [
                            "eid431",
                            "top",
                            16250,
                            450,
                            "linear",
                            "${cejas_comp}",
                            '-3px',
                            '0px'
                        ],
                        [
                            "eid416",
                            "rotateZ",
                            7182,
                            500,
                            "linear",
                            "${cejagrande}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid421",
                            "rotateZ",
                            11328,
                            545,
                            "linear",
                            "${cejagrande}",
                            '9deg',
                            '0deg'
                        ],
                        [
                            "eid413",
                            "top",
                            7182,
                            500,
                            "linear",
                            "${cejagrande}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid422",
                            "top",
                            11328,
                            545,
                            "linear",
                            "${cejagrande}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid407",
                            "top",
                            7000,
                            444,
                            "linear",
                            "${ceja2}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid427",
                            "top",
                            11582,
                            568,
                            "linear",
                            "${ceja2}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid410",
                            "rotateZ",
                            7000,
                            444,
                            "linear",
                            "${ceja2}",
                            '0deg',
                            '-8deg'
                        ],
                        [
                            "eid428",
                            "rotateZ",
                            11582,
                            568,
                            "linear",
                            "${ceja2}",
                            '-8deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "mov_ojos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ojos',
                            type: 'image',
                            rect: ['0px', '0px', '35px', '8px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ojos.png', '0px', '0px']
                        },
                        {
                            id: 'mov_pupilas',
                            type: 'rect',
                            symbolName: 'mov_pupilas',
                            rect: ['24', '4', '4', '4', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '8px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "mov_pupilas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'ojitos',
                            rect: ['-18px', '-1px', '22', '4', 'auto', 'auto'],
                            c: [
                            {
                                id: 'pupila1',
                                type: 'image',
                                rect: ['18px', '0px', '4px', '4px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pupila2.png', '0px', '0px']
                            },
                            {
                                id: 'pupila2',
                                type: 'image',
                                rect: ['0px', '0px', '4px', '4px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pupila2.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '4px', '4px']
                        }
                    }
                },
                timeline: {
                    duration: 13500,
                    autoPlay: true,
                    data: [
                        [
                            "eid398",
                            "left",
                            2394,
                            661,
                            "linear",
                            "${ojitos}",
                            '-18px',
                            '-20px'
                        ],
                        [
                            "eid401",
                            "left",
                            7500,
                            518,
                            "linear",
                            "${ojitos}",
                            '-20px',
                            '-18px'
                        ]
                    ]
                }
            },
            "parpadeo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '32px', '6px', 'auto', 'auto'],
                            id: 'parpados',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/parpados.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '32px', '6px']
                        }
                    }
                },
                timeline: {
                    duration: 4371,
                    autoPlay: true,
                    data: [
                        [
                            "eid386",
                            "display",
                            0,
                            0,
                            "linear",
                            "${parpados}",
                            'none',
                            'none'
                        ],
                        [
                            "eid377",
                            "display",
                            684,
                            0,
                            "linear",
                            "${parpados}",
                            'none',
                            'block'
                        ],
                        [
                            "eid378",
                            "display",
                            883,
                            0,
                            "linear",
                            "${parpados}",
                            'block',
                            'none'
                        ],
                        [
                            "eid387",
                            "display",
                            1425,
                            0,
                            "linear",
                            "${parpados}",
                            'none',
                            'block'
                        ],
                        [
                            "eid388",
                            "display",
                            1616,
                            0,
                            "linear",
                            "${parpados}",
                            'block',
                            'none'
                        ],
                        [
                            "eid391",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${parpados}",
                            'none',
                            'block'
                        ],
                        [
                            "eid392",
                            "display",
                            3192,
                            0,
                            "linear",
                            "${parpados}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "mov_cabeza": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'anim_cabeza',
                            rect: ['0px', '0px', '64', '66', 'auto', 'auto'],
                            symbolName: 'anim_cabeza',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '64px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 23929.206913431,
                    autoPlay: true,
                    data: [
                        [
                            "eid449",
                            "rotateZ",
                            2500,
                            442,
                            "linear",
                            "${anim_cabeza}",
                            '0deg',
                            '3deg'
                        ],
                        [
                            "eid451",
                            "rotateZ",
                            2942,
                            3247,
                            "linear",
                            "${anim_cabeza}",
                            '3deg',
                            '4deg'
                        ],
                        [
                            "eid454",
                            "rotateZ",
                            9750,
                            368,
                            "linear",
                            "${anim_cabeza}",
                            '4deg',
                            '0deg'
                        ],
                        [
                            "eid463",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${anim_cabeza}",
                            [61,121],
                            [61,121],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5970",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${anim_cabeza}",
                            [61,121],
                            [61,121],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5971",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${anim_cabeza}",
                            [61,121],
                            [61,121],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5972",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${anim_cabeza}",
                            [61,121],
                            [61,121],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5973",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${anim_cabeza}",
                            [61,121],
                            [61,121],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5974",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${anim_cabeza}",
                            [61,121],
                            [61,121],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "mov_manito": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'mano1',
                            rect: ['0px', '0px', '64px', '46px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mano1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '64px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 17329,
                    autoPlay: true,
                    data: [
                        [
                            "eid503",
                            "rotateZ",
                            1877,
                            235,
                            "linear",
                            "${mano1}",
                            '0deg',
                            '-5deg'
                        ],
                        [
                            "eid505",
                            "rotateZ",
                            2112,
                            205,
                            "linear",
                            "${mano1}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid508",
                            "rotateZ",
                            6696,
                            304,
                            "linear",
                            "${mano1}",
                            '0deg',
                            '-11deg'
                        ],
                        [
                            "eid511",
                            "rotateZ",
                            15116,
                            384,
                            "linear",
                            "${mano1}",
                            '-11deg',
                            '0deg'
                        ],
                        [
                            "eid501",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano1}",
                            [86,21],
                            [86,21],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5975",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano1}",
                            [86,21],
                            [86,21],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5976",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano1}",
                            [86,21],
                            [86,21],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5977",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${mano1}",
                            [86,21],
                            [86,21],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5978",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano1}",
                            [86,21],
                            [86,21],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5979",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano1}",
                            [86,21],
                            [86,21],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "prueba": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-499px', '-151px', '141px', '141px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '141px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 2278,
                    autoPlay: true,
                    data: [
                        [
                            "eid2034",
                            "location",
                            0,
                            500,
                            "linear",
                            "${Ellipse}",
                            [[-428.03, -80.97, 0, 0, 0, 0,0],[-175.56, 95.97, 0, 0, 0, 0,308.3]]
                        ],
                        [
                            "eid2036",
                            "location",
                            500,
                            149,
                            "linear",
                            "${Ellipse}",
                            [[-175.56, 95.97, 0, 0, 0, 0,0],[-244.27, -7.06, -19.6, -33.73, -75.57, -130.06,123.88],[-272.56, -70.97, 0, 0, 0, 0,193.79]]
                        ],
                        [
                            "eid2038",
                            "location",
                            649,
                            193,
                            "linear",
                            "${Ellipse}",
                            [[-272.56, -70.97, 0, 0, 0, 0,0],[-390.15, 88.32, 0, 0, 0, 0,197.99]]
                        ],
                        [
                            "eid2040",
                            "location",
                            842,
                            131,
                            "linear",
                            "${Ellipse}",
                            [[-390.15, 88.32, 0, 0, 0, 0,0],[47.74, 120.85, 0, 0, 0, 0,439.1]]
                        ],
                        [
                            "eid2041",
                            "location",
                            973,
                            185,
                            "linear",
                            "${Ellipse}",
                            [[47.74, 120.85, 0, 0, 0, 0,0],[-0.75, -85.38, 0, 0, 0, 0,211.85]]
                        ],
                        [
                            "eid2042",
                            "location",
                            1158,
                            119,
                            "linear",
                            "${Ellipse}",
                            [[-0.75, -85.38, 0, 0, 0, 0,0],[121.56, -84.03, 0, 0, 0, 0,122.32]]
                        ],
                        [
                            "eid2043",
                            "location",
                            1277,
                            83,
                            "linear",
                            "${Ellipse}",
                            [[121.56, -84.03, 0, 0, 0, 0,0],[117.09, 9.62, 0, 0, 0, 0,93.76]]
                        ],
                        [
                            "eid2044",
                            "location",
                            1360,
                            140,
                            "linear",
                            "${Ellipse}",
                            [[117.09, 9.62, 0, 0, 0, 0,0],[-197.21, -100.79, 0, 0, 0, 0,333.13]]
                        ],
                        [
                            "eid2045",
                            "location",
                            1500,
                            164,
                            "linear",
                            "${Ellipse}",
                            [[-197.21, -100.79, 0, 0, 0, 0,0],[-416.62, 131.85, 0, 0, 0, 0,319.78]]
                        ],
                        [
                            "eid2046",
                            "location",
                            1664,
                            139,
                            "linear",
                            "${Ellipse}",
                            [[-416.62, 131.85, 0, 0, 0, 0,0],[0.48, 132.01, 615.41, -138.01, 586.26, -131.48,419.54],[384.97, -47.91, 0, 0, 0, 0,846.59]]
                        ],
                        [
                            "eid2048",
                            "location",
                            1803,
                            123,
                            "linear",
                            "${Ellipse}",
                            [[384.97, -47.91, 0, 0, 0, 0,0],[460.97, 117.21, 0, 0, 0, 0,181.77]]
                        ],
                        [
                            "eid2050",
                            "location",
                            1926,
                            74,
                            "linear",
                            "${Ellipse}",
                            [[460.97, 117.21, 0, 0, 0, 0,0],[211.03, -106.03, 0, 0, 0, 0,335.12]]
                        ],
                        [
                            "eid2051",
                            "location",
                            2000,
                            68,
                            "linear",
                            "${Ellipse}",
                            [[211.03, -106.03, 0, 0, 0, 0,0],[195.32, 124.38, 0, 0, 0, 0,230.94]]
                        ],
                        [
                            "eid2052",
                            "location",
                            2068,
                            91,
                            "linear",
                            "${Ellipse}",
                            [[195.32, 124.38, 0, 0, 0, 0,0],[-473.62, -128.44, 0, 0, 0, 0,715.12]]
                        ],
                        [
                            "eid2054",
                            "location",
                            2159,
                            119,
                            "linear",
                            "${Ellipse}",
                            [[-473.62, -128.44, 0, 0, 0, 0,0],[-427.91, -81.44, 0, 0, 0, 0,65.56]]
                        ]
                    ]
                }
            },
            "todo_boton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '165px', '66px', 'auto', 'auto'],
                            id: 'boton_metal',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_sabque-032.png', '0px', '0px']
                        },
                        {
                            rect: ['-3', '-1', '70', '68', 'auto', 'auto'],
                            id: 'efect_ilum',
                            symbolName: 'efect_ilum',
                            type: 'rect'
                        },
                        {
                            rect: ['2px', '3px', '60px', '60px', 'auto', 'auto'],
                            id: 'zona_icono',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_sabque-012.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '165px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 625,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "efect_ilum": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.07', '1.07']],
                            rect: ['0px', '0px', '70px', '68px', 'auto', 'auto'],
                            id: 'ilumin',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_sabque-022.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '68px']
                        }
                    }
                },
                timeline: {
                    duration: 625,
                    autoPlay: true,
                    labels: {
                        "repitis": 0
                    },
                    data: [
                        [
                            "eid3262",
                            "opacity",
                            0,
                            285,
                            "linear",
                            "${ilumin}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid3263",
                            "opacity",
                            285,
                            340,
                            "linear",
                            "${ilumin}",
                            '1',
                            '0.45'
                        ]
                    ]
                }
            },
            "marcos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '267px', '248px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("edge_sabiasque14_edgeActions.js");
})("EDGE-87802654");
