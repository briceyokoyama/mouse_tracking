import Game from './game';

const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('build'));
app.use(express.static('css'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './' });
});

server.listen(3000, () => {
  console.log('listening on port 3000');
});

const game = new Game();

const joinGame = (socket) => {
  game.addPlayer(socket);
};

io.on('connection', (socket) => {
  console.log('A player connected!', socket.id);

  joinGame(socket);

  socket.on('click', (click) => {
    game.handleClick(click, socket);
  });

  socket.on('disconnect', () => {
    console.log('A player disconnected!', socket.id);
  });
});
