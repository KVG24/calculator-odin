const firstNum = '';
const operator = '';
const secondNum = '';

const displayCurrent = document.querySelector('.current');
const displayPrev = document.querySelector('.previous');
displayCurrent.textContent = '0'

const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const equalsBtn = document.getElementById('equals')
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const pointBtn = document.getElementById('point')

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case 'divide':
            if (b == 0) return null
            else return divide(a, b)
        default:
            return null
    }
}
