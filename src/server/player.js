
export default class Player {
  constructor(username) {
    this.username = username;
    this.score = 0;
  }

  incrementScore() {
    this.score += 1;
  }

  getScore() {
    return this.score;
  }
}
