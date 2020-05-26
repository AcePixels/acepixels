//import
const { MessageEmbed } = require('discord.js');
const { blue_dark } = require("../../colours.json");

module.exports = {
    run: async(client, message, args, owner) => {
        //create an embed with some info about the bot creator and send it to the channel
        const embed = new MessageEmbed()
            .setColor(blue_dark)
            .setThumbnail(message.guild.iconURL())
            .setTitle("Owner of Rainnny")
            .addField('Bot owner:', 'Jeremy#8686')
            .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());

        message.channel.send(embed);
    },
    config: {
        name: 'creator',
        description: 'Displays the bot owner',
        usage: '!creator',
        category: 'misc',
        accessableby: 'Members',
        aliases: ['owner']
    }
}