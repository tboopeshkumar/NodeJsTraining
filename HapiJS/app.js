
var hapi = require('hapi');
var server = new hapi.Server();

var routes = require('./routes/routes.js');

server.connection({ port : 3000, host:'localhost'});

server.route(routes);

server.ext('onRequest', (req,reply)=>{
    console.log('Hi ! i am intercepted');
    return reply.continue();
});

server.start((err)=>{
if(err){
    throw err;
}
console.log(`server running at : ${server.info.uri}`);
});


