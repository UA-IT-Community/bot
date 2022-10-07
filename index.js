import { Collection } from 'discord.js'
import { load } from './util.js';
import clientFactory from './client.js';

clientFactory(async function(client) {
	client.commands = new Collection;
	client.buttons = new Collection;
	client.selects = new Collection;


	await Promise.all([
		load('src/events').then(events => {
			events.each(event => {
				if (event.once) {
					client.once(event.name, (...args) => event.execute(...args));
				}
				else {
					client.on(event.name, (...args) => event.execute(...args));
				}
			})
		}),
		load('src/buttons').then(buttons => buttons.each(button => client.buttons.set(button.id, button.execute))),
		load('src/selects').then(selects => selects.each(select => client.selects.set(select.id, select.execute))),

	])
});