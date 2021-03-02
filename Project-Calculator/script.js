const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingTheSecondOperand: false,
    operator: null,
}; 

function inputDigit(digit) {
    const { displayValue, waitingTheSecondOperand } = calculator;

    if (waitingTheSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingTheSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();

function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator} = calculator
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }
    calculator.waitingTheSecondOperand = true;
    calculator.operator = nextOperator;
}

function calculate(firstOperand, secondOperand, operator){
    if (operator === '+'){
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    } 

    return secondOperand;
}

function allClear() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingTheSecondOperand = false;
    calculator.operator = null;
}

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (e) => {
    const target = e.target;

    if(!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('all-clear')) {
        allClear();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});
