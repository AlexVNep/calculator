// Functions for basic math operators
//Function for ADD operator
function add(a, b) {
    return a + b;
}

//Function for SUBTRACT operator
function subtract(a, b) {
    return a - b;
}

//Function for MULTIPLY operator
function multiply(a, b) {
    return a * b;
}

//Function for DIVIDE operator
function divide(a, b) {
    return a / b;
}

let num1 = 0;
let num2 = 0;
let operator = '';

//Functions that takes an operator and 2 numbers and callsone of the basic math operator function
function operate(operator, a, b) {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else if (operator == "/") {
        if (b === 0) {
            return null;
        }
        return divide(a, b);
    } else {
        return 'undefined';
    }
}
 console.log(operate('/', 2, 0));

 let displayValue = 0;
 const displayArea = document.querySelector('.display');
 const numButtons = document.querySelectorAll('button');

 displayArea.textContent = displayValue;

 numButtons.forEach ((button) => {
    button.addEventListener('click', () => {
        displayArea.textContent = button.id;
    });
 });

