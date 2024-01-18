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

 let rightNumber = '0';
 let leftNumber = '';
 let operator = '';

 const bottomText = document.querySelector('.bottomText');
 const topText = document.querySelector('.topText')
 const buttons = document.querySelectorAll('button');

//When button is clicked it executes updateBottomDisplay with this.id as a parameter. So it is taking the id of the buttin clicked?
 buttons.forEach(button => {
    button.addEventListener('click', function () {
        updateBottomDisplay(button.id);
    });
});

let updateBottomDisplay = number => {
    let screenNumber = bottomText.textContent;
    if( screenNumber.length < 16) {
        bottomText.textContent = parseInt(screenNumber + number).toString();
    }
}