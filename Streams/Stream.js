// Stream - flow of data. 
//(can be from Keyboard, File, Socket for input stream. can be to Monitor, File, Socket for output streams)
//Pipe - is a command that using Buffering to perform IO stream in non blocking way. 

const fs = require('fs'); // fs - file system module - core module. 

let stream = fs.createReadStream(process.argv[2]);

stream.on('data', (chunk)=>{
    console.log(chunk.toString())
    console.log(chunk)
});

stream.on('error',(err)=> console.log(err));

stream.on('end', ()=>{
    console.log('finished reading file');
    stream.close();
})
