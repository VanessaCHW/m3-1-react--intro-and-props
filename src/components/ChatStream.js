import React from 'react';
import ChatMessage from './ChatMessage';

import './ChatStream.css';

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = (props) => {
  return <section className='chat-stream'>
    {props.messages.map((message) => {
      return <ChatMessage 
      message={message}
      messageType = {message.user === props.currentUser? 'sent':'received'}
      />;
    })}
    </section>;
};

export default ChatStream;
