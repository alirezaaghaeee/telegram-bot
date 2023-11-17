
function addMenuAndSend(bot, channel, messageId, text) {
    const menu = {
        inline_keyboard: [
            [
                { text: 'اطلاعات آماری',url:'www.google.com' },
                { text: 'Option 2', callback_data: 'option2' },
            ],
        ],
    };

    // Edit the message to add the menu
    bot.editMessageText(text, {
        chat_id: channel,
        message_id: messageId,
        reply_markup: menu,
    });
}

module.exports = {
    addMenuAndSend,
};
