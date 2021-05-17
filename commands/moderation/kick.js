//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../../configs/basic/basic.json').prefix)

//command-specific variables or whatever

const invalidUser = (require('../../configs/commands/moderation/kick.json').invalidUser)
const invalidPermissions = (require('../../configs/commands/moderation/kick.json').invalidPermissions)
const noKickReason = (require('../../configs/commands/moderation/kick.json').noKickReason)
const kickMessage = (require('../../configs/commands/moderation/kick.json').kickMessage)
const mentionBannedUser = (require('../../configs/commands/moderation/kick.json').mentionKickedUser)

//your code

module.exports = {
    name: `kick`,
    description: `kick a user`,
    execute(message, args){

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(invalidPermissions)

        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

        if (!User) return message.channel.send(invalidUser)
        if (User.hasPermission("KICK_MEMBERS")) return message.reply(invalidPermissions)

        let banReason = args.join(" ").slice(22);

        if (!banReason) {
            banReason = noKickReason
        }

        if(mentionBannedUser === `true`){
            message.channel.send(`${User}${kickMessage}`)
        }
        else{
            message.channel.send(`${kickMessage}`)
        }

        User.kick({reason: banReason})
    }
}