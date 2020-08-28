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

app.use(express.static('public'));
app.use('/api', apiRouter);

server.listen(config.port, () => {
    console.info(`App Running on http://localhost:${config.port}`);
});

io.on('connection', (socket) => {
    console.info('a user connected');

    io.emit('message', 'Welcome to Chat App!');
});
