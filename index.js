function updateDisplay(string){
    let display = document.getElementById("display-num");
    display.textContent = string;
}

let inputs = "";
function btnClick(){
    if(justGotResult){
        inputs = ''
        justGotResult = false
    }
    inputs +=`${this.textContent}`;
    updateDisplay(inputs);
    this.classList.add("button-pressed");
    setTimeout(()=>this.classList.remove('button-pressed'), 200)
}

const buttons = document.querySelectorAll(".calc-number-button");
buttons.forEach(button=> button.addEventListener("click", btnClick));

function parseInput(string){
    let componenets = string.split("");
    let operation = componenets.filter((componenet)=>{
        if(componenet=== "+"||componenet=== "-"|| componenet==="*" ||componenet=== "/"){
            return true;
    }})
    let operator =  operation[0];
    let numbers = string.split(operator);
    let inputsObj={
        num1: Number(numbers[0]),
        operator: operator,
        num2: Number(numbers[1]),
    }
    return inputsObj;    
    }

function operate(inputsObj){
    if (inputsObj.operator==="+"){
        return inputsObj.num1 + inputsObj.num2;
    }else if (inputsObj.operator==="-"){
        return inputsObj.num1 - inputsObj.num2;
    }else if (inputsObj.operator==="/"){
        return inputsObj.num1 / inputsObj.num2;
    }else if (inputsObj.operator==="*"){
        return inputsObj.num1 * inputsObj.num2;
    }
}

let justGotResult = false;
const equalsButton = document.querySelector(".equals-button");
equalsButton.addEventListener("click", ()=>{
    let numbersAndOperator = parseInput(inputs);
    let result = operate(numbersAndOperator);
    justGotResult = true;
    updateDisplay(result);
    equalsButton.classList.add("button-pressed");
    setTimeout(()=>equalsButton.classList.remove('button-pressed'), 200);
});

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", ()=>{
    inputs = "0"
    updateDisplay(inputs);
    clearButton.classList.add("button-pressed");
    setTimeout(()=>clearButton.classList.remove('button-pressed'), 200)
});

