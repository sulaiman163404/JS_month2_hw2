const emailCheck = document.querySelector('#gmail_input');
const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
const checkButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

checkButton.onclick = () => {
    const email = emailCheck.value.trim(); // Получаем значение введенного email и удаляем начальные и конечные пробелы
    if (regExp.test(email)) {
        gmailResult.textContent = 'Вы авторизованы';
    } else {
        gmailResult.textContent = 'Неправильно введен email';
    }
};




const box = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

const move = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++;
        box.style.left = `${positionX}px`;
    } else if (positionX >= 448 && positionY < 448) {
        positionY++;
        box.style.top = `${positionY}px`;
    } else if (positionX > 0 && positionY === 448) {
        positionX--;
        box.style.left = `${positionX}px`;
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        box.style.top = `${positionY}px`;
    }
    setTimeout(move, 1)
};

move();

/////////////////// DZ 2 lesson /////////////////////////////////////////

const counter = document.querySelector('#counter')
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resumeButton = document.querySelector('#resume')
const clearButton = document.querySelector('#clear')

let counterValue = 0
let intervalId

stopButton.disabled = true
resumeButton.disabled = true
clearButton.disabled = true

const startCounter = () => {

    startButton.disabled = true;
    stopButton.disabled = false;
    resumeButton.disabled = true;
    clearButton.disabled = false;

    intervalId = setInterval(() => {
        counterValue++
        counter.textContent = counterValue
    }, 500)
}

const stopCounter = () => {
    startButton.disabled = true;
    stopButton.disabled = true;
    resumeButton.disabled = false;
    clearButton.disabled = false;

    clearInterval(intervalId)
}

const resumeCounter = () => {

    startButton.disabled = true;
    stopButton.disabled = false;
    resumeButton.disabled = true;
    clearButton.disabled = true;

    startCounter()
}

const clearCounter = () => {
    counterValue = 0
    counter.textContent = counterValue
    stopCounter()

    startButton.disabled = false;
    stopButton.disabled = true;
    resumeButton.disabled = true;
    clearButton.disabled = true;
}


startButton.addEventListener('click', startCounter)
stopButton.addEventListener('click', stopCounter)
resumeButton.addEventListener('click', resumeCounter)
clearButton.addEventListener('click', clearCounter)