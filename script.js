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

 let bottomNumber = '0';
 let topNumber = '0';
 isEqualsClicked = false;
let result;

 const bottomText = document.querySelector('.bottomText');
 const topText = document.querySelector('.topText')
 const allButtons = document.querySelectorAll('button');
 const equalsBtn = document.querySelector('#equals');

//It is taking the id of the button clicked and using that as the input for the button to append to display
 allButtons.forEach(button => {
    button.addEventListener('click', function () {
        appendToDisplay(button.id);        
    });    
});

equalsBtn.addEventListener('click', function () {
    resultValue();
})
function updateTopDisplay () {
    // is making the text of the topText = topNumber
    topText.textContent = topNumber;
}

function appendToDisplay (button) {
    if (topNumber === '0' || isEqualsClicked) {
        // if topNumber equals '0' or the bottomNumber is already displayed (ie calculation executed), replace it with the button that was clicked
        topNumber = button;
    } else if (topNumber != '0' || isequalsClicked){
        //Otherwis, concatenate the button that was clicked to the topNumber
        topNumber += button;
    } else {
        resultValue();
    }
    // execute the updateDisplay function to update the topText
    updateTopDisplay();
    console.log(topNumber);
    console.log(typeof topNumber);
}

function updateBottomDisplay () {
    bottomText.textContent = result;
}

function resultValue () {
    isEqualsClicked = true;
    do {
        result = Number(topNumber);
        updateBottomDisplay()
    } while (isEqualsClicked == true);
    isEqualsClicked = false;
}