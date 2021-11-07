const url = 'ws://localhost:9876'
const server = new WebSocket(url)

server.onopen=function(){
    server.send("hello")
}

 