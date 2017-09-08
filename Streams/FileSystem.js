/*

* Retrive directory structures
* Navigate directoires
* Manipulate direcotry structures

*/

const fs= require("fs");

console.log("Going to open the file");

//Asynchronous - Opening file - Non-Blocking approach
fs.open('resource.txt', 'r+', (err,fd)=>{
    if(err){
        return console.error(err);
    }
    console.log("File opened successfully!");
});

// fs.openSync - Synchronous execution. Waiting to complete the operaiton (..Sync apis)- i.e Blocking approach

fs.readFile('resource.txt', function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous reading : " + data.toString());
});

var data = fs.readFileSync('resource.txt');
console.log("Synchronous read : "+ data.toString());


console.log("Going to write some content");
fs.writeFile('hello.txt', 'Hi! Learning writing ', 
 function(err) {
    if (err) {
        return console.error(err);
    }
})