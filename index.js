const { Client } = require('discord.js-selfbot-v13');
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const client = new Discord.Client();
client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('1193597975042216067')
        .setType('STREAMING')
        .setURL(`https://twitch.tv/discord`)
        .setDetails(`.gg/chillzone`)
        .setName(`𝓛𝓪`)
        .setState(`.gg/chillzone`)
        .setParty({
            max: 10000,
            current: 6000,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`mp:attachments/1020344221460332556/1193761221783072838/Snapinsta.app_379197787_838705527971837_1873893431697852041_n_1024.jpg`)
        .setAssetsLargeText(`Members`)
        .setAssetsSmallImage(`mp:attachments/1193761529716289646/1193762156626321499/5486-partner-black.png`)
        .setAssetsSmallText(`.gg/chillzone`)
        .addButton(`Chill Zone`, `https://discord.gg/chillzone`)
        .addButton(`Socialized`, `https://discord.gg/socialized`);
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

client.login(process.env.token);

client.on("error", (err) => {
  console.error(err); // or your preferred logger
});

client.connect(); // Get the bot to connect to Discord
