const { REST, Routes } =  require('discord.js');

const commands = [
    {
      name: 'create',
      description: 'creates a new short url',
    },
  ];

  const rest = new REST({ version: '10' }).setToken("MTIyNDQyODY0MDA0NTg5NTc4MQ.GHizAl.P5KAGJNFK9ldEWG8kJ8B817whb0ZWCmHIXamOg");

  try {
    console.log('Started refreshing application (/) commands.');
  
     rest.put(Routes.applicationCommands("1224428640045895781"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }