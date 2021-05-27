//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../../configs/basic/basic.json').prefix)

//command-specific variables or whatever



//your code

module.exports = {
    name: `vote`,
    description: `vote lol`,
    execute(message, args){
            if(message.author.bot) return;
            let votetxt = message.content.split(" ").slice(1).join(" ");
            message.delete();
          
            if(!votetxt) return message.channel.send("what did you say?")
            
            let embed = new Discord.MessageEmbed()
            .setTitle(message.author.username + ` starts a vote`)
            .addField(votetxt, "⠀")
            .setColor("RANDOM")
            .setFooter("👍no 👎yes")
            .setTimestamp();
            
            message.channel.send(embed).then(msg=>{
              msg.react('👍');
              msg.react('👎');
        });
    }
}