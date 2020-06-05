const TelegramBot = require('node-telegram-bot-api');


const token = '#sometelegramtoken:--';


const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/dl (.+)/, (msg, match) => {
  request(`http://example.com`, function (error, response, body) {
    //do something
});

  // bot.sendMessage(chatId, 'response');
});
