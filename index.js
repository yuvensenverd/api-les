var express = require('express'),
    http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
const port = 2020
const bodyParser = require('body-parser')
const cors = require('cors')
const bearerToken = require('express-bearer-token');
const fs = require('fs')
// require('./scheduler/schedulers')

app.use(bodyParser.json())
app.use(cors())

app.io = io

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static('public')) 


app.use(bearerToken())

// const client = require('twilio')();

const {
    userRouter
} = require('./router')


app.use("/user", userRouter)


const accountSid = 'ACe76747951073aa1d89501f528e2f53fa';
const authToken = 'a9e569fc5b07cbd080e7cb5be0b6d6a7';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'za mau nanya sekarang ga databasenya?',
        //  statusCallback : 'https://apikasihnusantara.purwadhikax.com/payment/getstatus',
         to: 'whatsapp:+6281291316834'
       })
      .then(message => console.log(message.sid)).catch((err) => console.log(err))


// client.messages.create({
//   from: 'whatsapp:+62811418889',
//   body: 'Ahoy world!',
//   to: 'whatsapp:+6281291316834'
// }).then(message => console.log(message.sid));


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

// const {
//     userRouter, 

// } = require('./router')

// app.use("/user", userRouter)

server.listen(port, ()=>console.log('listen on port ' + port));
















