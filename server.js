import config from './config';
import apiRouter from './api';
import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: 'Hello World!!'
    });
});

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, () => {
    console.info(`App Running on http://localhost:${config.port}`);
});
