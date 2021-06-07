import { client } from './client.js';
import { actionType, rollDice } from './actions.js';

export const onMessageHandler = (target, context, msg, self) => {
  if (self) return;

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === actionType.dice) {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
};

export const onConnectedHandler = (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
};
