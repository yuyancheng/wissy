'use strict';

$.ajax({
    type: 'post',
    url: 'js/data/patient.json',
    success: function (resp) {
        //console.log(resp.pageData)
        var tHead = {
            'ID': 'id',
            '姓名': 'name',
            '性别': 'sex',
            '关系': 'relation',
            '年龄': 'age',
            '手机号': 'telephone'
        };

        var dt = {
            "id": 1,
            "relation": "兄弟1",
            "name": "王大1",
            "sex": "男1",
            "age": "441",
            "telephone": "16890988900"
        };

        var data;
        var df = {};
        df.setState = function () {
            alert(3243)
        };

        var  Alert  = function(){
            data = dt;
            df.setState();
        };

        if(resp.pageData.length > 0){

            data = resp.pageData;

            ReactDOM.render(

                <div>
                    <Actable data = {data} dataSrc = {data} tHeadKey = {['id','name','sex','relation','age','telephone']} tHeadName = {
                        <thead>
                            <tr><td rowSpan="2">ID</td><td>姓名</td><td>性别</td><td rowSpan="2">关系</td><td>年龄</td><td>手机号</td></tr>
                            <tr><td></td><td></td><td></td><td></td></tr>
                        </thead>
                    } onDataChange = {df.setState}  pagination={{
                        lengthMenu: [5, 10, 20, 50, 100],
                        
                    }} />
                    
                <button onClick = {Alert}>SET</button>
                </div>,
                document.getElementById('dataTable')
            );
        }
    }
});

