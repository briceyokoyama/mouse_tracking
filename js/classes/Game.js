import MovingObject from './MovingObject'
import Canvas from '../utility/Canvas'
import Pointer from './Pointer'

export default class Game {
  constructor() {
    this.target = MovingObject.createRandom()
    this.pointer = Pointer.initialize()
    this.score = 0

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
    this.target.checkCollision()
    this.updateScore(this.target.checkInObject(this.pointer.position))
    Canvas.drawScore(this.score)
    window.requestAnimationFrame(this.tick)
  }

  updateScore(pointerInTarget) {
    if (pointerInTarget) this.score++
  }

  start() {
    this.tick()
    Canvas.addListener(this.pointer.updatePosition)
  }
}