const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.once(Events.ClientReady, c => {
    console.log("Logged in successfully");
});

client.login(token);