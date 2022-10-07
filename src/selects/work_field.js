export default {
	id: 'work_field',
	async execute(interaction) {

		const roles = {
			'qa': '992103545069391962',
			'pm': '997911555242987535',
			'ceo': '992116231014465638',
			'enterprise_developer': '992104379509379082',
			'mobile_developer': '997912084379599018',
			'marketing': '992116514046103562',
			'game_development': '992103960825569302',
			'devops': '992125532789555211',
			'designer': '992126520439079042',
			'data_analytics': '992125479064715364',
			'cyber_security': '992118083982475294',
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