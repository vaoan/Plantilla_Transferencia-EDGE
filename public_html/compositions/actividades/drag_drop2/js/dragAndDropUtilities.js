
//Inicializa una actividad drag and drop donde a cada drop solo le corresponde un drag

function inicializarDragAndDrop(sym) {

    var stage = $(sym.getComposition().getStage().ele);
    stage.prop("intentos_previos", 0);

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
        }
    }

    if (data.block) {
        inhabilitarDragsYDrops(data.sym);
    }

    stage.prop("intentos_previos", data.attempts);
    alert("intentos: " + data.attempts);

});

$("body").on("EDGE_Recurso_sendPreviousData", function (data) {

    aplicarCambiosPrevios(data.previous_data, data.sym);

    if (data.block) {
        inhabilitarDragsYDrops(data.sym);
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

//revisa la propiedad correct de todos los drops para verificar si la respuesta es correcta y ejecuta una acción
function checkAnswersDragAndDrop(sym) {

    var idInteraccion = getIdInteraccion();
    var strRespuesta = getRespuestaDragAndDropUnoAUno(sym);

    console.log(strRespuesta);

    var stage = $(sym.getComposition().getStage().ele);
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
        enviarEventoInteraccion(idInteraccion, "matching", strRespuesta, "correct", stage.prop("intentos_previos"), stage.prop("num_intentos"), sym);
    }
    else {
        enviarEventoInteraccion(idInteraccion, "matching", strRespuesta, "incorrect", stage.prop("intentos_previos"), stage.prop("num_intentos"), sym);
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

    var obj = '{';

    var stage = $(sym.getComposition().getStage().ele);
    var CANTIDAD_DROPS = stage.prop("cantidad_drops");

    for (var i = 1; i <= CANTIDAD_DROPS; i++) {
        if (i > 1) {
            obj += ",";
        }
        obj += "'DROP_" + i + "_(" + sym.$('DROP_' + i).prop("descripcion") + ")':";
        obj += "[";
        if (sym.$('DROP_' + i).prop("current_drag") != null) {
            obj += sym.$('DROP_' + i).prop("current_drag").prop("nombre") + "_(" + sym.$('DROP_' + i).prop("current_drag").prop("descripcion") + ")";
        }
        obj += "]";
    }

    obj += "}";

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

        switch (stage.prop("tipo")) {

            case "uno a uno":
            {
                $.each(val, function (keys, value) {
                    var dragId = value.split("_")[1];
                    ubicarDragEnCentroDeDrop(sym.$('DRAG_' + dragId), sym.$('DROP_' + dropId));
                });
                break;
            }

        }

    });
}


