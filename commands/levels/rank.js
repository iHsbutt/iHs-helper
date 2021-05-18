//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../../configs/basic/basic.json').prefix)

//command-specific variables or whatever

const rankEmbedTitle = (require('../../configs/commands/level/rank.json').rankEmbedTitle)
const rankEmbedColor = (require('../../configs/commands/level/rank.json').rankEmbedColor)
const rankEmbedDescription = (require('../../configs/commands/level/rank.json').rankEmbedDescription)
const rankEmbedField1 = (require('../../configs/commands/level/rank.json').rankEmbedField1)
const rankEmbedField2 = (require('../../configs/commands/level/rank.json').rankEmbedField2)

//your code

module.exports = {
    name: `rank`,
    description: `check your level`,
    execute(message, args){
        //CURRENTLY WIP
    }
}