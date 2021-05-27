//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../../configs/basic/basic.json').prefix)

//command-specific variables or whatever

const daysEmbed = (require('../../configs/commands/misc/uptime.json').daysEmbed)
const hoursEmbed = (require('../../configs/commands/misc/uptime.json').hoursEmbed)
const minutesEmbed = (require('../../configs/commands/misc/uptime.json').minutessEmbed)
const secondsEmbed = (require('../../configs/commands/misc/uptime.json').secondsEmbed)
const embedColor = (require('../../configs/commands/misc/uptime.json').embedColor)
const embedTitle = (require('../../configs/commands/misc/uptime.json').embedTitle)

//your code

module.exports = {
    name: `uptime`,
    description: `uptime.`,
    async execute(bot, message, args){
        if(message.author.bot) return;
        let days = Math.floor(bot.uptime / 86400000);
        let hours = Math.floor(bot.uptime / 3600000) % 24;
        let minutes = Math.floor(bot.uptime / 60000) % 60;
        let seconds = Math.floor(bot.uptime / 1000) % 60;
      
        let uptime = new Discord.MessageEmbed()
          .setColor(embedColor)
          .setDescription(embedTitle)
          .addField(daysEmbed, `${days}`)
          .addField(hoursEmbed , `${hours}`) 
          .addField(minutesEmbed, `${minutes}`) 
          .addField(secondsEmbed, `${seconds}`)
        message.channel.send(uptime);
    }
}