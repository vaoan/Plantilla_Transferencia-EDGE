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
                            id: 'popUp_perfect',
                            symbolName: 'popUp_perfect',
                            type: 'rect',
                            rect: ['0', '0', '679', '314', 'auto', 'auto']
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
                    duration: 3500,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "anim_trofeo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-209'], [], ['0.1', '0.1']],
                            type: 'image',
                            display: 'none',
                            id: 'circ-trofeo',
                            opacity: '0.1',
                            rect: ['30px', '0px', '156px', '156px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/circ-trofeo.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            display: 'none',
                            id: 'trofeo',
                            opacity: '0.1',
                            rect: ['0px', '15px', '148px', '170px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/trofeo.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-249'], [], ['0', '0']],
                            id: 'mov_brillo',
                            rect: ['30', '24', '89', '89', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            symbolName: 'mov_brillo',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '186px', '185px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    data: [
                        [
                            "eid53",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${mov_brillo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            1085,
                            0,
                            "easeOutQuart",
                            "${mov_brillo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "scaleY",
                            595,
                            745,
                            "easeOutQuart",
                            "${trofeo}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            1085,
                            415,
                            "easeOutQuart",
                            "${mov_brillo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "scaleX",
                            120,
                            880,
                            "easeOutQuart",
                            "${circ-trofeo}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid24",
                            "display",
                            0,
                            0,
                            "linear",
                            "${circ-trofeo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            120,
                            0,
                            "linear",
                            "${circ-trofeo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid55",
                            "scaleY",
                            1085,
                            415,
                            "easeOutQuart",
                            "${mov_brillo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "rotateZ",
                            1085,
                            415,
                            "easeOutQuart",
                            "${mov_brillo}",
                            '-249deg',
                            '0deg'
                        ],
                        [
                            "eid41",
                            "scaleX",
                            595,
                            745,
                            "easeOutQuart",
                            "${trofeo}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            1085,
                            415,
                            "easeOutQuart",
                            "${mov_brillo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "scaleY",
                            120,
                            880,
                            "easeOutQuart",
                            "${circ-trofeo}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            120,
                            880,
                            "easeOutQuart",
                            "${circ-trofeo}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid32",
                            "rotateZ",
                            120,
                            880,
                            "easeOutQuart",
                            "${circ-trofeo}",
                            '-209deg',
                            '0deg'
                        ],
                        [
                            "eid43",
                            "opacity",
                            595,
                            745,
                            "easeOutQuart",
                            "${trofeo}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${trofeo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            595,
                            0,
                            "linear",
                            "${trofeo}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "mov_brillo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '89px', '89px', 'auto', 'auto'],
                            id: 'brillo-perfect',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brillo-perfect.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '89px', '89px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    data: [
                        [
                            "eid17",
                            "opacity",
                            500,
                            1500,
                            "linear",
                            "${brillo-perfect}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid18",
                            "opacity",
                            2000,
                            1500,
                            "linear",
                            "${brillo-perfect}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid15",
                            "scaleY",
                            500,
                            1500,
                            "linear",
                            "${brillo-perfect}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid16",
                            "scaleY",
                            2000,
                            1500,
                            "linear",
                            "${brillo-perfect}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid13",
                            "scaleX",
                            500,
                            1500,
                            "linear",
                            "${brillo-perfect}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid14",
                            "scaleX",
                            2000,
                            1500,
                            "linear",
                            "${brillo-perfect}",
                            '0.8',
                            '1'
                        ]
                    ]
                }
            },
            "anim_cont-result": {
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
                            id: 'cont_resultados',
                            rect: ['0', '0', '165', '121', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            symbolName: 'cont_resultados',
                            type: 'rect'
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            display: 'none',
                            id: 'Text_perfect',
                            text: '<p style=\"margin: 0px;\">​Has completado&nbsp;</p><p style=\"margin: 0px;\">la actividad&nbsp;</p><p style=\"margin: 0px;\">correctamente.</p>',
                            align: 'center',
                            rect: ['191px', '10px', '186px', '101px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '377px', '121px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid66",
                            "scaleY",
                            750,
                            750,
                            "easeOutQuart",
                            "${cont_resultados}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "scaleX",
                            750,
                            750,
                            "easeOutQuart",
                            "${cont_resultados}",
                            '0',
                            '1'
                        ],
                        [
                            "eid68",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${cont_resultados}",
                            'none',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            750,
                            0,
                            "easeOutQuart",
                            "${cont_resultados}",
                            'none',
                            'block'
                        ],
                        [
                            "eid67",
                            "opacity",
                            750,
                            750,
                            "easeOutQuart",
                            "${cont_resultados}",
                            '0',
                            '1'
                        ],
                        [
                            "eid70",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text_perfect}",
                            'none',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            1500,
                            0,
                            "easeOutQuart",
                            "${Text_perfect}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "cont_resultados": {
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
                            id: 'resultados',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/resultados.png', '0px', '0px']
                        },
                        {
                            rect: ['18', '11', '48', '72', 'auto', 'auto'],
                            id: 'Num_respondidas',
                            symbolName: 'Num_respondidas',
                            type: 'rect'
                        },
                        {
                            rect: ['101', '22', '42', '48', 'auto', 'auto'],
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
            "popUp_perfect": {
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
                            id: 'amin_popup',
                            display: 'none',
                            symbolName: 'amin_popup',
                            rect: ['0', '0', '679', '314', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '679px', '314px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    data: [
                        [
                            "eid77",
                            "scaleX",
                            60,
                            690,
                            "easeOutQuart",
                            "${amin_popup}",
                            '0',
                            '1'
                        ],
                        [
                            "eid74",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${amin_popup}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            60,
                            0,
                            "easeOutQuart",
                            "${amin_popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "scaleY",
                            60,
                            690,
                            "easeOutQuart",
                            "${amin_popup}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "amin_popup": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '679px', '314px', 'auto', 'auto'],
                            id: 'cont_retroal',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cont_retroal.png', '0px', '0px']
                        },
                        {
                            rect: ['29px', '92px', '186', '185', 'auto', 'auto'],
                            id: 'anim_trofeo',
                            symbolName: 'anim_trofeo',
                            type: 'rect'
                        },
                        {
                            rect: ['259px', '117px', '377', '121', 'auto', 'auto'],
                            id: 'anim_cont-result',
                            symbolName: 'anim_cont-result',
                            type: 'rect'
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'titulo_blanco',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​! Muy bien ¡</p>',
                            rect: ['29px', '11px', '273px', '39px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'btn_cerrarPopup',
                            symbolName: 'btn_cerrarPopup',
                            cursor: 'pointer',
                            rect: ['628', '16', '30', '30', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '679px', '314px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
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
                            id: 'btn_cerrar-perfect',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_cerrar-perfect.png', '0px', '0px']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("perfect_edgeActions.js");
})("EDGE-522838995");
