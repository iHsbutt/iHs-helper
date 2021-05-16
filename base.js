//constructors or whatever
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('./configs/basic/basic.json').prefix)
const token = (require('./configs/basic/basic.json').token)
const readyMessage = (require('./configs/basic/basic.json').consoleReady)

const presenceName = (require('./configs/basic/presence.json').activity)
const presenceType = (require('./configs/basic/presence.json').type)

const fs = require('fs');
const { Z_ASCII } = require('zlib');
bot.commands = new Discord.Collection();

//when ready

bot.on(`ready`, () =>{
    console.log(`${readyMessage}`)
    bot.user.setActivity(`${presenceName}`, ({type: `${presenceType}`}))
})

//preset 4 adding more commands types

//const *command type*Commands = fs.readdirSync('./commands/levels').filter(file => file.endsWith(`.js`));
//for(const file of *command type*Commands){
//    const command = require(`./commands/${file}`);
//
//    bot.commands.set(command.name, command)
//}

//look4commands

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

//commands n stuff

bot.on(`message`, message =>{

    //command handler

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(command === `test`){
        message.channel.send(`i'm working ok?`)
    }

    if(command === `whoisbot`){
        bot.commands.get(`whois`).execute(message, args)
    }

    if(command === `help`){
        bot.commands.get(`help`).execute(message, args)
    }

    if(command === `verify`){
        bot.commands.get(`register`).execute(message, args)
    }

    if(command === `ban`){
        bot.commands.get(`ban`).execute(message, args)
    }

})

bot.login(token);