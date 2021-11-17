const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Botun pingi atar!', 
  options: [],
  async execute(client, interaction) {
    const embed = new MessageEmbed()
    .setTitle(`${client.user.tag}'s help menu!`)
    .setDescription(`:ping_pong: Toplam komut sayısı: **${client.commands.size}**`)
    .addField('Tüm Komutlar (4)', '`avatar`, `buton`, `ping`, `suggest`, `melih`, `kaan`')
    .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
    .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
    .setColor('BLURPLE');
    return interaction.reply({embeds: [embed]});
  }
}
