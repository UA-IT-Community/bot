import {MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import rules from './content/rules';
import clientFactory from '#root/client'

clientFactory(client => {
    client.on("ready", async () => {
        const guild = client.guilds.cache.first()
        const channel = guild.channels.cache.find((c) => c.id == 997179075355496549); // Приватний канал із правилами (видно для не верифікованих)
        const secondChannel = guild.channels.cache.find((c) => c.id == 996800965137141840); // Публічний канал із правилами

        const embeds = Array.from(rules.embeds).map((embed) => new MessageEmbed(embed))
    
        const buttons = new MessageActionRow().addComponents(
            new MessageButton().setCustomId("rules_agree").setLabel("✓ Згоден").setStyle("SUCCESS").setEmoji(""),
            new MessageButton().setCustomId("rules_disagree").setLabel("✖︎ Проти").setStyle("DANGER").setEmoji("")
        )
    
        const message = await channel.messages.fetch("997179416188817418")
        const secondMessage = await secondChannel.messages.fetch("997179416599871519")

        await Promise.all([
            message.edit({embeds: embeds, components: [buttons]}), //Додаємо до першого каналу інтерактивні кнопки
            secondMessage.edit({ embeds: embeds })
        ])

        process.exit(1)
    })
})