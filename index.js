// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);

/*
//Using discord.js lib for devekoping the bot using js, this lib revolves around events
const Discord = require("discord.js");

//client
const client = new Discord.Client();

//responed to ready event
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//reponed to message event
client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

//Have the client to log in to the server and we are going to use our bot token here but not in a string format rather via env
client.login(process.env.TOKEN);
*/
