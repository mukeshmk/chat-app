import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// eslint-disable-next-line no-undef
const socket = io();

socket.on('message', message => {
    console.info(message);
});
ReactDOM.render(<App />, document.getElementById('root'));
