const operatorBtn = document.querySelectorAll(".operator");
const numberBtn = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
const decimalBtn = document.querySelector("#comma");
let displayNum = [];
let num;
let operator;
let num2;

function operate(num1, operator, num2){
    switch (operator) {
        case "+":
            return add(Number(num1), Number(num2));
        case "-":
            return subtract(Number(num1), Number(num2));
        case "*":
            return multiply(Number(num1), Number(num2));
        case "/":
            return divide(Number(num1), Number(num2));
    }   
}

numberBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        displayNum.push(btn.textContent)
        display.textContent = displayNum.join("") 
        changeTextSize()  
    })
 }) 

 
document.addEventListener("keydown", (event) => {
    if (Number(event.key) || event.key == "0"){
        displayNum.push(event.key)
        display.textContent = displayNum.join("") 
        changeTextSize()  
    }
})


operatorBtn.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        getOperator()
        operator = btn.textContent  
    })
})

document.addEventListener("keydown", (event) => {
    if (event.key == "+" || event.key == "-" || event.key == "/" || event.key == "*") {
        getOperator()
        operator = event.key
    }
})

equals.addEventListener("click", () => {
   calculate()
})

document.addEventListener("keydown", (event) => {
    if (event.key == "Enter"){
        calculate()
    }
})

clearBtn.addEventListener("click", () => {
    clear()
})

decimalBtn.addEventListener("click", () => {
   getDecimal()
})

document.addEventListener("keydown", (event) => {
    if (event.key == "," || event.key == "."){
        getDecimal()
    }
})

function getOperator() {
    if (operator == undefined && displayNum.length != 0){
        num = displayNum.join("")
        displayNum = [];
    }
    else if (operator != undefined && displayNum.length != 0) {
        calculate()
    }
}

function calculate() {
    if (num != undefined && operator != undefined && displayNum.length != 0) {
        num2 = displayNum.join("")
        if ((num == 0 || num2 == 0) && operator == "divide") {
            clear()
            display.textContent = "Nope"
            
        }
        else {
            displayNum = []
            displayNum.push(operate(num, operator, num2))
            if (displayNum.join("").split("").includes(".")) {
                display.textContent = Number(operate(num, operator, num2)).toFixed(3)
                displayNum[0] = Number(displayNum).toFixed(3)
            }  
            else {
                display.textContent = (operate(num, operator, num2))
            }
            changeTextSize()
            num = displayNum.join("")
            displayNum = []
            operator = undefined 
        }
    }   
}

function getDecimal() {
    changeTextSize()
    if (!displayNum.includes(".") && displayNum.length != 0){
        displayNum.push(".")
        display.textContent = displayNum.join("")
    }
    else if (displayNum.length == 0)
    {
        displayNum.push("0");
        displayNum.push(".")
        display.textContent = displayNum.join("")
    }
}

function changeTextSize() {
    if (display.textContent.length > 13){
        display.style.fontSize = "30px"
    }
    else {
        display.style.fontSize = "60px"
    }
}

function clear() {
    displayNum = [];
    num = undefined;
    num2 = undefined;
    operator = undefined;
    display.textContent = 0;
    changeTextSize()
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