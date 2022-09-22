const prompt = require("prompt-sync")();

//1.number to words
let number = prompt("Enter a single Digit Number : ")
switch(number){
    case 1:
        console.log("One")
        break
    case 2:
        console.log("Two")
        break
    case 3:
        console.log("Three")
        break
    case 4:
        console.log("Four")
    default:
        console.log("Invalid Number")

console.log("=============================================")
}

//2

let week = prompt("Enter a single Digit Number : ")
switch(week){
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Mon")
        break
    case 3:
        console.log("Tues")
        break
    case 4:
        console.log("Wed")
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("Friday")
        break
    case 7:
        console.log("Saturday")
        break

console.log("=============================================")
}

//3.
let num = parseInt(prompt("Enter Number btw 1,10,100,1000,10000: "))
switch(num){
    case 1:
        console.log("unit")
        break
    case 10:
        console.log("tens")
        break
    case 100:
        console.log("hundreds")
        break
    case 1000:
        console.log("thousands")
    case 10000:
         console.log("ten thousands")
         break
}

//4.

