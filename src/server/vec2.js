export default class Vec2 {
  constructor({ x = 0, y = 0 }) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    return new Vec2({
      x: this.x + vector.x,
      y: this.y + vector.y,
    });
  }

  set(object) {
    this.x = object.x;
    this.y = object.y;
  }

  distance(vector) {
    return Math.sqrt((this.x - vector.x) ** 2 + (this.y - vector.y) ** 2);
  }
}
