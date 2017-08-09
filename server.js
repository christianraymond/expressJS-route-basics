'use strict'

var express = require('express');
var app = express();

// create a route
app.get('/', function (req, res){
 res.send('Hello Christian')
});

app.get('/hello', function(req, res){
  res.send('Hello Name!');
});

app.get('/products/:id', function(req, res){
  console.log(req.params.id);
  res.send('Hello ' + req.params.id + ' you got me.');
})

//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;
 console.log('Your app is listening at http://%s:%s', host, port);

});
