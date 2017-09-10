# NodeJsTraining

ES6 Features :
- In ES6 ; is not required to end the scope or statement. ASI will take care of it. 
- let scope
- ()=> 
- template literal operator ` 



npm init –y : to create package.json with default values. 

npm install express

Types of functions in JavaScript : 
1. declartive function or named function 
2. Ananoyomous function 
3. Instance function 

function Emp(name, sal){
    this.Ename = name;
    this.sal = sal;
    this.show ()=> {
    }
}
()=> fat arrow operator


- Node is event drivern model with non blocking. 
- events are in core module
- eventEmitter object is responsible for firing events. 
- Built in events in Stream : data, close ,end, finish
- subscribe built-in or custom events with emittor.on()
- Create custom events in custom modules and consume it in other modules.
- runs under eventloop of V8 


- Express, Hapi Js, Restify 
- Node TS ts-node

- CSRF Token

- *Axios*

Async & Await :

Addon : 

npm install node-gyp -g
npm install nan --save
node-gyp configure
node-gyp build