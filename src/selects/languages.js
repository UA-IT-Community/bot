export default {
	id: 'languages',
	async execute(interaction) {

		const roles = {
			'swift': '992739004200005652',
			'rust': '997934542256087192',
			'ruby': '992738806996422666',
			'r': '997934483191898112',
			'python': '992116937045848095',
			'php': '994013786275070062',
			'nodejs': '997934225552576622',
			'kotlin': '992738911648497664',
			'javascript': '992116998085546004',
			'java': '992116893148262501',
			'html': '997934300848734218',
			'css': '997934342594629723',
			'go': '992738628948209744',
			'c_sharp': '992117183683498096',
			'c_plus_plus': '992116723715162232',
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