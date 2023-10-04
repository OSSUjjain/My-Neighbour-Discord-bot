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
