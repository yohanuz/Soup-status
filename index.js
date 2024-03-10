const Discord = require('discord.js-selfbot-v13');
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();


client.once('ready', () => {
    console.log('Bot is online!');
    client.user.setPresence({
        activity: {
            name: 'Streaming',
            type: 'STREAMING',
            url: 'https://www.twitch.tv/discord'
        },
        status: 'dnd'
    });
});

client.login(process.env.token);
