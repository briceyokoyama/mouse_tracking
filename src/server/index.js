import Game from './game';

const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3000;

app.use(express.static('build'));
app.use(express.static('css'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './' });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});

const game = new Game();

const joinGame = (socket, username) => {
  game.addPlayer(socket, username);
};

const leaveGame = (socket) => {
  game.removePlayer(socket);
};

io.on('connection', (socket) => {
  console.log('A player connected!', socket.id);

  socket.on('add user', (username) => {
    joinGame(socket, username);
  });

  socket.on('click', (click) => {
    game.handleClick(click, socket);
  });

  socket.on('disconnect', () => {
    console.log('A player disconnected!', leaveGame(socket));
  });
});
