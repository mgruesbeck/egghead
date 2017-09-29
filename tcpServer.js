var net = require('net');
var server = net.createServer(function(connection){
  console.log('client connected');
  connection.on('data', function(d){
    console.log('data received: ' + d.toString());
  });
  connection.on('end', function(){
    console.log('client disconnected');
  });
});

server.listen(3000, function(){
  console.log('server started');
});
