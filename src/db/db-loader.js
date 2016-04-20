(function (exports, require, module, __filename, __dirname) {
    'use strict';

    var dbLoader = {};

    var MongoClient = require('mongodb').MongoClient,
        assert = require('assert'),
        DBName = 'wissy',
        URL = 'mongodb://localhost:27017/';


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
        if(db){
            DBName = db;
        }
    }

    function setURL(url){
        if(url){
            URL = url;
        }
    }

    // 链接到数据库
    function connect(fun){
        MongoClient.connect(URL + DBName, function(err, db) {
            assert.equal(null, err);
            console.log("Connected correctly to server.");
            fun(db);
        });
    }

    function findOne(sets, factor, fun){
        connect(function(db){
            var cursor = db.collection(sets).find(factor);
            cursor.each(function (err, dt) {
                assert.equal(err, null);
                if (dt != null) {
                    console.dir(doc);
                    fun(doc);
                } else {
                    db.close();
                }
            });
        });
    };

    function findMany(sets, factor, fun){
        connect(function(db){
            var cursor = db.collection(sets).find(factor);
            cursor.toArray(function(err, doc){
                if(doc){
                    fun(doc);
                }
            });
        });
    };

    function insertOne(sets, dt, factor, fun){
        if(!dt){
            fun(null);
        }

        connect(function(db){
            db.collection(sets).insertOne(dt, null, function(err, result) {
                assert.equal(err, null);
                if(fun) {
                    fun(result);
                }
                db.close();
            });
        });
    };

    // 无则插入，有则更新
    function insertOrUpdate(sets, dt, factor, fun){
        if(!dt){
            fun(null);
        }

        connect(function(db){
            db.collection(sets).insertOne(dt, null, function(err, result) {
                assert.equal(err, null);
                if(fun) {
                    fun(result);
                }
                db.close();
            });
        });
    };

    function insertMany(sets, dt, factor, fun){
        if(!dt || dt.length === 0){
            fun(null);
        }

        connect(function(db){
            db.collection(sets).insertMany(dt, null, function(err, result) {
                assert.equal(err, null);
                if(fun) {
                    fun(result);
                }
                db.close();
            });
        });
    };

    module.exports = dbLoader;
    module.exports.findOne = findOne;
    module.exports.findMany = findMany;
    module.exports.insertOne = insertOne;
    module.exports.insertMany = insertMany;

})(exports, require, module);