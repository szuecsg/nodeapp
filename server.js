/*var http = require('http');

http.createServer(function(req,res) {
	res.writeHead(200,{'Content-type':'text-plain'}); //Normal request
	res.end('Hello!');
}).listen(1234,'127.0.0.1');

console.log('Webserver is listening!');
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
	fs.readFile('index.html',function(err,data){
		res.writeHead(200,{'Content-type':'text/html'}); //Normal request
		res.end(data);
	});
	
}).listen(1234,'127.0.0.1');

console.log('Webserver is listening!');