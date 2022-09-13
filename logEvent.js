//making loging event so I need date formate , id generator , path modual, and  a file to write all inloggning and promises.

const {format} = require('date-fns');
const {v4: uuid} = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path')

const logEvent = async (message) => {
    const logItem = `${format(new Date() , 'yyyy-MM-dd\t HH:mm:ss')} \t ${uuid()} \t ${message} \n`
    console.log(logItem);
    try {
        if(! fs.existsSync(path.join(__dirname , 'logs' ))) 
            {await fsPromises.mkdir(path.join(__dirname , 'logs' ))}
        await fsPromises.appendFile(path.join(__dirname , 'logs' , 'eventLog.txt'), logItem)
    } catch (error) { console.error(error); }
}

module.exports = logEvent;