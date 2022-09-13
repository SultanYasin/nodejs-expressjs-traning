const EventEmitter  = require('events');
const {v4 : uuid} = require('uuid')
const fs = require('fs')
const fsp = require('fs').promises
const {format} = require('date-fns')
const path = require('path')

const os = require('os')

const emitter = new EventEmitter();

emitter.on('xFunc' , ()=> console.log('xFunc has been called')); //use emitter.on instead of  addEventListner in vanilja-js

emitter.emit('xFunc')//give a signal 

const logEv = async (msg) => {
    const logItem = `${format(new Date() , 'yyyy-MM-dd\t HH:mm:ss')} \t ${uuid()} \t ${msg} \n`
    console.log(logItem);
    try {
        //if logs dir not existe so create one and inside of it create a file and write the info that exists in logitem inside it.
        if(!fs.existsSync(path.join(__dirname , 'evLogs'))) 
            await fsp.mkdir(path.join(__dirname , 'evLogs'))
       // if(!fs.existsSync(path.join(__dirname , 'evLogs' , 'eventLogging.txt'))) 
            await fsp.appendFile(path.join(__dirname , 'evLogs' ,'eventLogging.txt' ) , logItem)
    } catch (error) {console.error(error);}
}
//logEv('msg')
console.log( os.platform());

