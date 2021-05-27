//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../../configs/basic/basic.json').prefix)
const rm = require('discord.js-reaction-menu')

//command-specific variables or whatever

//embed info and stuff

const embedColor = (require('../../configs/commands/misc/help/misc').embedColor)
const embedThumbnail = (require('../../configs/commands/misc/help/misc.json').embedThumbnail)

//values

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
const command10 = (require('../../configs/commands/misc/help/commands.json').command10)
const command10Value = (require('../../configs/commands/misc/help/commands.json').command10Value)
const command11 = (require('../../configs/commands/misc/help/commands.json').command11)
const command11Value = (require('../../configs/commands/misc/help/commands.json').command11Value)
const command12 = (require('../../configs/commands/misc/help/commands.json').command12)
const command12Value = (require('../../configs/commands/misc/help/commands.json').command12Value)
const command13 = (require('../../configs/commands/misc/help/commands.json').command13)
const command13Value = (require('../../configs/commands/misc/help/commands.json').command13Value)

//reaction menu stuffs

rm.reactions.back = '👈'
rm.reactions.next = '👉'
rm.reactions.first = ''
rm.reactions.stop = ''
rm.reactions.last = ''

//your code

module.exports = {
    name: `help`,
    description: `help menu.`,
    execute(message, args){
    new rm.menu({
            channel: message.channel,
            userID: message.author.id,
            pages: [
                new Discord.MessageEmbed()
        		.setColor(embedColor)
		        .setDescription(`**this is the new help menu for the bot.**
                **press 👈 to go back**
                **press 👉 to go foward**`)
                .setThumbnail(embedThumbnail),
                new Discord.MessageEmbed()
		        .setColor(embedColor)
		        .setDescription(`
                > **${prefix}${command1} ► ${command1Value}**
                > **${prefix}${command2} ► ${command2Value}**
                > **${prefix}${command3} ► ${command3Value}**
                > **${prefix}${command4} ► ${command4Value}**
                > **${prefix}${command5} ► ${command5Value}**`)
                .setThumbnail(embedThumbnail),
                new Discord.MessageEmbed()
		        .setColor(embedColor)
		        .setDescription(`
                > **${prefix}${command6} ► ${command6Value}**
                > **${prefix}${command7} ► ${command7Value}**
                > **${prefix}${command8} ► ${command8Value}**
                > **${prefix}${command9} ► ${command9Value}**
                > **${prefix}${command10} ► ${command10Value}**`)
                .setThumbnail(embedThumbnail),
                new Discord.MessageEmbed()
		        .setColor(embedColor)
		        .setDescription(`
                > **${prefix}${command11} ► ${command11Value}**
                > **${prefix}${command12} ► ${command12Value}**
                > **${prefix}${command13} ► ${command13Value}**`)
                .setThumbnail(embedThumbnail),
            ]
	
        })
    }
}