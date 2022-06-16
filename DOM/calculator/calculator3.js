const number = document.querySelectorAll('.number');
const operatorplus = document.querySelector('.operatorplus');
const operatorminus = document.querySelector('.operatorminus');
const operatordiv = document.querySelector('.operatordiv');
const operatormult = document.querySelector('.operatormult');
const display = document.querySelector('.display');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const arrow = document.querySelector('.arrow');
let memory = [];
let operationnames = [];
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
    if(display.textContent != "" && operationnames.length!=0||display.textContent != "" && operationnames.length ===0){
    memory.push(Number(display.textContent));
    operationnames.push("mult");
    display.textContent = "";
    };
};
function addition(){
    if(display.textContent != "" && operationnames.length!=0||display.textContent != "" && operationnames.length ===0){
    memory.push(Number(display.textContent));
    operationnames.push("add");
    display.textContent = "";
    };
};
function subtraction(){
    if(display.textContent != "" && operationnames.length!=0||display.textContent != "" && operationnames.length ===0){
    memory.push(Number(display.textContent));
    operationnames.push("sub");
    display.textContent = "";
    };
};
function division(){
    if(display.textContent != "" && operationnames.length!=0||display.textContent != "" && operationnames.length ===0){
    memory.push(Number(display.textContent));
    operationnames.push("div");
    display.textContent = "";
    };
};
function equalto(e){
    memory.push(Number(display.textContent));
    for(let i = 0; i< operationnames.length;i++){
        if(operationnames[i] === "mult"){
            memory[i+1] = memory[i] * memory[i+1];
        }
        else if(operationnames[i] === "sub"){
            memory[i+1] = memory[i] - memory[i+1];
        }
        else if(operationnames[i] === "add"){
            memory[i+1] = memory[i] + memory[i+1];
        }
        else if(operationnames[i] === "div"){
            memory[i+1] = memory[i] / memory[i+1];
        }
        else{};
    
    };
    display.textContent = memory[memory.length-1];
    operationnames = [];
    memory = [];
};
function arrowdo(){
    display.textContent = display.textContent.slice(0, display.textContent.length -1);
};
function clearall(){
    display.textContent = "";
    memory=[];
    operationnames=[];
}