/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'muybien_cont',
                            symbolName: 'muybien_cont',
                            type: 'rect',
                            rect: ['0', '0', '678', '314', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '678px', '314px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5050,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "muybien_cont": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'trans_popup',
                            display: 'none',
                            symbolName: 'trans_popup',
                            rect: ['0', '0', '678', '314', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '678px', '314px']
                        }
                    }
                },
                timeline: {
                    duration: 5050,
                    autoPlay: true,
                    data: [
                        [
                            "eid152",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${trans_popup}",
                            'none',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            60,
                            0,
                            "easeOutQuart",
                            "${trans_popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "scaleX",
                            60,
                            690,
                            "easeOutQuart",
                            "${trans_popup}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "scaleY",
                            60,
                            690,
                            "easeOutQuart",
                            "${trans_popup}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "anim_medalla": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-202'], [], ['0', '0']],
                            rect: ['39px', '23px', '186px', '196px', 'auto', 'auto'],
                            id: 'brillo_medalla1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Dise%C3%B1o_Retroalimentaciones-17.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-347'], [], ['0', '0']],
                            rect: ['54px', '43px', '155px', '156px', 'auto', 'auto'],
                            id: 'manito_bien',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito_bien.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sombra',
                            opacity: '0',
                            rect: ['29px', '210px', '206px', '40px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sombra.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['176'], [], ['0.02', '0.02']],
                            rect: ['77', '60', '120', '123', 'auto', 'auto'],
                            id: 'brillos_mov',
                            symbolName: 'brillos_mov',
                            opacity: '0',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '263px', '253px']
                        }
                    }
                },
                timeline: {
                    duration: 5050,
                    autoPlay: true,
                    data: [
                        [
                            "eid957",
                            "rotateZ",
                            922,
                            328,
                            "easeOutQuart",
                            "${brillos_mov}",
                            '176deg',
                            '0deg'
                        ],
                        [
                            "eid870",
                            "scaleY",
                            78,
                            422,
                            "easeOutQuart",
                            "${brillo_medalla1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid895",
                            "opacity",
                            379,
                            424,
                            "linear",
                            "${manito_bien}",
                            '0',
                            '1'
                        ],
                        [
                            "eid915",
                            "opacity",
                            78,
                            422,
                            "linear",
                            "${sombra}",
                            '0',
                            '1'
                        ],
                        [
                            "eid874",
                            "rotateZ",
                            78,
                            422,
                            "easeOutQuart",
                            "${brillo_medalla1}",
                            '-202deg',
                            '0deg'
                        ],
                        [
                            "eid869",
                            "scaleX",
                            78,
                            422,
                            "easeOutQuart",
                            "${brillo_medalla1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid954",
                            "opacity",
                            922,
                            328,
                            "easeOutQuart",
                            "${brillos_mov}",
                            '0',
                            '1'
                        ],
                        [
                            "eid953",
                            "scaleY",
                            922,
                            328,
                            "easeOutQuart",
                            "${brillos_mov}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid893",
                            "scaleX",
                            379,
                            424,
                            "linear",
                            "${manito_bien}",
                            '0',
                            '1'
                        ],
                        [
                            "eid903",
                            "scaleX",
                            803,
                            173,
                            "linear",
                            "${manito_bien}",
                            '1',
                            '1.13999'
                        ],
                        [
                            "eid904",
                            "scaleX",
                            976,
                            98,
                            "linear",
                            "${manito_bien}",
                            '1.13999',
                            '0.9'
                        ],
                        [
                            "eid907",
                            "scaleX",
                            1074,
                            75,
                            "linear",
                            "${manito_bien}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid894",
                            "scaleY",
                            379,
                            424,
                            "linear",
                            "${manito_bien}",
                            '0',
                            '1'
                        ],
                        [
                            "eid905",
                            "scaleY",
                            803,
                            173,
                            "linear",
                            "${manito_bien}",
                            '1',
                            '1.13999'
                        ],
                        [
                            "eid906",
                            "scaleY",
                            976,
                            98,
                            "linear",
                            "${manito_bien}",
                            '1.13999',
                            '0.9'
                        ],
                        [
                            "eid908",
                            "scaleY",
                            1074,
                            75,
                            "linear",
                            "${manito_bien}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid896",
                            "rotateZ",
                            379,
                            424,
                            "linear",
                            "${manito_bien}",
                            '-347deg',
                            '0deg'
                        ],
                        [
                            "eid910",
                            "rotateZ",
                            803,
                            119,
                            "linear",
                            "${manito_bien}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid912",
                            "rotateZ",
                            922,
                            104,
                            "linear",
                            "${manito_bien}",
                            '9deg',
                            '0deg'
                        ],
                        [
                            "eid952",
                            "scaleX",
                            922,
                            328,
                            "easeOutQuart",
                            "${brillos_mov}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid871",
                            "opacity",
                            78,
                            422,
                            "easeOutQuart",
                            "${brillo_medalla1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "mov_perp_trofeo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            display: 'none',
                            id: 'estrellas',
                            opacity: '0',
                            rect: ['0px', '0px', '261px', '247px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/estrellas.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['270'], [], ['0.1', '0.1']],
                            type: 'image',
                            display: 'none',
                            id: 'moneda',
                            opacity: '0',
                            rect: ['0px', '0px', '263px', '246px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/moneda.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['78'], [], ['0.1', '0.1']],
                            rect: ['1', '-7px', '260', '247', 'auto', 'auto'],
                            id: 'brillitos',
                            symbolName: 'brillitos',
                            opacity: '0.1',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '263px', '253px']
                        }
                    }
                },
                timeline: {
                    duration: 3625,
                    autoPlay: true,
                    data: [
                        [
                            "eid42",
                            "rotateZ",
                            660,
                            470,
                            "easeOutQuart",
                            "${moneda}",
                            '270deg',
                            '0deg'
                        ],
                        [
                            "eid18",
                            "scaleX",
                            195,
                            370,
                            "linear",
                            "${estrellas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "scaleX",
                            565,
                            230,
                            "linear",
                            "${estrellas}",
                            '1',
                            '1.08'
                        ],
                        [
                            "eid23",
                            "scaleX",
                            795,
                            150,
                            "easeOutQuart",
                            "${estrellas}",
                            '1.08',
                            '0.93'
                        ],
                        [
                            "eid26",
                            "scaleX",
                            945,
                            115,
                            "easeOutQuart",
                            "${estrellas}",
                            '0.93',
                            '1'
                        ],
                        [
                            "eid800",
                            "rotateZ",
                            945,
                            305,
                            "easeOutQuart",
                            "${brillitos}",
                            '78deg',
                            '0deg'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            195,
                            0,
                            "linear",
                            "${estrellas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "scaleY",
                            945,
                            410,
                            "easeOutQuart",
                            "${brillitos}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid19",
                            "scaleY",
                            195,
                            370,
                            "linear",
                            "${estrellas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            565,
                            230,
                            "linear",
                            "${estrellas}",
                            '1',
                            '1.08'
                        ],
                        [
                            "eid25",
                            "scaleY",
                            795,
                            150,
                            "easeOutQuart",
                            "${estrellas}",
                            '1.08',
                            '0.93'
                        ],
                        [
                            "eid27",
                            "scaleY",
                            945,
                            115,
                            "easeOutQuart",
                            "${estrellas}",
                            '0.93',
                            '1'
                        ],
                        [
                            "eid40",
                            "scaleX",
                            660,
                            470,
                            "easeOutQuart",
                            "${moneda}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            660,
                            0,
                            "linear",
                            "${moneda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid60",
                            "opacity",
                            945,
                            410,
                            "easeOutQuart",
                            "${brillitos}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid4",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            [50,77],
                            [50,77],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1144",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            [50,77],
                            [50,77],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1145",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            [50,77],
                            [50,77],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1146",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            [50,77],
                            [50,77],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1147",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            [50,77],
                            [50,77],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1148",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            [50,77],
                            [50,77],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41",
                            "scaleY",
                            660,
                            470,
                            "easeOutQuart",
                            "${moneda}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            195,
                            370,
                            "linear",
                            "${estrellas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            660,
                            470,
                            "easeOutQuart",
                            "${moneda}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "scaleX",
                            945,
                            410,
                            "easeOutQuart",
                            "${brillitos}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid33",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            [49,65],
                            [49,65],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1149",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            [49,65],
                            [49,65],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1150",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            [49,65],
                            [49,65],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1151",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            [49,65],
                            [49,65],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1152",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            [49,65],
                            [49,65],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1153",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            [49,65],
                            [49,65],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "brillitos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'brillos',
                            type: 'image',
                            rect: ['0px', '0px', '260px', '247px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brillos.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '260px', '247px']
                        }
                    }
                },
                timeline: {
                    duration: 3625,
                    autoPlay: true,
                    labels: {
                        "repitis": 690
                    },
                    data: [
                        [
                            "eid67",
                            "scaleX",
                            690,
                            1480,
                            "linear",
                            "${brillos}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid68",
                            "scaleX",
                            2170,
                            1455,
                            "linear",
                            "${brillos}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid69",
                            "scaleY",
                            690,
                            1480,
                            "linear",
                            "${brillos}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid70",
                            "scaleY",
                            2170,
                            1455,
                            "linear",
                            "${brillos}",
                            '0.8',
                            '1'
                        ]
                    ]
                }
            },
            "recuad_texto": {
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
                            id: 'Recuadro',
                            rect: ['0px', '0px', '344px', '203px', 'auto', 'auto'],
                            clip: 'rect(0px 172px 203px 174px)',
                            fill: ['rgba(0,0,0,0)', 'images/Recuadro.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            display: 'none',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Verifica que tus&nbsp;</p><p style=\"margin: 0px;\">respuestas sean correctas</p>',
                            align: 'center',
                            rect: ['41px', '34px', '262px', '63px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            rect: ['44px', '110px', '256px', '2px', 'auto', 'auto'],
                            display: 'none',
                            id: 'linea_divis',
                            clip: 'rect(0px 256px 2px 256px)',
                            fill: ['rgba(0,0,0,0)', 'images/linea_divis.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'btn_volv-int',
                            opacity: '0',
                            cursor: 'pointer',
                            rect: ['118', '128', '107', '40', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'btn_volv-int',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '344px', '203px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1081",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${btn_volv-int}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1080",
                            "display",
                            808,
                            0,
                            "easeOutQuart",
                            "${btn_volv-int}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1078",
                            "scaleX",
                            808,
                            192,
                            "easeOutQuart",
                            "${btn_volv-int}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid1079",
                            "scaleY",
                            808,
                            192,
                            "easeOutQuart",
                            "${btn_volv-int}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid130",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid129",
                            "display",
                            1000,
                            0,
                            "easeOutQuart",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1070",
                            "clip",
                            588,
                            412,
                            "easeOutQuart",
                            "${linea_divis}",
                            [0,256,2,256],
                            [0,256,2,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1083",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${linea_divis}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1082",
                            "display",
                            588,
                            0,
                            "easeOutQuart",
                            "${linea_divis}",
                            'none',
                            'block'
                        ],
                        [
                            "eid841",
                            "font-size",
                            1000,
                            0,
                            "easeOutQuart",
                            "${Text}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid128",
                            "clip",
                            0,
                            1000,
                            "easeOutQuart",
                            "${Recuadro}",
                            [0,172,203,174],
                            [0,344,203,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1073",
                            "opacity",
                            808,
                            192,
                            "easeOutQuart",
                            "${btn_volv-int}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "trans_popup": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '678px', '314px', 'auto', 'auto'],
                            id: 'ventana',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ventana.png', '0px', '0px']
                        },
                        {
                            rect: ['304px', '81px', '344', '203', 'auto', 'auto'],
                            id: 'recuad_texto',
                            symbolName: 'recuad_texto',
                            type: 'rect'
                        },
                        {
                            rect: ['20px', '61px', '263', '253', 'auto', 'auto'],
                            id: 'anim_medalla',
                            symbolName: 'anim_medalla',
                            type: 'rect'
                        },
                        {
                            rect: ['633', '15', '30', '30', 'auto', 'auto'],
                            id: 'cont_btn_cerrar',
                            symbolName: 'cont_btn_cerrar',
                            type: 'rect'
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [33, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​! Algo no está bien ¡</p>',
                            rect: ['26px', '10px', '344px', '46px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '678px', '314px']
                        }
                    }
                },
                timeline: {
                    duration: 5050,
                    autoPlay: true,
                    data: [
                            [ "eid285", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${recuad_texto}', [] ] ],
                            [ "eid286", "trigger", 250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${recuad_texto}', [] ] ]
                    ]
                }
            },
            "cont_btn_cerrar": {
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
                            id: 'cerrar',
                            rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '30px', '30px']
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
            "brillos_mov": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '120px', '123px', 'auto', 'auto'],
                            id: 'luces',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/luces.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '123px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "Etiqueta 1": 397
                    },
                    data: [
                        [
                            "eid924",
                            "scaleY",
                            397,
                            1353,
                            "linear",
                            "${luces}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid925",
                            "scaleY",
                            1750,
                            1250,
                            "linear",
                            "${luces}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid922",
                            "scaleX",
                            397,
                            1353,
                            "linear",
                            "${luces}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid923",
                            "scaleX",
                            1750,
                            1250,
                            "linear",
                            "${luces}",
                            '0.8',
                            '1'
                        ]
                    ]
                }
            },
            "btn_volv-int": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '107px', '40px', 'auto', 'auto'],
                            id: 'img_btnVolv',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_btnVolv.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '107px', '40px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("med-plata_edge_edgeActions.js");
})("EDGE-29934699");
