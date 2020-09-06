import React, {useState, useEffect} from 'react';
import socket from '../socket';

const Chat = () => {
    const [msg, setMsg] = useState('');
    
    useEffect(() => {
        socket.on('message', (msg) => {
            setMsg(msg);
            console.log(msg);
        });
    }, []);

    return (
        <>
            <h1>{msg}</h1>
            <input placeholder="Message" type="text" onChange={(e) => setMsg(e.target.value)}></input>
        </>
    );};

export default Chat;
