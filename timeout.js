// Things that take forever

function timeoutCallback(callback) {
  setTimeout(callback, Number.MAX_SAFE_INTEGER);
}

function timeoutPromise() {
  return new Promise((_resolve, _reject) => _);
}

function infiniteLoopRecursive() {
  infiniteLoopRecursive();
}

function infiniteLoopFor() {
  for (;;) { }
}

function infiniteLoopWhile() {
  while (true) { }
}
