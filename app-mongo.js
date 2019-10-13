var express = require('express');
var app = express();
var port = 3334;
var host = '127.0.0.1';
var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const assert = require('assert');
var bodyParse = require('body-parser');
var encodeBody = bodyParse.urlencoded({ extended: false });
// Database Name
const dbName = 'usersDB';

// Use connect method to connect to the server
// MongoClient.connect(url, (err, client) => {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
//     const db = client.db(dbName);
//     db.createCollection('user-details', (err, res) => {
//         if (err) throw err;
//         console.log('user-details collection created');
//         client.close();
//     });
//     // client.close();
// });

app.post('/add-user', encodeBody, (req, res, next) => {
    console.log('req.body', req.body);
    console.log('req.query', req.query);
    // res.send(req.body);

    MongoClient.connect(url, function(err, client) {
        if (err) throw err;
        var dbo = client.db(dbName);
        var myobj = req.body;
        dbo.collection("user-details").insertOne(myobj, function(err, result) {
            if (err) throw err;
            console.log("1 document inserted", result);
            res.send(result.ops);
            client.close();
        });
    });
});
// MongoClient.connect(url, function(err, client) {
//     if (err) throw err;
//     var dbo = client.db(dbName);
//     var myobj = { name: "Chand", address: "Jhankhand" };
//     dbo.collection("user-details").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         client.close();
//     });
// });
function getUserDetails(req, res) {
    MongoClient.connect(url, function(err, client) {
        if (err) throw err;
        var dbo = client.db(dbName);
        // var myobj = { name: "Chand", address: "Jhankhand" };
        // dbo.collection("user-details").find({ address: req.query.addr }).toArray(function(err, result) {
        dbo.collection("user-details").findOne({ address: req.query.address, name: req.query.name }, function(err, result) {
            if (err) throw err;
            console.log("1 document inserted", result);
            res.send(result);
            client.close();
        });
    });
}
app.get('/user-details', getUserDetails);
// app.get('/user-details', (req, res, next) => {
//     MongoClient.connect(url, function(err, client) {
//         if (err) throw err;
//         var dbo = client.db(dbName);
//         // var myobj = { name: "Chand", address: "Jhankhand" };
//         dbo.collection("user-details").find({}).toArray(function(err, result) {
//             if (err) throw err;
//             console.log("1 document inserted", result);
//             res.send(result);
//             client.close();
//         });
//     });
// });


app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}/`)
});