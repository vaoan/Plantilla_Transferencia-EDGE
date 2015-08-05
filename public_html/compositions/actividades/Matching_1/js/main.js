/* Santiago Peñuela Arcila - 31/07/2015 
 Evento Trigger que se ejecuta en la línea de tiempo principal de "_edgeActions.js" bajo el nombre "enviar"
 Función: recibe "evt" - evento que se ejecuta en "_edgeActions.js".
 Llama, mediante ajax, el archivo html para incrustarlo en el símbolo dentro del Edge, pues se creó un archivo nuevo (html)
 que se encarga de tener todas las acciones ".sortable" de jQuery UI y parametrización del "config.json".
 Posteriormente, llama el "config.json" para poblar la lista "ul#list_sort" con las palabras al azar, modificadas para
 que no siempre se muestren en el órden correcto. Al finalizar, le da el evento jQuery UI "sortable", para que los
 elementos de la lista se pueda arrastrar y acomodar cuando se suelta en algún lugar de la lista misma, además 
 guarda el "config.json" dentro de el simbolo principal y la cantidad de intentos con la que inicia el usuario. */
$('body').on('ed_activity_enviar', function (evt)
{
    var position_array = [];
    var j, temp;

    $.ajax({url: "index.html", success: function (result) {
            evt.sym.$('contenedor_padre').html(result);
            $.getJSON('config.json', function (json_content) {
                $.each(json_content.words, function (pos, json_word) {
                    position_array[pos] = json_word.word;
                });
                for (var i = position_array.length - 1; i >= 0; i--)
                {
                    j = Math.floor(Math.random() * (i + 1));
                    temp = position_array[i];
                    position_array[i] = position_array[j];
                    position_array[j] = temp;
                    $("ul#list_sort li:nth-child(" + (i + 1) + ")", evt.sym.$('contenedor_padre')).html(position_array[i]);
                }
                $("ul#list_sort", evt.sym.$('contenedor_padre')).sortable();
                evt.sym.$("contenedor_padre").prop('ed_json_object', json_content);
                evt.sym.$("contenedor_padre").prop('ed_user_attemps', 0);
            });
        }});
});

/*
 Evento Trigger que se ejecuta en la línea de tiempo principal de "_edgeActions.js" bajo el nombre "ed_check_list"
 Función: recibe "evt" - evento que se ejecuta en "_edgeActions.js". Se ejecuta cuando el usuario da click en el
 botón "revisar".
 Se crea la variable/función "check_order", la cual tiene los siguientes atributos:
 "retorno_datos": variable que contiene todos los datos que se van a imprimir como propiedad en el Edge para uso
 de SCORM.
 "activity_score": variable equivalente al puntaje que saca el usuario al realizar la actividad.
 "retorno_datos.user_answer": corresponde a un atributo de la variable "retorno datos" encargada de conservar
 en un arreglo, las respuestas del usuario.
 "json_content": captura el objeto json del Edge y lo conserva en dicha variable.
 
 Funciones:
 1. Captura cada una de las respuestas del usuario y las guarda en "retorno_datos.user_answer" para posteriormente, comparar
 con el JSON si las respuestas están bien o mal, además, de averiguar cual fue su puntaje en porcentaje.
 2. Revisa en el JSON cual es el puntaje MINIMO para que el usuario pueda pasar la actividad.
 3. Si el usuario pasa, busca la respectiva retroalimentación para mostrar y la adjunta al objeto "retorno_datos".
 4. Si el usuario no pasa, revisa cuantos intentos tiene pendientes, si tiene, regresa el juego a su estado "original",
 si no tiene, busca que tipo de retroalimentación "negativa" debe mostrar y la adjunta al objeto "retorno_datos". 
 
 Finalmente, retorna el objeto con los valores necesarios para el uso de la plantilla y del SCORM.
 */

$('body').on('ed_check_list', function (evt)
{
    var check_order = function ()
    {
        var position_array = [];
        var retorno_datos = {};
        var activity_score = 0;
        retorno_datos.user_answer = [];
        var json_content = evt.sym.$("contenedor_padre").prop('ed_json_object');
        $("ul#list_sort li", evt.sym.$('contenedor_padre')).each(function (index) {
            retorno_datos.user_answer[index] = $(this).html();
            if ($(this).html() === json_content.words[index].word) {
                activity_score = activity_score + 1;
            } else {
                //No debe sumar puntos si su respuesta es incorrecta
            }
        });

        division = activity_score / $("ul#list_sort li", evt.sym.$('contenedor_padre')).length;
        multiplicacion = Math.round(division * 100);

        retorno_datos.evt = evt;
        retorno_datos.json = json_content;
        retorno_datos.user_score = multiplicacion;
        retorno_datos.minimun_score = json_content.feedback.config_score.min_score_user;

        //Revisar si el puntaje del usuario es suficiente para pasar.
        if (multiplicacion >= json_content.feedback.config_score.min_score_user)
        {
            $.each(json_content.feedback.correcto, function (pos, item)
            {
                if (multiplicacion > parseInt(pos))
                {
                    retorno_datos.feedback = item;
                    return false;
                }
                else
                {
                    console.error("No se encontró retroalimentación válida ", multiplicacion);
                }
            });
        }
        else
        {
            //If de intentos.
            var intentos_usuario = evt.sym.$("contenedor_padre").prop('ed_user_attemps');
            if (typeof (json_content.feedback.attempts[intentos_usuario]) !== "undefined")
            {
                retorno_datos.feedback = json_content.feedback.attempts[intentos_usuario];
                intentos_usuario = intentos_usuario + 1;
                evt.sym.$("contenedor_padre").prop('ed_user_attemps', intentos_usuario);
                $.each(json_content.words, function (pos, json_word) {
                    position_array[pos] = json_word.word;
                });
                for (var i = position_array.length - 1; i >= 0; i--)
                {
                    j = Math.floor(Math.random() * (i + 1));
                    temp = position_array[i];
                    position_array[i] = position_array[j];
                    position_array[j] = temp;
                    $("ul#list_sort li:nth-child(" + (i + 1) + ")", evt.sym.$('contenedor_padre')).html(position_array[i]);
                }
            }
            else
            {
                $.each(json_content.feedback.incorrecto, function (pos, item)
                {
                    console.log(multiplicacion + " " + parseInt(pos));
                    if (multiplicacion >= parseInt(pos))
                    {
                        retorno_datos.feedback = item;
                        return false;
                    }
                    else
                    {
                        console.error("No se encontró retroalimentación inválida ", multiplicacion);
                    }
                });
            }
        }
        return retorno_datos;
    };
    $('body').trigger({
        type: "Edge_Plantilla_Retroalimentacion",
        ans: check_order(),
        activity: "sort_1",
        sym: evt.sym
    });
});

/*
 // Evento de prueba para verificar si está funcionando correctamente o no.
 $('body').on('Edge_Plantilla_Retroalimentacion', function(evt)
 {
 console.log(evt);
 });*/