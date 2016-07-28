'use strict';

$.ajax({
    type: 'post',
    url: 'js/data/patient.json',
    success: function (resp) {
        //console.log(resp.pageData)
        if(resp.pageData.length > 0){
            ReactDOM.render(
                <Actable dataSrc = {resp.pageData} thead = {
                    {
                        'ID': 'id',
                        '姓名': 'name',
                        '关系': 'relation',
                        '性别': 'sex',
                        '年龄': 'age',
                        '手机号': 'telephone'
                    }
                } />,
                document.getElementById('example')
            );
        }
    }
});

