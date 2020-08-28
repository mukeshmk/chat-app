import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line no-undef
const socket = io();

function App() {
    return (
        <Button variant="contained" color="primary">
            Hello World
        </Button>
    );
}

socket.on('message', message => {
    ReactDOM.render(<h2>{message}</h2>, document.getElementById('msg'));
});
ReactDOM.render(<App />, document.getElementById('root'));
