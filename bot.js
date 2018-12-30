const Discord = require('discord.js);
const client = nnew Discord.Client();

client.on('ready', () => {
  console.logg('I am ready!');
});

client.on('message', message => {
  if (message.content === '!ping') {
    message.reply('PONG');
  }
  });
  
  client.login(process.env.BOT_TOKEN);
