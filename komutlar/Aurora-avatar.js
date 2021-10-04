const Discord = require('discord.js');
module.exports = {
    name: "avatar",
    run: async(client, message, args) => {
        client.channels.cache.get("889094402725777409").send(`**${message.author.tag}**(\`${message.author.id}\`) kullanıcısı <#${message.channel.id}> kanalında \`${message.content}\` komutunu kullandı.`)
        message.react(client.config.tik)
let member = message.mentions.users.first() ||  message.guild.members.cache.get() || message.author;
message.channel.send(member.displayAvatarURL({ dynamic: true }));
 }
}