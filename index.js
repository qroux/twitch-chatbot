import { onConnectedHandler, onMessageHandler } from './handlers.js';
import { client } from './client.js';

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();
