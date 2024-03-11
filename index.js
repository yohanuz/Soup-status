const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();

const currentIndex = 0;
const statusMessages = ['Message 1', 'Message 2', 'Message 3'];
const currentStatus = statusMessages[currentIndex];
console.log(currentStatus);

function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  cleint.on('ready', () => {
    cleint.user.setPresence({
      activities: [{ name: currentStatus, type: ActivityType.Custom}],
      status: 'dnd',
    });
  });
}
setInterval(updateStatusAndSendMessages, 5000); // Rotate status every 5 seconds

client.login(process.env.token);
