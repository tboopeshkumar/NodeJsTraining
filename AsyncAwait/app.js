// var async = require("async");
// //async.parallel
// //async.auto
// async.series({
//     numbers: function (callback) {
//         setTimeout(function () {
//             callback(null, [1, 2, 3]);
//         }, 1500);
//     },
//     strings: function (callback) {
//         setTimeout(function () {
//             callback(null, ["a", "b", "c"]);
//         }, 1000);
//     }
// },
// function (err, results) {
//     console.log('hi');
//     console.log(results);
// });

async function unexpected(){

    // const randomDelay1= Math.floor(Math.random()*1000*2);
    // const randomDelay2= Math.floor(Math.random()*1000*2);
    const randomDelay1= 500;
    const randomDelay2= 1000;
    try{
        var result = await new Promise((resolve,reject)=>{
            setTimeout(function() {
                resolve("Hello world");
            }, randomDelay1);
            setTimeout(function() {
               reject(new Error('Something went wrong')); 
            }, randomDelay2);
        });
        console.log(result);
        // result.then((message)=>{
        //     console.log("then : "+ message);
        // });

    }catch(err){
        console.log("err : " + err.message);
    }
}

unexpected();