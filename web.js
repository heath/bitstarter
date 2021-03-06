var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var cachedPage = fs.readFileSync('index.html', 'utf-8', function(err, data) {
  if (err) console.log('err: ', err);//TODO: throw it in a logfile
  return data;
});

app.get('/', function(request, response) {
  response.send(cachedPage);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
