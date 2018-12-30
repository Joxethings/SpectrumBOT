const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')
const client = new Discord.Client();
var userID;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', function (user, userID, channelID, message, evt) {
  if (message.content === 'ping') {
    message.reply('PONG');
    }


    //If DM client
    if (client.directMessages[channelID]) {
        if (message.toLowerCase().startsWith("!auth")) {
            client.sendMessage({
                to: userID,
                embed: {
                    "title": "Authorization!",
                    "description": "Please take a second and click this link: [Authorize me!](https://login.eveonline.com/oauth/authorize/?response_type=code&client_id=7da1c05e886c4404a8d54c5c4c37eb4f&redirect_uri=https://localhost/callback&scope=publicData)\nI will get back to you when you have given me the permissions i need.",
                    "color": 2615919,
                    "timestamp": date,
                    "footer": {
                        "text": "FLSP authorization"
                    },
                    "image": {
                        "url": "https://i.ytimg.com/vi/mZ1YgQGQxE8/maxresdefault.jpg"
                    }
                }
            });
			}
			};
			};
  
  client.login(process.env.BOT_TOKEN);
