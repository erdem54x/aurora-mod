const Discord = require('discord.js')
module.exports = {
    name: "help",
    aliases: ["yardım"],
    run: async(client, message, args) => {
        message.react(client.config.tik)
        client.channels.cache.get("889094402725777409").send(`**${message.author.tag}**(\`${message.author.id}\`) kullanıcısı <#${message.channel.id}> kanalında \`${message.content}\` komutunu kullandı.`)
        message.channel.send(new Discord.MessageEmbed().setDescription(`\
        Aurora Genel Bot Komutları
-----------------------
.avatar
.snipe
.topteyit
.help
.bilgi
.stat
.topstat
.sil
.istatistik
.seskontrol
-----------------------
.çek = \`@Etiket/İD\`
.erkek = \`@Etiket/İD\`
.isim = \`@Etiket/İD\`
.isimler = \`@Etiket/İD\`
.kayıtsız = \`@Etiket/İD\`
.kes = \`@Etiket/İD\`
.kız = \`@Etiket/İD\`
.sil = \`[ Miktar ]\`
.teyit = \`@Etiket/İD\`
.vip = \`@Etiket/İD\`
-----------------------
.yetenek
-----------------------
`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor('2F3136')
        )
    }
}