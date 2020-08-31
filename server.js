import http from 'http';
import express from 'express';
import socketio from 'socket.io';

import config from './config';
import apiRouter from './api';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/chat', (req, res) => {
    res.render('index');
});

app.use('/api', apiRouter);

app.use(express.static('public'));

server.listen(config.port, () => {
    console.info(`App Running on http://localhost:${config.port}`);
});

io.on('connection', (socket) => {
    // io.emit() -> for all clients when a connection happens
    // socket.emit() -> for that particular socket connection
    // socket.broadcast.emit() -> all other clients apart from that socket connection

    // emits a message to the client who has newly joined a chat (only to that client)
    socket.emit('message', 'Welcome to Chat App!');

    // broadcast.emits a message to all other clients when a client joins a chat (apart from the joining client)
    socket.broadcast.emit('message', 'A new user has joined a chat');

    // runs when a client disconnects
    socket.on('disconnect', () => {
        io.emit('message', 'a user has disconnected');
    });
});
