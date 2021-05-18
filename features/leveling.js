//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../configs/basic/basic.json').prefix)

//command-specific variables or whatever

const lvlUpEmbedTitle = (require('../configs/features/lvl/lvlupembed.json').lvlUpEmbedTitle)
const lvlUpEmbedDescription = (require('../configs/features/lvl/lvlupembed.json').lvlUpEmbedDescription)
const lvlUpEmbedNxtLvl = (require('../configs/features/lvl/lvlupembed.json').lvlUpEmbedNxtLvl)
const lvlUpEmbedColor = (require('../configs/features/lvl/lvlupembed.json').lvlUpEmbedColor)

//your code

module.exports = {
    name: `leveling`,
    description: `leveling on your server`,
    execute(message, args){

    }
}