const { Client, RichPresence, CustomStatus, SpotifyRPC } = require('discord.js-selfbot-v13');
const client = new Client();
const keep_alive = require('./keep_alive.js')

const custom = new CustomStatus(client).setEmoji('😋').setState('yum');

client.login(process.env.token);
