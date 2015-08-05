/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'abel, sans-serif': '<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>',
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.11.3.min.js",
            js+"main.js"
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
                            id: 'popup_creditos',
                            symbolName: 'popup_creditos',
                            type: 'rect',
                            rect: ['0', '-1px', '763', '471', 'auto', 'auto']
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
                    duration: 4000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "popup_creditos": {
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
                            id: 'ventana_popup',
                            rect: ['0px', '-2px', '763px', '469px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ventana_popup.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'creditos',
                            symbolName: 'creditos',
                            rect: ['70', '107px', '623', '654', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'falsob_boton',
                            symbolName: 'falsob_boton',
                            rect: ['2px', '423px', '760', '48', 'auto', 'auto']
                        },
                        {
                            rect: ['627px', '431px', '108px', '34px', 'auto', 'auto'],
                            id: 'boton_ver2',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/boton_ver.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'banner_superior',
                            symbolName: 'banner_superior',
                            rect: ['2', '0px', '760', '87', 'auto', 'auto']
                        },
                        {
                            rect: ['720px', '14px', '30px', '30px', 'auto', 'auto'],
                            id: 'cerrar',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '763px', '471px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "titulo_creditos": {
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
                            id: 'creditos',
                            rect: ['0px', '8px', '39px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/creditos.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 300; font-family: source-sans-pro, sans-serif; font-size: 40px; color: rgb(255, 255, 255);\">Créditos</span></p>',
                            rect: ['55px', '0px', '373px', '39px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '428px', '47px']
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
            "creditos": {
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
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0px', '-360px', '623px', '654px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(0, 67, 95); font-size: 14px; font-family: source-sans-pro, sans-serif; font-weight: 600;\">Autores</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">Claudia Milena Pérez Guerrero\n</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">Diana Marcela Herrera Torres\n</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">Kelly Dainne Puentes Velasco\n</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">William Fernando Guerra Borrero\n</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">Alba Lucía Beltrán Poveda</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">​</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">\n</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">\n</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 14px; font-family: source-sans-pro, sans-serif; color: rgb(0, 67, 95); font-weight: 600;\">Diseñadores ​instruccionales</span><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">Ana Vela Rodríguez Velásquez&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">Emanuel Fernando Díaz Palencia&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">Jeiner Leandro Velandia Sanabria&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">Nancy &nbsp;Cruz Ulloa&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">Jorge Edison Rojas Rodríguez</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 12px; color: rgb(0, 0, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Fabio Rozo Barrera&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">​</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">&nbsp;</span><span style=\"font-size: 14px; font-family: source-sans-pro, sans-serif; color: rgb(0, 67, 95); font-weight: 600;\">Diseñadores gráficos</span><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">​Diana Duque Avendaño</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51); font-size: 12px;\">Andrés Eduardo Segura</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51); font-size: 12px;\">Edwin Andrés Díaz pinzón</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51); font-size: 12px;\">​Laura Victoria Anzola Moreno</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51); font-size: 12px;\">​</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 14px; font-family: source-sans-pro, sans-serif; color: rgb(0, 67, 95); font-weight: 600;\">Integrador de software&nbsp;</span></p><p style=\"margin: 0px; text-align: center; color: rgb(0, 0, 51); font-family: source-sans-pro, sans-serif; font-size: 12px;\">Andrés Eduardo Segura</p><p style=\"margin: 0px; text-align: center; color: rgb(0, 0, 51); font-family: source-sans-pro, sans-serif; font-size: 12px;\">​Diana Duque Avendaño</p><p style=\"margin: 0px; text-align: center; color: rgb(0, 0, 51); font-family: source-sans-pro, sans-serif; font-size: 12px;\">​Laura Victoria Anzola Moreno</p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">​</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 14px; font-family: source-sans-pro, sans-serif; color: rgb(0, 67, 95); font-weight: 600;\">Implementador técnico&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">Paola Andrea Cruz Espinosa&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">​</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 14px; font-family: source-sans-pro, sans-serif; color: rgb(0, 67, 95); font-weight: 600;\">Desarrollador Web&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">Heiner &nbsp;Wbeimar &nbsp;Angarita Maldonado</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 12px; font-family: source-sans-pro, sans-serif; color: rgb(0, 0, 51);\">​Santiago Peñuela Arcila</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            clip: 'rect(0px 623px 654px 0px)',
                            id: 'Text2'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '623px', '654px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid5",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${Text2}",
                            '0px',
                            '-360px'
                        ]
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
                            type: 'image',
                            id: 'banner',
                            rect: ['0px', '0px', '760px', '87px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/banner.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'titulo_creditos',
                            symbolName: 'titulo_creditos',
                            rect: ['27px', '20px', '428', '47', 'auto', 'auto']
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
            "falsob_boton": {
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
                            id: 'falso_blanco',
                            rect: ['0px', '0px', '760px', '48px', 'auto', 'auto'],
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("popup_creditos_edgeActions.js");
})("EDGE-35468122");
