//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../../configs/basic/basic.json').prefix)
const rm = require('discord.js-reaction-menu')

//command-specific variables or whatever

rm.reactions.back = '👈'
rm.reactions.next = '👉'
rm.reactions.first = ''
rm.reactions.stop = ''
rm.reactions.last = ''

//your code

module.exports = {
    name: `test`,
    description: `test`,
    execute(message, args){
    new rm.menu({
	
            channel: message.channel,
            userID: message.author.id,
            pages: [
                new Discord.MessageEmbed()
        		.setColor('ORANGE')
		        .setDescription(`> **Page 1 ► This page.**
                > **Page 2 ► Moderation page.**
                > **Page 3 ► Image generation page.**
                > **Page 4 ► Fun page.**`)
                .setThumbnail(message.author.displayAvatarURL()),
                new Discord.MessageEmbed()
		        .setColor('ORANGE')
		        .setDescription(`
                > **=ban ► Bans member from server.**
                > **=kick ► Kicks member from server.**
                > **=mute ► Mutes the member.**`)
            ]
	
        })
    }
}