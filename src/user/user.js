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

    function login (req, res){
        /*if(req.query.name === 'YYC' && req.query.pwd === '123456'){
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
        }*/

        var dt = {
            "address" : {
                "street" : "2 Avenue",
                "zipcode" : "10075",
                "building" : "1480",
                "coord" : [ -73.9557413, 40.7720266 ]
            },
            "borough" : "Manhattan",
            "cuisine" : "Italian",
            "grades" : [
                {
                    "date" : new Date("2014-10-01T00:00:00Z"),
                    "grade" : "A",
                    "score" : 11
                },
                {
                    "date" : new Date("2014-01-16T00:00:00Z"),
                    "grade" : "B",
                    "score" : 17
                }
            ],
            "name" : "Vella",
            "restaurant_id" : "41704620"
        };

        db_loader.add('user', dt, null, function(data){
            if(data){
                res.send(data);
            }
        });


       // db_loader.query('restaurants', { "cuisine": "Italian", "address.zipcode": "10075" });
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

    function register (req, res){

        var user_info = {};
        if(!req.telephone || req.password){
            res.send({
                msg: '缺少必要参数',
                code: code.ERROR
            });
            return;
        }
        if(req.telephone){
            user_info.telephone = req.telephone;
        }
        db_loader.add('user', dt, null, function(data){
            if(data){
                res.send(data);
            }
        });
    };

    module.exports = user;
    module.exports.login = login;
    module.exports.logout = logout;
    module.exports.register = register;

})(exports, require, module);