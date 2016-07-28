'use strict';

$.ajax({
    type: 'post',
    url: 'js/data/patient.json',
    success: function (resp) {
        console.log(resp.pageData)
        if(resp.pageData.length > 0){
            ReactDOM.render(
                React.createElement(Actable, {prop: "resp.pageData"}),
                document.getElementById('example')
            );
        }
    }
});

