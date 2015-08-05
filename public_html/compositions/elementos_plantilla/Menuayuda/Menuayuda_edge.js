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
                            id: 'popup_ayuda',
                            symbolName: 'popup_ayuda',
                            type: 'rect',
                            rect: ['0', '-3', '763', '917', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '763px', '471px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [

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
                            rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                            id: 'cerrar',
                            type: 'image',
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
            "banner_superior": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '760px', '87px', 'auto', 'auto'],
                            id: 'banner',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/banner.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; color: rgb(255, 255, 255); font-weight: 300; font-size: 30px;\">Menú de ayuda</span></p>',
                            rect: ['83px', '24px', '414px', '39px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            rect: ['23px', '26px', '39px', '39px', 'auto', 'auto'],
                            id: 'icono_help',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icono_help.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '760px', '87px']
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
            "btn_verdenuevo": {
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
                            id: 'boton_ver',
                            rect: ['0px', '0px', '108px', '34px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/boton_ver.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '34px']
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
            "falso_blanco": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '760px', '48px', 'auto', 'auto'],
                            id: 'falso_blanco',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/falso_blanco.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '760px', '48px']
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
            "popup_ayuda": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '763px', '471px', 'auto', 'auto'],
                            id: 'ventana_popup',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ventana_popup.png', '0px', '0px']
                        },
                        {
                            rect: ['6px', '-402px', '752', '828', 'auto', 'auto'],
                            id: 'descripccion',
                            symbolName: 'descripccion',
                            type: 'rect'
                        },
                        {
                            rect: ['41px', '439px', '29px', '29px', 'auto', 'auto'],
                            id: 'preguntas',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/preguntas.png', '0px', '0px']
                        },
                        {
                            rect: ['2px', '426px', '760', '48', 'auto', 'auto'],
                            id: 'falso_blanco2',
                            symbolName: 'falso_blanco',
                            type: 'rect'
                        },
                        {
                            rect: ['626px', '434px', '108', '34', 'auto', 'auto'],
                            id: 'btn_verdenuevo',
                            symbolName: 'btn_verdenuevo',
                            type: 'rect'
                        },
                        {
                            rect: ['2px', '2px', '760', '87', 'auto', 'auto'],
                            id: 'banner_superior',
                            symbolName: 'banner_superior',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'btn_cerrar',
                            symbolName: 'btn_cerrar',
                            cursor: 'pointer',
                            rect: ['720px', '18px', '30', '30', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '763px', '917px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "top",
                            250,
                            5750,
                            "linear",
                            "${descripccion}",
                            '89px',
                            '-402px'
                        ]
                    ]
                }
            },
            "descripccion": {
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
                            id: 'descrip_manual',
                            rect: ['0px', '0px', '752px', '828px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/descrip_manual.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '752px', '828px']
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
            "d_home": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'btn_home',
                            type: 'image',
                            rect: ['0px', '3px', '29px', '29px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_home.png', '0px', '0px']
                        },
                        {
                            rect: ['45px', '0px', '649px', '25px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '600', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; color: rgb(0, 0, 51); font-weight: 600; font-family: source-sans-pro, sans-serif;\">Regresar a menú lecciones:&nbsp;</span><span style=\"color: rgb(0, 0, 51); font-family: source-sans-pro, sans-serif; font-weight: 400; font-size: 12px;\">botón que permite regresar a la pantalla de la lección.</span><span style=\"font-size: 12px; color: rgb(0, 0, 51); font-weight: 600; font-family: source-sans-pro, sans-serif;\"> </span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '691px', '32px']
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
            "d_Bibliografia": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'btn_bibliografia',
                            rect: ['0px', '6px', '29px', '29px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_bibliografia.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '600', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; color: rgb(0, 0, 51); font-family: source-sans-pro, sans-serif;\">Bibliografía: </span><span style=\"font-size: 12px; color: rgb(0, 0, 51); font-family: source-sans-pro, sans-serif; font-weight: 400;\">información bibliográfica de los documentos referenciados y los consultados para la elaboración del contenido.</span></p>',
                            align: 'left',
                            rect: ['46px', '0px', '637px', '30px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '683px', '35px']
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
            "d_Glosario": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '600', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 12px; color: rgb(0, 0, 51);\">Glosario: </span><span style=\"font-family: source-sans-pro, sans-serif; font-size: 12px; color: rgb(0, 0, 51); font-weight: 400;\">términos poco conocidos, de difícil interpretación y que no son comúnmente utilizados en la temática del contenido.</span></p>',
                            align: 'left',
                            rect: ['46px', '0px', '645px', '20px', 'auto', 'auto']
                        },
                        {
                            id: 'glosario',
                            rect: ['0px', '5px', '29px', '29px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/glosario.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '691px', '34px']
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
            "d_mapa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text5',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 12px; color: rgb(0, 0, 51); font-weight: 600;\">Mapa conceptual: </span><span style=\"font-family: source-sans-pro, sans-serif; font-size: 12px; color: rgb(0, 0, 51);\">es una representación gráfica que presenta la relación de los conceptos de los temas a tratar en el contenido.</span></p>',
                            align: 'left',
                            rect: ['46px', '0px', '645px', '20px', 'auto', 'auto']
                        },
                        {
                            id: 'mapa',
                            rect: ['0px', '4px', '29px', '29px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mapa.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '691px', '33px']
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
            "d_Sapertura": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Sapertura',
                            rect: ['0px', '8px', '29px', '29px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Sapertura.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text6',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 0, 51); font-size: 12px; font-weight: 600;\">Sensibilización de apertura: </span><span style=\"color: rgb(0, 0, 51); font-size: 12px;\">aquí inicia su proceso de aprendizaje pormedio de un episodio animado.</span></p>',
                            align: 'left',
                            rect: ['46px', '0px', '645px', '32px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '691px', '37px']
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
            "d_Context": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text7',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 12px; font-weight: 600; color: rgb(0, 0, 51);\">Contextualización:&nbsp;</span><span style=\"font-size: 12px;\">aquí encontrará la introducción a la temática de estudio.</span><span style=\"font-size: 12px; font-weight: 600; color: rgb(0, 0, 51);\"> </span></p>',
                            align: 'left',
                            rect: ['46px', '0px', '645px', '32px', 'auto', 'auto']
                        },
                        {
                            id: 'contextualizacion',
                            rect: ['0px', '8px', '29px', '29px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/contextualizacion.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '691px', '37px']
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
            "d_contenidos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text8',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 12px; font-weight: 600; color: rgb(0, 0, 51);\">Contenidos y actividades:&nbsp;</span><span style=\"color: rgb(0, 0, 51); font-size: 12px;\">Son recursos educativos para la construcción y apropiación de saberes.</span></p>',
                            align: 'left',
                            rect: ['46px', '0px', '645px', '32px', 'auto', 'auto']
                        },
                        {
                            id: 'contenidos',
                            rect: ['0px', '7px', '29px', '29px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/contenidos.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '691px', '36px']
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
            "items_descrip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'd_Glosario',
                            rect: ['0px', '84px', '691', '34', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'd_Glosario'
                        },
                        {
                            id: 'd_home',
                            rect: ['0px', '0px', '691', '32', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'd_home'
                        },
                        {
                            id: 'd_Bibliografia',
                            rect: ['0px', '39px', '683', '35', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'd_Bibliografia'
                        },
                        {
                            id: 'd_Sapertura',
                            rect: ['0px', '162px', '691', '37', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'd_Sapertura'
                        },
                        {
                            type: 'text',
                            rect: ['46px', '291px', '645px', '32px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 51); font-size: 12px; font-weight: 600;\">Recordemos: </span><span style=\"color: rgb(0, 0, 51); font-size: 12px;\">es un resumen breve de los contenidos principales del tema.&nbsp;</span></p>',
                            id: 'Text9',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            id: 'recordemos',
                            rect: ['0px', '297px', '29px', '29px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/recordemos.png', '0px', '0px']
                        },
                        {
                            id: 'd_mapa',
                            rect: ['0px', '125px', '691', '33', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'd_mapa'
                        },
                        {
                            id: 'd_Context',
                            rect: ['0px', '205px', '691', '37', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'd_Context'
                        },
                        {
                            id: 'd_contenidos',
                            rect: ['0px', '247px', '691', '36', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'd_contenidos'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '691px', '326px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Menuayuda_edgeActions.js");
})("EDGE-35995121");
