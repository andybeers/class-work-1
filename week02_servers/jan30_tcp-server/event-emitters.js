const EventEmitter = require('events');

const ee = new EventEmitter();

// subscribe to a message event...
ee.on('message', message => {
    console.log('MESSAGE', message);
});
ee.on('banana', message => {
    console.log('BANANA', message);
});
ee.on('banana', message => {
    console.log('BANANA2', message);
});

// emit (publish) a message event, 
// passing in some data for the event
ee.emit('banana', 'hello world!');