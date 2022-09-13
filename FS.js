const fs = require('fs');
const fsPromises = require('fs').promises; // wroks with try/catch & async/await
const path = require('path');


/*
fs.readFile('./textFiles/lorem.txt' , 'utf-8',  (err , data) =>{
    if (err) throw err;
    console.log("reading file by using direkt path")
})

fs.readFile(path.join('textFiles' , 'lorem.txt') , 'utf-8' , (err , data) =>{
    if (err) throw err;
    console.log("lorem text has been readed , reading file by using the path variable")
})

//catching errors
process.on('uncaughtException' , err =>{
    console.error(`there was an uncught error ${err}`); // can be used when the file or the monster that I'm looking for is not exists.
    process.exit(1)
})

fs.writeFile((__dirname,'textFiles' , 'reply.txt') , 'Nice to serve you sir, we looking to your next visit.' , (err)=>{
    if(err) throw err;
    console.log("file writen has been completed")


    fs.appendFile(path.join(__dirname , 'textFiles' , 'reply.txt' ) , "\n\n Yes it is!" , (err)=> {
        if(err)throw err
        console.log("apeending completed");
    })
})

const Fname = async ()=> {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'textFiles' , 'lorem.txt') , 'utf-8')
        console.log(data);
    } catch (error) { console.error(err)}
}

Fname();


*/




const greeting = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'textFiles' , 'lorem.txt') );console.log(data.toString());
                     await fsPromises.unlink(path.join(__dirname, 'textFiles' , 'lorem.txt'))
                     await fsPromises.writeFile(path.join(__dirname, 'textFiles' , 'greetingFile.txt')  , data)
                     await fsPromises.appendFile(path.join(__dirname, 'textFiles' , 'greetingFile.txt') , '\n nice to see you!' )
                     await fsPromises.rename(path.join(__dirname, 'textFiles' , 'greetingFile.txt') , path.join(__dirname, 'textFiles' , 'greetingFileCompleted.txt'))
                            
        const newdata = await fsPromises.readFile(path.join(__dirname, 'textFiles' , 'greetingFileCompleted.txt') ); console.log(newdata.toString());
        

    } catch (error) { console.error(error)}
}

greeting()


//copy context from a filte to another
const readStream = fs.createReadStream('path' , {encoding:'utf8'});
const writeStream = fs.createWriteStream('path')

readStream.pipe(writeStream); //attach a writeable stream to a readable stream allowing to pass the readable stream data to the writeable stream
