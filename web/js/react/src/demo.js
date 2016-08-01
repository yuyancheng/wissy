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

        var dt = [{
            "id": 1,
            "relation": "兄弟1",
            "name": "王大1",
            "sex": "男1",
            "age": "441",
            "telephone": "16890988900"
        }];

        var data;
        var df = {};
        df.setSt = function () {
            alert(3243)
        };

        var  Alert  = function(){
            //data = dt;
            df.setSt(dt);
        };
        
        var translation = {
            "lengthMenu": "每页 _MENU_ 条",
            "zeroRecords": "无数据",
            "processing": "<img style='position:fixed;top:30%;left:50%;z-index:10000;height:80px;border:1px solid #aaa;border-radius:6px;box-shadow:0 0 10px rgba(0,0,0,.5)' src=\"src/img/loading.gif\" />",
            "info": "当前第 _START_ - _END_ 条，共 _TOTAL_ 条",
            "infoEmpty": "",
            "infoFiltered": "(从 _MAX_ 条记录中过滤)",
            "search": "搜索",
            "paginate": {
                "sFirst": "<<",
                "sPrevious": "<",
                "sNext": ">",
                "sLast": ">>"
            }
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
                    } onDataChange = {df} translation = {translation} processing = {true} pagination = {{
                        linkSize: 5
                    }} options = {{
                        lengthMenu: [5, 10, 20, 50, 100],
                        search: false
                    }} className = "table dataTable tbl"/>
                    
                <button onClick = {Alert}>SET</button>
                </div>,
                document.getElementById('dataTable')
            );
        }
    }
});

