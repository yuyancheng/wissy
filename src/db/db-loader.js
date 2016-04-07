(function (exports, require, module, __filename, __dirname) {
    'use strict';

    var dbLoader = {};

    var MongoClient = require('mongodb').MongoClient,
        assert = require('assert'),
        DBName = 'wissy',
        url = 'mongodb://localhost:27017/';


    dbLoader.init = function (){

        var connect,
            db_tabs = [{
            name: 'restaurants'
        }];

        var insertDocument = function(db, callback) {
            db.collection(db_tabs[0].name).insertOne( {}, function(err, result) {
                assert.equal(err, null);
                console.log("Inserted a document into the restaurants collection.");
                callback();
            });
        };

    };

    function setDB(db){
        if(url){
            DBName = db;
        }
    }

    function setURL(url){
        if(url){
            url = url;
        }
        url = url;
    }

    function connect(fun){
        MongoClient.connect(url + DBName, function(err, db) {
            assert.equal(null, err);
            console.log("Connected correctly to server.");
            fun(db);
        });
    }

    function query(sets, factor, fun){
        connect(function(db){
            var data = [];
            var cursor = db.collection(sets).find(factor);
            cursor.each(function(err, dt){
                assert.equal(err, null);
                if (dt != null) {
                    data.push(dt);
                    //console.dir(doc);
                }else{
                    db.close();
                }
            });
            data = cursor.objsLeftInBatch();
            fun(data);
        });
    };

    function add(sets, dt, factor, fun){
        connect(function(db){
            db.collection(sets).insertOne(dt, function(err, result) {
                assert.equal(err, null);
                if(fun) {
                    fun(result);
                }
                db.close();
            });
        });
    };


    module.exports = dbLoader;
    module.exports.query = query;
    module.exports.add = add;

})(exports, require, module);