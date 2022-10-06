import { MessageActionRow, MessageEmbed, MessageSelectMenu } from 'discord.js';
import clientFactory from '#root/client'

clientFactory(client => {
	client.on('ready', async () => {
		const guild = client.guilds.cache.first();
		const channel = guild.channels.cache.find((c) => c.id === '996713034359767100'); // Канал для ролів.
	
		const embedMessage = new MessageEmbed()
			.setTitle('**Вітаю, шановний(на)!**')
			.setDescription('Гайда заповнимо разом невеличку анкету, щоб ми змогли більш якісно обирати для тебе контент.\n\n Вибери ті варіанти які найбільш пасують тобі.');
	
		const workField = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('work_field')
					.setPlaceholder('Обери галузь своєї діяльності.')
					.setMinValues(0)
					.setMaxValues(5)
					.addOptions([
						{
							label: 'Тестувальник',
							value: 'qa',
							emoji: '996070487853641828',
						},
						{
							label: 'Менеджер проєкту',
							value: 'pm',
							emoji: '996070486545006732',
						},
						{
							label: 'CEO/CTO',
							value: 'ceo',
							emoji: '996070472586379394',
						},
						{
							label: 'Enterprise розробник',
							value: 'enterprise_developer',
							emoji: '997936842877964318',
						},
						{
							label: 'Кібер безпека',
							value: 'cyber_security',
							'emoji': '997935298258419783',
						},
						{
							label: 'Розробник додатків',
							value: 'mobile_developer',
							emoji: '996070485228011581',
						},
						{
							label: 'Маркетинг',
							value: 'marketing',
							emoji: '996070483839684648',
						},
						{
							label: 'Розробник ігор',
							value: 'game_developer',
							emoji: '996070482006786168',
						},
						{
							label: 'DevOps',
							value: 'devops',
							emoji: '996070477057503323',
						},
						{
							label: 'Дизайнер',
							value: 'designer',
							emoji: '996070475639836773',
						},
						{
							label: 'Дата-Аналітик',
							value: 'data_analytics',
							emoji: '996070474436067449',
						},
					]),
			);
	
		const seniority = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('seniority_level')
					.setPlaceholder('Виберіть рівень своїх знань.')
					.addOptions([
						{
							label: 'Початківець',
							value: 'junior',
							emoji: '996811331720200283',
						},
						{
							label: 'Спеціаліст',
							value: 'middle',
							emoji: '996811333439848468',
						},
						{
							label: 'Професіонал',
							value: 'senior',
							emoji: '996811334777831466',
						},
					]),
			);
	
	
		const platform = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('platforms')
					.setPlaceholder('Обери платформу(ми) під які ти розробляєш.')
					.setMinValues(0)
					.setMaxValues(5)
					.addOptions([
						{
							label: 'Unity',
							value: 'unity',
							emoji: '996068772395884644',
						},
						{
							label: 'Веб',
							value: 'web',
							emoji: '996067932058697788',
						},
						{
							label: 'PC',
							value: 'pc',
							emoji: '996067934332002384',
						},
						{
							label: 'Xbox',
							value: 'xbox',
							emoji: '996067935959404655',
						},
						{
							label: 'PlayStation',
							value: 'ps',
							emoji: '996067930712326224',
						},
						{
							label: 'iOS/macOS',
							value: 'apple',
							emoji: '996067927516258334',
						},
						{
							label: 'Android',
							value: 'android',
							emoji: '996067925209403514',
						},
					]),
			);
	
		const languages = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('languages')
					.setPlaceholder('Обери мову(и) які ти використовуєш.')
					.setMinValues(0)
					.setMaxValues(10)
					.addOptions([
						{
							label: 'Swift',
							value: 'swift',
							emoji: '996066197915303966',
						},
						{
							label: 'Rust',
							value: 'rust',
							emoji: '996066195478417489',
						},
						{
							label: 'Ruby',
							value: 'ruby',
							emoji: '996066193330937876',
						},
						{
							label: 'R',
							value: 'r',
							emoji: '996066191800021032',
						},
						{
							label: 'Python',
							value: 'python',
							emoji: '996066188901765170',
						},
						{
							label: 'PHP',
							value: 'php',
							emoji: '996066186628452403',
						},
						{
							label: 'NodeJS',
							value: 'nodejs',
							emoji: '996066184850059386',
						},
						{
							label: 'Kotlin',
							value: 'kotlin',
							emoji: '996066183826657360',
						},
						{
							label: 'JS',
							value: 'javascript',
							emoji: '996066178999013516',
						},
						{
							label: 'Java',
							value: 'java',
							emoji: '996066177807818852',
						},
						{
							label: 'HTML',
							value: 'html',
							emoji: '996066176616636416',
						},
						{
							label: 'CSS',
							value: 'css',
							emoji: '996066173768704101',
						},
						{
							label: 'Go',
							value: 'go',
							emoji: '996066175282851981',
						},
						{
							label: 'C#',
							value: 'c_sharp',
							emoji: '996066172577525891',
						},
						{
							label: 'C/C++',
							value: 'c_plus_plus',
							emoji: '996066171185004564',
						},
					]),
			);
	
		const messageChannelsInfo = await channel.messages.fetch('997937261863776436'); // Повідомлення із ролями.
		messageChannelsInfo.edit({ embeds: [embedMessage], components: [workField, seniority, platform, languages] });
		process.edit(1)
	});
})