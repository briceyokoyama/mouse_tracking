import io from 'socket.io-client';
import { processGameUpdate } from './state';

const socket = io();

const connectedPromise = new Promise((resolve) => {
  socket.on('connect', () => {
    console.log('Connected to server!');
    resolve();
  });
});

export default () => {
  connectedPromise.then(() => {
    socket.on('update', processGameUpdate);
  });
};
