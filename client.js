import { Client, GatewayIntentBits } from 'discord.js'
import { config as parseEnv } from 'dotenv'

parseEnv()


export default async function (initFunction = null) {
	const client = new Client({ intents: [GatewayIntentBits.Guilds] });
	if (initFunction) {
		await initFunction(client);
	}
	client.login(process.env.BOT_TOKEN);
};