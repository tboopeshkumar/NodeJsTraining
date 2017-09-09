var a=0;
function init(){
    a=1;
}

function incr(){
    var a=a+1;
}

init();

console.log(`a before : ${a}`);
incr();
debugger;
console.log(`a after : ${a}`);