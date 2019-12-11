import Canvas from './canvas';
import { sendClick } from './networking';

function handleClick(e) {
  const click = {
    x: e.clientX - e.target.offsetLeft,
    y: e.clientY - e.target.offsetTop,
  };
  sendClick(click);
}

export function startCapturingInput() {
  Canvas.addListener(handleClick);
}

export function stopCapturingInput() {
  Canvas.removeListener(handleClick);
}
