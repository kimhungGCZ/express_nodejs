var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');

// Connection URL
    const url = 'mongodb://gczinovationtestserver.bitnamiapp.com/:27017';

// Database Name
    const dbName = 'myproject';

// Create a new MongoClient
    const client = new MongoClient(url);

// Use connect method to connect to the Server
    client.connect(function(err) {
        //assert.equal(null, err);
        console.log("Connected successfully to server");

        //const db = client.db(dbName);
        res.render('index', { title: 'Connected successfully to server"' });
        
        client.close();
    });

});

module.exports = router;
