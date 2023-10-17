import React, { useState, useEffect } from 'react';
import './status.css'

function Mnq() {
  const [messages, setMessages] = useState([]);
  const socket = new WebSocket('wss://sfx-backend.onrender.com/bot-messages'); // Use your WebSocket server address.
//ws for localhost
// wss for regular https site 

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
        <div className="hero-text-wrapper
absolute
w-[100vw]
md:w-[50vw]
z-[200]
h-[10%]
top-[30%]
left-0
lg:left-[1%]
flex
place-content-center
    ">
      <div className="hero-text-cont
z-[100]
flex
flex-col
w-[70vw]
rounded-[1em]
md:w-[22em]
lg:w-[30em]
md:h-[15em]
absolute
top-[8em]
md:top-[30%]
text-[#e3ddd1]
font-main
p-4
pl-7
">
        <div className="ht1-cont
        w-[80%]
        h-[10%]
        ">
          <p className="smalll
          md:text-[1em]
          ">
          I & I TECHNOLOGIES PRESENTS
          </p>
        </div>
        <div className="ht1-cont
        w-[100%]
        h-[65%]
        mt-[1em]
        ">
          <p className="smalll
        font-black
        text-[3.5em]  
        lg:text-[5em]
        leading-[1]
          ">
          THE SFX ALGORITHM          
          </p>
        </div>
        <div className="ht1-cont
        w-[80%]
        h-[50%]
        lg:mt-[1em]
        ">
        <p className="smalll
        md:mt-[0.6em]
        lg:text-[1.4em]
          ">
          "Trade Smarter, Not Harder"         
          </p>
        </div>
      </div>
    </div>
    <div className="status-wrapper
fixed
w-[100vw]
md:w-[50vw]
z-[200]
h-[10vh]
top-[30%]
right-0
lg:right-[1%]
flex
place-content-center
    ">
    <div className="status
    z-[100]
    bg-[#131313]
    flex
    flex-col
    w-[70vw]
    md:w-[22em]
    lg:w-[30em]
    md:h-[15em]
    absolute
    top-[8em]
    md:top-[30%]
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
          Live Trades
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
