//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../../configs/basic/basic.json').prefix)

//command-specific variables or whatever

const mentionedEveryone = (require('../../configs/commands/misc/botsay.json').mentionedEveryone)

//your code

module.exports = {
    name: `botsay`,
    description: `make bot say anything you want`,
    execute(message, args){
        message.delete()
        if (!message.member.hasPermission("MENTION_EVERYONE")){
            if(args.includes `@everyone`){
                message.channel.send(mentionedEveryone)
            }
            else{
                if(args.includes `@here`){
                    message.channel.send(mentionedEveryone)
                }
                else{
                    let sendMessage = message.content.substring(prefix.length +args[0].length+ args[1].length); 
                    message.channel.send(sendMessage)
                }
            }
        }
        else{
            message.channel.send(args)
        }
    }
}
