const canvas = document.getElementById('canvas-stage')
const context = canvas.getContext('2d')
const { PI } = Math
const event = new MouseEvent('checkPos')

export default {
  drawCircle({ x, y, radius = 20, color = 'white', lineWidth = 2 }) {
    context.beginPath()

    context.lineWdith = lineWidth
    context.strokeStyle = color
    context.arc(x, y, radius, 0, 2 * PI)

    context.closePath()
    context.stroke()
  },
  clear() {
    context.clearRect(0, 0, 1e9, 1e9)
  },
  width() {
    return canvas.width
  },
  height() {
    return canvas.height
  },
  addListener() {
    canvas.addEventListener('checkPos', e => {
      console.log(e.clientX)
    })
  },
  dispatchEvent() {
    canvas.dispatchEvent(event)
  }
}