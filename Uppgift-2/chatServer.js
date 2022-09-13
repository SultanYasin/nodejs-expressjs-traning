const net = require('node:net')

const server = net.createServer()

server.listen({
    host : 'localhost',
    port : '8090',
    exclusive : true
})

server.on('connection' , (client) => {
    console.log('Client connected')
    client.write('welcome to the server... ')
})
