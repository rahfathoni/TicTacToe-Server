const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = require('socket.io')(server)

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json())

io.on('connection', (socket) => {
    console.log('User Connected')
})

server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})