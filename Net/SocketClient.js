//Server socket 
var net = require('net');

var client = net.createConnection({port:8181, host:'127.0.0.1'}, ()=>{
    console.log('connection successfull');
    client.write('hello i am boopesh');
});

client.on('data',(data)=>{
    console.log(data.toString());
    client.write('How r u');
});

client.on('error',(error)=>{
 console.log(error);
});

client.on('end', ()=>{
    console.log('connection ended');
})

