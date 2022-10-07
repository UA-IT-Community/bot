import { MessageEmbed } from 'discord.js';
import clientFactory from '#root/client'

clientFactory(client => {
	client.on('ready', async () => {
		const guild = client.guilds.cache.first();
		const channel = guild.channels.cache.find((c) => c.id === '999077349289111595');
	
		const embedMessage = new MessageEmbed()
			.setTitle('**Привіт, друже!**')
			.setDescription(`
			Ми раді вітати тебе у нашій Discord спільноті присвяченої українському IT 🇺🇦
	У нас ти знайдеш усе що побажаєш, від цікавого та корисного контенту, до відпочинку після робочого дня.
	
	
	● ***Актуальні новини зі світу IT.*** 📰
	● ***Свіжі та круті вакансії.*** 👨🏻‍💻
	● ***Цікаві meetup-и на будь-яку тему.*** 🎙 
	● ***Поміч на підтримку на будь-яке твоє запитання.*** 🛟
	● ***Публічні hollywar-и.*** 🎤
	● ***Експерти у своїй галузі, які завжди онлайн у чаті.*** 🧑🏼‍🔬
	● ***Поради про кар'єрний розвиток, та life-work баланс.*** 👨🏼‍⚕️
	● ***Та багато розважального контенту, у голосових та текстових чатах.***
	
	
	Ми раді, що ти обрав нашу спільноту, почувайся як дома. 
	Але на початку, прочитай та погодься із <#997179075355496549>-ми спільноти.
	
	Вітаємо 🥳
	
	`);
	
		const messageChannelsInfo = await channel.messages.fetch('999086106916171917');
		messageChannelsInfo.edit({ embeds: [embedMessage] });
		process.exit(1)
	});
})
