const fs = require('node:fs');
const path = require('node:path');

const importFiles = (dirPath, collection) => {
	const commandsPath = path.join(__dirname, dirPath);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection
		// With the key as the command name and the value as the exported module
		collection.set(command.data.name, command);
	}
};

const importButtons = (dirPath, collection) => {
	const commandsPath = path.join(__dirname, dirPath);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection
		// With the key as the command name and the value as the exported module
		collection.set(command.id, command);
	}
};

const importEvents = (dirPath, client) => {
	const eventsPath = path.join(__dirname, dirPath);
	const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

	for (const file of eventFiles) {
		const filePath = path.join(eventsPath, file);
		const event = require(filePath);
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args));
		}
		else {
			client.on(event.name, (...args) => event.execute(...args));
		}
	}
};


module.exports.importFiles = importFiles;
module.exports.importButtons = importButtons;
module.exports.importEvents = importEvents;