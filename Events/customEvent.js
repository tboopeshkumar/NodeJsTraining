//Custom Events
const events = require('events'),
emitter = new events.EventEmitter();

//callback
let doATask=(status) => {
if (status === 'success') {
   emitter.emit('taskSuccess') // Raise Specific event
} else if (status === 'fail') {
   emitter.emit('taskFail')
}
// This event passes arguments to detail status
emitter.emit('taskComplete', 'complete', status) // raise event with type and scope
}

emitter.on('taskSuccess',()=> {// subscribe to event
console.log('task success!')
});
emitter.on('taskFail', ()=> {
console.log('task fail')
});
// register listener for task complete
emitter.on('taskComplete', (type, status)=> {
console.log(`The task is  ${type}  with status  ${status}`)
});

// call task with success status
setTimeout(doATask, 2000, 'success');
// set task to fail
setTimeout(doATask, 4e3, 'fail');