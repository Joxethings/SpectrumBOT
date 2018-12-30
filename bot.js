const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('PONG');
    }
});
  
  client.login(process.env.BOT_TOKEN);
