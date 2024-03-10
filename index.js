const { Client } = require('discord.js-selfbot-v13');
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const client = new Discord.Client();

client.on('messageCreate', message => {
  const args = message.content.trim().split(' ');
  const command = args.shift().toLowerCase();

  if (message.author.id === '1124984868435148861','885368385595125791' && command === 'setstreaming') {
    const streamName = args.join(' ');

    // Setting the streaming status and displaying timestamps
    client.user.setActivity(streamName, {
      type: 'STREAMING',
      url: 'https://twitch.tv/discord',
      status: 'dnd',
    });

    message.channel.send(`Now streaming **${streamName}**!`);
  }
}); 

client.login(process.env.token);

client.on("error", (err) => {
  console.error(err); // or your preferred logger
});

client.connect(); // Get the bot to connect to Discord
