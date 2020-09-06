import React, {useState, useEffect} from 'react';
import socket from '../socket';

const Chat = ({ location }) => {
    const ENDPOINT = 'locathost:8080';
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        
    }, [ENDPOINT, location.search]);
      
    useEffect(() => {
        socket.on('message', (msg) => {
            setMessages(messages => [ ...messages, msg ]);
            console.log(msg);
        });
    }, [messages]);

    const sendMessage = (e) => {
        console.log(e);
        if(message) {
            setMessages(messages => [ ...messages,  message]);
            socket.emit('message', message, setMessage(''));
        }
    };
    
    return (
        <>
            <h1>{message}</h1>
            <input 
                placeholder="Message"
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
            ></input>
        </>
    );};

export default Chat;
