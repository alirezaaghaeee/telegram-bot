// Import the Telegraf library
const { Composer } = require('telegraf');

// Create a new Composer instance for the /help command
const helpCommand = new Composer();

// Define the /help command handler
helpCommand.command('help', (ctx) => {
    ctx.reply('This is the help message for your bot.');
});

// Export the helpCommand for use in other files
module.exports = { helpCommand };
