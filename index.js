const Discord = require('discord.js');
const client = new Discord.Client();
//Grab json data
const { token, prefix, status, color } = require("./config.json");

client.on("ready", () =>{
    console.log("Bot Logged In!");
})

client.on("message", (message) =>{
    
})

client.login(token);