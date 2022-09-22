//1. Conversion of Temperaturs
const prompt = require("prompt-sync")();

function convertion(number){
    return (number*(9/5))+32;
 }
 function convertion2(number1){  // Need to check why not working inside case
    return (number1 - 32)*(5/9);
}
console.log("1.Convert Degrees to Faranhiet \n2.Convert Faranhiet to Degrees")
let check = parseInt(prompt("Enter Option : "))
switch(check){
    case 1 :
        console.log("Convertion Degrees to Faranhiet")
        let number = parseInt(prompt("Enter Temp : "))
        let res = convertion(number);
        console.log(res)  
        break

    case 2:
        console.log("Convertion Faranhiet to Degrees")
        let number1 = parseInt(prompt("Enter Temp : "))
        let result1 = convertion2(number1)
        console.log("Temp in Degrees : ",result1)
        break
    
}
console.log("================================================")

//2.Palindrome Numbers

let rev = 0
function numberCheck(a){
    while(a != 0){
        let rem = a % 10; // Need to convert float to int
        rev = rev * 10 + rem;
        a = a / 10;
        a = Math.trunc(a);
    }
    console.log(rev)
    return rev;
   
}
let a,b
a = parseInt(prompt("Enter First Number : "))
b = parseInt(prompt("Enter Second Number : "))
let res = numberCheck(a)
if(res == b){
    console.log("Palindrome Number")
}
else{
    console.log("Not a Palindrome")
}

//3.
