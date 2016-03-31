(function (exports, require, module, __filename, __dirname) {
    'use strict';

    var dbLoader = {};

    var MongoClient = require('mongodb').MongoClient,
        assert = require('assert'),
        url = 'mongodb://localhost:27017/test';


    dbLoader.init = function (){

        var connect,
            db_tabs = [{
            name: 'restaurants'
        }];

        var insertDocument = function(db, callback) {
            db.collection(db_tabs[0].name).insertOne( {
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
            }, function(err, result) {
                assert.equal(err, null);
                console.log("Inserted a document into the restaurants collection.");
                callback();
            });
        };

        dbLoader.query = function(){

        };

        dbLoader.add = function(){
            MongoClient.connect(url, function(err, db) {
                assert.equal(null, err);
                console.log("Connected correctly to server.");
                insertDocument(db, function() {
                    db.close();
                });
                //db.close();
            });
        };

    };


    module.exports = dbLoader;

})(exports, require, module);