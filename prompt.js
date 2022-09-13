const ps  = require('prompt-sync')({sigint :true})

let name = ps('name is: ')
console.log(name);