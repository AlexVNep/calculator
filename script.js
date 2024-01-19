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

 let leftNumber = '';
 let rightNumber = '';
 let sign = '';
 let isBtnClicked = false;

 const bottomText = document.querySelector('.bottomText');
 const topText = document.querySelector('.topText')
 const numberButtons = document.querySelectorAll('button');
 const operatorButtons = document.querySelectorAll('.operator');
 const allButtons = document.querySelectorAll('button');

//It is taking the id of the button clicked and using that as the number input for updateBottomDisplay
 numberButtons.forEach(button => {
    button.addEventListener('click', function () {
        typedLeftNumber(button.id);
    });    
});

numberButtons.forEach(button => {
    button.addEventListener('click', function () {
        typedRightNumber(button.value);
    });
});

function typedLeftNumber (number) {
    leftNumber = parseInt(leftNumber + number).toString();
    return leftNumber;
    //bottomText.textContent = leftNumber;
}

function typedRightNumber (number) {
    rightNumber =  parseInt(rightNumber + number).toString();
    return rightNumber;
    // bottomText.textContent = rightNumber;
}

//It is taking the id of the button clicked and using that as the operator input for displayOperator
operatorButtons.forEach(button => {
    button.addEventListener('click', function () {
        typedOperator(button.id);
    })
})

function typedOperator (operator) {
    sign = operator;
}

function updateBottomDisplay () {
    if(rightNumber == '' || sign == '') {
        bottomText.textContent = leftNumber;
        console.log(leftNumber);
        console.log(rightNumber);
    // } else if (leftNumber !== '0' && (sign == '/' || '*' || '-' || '+')) {
    //     bottomText.textContent = leftNumber + sign;
    //     console.log(leftNumber);
    //     console.log(rightNumber);
    // } else if (leftNumber !== '0' || rightNumber !== '0' || (sign == '/' || '*' || '-' || '+')) {
    //     bottomText.textContent = sign + rightNumber;
     
    }
}

allButtons.forEach(button => {
    button.addEventListener('click', function () {
        updateBottomDisplay(button.id);
    });
});