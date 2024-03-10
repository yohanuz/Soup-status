const Discord = require('discord.js-selfbot-v13');
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();

const statusMessages = [".gg/chillzone"];
let currentIndex = 0;

client.on('ready', () => {
  updateStatusAndSendMessages();
});

client.on('messageCreate', (message) => {
  // Your message handling logic here
});

function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom }],
    status: 'dnd',
  });

  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {
    // Handle the case when textChannel is not an instance of TextChannel
  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.login(process.env.token);
