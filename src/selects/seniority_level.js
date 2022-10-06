module.exports = {
	id: 'seniority_level',
	async execute(interaction) {

		const roles = {
			'junior': '992123601165746288',
			'middle': '992123741393924106',
			'senior': '992123789720686672',
		};

		await interaction.deferReply({ ephemeral: true });


		const notSelected = Object.keys(roles)
			.filter(key => !interaction.values.includes(key))
			.reduce((obj, key) => {
				obj[key] = roles[key];
				return obj;
			}, {});

		Object.values(notSelected).forEach(async (v) => {
			if (interaction.member.roles.cache.has(v)) {
				await interaction.member.roles.remove(v);
			}
		});

		interaction.values.forEach(async (v) => {
			if (v in roles) {
				await interaction.member.roles.add(roles[v]);
			}
		});

		await interaction.editReply({
			content: 'Дякую! Твої ролі оновлені.',
			ephemeral: true,
		});
	},
};