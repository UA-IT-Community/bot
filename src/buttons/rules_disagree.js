module.exports = {
	id: 'rules_disagree',
	async execute(interaction) {
		interaction.member.kick();
	},
};