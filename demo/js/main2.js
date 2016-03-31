
var win = $(window);
var doc = $(document);


doc.ready(function(){

    var msgForm = $('#msg_form');
    var urlRoot = 'api';
    var url = urlRoot + '/sys/removeAdmin';

    $('#msg_submit').bind('click', function(){
        $.ajax({
            url: url,
            type: 'delete',
            data: {
                pwd: 123456,
                name: 'YYC'
            },
            success: function(dt){
                console.log(dt);
            }
        });
    });

});