import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import { WebSocket, WebSocketServer } from 'ws'; // Import the WebSocket library
import cors from 'cors'; // Import the cors package

const app = express();

app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors({
  origin: ['http://localhost:5173', 
  'https://sfx-kappa.vercel.app']
}));

const messages = [];

const server = app.listen(3000, () => {
  console.log('API server is running on port 3000');
});

// Set up WebSocket server
const wss = new WebSocketServer({ server }); // Use WebSocket.Server from the 'ws' package

// WebSocket server logic
wss.on('connection', (ws) => {
  // Handle WebSocket connections
  ws.on('message', (message) => {
    // Handle messages received from clients (if needed)
    console.log('Received message from a WebSocket client:', message);
  });
});

app.post('/bot-messages', (req, res) => {
  const { author, content, timestamp } = req.body;
  const newMessage = { author, content, timestamp };
  messages.push(newMessage);

  // Log the received message
  console.log(`${timestamp}: \nReceived message from ${author}: ${content}`);

  // Send the new message to all connected WebSocket clients
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(newMessage));
    }
  });

  res.sendStatus(200);
});

app.get('/bot-messages', (req, res) => {
  res.json(messages);
});

// npm 
// npm install express body-parser node-fetch ws cors discord.js