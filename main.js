const timer = document.querySelector('.timer');
const storage = window.localStorage;
let counter = storage.getItem('seconds') || 0;

function timerCount() {
  counter++;
  saveTime()
}

function saveTime() {
  storage.setItem('seconds', `${counter}`);
  timer.innerHTML = counter;
}

setInterval(timerCount, 1000);
saveTime();