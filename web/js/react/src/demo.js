'use strict';

$.ajax({
    type: 'post',
    url: 'js/data/patient.json',
    success: function (resp) {
        //console.log(resp.pageData)
        if(resp.pageData.length > 0){
            ReactDOM.render(
                <Actable dataSrc = {resp.pageData}/>,
                document.getElementById('example')
            );
        }
    }
});

