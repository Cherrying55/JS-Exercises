const number = document.querySelectorAll('.number');
const operatorplus = document.querySelector('.operatorplus');
const operatorminus = document.querySelector('.operatorminus');
const operatordiv = document.querySelector('.operatordiv');
const operatormult = document.querySelector('.operatormult');
const display = document.querySelector('.display');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const arrow = document.querySelector('.arrow');
let operator1 = 0;
let operationname = "";
for(const i of number){
    i.addEventListener('click', current);
  };
  operatorplus.addEventListener('click', addition);
  operatorminus.addEventListener('click', subtraction);
  operatormult.addEventListener('click', multiplication);
  operatordiv.addEventListener('click', division);
  equal.addEventListener('click', equalto);
  arrow.addEventListener('click', arrowdo);
  clear.addEventListener('click', clearall);
function current(e){
    display.textContent = display.textContent + e.target.textContent;
};
function multiplication(){
    operator1 = Number(display.textContent);
    operationname = "mult";
    display.textContent = "";
};
function addition(){
    operator1 = Number(display.textContent);
    operationname = "add";
    display.textContent = "";
};
function subtraction(){
    operator1 = Number(display.textContent);
    operationname = "sub";
    display.textContent = "";
};
function division(){
    operator1 = Number(display.textContent);
    operationname = "div";
    display.textContent = "";
};
function equalto(e){
    if(operationname === "div"){
    result = (operator1 / Number(display.textContent)).toString();
    display.textContent = result;
    result = 0;
    operator1 = 0;
    }
    else if(operationname === "sub"){
        result = (operator1 - Number(display.textContent)).toString();
        display.textContent = result;
        result = 0;
        operator1 = 0;    
    }
    else if(operationname === "add"){
        result = (operator1 + Number(display.textContent)).toString();
        display.textContent = result;
        result = 0;
        operator1 = 0; 
    }
    else if(operationname === "mult"){
        result = (operator1 * Number(display.textContent)).toString();
    display.textContent = result;
    result = 0;
    operator1 = 0;
    }
    else{
    };
};
function arrowdo(){
    display.textContent = display.textContent.slice(0, display.textContent.length -1);
};
function clearall(){
    display.textContent = "";
}