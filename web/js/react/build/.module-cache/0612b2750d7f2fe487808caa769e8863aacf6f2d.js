'use strict';

var Table = require('./js/react/actable/actable.js');

$.ajax({
    type: 'post',
    url: 'js/data/patient.json',
    success: function (resp) {
        console.log(resp.pageData)
        if(resp.pageData.length > 0){
            ReactDOM.render(
                React.createElement(Table, null),
                document.getElementById('example')
            );
        }
    }
});

