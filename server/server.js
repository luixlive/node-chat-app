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

  socket.emit('newMessage', {
    from: 'luixlive',
    message: 'Hey',
    createdAt: 123
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => console.log(`Server up in port ${port}`));
