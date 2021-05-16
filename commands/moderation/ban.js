//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../../configs/basic/basic.json').prefix)

//command-specific variables or whatever

const invalidUser = (require('../../configs/commands/moderation/ban.json').invalidUser)
const invalidPermissions = (require('../../configs/commands/moderation/ban.json').invalidPermissions)
const noBanReason = (require('../../configs/commands/moderation/ban.json').noBanReason)

//your code

module.exports = {
    name: `ban`,
    description: `ban a user`,
    execute(message, args){

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(invalidPermissions)

        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

        if (!User) return message.channel.send(invalidUser)
        if (User.hasPermission("BAN_MEMBERS")) return message.reply(invalidPermissions)

        let banReason = args.join(" ").slice(22);

        if (!banReason) {
            banReason = noBanReason
        }

        User.ban({reason: banReason})
    }
}