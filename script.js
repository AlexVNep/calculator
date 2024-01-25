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

//It is taking the id of the button clicked and using that as the input for the button to append to display
 numButtons.forEach(button => {
    button.addEventListener('click', function () {
        inputNumber(button.id);
        updateDisplay();
    });    
});

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

function inputNumber (number) {
    if (firstOperator === null) {
        if (displayValue === '0' || displayValue=== 0) {
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
    // console.log(displayValue);
    // console.log(firstOperand);
    // console.log(secondOperand);
    console.log(firstOperator);
    // console.log(secondOperator);
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

function updateDisplay () {
    // is making the text of the topText = topNumber
    displayText.textContent = displayValue;
    // console.log(displayValue);
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}
/*function appendToDisplay (button) {
    if (displayValue === '0' || btnFlag) {
        displayValue = button;
    } else if (displayValue != '0' || btnFlag){
        //Otherwis, concatenate the button that was clicked to the topNumber
        displayValue += button;
    } else if (displayValue != '0' || btnFlag == true) {
        equation = displayValue += button;
    }
    // Reset the result display flag to false, as the user entered a new value
    btnFlag = false;

    // execute the updateDisplay function to update the displayValue
    updateDisplay();
    // console.log(displayValue);
    // console.log(typeof displayValue);
}



function updateDisplayValue (button) {
    btnFlag = true;
    if (displayValue !== '0') {
        equation = displayValue += button;
    } 
    console.log(equation);
    }*/