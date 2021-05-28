# iH's helper
## extremely customisable bot for discord.
if you want to use it, CREDIT ME, because i spent a lot of time setting this up.

DEPENDENCIES:
node.js (node.js is also a dependency of discord.js)
discord.js (not preinstalled, type npm install discord.js before using the bot)
There are batch and shell scripts to install dependencies.

#Important dependency script info for macOS users.
Instead of running a script like on linux: ./script.sh you have to run it like this: bash script.sh.

HOW TO CUSTOMISE THE BOT
there are many .json files in bot/configs. 

HOW TO SEARCH FOR THAT EXACT CONFIG THAT YOU WANT TO CHANGE
in bot/configs there are 2 folders: basic and commands.

if you want to edit a command-specific function like contents of an embed or role that your bot will search for, you should search in configs/commands

if you want to edit a bot-specific function like bot's token or prefix, search in configs/basic

HOW TO HOST YOUR BOT
open terminal, type cd *path of your bot's folder* and then node .

HOW TO ADD MY OWN COMMAND
this bot was made to make it easy. make a new file in bot/commands/*category of your command*/
there is a preset file in bot/commands to make it easier.

HOW TO MAKE MY NEW COMMAND USABLE
at the end of main.js file, in ```bot.on(`message`){}``` put 
```if(command === `your command`){ bot.commands.get(`your command's name`).execute(message, args)}``` and your command is ready for use

