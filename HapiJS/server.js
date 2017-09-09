
var hapi = require('hapi');
var server = new hapi.Server();

server.connection({ port : 3000, host:'localhost'});

server.route({
    method : 'GET',
    path : '/',
    handler : (req,res)=>{
        res('Hello hapi world!');
    }
});

server.start((err)=>{
    if(err){
        throw err;
    }        
    console.log('Hapi Server started at port : 3000');
});