import Game from './game';

const path = require('path');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './' });
});

server.listen(3000, () => {
  console.log('listening on port 3000');
});

const game = new Game();

const joinGame = () => {
  game.addPlayer(this);
};

io.on('connection', (socket) => {
  console.log('A player connected!', joinGame);

  socket.on('disconnect', () => {
    console.log('A player disconnected!', socket.id);
  });
});
