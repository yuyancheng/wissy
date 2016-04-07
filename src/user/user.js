(function (exports, require, module, __filename, __dirname) {
    'use strict';

    var code = require('./../common/config'),
        db_loader = require('./../db/db-loader'),
        user = {
            name: 'User API'
        };

    user.APIs = [
        { 'path': '/user/logout', type: ['get', 'post'], 'fun': {'ref': logout} },
        { 'path': '/user/login', type: ['post'], 'fun': {'ref': login, 'param': ['telephone', 'password']}  },
        { 'path': '/user/register', type: ['post'], 'fun': {'ref': register, 'param': ['telephone', 'name', 'password']}  },
    ];

    user.init = function (exp){
        var len = APIs.length;
        for(var i=0; i<len; i++){
            exp.get(APIs[i].path, APIs[i].fun);
            exp.post(APIs[i].path, APIs[i].fun);
        }
    };

    function login (req, res){;

        var param_names = [];

        if(!req.body.telephone && req.body.telephone != '0'){
            param_names.push('telephone');
        }

        if(!req.body.password && req.body.password != '0'){
            param_names.push('password');
        }

        if((!req.body.telephone && req.body.telephone != '0') || (!req.body.password && req.body.password != '0')) {
            res.send({
                msg: '缺少必要参数：' + param_names.toString(),
                code: code.ERROR
            });
            return;
        }

        var filter = {
            telephone: req.body.telephone
        };

        db_loader.query('user', filter, function(data){
            console.log('login.query: ' + data);
            if(data[0].password == req.body.password){
                res.send({
                    code: code.OK,
                    msg: 'Validate success!'
                });
            }
        });
    };

    function logout (req, res){
        var filter = {};

        for(var k in req){
            filter[k] = req[k];
        }

        db_loader.query('user', filter, function(data){
            if(data){
                res.send(data);
            }
        });
    };

    function register(req, res){
        var user_info = {};
        var param_names = [];
        var filter = {};

        if(!req.body.name && req.body.name != '0'){
            param_names.push('name');
        }else{
            user_info.name = req.body.name;
        }
        if(!req.body.telephone && req.body.telephone != '0'){
            param_names.push('telephone');
        }else{
            user_info.telephone = req.body.telephone;
        }
        if(!req.body.password && req.body.password != '0'){
            param_names.push('password');
        }else{
            user_info.password = req.body.password;
        }
        if(!req.body.name || !req.body.telephone || !req.body.password) {
            res.send({
                msg: '缺少必要参数：' + param_names.toString(),
                code: code.ERROR
            });
            return;
        }

        var filter = {
            telephone: req.body.telephone
        };

        // 查询账号是否已注册
        db_loader.query('user', filter, function(data){
            // 查账号已注册
            if(data){
                //console.info('register.query: ' + data);
                res.send({
                    code: code.EXIST,
                    msg: 'This user is exist!'
                });
            }else{
                // 添加用户信息
                db_loader.add('user', user_info, null, function(data){
                    //console.info('register.add: ' + data);
                    if(data && data.ok){
                        res.send({
                            code: code.OK,
                            msg: 'Register successfully!'
                        });
                    }
                });
            }
        });
    };

    module.exports = user;
    module.exports.login = login;
    module.exports.logout = logout;
    module.exports.register = register;

})(exports, require, module);