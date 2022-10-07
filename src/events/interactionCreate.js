export default {
	name: 'interactionCreate',
	async execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

		if (interaction.isCommand()) {
			try {
				const command = interaction.client.commands.get(interaction.commandName);

				if (!command) return;

				await command.execute(interaction);
			}
			catch (error) {
				console.error(error);
				await interaction.reply({ content: 'Трапилась помилочка, повідомте про це адміністрації!', ephemeral: true });
			}
		}


		if (interaction.isButton()) {
			try {
				const button = interaction.client.buttons.get(interaction.customId);

				if (!button) return;

				await button.execute(interaction);
			}
			catch (error) {
				console.error(error);
				await interaction.reply({ content: 'Трапилась помилочка, повідомте про це адміністрації!', ephemeral: true });
			}
		}

		if (interaction.isSelectMenu()) {
			try {
				const button = interaction.client.selects.get(interaction.customId);

				if (!button) return;

				await button.execute(interaction);
			}
			catch (error) {
				console.error(error);
				await interaction.reply({ content: 'Трапилась помилочка, повідомте про це адміністрації!', ephemeral: true });
			}
		}
	},
};