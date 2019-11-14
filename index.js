var express = require('express'),
    http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
const port = 2019
const bodyParser = require('body-parser')
const cors = require('cors')
const bearerToken = require('express-bearer-token');
const fs = require('fs')
// require('./scheduler/schedulers')


const {
    userRouter
} = require('./router')


app.use("/user", userRouter)






app.use(bodyParser.json())
app.use(cors())

app.io = io

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static('public')) 


app.use(bearerToken())

console.log('masuk io')
io.on('connection', (socket) => {
        console.log('User connected')
        io.emit('user connected', {})
        socket.on('disconnect', () => {
                console.log('user disconnected')
                io.emit('user connected', {})
        })
})



app.get('/', (req, res) => {
    res.status(200).send(
        `<h3>NGELES API</h3>`
    )
})

server.listen(port, ()=>console.log('listen on port ' + port));
















