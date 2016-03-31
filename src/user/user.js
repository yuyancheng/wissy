(function (exports, require, module, __filename, __dirname) {
    'use strict';

    var code = require('./../common/config'),
        user = {
            name: 'User API'
        };

    user.APIs = [
        { 'path': '/user/logout', type: ['get', 'post', 'delete'], 'fun': logout },
        { 'path': '/user/login', type: ['get', 'post', 'delete'], 'fun': login  }
    ];

    user.init = function (exp){
        var len = APIs.length;
        for(var i=0; i<len; i++){
            exp.get(APIs[i].path, APIs[i].fun);
            exp.post(APIs[i].path, APIs[i].fun);
        }
    };

    function login (req, res){
        if(req.query.name === 'YYC' && req.query.pwd === '123456'){
            res.send( {
                dsaf: 213,
                'aaa': {
                    a: 23,
                    b: [213,3234]
                },
                code: code.OK
            } );
        }else{
            res.send( code.ERROR );
        }
    };

    function logout (req, res){
        console.log(req);
        //res.send( code.OK );
    };

    module.exports = user;
    module.exports.login = login;
    module.exports.logout = logout;

})(exports, require, module);