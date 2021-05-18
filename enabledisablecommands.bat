@echo off
cls

:start

echo do you want to disable test [true / false / tempoff] (has to be in exact capitalisation.)
set /p test=

echo what is the reason that test command is disabled? (if you typed true or false in the previous question, it won't matter, you can press enter)
set /p disabledReason1=

echo do you want to disable whoisbot [true / false / tempoff] (has to be in exact capitalisation.)
set /p whoisbot=

echo what is the reason that whoisbot command is disabled? (if you typed true or false in the previous question, it won't matter, you can press enter)
set /p disabledReason2=

echo do you want to disable help [true / false / tempoff] (has to be in exact capitalisation.)
set /p help=

echo what is the reason that help command is disabled? (if you typed true or false in the previous question, it won't matter, you can press enter)
set /p disabledReason3=

echo do you want to disable register/verify [true / false / tempoff] (has to be in exact capitalisation.)
set /p register=

echo what is the reason that register/verify command is disabled? (if you typed true or false in the previous question, it won't matter, you can press enter)
set /p disabledReason4=

echo do you want to disable ban [true / false / tempoff] (has to be in exact capitalisation.)
set /p ban=

echo what is the reason that ban command is disabled? (if you typed true or false in the previous question, it won't matter, you can press enter)
set /p disabledReason5=

echo do you want to disable kick [true / false / tempoff] (has to be in exact capitalisation.)
set /p kick=

echo what is the reason that test command is disabled? (if you typed true or false in the previous question, it won't matter, you can press enter)
set /p disabledReason6=

echo do you want to disable rules (configure it in bot/configs/server-stuff/rules.json) [true / false / tempoff] (has to be in exact capitalisation.)
set /p rules=

echo what is the reason that test command is disabled? (if you typed true or false in the previous question, it won't matter, you can press enter)
set /p disabledReason7=

echo rank command is currently disabled because it doesn't work. 

echo this is your configuration:

echo {"test": "%test%","disabledReason1": "%disabledReason1%","whoisbot": "%whoisbot%","disabledReason2": "%disabledReason2%","help": "%help%","disabledReason3": "%disabledReason3%",
echo "register": "%register%","disabledReason4": "%disabledReason4%","ban": "%ban%","disabledReason5": "%disabledReason5%","kick": "%kick%","disabledReason6": "%disabledReason6%",
echo "rules": "%rules%","disabledReason7": "%disabledReason7%","rank": "tempoff","disabledReason8": "this feature is currently WIP"}

echo is this ok? 
echo Y or N (has to be capitalised)
:proceed
set /p proceed=

if "%proceed%" == "Y" goto :save
if "%proceed%" == "N" goto :start

goto :proceed

:save
echo {"test": "%test%","disabledReason1": "%disabledReason1%","whoisbot": "%whoisbot%","disabledReason2": "%disabledReason2%","help": "%help%","disabledReason3": "%disabledReason3%","register": "%register%","disabledReason4": "%disabledReason4%","ban": "%ban%","disabledReason5": "%disabledReason5%","kick": "%kick%","disabledReason6": "%disabledReason6%","rules": "%rules%","disabledReason7": "%disabledReason7%","rank": "tempoff","disabledReason8": "this feature is currently WIP"} > .\configs\basic\enabledcommands.json

npm install discord.js

echo your bot is now ready to go.

break