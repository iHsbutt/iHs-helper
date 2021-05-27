//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../../configs/basic/basic.json').prefix)

//command-specific variables or whatever

const tooLowMessages = (require('../../configs/commands/moderation/purge.json').tooLowMessages)
const invalidMessages = (require('../../configs/commands/moderation/purge.json').invalidMessages)

//your code

module.exports = {
    name: `purge`,
    description: `deletes messages`,
    async execute(message, args){
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Don't Have Sufficient Permissions!- [MANAGE_MESSAGES]")
        if (isNaN(args[0]))
            return message.channel.send(invalidMessages);

        if (args[0] < 1)
            return message.channel.send(tooLowMessages);

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Succesfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({ timeout: 5000 }))).catch(() => null)
    }
}