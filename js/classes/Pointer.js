import MovingObject from './MovingObject'

export default class Pointer extends MovingObject {
  constructor(position, velocity) {
    super(position, velocity)
  }

  static initialize() {
    const start = {
      x: 0,
      y: 0
    }
    return new Pointer(start, start)
  }

  updatePosition(e) {
    this.position ={
      x: e.clientX,
      y: e.clientY
    }
    console.log(this.position)
  }
}