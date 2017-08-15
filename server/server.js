const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './../public');
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage',
    generateMessage('Admin', 'Welcome to the Chat App'));

  socket.broadcast.emit('newMessage',
    generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', ({from, text}, callback) => {
    console.log('createMessage', {from, text});
    io.emit('newMessage', generateMessage(from, text));
    callback('This is from the server');
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => console.log(`Server up in port ${port}`));
