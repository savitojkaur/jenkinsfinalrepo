var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Dima, This is the output in console.!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
