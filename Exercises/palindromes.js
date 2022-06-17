/* Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering 
punctuation or word breaks: */
let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L','M', 'N','O','P','Q','R','S','T','W','X','Y','Z'];


function palindromes(string){
    string = string.toUpperCase();
    let a = string.split("");
    let acum = [];
    a = a.filter(isalpha);
    for(let i = a.length -1; i >=0; i--){
        acum.push(a[i]);
    };
    acum = acum.join("");
    a = a.join("");
    if(acum === a){
        return("Palindrome");
    }
    else{
        return("Not palindrome");
    };
};

function isalpha(a){
    return(alphabet.includes(a));
}

palindromes("A car, a man, a maraca.");