const Discord = require('discord.js')
module.exports = {
    name: "bilgi",
    aliases: ["bilgi"],
    run: async(client, message, args) => {
        message.react(client.config.tik)
        client.channels.cache.get("889094402725777409").send(`**${message.author.tag}**(\`${message.author.id}\`) kullanıcısı <#${message.channel.id}> kanalında \`${message.content}\` komutunu kullandı.`)
        message.channel.send(new Discord.MessageEmbed().setDescription(`\
-----------------------
Güvenli Listeye Eklenecek Veya Hata Alıyorsanız Bot Sahibine Ulaşınız <@852834797176094721> Size Yardımcı Olucaktır.
Chatte Küfür Ederseniz Bot Mesajınızı Silicektir.
Chatte Reklam Yaparsanız Bot Anında Size **Sınırsız** Mute Atar Bilginize.
-----------------------

`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor('2F3136')
        )
    }
}