
//Inicializa una actividad drag and drop donde a cada drop solo le corresponde un drag

function inicializarDragAndDrop(sym) {

    var stage = $(sym.getComposition().getStage().ele);
    stage.prop("intentos_previos", 0);
    stage.prop("blocked", false);

    $.getJSON("config.json", function (data) {
        $.each(data, function (key, val) {
            stage.prop(key, val);
        });
    }).done(function () {
        var cont = 0;
        $.each(stage.prop("drags"), function (key, val) {
            cont++;
        });

        stage.prop("cantidad_drags", cont);

        cont = 0;
        $.each(stage.prop("drops"), function (key, val) {
            cont++;
        });

        stage.prop("cantidad_drops", cont);

        switch (stage.prop("tipo")) {
            case "uno a uno":
            {
                inicializarDragAndDropUnoaUno(sym);
                break;
            }

            case "uno a muchos":
            {
                inicializarDragAndDropUnoaMuchos(sym);
                break;
            }
        }
        enviarEventoActividadTerminada(sym);
    });
}

//***********************************************************************



//***********************************************************************

//Evento que se dispara después de que el controlador recibe y transforma los resultados de una interacción.

$("body").on("EDGE_Recurso_postSubmitApplied", function (data) {

    var stage = $(data.sym.getComposition().getStage().ele);

    if (data.show_answers) {
        switch (stage.prop("tipo")) {
            case "uno a uno":
            {
                mostrarRespuestasDragAndDropUnoAUno(data.sym);
                break;
            }

            case "uno a muchos":
            {
                mostrarRespuestasDragAndDropUnoAMuchos(data.sym);
                break;
            }
        }
    }

    if (data.block) {
        inhabilitarDragsYDrops(data.sym);
        stage.prop("blocked", true);
    }

    stage.prop("intentos_previos", data.attempts);

});

$("body").on("EDGE_Recurso_sendPreviousData", function (data) {
    var stage = $(data.sym.getComposition().getStage().ele);
    aplicarCambiosPrevios(data.previous_data, data.sym);

    if (data.block) {
        inhabilitarDragsYDrops(data.sym);
        stage.prop("blocked", true);
    }

    if (data.attempts > 0) {
        stage.prop("intentos_previos", data.attempts);
    }
});

//***********************************************************************

//función inicializadora de Drag And Drop Uno a Uno	

function inicializarDragAndDropUnoaUno(sym)
{
    var stage = $(sym.getComposition().getStage().ele);

    var CANTIDAD_DRAGS = stage.prop("cantidad_drags");
    var CANTIDAD_DROPS = stage.prop("cantidad_drops");

    //***********************************************************************

    //Inicializar Drags

    for (var i = 1; i <= CANTIDAD_DRAGS; i++)
    {
        sym.$('DRAG_' + i).prop("nombre", "DRAG_" + i);
        sym.$('DRAG_' + i).prop("descripcion", stage.prop("drags")[i].descripcion);
        sym.$('DRAG_' + i).prop("posicion_inicial", sym.$('DRAG_' + i).position());
        sym.$('DRAG_' + i).draggable();
    }

    //***********************************************************************

    //Inicializar Drops

    for (var i = 1; i <= CANTIDAD_DROPS; i++)
    {
        sym.$('DROP_' + i).prop("current_drag", null);
        sym.$('DROP_' + i).prop("correct", false);
        sym.$('DROP_' + i).prop("descripcion", stage.prop("drops")[i].descripcion);
        sym.$('DROP_' + i).prop("nombre", "DROP_" + i);

        sym.$('DROP_' + i).droppable({
            //Cuando un drag es ubicado sobre los drops

            drop: function (event, ui) {

                var dropObj = $(this);
                var dropObjName = dropObj.prop("nombre");
                var dragObj = dropObj.prop("current_drag");

                //actualiza propiedad current_drag del objeto drop con el nuevo elemento drag soltado sobre él

                if (dragObj == null)
                {
                    dropObj.prop("current_drag", $(ui.draggable));
                }
                else {
                    if (dragObj.prop("nombre") !== $(ui.draggable).prop("nombre")) {
                        var position = dragObj.prop("posicion_inicial");
                        moverDrag(dragObj, position);
                        dropObj.prop("current_drag", $(ui.draggable));
                    }
                }

                //Establece la propiedad correct dependiendo de si el objeto soltado corresponde a la respuesta.

                var dragObjName = dropObj.prop("current_drag").prop("nombre");
                if (nombreANumero(dropObjName) == nombreANumero(dragObjName)) {
                    dropObj.prop("correct", true);
                }
                else {
                    dropObj.prop("correct", false);
                }
            },
            //Cuando un drag es retirado del elemento drop.
            out: function (event, ui) {
                var dropObj = $(this);
                var dragObj = $(ui.draggable);
                dropObj.prop("current_drag", null);
                dropObj.prop("correct", false);
            }
        });
    }
}

//***********************************************************************

//función inicializadora de Drag And Drop Uno a Uno	

function inicializarDragAndDropUnoaMuchos(sym)
{
    var stage = $(sym.getComposition().getStage().ele);

    var CANTIDAD_DRAGS = stage.prop("cantidad_drags");
    var CANTIDAD_DROPS = stage.prop("cantidad_drops");

    //***********************************************************************

    //Inicializar Drags

    for (var i = 1; i <= CANTIDAD_DRAGS; i++)
    {
        sym.$('DRAG_' + i).prop("nombre", "DRAG_" + i);
        sym.$('DRAG_' + i).prop("descripcion", stage.prop("drags")[i].descripcion);
        sym.$('DRAG_' + i).prop("posicion_inicial", sym.$('DRAG_' + i).position());
        sym.$('DRAG_' + i).draggable();
    }

    //***********************************************************************

    //Inicializar Drops
    for (var i = 1; i <= CANTIDAD_DROPS; i++)
    {
        sym.$('DROP_' + i).prop("current_drags", {});
        sym.$('DROP_' + i).prop("correct", false);
        sym.$('DROP_' + i).prop("descripcion", stage.prop("drops")[i].descripcion);
        sym.$('DROP_' + i).prop("nombre", "DROP_" + i);

        sym.$('DROP_' + i).droppable({
            //Cuando un drag es ubicado sobre los drops

            drop: function (event, ui) {

                var dropObj = $(this);
                var dropObjName = dropObj.prop("nombre");
                var dragObj = $(ui.draggable);

                var solutionArray = stage.prop("drops")[nombreANumero(dropObj.prop("nombre"))].accepted;

                dropObj.prop("current_drags")[dragObj.prop("nombre")] = dragObj;

                var cont = 0;
                $.each(dropObj.prop("current_drags"), function (key, val) {
                    cont++;
                });

                var correct = true;
                if (solutionArray.length == cont) {
                    $.each(dropObj.prop("current_drags"), function (key, val) {
                        if ($.inArray(nombreANumero(key), solutionArray) < 0) {
                            correct = false;
                            return false;
                        }
                    });
                } else {
                    correct = false;
                }

                dropObj.prop("correct", correct);
            },
            //Cuando un drag es retirado del elemento drop.
            out: function (event, ui) {
                var dropObj = $(this);
                var dragObj = $(ui.draggable);
                if (dropObj.prop("current_drags").hasOwnProperty(dragObj.prop("nombre"))) {
                    delete dropObj.prop("current_drags")[dragObj.prop("nombre")];
                }
            }
        });
    }
}

//***********************************************************************

//revisa la propiedad correct de todos los drops para verificar si la respuesta es correcta y ejecuta una acción
function checkAnswersDragAndDrop(sym) {

    var stage = $(sym.getComposition().getStage().ele);
    if (!stage.prop("blocked"))
    {
        var idInteraccion = getIdInteraccion();

        var objRespuesta;
        switch (stage.prop("tipo")) {
            case "uno a uno":
            {
                objRespuesta = getRespuestaDragAndDropUnoAUno(sym);
                break;
            }

            case "uno a muchos":
            {
                objRespuesta = getRespuestaDragAndDropUnoAMuchos(sym);
                break;
            }

        }

        var CANTIDAD_DROPS = stage.prop("cantidad_drops");

        var intentos = stage.prop("num_intentos");

        var answerCorrect = true;

        for (var i = 1; i <= CANTIDAD_DROPS; i++) {
            var correct = sym.$('DROP_' + i).prop("correct");
            if (!correct) {
                answerCorrect = false;
                break;
            }
        }

        if (answerCorrect) {
            enviarEventoInteraccion(idInteraccion, "matching", objRespuesta, "correct", stage.prop("intentos_previos"), stage.prop("num_intentos"), sym);
        }
        else {
            enviarEventoInteraccion(idInteraccion, "matching", objRespuesta, "incorrect", stage.prop("intentos_previos"), stage.prop("num_intentos"), sym);
        }
    }

}

//***********************************************************************

//Mueve todos los drags al centro de su respectivo elemento drop

function mostrarRespuestasDragAndDropUnoAUno(sym) {
    var stage = $(sym.getComposition().getStage().ele);
    var CANTIDAD_DRAGS = stage.prop("cantidad_drags");
    var CANTIDAD_DROPS = stage.prop("cantidad_drops");

    for (var i = 1; i <= CANTIDAD_DROPS; i++) {
        ubicarDragEnCentroDeDrop(sym.$('DRAG_' + i), sym.$('DROP_' + i));
    }
}

//***********************************************************************

//Mueve todos los drags al centro de su respectivo elemento drop

function mostrarRespuestasDragAndDropUnoAMuchos(sym) {

    var stage = $(sym.getComposition().getStage().ele);
    var dropsObj = stage.prop("drops");

    $.each(dropsObj, function (key, val) {
        var arrayDrags = [];
        $.each(val.accepted, function (keys, values) {
            arrayDrags.push(sym.$('DRAG_' + values));
        });
        ubicarDragsEnDrop(arrayDrags, sym.$('DROP_' + key));
    });
}

//***********************************************************************

//Deshabilita los elementos para que no puedan ser arrastrados nuevamente.

function inhabilitarDragsYDrops(sym) {
    var stage = $(sym.getComposition().getStage().ele);
    var CANTIDAD_DRAGS = stage.prop("cantidad_drags");
    var CANTIDAD_DROPS = stage.prop("cantidad_drops");

    for (var i = 1; i <= CANTIDAD_DROPS; i++) {
        sym.$('DROP_' + i).droppable("destroy");
    }

    for (var i = 1; i <= CANTIDAD_DRAGS; i++) {
        sym.$('DRAG_' + i).draggable("destroy");
    }
}

//***********************************************************************

//Genera una respuesta en formato JSON para subir a la plataforma

function getRespuestaDragAndDropUnoAUno(sym) {

    var obj = {};

    var stage = $(sym.getComposition().getStage().ele);
    var CANTIDAD_DROPS = stage.prop("cantidad_drops");

    for (var i = 1; i <= CANTIDAD_DROPS; i++) {

        var dropDesc = sym.$('DROP_' + i).prop("descripcion");
        var curDrag = sym.$('DROP_' + i).prop("current_drag");
        if (curDrag !== null) {
            obj["DROP_" + i + "_(" + dropDesc + ")"] = [curDrag.prop("nombre") + "_(" + curDrag.prop("descripcion") + ")"];
        } else {
            obj["DROP_" + i + "_(" + dropDesc + ")"] = [];
        }
    }

    return obj;
}

//***********************************************************************

//Genera una respuesta en formato JSON para subir a la plataforma

function getRespuestaDragAndDropUnoAMuchos(sym) {

    var obj = {};

    var stage = $(sym.getComposition().getStage().ele);
    var CANTIDAD_DROPS = stage.prop("cantidad_drops");

    for (var i = 1; i <= CANTIDAD_DROPS; i++) {
        var dropDesc = sym.$('DROP_' + i).prop("descripcion");
        var curDrags = sym.$('DROP_' + i).prop("current_drags");
        var arrayDrags = [];
        $.each(curDrags, function (key, val) {
            arrayDrags.push(key + "_(" + val.prop("descripcion") + ")");
        });

        obj["DROP_" + i + "_(" + dropDesc + ")"] = arrayDrags;
    }

    return obj;
}

//***********************************************************************

//Mueve un elemento drag a la posicion deseada

function moverDrag(dragObj, position) {
    dragObj.css({top: position.top, left: position.left});
}

//***********************************************************************

//Ubica un drag en el centro de un drop pasados como parámetros.

function ubicarDragEnCentroDeDrop(drag, drop) {

    var dropPosition = drop.position();

    var dragWidth = drag.width();
    var dragHeight = drag.height();

    var dropWidth = drop.width();
    var dropHeight = drop.height();

    var newposition = {top: ((dropPosition.top + (dropHeight / 2)) - (dragHeight / 2)), left: ((dropPosition.left + (dropWidth / 2)) - (dragWidth / 2))};
    moverDrag(drag, newposition);

}

//***********************************************************************

//Ubica un drag en el centro de un drop pasados como parámetros.

function ubicarDragsEnDrop(drags, drop) {
    var dropPosition = drop.position();
    var dropWidth = drop.width();
    var dropHeight = drop.height();

    var currentTop = dropPosition.top;
    var currentLeft = dropPosition.left;

    for (var i = 0; i < drags.length; i++) {
        if ((currentLeft + drags[i].width()) > (dropPosition.left + dropWidth))
        {
            currentTop += drags[i].height;
            currentLeft = dropPosition.left;
        } else {
            var newposition = {top: currentTop, left: currentLeft};
            moverDrag(drags[i], newposition);
            currentLeft += drags[i].width();
        }
    }
}

//***********************************************************************

//retorna la parte numérica del nombre de un elemento
// ej: DROP_1 -> 1

function nombreANumero(strNombre) {
    if (strNombre.indexOf("_") >= 0) {
        var strArray = strNombre.split("_");
        return strArray[1];
    }
    else {
        return "";
    }
}

//***********************************************************************

//analiza los datos recibidos del controlador y aplica los cambios correspondientes a la actividad.

function aplicarCambiosPrevios(dataObj, sym) {

    var stage = $(sym.getComposition().getStage().ele);

    $.each(dataObj, function (key, val) {
        var dropId = key.split("_")[1];
        var dropObj = sym.$('DROP_' + dropId);
        switch (stage.prop("tipo")) {

            case "uno a uno":
            {
                $.each(val, function (keys, value) {
                    var dragId = value.split("_")[1];
                    ubicarDragEnCentroDeDrop(sym.$('DRAG_' + dragId), dropObj);
                    dropObj.prop("current_drag", sym.$('DRAG_' + dragId));
                    if (dropId === dragId) {
                        dropObj.prop("correct", true);
                    } else {
                        dropObj.prop("correct", false);
                    }
                });
                break;
            }

            case "uno a muchos":
            {
                var arrayDrags = [];
                var curDrags = {};
                var cont = 0;
                $.each(val, function (keys, value) {
                    arrayDrags.push(sym.$('DRAG_' + nombreANumero(value)))
                    curDrags['DRAG_' + nombreANumero(value)] = sym.$('DRAG_' + nombreANumero(value));
                    cont++;
                });

                ubicarDragsEnDrop(arrayDrags, dropObj);
                dropObj.prop("current_drags", curDrags);

                var solutionArray = stage.prop("drops")[dropId].accepted;
                var correct = true;

                if (solutionArray.length == cont) {
                    $.each(dropObj.prop("current_drags"), function (key, val) {
                        if ($.inArray(nombreANumero(key), solutionArray) < 0) {
                            correct = false;
                            return false;
                        }
                    });
                } else {
                    correct = false;
                }

                dropObj.prop("correct", correct);
                break;
            }
        }

    });
}

