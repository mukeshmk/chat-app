import React, {useState, useEffect} from 'react';
import socket from '../socket';

import MessagesList from './MessagesList';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
      
    useEffect(() => {
        socket.on('message', (msg) => {
            setMessages(messages => [ ...messages, msg ]);
        });
    }, [messages]);

    const sendMessage = (e) => {
        if(message) {
            setMessages(messages => [ ...messages,  message]);
            socket.emit('message', message, setMessage(''));
        }
        e.target.value = '';
    };
    
    return (
        <>
            <h1>{message}</h1>
            <MessagesList messages={messages} users = {['users1', 'users2', 'users3', 'users4', 'users5']}/>
            <input 
                placeholder="Message"
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}>
            </input>
        </>
    );};

export default Chat;
