const http = require("http");
const url = require("url");

const server = http.createServer(function (request, response) {
    const params = url.parse(request.url, true).query;
    const f = parseFloat(params.temp);

    const c = (f - 32) * 5 / 9;
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>Temp Convertor</title>
        </head>
        <body>
            <h1>Convert ${f} into ${c}</h1>
        </body>
    </html>
    `)
    response.end();
})

server.listen(8080);
console.log('this server is listening on 8080')