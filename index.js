
const http = require('http')
const port = 5000
const app = require('./app')
app.set('port', port)

const server = http.createServer(app)

server.listen(port, () =>{
    console.log('-----------------------------------------------')
    console.log(`|       Server listening at port: ${port}       |`)
    console.log('-----------------------------------------------')
})