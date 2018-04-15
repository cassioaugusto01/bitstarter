var express = require('express');
var http = require('http');
var app = express();
var fs = require('fs');
var htmlfile = "index.html";
var morgan = require('morgan');

var server = http.createServer(app);

app.get('/', function(request, response) {
	var html = fs.readFileSync(htmlfile).toString();
	response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on" + port);
});
