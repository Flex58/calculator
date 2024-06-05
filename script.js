operate()

function operate(){
    let result;
    let num1 = prompt("Number: ");
    let operator = prompt("Operator: ")
    let num2 = prompt("Number: ");

    switch (operator) {
        case "+":
            console.log(add(Number(num1), Number(num2)));
            break;
        case "-":
            console.log(subtract(Number(num1), Number(num2)));
            break;
        case "*":
            console.log(multiply(Number(num1), Number(num2)));
            break;
        case "/":
            console.log(divide(Number(num1), Number(num2)));
            break;
        default:
            alert("Enter a valid operator (+, -, *, /)")
            operate()
            break;
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