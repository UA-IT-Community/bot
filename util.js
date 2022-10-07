import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'url';
import { Collection } from 'discord.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const load = async (dirPath) => {
	return new Promise(async (resolve, reject) => {
		const collection = new Collection() 
		const filesPath = path.join(__dirname, dirPath);
		const files = fs.readdirSync(filesPath).filter(file => file.endsWith('.js'));
		
		for (const file of files) {
			const filePath = path.join(filesPath, file);
			const command = await import(filePath);
			collection.set(filePath, command.default);
		}
		resolve(collection)
	});
}

export {
	load,
}