var http = require("http");
console.log("HTTP INITIALIZED");


http.createServer(function (request, response) {
    console.log("server started");
    
    //200 is status code
    //text/plain is the content type
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
}).listen(8082);