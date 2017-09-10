var cluster = require('cluster');

console.log("test process");

if(cluster.isMaster){

    var numWorkers = require('os').cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for(let i=0;i<numWorkers;i++){
        cluster.fork();
    }

    cluster.on('fork',function(worker){
        console.log(worker.process.pid + ' worker is forked');
    });

    cluster.on('online',function(worker){
        console.log('Worker ' + worker.process.id + ' is online');
    });

    cluster.on('exit', function(worker, code, signal){
        console.log('Worker '+ worker.process.pid + 'died with code ' +code+ ', and singnal '+ signal);
        console.log('Restarting the worker as it is crashed');
        cluster.fork();
    })
   
}
else{
    var app= require('express')();
    app.all('/*', function(req,res){
        for(let i=0;i<10000000000;i++)
        {
            ;
        }
        res.send('process '+ process.pid +' says hello').end();
    });

    var server = app.listen(8000, function(){
        console.log('Process ' + process.pid+ ' is listening to all incoming requests');
    })
}