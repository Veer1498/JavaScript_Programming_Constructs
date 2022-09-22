//1. Conversion of Temperaturs
const prompt = require("prompt-sync")();

console.log("1.Convert Degrees to Faranhiet \n2.Convert Faranhiet to Degrees")
let check = parseInt(prompt("Enter Option : "))
switch(check){
    case 1 :
        console.log("Convertion Degrees to Faranhiet")
        let number = parseInt(prompt("Enter Temp : "))
        function convertion(number){
            let res1 = (number*(9/5))+32;
            console.log("Temp in Degrees : ",res1)
         }
      
    break
    case 2:
        console.log("Convertion Faranhiet to Degrees")
        let number1 = parseInt(prompt("Enter Temp : "))
        let result1 = function convertion(number1){
            return (number1 - 32)*(5/9);
        }
        console.log("Temp in Degrees : ",result1)
        break
    
}

//2.Palindrome Numbers
let a,b,rev;
a = parseInt(prompt("Enter First Number : "))
b = parseInt(prompt("Enter Second Number : "))

function numberCheck(a){
    while(a != 0){
        let rem = a % 10;
        rev = rev * 10 + rem;
        a = a / 10;
    }
    return rev;
    console.log(rev)
}
if(numberCheck = b){
    console.log("Palindrome Number")
}
else{
    console.log("Not a Palindrome")
}

//3.