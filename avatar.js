const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'avatar',
  description: 'Avatarını atar!', 
  options: [
    {
      name: "user",
      required: false,
      description: "Bir kullanıcı etiketle",
      type: 6
    }
  ],
  async execute(client, interaction) {
    const user = interaction.options.getUser('user') || interaction.user;
    const embed = new MessageEmbed()
    .setTitle(`${user.tag} adlı kullanıcının avatarı!`)
    .setImage(user.displayAvatarURL({ dynamic: true }))
    .setColor('BLURPLE');
    return interaction.reply({embeds: [embed]});
  }
}
