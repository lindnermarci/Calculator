function operate(operator, a, b){
    if(operator === '+') return add(a,b)
    if(operator === '-') return subtract(a, b)
    if(operator === '*') return multiply(a, b)
    if(operator === '/') return divide(a, b)
    return "error"
}

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return Math.round((a / b) * 100) / 100
}