export default {
	id: 'rules_agree',
	async execute(interaction) {
		const memberRole = interaction.guild.roles.cache.get('992139055733149716');

		interaction.reply({
			content: 'Вітаємо тебе IT-шнику, щоб краще орієнтуватись почитай <#996806556303773736>',
			ephemeral: true,
		});

		interaction.member.roles.add(memberRole);
	},
};