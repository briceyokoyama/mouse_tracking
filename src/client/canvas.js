const canvas = document.getElementById('canvas-stage');
const context = canvas.getContext('2d');
const { PI } = Math;

export default {
  drawCircle({
    x,
    y,
    radius = 20,
    color = 'white',
    lineWidth = 4,
  }) {
    context.beginPath();

    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.arc(x, y, radius, 0, 2 * PI);

    context.closePath();
    context.stroke();
  },
  clear() {
    context.clearRect(0, 0, 1e9, 1e9);
  },
  width() {
    return canvas.width;
  },
  height() {
    return canvas.height;
  },
  addListener(func) {
    canvas.addEventListener('mousedown', func);
  },
  drawScore(score) {
    context.textAlign = 'end';
    context.font = '18px Orbitron';
    context.fillStyle = 'white';
    context.fillText(`score: ${score}`, 480, 30);
  },
};
