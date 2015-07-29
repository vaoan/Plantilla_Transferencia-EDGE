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
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo_plantilla',
                            type: 'image',
                            rect: ['0px', '0px', '1080px', '604px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo_plantilla.png",'0px','0px']
                        },
                        {
                            id: 'cont_blancopac',
                            type: 'image',
                            rect: ['8px', '50px', '1063px', '442px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cont_blancopac.png",'0px','0px']
                        },
                        {
                            id: 'home',
                            symbolName: 'home',
                            type: 'rect',
                            rect: ['29px', '530px', '53', '53', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'libros',
                            symbolName: 'libros',
                            type: 'rect',
                            rect: ['186px', '539px', '35', '35', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'libroA2',
                            symbolName: 'libroA',
                            type: 'rect',
                            rect: ['223px', '538px', '35', '35', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'mapa',
                            symbolName: 'mapa',
                            type: 'rect',
                            rect: ['264px', '540px', '35', '35', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'leyendo',
                            symbolName: 'leyendo',
                            type: 'rect',
                            rect: ['468px', '522px', '54', '53', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'papelera',
                            symbolName: 'papelera',
                            type: 'rect',
                            rect: ['592px', '523px', '52', '52', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'docum',
                            symbolName: 'docum',
                            type: 'rect',
                            rect: ['711px', '523px', '52', '52', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'hablar',
                            symbolName: 'hablar',
                            type: 'rect',
                            rect: ['770px', '534px', '52', '52', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'sol',
                            symbolName: 'sol',
                            type: 'rect',
                            rect: ['532px', '534px', '52', '52', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pensar',
                            symbolName: 'pensar',
                            type: 'rect',
                            rect: ['650px', '535px', '54', '53', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pdf',
                            symbolName: 'pdf',
                            type: 'rect',
                            rect: ['1013px', '540px', '35', '35', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'contened_apertura',
                            symbolName: 'contened_apertura',
                            type: 'rect',
                            rect: ['24', '71', '1032', '394', 'auto', 'auto']
                        },
                        {
                            id: 'contened_contextual',
                            symbolName: 'contened_contextual',
                            type: 'rect',
                            rect: ['24', '71', '1032', '394', 'auto', 'auto']
                        },
                        {
                            id: 'contened_contenidos',
                            symbolName: 'contened_contenidos',
                            type: 'rect',
                            rect: ['24', '71', '1032', '394', 'auto', 'auto']
                        },
                        {
                            id: 'contenedor_recordemos',
                            symbolName: 'contenedor_recordemos',
                            type: 'rect',
                            rect: ['24', '71', '1032', '394', 'auto', 'auto']
                        },
                        {
                            id: 'contend_preguntas',
                            symbolName: 'contend_preguntas',
                            type: 'rect',
                            rect: ['24', '71', '1032', '394', 'auto', 'auto']
                        },
                        {
                            id: 'contened_cierre',
                            symbolName: 'contened_cierre',
                            type: 'rect',
                            rect: ['24', '71', '1032', '394', 'auto', 'auto']
                        },
                        {
                            id: 'contened_PDF',
                            symbolName: 'contened_PDF',
                            type: 'rect',
                            rect: ['24', '71', '1032', '394', 'auto', 'auto']
                        },
                        {
                            id: 'contened_biblio',
                            symbolName: 'contened_biblio',
                            type: 'rect',
                            rect: ['29', '71', '1027', '394', 'auto', 'auto']
                        },
                        {
                            id: 'contened_glos',
                            symbolName: 'contened_glos',
                            type: 'rect',
                            rect: ['29', '71', '1027', '394', 'auto', 'auto']
                        },
                        {
                            id: 'contened_mapa',
                            symbolName: 'contened_mapa',
                            type: 'rect',
                            rect: ['29px', '71', '1032', '394', 'auto', 'auto']
                        },
                        {
                            id: 'contened_home',
                            symbolName: 'contened_home',
                            type: 'rect',
                            rect: ['29', '69', '1032', '394', 'auto', 'auto']
                        },
                        {
                            id: 'barra_sena',
                            type: 'image',
                            rect: ['8px', '10px', '1063px', '59px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"barra_sena.png",'0px','0px']
                        },
                        {
                            id: 'barra_herramientas',
                            symbolName: 'barra_herramientas',
                            type: 'rect',
                            rect: ['1040', '47', '31', '192', 'auto', 'auto']
                        },
                        {
                            id: 'btn_menu-desp',
                            type: 'image',
                            rect: ['1040px', '10px', '31px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"btn_menu-desp.png",'0px','0px']
                        },
                        {
                            id: 'contenedor_popup',
                            symbolName: 'contenedor_popup',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1080', '600', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1080px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid326",
                            "display",
                            0,
                            0,
                            "linear",
                            "${contenedor_popup}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "home": {
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
                            id: 'borde_btnHome',
                            rect: ['-4px', '-3px', '59px', '59px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/borde_btnHome.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_home',
                            rect: ['0px', '0px', '53px', '53px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_home.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'tool_Home',
                            symbolName: 'tool_Home',
                            rect: ['-31', '-30', '116', '35', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '53px']
                        }
                    }
                },
                timeline: {
                    duration: 305,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "libros": {
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
                            id: 'borde_btnsVerdes',
                            rect: ['-2px', '-2px', '39px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/borde_btnsVerdes.png', '0px', '0px']
                        },
                        {
                            rect: ['-2px', '-2px', '39px', '39px', 'auto', 'auto'],
                            id: 'estado_bordelibro',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/estado_borde8.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_libros',
                            rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_libros.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'tool_libros',
                            symbolName: 'tool_libros',
                            rect: ['-40px', '-35px', '116', '35', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 305,
                    autoPlay: true,
                    data: [
                        [
                            "eid295",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${estado_bordelibro}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "libroA": {
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
                            id: 'borde_btnsVerdes2',
                            rect: ['0', '0', '39px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/borde_btnsVerdes2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0', '39px', '39px', 'auto', 'auto'],
                            id: 'estado_bordeglos',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/estado_borde9.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_libroA3',
                            rect: ['2px', '2px', '35px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_libroA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'tooltip_librosA',
                            symbolName: 'tooltip_librosA',
                            rect: ['-38px', '-29px', '116', '35', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 310,
                    autoPlay: true,
                    data: [
                        [
                            "eid304",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${estado_bordeglos}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "mapa": {
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
                            id: 'borde_btnsVerdes32',
                            rect: ['-2px', '-2px', '39px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/borde_btnsVerdes3.png', '0px', '0px']
                        },
                        {
                            rect: ['-2px', '-2px', '39px', '39px', 'auto', 'auto'],
                            id: 'estado_bordemapa',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/estado_borde10.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_mapaconc',
                            rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_mapaconc.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'tooltip_mapa',
                            symbolName: 'tooltip_mapa',
                            rect: ['-41px', '-35px', '116', '35', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 295,
                    autoPlay: true,
                    data: [
                        [
                            "eid314",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${estado_bordemapa}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "leyendo": {
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
                            id: 'borde_btnAbajo',
                            rect: ['0px', '-3px', '60px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/borde_btnAbajo.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '-2px', '60px', '60px', 'auto', 'auto'],
                            id: 'estado_borde',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/estado_borde.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_leyendo',
                            rect: ['3px', '1px', '54px', '53px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_leyendo.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'tool_btn1',
                            symbolName: 'tool_btn1',
                            rect: ['-28', '-27', '116', '35', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '54px', '53px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid241",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${estado_borde}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "sol": {
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
                            id: 'borde_btnAbajo2',
                            rect: ['-4px', '-4px', '60px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/borde_btnAbajo2.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '-4px', '60px', '60px', 'auto', 'auto'],
                            id: 'estado_borde2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/estado_borde2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_sol',
                            rect: ['-1px', '0px', '52px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_sol.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'tooltip_btn2',
                            symbolName: 'tooltip_btn2',
                            rect: ['-32', '-34px', '116', '35', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '52px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 325,
                    autoPlay: true,
                    data: [
                        [
                            "eid250",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${estado_borde2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "papelera": {
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
                            id: 'borde_btnAbajo4',
                            rect: ['-4px', '-4px', '60px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/borde_btnAbajo4.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '-4px', '60px', '60px', 'auto', 'auto'],
                            id: 'estado_borde3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/estado_borde3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_papelera',
                            rect: ['0px', '0px', '52px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_papelera.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'tootip_btn3',
                            symbolName: 'tootip_btn3',
                            rect: ['-32px', '-31px', '116', '35', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '52px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 310,
                    autoPlay: true,
                    data: [
                        [
                            "eid259",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${estado_borde3}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "pensar": {
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
                            id: 'borde_btnAbajo5',
                            rect: ['-3px', '-5px', '60px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/borde_btnAbajo5.png', '0px', '0px']
                        },
                        {
                            rect: ['-3px', '-5px', '60px', '60px', 'auto', 'auto'],
                            id: 'estado_borde4',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/estado_borde4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_pensar',
                            rect: ['0px', '-1px', '54px', '53px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_pensar.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'tooltip_btn4',
                            symbolName: 'tooltip_btn4',
                            rect: ['-31', '-35px', '116', '35', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '54px', '53px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: true,
                    data: [
                        [
                            "eid268",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${estado_borde4}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "docum": {
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
                            id: 'borde_btnAbajo6',
                            rect: ['-4px', '-4px', '60px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/borde_btnAbajo6.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '-4px', '60px', '60px', 'auto', 'auto'],
                            id: 'estado_borde5',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/estado_borde5.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_doc',
                            rect: ['0px', '0px', '52px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_doc.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'tooltip_bnt5',
                            symbolName: 'tooltip_bnt5',
                            rect: ['-32px', '-31px', '116', '35', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '52px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 295,
                    autoPlay: true,
                    data: [
                        [
                            "eid269",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${estado_borde5}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "hablar": {
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
                            id: 'borde_btnAbajo7',
                            rect: ['-4px', '-4px', '60px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/borde_btnAbajo7.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '-4px', '60px', '60px', 'auto', 'auto'],
                            id: 'estado_borde6',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/estado_borde6.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_hablar',
                            rect: ['0px', '0px', '52px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_hablar.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'tooltip_btn6',
                            symbolName: 'tooltip_btn6',
                            rect: ['-32px', '-33px', '116', '35', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '52px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 295,
                    autoPlay: true,
                    data: [
                        [
                            "eid286",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${estado_borde6}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "pdf": {
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
                            id: 'borde_btnPDF',
                            rect: ['-1px', '-2px', '39px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/borde_btnPDF.png', '0px', '0px']
                        },
                        {
                            rect: ['-1px', '-2px', '39px', '39px', 'auto', 'auto'],
                            id: 'estado_bordePDF',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/estado_borde7.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_pdf',
                            rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_pdf.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'tooltip_PDF',
                            symbolName: 'tooltip_PDF',
                            rect: ['-108', '3px', '110', '32', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 305,
                    autoPlay: true,
                    data: [
                        [
                            "eid287",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${estado_bordePDF}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "tool_btn1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '40px', '116', '35', 'auto', 'auto'],
                            type: 'rect',
                            id: 'tooltipMov',
                            symbolName: 'tooltipMov',
                            opacity: '0',
                            transform: [[], [], [], ['0.2', '0.2']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 320,
                    autoPlay: true,
                    data: [
                        [
                            "eid13",
                            "scaleY",
                            0,
                            320,
                            "easeOutQuart",
                            "${tooltipMov}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid12",
                            "scaleX",
                            0,
                            320,
                            "easeOutQuart",
                            "${tooltipMov}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            0,
                            320,
                            "easeOutQuart",
                            "${tooltipMov}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "top",
                            0,
                            320,
                            "easeOutQuart",
                            "${tooltipMov}",
                            '40px',
                            '0px'
                        ]
                    ]
                }
            },
            "tooltipMov": {
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
                            id: 'tootip',
                            rect: ['0px', '0px', '116px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Tool%20Tip-39.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '5px', '115px', '14px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Sencibilización de apertura</p>',
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [9, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
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
            "tooltip_btn2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '35px', '116', '35', 'auto', 'auto'],
                            id: 'tooltipMov2',
                            symbolName: 'tooltipMov2',
                            opacity: '0',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 325,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "scaleY",
                            0,
                            325,
                            "easeOutQuart",
                            "${tooltipMov2}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid19",
                            "top",
                            0,
                            325,
                            "easeOutQuart",
                            "${tooltipMov2}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            0,
                            325,
                            "easeOutQuart",
                            "${tooltipMov2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "scaleX",
                            0,
                            325,
                            "easeOutQuart",
                            "${tooltipMov2}",
                            '0.2',
                            '1'
                        ]
                    ]
                }
            },
            "tooltipMov2": {
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
                            id: 'tooltip2',
                            rect: ['0px', '0px', '116px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Tool%20Tip-392.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['6px', '5px', '106px', '14px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Contextualización</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [11, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
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
            "tootip_btn3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '35px', '116', '35', 'auto', 'auto'],
                            type: 'rect',
                            id: 'tooltipMov3',
                            symbolName: 'tooltipMov3',
                            opacity: '0',
                            transform: [[], [], [], ['0.2', '0.2']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 310,
                    autoPlay: true,
                    data: [
                        [
                            "eid43",
                            "opacity",
                            0,
                            310,
                            "easeOutQuart",
                            "${tooltipMov3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "scaleY",
                            0,
                            310,
                            "easeOutQuart",
                            "${tooltipMov3}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid44",
                            "scaleX",
                            0,
                            310,
                            "easeOutQuart",
                            "${tooltipMov3}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid36",
                            "top",
                            0,
                            310,
                            "easeOutQuart",
                            "${tooltipMov3}",
                            '35px',
                            '0px'
                        ]
                    ]
                }
            },
            "tooltipMov3": {
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
                            id: 'ToolTip3',
                            rect: ['0px', '0px', '116px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Tool%20Tip-393.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['6px', '5px', '106px', '13px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Contenidos / actividades<span style=\"font-size: 9px;\">​</span></p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
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
            "tooltip_btn4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '41px', '116', '35', 'auto', 'auto'],
                            type: 'rect',
                            id: 'tooltipMov4',
                            symbolName: 'tooltipMov4',
                            opacity: '0',
                            transform: [[], [], [], ['0.2', '0.2']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: true,
                    data: [
                        [
                            "eid56",
                            "opacity",
                            0,
                            300,
                            "easeOutQuart",
                            "${tooltipMov4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "scaleY",
                            0,
                            300,
                            "easeOutQuart",
                            "${tooltipMov4}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            0,
                            300,
                            "easeOutQuart",
                            "${tooltipMov4}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid57",
                            "top",
                            0,
                            300,
                            "easeOutQuart",
                            "${tooltipMov4}",
                            '41px',
                            '0px'
                        ]
                    ]
                }
            },
            "tooltipMov4": {
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
                            id: 'ToolTip4',
                            rect: ['0px', '0px', '116px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Tool%20Tip-394.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['5px', '4px', '106px', '11px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Recordemos</p>',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [11, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
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
            "tooltip_bnt5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '35px', '116', '35', 'auto', 'auto'],
                            type: 'rect',
                            id: 'tooltipMov5',
                            symbolName: 'tooltipMov5',
                            opacity: '0',
                            transform: [[], [], [], ['0.2', '0.2']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 295,
                    autoPlay: true,
                    data: [
                        [
                            "eid71",
                            "scaleY",
                            0,
                            295,
                            "easeOutQuart",
                            "${tooltipMov5}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid69",
                            "top",
                            0,
                            295,
                            "easeOutQuart",
                            "${tooltipMov5}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid72",
                            "opacity",
                            0,
                            295,
                            "easeOutQuart",
                            "${tooltipMov5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            0,
                            295,
                            "easeOutQuart",
                            "${tooltipMov5}",
                            '0.2',
                            '1'
                        ]
                    ]
                }
            },
            "tooltipMov5": {
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
                            id: 'ToolTip5',
                            rect: ['0px', '0px', '116px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Tool%20Tip-395.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['1px', '5px', '116px', '13px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Preguntas de conocimiento</p>',
                            id: 'Text5',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [9, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
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
            "tooltip_btn6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '35px', '116', '35', 'auto', 'auto'],
                            type: 'rect',
                            id: 'tooltipMov6',
                            symbolName: 'tooltipMov6',
                            opacity: '0',
                            transform: [[], [], [], ['0.2', '0.2']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 295,
                    autoPlay: true,
                    data: [
                        [
                            "eid83",
                            "top",
                            0,
                            295,
                            "easeOutQuart",
                            "${tooltipMov6}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid85",
                            "scaleY",
                            0,
                            295,
                            "easeOutQuart",
                            "${tooltipMov6}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            0,
                            295,
                            "easeOutQuart",
                            "${tooltipMov6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "scaleX",
                            0,
                            295,
                            "easeOutQuart",
                            "${tooltipMov6}",
                            '0.2',
                            '1'
                        ]
                    ]
                }
            },
            "tooltipMov6": {
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
                            id: 'ToolTip6',
                            rect: ['0px', '0px', '116px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Tool%20Tip-396.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '5px', '116px', '12px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Sensibilización de cierre</p>',
                            id: 'Text6',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
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
            "tool_Home": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '35px', '116', '35', 'auto', 'auto'],
                            type: 'rect',
                            id: 'tool_homeMov',
                            symbolName: 'tool_homeMov',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 305,
                    autoPlay: true,
                    data: [
                        [
                            "eid96",
                            "opacity",
                            0,
                            305,
                            "easeOutQuart",
                            "${tool_homeMov}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "top",
                            0,
                            305,
                            "easeOutQuart",
                            "${tool_homeMov}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid98",
                            "scaleY",
                            0,
                            305,
                            "easeOutQuart",
                            "${tool_homeMov}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "scaleX",
                            0,
                            305,
                            "easeOutQuart",
                            "${tool_homeMov}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "tool_homeMov": {
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
                            id: 'ToolTip9-home',
                            rect: ['0px', '0px', '116px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Tool%20Tip-399.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['7px', '4px', '103px', '15px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Volver a lecciones</p>',
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [11, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
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
            "tool_libros": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '24px', '116', '35', 'auto', 'auto'],
                            type: 'rect',
                            id: 'tool_librosMov',
                            symbolName: 'tool_librosMov',
                            opacity: '0',
                            transform: [[], [], [], ['0.1', '0.1']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 305,
                    autoPlay: true,
                    data: [
                        [
                            "eid108",
                            "scaleX",
                            0,
                            305,
                            "easeOutQuart",
                            "${tool_librosMov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid107",
                            "top",
                            0,
                            305,
                            "easeOutQuart",
                            "${tool_librosMov}",
                            '24px',
                            '0px'
                        ],
                        [
                            "eid110",
                            "opacity",
                            0,
                            305,
                            "easeOutQuart",
                            "${tool_librosMov}",
                            '0',
                            '1'
                        ],
                        [
                            "eid109",
                            "scaleY",
                            0,
                            305,
                            "easeOutQuart",
                            "${tool_librosMov}",
                            '0.1',
                            '1'
                        ]
                    ]
                }
            },
            "tool_librosMov": {
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
                            id: 'ToolTip10libros',
                            rect: ['0px', '0px', '116px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Tool%20Tip-3910.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['5px', '5px', '106px', '11px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Bibliografía</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [11, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
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
            "tooltip_librosA": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '26px', '116', '35', 'auto', 'auto'],
                            type: 'rect',
                            id: 'tooltip_librosAmov',
                            symbolName: 'tooltip_librosAmov',
                            opacity: '0',
                            transform: [[], [], [], ['0.1', '0.1']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 310,
                    autoPlay: true,
                    data: [
                        [
                            "eid121",
                            "scaleY",
                            0,
                            310,
                            "easeOutQuart",
                            "${tooltip_librosAmov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            0,
                            310,
                            "easeOutQuart",
                            "${tooltip_librosAmov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid119",
                            "top",
                            0,
                            310,
                            "easeOutQuart",
                            "${tooltip_librosAmov}",
                            '26px',
                            '0px'
                        ],
                        [
                            "eid122",
                            "opacity",
                            0,
                            310,
                            "easeOutQuart",
                            "${tooltip_librosAmov}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "tooltip_librosAmov": {
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
                            id: 'ToolTip-libroA11',
                            rect: ['0px', '0px', '116px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Tool%20Tip-3911.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['5px', '5px', '107px', '12px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Glosario</p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [11, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
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
            "tooltip_mapa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '27px', '116', '35', 'auto', 'auto'],
                            type: 'rect',
                            id: 'tooltip_mapaMov',
                            symbolName: 'tooltip_mapaMov',
                            opacity: '0',
                            transform: [[], [], [], ['0.1', '0.1']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 295,
                    autoPlay: true,
                    data: [
                        [
                            "eid134",
                            "opacity",
                            0,
                            295,
                            "easeOutQuart",
                            "${tooltip_mapaMov}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "scaleX",
                            0,
                            295,
                            "easeOutQuart",
                            "${tooltip_mapaMov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid131",
                            "top",
                            0,
                            295,
                            "easeOutQuart",
                            "${tooltip_mapaMov}",
                            '27px',
                            '0px'
                        ],
                        [
                            "eid133",
                            "scaleY",
                            0,
                            295,
                            "easeOutQuart",
                            "${tooltip_mapaMov}",
                            '0.1',
                            '1'
                        ]
                    ]
                }
            },
            "tooltip_mapaMov": {
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
                            id: 'ToolTip_mapa12',
                            rect: ['0px', '0px', '116px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Tool%20Tip-3912.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['6px', '5px', '106px', '15px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Mapa conceptual</p>',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [11, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '35px']
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
            "tooltip_PDF": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['70px', '0', '110', '32', 'auto', 'auto'],
                            type: 'rect',
                            id: 'tooltip_PDFmov',
                            symbolName: 'tooltip_PDFmov',
                            opacity: '0',
                            transform: [[], [], [], ['0.1', '0.1']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 305,
                    autoPlay: true,
                    data: [
                        [
                            "eid147",
                            "left",
                            0,
                            305,
                            "easeOutQuart",
                            "${tooltip_PDFmov}",
                            '70px',
                            '0px'
                        ],
                        [
                            "eid148",
                            "opacity",
                            0,
                            305,
                            "easeOutQuart",
                            "${tooltip_PDFmov}",
                            '0',
                            '1'
                        ],
                        [
                            "eid145",
                            "scaleX",
                            0,
                            305,
                            "easeOutQuart",
                            "${tooltip_PDFmov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid146",
                            "scaleY",
                            0,
                            305,
                            "easeOutQuart",
                            "${tooltip_PDFmov}",
                            '0.1',
                            '1'
                        ]
                    ]
                }
            },
            "tooltip_PDFmov": {
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
                            id: 'tooltip_barraPDF',
                            rect: ['0px', '0px', '110px', '32px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tooltip_barra_h.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['8px', '6px', '89px', '14px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​PDF&nbsp;</p>',
                            id: 'Text5',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [11, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
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
            "barra_herramientas": {
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
                            id: 'barra_herramientasMov',
                            symbolName: 'barra_herramientasMov',
                            clip: 'rect(0px 31px 0px -99px)',
                            rect: ['0', '0', '31', '192', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '31px', '192px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid230",
                            "clip",
                            0,
                            500,
                            "easeOutQuart",
                            "${barra_herramientasMov}",
                            [0,31,0,-99],
                            [0,31,192,-99],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "barra_herramientasMov": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '31px', '192px', 'auto', 'auto'],
                            id: 'barra_herr-final',
                            type: 'image',
                            cursor: 'default',
                            fill: ['rgba(0,0,0,0)', 'images/barra_herr-final.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'btn_acces',
                            symbolName: 'btn_acces',
                            cursor: 'pointer',
                            rect: ['4', '159', '23', '23', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'btn_info',
                            symbolName: 'btn_info',
                            cursor: 'pointer',
                            rect: ['4px', '129px', '22', '22', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'btn_audio',
                            symbolName: 'btn_audio',
                            cursor: 'pointer',
                            rect: ['4', '98', '23', '23', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'btn_ayuda',
                            symbolName: 'btn_ayuda',
                            cursor: 'pointer',
                            rect: ['4', '69', '22', '22', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'btn_creditos',
                            symbolName: 'btn_creditos',
                            cursor: 'pointer',
                            rect: ['4', '39', '22', '22', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'btn_fullscreen',
                            symbolName: 'btn_fullscreen',
                            cursor: 'pointer',
                            rect: ['4', '9', '22', '22', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '31px', '192px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "btn_fullscreen": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                            id: 'fullscreen-img',
                            type: 'image',
                            clip: 'rect(0px 22px 22px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/btn1-menu.png', '0px', '0px']
                        },
                        {
                            id: 'tooltip_fs',
                            symbolName: 'tooltip_fs',
                            rect: ['-106', '-1', '110', '32', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '22px', '22px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "btn_creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                            id: 'creditos-img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn2-menu.png', '0px', '0px']
                        },
                        {
                            rect: ['-105', '-3', '110', '32', 'auto', 'auto'],
                            id: 'tooltip_cred',
                            symbolName: 'tooltip_cred',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '22px', '22px']
                        }
                    }
                },
                timeline: {
                    duration: 290,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "btn_ayuda": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                            id: 'ayuda-img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn4-menu.png', '0px', '0px']
                        },
                        {
                            rect: ['-105', '0', '110', '32', 'auto', 'auto'],
                            id: 'tooltip_ayuda',
                            symbolName: 'tooltip_ayuda',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '22px', '22px']
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
            "btn_audio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '23px', '23px', 'auto', 'auto'],
                            id: 'audio-img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/MH_sonido.png', '0px', '0px']
                        },
                        {
                            rect: ['-106', '0', '110', '32', 'auto', 'auto'],
                            id: 'tooltip_audio',
                            symbolName: 'tooltip_audio',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '23px', '23px']
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
            "btn_info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                            id: 'info-img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn3-menu2.png', '0px', '0px']
                        },
                        {
                            rect: ['-103', '-1', '110', '32', 'auto', 'auto'],
                            id: 'tooltip_info',
                            symbolName: 'tooltip_info',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '22px', '22px']
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
            "btn_acces": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '23px', '23px', 'auto', 'auto'],
                            id: 'Acces-img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/MH_Accesabilidad.png', '0px', '0px']
                        },
                        {
                            rect: ['-103', '0', '110', '32', 'auto', 'auto'],
                            id: 'tooltip_acces',
                            symbolName: 'tooltip_acces',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '23px', '23px']
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
            "tooltip_fs": {
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
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'tooltip_fsMov',
                            symbolName: 'tooltip_fsMov',
                            opacity: '0',
                            rect: ['61px', '0px', '110', '32', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: true,
                    data: [
                        [
                            "eid159",
                            "scaleY",
                            0,
                            300,
                            "easeOutQuart",
                            "${tooltip_fsMov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid157",
                            "left",
                            0,
                            300,
                            "easeOutQuart",
                            "${tooltip_fsMov}",
                            '61px',
                            '0px'
                        ],
                        [
                            "eid158",
                            "scaleX",
                            0,
                            300,
                            "easeOutQuart",
                            "${tooltip_fsMov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            0,
                            300,
                            "easeOutQuart",
                            "${tooltip_fsMov}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "tooltip_fsMov": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '32px', 'auto', 'auto'],
                            id: 'tooltip_fs-img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tooltip_barra_h2.png', '0px', '0px']
                        },
                        {
                            rect: ['8px', '6px', '89px', '13px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [11, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text6',
                            text: '<p style=\"margin: 0px;\">​Full screen</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
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
            "tooltip_cred": {
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
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'tooltip_credMov',
                            symbolName: 'tooltip_credMov',
                            opacity: '0',
                            rect: ['60px', '0', '110', '32', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 290,
                    autoPlay: true,
                    data: [
                        [
                            "eid174",
                            "opacity",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_credMov}",
                            '0',
                            '1'
                        ],
                        [
                            "eid171",
                            "left",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_credMov}",
                            '60px',
                            '0px'
                        ],
                        [
                            "eid172",
                            "scaleX",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_credMov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid173",
                            "scaleY",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_credMov}",
                            '0.1',
                            '1'
                        ]
                    ]
                }
            },
            "tooltip_credMov": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '32px', 'auto', 'auto'],
                            id: 'tooltip_cred-img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tooltip_barra_h3.png', '0px', '0px']
                        },
                        {
                            rect: ['10px', '7px', '87px', '13px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [11, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text7',
                            text: '<p style=\"margin: 0px;\">​Créditos</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
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
            "tooltip_ayuda": {
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
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'tooltip_ayudaMov',
                            symbolName: 'tooltip_ayudaMov',
                            opacity: '0',
                            rect: ['60px', '0', '110', '32', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 305,
                    autoPlay: true,
                    data: [
                        [
                            "eid184",
                            "scaleX",
                            0,
                            305,
                            "easeOutQuart",
                            "${tooltip_ayudaMov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid186",
                            "opacity",
                            0,
                            305,
                            "easeOutQuart",
                            "${tooltip_ayudaMov}",
                            '0',
                            '1'
                        ],
                        [
                            "eid183",
                            "left",
                            0,
                            305,
                            "easeOutQuart",
                            "${tooltip_ayudaMov}",
                            '60px',
                            '0px'
                        ],
                        [
                            "eid185",
                            "scaleY",
                            0,
                            305,
                            "easeOutQuart",
                            "${tooltip_ayudaMov}",
                            '0.1',
                            '1'
                        ]
                    ]
                }
            },
            "tooltip_ayudaMov": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '32px', 'auto', 'auto'],
                            id: 'tooltip_ayuda-img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tooltip_barra_h4.png', '0px', '0px']
                        },
                        {
                            rect: ['8px', '6px', '88px', '14px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [11, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text8',
                            text: '<p style=\"margin: 0px;\">​Ayuda</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
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
            "tooltip_audio": {
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
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'tooltip_audioMov',
                            symbolName: 'tooltip_audioMov',
                            opacity: '0',
                            rect: ['0px', '0', '110', '32', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 290,
                    autoPlay: true,
                    data: [
                        [
                            "eid200",
                            "left",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_audioMov}",
                            '60px',
                            '0px'
                        ],
                        [
                            "eid199",
                            "opacity",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_audioMov}",
                            '0',
                            '1'
                        ],
                        [
                            "eid197",
                            "scaleX",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_audioMov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid198",
                            "scaleY",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_audioMov}",
                            '0.1',
                            '1'
                        ]
                    ]
                }
            },
            "tooltip_audioMov": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '32px', 'auto', 'auto'],
                            id: 'tooltip_audio-img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tooltip_barra_h5.png', '0px', '0px']
                        },
                        {
                            rect: ['8px', '6px', '90px', '14px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [11, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text9',
                            text: '<p style=\"margin: 0px;\">​Audio</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
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
            "tooltip_info": {
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
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'tooltip_infoMov',
                            symbolName: 'tooltip_infoMov',
                            opacity: '0',
                            rect: ['60px', '0', '110', '32', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 290,
                    autoPlay: true,
                    data: [
                        [
                            "eid213",
                            "scaleY",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_infoMov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid215",
                            "opacity",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_infoMov}",
                            '0',
                            '1'
                        ],
                        [
                            "eid214",
                            "scaleX",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_infoMov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid209",
                            "left",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_infoMov}",
                            '60px',
                            '0px'
                        ]
                    ]
                }
            },
            "tooltip_infoMov": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '32px', 'auto', 'auto'],
                            id: 'tooltip_info-img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tooltip_barra_h6.png', '0px', '0px']
                        },
                        {
                            rect: ['8px', '6px', '89px', '15px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [11, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text10',
                            text: '<p style=\"margin: 0px;\">​Información</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
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
            "tooltip_acces": {
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
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'tooltip_accesMov',
                            symbolName: 'tooltip_accesMov',
                            opacity: '0',
                            rect: ['60px', '0', '110', '32', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 290,
                    autoPlay: true,
                    data: [
                        [
                            "eid224",
                            "left",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_accesMov}",
                            '60px',
                            '0px'
                        ],
                        [
                            "eid226",
                            "scaleY",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_accesMov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid225",
                            "scaleX",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_accesMov}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid227",
                            "opacity",
                            0,
                            290,
                            "easeOutQuart",
                            "${tooltip_accesMov}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "tooltip_accesMov": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '32px', 'auto', 'auto'],
                            id: 'tooltip_acces-img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tooltip_barra_h7.png', '0px', '0px']
                        },
                        {
                            rect: ['7px', '6px', '91px', '15px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [11, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text11',
                            text: '<p style=\"margin: 0px;\">​Accesibilidad</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '32px']
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
            "contened_apertura": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(2, 105, 112);\">Sensibilización de apertura</span></p>',
                            rect: ['211px', '165px', '597px', '118px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [49, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1032px', '394px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid239",
                            "scaleX",
                            45,
                            455,
                            "easeOutQuart",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid232",
                            "display",
                            45,
                            0,
                            "easeOutQuart",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid240",
                            "scaleY",
                            45,
                            455,
                            "easeOutQuart",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "contened_contextual": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(158, 1, 1);\">Contextualización</span></p>',
                            rect: ['147px', '161px', '750px', '87px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [49, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text2'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1032px', '394px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid248",
                            "scaleX",
                            60,
                            440,
                            "easeOutQuart",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid242",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid243",
                            "display",
                            60,
                            0,
                            "easeOutQuart",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid249",
                            "scaleY",
                            60,
                            440,
                            "easeOutQuart",
                            "${Text2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "contened_contenidos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​Contenidos / actividades</p>',
                            rect: ['152px', '148px', '706px', '139px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [49, 'px'], 'rgba(120,0,148,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text3'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1032px', '394px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid251",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid252",
                            "display",
                            50,
                            0,
                            "easeOutQuart",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid257",
                            "scaleX",
                            50,
                            450,
                            "easeOutQuart",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid258",
                            "scaleY",
                            50,
                            450,
                            "easeOutQuart",
                            "${Text3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "contenedor_recordemos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​Recordemos</p>',
                            rect: ['229px', '142px', '593px', '116px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [49, 'px'], 'rgba(0,69,111,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text4'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1032px', '394px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid266",
                            "scaleX",
                            45,
                            455,
                            "easeOutQuart",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid260",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid261",
                            "display",
                            45,
                            0,
                            "easeOutQuart",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid267",
                            "scaleY",
                            45,
                            455,
                            "easeOutQuart",
                            "${Text4}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "contend_preguntas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 79, 42);\">Preguntas de conocimiento</span></p>',
                            rect: ['134px', '166px', '809px', '75px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [49, 'px'], 'rgba(0,69,111,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text5'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1032px', '394px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid270",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid271",
                            "display",
                            40,
                            0,
                            "easeOutQuart",
                            "${Text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid276",
                            "scaleX",
                            40,
                            460,
                            "easeOutQuart",
                            "${Text5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid277",
                            "scaleY",
                            40,
                            460,
                            "easeOutQuart",
                            "${Text5}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "contened_cierre": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 144, 36);\">Sensibilización de cierre</span></p>',
                            rect: ['153px', '161px', '701px', '130px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [49, 'px'], 'rgba(0,69,111,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text6'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1032px', '394px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid278",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid279",
                            "display",
                            40,
                            0,
                            "easeOutQuart",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid285",
                            "scaleY",
                            40,
                            460,
                            "easeOutQuart",
                            "${Text6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid284",
                            "scaleX",
                            40,
                            460,
                            "easeOutQuart",
                            "${Text6}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "contened_PDF": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​PDF descargable / imprimible</p>',
                            rect: ['133px', '169px', '806px', '154px', 'auto', 'auto'],
                            transform: [[], [], [], ['0']],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [49, 'px'], 'rgba(0,69,111,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text7'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1032px', '394px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid294",
                            "scaleX",
                            40,
                            460,
                            "easeOutQuart",
                            "${Text7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid291",
                            "scaleY",
                            40,
                            0,
                            "easeOutQuart",
                            "${Text7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid293",
                            "scaleY",
                            500,
                            0,
                            "easeOutQuart",
                            "${Text7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid288",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid289",
                            "display",
                            40,
                            0,
                            "easeOutQuart",
                            "${Text7}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "contened_biblio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​Bibliografía</p>',
                            rect: ['181px', '168px', '693px', '122px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [49, 'px'], 'rgba(0,143,31,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text9'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1027px', '394px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid303",
                            "scaleY",
                            40,
                            460,
                            "easeOutQuart",
                            "${Text9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid302",
                            "scaleX",
                            40,
                            460,
                            "easeOutQuart",
                            "${Text9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid296",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid297",
                            "display",
                            40,
                            0,
                            "easeOutQuart",
                            "${Text9}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "contened_glos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​Glosario</p>',
                            rect: ['252px', '158px', '501px', '96px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [49, 'px'], 'rgba(0,143,31,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text10'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1027px', '394px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid312",
                            "scaleY",
                            40,
                            460,
                            "easeOutQuart",
                            "${Text10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid311",
                            "scaleX",
                            40,
                            460,
                            "easeOutQuart",
                            "${Text10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid305",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid306",
                            "display",
                            40,
                            0,
                            "easeOutQuart",
                            "${Text10}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "contened_mapa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​Mapa conceptual</p>',
                            rect: ['248px', '175px', '599px', '81px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [49, 'px'], 'rgba(0,143,31,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text11'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1032px', '394px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid323",
                            "scaleY",
                            45,
                            455,
                            "easeOutQuart",
                            "${Text11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid322",
                            "scaleX",
                            45,
                            455,
                            "easeOutQuart",
                            "${Text11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid315",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid316",
                            "display",
                            45,
                            0,
                            "easeOutQuart",
                            "${Text11}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "contened_home": {
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
                            isStage: 'true',
                            rect: [undefined, undefined, '1032px', '394px']
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
            "contenedor_popup": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1080px', '600px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            id: 'opacidad_negro',
                            opacity: '0.75',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'popup_contenido_1',
                            rect: ['24', '59', '1032', '394', 'auto', 'auto'],
                            id: 'popup_contenido_1'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'poup_contenido_2',
                            rect: ['24', '59', '1032', '541', 'auto', 'auto'],
                            id: 'poup_contenido_2'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1080px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid327",
                            "display",
                            0,
                            0,
                            "linear",
                            "${poup_contenido_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid328",
                            "display",
                            0,
                            0,
                            "linear",
                            "${popup_contenido_1}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "popup_contenido_1": {
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
                            isStage: 'true',
                            rect: [undefined, undefined, '1032px', '394px']
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
            "poup_contenido_2": {
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
                            isStage: 'true',
                            rect: [undefined, undefined, '1032px', '541px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("plantilla_transferencia_edgeActions.js");
})("EDGE-5617841");
