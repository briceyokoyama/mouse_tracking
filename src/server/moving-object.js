import Vec2 from './vec2';

const Constants = require('../shared/constants');

export default class MovingObject {
  constructor(position, velocity) {
    this.position = new Vec2(position);
    this.velocity = new Vec2(velocity);
    this.radius = 20;

    this.checkInObject = this.checkInObject.bind(this);
  }

  static createRandom() {
    const position = {
      x: 250,
      y: 250,
    };

    const velocity = {
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
    };

    return new MovingObject(position, velocity);
  }

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  checkCollision() {
    if (this.position.x + this.radius > Constants.canvasWidth
      || this.position.x - this.radius <= 0) {
      this.velocity.x = -this.velocity.x;
    }

    if (this.position.y + this.radius > Constants.canvasWidth
      || this.position.y - this.radius <= 0) {
      this.velocity.y = -this.velocity.y;
    }
  }

  checkInObject(e) {
    const clickPosition = new Vec2({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop,
    });
    return this.position.distance(clickPosition) < this.radius;
  }
}
