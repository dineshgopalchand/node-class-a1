var express = require('express');
var app = express();
var path = require('path');
var bodyParse = require('body-parser');
var port = 3334;

var host = '127.0.0.1';

var encodeBody = bodyParse.urlencoded({ extended: false });

const contact = [];
app.use(express.static('public'));

app.get('/contact', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'view', 'contact.html'));
    console.log(contact);
});

app.post('/contact', encodeBody, (req, res, next) => {
    console.log('req.body', req.body);
    console.log('req.query', req.query)
    contact.push({ 'name': req.body.name, 'email': req.body.email });
    // res.sendFile(path.join(__dirname, 'view', 'contact.html'));
    // res.status(302).location('/contact');
    res.redirect(301, '/contact')
});
app.get('/', (req, res, next) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'view', 'index.html'));

});
app.use('*', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'view', '404.html'));
});
var server = app.listen(port, () => {
    console.log(`server is running on http://${server.address().address}:${server.address().port}/`)
});;