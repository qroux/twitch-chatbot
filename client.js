import tmi from 'tmi.js';

const opts = {
  identity: {
    username: '',
    password: '',
  },
  channels: [''],
};

export const client = new tmi.client(opts);
