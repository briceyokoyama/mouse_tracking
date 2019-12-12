import io from 'socket.io-client';
import { processGameUpdate } from './state';

const socket = io();

const connectedPromise = new Promise((resolve) => {
  socket.on('connect', () => {
    console.log('Connected to server!');
    resolve();
  });
});

export const connect = () => {
  connectedPromise.then(() => {
    socket.on('update', processGameUpdate);
    socket.on('points', (data) => console.log(data));
  });
};

export const sendClick = (click) => {
  socket.emit('click', click);
};
