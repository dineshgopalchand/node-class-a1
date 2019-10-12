// var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var bodyParse = require('body-parser');
var port = 3334;

var host = '127.0.0.1';

var encodeBody = bodyParse.urlencoded({ extended: false });

// var server = http.createServer((req, res) => {
//     console.log(req);
//     res.writeHead(200, 'Content-Type', 'text/html')
//     res.write('asdf');
//     res.end();
// });
// app.use((req, res, next) => {
//     var url = req.url;
//     console.log(req.headers);
//     // if(url.match(//))
//     console.log(url);
//     next();
// })
app.use(express.static('public'));

// app.use(express.static('public-image'));
app.use((req, res, next) => {
    console.log(req.method);
    console.log('log from first middleware function');
    next();
});
// app.use((req, res, next) => {
//     console.log('log from 2nd middleware function');
//     res.send('response form middleware function');
//     // next();
// })
// path.dirname
app.get('/contact', (req, res, next) => {

    // res.writeHead(200, 'Content-Type', 'text/html')
    // res.write('contact');
    console.log('contact');
    console.log('Query string: name=', req.query.name);
    console.log('Query string: email=', req.query.email);
    // console.log('req.body', req.body);
    // res.end();
    // res.statusCode = 200;
    //         res.send(`
    //     <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //     <title>Contact Page</title>
    //     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    // </head>
    // <body>
    //     <div class="container">
    //         <form action="" method="get">
    //             <div class="form-group">
    //                 <label for="name">Enter Name</label>
    //                 <input type="text" class="form-control" name="name" placeholder="Enter Name">
    //             </div>
    //             <button class="btn btn-primary" type="submit">Submit</button>
    //         </form>
    //     </div>
    // </body>
    // </html>`);
    res.sendFile(path.join(__dirname, 'view', 'contact.html'));

});
app.post('/contact', encodeBody, (req, res, next) => {
    console.log('req.body', req.body);
    console.log('req.query', req.query)
    res.sendFile(path.join(__dirname, 'view', 'contact.html'));

});
// app.get('/', (req, res, next) => {
app.get('/', (req, res, next) => {

    // console.log(req.method);
    // res.writeHead(200, 'Content-Type', 'text/html')
    // res.write('asdf');
    // console.log('home');
    // res.end();
    // res.sendFile('./view/index.html');
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'view', 'index.html'));

});
app.use('*', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'view', '404.html'));
});
// app.listen(port, host, () => {
//     console.log(`server is running on http://${host}:${port}/`)
// });;
var server = app.listen(port, () => {
    console.log(`server is running on http://${server.address().address}:${server.address().port}/`)
});;
// var server = http.createServer(app);
// server.listen(port, host, () => {
//     console.log(`server is running on http://${host}:${port}/`)
// });