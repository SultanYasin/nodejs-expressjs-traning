const { table , log , error } = require('console');
const http = require('http');
const { reject } = require('lodash');
const ld = require('lodash');
const { resolve } = require('path');
const fs = require('fs')
const fsPromises = require('fs').promises;
const path = require('path')

const server = http.createServer((req , res) => {req.url === '/' ? res.end("Hi from http server !") : res.end(' hi about') 
console.log(req.url , req.methode)})
server.listen(5000 , ()=> console.log('server running on port 50000'))

const loopedArray = [1,[2, [3,[4]]]];
log(ld.flattenDeep(loopedArray)) // destructuring the index of the the array and put them only in one array.(lodash).


const readFileContext = (path) =>{
    return new Promise((resolve , reject)=>{
        fs.readFile(path , 'utf8' , (err , data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

readFileContext('./textFiles/greetingFileCompleted.txt').then((res )=> log(res))


const readContext = async () => {
    const data = await fsPromises.readFile('./textFiles/greetingFileCompleted.txt', 'utf-8' )
    log(data)};

readContext()

//this is how to redirect from a site to another site
// res.setHeader('location' , 'the path of the new site I wanna to redirect to') -> res.statusCode = 301 -> res.end()




