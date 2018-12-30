const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')
const client = new Discord.Client();
var userID;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('PONG');
    }
};
  
  client.login(process.env.BOT_TOKEN);
