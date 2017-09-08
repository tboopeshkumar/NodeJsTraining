let EventEmitter = require('events').EventEmitter,
    a = new EventEmitter; // () is not required from ES6 -i.e new EventEmitter()

    //subscribe to event
    a.on('inserted', ()=> console.log('record inserted'));

    //raise event
    a.emit('inserted');