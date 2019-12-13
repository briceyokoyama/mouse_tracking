import { getCurrentState } from './state';
import Canvas from './canvas';
import Leaderboard from './leaderboard';

function render() {
  const { target, leaders } = getCurrentState();

  Canvas.clear();
  Canvas.drawCircle(target);
  Leaderboard.updateLeaderboard(leaders);
}

export default () => {
  setInterval(render, 1000 / 60);
};
