import MovingObject from './MovingObject'

export default class Pointer extends MovingObject {
  constructor(position, velocity) {
    super(position, velocity)

    this.updatePosition = this.updatePosition.bind(this)
  }

  static initialize() {
    const start = {
      x: 0,
      y: 0
    }
    return new Pointer(start, start)
  }

  updatePosition(e) {
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop
    this.position.set({ x, y })
  }
}