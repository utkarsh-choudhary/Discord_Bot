const {Client,GatewayIntentBits} =require("discord.js");



const client=new Client({
    intents:[GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});


client.on("messageCreate",(message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith("create")){
        const url=message.content.split("create")[1];
        return message.reply({
            content:"Generating Short Id for" + url,
        })
    }
    message.reply({
        content:"Hi From Uchiha Bot",
    })
});

client.on("interactionCreate",interaction=>{
    console.log(interaction);
    interaction.reply("Pong !!")
})


client.login("MTIyNDQyODY0MDA0NTg5NTc4MQ.GHizAl.P5KAGJNFK9ldEWG8kJ8B817whb0ZWCmHIXamOg");