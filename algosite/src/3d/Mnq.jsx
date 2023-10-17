import React, { useState, useEffect } from 'react';
import './status.css'

function Mnq() {
  const [messages, setMessages] = useState([]);
  const socket = new WebSocket('ws://sfx-backend.onrender.com/bot-messages'); // Use your WebSocket server address.

    // Function to fetch the latest messages from the server
    const fetchLatestMessages = () => {
      fetch('https://sfx-backend.onrender.com/bot-messages')
        .then((response) => response.json())
        .then((data) => setMessages(data))
        .catch((error) => console.error(error));
    };

  useEffect(() => {
    // Fetch the latest messages when the component mounts
    fetchLatestMessages();
    console.log('Fetching latest messages...');

    // Add WebSocket event listener to update messages
    socket.addEventListener('message', (event) => {
      const newMessage = JSON.parse(event.data);

      // Update messages with the new message
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  }, []); 

  useEffect(() => {
  window.addEventListener('beforeunload', fetchLatestMessages);

  return () => {
    window.removeEventListener('beforeunload', fetchLatestMessages);
  };
}, []);

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
    w-[18em]
    md:w-[20em]
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
    ml-[1em]
    md:ml-[2em]
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
