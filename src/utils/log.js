import { DEBUG_MODE } from './constants.js';

export function log() {
  if (DEBUG_MODE) {
    console.log(...arguments);
  }
}
