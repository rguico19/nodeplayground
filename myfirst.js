var http = require('http');
var dt = require('./myfirstmodule');

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('My First Try on printing Text in Node');
}).listen(8080);
