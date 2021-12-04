const {Client, Intents, ClientUser} = require('discord.js');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.once('ready', () => {
    console.log("BananaBot iniciado");
});

const config = require('./config/config2.json');
client.login(config.token);