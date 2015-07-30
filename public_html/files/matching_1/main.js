$.on('enviar', function (evt)
{
    preload();
    //console.log(evt);    
    $.ajax({url: "index.html", success: function (result) {
            evt.sym.$('contenedor_padre').html(result);
            $.getJSON('../../activity/matching_1/1/config.json', function (json_content) {

                //console.log(json_content);
                $.each(json_content.words, function (pos, json_word) {
                    /*console.log(pos);
                     console.log(' >',
                     'position: ' + pos,
                     '/ word_symbol: ' + json_word.word,
                     '/ space_symbol: ' + json_word.word,
                     '/ word: ' + json_word.word
                     );*/
                    $("ul#list_sort li:nth-child(" + (pos + 1) + ")", evt.sym.$('contenedor_padre')).html(json_word.word);
                    $("ul#list_sort", evt.sym.$('contenedor_padre')).sortable();
                    $("ul#list_sort", evt.sym.$('contenedor_padre')).disableSelection();
                });
                evt.sym.$("contenedor_padre").prop('ed_json_object', json_content);
                evt.sym.$("contenedor_padre").prop('ed_user_attemps', 0);
                unset_preload();
            });
        }});
});

$.on('ed_check_list', function (evt)
{
    var check_order = function ()
    {
        var retorno_datos = {};
        var activity_score = 0;
        retorno_datos.user_answer = [];
        var json_content = evt.sym.$("contenedor_padre").prop('ed_json_object');
        $("ul#list_sort li", evt.sym.$('contenedor_padre')).each(function (index) {
            retorno_datos.user_answer[index] = $(this).html();
            if ($(this).html() === json_content.words[index].word) {
                activity_score = activity_score + 1;
            } else {
                //console.log(json_content.feedback.fdb_text);
                //Do Nothing.
            }
        });

        var division = activity_score / $("ul#list_sort li", evt.sym.$('contenedor_padre')).length;
        var multiplicacion = Math.round(division * 100);

        retorno_datos.evt = evt;
        retorno_datos.json = json_content;
        retorno_datos.user_score = multiplicacion;
        retorno_datos.minimun_score = json_content.feedback.config_score.min_score_user;

        if (multiplicacion >= json_content.feedback.config_score.min_score_user)
        {
            $.each(json_content.feedback.correcto, function (pos, item)
            {
                if (multiplicacion > parseInt(pos))
                {
                    debugg ? console.log("entró") : false;
                    retorno_datos.feedback = item;
                    return false;
                }
                else
                {
                    debugg ? console.error("No se encontró retroalimentación válida ", multiplicacion) : false;
                }
            });
        }
        else
        {
            //If de attemps.
            var intentos_usuario = evt.sym.$("contenedor_padre").prop('ed_user_attemps');
            if (typeof (json_content.feedback.attempts[intentos_usuario]) !== "undefined")
            {
                retorno_datos.feedback = json_content.feedback.attempts[intentos_usuario];
                intentos_usuario = intentos_usuario + 1;
                evt.sym.$("contenedor_padre").prop('ed_user_attemps', intentos_usuario);
                $.each(json_content.words, function (pos, json_word) {
                    $("ul#list_sort li:nth-child(" + (pos + 1) + ")", evt.sym.$('contenedor_padre')).html(json_word.word);
                });
            }
            else
            {
                $.each(json_content.feedback.incorrecto, function (pos, item)
                {
                    debugg ? console.log(multiplicacion, parseInt(pos)) : false;
                    if (multiplicacion >= parseInt(pos))
                    {
                        retorno_datos.feedback = item;
                        return false;
                    }
                    else
                    {
                        debugg ? console.error("No se encontró retroalimentación inválida ", multiplicacion) : false;
                    }
                });
            }
        }
        return retorno_datos;
    };
    $.trigger({
        type: "Edge_Plantilla_Retroalimentacion",
        ans: check_order(),
        activity: "sort_1",
        sym: evt.sym
    });
});

$.on('Edge_Plantilla_Retroalimentacion', function (evt)
{
    console.log(evt);
});