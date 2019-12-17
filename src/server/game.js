import MovingObject from './moving-object';
import Player from './player';

export default class Game {
  constructor() {
    this.players = {};
    this.sockets = {};
    this.target = MovingObject.createRandom();

    setInterval(this.tick.bind(this), 1000 / 60);
  }

  addPlayer(socket, username) {
    this.sockets[socket.id] = socket;
    this.players[socket.id] = new Player(username.username);
  }

  removePlayer(socket) {
    delete this.sockets[socket.id];
    delete this.players[socket.id];
  }

  move() {
    this.target.move();
  }

  tick() {
    this.target.move();
    this.target.checkCollision();

    Object.keys(this.sockets).forEach((playerID) => {
      const socket = this.sockets[playerID];
      socket.emit('update', this.createUpdate(this.getLeaderboard()));
    });
  }

  createUpdate(leaders) {
    return {
      target: this.target.serializeForUpdate(),
      leaders,
    };
  }

  handleClick(click, socket) {
    if (this.target.checkInObject(click)) {
      this.target = MovingObject.createRandom();
      const currSocket = this.sockets[socket.id];
      const player = this.players[socket.id];
      player.incrementScore();
      currSocket.emit('points', {
        msg: 'you scored a point!',
        totalPoints: player.getScore(),
      });
    }
  }

  start() {
    this.tick();
  }

  getLeaderboard() {
    return Object.values(this.players)
      .sort((p1, p2) => p2.score - p1.score)
      .slice(0, 5)
      .map((p) => ({ username: p.username, score: p.getScore() }));
  }
}
