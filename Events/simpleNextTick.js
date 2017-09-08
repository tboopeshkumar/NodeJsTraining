console.log(process.env.os);

console.log(1);

setTimeout(()=>console.log('Hello'),5000);

process.nextTick(function(){
    console.log(3);
})

console.log(2);