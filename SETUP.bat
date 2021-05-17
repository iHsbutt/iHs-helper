@echo off
cls
:start

set prefix= -
set readyMessage= ready

echo please input your bot's token (check how to get token.txt in guides to learn more about how to get it)
set /p token= 
echo please input your bot's prefix
set /p prefix=
echo please input your bot's message that shows up in terminal when bot successfully starts up
set /p readyMessage=
echo please type true or false (it has to be in exact capitalisation to work) if your bot is going to play any game
:doPlayGame
set /p playGame=

if "%playgame%" == "true" goto :playgame
if "%playgame%" == "false" goto :setup2

goto :doPlayGame

:playgame

set game= my prefix is %prefix%
set activity= LISTENING

echo please input the game that your bot will be playing 
set /p game=
echo please inpute the type of activity that your bot will be doing (you can choose from WATCHING PLAYING LISTENING)
set /p activity=
echo is this ok?
echo {{"activity": "%game%","type": "%activity%"}}

echo type Y or N (has to be capitalised)
set /p proceed=

if "%proceed%" == "Y" goto :setup2
if "%proceed%" == "N" goto :start

goto :playgame

:setup2

set private= private -

echo please input the name of private channels created when someone verifyes
set /p private=

echo this is your configuration:

echo token: %token%
echo prefix: %prefix%
echo message when the bot is ready: %readyMessage%
echo is your bot gonna play a game: %playGame%
echo your bot's activity type (doesn't matter when the above config is false): %activity%
echo your bot's game: %game%
echo private channels name: %private%(id of user that registered)

:isok

echo you can change that at any time
echo is that ok Y or N (has to be capitalised)
set /p ok= 

if "%ok%" == "Y" goto :save
if "%ok%" == "N" goto :start

goto :isok

:save
echo {"token": "%token%","prefix": "%prefix%","consoleReady": "%readyMessage%"} > .\configs\basic\basic.json
echo {"privateChannelName": "%private%","roleName": "Verified","registeredMessage": "Verified successfully","embedColor": "#0099ff","consoleLog": "someone pinged your bot"}
echo {"activity": "my prefix is -","type": "PLAYING","activityOn": "%playGame%"}

echo your bot is now set up. do you want to start it?
echo Y or N (has to be capitalised)
:startdabot
set /p start=

if "%start%" == "Y" goto :startit
if "%start%" == "N" goto :end

goto :startdabot

:startit
npm install discord.js
node .

:end
break