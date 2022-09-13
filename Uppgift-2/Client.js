const net = require('node:net')

const clientSite = net.createConnection('8090', 'localhost')
 clientSite.on('data', (data , error) => {
    if(error) console.error(error)
    console.log(`\n message received from the server:  ${data}`)
 });