let displayVal = "";
let total = ""
let display = document.querySelector(".display")

function operate(operator, a, b){
    console.log(a)
    console.log(b)
    console.log(operator)

    if(operator === '+') return Number(a) + Number(b)
    if(operator === '-') return a - b
    if(operator === '*') return Math.round(a * b * 100) / 100
    if(operator === '/') return divide(a,b)
    return "Error!"
}

// function add(a, b){
//     return Number(a) + Number(b)
// }

// function subtract(a, b){
//     return a - b
// }

// function multiply(a, b){
//     return a * b
// }

function divide(a, b){
    if(b == "0"){
        return "Error! You cannot divide by 0!"
    }
    return Math.round((a / b) * 100) / 100
}

function buttonLogic(){
    let a = "";
    let b = "";
    let operator = "";
    document.querySelectorAll(".grid-item").forEach(x => {
        x.addEventListener("click", e => {
            if(!(e.target.classList.contains("display") || e.target.classList.contains("clear") || e.target.classList.contains("backspace") )){
                displayVal += e.target.textContent;
                display.textContent = displayVal;
            }
            if(e.target.classList.contains("number")){
                if(operator == "" || total != ""){
                    a = a.concat(e.target.textContent)
                }
                else b += e.target.textContent
            }
            if(e.target.classList.contains("operator")){
                if(e.target.textContent != "="){
                    operator = e.target.textContent
                }
                else if(total != ""){
                    displayValue(operate(operator,total,a));
                    a = "";
                    operator = "";
                }
                else{
                    displayValue(operate(operator,a,b))
                    a = "";
                    b = "";
                    operator = "";
                }
            }
            if(e.target.classList.contains("backspace")){
                if(operator == "" || total != ""){
                    a = a.slice(0, a.length-1)
                    displayValue(a);
                    total = "";
                }
                else{
                    b = b.slice(0, b.length - 1)
                    displayValue(b)
                    total = "";
                }     
            }
        })
    })
}

document.querySelector(".clear").addEventListener("click", e => {
    clear();
})

function clear(){
    displayVal = "";
    displayValue("");
    total = "";
}

function displayValue(text){
    if(text == "Error!" || text == "Error! You cannot divide by 0!"){
        alert(`${text} Calcualtor restarted.`);
        clear();
    }else{
        displayVal = text;
        display.textContent = displayVal;
        total = text;
    }
}
buttonLogic();