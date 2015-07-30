$.getJSON('js/config.json', function(json_content)
    {
        console.log(json_content);
        $.each(json_content.words, function(pos, json_word) {
            console.log(pos);
            console.log(' >',
                'position: ' + pos,
                '/ word_symbol: ' + json_word.word,
                '/ space_symbol: ' + json_word.word,
                '/ word: ' + json_word.word
            );
            $("#list_sort li:nth-child("+(pos+1)+")").html(json_word.word);

        });
        //sym.$("btn_enviar2").prop('ed_answer_array', json_content);
        //console.log(sym.$("btn_enviar2").prop('ed_answer_array'));
    });

$('body').on('enviar',function(evt)
{
    console.log(evt);
    //$("#list_sort").sortable();    
});