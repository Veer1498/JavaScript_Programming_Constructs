const prompt = require("prompt-sync")();

class calculator{

    addition = (a,b) => a+b
    subtraction = (a,b) => a-b;
    multiply = (a,b) => a*b;
    division = (a,b) => a/b;
}
let calc = new calculator()
console.log(calc.addition(10,20))
console.log(calc.subtraction(10,5))
console.log(calc.multiply(10,5))

