/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.10.2.js",
            js+"jquery-ui-1.10.4.custom.js",
            js+"jquery-ui-1.10.4.custom.min.js",
            js+"dragAndDropUtilities.js",
            js+"interactionUtilities.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['1633px', '73px', '235px', '138px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'DROP_1',
                            symbolName: 'DROP_1',
                            type: 'rect',
                            rect: ['353px', '67', '256', '138', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_2',
                            symbolName: 'DROP_2',
                            type: 'rect',
                            rect: ['347', '267', '270', '138', 'auto', 'auto']
                        },
                        {
                            id: 'DRAG_2',
                            symbolName: 'DRAG_2',
                            type: 'rect',
                            rect: ['94', '298', '104', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_1',
                            symbolName: 'DRAG_1',
                            type: 'rect',
                            rect: ['101', '103', '94', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Submit',
                            symbolName: 'Submit',
                            type: 'rect',
                            rect: ['264', '445', '165', '38', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_3',
                            symbolName: 'DRAG_3',
                            type: 'rect',
                            rect: ['229', '211', '56', '54', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_4',
                            symbolName: 'DRAG_4',
                            type: 'rect',
                            rect: ['257', '53', '28', '96', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '696px', '508px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(255,255,255,1.00)',0],['rgba(237,232,198,0.85)',99]]]]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid12",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(237,232,198,0.85)',99]]],
                            [270,[['rgba(255,255,255,1.00)',0],['rgba(237,232,198,0.85)',99]]]
                        ],
                        [
                            "eid11",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,1)',
                            'rgba(255,255,255,1)'
                        ],
                        [
                            "eid14",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '696px',
                            '696px'
                        ],
                        [
                            "eid13",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '508px',
                            '508px'
                        ]
                    ]
                }
            },
            "DRAG_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '104px', '81px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(22,236,102,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '104px', '81px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "DROP_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '256px', '138px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(240,26,26,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '256px', '138px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "DROP_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '270px', '138px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(22,8,236,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '270px', '138px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid16",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'rgba(22,8,236,1.00)',
                            'rgba(22,8,236,1.00)'
                        ]
                    ]
                }
            },
            "DRAG_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '94px', '81px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(236,21,202,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '94px', '81px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Submit": {
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
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '165px', '38px', 'auto', 'auto'],
                            fill: ['rgba(179,156,0,1.00)']
                        },
                        {
                            rect: ['11px', '7px', '154px', '20px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Soy un Botón</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '165px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "DRAG_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '56px', '54px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(224,105,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '56px', '54px']
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
            "DRAG_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '28px', '96px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(12,224,204,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '28px', '96px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drag_drop2_edgeActions.js");
})("EDGE-6342212");
