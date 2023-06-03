const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStop.disabled = null;
let counterID = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

btnStart.addEventListener('click', () => {
    btnStart.disabled = true;
    btnStop.disabled = false;

    counterID = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
});

btnStop.addEventListener('click', () => {
    clearInterval(counterID);
    btnStart.disabled = false;
    btnStop.disabled = true;
})
