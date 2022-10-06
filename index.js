const { Collection } = require('discord.js');
const { importFiles, importButtons, importEvents } = require('./util');
const clientFactory = require('./client');

clientFactory(function(client) {
	client.commands = new Collection;
	client.buttons = new Collection;
	client.selects = new Collection;

	importEvents('src/events', client);
	importFiles('src/commands', client.commands);
	importButtons('src/buttons', client.buttons);
	importButtons('src/selects', client.selects);
});