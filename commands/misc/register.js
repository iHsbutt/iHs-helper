//discord.js stuff

const Discord = require('discord.js');
const bot = new Discord.Client();

//command specific

const registeredRoleName = (require('../../configs/commands/misc/register.json').roleName)
const privateChannelName = (require('../../configs/commands/misc/register.json').privateChannelName)
const registeredMessage = (require('../../configs/commands/misc/register.json').registeredMessage)
const embedColor = (require('../../configs/commands/misc/register.json').embedColor)

//command itself

module.exports = {
    name: `register`,
    description: `register yourself in a server`,
    execute(message, args){
        console.log(`someone wants to register`)

        //find da role

        let role = message.guild.roles.cache.find(r => r.name === registeredRoleName);

        //give da role
        
        message.member.roles.add(role)      

        //set da author id

        const RegisteredUserID = message.author.id

        //create da channel

        message.guild.channels.create(`${privateChannelName} - ${RegisteredUserID}` , { 
            type: 'text',
            permissionOverwrites: [

              {
                id: message.author.id,
                allow: ['CREATE_INSTANT_INVITE', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'USE_EXTERNAL_EMOJIS'],
              },
              {
                id: message.guild.roles.everyone,
                deny:  ['VIEW_CHANNEL'],
              }
            ],
          })

        //construct da embed

        const RegisteredEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setDescription(registeredMessage)
        .setTimestamp()
        
        //send da embed

        message.channel.send(RegisteredEmbed)
    }
}