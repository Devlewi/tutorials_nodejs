const http = require("http");
//const { hostname } = require('os');

const server =  http.createServer( (req, res) => {
    res.statusCode = 200;
    res .setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
});

const port = 3000;
const hostname = 'localhost';

server.listen(port, hostname, function () {
    console.log(`Server is running at http://${hostname}:${port}`);
})