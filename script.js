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




//Functions that takes an operator and 2 numbers and calls one of the basic math operator function
function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "−") {
        return subtract(a, b);
    } else if (operator === "×") {
        return multiply(a, b);
    } else if (operator === "÷") {
        if (b === 0) {
            return null;
        }
        return divide(a, b);
    } else {
        return 'undefined';
    }
}

 let displayValue = '0';
 let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;


 const displayText = document.querySelector('.display');
 const numButtons = document.querySelectorAll('.number');
 const opButton = document.querySelectorAll('.operator')
 const equalsBtn = document.querySelector('#equals');
 const clear = document.querySelector('.clear');

//It is taking the id of the number button clicked and using that as the input for the button to update display
 numButtons.forEach(button => {
    button.addEventListener('click', function () {
        inputNumber(button.id);
        updateDisplay();
    });    
});

// Is taking the id of the operator button clicked and using it to update display 
opButton.forEach(button => {
    button.addEventListener('click', function () {
        inputOperator(button.id);   
        updateDisplay();     
    });    
});

equalsBtn.addEventListener('click', function() {
    inputEquals();
    updateDisplay();
})

clear.addEventListener('click', function() {
    clearDisplay();
    updateDisplay();
})

function inputNumber (number) {
    if (firstOperator === null) {
        // 
        if (displayValue === '0' || displayValue === 0) {
            displayValue = number;
        } else if (displayValue === firstOperand) {
            displayValue = number
        } else {
            displayValue += number;
        }      
    } else {
        if (displayValue === firstOperand) {
            displayValue = number;
        } else {
            displayValue += number;
        }
    }
}

function inputOperator (operator) {
    if(firstOperator != null && secondOperator === null) {
        //4th click - handles input of second operator
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    } else if(firstOperator != null && secondOperator != null) {
        //6th click - new secondOperator
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        secondOperator = operator;
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    } else { 
        //2nd click - handles first operator input
        firstOperator = operator;
        firstOperand = displayValue;
    }
}

function inputEquals() {
    //hitting equals doesn't display undefined before operate()
    if(firstOperator === null) {
        displayValue = displayValue;
    } else if(secondOperator != null) {
        //handles final result
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        if(result === 'undefined') {
            displayValue = 'undefined';
        } else {
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } else {
        //handles first operation
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        if(result === 'undefined') {
            displayValue = 'undefined';
        } else {
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

function updateDisplay () {
    // is making the text of the displayText = displayValue
    displayText.textContent = displayValue;
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}