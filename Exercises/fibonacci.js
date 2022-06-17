/* Create a function that returns a specific member of the Fibonacci sequence:
A series of numbers in which each number ( Fibonacci number ) 
is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc. */


function fibonacci(n){
    let fibo = [1,1,2];
for(let i = 2; i < n; i++){
    let a = fibo[i] + fibo [i-1];
    fibo.push(a);
}
return fibo[n-1];
};

