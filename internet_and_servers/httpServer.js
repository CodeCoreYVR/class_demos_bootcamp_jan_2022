const http = require("http"); // library used to create http servers
const url = require("url");

const server = http.createServer(function (request, response) {
    // request object represents a request being made by the client
    // response object represents the response the server will build and send back to the client

    // console.log(request)
    const params = url.parse(request.url, true).query;
    // console.log(params.query)

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(`<!DOCTYPE html>
    <html>
        <head>
            <title>My first web server</title>
        </head>
        <body>
            <h1>Hello World!</h1>
        </body>
    </html>
    `);
    response.end();
});

server.listen(3000);

console.log("Server is running on port 3000");