let x = 12;



function fizzbuzz(number){
    for(let i = 1; i<= x; i++){
        if(i % 3 === 0 && i % 5 === 0){
            alert("FizzBuzz");
        }
        else if(i % 3 === 0){
            alert("Fizz");
        }
        else if(i % 5 === 0){
            alert("Buzz");
        }
        else{alert(i);};
}
}

fizzbuzz(x);