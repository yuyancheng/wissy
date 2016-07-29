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

                React.createElement("div", null, 
                    React.createElement(Actable, {data: data, dataSrc: data, tHeadKey: ['id','name','sex','relation','age','telephone'], tHeadName: 
                        React.createElement("thead", null, 
                            React.createElement("tr", null, React.createElement("td", {rowSpan: "2"}, "ID"), React.createElement("td", null, "姓名"), React.createElement("td", null, "性别"), React.createElement("td", {rowSpan: "2"}, "关系"), React.createElement("td", null, "年龄"), React.createElement("td", null, "手机号")), 
                            React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null))
                        ), 
                    onDataChange: df.setState, pagination: {
                        lengthMenu: [5, 10, 20, 50, 100],
                        
                    }}), 
                    
                React.createElement("button", {onClick: Alert}, "SET")
                ),
                document.getElementById('dataTable')
            );
        }
    }
});

