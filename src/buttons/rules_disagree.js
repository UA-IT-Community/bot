export default {
	id: 'rules_disagree',
	async execute(interaction) {
		interaction.member.kick();
	},
};