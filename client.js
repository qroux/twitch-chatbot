import tmi from 'tmi.js';
import dotenv from 'dotenv';
dotenv.config();

const opts = {
  identity: {
    username: process.env.USERNAME,
    password: process.env.OAUTH,
  },
  channels: [process.env.CHANNEL],
};

export const client = new tmi.client(opts);
