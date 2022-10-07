export default {
	id: 'platforms',
	async execute(interaction) {

		const roles = {
			'web': '992115783490613359',
			'unity': '992115628158758912',
			'pc': '992116164547317851',
			'xbox': '997934817096253472',
			'ps': '992741404172353618',
			'apple': '992738169176989776',
			'android': '992737731803361340',
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