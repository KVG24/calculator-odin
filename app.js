let firstNum = '';
let operation = null;
let secondNum = '';
let needResetScreen = false

const displayPrev = document.querySelector('.previous');
const displayCurrent = document.querySelector('.current');

const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('equals')
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const pointBtn = document.getElementById('point');

clearBtn.addEventListener('click', clearAll);
equalsBtn.addEventListener('click', calculate);
deleteBtn.addEventListener('click', deleteLast);
pointBtn.addEventListener('click', addPoint);
window.addEventListener('keydown', getKeyboardInput);

displayCurrent.textContent = '0'

numberBtn.forEach((button) => {
    button.addEventListener('click', () => addNumber(button.textContent))
});

operatorBtn.forEach((button) =>{
    button.addEventListener('click', () => setOperator(button.textContent))
});

function add(a, b) {
    return +a + +b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '÷':
            if (b == 0) return null
            else return divide(a, b)
        default:
            return null
    }
};

function addNumber(number) {
    if (displayCurrent.textContent === '0' || needResetScreen)
        resetScreen()
    displayCurrent.textContent += number
};

function setOperator(operator) {
    if (operation !== null) calculate();
    firstNum = displayCurrent.textContent;
    operation = operator;
    displayPrev.textContent = `${firstNum} ${operation}`
    needResetScreen = true
};

function calculate() {
    if (operation == null || needResetScreen) return;
    if (operation === '÷' && displayCurrent.textContent === '0') {
        alert(`Can't divide by 0`);
        return
    }
    secondNum = displayCurrent.textContent
    displayCurrent.textContent = roundResult(operate(operation, firstNum, secondNum))
    displayPrev.textContent = `${firstNum} ${operation} ${secondNum}`
    operation = null
};

function roundResult(number) {
    return Math.round(number * 1000) / 1000
};

function resetScreen() {
    displayCurrent.textContent = '';
    needResetScreen = false
};

function clearAll() {
    displayCurrent.textContent = '0'
    displayPrev.textContent = ''
    firstNum = '';
    operation = null;
    secondNum = '';
};

function deleteLast() {
    displayCurrent.textContent = displayCurrent.textContent.toString().slice(0, -1)
};

function addPoint() {
    if (needResetScreen) resetScreen();
    if (displayCurrent.textContent == '') {
        displayCurrent.textContent = 0;
    }
    if (displayCurrent.textContent.includes('.')) return
    displayCurrent.textContent += '.'
};

function getKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) addNumber(e.key);
    if (e.key == '=' || e.key == 'Enter') calculate();
    if (e.key == 'Escape') clearAll();
    if (e.key == '.') addPoint();
    if (e.key == 'Backspace') deleteLast();
    if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
        setOperator(keyboardInputConvert(e.key))
    }
};

function keyboardInputConvert(key) {
    if (key == '/') return '÷'
    if (key == '*') return '*'
    if (key == '-') return '-'
    if (key == '+') return '+'
};