import React from 'react';
import socket from '../../socket';

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

class MessageInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: null,
        };
    }

    onChange (e) {
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const { submitHandler } = this.props;

        return (
            <div className="message-input" style={messageInputStyles}>
                <input type="text" className="message-textbox" style={textBoxStyles} placeholder="Enter your message"/>
                <button className="send-button" style={sendButtonStyles} onClick={submitHandler}>Send Message</button>
            </div>
        );
    }
}

export default MessageInput;