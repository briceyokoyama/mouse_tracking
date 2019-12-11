import { connect } from './networking';
import startRendering from './render';
import { startCapturingInput } from './input';

connect();
startCapturingInput();
startRendering();
