var http = require('http'),
fs = require('fs'),
url = require('url'),
WebSocketServer = require('websocket').server;

var myserver = http.createServer((req,res)=>{

    var urlParsed = url.parse(req.url);

    fs.readFile(urlParsed.path.split('/')[1],(err,data)=>{
            if(err){
                res.statusCode =404;
                res.end(http.STATUS_CODES[404]);
            }
            res.statusCode =200;
            res.end(data); //flush the conent of index.html file to client. 
    });
}).listen(8000);

console.log("Websocket running on port 8000");
console.log("Try localhost:8000/index.html");

var serverConfig ={
    httpServer : myserver,
    autoAcceptConnections :false // to enable reliable messaging 
}

var wsserver = new WebSocketServer();
wsserver.mount(serverConfig); //bind websocket with http server

wsserver.on('connect', (connnection)=>{
    console.log('conncted');
    connnection.send('Server - Hello from Boopesh');
});


wsserver.on("request", (req) => {
    console.log("request");
    //var connection = req.accept('echo-protocol', req.origin);
    var connection = req.accept("echo-protocol", req.origin);
    connection.on('message', (message) => {
        console.log("message")
        if (message.type === "utf8"){
            console.log(message.utf8Data);
        }
        else if (message.type === "binary"){
            console.log(message.binaryData);
        }
    });
   
    connection.on('close', (reasonCode, description)=>{
        console.log('connection closed', reasonCode, description);
    });
});

