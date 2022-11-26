import Discord from 'discord.js';
import config from '../config/discord-bot/config';

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });


client.on("messageCreate", function (message: any) {
    if (message.author.bot) return;
});

client.login(config.BOT_TOKEN);