const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = require('socket.io')(server)
// const Controller = require('./controllers/controller');
const { User } = require('./models/index');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json())

let users = [];
let moves = [];

io.on('connection', (socket) => {
    console.log('User Connected')
    //// get connect user data
    socket.on('user-connect', (data) => {
        users.push(data)
        io.emit('user-connect', users)
    })
    ///// 
    socket.on('room-enter', (data) => {

    })

    socket.on('move', (data) => {
        moves.push()
    })
})

server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})