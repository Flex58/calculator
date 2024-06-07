const operatorBtn = document.querySelectorAll(".operator");
const numberBtn = document.querySelectorAll(".number");
const display = document.querySelector("#display")
const equals = document.querySelector("#equals")

function operate(num1, operator, num2){
    switch (operator) {
        case "plus":
            return add(Number(num1), Number(num2));
        case "minus":
            return subtract(Number(num1), Number(num2));
        case "multiply":
            return multiply(Number(num1), Number(num2));
        case "divide":
            return divide(Number(num1), Number(num2));
    }   
}

function add(x, y) {
    let result = x + y;
    return result
}

function subtract(x, y) {
    let result = x - y;
    return result
}

function multiply (x, y) {
    let result = x * y;
    return result
}

function divide (x, y) {
    let result = x / y;
    return result
} 
let displayNum = [];
numberBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        displayNum.push(btn.id)
        display.textContent = displayNum.join("")
    })
 }) 
let num;
let operator;
operatorBtn.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        if (operator == undefined){
            num = displayNum.join("")
        }
        operator = btn.id
        displayNum = [];
    })
})

equals.addEventListener("click", () => display.textContent = operate(num, operator, displayNum.join("")))