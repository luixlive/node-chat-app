const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './../public');
const server = http.createServer(app);

const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', ({from, text}) => {
    console.log('createMessage', {from, text});
    io.emit('newMessage', {
      from,
      text,
      createdAt: new Date().getTime()
    })
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => console.log(`Server up in port ${port}`));
