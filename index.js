const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.2';
const port = 3000;
var pf = require('./check-page');

// function checkPage(urVal) {
//     // return pageRender.filter(item => item.path == urVal);
//     filterData = [];
//     for (const item of pageRender) {
//         if (item.path == urVal) {
//             filterData.push(item);
//         }
//     }
//     return filterData;
// }
const server = http.createServer((req, res) => {
    const urlVal = req.url;
    debugger;
    const pageDetails = pf.checkPage(urlVal);
    console.log('line 21', pageDetails);
    if (pageDetails.length != 0) {
        console.log(pageDetails.template);
        fs.readFile(pageDetails[0].template, (err, data) => {
            if (err) {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.write('File Not Found');
                res.end();
            }
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data);
            res.end();
        })
    } else {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write('File Not Found');
        res.end();
    }
    // res.statusCode = 200;
    // fs.readFile('./some.txt', (err, data) => {
    //     if (err) {
    //         console.log('unable to read file');
    //     }
    //     console.log(data);
    // })
    // res.setHeader('Content-Type', 'text/html');
    // res.end('Hello World\n');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});