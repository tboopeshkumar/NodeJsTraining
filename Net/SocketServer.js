//Server socket 
var net = require('net');

var server = net.createServer((connectionListner)=>{
  //get connections count
    server.getConnections((err,count)=>{
        if(err){
            console.log('Error getting connections');
        }else{
            //send out info for this socket to client
            connectionListner.write(`connections to server:  ${count} \r\n`);
        }
    });

    connectionListner.on('end',()=>{
        console.log('client disconnected');
    });

    connectionListner.write('Hello socket from server \r\n');

    connectionListner.on('data', (data)=>{
        console.log(`message for you from client ${data}`);
    });

    //Handle connection errors
    connectionListner.on('error',(err)=>{
        console.log(`server error : ${err}`);
    });
}); // end of net createserver call back function

server.listen(8181,'127.0.0.1',()=>{
    console.log("Socker server running in port 8181");
});