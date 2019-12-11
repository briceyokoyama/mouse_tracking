import Vec2 from './vec2';

const Constants = require('../shared/constants');

export default class MovingObject {
  constructor(position, velocity) {
    this.position = new Vec2(position);
    this.velocity = new Vec2(velocity);
    this.radius = Constants.targetRadius;

    this.checkInObject = this.checkInObject.bind(this);
  }

  static createRandom() {
    const position = {
      x: Math.random() * Constants.canvasWidth / 4 + Constants.canvasWidth / 2,
      y: Math.random() * Constants.canvasHeight / 4 + Constants.canvasHeight / 2,
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

  checkInObject(click) {
    const clickPosition = new Vec2({
      x: click.x,
      y: click.y,
    });
    return this.position.distance(clickPosition) < this.radius;
  }

  serializeForUpdate() {
    return {
      x: this.position.x,
      y: this.position.y,
    };
  }
}
