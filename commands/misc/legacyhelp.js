//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../../configs/basic/basic.json').prefix)

//command-specific variables or whatever

//embed and console log

const embedTitle = (require('../../configs/commands/misc/help/misc.json').embedTitle)
const embedColor = (require('../../configs/commands/misc/help/misc.json').embedColor)
const consoleLog = (require('../../configs/commands/misc/help/misc.json').consoleLog)

//commands

const command1 = (require('../../configs/commands/misc/help/commands.json').command1)
const command1Value = (require('../../configs/commands/misc/help/commands.json').command1Value)
const command2 = (require('../../configs/commands/misc/help/commands.json').command2)
const command2Value = (require('../../configs/commands/misc/help/commands.json').command2Value)
const command3 = (require('../../configs/commands/misc/help/commands.json').command3)
const command3Value = (require('../../configs/commands/misc/help/commands.json').command3Value)
const command4 = (require('../../configs/commands/misc/help/commands.json').command4)
const command4Value = (require('../../configs/commands/misc/help/commands.json').command4Value)
const command5 = (require('../../configs/commands/misc/help/commands.json').command5)
const command5Value = (require('../../configs/commands/misc/help/commands.json').command5Value)
const command6 = (require('../../configs/commands/misc/help/commands.json').command6)
const command6Value = (require('../../configs/commands/misc/help/commands.json').command6Value)
const command7 = (require('../../configs/commands/misc/help/commands.json').command7)
const command7Value = (require('../../configs/commands/misc/help/commands.json').command7Value)
const command8 = (require('../../configs/commands/misc/help/commands.json').command8)
const command8Value = (require('../../configs/commands/misc/help/commands.json').command8Value)
const command9 = (require('../../configs/commands/misc/help/commands.json').command9)
const command9Value = (require('../../configs/commands/misc/help/commands.json').command9Value)

//your code

module.exports = {
    name: `lhelp`,
    description: `old help for the bot`,
    execute(message, args){
        console.log(consoleLog)
            const helpEmbed = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setTitle(embedTitle)
            .addFields(
                { name: `${prefix}${command1}`, value: command1Value },
                { name: `${prefix}${command2}`, value: command2Value },
                { name: `${prefix}${command3}`, value: command3Value },
                { name: `${prefix}${command4}`, value: command4Value },
                { name: `${prefix}${command5}`, value: command5Value },
                { name: `${prefix}${command6}`, value: command6Value },
                { name: `${prefix}${command7}`, value: command7Value },
                { name: `${prefix}${command8}`, value: command8Value },
                { name: `${prefix}${command9}`, value: command9Value }
            )
        message.channel.send(helpEmbed)
    }
}