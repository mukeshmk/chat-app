import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import socket from '../socket';

import ChatWindow from '../containers/chat-window.container.jsx';
import NavBar from './NavBar';

const useStyles = makeStyles(() => ({
    root: {
        margin: '8px'
    },
}));

const Chat = () => {
    const classes = useStyles();    
    return (
        <>
            <NavBar />
            <div className={classes.root}>
                <ChatWindow/>
            </div>
        </>
    );
};

export default Chat;
