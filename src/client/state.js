let lastGameUpdate = null;

export function processGameUpdate(update) {
  lastGameUpdate = update;
}

export function getCurrentState() {
  return lastGameUpdate;
}
