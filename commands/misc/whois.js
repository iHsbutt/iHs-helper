//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../../configs/basic/basic.json').prefix)

//command-specific variables or whatever

const embedTitle = (require('../../configs/commands/misc/whois.json').embedTitle)
const embedColor = (require('../../configs/commands/misc/whois.json').embedColor)
const embedDescription = (require('../../configs/commands/misc/whois.json').embedDescription)
const consoleLog = (require('../../configs/commands/misc/whois.json').consoleLog)

//command itself

module.exports = {
    name: `whois`,
    description: `who is your bot`,
    execute(message, args){
        console.log(consoleLog)
        const whoIs = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setTitle(embedTitle)
        .setDescription(embedDescription)
        message.channel.send(whoIs)
    }
}