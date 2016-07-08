(function (exports, require, module, __filename, __dirname) {
    'use strict';

    var express = require('express'),
        exp = express(),
        api_loader = require('./../interface/api-loader'),
        sys = require('os');


    function Server(){
        var server = {};
        server.run = function(type){

            var srv = exp.listen(3030, function () {
                var host = srv.address().address;
                var port = srv.address().port;

                //const buf2 = new Buffer('7468697320697320612074c3a97374', 'hex');
                //console.log(buf2.toString());

                const arr = [Buffer('1234'), Buffer('0123')];
                //arr.sort(Buffer.compare);
                console.log(arr.sort(Buffer.compare));

                const buf1 = new Buffer(10).fill(0);
                const buf2 = new Buffer(14).fill(0);
                const buf3 = new Buffer(18).fill(0);
                const totalLength = buf1.length + buf2.length + buf3.length;

                console.log(totalLength);
                const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);
                console.log(bufA);
                console.log(bufA.length);

                const buf_a = new Buffer('12345');
                const buf_b = new Buffer(buf_a.length);
                var len = buf_a.copy(buf_b, 1, 0, buf_a.length);
                //const buf_c = new Buffer('abc');

                console.log(buf_b);

                /*console.log('System: EOL >> ' + sys.EOL);
                console.log('System: arch >> ' + sys.arch());
                console.dir('System: cpus >> ' + sys.cpus());
                console.log('System: endianness >> ' + sys.endianness());
                console.log('System: freemem >> ' + sys.freemem());
                console.log('System: homedir >> ' + sys.homedir());
                console.log('System: hostname >> ' + sys.hostname());
                console.log('System: loadavg >> ' + sys.loadavg());
                console.dir('System: networkInterfaces >> ' + sys.networkInterfaces());*/
                console.log('Server "' + type + '" started up at http://%s:%s', host, port);
            });

            api_loader.init(exp);

            /*if(param && param.constructor === Array){

                api_loader.init(exp);

                /!*var len = param.length;

                while( len -- ){
                    var md = require(param[len]);
                    if(md && md.init){
                        md.init();
                    }
                }*!/
            }*/

        };

        return server;
    }

    module.exports = Server;

    //exports.srv32 = srv32;
    //exports.srv64 = srv64;

    /*srv64.run = function(loader){
        exp.listen(3000, function () {
            var host = srv64.server.address().address;
            var port = srv64.server.address().port;

            console.log('Example app listening at http://%s:%s', host, port);
        });

        if(loader && loader.init){
            loader.init(exp);
        }
    };*/

    /*srv64.server = exp.listen(3000, function () {
        var host = srv64.server.address().address;
        var port = srv64.server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
    });*/

    //module.exports.srv64 = srv64;
    //module.exports.exp = exp;
})(exports, require, module);

