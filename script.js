let h = 0, m = 0, s = 0, ms = 0;
let interval = null;
let running = false;

function updateStopwatch() {
  document.querySelector('.hours').innerText = h.toString().padStart(2, '0');
  document.querySelector('.minutes').innerText = m.toString().padStart(2, '0');
  document.querySelector('.seconds').innerText = s.toString().padStart(2, '0');
  document.querySelector('.milliseconds').innerText = ms.toString().padStart(2, '0');
}

function tick() {
  ms += 1;
  if (ms >= 100) {
    ms = 0;
    s += 1;
    if (s >= 60) {
      s = 0;
      m += 1;
      if (m >= 60) {
        m = 0;
        h += 1;
      }
    }
  }
  updateStopwatch();
}

document.querySelector('#start').addEventListener("click", () => {
  if (running) return;
  running = true;
  interval = setInterval(tick, 10);
});

document.querySelector('#pause').addEventListener("click", () => {
  running = false;
  clearInterval(interval);
});

document.querySelector('#reset').addEventListener("click", () => {
  running = false;
  clearInterval(interval);
  h = m = s = ms = 0;
  updateStopwatch();
});

updateStopwatch();
