var express = require('express');
var app = express();
var port = 3334;
var host = '127.0.0.1';
var MongoClient = require('mongodb');
const url = 'mongodb://localhost:27017';
const assert = require('assert');
// Database Name
const dbName = 'usersDB';

// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    db.createCollection('user-details', (err, res) => {
        if (err) throw err;
        console.log('user-details collection created');
        client.close();
    });
    // client.close();
});


app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}/`)
});