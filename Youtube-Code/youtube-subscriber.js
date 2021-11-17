const { MessageEmbed } = require('discord.js');
const getYoutubeSubscriber = require('getyoutubesubscriber');

module.exports = {
  name: 'kaan',
  description: 'Kaan\'ın youtube abone sayısına bakarsın.', 
  options: [],
  async execute(client, interaction) {
    getYoutubeSubscriber('Youtube Kanal ID').then((data) => {
      interaction.reply({
        embeds: [
          new MessageEmbed().setColor("#5555dd").setDescription(`<:youtube:878262262136180766> Kaan Şuanki Abone Sayın: **${data}**`).setFooter("Kaan Anlık Abone Sayısı!").setTimestamp()
        ]
      });
   })
  }
}
