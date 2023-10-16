import { Client, GatewayIntentBits } from "discord.js";
import fetch from 'node-fetch';


const bot = new Client({ intents: [
  GatewayIntentBits.GuildMessages, 
  GatewayIntentBits.Guilds, 
  GatewayIntentBits.MessageContent, 
  GatewayIntentBits.GuildMembers // Add this intent to capture messages from bots
] });

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
});

// Event listener for when a message is received
bot.on('messageCreate', (message) => {
  if (message.channel.id === '1153928749218279456') {
    // Check if the message is an embedded message
    if (message.embeds.length > 0) {
      message.embeds.forEach((embed) => {
        // Access embedded message content
        const data = {
          content: `\nDescription: ${embed.description}`,
          author: message.author.username,
          timestamp: message.createdTimestamp,
        };

        // Log the received data
        console.log(data);

        // Send the message data to the API server
        fetch('http://localhost:3000/bot-messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      });
    } else {
      // Handle regular text messages
      const data = {
        content: message.content,
        author: message.author.username,
        timestamp: message.createdTimestamp,
      };

      // Log the received data
      console.log(data);

      // Send the message data to the API server
      fetch('http://localhost:3000/bot-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    }
  }
});

// Log in to the Discord server using your bot's token

//  https://discord.com/api/oauth2/authorize?client_id=1154101704309084272&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D1154101704309084272%26scope%3Dbot&response_type=code&scope=identify%20connections%20email%20guilds%20guilds.join%20guilds.members.read%20gdm.join%20rpc%20rpc.notifications.read%20rpc.screenshare.read%20bot%20webhook.incoming%20messages.read%20activities.read%20dm_channels.read