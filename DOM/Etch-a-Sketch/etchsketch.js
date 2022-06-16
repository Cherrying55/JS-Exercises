let grid = [];
let a = 6;
let currentsize = 16;
let container = document.querySelector('.container');
let btn = document.querySelector('.btn');
for(let i = 0; i < 16**2;i++){
    let v = document.createElement('div');
    v.classList.add("gridtile");
    v.setAttribute('style', `width:${a}%; height: 6%;`);
    let string1 = "tile" + i;
    v.setAttribute('id', string1);
    container.appendChild(v);
}

function turnblack(e){
    let current = e.target;
    current.classList.toggle("gridtileblack");
};

let gridtiles = document.querySelectorAll('.gridtile');

for(const i of gridtiles){
    i.addEventListener('mouseover', turnblack);
};

function newGrid(){
   let number = prompt("Type a number between 1 and 23");
   number = Number(number);
   if(number <= 23){
   for(let i = 0; i < currentsize**2;i++){
       let string2 = "tile" + i;
       let curr = document.querySelector(`#${string2}`);
       container.removeChild(curr);
   }
   currentsize = number;
    for(let i = 0; i < number**2;i++){
        let v = document.createElement('div');
    v.classList.add("gridtile");
    v.setAttribute('style', `width:${6 * 16 / number}%; height:${6 * 16 / number}%;`);
    let string1 = "tile" + i;
    v.setAttribute('id', string1);
    container.appendChild(v);
    };
    gridtiles = document.querySelectorAll('.gridtile');
    for(const i of gridtiles){
        i.addEventListener('mouseover', turnblack);
    };    
}
};

btn.addEventListener('click', newGrid);
