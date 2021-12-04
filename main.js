const {Client, Intents, ClientUser} = require('discord.js');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.once('ready', () => {
    console.log("BananaBot iniciado");
});

client.login('OTE0MjEyMDk3ODk2ODk4NjEw.YaJwXQ.meuReOyDpVD-SSNXw36PNoDKrq8');