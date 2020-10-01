import React from 'react';
import socket from '../socket';

import ChatItem from '../components/chat-item/chat-item.component.jsx';
import MessageInput from '../components/message-input/message-input.component.jsx';

const styles = {
    width: '100%',
    height: '70vh',
};

const messageInputStyles = {
    position: 'absolute',
    bottom: '10vh',
    width: '60vw',
    left: '50%',
    marginLeft: '-30vw',
};

const textBoxStyles = {
    width: '50vw',
};

const sendButtonStyles = {
    marginLeft: '2vw',
};

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            messages: [],
            value: '',
        };

        this.onChange = this.onChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
        
    componentDidMount() {
        socket.on('message', (msg) => {
            const { messages } = this.state;
            messages.push({ 
                message: msg, 
                mine: false,
            });

            this.setState({
                ...this.state,
                messages: messages,
            });
        });
    }

    onChange (e) {
        this.setState({
            value: e.target.value,
        });
    }

    submitHandler() {
        const message = {
            message: this.state.value,
            mine: true,
        };
        const { messages } = this.state;
        messages.push(message);

        socket.emit('message', message);
        this.setState({
            ...this.state,
            value: '',
            messages: messages,
        });
    }

    render() {
        let key = 0;
        const { messages, value } = this.state;
        return (
            <div className="chat-window" style={styles}>
                {   
                    messages.map(({ message, mine }) => {
                        key++;
                        console.log(message);
                        return <ChatItem key={key} message={message} mine={mine}/>;
                    })
                }
                <div className="message-input" style={messageInputStyles}>
                    <input type="text" onChange={this.onChange} value={value} className="message-textbox" style={textBoxStyles} placeholder="Enter your message"/>
                    <button className="send-button" style={sendButtonStyles} onClick={this.submitHandler}>Send Message</button>
                </div>
            </div>    
        );
    }
};
// <MessageInput submitHandler={this.submitHandler} />     

export default ChatWindow;