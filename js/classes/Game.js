import MovingObject from './MovingObject'
import Canvas from '../utility/Canvas'

export default class Game {
  constructor() {
    this.target = MovingObject.createRandom()
    this.score = 0

    this.tick = this.tick.bind(this)
    this.updateScore = this.updateScore.bind(this)
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
    Canvas.drawScore(this.score)
    window.requestAnimationFrame(this.tick)
  }

  updateScore(e) {
    if (this.target.checkInObject(e)) this.score++
  }

  start() {
    this.tick()
    Canvas.addListener(this.updateScore)
  }
}