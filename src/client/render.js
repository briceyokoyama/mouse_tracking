import { getCurrentState } from './state';
import Canvas from './canvas';

function render() {
  const { target } = getCurrentState();

  Canvas.clear();
  Canvas.drawCircle(target);
}

export default () => {
  setInterval(render, 1000 / 60);
};
