const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SUPUN-MD=SA0XFbAC#mJSZSBzfnxxxwZ5GYyerqjug4eCE4PW5DLvdN9FkAjk', //add your session id
MONGODB: process.env.MONGODB || "mongodb://mongo:dHulUqJfRHKpFiGOfKqBNobiOpwaZzct@crossover.proxy.rlwy.net:16412", //add your mongodb url
 URL : process.env.BOT_MENU_LINKS || 'https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg',
MAX_SIZE: 500
};

