import MovingObject from './MovingObject'
import Canvas from '../utility/Canvas'
import Pointer from './Pointer';

export default class Game {
  constructor() {
    this.target = MovingObject.createRandom()
    this.pointer = Pointer.initialize()
    this.score = 0

    this.move = this.move.bind(this)
    this.draw = this.draw.bind(this)
    this.tick = this.tick.bind(this)
  }

  move() {
    this.target.move()
  }

  draw() {
    this.target.draw()
  }

  tick() {
    Canvas.clear()
    this.target.move()
    this.target.draw()
    this.target.checkCollision();
    Canvas.dispatchEvent()
    window.requestAnimationFrame(this.tick)
  }

  start() {
    this.tick()
    Canvas.addListener()
  }
}