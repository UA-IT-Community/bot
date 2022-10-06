import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from 'discord.js';
import partners from './content/partners.js';
import clientFactory from '#root/client'

clientFactory((client) => {
	client.on('ready', async () => {
		const guild = client.guilds.cache.first()
		const channel = guild.channels.cache.find((c) => c.id == '996457577338638376'); //Канал із партнерами.

		await Promise.all(partners.map(async (partner) => {
			let message = await channel.messages.fetch(partner.messageId)

			const embeds = [new EmbedBuilder(partner.embed)]
			const buttons = new ActionRowBuilder().addComponents(
				new ButtonBuilder().setURL(partner.invite).setLabel("➢ Долучитись").setStyle(ButtonStyle.Link),
			)

			if (message) {
				await message.edit({ embeds, components: [buttons] })
			} else {
				await channel.send({ embeds, components: [buttons] })
			}
		}))
		process.exit(1)
	})
})