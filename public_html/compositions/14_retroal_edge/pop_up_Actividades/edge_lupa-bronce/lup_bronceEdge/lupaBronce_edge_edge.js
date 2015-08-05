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
            js + "jquery-1.11.3.min.js"
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
                            type: 'rect',
                            id: 'trans_popup',
                            display: 'none',
                            symbolName: 'trans_popup',
                            rect: ['0', '0', '678', '314', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']]
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
                            type: 'image',
                            rect: ['29px', '203px', '205px', '39px', 'auto', 'auto'],
                            id: 'sombra_lupa',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/sombra_lupa.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['20'], [], ['0', '0']],
                            id: 'lupa_admiracion',
                            display: 'none',
                            symbolName: 'lupa_admiracion',
                            opacity: '0',
                            rect: ['48', '31', '168', '160', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-252'], [], ['0.1', '0.1']],
                            id: 'loop_brillos',
                            symbolName: 'loop_brillos',
                            opacity: '0.1',
                            rect: ['70', '44', '99', '102', 'auto', 'auto']
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
                            "eid1307",
                            "display",
                            0,
                            0,
                            "easeInQuart",
                            "${sombra_lupa}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1310",
                            "display",
                            125,
                            0,
                            "easeInQuart",
                            "${sombra_lupa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1308",
                            "display",
                            0,
                            0,
                            "easeInQuart",
                            "${lupa_admiracion}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1309",
                            "display",
                            125,
                            0,
                            "easeInQuart",
                            "${lupa_admiracion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1303",
                            "opacity",
                            125,
                            453,
                            "easeInQuart",
                            "${lupa_admiracion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1339",
                            "scaleX",
                            578,
                            81,
                            "easeInQuart",
                            "${sombra_lupa}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid1340",
                            "scaleX",
                            659,
                            60,
                            "easeInQuart",
                            "${sombra_lupa}",
                            '1.1',
                            '0.9'
                        ],
                        [
                            "eid1343",
                            "scaleX",
                            719,
                            41,
                            "easeInQuart",
                            "${sombra_lupa}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1358",
                            "scaleY",
                            627,
                            180,
                            "easeInQuart",
                            "${loop_brillos}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid1301",
                            "scaleX",
                            125,
                            453,
                            "easeInQuart",
                            "${lupa_admiracion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1317",
                            "scaleX",
                            578,
                            81,
                            "linear",
                            "${lupa_admiracion}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid1321",
                            "scaleX",
                            659,
                            60,
                            "linear",
                            "${lupa_admiracion}",
                            '1.1',
                            '0.9'
                        ],
                        [
                            "eid1329",
                            "scaleX",
                            719,
                            41,
                            "linear",
                            "${lupa_admiracion}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1341",
                            "scaleY",
                            578,
                            81,
                            "easeInQuart",
                            "${sombra_lupa}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid1342",
                            "scaleY",
                            659,
                            60,
                            "easeInQuart",
                            "${sombra_lupa}",
                            '1.1',
                            '0.9'
                        ],
                        [
                            "eid1344",
                            "scaleY",
                            719,
                            41,
                            "easeInQuart",
                            "${sombra_lupa}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1314",
                            "rotateZ",
                            125,
                            352,
                            "easeInQuart",
                            "${lupa_admiracion}",
                            '20deg',
                            '0deg'
                        ],
                        [
                            "eid1302",
                            "scaleY",
                            125,
                            453,
                            "easeInQuart",
                            "${lupa_admiracion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1318",
                            "scaleY",
                            578,
                            81,
                            "linear",
                            "${lupa_admiracion}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid1322",
                            "scaleY",
                            659,
                            60,
                            "linear",
                            "${lupa_admiracion}",
                            '1.1',
                            '0.9'
                        ],
                        [
                            "eid1330",
                            "scaleY",
                            719,
                            41,
                            "linear",
                            "${lupa_admiracion}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1359",
                            "opacity",
                            627,
                            180,
                            "easeInQuart",
                            "${loop_brillos}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid1357",
                            "scaleX",
                            627,
                            180,
                            "easeInQuart",
                            "${loop_brillos}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid1306",
                            "opacity",
                            125,
                            453,
                            "easeInQuart",
                            "${sombra_lupa}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1360",
                            "rotateZ",
                            627,
                            180,
                            "easeInQuart",
                            "${loop_brillos}",
                            '-252deg',
                            '0deg'
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
                            rect: ['0px', '0px', '261px', '247px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'estrellas',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/estrellas.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '263px', '246px', 'auto', 'auto'],
                            transform: [[], ['270'], [], ['0.1', '0.1']],
                            type: 'image',
                            id: 'moneda',
                            opacity: '0',
                            display: 'none',
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
                            "eid1621",
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
                            "eid1622",
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
                            "eid1623",
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
                            "eid1624",
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
                            "eid1625",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            [49,65],
                            [49,65],
                            {valueTemplate: '@@0@@% @@1@@%'}
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
                            "eid1626",
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
                            "eid1627",
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
                            "eid1628",
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
                            "eid1629",
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
                            "eid1630",
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
                            rect: ['41px', '34px', '262px', '63px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            display: 'none',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Observa las&nbsp;</p><p style=\"margin: 0px;\">respuestas correctas</p><p style=\"margin: 0px;\"></p>',
                            align: 'center',
                            type: 'text'
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
                            id: 'img-btnVerResp',
                            opacity: '0',
                            cursor: 'pointer',
                            rect: ['107px', '127px', '130px', '42px', 'auto', 'auto'],
                            display: 'none',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img-btnVerResp.png', '0px', '0px']
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
                            "eid1194",
                            "display",
                            0,
                            0,
                            "linear",
                            "${img-btnVerResp}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1184",
                            "display",
                            808,
                            0,
                            "linear",
                            "${img-btnVerResp}",
                            'none',
                            'block'
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
                            "eid1191",
                            "scaleX",
                            808,
                            192,
                            "linear",
                            "${img-btnVerResp}",
                            '0.1',
                            '1'
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
                            "eid1192",
                            "scaleY",
                            808,
                            192,
                            "linear",
                            "${img-btnVerResp}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid1193",
                            "opacity",
                            808,
                            192,
                            "linear",
                            "${img-btnVerResp}",
                            '0',
                            '1'
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
                            rect: ['26px', '10px', '414px', '46px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [33, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​! Has finalizado la actividad !&nbsp;</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
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
                            rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                            id: 'cerrar',
                            type: 'image',
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
                            id: 'luces',
                            rect: ['0px', '0px', '120px', '123px', 'auto', 'auto'],
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
                            id: 'img_btnVolv',
                            rect: ['0px', '0px', '107px', '40px', 'auto', 'auto'],
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
            },
            "loop_brillos": {
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
                            id: 'estrellas2',
                            opacity: '1',
                            rect: ['0px', '0px', '99px', '102px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/estrellas2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '99px', '102px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    labels: {
                        "repetirloop": 500
                    },
                    data: [
                        [
                            "eid1224",
                            "scaleX",
                            500,
                            1500,
                            "linear",
                            "${estrellas2}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid1225",
                            "scaleX",
                            2000,
                            1500,
                            "linear",
                            "${estrellas2}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid1226",
                            "scaleY",
                            500,
                            1500,
                            "linear",
                            "${estrellas2}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid1227",
                            "scaleY",
                            2000,
                            1500,
                            "linear",
                            "${estrellas2}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid1228",
                            "opacity",
                            500,
                            1500,
                            "linear",
                            "${estrellas2}",
                            '1',
                            '0.7'
                        ],
                        [
                            "eid1229",
                            "opacity",
                            2000,
                            1500,
                            "linear",
                            "${estrellas2}",
                            '0.7',
                            '1'
                        ]
                    ]
                }
            },
            "lupa_admiracion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '168px', '160px', 'auto', 'auto'],
                            id: 'lupita',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lupita.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            rect: ['28px', '26px', '75px', '67px', 'auto', 'auto'],
                            id: 'sig-admiracion',
                            opacity: '0.2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sig-admiracion.png', '0px', '0px']
                        },
                        {
                            rect: ['65px', '0px', '64px', '128px', 'auto', 'auto'],
                            id: 'opacidad',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opacidad.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '168px', '160px']
                        }
                    }
                },
                timeline: {
                    duration: 1271,
                    autoPlay: true,
                    data: [
                        [
                            "eid1258",
                            "opacity",
                            500,
                            294,
                            "easeOutQuad",
                            "${sig-admiracion}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid1256",
                            "scaleX",
                            500,
                            294,
                            "easeOutQuad",
                            "${sig-admiracion}",
                            '0.05',
                            '1'
                        ],
                        [
                            "eid1261",
                            "scaleX",
                            794,
                            149,
                            "linear",
                            "${sig-admiracion}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid1265",
                            "scaleX",
                            943,
                            125,
                            "linear",
                            "${sig-admiracion}",
                            '1.2',
                            '0.9'
                        ],
                        [
                            "eid1269",
                            "scaleX",
                            1068,
                            87,
                            "linear",
                            "${sig-admiracion}",
                            '0.9',
                            '1.07'
                        ],
                        [
                            "eid1273",
                            "scaleX",
                            1155,
                            68,
                            "linear",
                            "${sig-admiracion}",
                            '1.07',
                            '0.95'
                        ],
                        [
                            "eid1277",
                            "scaleX",
                            1223,
                            48,
                            "linear",
                            "${sig-admiracion}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid1257",
                            "scaleY",
                            500,
                            294,
                            "easeOutQuad",
                            "${sig-admiracion}",
                            '0.05',
                            '1'
                        ],
                        [
                            "eid1262",
                            "scaleY",
                            794,
                            149,
                            "linear",
                            "${sig-admiracion}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid1266",
                            "scaleY",
                            943,
                            125,
                            "linear",
                            "${sig-admiracion}",
                            '1.2',
                            '0.9'
                        ],
                        [
                            "eid1270",
                            "scaleY",
                            1068,
                            87,
                            "linear",
                            "${sig-admiracion}",
                            '0.9',
                            '1.07'
                        ],
                        [
                            "eid1274",
                            "scaleY",
                            1155,
                            68,
                            "linear",
                            "${sig-admiracion}",
                            '1.07',
                            '0.95'
                        ],
                        [
                            "eid1278",
                            "scaleY",
                            1223,
                            48,
                            "linear",
                            "${sig-admiracion}",
                            '0.95',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lupaBronce_edge_edgeActions.js");
})("EDGE-29934699");
