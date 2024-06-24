var input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

function others(buttonValue) {
    if (buttonValue === 'C') {
        output = '';
    }
    else if (buttonValue === '=') {
        output = calculate(input.value);
    }
}

function calculations(buttonValue) {
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2
    }
}