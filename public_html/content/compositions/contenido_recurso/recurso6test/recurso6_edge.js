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
                            id: 'caja_instruccion',
                            type: 'image',
                            rect: ['4px', '7px', '1023px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"caja_instruccion.png",'0px','0px']
                        },
                        {
                            id: 'txt_intruccion',
                            type: 'text',
                            rect: ['26px', '21px', '980px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; font-size: 14px;\">Instrucción: </span>Empecemos por ver un ejemplo de cómo se puede evidenciar la competencia sociolingüística en una situación comunicativa. Observemos la siguiente situación comunicativa.&nbsp;</p>",
                            font: ['source-sans-pro, sans-serif', [12, "px"], "rgba(19,27,47,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'B1XMKG',
                            type: 'image',
                            rect: ['346px', '86px', '274px', '195px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"B1XMKG.jpg",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['26px', '292px', '980px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Tal como observamos en el ejemplo anterior, dependiendo de las relaciones sociales que se tengan hay algunas expresiones que son socialmente requeridas en una situación comunicativa. En este caso, hay una relación social de jerarquía entre un profesor y un estudiante que, para muchas personas requiere usar cierto tipo de palabras.&nbsp;</p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [12, "px"], "rgba(19,27,47,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'txt_cuadroazul',
                            type: 'group',
                            rect: ['558', '332', '463', '56', 'auto', 'auto'],
                            c: [
                            {
                                id: 'cuadro',
                                type: 'image',
                                rect: ['0px', '0px', '463px', '56px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"cuadro.png",'0px','0px']
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['15px', '8px', '438px', '42px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¿Crees que este tipo de elecciones lingüísticas están relacionadas con la competencia sociolingüística?</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [12, "px"], "rgba(19,27,47,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'btnconversacion1',
                            symbolName: 'btnconversacion',
                            type: 'rect',
                            rect: ['427px', '139px', '29', '29', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnconversacion2',
                            symbolName: 'btnconversacion',
                            display: 'none',
                            type: 'rect',
                            rect: ['353px', '175px', '29', '29', 'auto', 'auto']
                        },
                        {
                            id: 'btnconversacion3',
                            symbolName: 'btnconversacion',
                            display: 'none',
                            type: 'rect',
                            rect: ['468px', '233px', '29', '29', 'auto', 'auto']
                        },
                        {
                            id: 'btnconversacion4',
                            symbolName: 'btnconversacion',
                            display: 'none',
                            type: 'rect',
                            rect: ['544px', '125px', '29', '29', 'auto', 'auto']
                        },
                        {
                            id: 'btnconversacion5',
                            symbolName: 'btnconversacion',
                            display: 'none',
                            type: 'rect',
                            rect: ['588px', '212px', '29', '29', 'auto', 'auto']
                        },
                        {
                            id: 'globo1',
                            display: 'block',
                            type: 'image',
                            rect: ['380px', '65px', '108px', '89px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"globo1.png",'0px','0px']
                        },
                        {
                            id: 'globo2',
                            display: 'none',
                            type: 'image',
                            rect: ['251px', '115px', '156px', '89px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"globo2.png",'0px','0px']
                        },
                        {
                            id: 'glo3',
                            display: 'none',
                            type: 'image',
                            rect: ['497px', '203px', '90px', '89px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"glo3.png",'0px','0px']
                        },
                        {
                            id: 'globo4',
                            display: 'none',
                            type: 'image',
                            rect: ['559px', '52px', '181px', '126px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"globo4.png",'0px','0px']
                        },
                        {
                            id: 'globo5',
                            display: 'none',
                            type: 'image',
                            rect: ['617px', '167px', '125px', '89px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"globo5.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1032px', '394px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid31",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnconversacion3}",
                            '468px',
                            '468px'
                        ],
                        [
                            "eid27",
                            "display",
                            0,
                            0,
                            "linear",
                            "${globo2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btnconversacion5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${glo3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnconversacion1}",
                            '139px',
                            '139px'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${globo4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnconversacion4}",
                            '125px',
                            '125px'
                        ],
                        [
                            "eid35",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btnconversacion4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnconversacion3}",
                            '233px',
                            '233px'
                        ],
                        [
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${globo5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnconversacion1}",
                            '427px',
                            '427px'
                        ],
                        [
                            "eid25",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnconversacion2}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid43",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnconversacion5}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid19",
                            "display",
                            0,
                            0,
                            "linear",
                            "${globo1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btnconversacion2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid38",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnconversacion4}",
                            '544px',
                            '544px'
                        ],
                        [
                            "eid44",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnconversacion5}",
                            '212px',
                            '212px'
                        ],
                        [
                            "eid28",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btnconversacion3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnconversacion2}",
                            '353px',
                            '353px'
                        ]
                    ]
                }
            },
            "btnconversacion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '29px', '29px', 'auto', 'auto'],
                            id: 'btn_conversacion',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_conversacion.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '29px', '29px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid13",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${btn_conversacion}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${btn_conversacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${btn_conversacion}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16",
                            "scaleY",
                            500,
                            500,
                            "linear",
                            "${btn_conversacion}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("recurso6_edgeActions.js");
})("EDGE-24020702");
