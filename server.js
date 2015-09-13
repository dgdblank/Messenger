// Dependencies
var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);

// Configuration
require('./server/config.js')(app, express);

// Connect Sockets
// io.sockets.on('connection', socket);

// Routes
app.get('/', function(req, res){
  res.render('index');
});

// Start Server
var port = 3000;

app.listen(port, function(){
  console.log('Chat app listening on:', port);
})