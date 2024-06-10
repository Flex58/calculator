const operatorBtn = document.querySelectorAll(".operator");
const numberBtn = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
let displayNum = [];
let num;
let operator;
let num2;

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

numberBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        displayNum.push(btn.textContent)
            display.textContent = displayNum.join("")   
    })
 }) 

operatorBtn.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        if (operator == undefined && displayNum.length != 0){
            num = displayNum.join("")
            displayNum = [];
        }
        if (operator != undefined && displayNum.length != 0) {
            calculate()
            num = displayNum.join("")
            displayNum = [];
        }
        operator = btn.id
        
    })
})

equals.addEventListener("click", () => {
   calculate()
})

clearBtn.addEventListener("click", () => {
    clear()
})

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
            num = displayNum.join("")
            displayNum = []
            operator = undefined 
        }
    }   
}

function clear() {
    displayNum = [];
    num = undefined;
    num2 = undefined;
    operator = undefined;
    display.textContent = 0;
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