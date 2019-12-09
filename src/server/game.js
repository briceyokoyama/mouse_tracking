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
  }

  start() {
    this.tick();
  }
}
