import MovingObject from './moving-object';
import Player from './player';

export default class Game {
  constructor() {
    this.players = {};
    this.sockets = {};
    this.target = MovingObject.createRandom();

    setInterval(this.tick.bind(this), 1000 / 60);
  }

  addPlayer(socket) {
    this.sockets[socket.id] = socket;
    this.players[socket.id] = new Player(socket.id);
  }

  removePlayer(socket) {
    delete this.sockets[socket.id];
  }

  move() {
    this.target.move();
  }

  tick() {
    this.target.move();
    this.target.checkCollision();

    Object.keys(this.sockets).forEach((playerID) => {
      const socket = this.sockets[playerID];
      socket.emit('update', this.createUpdate());
    });
  }

  createUpdate() {
    return {
      target: this.target.serializeForUpdate(),
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
}
