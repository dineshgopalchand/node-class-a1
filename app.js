let http = require('http');
const port = 3333;
const hostname = 'localhost';
const server = http.createServer((req, res) => {
    const method = req.method;
    console.log('method', method);
    const url = req.url;
    console.log(url);
    const location = req.headers;

    if (url == '/') {
        res.statusCode = 200;
        res.write(` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
        `);
        res.write('<h1>This is home page</h1>');
        res.write(`    
</body>
</html>
        `);
        // console.log(res);
        return res.end();
    }
    if (url == '/contact') {
        if (method == 'POST') {
            const body = [];
            let postedData = '';
            req.on('data', (chunk) => {
                body.push(chunk);
                console.log('asdf', chunk);
            });
            return req.on('end', () => {
                postedData = Buffer.concat(body).toString();
                console.log('postedData inside', postedData);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();

            });
        }

        console.log('inside contact page');
        // res.statusCode = 200;
        res.writeHead(200, 'Content-Type', 'text/html')
        res.write('<html>');
        res.write('<body>');
        res.write('<form method="post">');
        res.write('<input type="text" name="name"/>');
        // res.write('<input type="file" name="file"/>');
        res.write('<input type="submit" value="submit"/>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    res.statusCode = 200;
    // res.setHeader('current-time', new Date())
    res.write('some text');
    // console.log(res);
    res.end();

})
server.listen(port, hostname, () => {
    console.log(`server is running on http://${hostname}:${port}/`)
});