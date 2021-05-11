const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let min = 0;
let max = colors.length - 1;
let intervalId = null;

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

function onClickStartBtn() {
  startBtn.disabled = true;
  intervalId = setInterval(() => {
    const selectedColor=colors[randomIntegerFromInterval(min, max)]
    document.body.style.backgroundColor = selectedColor;
  },1000)
}

function onClickStopBtn() {
  startBtn.disabled = false;
  clearInterval(intervalId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};