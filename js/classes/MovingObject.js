import Canvas from '../utility/Canvas.js'

export default class MovingObject {
  constructor(position, velocity) {
    this.position = position
    this.velocity = velocity
    this.radius = 20
  }

  static createRandom() {
    const position = {
      x: 250,
      y: 250
    }

    const velocity = {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1
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
}