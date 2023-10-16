import React, { useState, useEffect } from 'react';
import './status.css'

function Mnq() {
  const [messages, setMessages] = useState([]);
  const socket = new WebSocket('ws://localhost:3000/bot-messages'); // Use your WebSocket server address.

  useEffect(() => {
    socket.addEventListener('message', (event) => {
      const newMessage = JSON.parse(event.data);

      // Check if the new message already exists in the current messages
      if (!messages.some((message) => message.timestamp === newMessage.timestamp)) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    });
  }, [messages]); // Include messages in the dependency array to trigger updates

  return (
    <>
    <div className="status-wrapper
    fixed
    w-[100vw]
    z-[200]
    h-[10vh]
    top-[30%]
    flex
    place-content-center
    ">
    <div className="status
    z-[100]
    bg-[#131313]
    flex
    flex-col
    w-[20em]
    lg:w-[35em]
    h-[10em]
    absolute
    top-[30%]
    text-[#e3ddd1]
    font-main
    ">
      <div className="status-inner
      w-[100%]
      ">
        <div className="indicg
        absolute
        w-[96%]
        h-[2em]
        bg-[#131313]
        ">
        <div className='on
        absolute
        '></div>
        <p className='
        absolute
        ml-6
        top-[9%]
        p-0
        '>
          Live
        </p>
        </div>
    <div className='
    z-[100]
    mt-[2.4em]
    ml-[2vw]
    flex
    place-self-center
    text-left
    text-[#e3ddd1]
    font-main
    whitespace-pre-wrap
    '>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.author}:</strong> {message.content}
          </li>
        ))}
      </ul>
    </div>
    </div>
        </div>
    </div>
    </>
  );
}

export default Mnq;
