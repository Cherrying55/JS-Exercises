const number = document.querySelectorAll('.number');
const operatorplus = document.querySelector('.operatorplus');
const operatorminus = document.querySelector('.operatorminus');
const operatordiv = document.querySelector('.operatordiv');
const operatormult = document.querySelector('.operatormult');
const display = document.querySelector('.display');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const arrow = document.querySelector('.arrow');
let operation = [];
let operationname = "";
let currentValue = "";
let result1 = 0;
function current(e){
    e.stopPropagation();
    currentValue = currentValue + e.target.textContent;
    display.textContent = currentValue;
    result1 = Number(currentValue);
};
for(const i of number){
  i.addEventListener('click', current);
};
operatorplus.addEventListener('click', addition);
operatorminus.addEventListener('click', subtraction);
operatormult.addEventListener('click', multiplication);
operatordiv.addEventListener('click', division);
equal.addEventListener('click', isequal);
clear.addEventListener('click', clearall);
arrow.addEventListener('click', arrowdo);
function multiplication(){
    if(operationname != "mult" && operationname != "add" && operationname != "subtract" && operationname != "div"){
    operation.push(result1);
   operationname = "mult";
   currentValue = "";
   display.textContent = "";
    };
};
function subtraction(){
    if(operationname != "mult" && operationname != "add" && operationname != "subtract" && operationname != "div"){
        operation.push(result1);
        operationname = "subtract";
        currentValue = "";
        display.textContent = "";
         };
};
function addition(){
    if(operationname != "mult" && operationname != "add" && operationname != "subtract" && operationname != "div"){
        operation.push(result1);
        operationname = "add";
        currentValue = "";
        display.textContent = "";
         };
};
function division(){
    if(operationname != "mult" && operationname != "add" && operationname != "subtract" && operationname != "div"){
        operation.push(result1);
        operationname = "div";
        currentValue = "";
        display.textContent = "";
         };
};
function isequal(){
    if(operation.length === 1 && operationname === "mult"){
        operation.push(result1);
        result = operation[0]*operation[1];
        display.textContent = result;
    }
    else if(operation.length === 1 && operationname === "add"){
        operation.push(result1);
        result = operation[0] + operation[1];
        display.textContent = result;
    }
    else if(operation.length === 1 && operationname === "subtract"){
        operation.push(result1);
        result = operation[0] - operation[1];
        display.textContent = result;
    }
    else if(operation.length === 1 && operationname === "div"){
        operation.push(result1);
        result = operation[0] / operation[1];
        display.textContent = result;
    }
    else{
        result = operation[0];
        display.textContent = result;
    };
};
function clearall(){
    result1 = 0;
    result = 0;
    operation = [];
    display.textContent = "";
    currentValue = "";
    operationname = "";
};
function arrowdo(){
 currentValue = currentValue.substr(0,currentValue.length -1)
 display.textContent = currentValue;
}