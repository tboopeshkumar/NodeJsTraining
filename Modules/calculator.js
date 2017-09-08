var logger = require('./log');

var data ='learing Node js Modules';

var calculate = function(numA, numB){
    console.log(data);
    logger.info("Log from log module : " +data);
    return numA* numB + 10* numB;
}

var add = function(numA, numB){
    return numA+ numB;
}

var perform = function(){
    console.log("I am perform function in Calculator module");
}

exports.calculate = calculate;
exports.add = add;