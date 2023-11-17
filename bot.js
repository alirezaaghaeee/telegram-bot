require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const {addMenuAndSend} = require("./helper/messageHandler");
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'))
// Replace 'YOUR_BOT_TOKEN' with the token you received from BotFather.
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'))
})
const bot = new TelegramBot(process.env.BOT_TOKEN,{polling: true});
// Listen for incoming messages
bot.on('channel_post', (msg) => {
    if (msg.text) {
        // Handle the text of the channel post using the imported function
        // handleTextMessage(bot, msg);

        // Add a menu and send it back to the channel
        addMenuAndSend(bot, msg.chat.id, msg.message_id, msg.text);
    }
});
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});
app.listen(7493,()=>{
    console.log('listening on port 7493');
})

bot.on('message', (msg) => {
    console.log('received message...')
    const chatId = msg.chat.id;
    const messageText = msg.text;

    // Reply to the received message
    bot.sendMessage(chatId, `You said: ${messageText}`);
});
