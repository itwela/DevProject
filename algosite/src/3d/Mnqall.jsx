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

      // Function to ping the server to keep it active
  const pingServer = () => {
    fetch('https://sfx-backend.onrender.com/bot-messages')
      .then((response) => {
        if (response.ok) {
          console.log('Ping successful');
        } else {
          console.error('Ping failed');
        }
      })
      .catch((error) => {
        console.error('Ping failed with an error:', error);
      });
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

  //   // Set up the ping interval
  //   const pingInterval = 14 * 60 * 1000; // 14 minutes in milliseconds
  //   // Call the ping function immediately to start the interval
  //   pingServer();
  //   // Set up the ping interval using setInterval
  //   const pingIntervalId = setInterval(pingServer, pingInterval);
  }, []); 

  useEffect(() => {
  window.addEventListener('beforeunload', fetchLatestMessages);

  return () => {
    window.removeEventListener('beforeunload', fetchLatestMessages);
    // clearInterval(pingIntervalId); // Clear the ping interval when the component unmounts
  };
}, []);


  return (
    <>
    <div className="status-wrapper
fixed
w-[100vw]
z-[200]
h-[10vh]
md:top-[30%]
top-[20%]
right-0
lg:right-[1%]
flex
place-content-center
    ">
      <p className="disclosure
fixed
top-[35%]
md:top-[30%]
text-[#e3ddd1]
font-main
md:text-[0.7em]
text-[0.5em]
      ">
        *Disclaimer - Nothing you see here is financial advice
        <br />
      </p>
    <div className="status
z-[100]
bg-[#0e0d0d]
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
w-[93%]
rounded-1
h-[2em]
bg-[#0e0d0d]
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
