//bot-wide variables or whatever

const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = (require('../../configs/basic/basic.json').prefix)

//command-specific variables or whatever

const embedColor = (require('../../configs/server-stuff/rules.json').embedColor)
const embedTitle = (require('../../configs/server-stuff/rules.json').embedTitle)
const rule1 = (require('../../configs/server-stuff/rules.json').rule1)
const rule2 = (require('../../configs/server-stuff/rules.json').rule2)
const rule3 = (require('../../configs/server-stuff/rules.json').rule3)
const rule4 = (require('../../configs/server-stuff/rules.json').rule4)
const rule5 = (require('../../configs/server-stuff/rules.json').rule5)
const rule6 = (require('../../configs/server-stuff/rules.json').rule6)
const rule7 = (require('../../configs/server-stuff/rules.json').rule7)
const rule8 = (require('../../configs/server-stuff/rules.json').rule8)
const rule9 = (require('../../configs/server-stuff/rules.json').rule9)
const rule10 = (require('../../configs/server-stuff/rules.json').rule10)
const rule11 = (require('../../configs/server-stuff/rules.json').rule11)
const rule12 = (require('../../configs/server-stuff/rules.json').rule12)

//your code

module.exports = {
    name: `rules`,
    description: `rules`,
    execute(message, args){
        const rulesEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setTitle(embedTitle)
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'rule 1', value: rule1, inline: false },
            { name: 'rule 2', value: rule2, inline: false },
            { name: 'rule 3', value: rule3, inline: false },
            { name: 'rule 4', value: rule4, inline: false },
            { name: 'rule 5', value: rule5, inline: false },
            { name: 'rule 6', value: rule6, inline: false },
            { name: 'rule 7', value: rule7, inline: false },
            { name: 'rule 8', value: rule8, inline: false },
            { name: 'rule 9', value: rule9, inline: false },
            { name: 'rule 10', value: rule10, inline: false },
            { name: 'rule 11', value: rule11, inline: false },
            { name: 'rule 12', value: rule12, inline: false },
        )

        message.channel.send(rulesEmbed)
    }
}