
// npm install event-stream --save
var fs = require('fs');
var es = require('event-stream');
var lineNr = 0;
var ts= es.pause();
var s = fs.createReadStream('myhello.txt')
    .pipe(es.split())
    .pipe(es.mapSync(function(line){
        // pause the readstream
      
        ts.pause();
        lineNr += 1;
        console.log(lineNr +' : '+ line);
        // resume the readstream, possibly from a callback
        ts.resume();
    })
    .on('error', function(err){
        console.log('Error while reading file.', err);
    })
    .on('end', function(){
        console.log('Read entire file.')
    })
 )

    //OR

    //npm install readline
/*
var fs = require('fs'),
    readline = require('readline'),
    stream = require('stream');

var instream = fs.createReadStream('/path/to/file');
var outstream = new stream;
outstream.readable = true;
outstream.writable = true;

var rl = readline.createInterface({
    input: instream,
    output: outstream,
    terminal: false
});

rl.on('line', function(line) {
    console.log(line);
    //Do your stuff ...
    //Then write to outstream
    rl.write(cubestuff);
});

*/
// or this code also works
