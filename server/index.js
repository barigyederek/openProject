const WebSocket = require('ws')

const wss = new WebSocket.Server({
    port: 9876
})
// when a connection to the socket is sucessfull inform me
wss.on('connection',function(ws){
 console.log('New client connected');

// when the socket receives a message show it on the console
 ws.on('message',function(data){
     console.log('Client has sent us :' ,data);
 });

// when client closes the socket connection  
 ws.on('close',function(){
     console.log('client has disconnected!');
 });

});

