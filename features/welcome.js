//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../configs/basic/basic.json').prefix)

//feature-specific variables or whatever

const mentionMember = (require('../configs/features/welcome.json').mentionUser)
const mentionRulesChannel = (require('../configs/features/welcome.json').mentionRulesChannel)
const message1 = (require('../configs/features/welcome.json').welcomeMessage1)
const message2 = (require('../configs/features/welcome.json').welcomeMessage2)

//your code

module.exports = {
    name: `welcome`,
    description: `welcome a member`,
    execute(message, args){

        const channelId = '838658420788822039' // welcome channel
        const targetChannelId = '840244302742552606' // rules and info
      
        client.on('guildMemberAdd', (member) => {
          const message = `<@${
            member.id
          }> joined please read ${member.guild.channels.cache
            .get(targetChannelId)
            .toString()}`
      
          const channel = member.guild.channels.cache.get(channelId)
          channel.send(message)
        })
    }
}