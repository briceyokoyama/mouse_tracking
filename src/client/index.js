import { connect } from './networking';
import startRendering from './render';
import { startCapturingInput } from './input';

const modal = document.getElementById('username');
const form = document.querySelector('form');
const username = form.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  connect(username.value);
  startCapturingInput();
  startRendering();
  modal.style.display = 'none';
});
