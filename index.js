const { Client, ActivityType } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();

const currentStatus = 'Testing';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(currentStatus, { type: 'CUSTOM' });
});

client.login(process.env.token);
