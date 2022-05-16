const TelegramBot = require('node-telegram-bot-api');
const token = '5149280529:AAHF0cSR5IxM6GDIs5RhERI5uUwFMewQqa8';
const bot = new TelegramBot(token, {polling:true});
const request = require('request');

bot.on('polling_error', function(error){
    console.log(error);
});

bot.on('message', function(msg){
    let chatId = msg.chat.id;
    let sld = ["como andas","cómo andas", "como va", "cómo va", "como estas", "cómo estas"]
    let nameUser = msg.from.first_name;
    let msj = msg.text.toString().toLowerCase();
 

    if ((msj.includes(sld[0])) ||
        (msj.includes(sld[1])) || 
        (msj.includes(sld[2])) || 
        (msj.includes(sld[3])) || 
        (msj.includes(sld[4])) || 
        (msj.includes(sld[5]))) {

    
        bot.sendMessage(chatId, "Acá, en la lucha, " + nameUser + ".");
        }
    });
    