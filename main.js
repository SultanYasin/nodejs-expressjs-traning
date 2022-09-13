const logEvent = require('./logEvent');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{ };

const myEmitterObj = new MyEmitter();

myEmitterObj.on('log' , (msg)=>logEvent(msg))

setTimeout(()=>{myEmitterObj.emit('log' , 'log event emitted from (main.js)')},2000) 
