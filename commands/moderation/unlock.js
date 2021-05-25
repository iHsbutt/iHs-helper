//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../../configs/basic/basic.json').prefix)

//command-specific variables or whatever

const embedTitle = (require('../../configs/commands/moderation/unlock.json').embedTitle)
const embedColor = (require('../../configs/commands/moderation/unlock.json').embedColor)
const embedDescription = (require('../../configs/commands/moderation/unlock.json').embedDescription)

//your code

module.exports = {
    name: `unlock`,
    description: `unlocks the channel`,
    execute(message, args){

        if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
            return keineRechteEmbed(message);
            }
            message.channel.overwritePermissions([
            {
                id: message.guild.roles.everyone,
                allow: ['SEND_MESSAGES'],
            },
             ],);
            const unlockedChannelEmbed = new Discord.MessageEmbed()
            .setTitle(embedTitle)
            .setDescription(embedDescription)
            .setColor(embedColor)
            message.channel.send(unlockedChannelEmbed);
            message.delete();
    }
}