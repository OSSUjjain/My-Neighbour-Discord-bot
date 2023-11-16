//Import the necessary discord.js classes
/*The Discord.js library has a default export (Client) as well as named 
exports (Events, GatewayIntentBits) so import them separetly.

Eslint treats 'Events' as a token/variable name rather than a named export.
So the fix is to separate the **default and named imports**
*/
import Client from "discord.js";
import { Events, GatewayIntentBits } from "discord.js";
import token from "./config.json";

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);
