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
                            id: 'popup_ret-media',
                            symbolName: 'popup_ret-media',
                            type: 'rect',
                            rect: ['0', '-1', '679', '315', 'auto', 'auto']
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
                    duration: 815,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "popup_ret-media": {
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
                            id: 'anim_popMed',
                            display: 'none',
                            symbolName: 'anim_popMed',
                            rect: ['0', '0', '679', '315', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '679px', '315px']
                        }
                    }
                },
                timeline: {
                    duration: 815,
                    autoPlay: true,
                    data: [
                        [
                            "eid104",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${anim_popMed}",
                            'none',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            60,
                            0,
                            "easeOutQuart",
                            "${anim_popMed}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "scaleX",
                            60,
                            690,
                            "easeOutQuart",
                            "${anim_popMed}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "scaleY",
                            60,
                            690,
                            "easeOutQuart",
                            "${anim_popMed}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "anim_brillo-medest": {
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
                            id: 'brillo_medestrella',
                            opacity: '1',
                            rect: ['0px', '0px', '75px', '77px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brillo_medestrella.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '75px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    labels: {
                        "rep_brillos": 500
                    },
                    data: [
                        [
                            "eid61",
                            "opacity",
                            500,
                            1500,
                            "linear",
                            "${brillo_medestrella}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid62",
                            "opacity",
                            2000,
                            1500,
                            "linear",
                            "${brillo_medestrella}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid57",
                            "scaleX",
                            500,
                            1500,
                            "linear",
                            "${brillo_medestrella}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid58",
                            "scaleX",
                            2000,
                            1500,
                            "linear",
                            "${brillo_medestrella}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid59",
                            "scaleY",
                            500,
                            1500,
                            "linear",
                            "${brillo_medestrella}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            2000,
                            1500,
                            "linear",
                            "${brillo_medestrella}",
                            '0.8',
                            '1'
                        ]
                    ]
                }
            },
            "anim_medEstrella": {
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
                            rect: ['0px', '121px', '206px', '27px', 'auto', 'auto'],
                            id: 'sombra_medestrella',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/sombra_medestrella.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-195'], [], ['0.1', '0.1']],
                            type: 'image',
                            display: 'none',
                            id: 'circ_retroal',
                            opacity: '0.1',
                            rect: ['65px', '-68px', '156px', '156px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/circ_retroal.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['35'], [], ['0.1', '0.1']],
                            type: 'image',
                            display: 'none',
                            id: 'img_medestrella',
                            opacity: '0.1',
                            rect: ['37px', '-42px', '110px', '163px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img_medestrella.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-194'], [], ['0.1', '0.1']],
                            id: 'anim_brillo-medest',
                            rect: ['60px', '31px', '75', '77', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0.1',
                            symbolName: 'anim_brillo-medest',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '206px', '148px']
                        }
                    }
                },
                timeline: {
                    duration: 1340,
                    autoPlay: true,
                    data: [
                        [
                            "eid31",
                            "opacity",
                            595,
                            745,
                            "easeOutQuart",
                            "${sombra_medestrella}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            120,
                            880,
                            "easeOutQuart",
                            "${circ_retroal}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid13",
                            "scaleY",
                            120,
                            880,
                            "easeOutQuart",
                            "${circ_retroal}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid11",
                            "rotateZ",
                            120,
                            880,
                            "easeOutQuart",
                            "${circ_retroal}",
                            '-195deg',
                            '0deg'
                        ],
                        [
                            "eid44",
                            "scaleX",
                            1000,
                            340,
                            "easeOutQuart",
                            "${anim_brillo-medest}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid33",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${sombra_medestrella}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            595,
                            0,
                            "easeOutQuart",
                            "${sombra_medestrella}",
                            'none',
                            'block'
                        ],
                        [
                            "eid24",
                            "display",
                            0,
                            0,
                            "linear",
                            "${img_medestrella}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23",
                            "display",
                            595,
                            0,
                            "linear",
                            "${img_medestrella}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14",
                            "scaleX",
                            120,
                            880,
                            "easeOutQuart",
                            "${circ_retroal}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            1000,
                            340,
                            "easeOutQuart",
                            "${anim_brillo-medest}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid26",
                            "scaleY",
                            595,
                            745,
                            "easeOutQuart",
                            "${img_medestrella}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            595,
                            745,
                            "easeOutQuart",
                            "${img_medestrella}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid5",
                            "display",
                            0,
                            0,
                            "linear",
                            "${circ_retroal}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            120,
                            0,
                            "linear",
                            "${circ_retroal}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "scaleX",
                            595,
                            745,
                            "easeOutQuart",
                            "${img_medestrella}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid28",
                            "rotateZ",
                            595,
                            745,
                            "easeOutQuart",
                            "${img_medestrella}",
                            '35deg',
                            '0deg'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${anim_brillo-medest}",
                            'none',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            1000,
                            0,
                            "easeOutQuart",
                            "${anim_brillo-medest}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "scaleY",
                            1000,
                            340,
                            "easeOutQuart",
                            "${anim_brillo-medest}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid39",
                            "rotateZ",
                            1000,
                            340,
                            "easeOutQuart",
                            "${anim_brillo-medest}",
                            '-194deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "anim_resultados": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'btn_verResp',
                            opacity: '0.05',
                            cursor: 'pointer',
                            rect: ['247px', '150', '130', '42', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'btn_verResp',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            rect: ['11px', '136px', '377px', '2px', 'auto', 'auto'],
                            display: 'none',
                            id: 'lineaDiv_med',
                            clip: 'rect(0px 0px 2px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/lineaDiv_med.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'simb_resultados',
                            rect: ['0px', '0', '165', '121', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0.1',
                            symbolName: 'simb_resultados',
                            type: 'rect'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text_observa',
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 23px;\">Observa las&nbsp;</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 23px;\">respuestas correctas</p><p></p>',
                            display: 'none',
                            rect: ['177px', '29px', '227px', '72px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '377px', '192px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    data: [
                        [
                            "eid88",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${lineaDiv_med}",
                            'none',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            1500,
                            0,
                            "easeOutQuart",
                            "${lineaDiv_med}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text_observa}",
                            'none',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            1500,
                            0,
                            "easeOutQuart",
                            "${Text_observa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "scaleX",
                            1750,
                            500,
                            "easeOutQuart",
                            "${btn_verResp}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            750,
                            750,
                            "easeOutQuart",
                            "${simb_resultados}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid81",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${simb_resultados}",
                            'none',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            750,
                            0,
                            "easeOutQuart",
                            "${simb_resultados}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "scaleY",
                            1750,
                            500,
                            "easeOutQuart",
                            "${btn_verResp}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid82",
                            "scaleX",
                            750,
                            750,
                            "easeOutQuart",
                            "${simb_resultados}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid89",
                            "clip",
                            1500,
                            500,
                            "easeOutQuart",
                            "${lineaDiv_med}",
                            [0,0,2,0],
                            [0,377,2,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid83",
                            "scaleY",
                            750,
                            750,
                            "easeOutQuart",
                            "${simb_resultados}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid97",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${btn_verResp}",
                            'none',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            1750,
                            0,
                            "easeOutQuart",
                            "${btn_verResp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid100",
                            "opacity",
                            1750,
                            500,
                            "easeOutQuart",
                            "${btn_verResp}",
                            '0.05',
                            '1'
                        ]
                    ]
                }
            },
            "simb_resultados": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '165px', '121px', 'auto', 'auto'],
                            id: 'cont_resultados',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cont_resultados.png', '0px', '0px']
                        },
                        {
                            rect: ['18', '11', '48', '72', 'auto', 'auto'],
                            id: 'Num_respondidas',
                            symbolName: 'Num_respondidas',
                            type: 'rect'
                        },
                        {
                            rect: ['100', '22', '42', '48', 'auto', 'auto'],
                            id: 'cantidad_preguntas',
                            symbolName: 'cantidad_preguntas',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '165px', '121px']
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
            "btn_verResp": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '130px', '42px', 'auto', 'auto'],
                            id: 'img_btnRetroal',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_btnRetroal.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '42px']
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
            "Num_respondidas": {
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
                            rect: [null, null, '48px', '72px']
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
            "cantidad_preguntas": {
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
                            rect: [null, null, '42px', '48px']
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
            "btn_cerrarPopup": {
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
                            id: 'btn_cerrarMedestrella',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_cerrarMedestrella.png', '0px', '0px']
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
            "anim_popMed": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '679px', '315px', 'auto', 'auto'],
                            id: 'contend_retroal',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/contend_retroal.png', '0px', '0px']
                        },
                        {
                            rect: ['18px', '149px', '206', '148', 'auto', 'auto'],
                            id: 'anim_medEstrella',
                            symbolName: 'anim_medEstrella',
                            type: 'rect'
                        },
                        {
                            rect: ['252px', '89px', '377', '192', 'auto', 'auto'],
                            id: 'anim_resultados',
                            symbolName: 'anim_resultados',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'btn_cerrarPopup',
                            symbolName: 'btn_cerrarPopup',
                            cursor: 'pointer',
                            rect: ['629px', '14px', '30', '30', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">! Has finalizado la actividad !&nbsp;</p>',
                            rect: ['25px', '11px', '456px', '38px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '679px', '315px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("retroal_medEstrella_edgeActions.js");
})("EDGE-285378685");
