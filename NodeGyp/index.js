var addon= require('./build/Release/myAddon.node');
console.log(addon.sayHello());

function myFunc(){
console.log(arguments);
}

myFunc();