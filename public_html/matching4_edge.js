/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im = 'images/',
            aud = 'media/',
            vid = 'media/',
            js = 'js/',
            fonts = {
                'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'},
    opts = {
        'gAudioPreloadPreference': 'auto',
        'gVideoPreloadPreference': 'auto'
    },
    resources = [
    ],
            scripts = [
                js + "jquery-1.11.3.min.js",
                js + "jquery-ui-1.11.4.custom/jquery-ui.min.js"
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
                                id: 'RoundRect',
                                type: 'rect',
                                rect: ['0px', '0px', '1030px', '79px', 'auto', 'auto'],
                                borderRadius: ["12px", "12px", "12px", "12px 12px"],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [1, "rgba(114,114,114,1.00)", "solid"]
                            },
                            {
                                id: 'cajatxt1',
                                type: 'text',
                                rect: ['15px', '12px', '991px', '69px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; color: rgb(59, 59, 59);\">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.&nbsp;</span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "18px", "", "none"]
                            },
                            {
                                id: 'cajatxt2',
                                type: 'text',
                                rect: ['10px', '89px', '357px', '64px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\"><span style=\"font-size: 17px; font-weight: 700; color: rgb(27, 142, 135);\">Intruccion:&nbsp;</span><span style=\"font-size: 17px; color: rgb(82, 82, 82);\">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</span> </p>",
                                font: ['source-sans-pro, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                                textStyle: ["0px", "0px", "16px", "", ""]
                            },
                            {
                                id: 'contenedor_padre',
                                symbolName: 'contenedor_padre',
                                type: 'rect',
                                rect: ['485', '153', '252', '223', 'auto', 'auto']
                            },
                            {
                                id: 'obj1_txt',
                                symbolName: 'obj1_txt',
                                type: 'rect',
                                rect: ['358', '153', '152', '45', 'auto', 'auto']
                            },
                            {
                                id: 'obj2_txt',
                                symbolName: 'obj2_txt',
                                type: 'rect',
                                rect: ['358', '198', '152', '45', 'auto', 'auto']
                            },
                            {
                                id: 'obj3_txt',
                                symbolName: 'obj3_txt',
                                type: 'rect',
                                rect: ['358', '242', '152', '45', 'auto', 'auto']
                            },
                            {
                                id: 'obj4_txt',
                                symbolName: 'obj4_txt',
                                type: 'rect',
                                rect: ['358', '287', '152', '45', 'auto', 'auto']
                            },
                            {
                                id: 'obj5_txt',
                                symbolName: 'obj5_txt',
                                type: 'rect',
                                rect: ['357', '331', '152', '45', 'auto', 'auto']
                            },
                            {
                                id: 'btn_enviar',
                                type: 'image',
                                rect: ['912px', '343px', '110px', '45px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)", im + "btn_enviar.png", '0px', '0px']
                            }
                        ],
                        style: {
                            '${Stage}': {
                                isStage: true,
                                rect: ['null', 'null', '1032px', '394px', 'auto', 'auto'],
                                overflow: 'hidden',
                                fill: ["rgba(255,255,255,1)"]
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
                "obj1_txt": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                id: 'opc1',
                                type: 'image',
                                rect: ['0px', '0px', '152px', '45px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etiqueta1.png', '0px', '0px']
                            },
                            {
                                rect: ['17px', '7px', '98px', '28px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text3',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">​Opcion 1</span></p>',
                                align: 'left',
                                type: 'text'
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                isStage: 'true',
                                rect: [undefined, undefined, '152px', '45px']
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
                "obj2_txt": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                id: 'opc2',
                                type: 'image',
                                rect: ['0px', '0px', '152px', '45px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etiqueta1.png', '0px', '0px']
                            },
                            {
                                rect: ['18px', '7px', '107px', '25px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text4',
                                text: '<p style=\"margin: 0px;\">​Opcion 2</p>',
                                align: 'left',
                                type: 'text'
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                isStage: 'true',
                                rect: [undefined, undefined, '152px', '45px']
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
                "obj3_txt": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                id: 'opc3',
                                type: 'image',
                                rect: ['0px', '0px', '152px', '45px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etiqueta1.png', '0px', '0px']
                            },
                            {
                                rect: ['19px', '8px', '101px', '27px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text5',
                                text: '<p style=\"margin: 0px;\">​Opcion 3</p>',
                                align: 'left',
                                type: 'text'
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                isStage: 'true',
                                rect: [undefined, undefined, '152px', '45px']
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
                "obj4_txt": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                id: 'opc4',
                                type: 'image',
                                rect: ['0px', '0px', '152px', '45px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etiqueta1.png', '0px', '0px']
                            },
                            {
                                rect: ['19px', '9px', '97px', '23px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text6',
                                text: '<p style=\"margin: 0px;\">​Opcion 4</p>',
                                align: 'left',
                                type: 'text'
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                isStage: 'true',
                                rect: [undefined, undefined, '152px', '45px']
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
                "obj5_txt": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                id: 'opc5',
                                type: 'image',
                                rect: ['0px', '0px', '152px', '45px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etiqueta1.png', '0px', '0px']
                            },
                            {
                                rect: ['21px', '9px', '97px', '28px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text7',
                                text: '<p style=\"margin: 0px;\">​Opcion 5</p>',
                                align: 'left',
                                type: 'text'
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                isStage: 'true',
                                rect: [undefined, undefined, '152px', '45px']
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
                "obj1_par": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '250px', '45px', 'auto', 'auto'],
                                userClass: 'parte3',
                                id: 'par1',
                                type: 'image',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/etiqueta2.png', '0px', '0px']
                            },
                            {
                                rect: ['26px', '11px', '216px', '26px', 'auto', 'auto'],
                                textStyle: ['', '', '23px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(82,82,82,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                                id: 'txt1',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 400;\">Pareja 1</span></p>',
                                align: 'left',
                                type: 'text'
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                isStage: 'true',
                                rect: [undefined, undefined, '250px', '45px']
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
                "obj2_par": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '250px', '45px', 'auto', 'auto'],
                                userClass: 'parte3',
                                id: 'par2',
                                type: 'image',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/etiqueta2.png', '0px', '0px']
                            },
                            {
                                rect: ['26px', '10px', '216px', '26px', 'auto', 'auto'],
                                textStyle: ['', '', '23px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(82,82,82,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                                id: 'txt2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 400;\">Pareja 2</span></p>',
                                align: 'left',
                                type: 'text'
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                isStage: 'true',
                                rect: [undefined, undefined, '250px', '45px']
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
                "obj3_par": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '250px', '45px', 'auto', 'auto'],
                                userClass: 'parte3',
                                id: 'par3',
                                type: 'image',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/etiqueta2.png', '0px', '0px']
                            },
                            {
                                rect: ['24px', '8px', '216px', '26px', 'auto', 'auto'],
                                textStyle: ['', '', '23px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(82,82,82,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                                id: 'txt3',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 400;\">Pareja 2</span></p>',
                                align: 'left',
                                type: 'text'
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                isStage: 'true',
                                rect: [undefined, undefined, '250px', '45px']
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
                "obj4_par": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '250px', '45px', 'auto', 'auto'],
                                userClass: 'parte3',
                                id: 'par4',
                                type: 'image',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/etiqueta2.png', '0px', '0px']
                            },
                            {
                                rect: ['23px', '10px', '216px', '26px', 'auto', 'auto'],
                                textStyle: ['', '', '23px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(82,82,82,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                                id: 'txt4',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 400;\">Pareja 2</span></p>',
                                align: 'left',
                                type: 'text'
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                isStage: 'true',
                                rect: [undefined, undefined, '250px', '45px']
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
                "obj5_par": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '250px', '45px', 'auto', 'auto'],
                                userClass: 'parte3',
                                id: 'par5',
                                type: 'image',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/etiqueta2.png', '0px', '0px']
                            },
                            {
                                rect: ['20px', '10px', '216px', '26px', 'auto', 'auto'],
                                textStyle: ['', '', '23px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(82,82,82,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                                id: 'txt5',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 400;\">Pareja 2</span></p>',
                                align: 'left',
                                type: 'text'
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                isStage: 'true',
                                rect: [undefined, undefined, '250px', '45px']
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
                "contenedor_padre": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                id: 'obj1_par',
                                symbolName: 'obj1_par',
                                rect: ['0px', '0px', '250', '45', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'obj2_par',
                                symbolName: 'obj2_par',
                                rect: ['0px', '45px', '250', '45', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'obj3_par',
                                symbolName: 'obj3_par',
                                rect: ['2px', '89px', '250', '45', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'obj4_par',
                                symbolName: 'obj4_par',
                                rect: ['2px', '134px', '250', '45', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'obj5_par',
                                symbolName: 'obj5_par',
                                rect: ['2px', '178px', '250', '45', 'auto', 'auto'],
                                type: 'rect'
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                isStage: 'true',
                                rect: [undefined, undefined, '252px', '223px']
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

    if (!window.edge_authoring_mode)
        AdobeEdge.getComposition(compId).load("matching4_edgeActions.js");
    if (!window.edge_authoring_mode)
        AdobeEdge.getComposition(compId).load("files/matching_1/main.js");
})("EDGE-18191759");
