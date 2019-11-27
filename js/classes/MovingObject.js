import Canvas from '../utility/Canvas.js'
import Vec2 from './Vec2.js'

export default class MovingObject {
  
  constructor(position, velocity) {
    this.position = new Vec2(position)
    this.velocity = new Vec2(velocity)
    this.radius = 20
  }

  static createRandom() {
    const position = {
      x: 250,
      y: 250
    }

    const velocity = {
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5
    }

    return new MovingObject(position, velocity)

  }

  move() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }

  draw() {
    Canvas.drawCircle({x: this.position.x, y: this.position.y, radius: this.radius})
  }

  checkCollision() {
    if (this.position.x + this.radius > Canvas.width() || this.position.x - this.radius <= 0) {
      this.velocity.x = -this.velocity.x
    }

    if (this.position.y + this.radius > Canvas.height() || this.position.y - this.radius <= 0) {
      this.velocity.y = -this.velocity.y
    }
  }

  checkInObject(vector) {
    // console.log(vector)
    return this.position.distance(vector) < this.radius
  }
}