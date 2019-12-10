import MovingObject from './moving-object';

export default class Game {
  constructor() {
    this.players = {};
    this.sockets = {};
    this.target = MovingObject.createRandom();

    setInterval(this.tick.bind(this), 1000 / 60);
  }

  addPlayer(socket) {
    this.sockets[socket.id] = socket;
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

  start() {
    this.tick();
  }
}
