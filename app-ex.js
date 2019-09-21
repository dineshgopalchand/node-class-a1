var http = require('http');
var express = require('express');
var app = express();
var port = 3334;
var host = '127.0.0.1';
// var server = http.createServer((req, res) => {
//     console.log(req);
//     res.writeHead(200, 'Content-Type', 'text/html')
//     res.write('asdf');
//     res.end();
// });
app.use('/contact', (req, res, next) => {
    console.log(req);
    res.writeHead(200, 'Content-Type', 'text/html')
    res.write('contact');
    console.log('before req end');
    res.end();
    // console.log('after req end');
    // next();
})
app.use('/', (req, res, next) => {
    console.log(req);
    res.writeHead(200, 'Content-Type', 'text/html')
    res.write('asdf');
    console.log('before req end');
    res.end();
    // console.log('after req end');
})
var server = http.createServer(app);
server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}/`)
});