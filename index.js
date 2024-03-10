const Discord = require('discord.js-selfbot-v13');
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({
    activities: [{ name: ".gg/chillzone", type: ActivityType.Custom }],
    status: 'dnd',
  });


client.login(process.env.token);
