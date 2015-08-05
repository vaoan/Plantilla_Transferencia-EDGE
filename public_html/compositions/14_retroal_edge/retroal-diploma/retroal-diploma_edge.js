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
                            id: 'pop-up_diploma',
                            symbolName: 'pop-up_diploma',
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
                    duration: 4500,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pop-up_diploma": {
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
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            symbolName: 'anim_popUp',
                            rect: ['0', '0', '679', '315', 'auto', 'auto'],
                            id: 'anim_popUp'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '679px', '315px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid140",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${anim_popUp}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            60,
                            0,
                            "easeOutQuart",
                            "${anim_popUp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid144",
                            "scaleY",
                            60,
                            690,
                            "easeOutQuart",
                            "${anim_popUp}",
                            '0',
                            '1'
                        ],
                        [
                            "eid143",
                            "scaleX",
                            60,
                            690,
                            "easeOutQuart",
                            "${anim_popUp}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "anim-diploma": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '170px', '205px', '27px', 'auto', 'auto'],
                            type: 'image',
                            id: 'sombra',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/sombra.png', '0px', '0px']
                        },
                        {
                            rect: ['63px', '0px', '156px', '157px', 'auto', 'auto'],
                            transform: [[], ['-248'], [], ['0', '0']],
                            type: 'image',
                            id: 'circulo-fondo',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/circulo-fondo.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['50'], [], ['0', '1.08']],
                            id: 'salida_diploma',
                            symbolName: 'salida_diploma',
                            opacity: '0',
                            rect: ['37', '19', '132', '147', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-188'], [], ['0.1', '0.1']],
                            opacity: '0.1',
                            display: 'none',
                            symbolName: 'brillo-diploma',
                            rect: ['42', '36', '114', '84', 'auto', 'auto'],
                            id: 'brillo-diploma'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '219px', '197px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid89",
                            "scaleY",
                            1000,
                            615,
                            "easeOutQuart",
                            "${brillo-diploma}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid67",
                            "rotateZ",
                            595,
                            745,
                            "easeOutQuart",
                            "${salida_diploma}",
                            '50deg',
                            '0deg'
                        ],
                        [
                            "eid25",
                            "scaleY",
                            120,
                            880,
                            "easeOutQuart",
                            "${circulo-fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "rotateZ",
                            120,
                            880,
                            "easeOutQuart",
                            "${circulo-fondo}",
                            '-248deg',
                            '0deg'
                        ],
                        [
                            "eid92",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${brillo-diploma}",
                            'none',
                            'none'
                        ],
                        [
                            "eid91",
                            "display",
                            1000,
                            0,
                            "easeOutQuart",
                            "${brillo-diploma}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "scaleY",
                            595,
                            745,
                            "easeOutQuart",
                            "${salida_diploma}",
                            '0',
                            '1'
                        ],
                        [
                            "eid145",
                            "scaleY",
                            1340,
                            910,
                            "easeOutQuart",
                            "${salida_diploma}",
                            '1',
                            '1.08'
                        ],
                        [
                            "eid95",
                            "rotateZ",
                            1000,
                            615,
                            "easeOutQuart",
                            "${brillo-diploma}",
                            '-188deg',
                            '0deg'
                        ],
                        [
                            "eid26",
                            "opacity",
                            120,
                            880,
                            "easeOutQuart",
                            "${circulo-fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleX",
                            120,
                            880,
                            "easeOutQuart",
                            "${circulo-fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${sombra}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            595,
                            0,
                            "easeOutQuart",
                            "${sombra}",
                            'none',
                            'block'
                        ],
                        [
                            "eid72",
                            "opacity",
                            595,
                            745,
                            "easeOutQuart",
                            "${sombra}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            595,
                            745,
                            "easeOutQuart",
                            "${salida_diploma}",
                            '0',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            1000,
                            615,
                            "easeOutQuart",
                            "${brillo-diploma}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid73",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${circulo-fondo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            120,
                            0,
                            "easeOutQuart",
                            "${circulo-fondo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "scaleX",
                            595,
                            745,
                            "easeOutQuart",
                            "${salida_diploma}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "scaleX",
                            1000,
                            615,
                            "easeOutQuart",
                            "${brillo-diploma}",
                            '0.1',
                            '1'
                        ]
                    ]
                }
            },
            "brillo-diploma": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '114px', '84px', 'auto', 'auto'],
                            id: 'brillos',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brillos.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '114px', '84px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    labels: {
                        "rep_brillos": 750
                    },
                    data: [
                        [
                            "eid12",
                            "scaleY",
                            750,
                            2000,
                            "linear",
                            "${brillos}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid13",
                            "scaleY",
                            2750,
                            1750,
                            "linear",
                            "${brillos}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid10",
                            "scaleX",
                            750,
                            2000,
                            "linear",
                            "${brillos}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid11",
                            "scaleX",
                            2750,
                            1750,
                            "linear",
                            "${brillos}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            750,
                            2000,
                            "linear",
                            "${brillos}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid15",
                            "opacity",
                            2750,
                            1750,
                            "linear",
                            "${brillos}",
                            '0.8',
                            '1'
                        ]
                    ]
                }
            },
            "salida_diploma": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'madera',
                            type: 'image',
                            rect: ['0px', '0px', '132px', '147px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/madera.png', '0px', '0px']
                        },
                        {
                            rect: ['41px', '38px', '49px', '62px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'diplomaOro',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/diplomaOro.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '132px', '147px']
                        }
                    }
                },
                timeline: {
                    duration: 2415,
                    autoPlay: true,
                    data: [
                        [
                            "eid42",
                            "scaleX",
                            1065,
                            435,
                            "linear",
                            "${diplomaOro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "scaleX",
                            1500,
                            360,
                            "linear",
                            "${diplomaOro}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid45",
                            "scaleX",
                            1860,
                            190,
                            "linear",
                            "${diplomaOro}",
                            '1.2',
                            '0.9'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            2050,
                            160,
                            "linear",
                            "${diplomaOro}",
                            '0.9',
                            '1.08'
                        ],
                        [
                            "eid50",
                            "scaleX",
                            2210,
                            135,
                            "linear",
                            "${diplomaOro}",
                            '1.08',
                            '0.95'
                        ],
                        [
                            "eid52",
                            "scaleX",
                            2345,
                            70,
                            "linear",
                            "${diplomaOro}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid43",
                            "scaleY",
                            1065,
                            435,
                            "linear",
                            "${diplomaOro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "scaleY",
                            1500,
                            360,
                            "linear",
                            "${diplomaOro}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid47",
                            "scaleY",
                            1860,
                            190,
                            "linear",
                            "${diplomaOro}",
                            '1.2',
                            '0.9'
                        ],
                        [
                            "eid49",
                            "scaleY",
                            2050,
                            160,
                            "linear",
                            "${diplomaOro}",
                            '0.9',
                            '1.08'
                        ],
                        [
                            "eid51",
                            "scaleY",
                            2210,
                            135,
                            "linear",
                            "${diplomaOro}",
                            '1.08',
                            '0.95'
                        ],
                        [
                            "eid53",
                            "scaleY",
                            2345,
                            70,
                            "linear",
                            "${diplomaOro}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "linear",
                            "${diplomaOro}",
                            'none',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            1065,
                            0,
                            "linear",
                            "${diplomaOro}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "anim_recuadro": {
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
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            symbolName: 'simbolo_resultados',
                            rect: ['0', '0', '165', '121', 'auto', 'auto'],
                            id: 'simbolo_resultados'
                        },
                        {
                            textStyle: ['', '', '23px', '', 'none'],
                            rect: ['182px', '31px', '219px', '74px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'text_observar',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(0, 0, 0); font-size: 24px;\">Observa las&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(0, 0, 0); font-size: 24px;\">respuestas correctas</span></p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['16px', '139px', '377px', '2px', 'auto', 'auto'],
                            type: 'image',
                            id: 'img_lineadiv',
                            display: 'none',
                            clip: 'rect(0px 0px 2px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/img_lineadiv.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'rect',
                            opacity: '0',
                            rect: ['263', '155', '130', '42', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'btn_verResp',
                            cursor: 'pointer',
                            id: 'btn_verResp'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '401px', '197px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    data: [
                        [
                            "eid114",
                            "scaleX",
                            750,
                            750,
                            "easeOutQuart",
                            "${simbolo_resultados}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${text_observar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid116",
                            "display",
                            1500,
                            0,
                            "easeOutQuart",
                            "${text_observar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid115",
                            "scaleY",
                            750,
                            750,
                            "easeOutQuart",
                            "${simbolo_resultados}",
                            '0',
                            '1'
                        ],
                        [
                            "eid123",
                            "clip",
                            1500,
                            500,
                            "easeOutQuart",
                            "${img_lineadiv}",
                            [0,0,2,0],
                            [0,377,2,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid132",
                            "scaleY",
                            1750,
                            500,
                            "easeOutQuart",
                            "${btn_verResp}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid113",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${simbolo_resultados}",
                            'none',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            750,
                            0,
                            "easeOutQuart",
                            "${simbolo_resultados}",
                            'none',
                            'block'
                        ],
                        [
                            "eid121",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${img_lineadiv}",
                            'none',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            1500,
                            0,
                            "easeOutQuart",
                            "${img_lineadiv}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            1750,
                            500,
                            "easeOutQuart",
                            "${btn_verResp}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid134",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${btn_verResp}",
                            'none',
                            'none'
                        ],
                        [
                            "eid125",
                            "display",
                            1750,
                            0,
                            "easeOutQuart",
                            "${btn_verResp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid131",
                            "opacity",
                            1750,
                            500,
                            "easeOutQuart",
                            "${btn_verResp}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simbolo_resultados": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Diseo_Retroali_V2',
                            type: 'image',
                            rect: ['0px', '0px', '165px', '121px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Dise%C3%B1o_Retroali_V2-22.png', '0px', '0px']
                        },
                        {
                            id: 'Num_respondidas',
                            symbolName: 'Num_respondidas',
                            rect: ['24', '11', '48', '72', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'cantidad_preguntas',
                            symbolName: 'cantidad_preguntas',
                            rect: ['97', '22', '42', '48', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '165px', '121px']
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
                            id: 'img_btnRetroal',
                            type: 'image',
                            rect: ['0px', '0px', '130px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img_btnRetroal.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '130px', '42px']
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
                            id: 'img_btnCerrar',
                            type: 'image',
                            rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img_btnCerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '30px', '30px']
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
            "anim_popUp": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'contend_retroal',
                            type: 'image',
                            rect: ['0px', '0px', '679px', '315px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/contend_retroal.png', '0px', '0px']
                        },
                        {
                            rect: ['24px', '13px', '425px', '40px', 'auto', 'auto'],
                            id: 'text_hasFin',
                            text: '<p style=\"margin: 0px;\">​! Has finalizado la actividad !&nbsp;</p>',
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            id: 'anim-diploma',
                            symbolName: 'anim-diploma',
                            rect: ['13px', '91px', '219', '197', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'anim_recuadro',
                            symbolName: 'anim_recuadro',
                            rect: ['258px', '91px', '401', '197', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'btn_cerrarPopup',
                            symbolName: 'btn_cerrarPopup',
                            cursor: 'pointer',
                            rect: ['625px', '18px', '30', '30', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '679px', '315px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("retroal-diploma_edgeActions.js");
})("EDGE-273037625");
