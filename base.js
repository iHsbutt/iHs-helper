//constructors or whatever
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('./configs/basic/basic.json').prefix)
const token = (require('./configs/basic/basic.json').token)
const readyMessage = (require('./configs/basic/basic.json').consoleReady)
const disabledFeature = (require('./configs/basic/disabledfeature.json').disabledText)

const presenceName = (require('./configs/basic/presence.json').activity)
const presenceType = (require('./configs/basic/presence.json').type)
const presenceOn = (require('./configs/basic/presence.json').activityOn)

const fs = require('fs');
const { relative } = require('path');
const { Z_ASCII } = require('zlib');
bot.commands = new Discord.Collection();
bot.features = new Discord.Collection();

//when ready

bot.on(`ready`, () =>{
    console.log(`${readyMessage}`)
    if(presenceOn === `true`){
        bot.user.setActivity(`${presenceName}`, ({type: `${presenceType}`}))
    }
    else{
        return
    }
})

//preset 4 adding more commands types

//const *command type*Commands = fs.readdirSync('./commands/levels').filter(file => file.endsWith(`.js`));
//for(const file of *command type*Commands){
//    const command = require(`./commands/${file}`);
//
//    bot.commands.set(command.name, command)
//}

//look4commands

const serverStuff = fs.readdirSync('./commands/server-stuff').filter(file => file.endsWith(`.js`));
for(const file of serverStuff){
    const command = require(`./commands/server-stuff/${file}`);

    bot.commands.set(command.name, command)
}
 
const features = fs.readdirSync('./features').filter(file => file.endsWith(`.js`));
for(const file of features){
    const feature = require(`./features/${file}`);

    bot.features.set(feature.name, feature)
}

const levelCommands = fs.readdirSync('./commands/levels').filter(file => file.endsWith(`.js`));
for(const file of levelCommands){
    const command = require(`./commands/levels/${file}`);

    bot.commands.set(command.name, command)
}

const modCommands = fs.readdirSync('./commands/moderation').filter(file => file.endsWith(`.js`));
for(const file of modCommands){
    const command = require(`./commands/moderation/${file}`);

    bot.commands.set(command.name, command)
}

const miscCommands = fs.readdirSync('./commands/misc').filter(file => file.endsWith(`.js`));
for(const file of miscCommands){
    const command = require(`./commands/misc/${file}`);

    bot.commands.set(command.name, command)
}

//wellcome message

bot.on(`guildMemberAdd`, member =>{

        const embedColor = (require('./configs/commands/welcome.json').embedColor)
        const embedTitle = (require('./configs/commands/welcome.json').embedTitle)
        const embedDescription = (require('./configs/commands/welcome.json').embedDescription)
        const mentionUser = (require('./configs/commands/welcome.json').mentionUser)
        const channel = member.guild.channels.cache.get('842647871089934337');

    if(mentionUser === `true`){
        const welcome = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setTitle(embedTitle)
        .setDescription(`${member}${embedDescription}`)
        channel.send(welcome)
        return
    }
    else{
        const welcome = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setTitle(embedTitle)
        .setDescription(embedDescription)
        channel.send(welcome)
        return
    }
})

//enable or disable commands

//commands n stuff

bot.on(`message`, message =>{

    //command handler

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();
    
    if(command === `test`){
        const testOn = (require('./configs/basic/enabledcommands.json').test)
        if(testOn === `true`){
            bot.commands.get(`test`).execute(message, args)
        }
        else{
            if(testOn === `tempoff`){
                const disabledReason = (require('./configs/basic/enabledcommands.json').disabledReason1)
                message.channel.send(`${disabledFeature}${disabledReason}`)
            }
            else{
                return
            }
        }
    }

    if(command === `whoisbot`){
            const whoIsBotOn = (require('./configs/basic/enabledcommands.json').whoisbot)
            if(whoIsBotOn === `true`){
                bot.commands.get(`whois`).execute(message, args)
            }
            else{
                if(whoIsBotOn === `tempoff`){
                    const disabledReason = (require('./configs/basic/enabledcommands.json').disabledReason2)
                    message.channel.send(`${disabledFeature}${disabledReason}`)
                }
                else{
                    return
                }
            }
    }

    if(command === `help`){
        const helpOn = (require('./configs/basic/enabledcommands.json').help)
            if(helpOn === `true`){
                bot.commands.get(`help`).execute(message, args)
            }
            else{
                if(helpOn === `tempoff`){
                    const disabledReason = (require('./configs/basic/enabledcommands.json').disabledReason3)
                    message.channel.send(`${disabledFeature}${disabledReason}`)
                }
                else{
                    return
                }
            }
    }

    if(command === `register`){
        const registerOn = (require('./configs/basic/enabledcommands.json').register)
            if(registerOn === `true`){
                bot.commands.get(`register`).execute(message, args)
            }
            else{
                if(registerOn === `tempoff`){
                    const disabledReason = (require('./configs/basic/enabledcommands.json').disabledReason4)
                    message.channel.send(`${disabledFeature}${disabledReason}`)
                }
                else{
                    return
                }
            }
    }

    if(command === `ban`){
        const banOn = (require('./configs/basic/enabledcommands.json').ban)
            if(banOn === `true`){
                bot.commands.get(`ban`).execute(message, args)
            }
            else{
                if(banOn === `tempoff`){
                    const disabledReason = (require('./configs/basic/enabledcommands.json').disabledReason5)
                    message.channel.send(`${disabledFeature}${disabledReason}`)
                }
                else{
                    return
                }
            }
    }
    
    if(command === `kick`){
        const kickOn = (require('./configs/basic/enabledcommands.json').kick)
            if(kickOn === `true`){
                bot.commands.get(`kick`).execute(message, args)
            }
            else{
                if(kickOn === `tempoff`){
                    const disabledReason = (require('./configs/basic/enabledcommands.json').disabledReason6)
                    message.channel.send(`${disabledFeature}${disabledReason}`)
                }
                else{
                    return
                }
            }
    }

    if(command === `rules`){
        const rulesOn = (require('./configs/basic/enabledcommands.json').rules)
            if(rulesOn === `true`){
                bot.commands.get(`rules`).execute(message, args)
            }
            else{
                if(rulesOn === `tempoff`){
                    const disabledReason = (require('./configs/basic/enabledcommands.json').disabledReason7)
                    message.channel.send(`${disabledFeature}${disabledReason}`)
                }
                else{
                    return
                }
            }
    }

    if(command === `rank`){
        const rankOn = (require('./configs/basic/enabledcommands.json').whoisbot)
            if(rankOn === `true`){
                bot.commands.get(`rank`).execute(message, args)
            }
            else{
                if(rankOn === `tempoff`){
                    const disabledReason = (require('./configs/basic/enabledcommands.json').disabledReason8)
                    message.channel.send(`${disabledFeature}${disabledReason}`)
                }
                else{
                    return
                }
            }
    }

    if(command === `lock`){
        const lockOn = (require('./configs/basic/enabledcommands.json').lock)
            if(lockOn === `true`){
                bot.commands.get(`lock`).execute(message, args)
            }
            else{
                if(lockOn === `tempoff`){
                    const disabledReason = (require('./configs/basic/enabledcommands.json').disabledReason9)
                    message.channel.send(`${disabledFeature}${disabledReason}`)
                }
                else{
                    return
                }
            }
    }

    if(command === `unlock`){
        const unlockOn = (require('./configs/basic/enabledcommands.json').unlock)
            if(unlockOn === `true`){
                bot.commands.get(`unlock`).execute(message, args)
            }
            else{
                if(unlockOn === `tempoff`){
                    const disabledReason = (require('./configs/basic/enabledcommands.json').disabledReason10)
                    message.channel.send(`${disabledFeature}${disabledReason}`)
                }
                else{
                    return
                }
            }
    }

    if(command === `purge`){
        const purgeOn = (require('./configs/basic/enabledcommands.json').purge)
            if(purgeOn === `true`){
                bot.commands.get(`purge`).execute(message, args)
            }
            else{
                if(purgeOn === `tempoff`){
                    const disabledReason = (require('./configs/basic/enabledcommands.json').disabledReason11)
                    message.channel.send(`${disabledFeature}${disabledReason}`)
                }
                else{
                    return
                }
            }
    }


})

bot.login(token);