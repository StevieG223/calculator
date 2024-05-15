function updateDisplay(string){
    let display = document.getElementById("display-num");
    display.textContent = string;
}

let inputs = "";
function btnClick(){
    inputs +=`${this.textContent}`;
    updateDisplay(inputs)
}

const buttons = document.querySelectorAll(".calc-number-button");
buttons.forEach(button=> button.addEventListener("click", btnClick));

const clearButton = document.querySelector("clear-button");

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

const equalsButton = document.querySelector(".equals-button");
equalsButton.addEventListener("click", ()=>{
    let numbersAndOperator = parseInput(inputs);
    let result = operate(numbersAndOperator);
    updateDisplay(result);
})