'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello from containerized application!\n');
});

app.get('/status', function (req, res) {
  res.send('working...\n');
});

app.get('/configmap', function (req, res) {
  const fs = require('fs');
  let rawdata = fs.readFileSync('/etc/configs/rawdata.json');
  res.send(JSON.parse(rawdata));
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
