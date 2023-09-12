// Import the Telegraf library
const { Composer } = require('telegraf');

// Create a new Composer instance for the /start command
const startCommand = new Composer();

// Define the /start command handler
startCommand.command('start', (ctx) => {
    ctx.reply('Hello! I am your Telegram bot.');
});

// Export the startCommand for use in other files
module.exports = { startCommand };
