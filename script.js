const display = document.getElementById("digitDisplay")
let clickedNumber = "";
let firstNumber = NaN;
let secondNumber = NaN;

let selectedOp = NaN;
let emptyBool = true;
let operBool = false;

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

function add(a,b){
    answer = a + b;
    firstNumber =  answer;
    display.innerText = roundToTwo(answer);
}

function subtract(a,b){
    answer = a - b;
    firstNumber =  answer;
    display.innerText = roundToTwo(answer);
}

function multiply(a,b){
    answer = a * b;
    firstNumber =  answer;
    display.innerText = roundToTwo(answer);
}

function divide(a,b){
    if (b == 0) {
        clearDisplay(1);
        display.innerText = "Can't divide by zero!!";
    }
    else{
        answer = a / b;
        firstNumber =  answer;
        display.innerText = roundToTwo(answer);
    }

}

function operate(operator, num1, num2){
    console.log(operator, num1, num2)
    clearDisplay(0);
    switch (operator) {
        case 1:
            console.log("ADDING")
            add(num1,num2);
            break;

        case 2:
            console.log("SUBTRACTING")
            subtract(num1,num2);
            break;
    
        case 3:
            console.log("MULTIPLYING")
            multiply(num1,num2);
            break;

        case 4:
            console.log("DIVIDING")
             divide(num1,num2);
             break;


        default:
            break;
    }
}

function updateDisplay(number) {
    if (emptyBool) {
        display.innerText = "";
        emptyBool = false;
    }
    if (!isNaN(number)) {
        clickedNumber = clickedNumber.toString() + number;
    }
    console.log(clickedNumber);
    display.innerText = display.innerText + number;
}

function clickedOperator(text, oper) {
    if (isNaN(firstNumber)) {
        firstNumber = parseInt(clickedNumber);
    }

    if (!operBool) {
        clickedNumber = "";
        updateDisplay(text);
        selectedOp = oper;
    }
    //stops it from being pressed mulitple times
    operBool = true;

}

function clearDisplay(bool) {
    if (bool) {
        console.log("HAPPENING");
        display.innerText = "Enter a number.";
        firstNumber = NaN;
        emptyBool = true;
    }

        //clear all selections
        clickedNumber = "";
        secondNumber = null;
        selectedOp = null;
        operBool = false;
}

document.getElementById("zero").addEventListener("click", 
function () {updateDisplay(0);}
)

document.getElementById("one").addEventListener("click",
    function () {updateDisplay(1);}
)

document.getElementById("two").addEventListener("click",
    function () {updateDisplay(2);}
)

document.getElementById("three").addEventListener("click",
    function () {updateDisplay(3);}
)

document.getElementById("four").addEventListener("click",
    function () {updateDisplay(4);}
)

document.getElementById("five").addEventListener("click",
    function () {updateDisplay(5);}
)

document.getElementById("six").addEventListener("click",
    function () {updateDisplay(6);}
)

document.getElementById("seven").addEventListener("click",
    function () {updateDisplay(7);}
)

document.getElementById("eight").addEventListener("click",
    function () {updateDisplay(8);}
)

document.getElementById("nine").addEventListener("click",
    function () {updateDisplay(9);}
)

document.getElementById("add").addEventListener("click", 
    function () {clickedOperator("+", 1);}
)

document.getElementById("subtract").addEventListener("click",
    function () {clickedOperator("-", 2);}
)

document.getElementById("multiply").addEventListener("click",
    function () {clickedOperator("*", 3);}
)

document.getElementById("divide").addEventListener("click",
    function () {clickedOperator("/", 4);}
)

document.getElementById("equals").addEventListener("click", () => {
    secondNumber = parseInt(clickedNumber);
    if (!isNaN(secondNumber)) {
        operate(selectedOp, firstNumber, secondNumber)
    }


})

document.getElementById("clear").addEventListener("click", clearDisplay);
