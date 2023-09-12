const {Telegraf} = require('telegraf');
require('dotenv').config();


const bot = new Telegraf(process.env.BOT_TOKEN);
// Import command handlers
const { startCommand } = require('./commands/start');
const { helpCommand } = require('./commands/help');
//
// // Register command handlers with the bot
bot.use(startCommand.middleware());
bot.use(helpCommand.middleware());
// Handle incoming updates
// Start the bot

//
bot.launch().then(() => {
    console.log('Bot is running');
});
