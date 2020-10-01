import React from 'react';

const rightTextStyles = {
    position: 'relative',
    left: '70vw',
    width: '20vw', 
    backgroundColor: '#00aad1',
    borderRadius: '10px',
    color: 'white',
    margin: '10px 0 10px 0',
    padding: '12px 18px 12px 18px',
};

const leftTextStyles = {
    position: 'relative',
    left: '10vw',
    width: '20vw', 
    backgroundColor: '#77b0bd',
    borderRadius: '10px',
    color: 'white',
    margin: '10px 0 10px 0',
    padding: '12px 18px 12px 18px',
};

const ChatItem = ({ message, mine }) => {
    if (mine) {
        return (
            <div className="chat-item" style={rightTextStyles}>
                {message}
            </div>
        );
    } else {
        return (
            <div className="chat-item" style={leftTextStyles}>
                {message}
            </div>
        );
    }
};

export default ChatItem;