var mineflayer = require('mineflayer')

var bot = mineflayer.createBot({
  host: "natan1199.aternos.me",   
  username: "PireCraftyBot",
  version: "1.16.0"
})

bot.on('login', async () => {
    console.log(' bot is on ')
})
