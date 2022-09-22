const prompt = require("prompt-sync")();

//1.number to words
let number = prompt("Enter a single Digit Number : ")
if(number == 1){
    console.log("One")
}
else if(number == 2){
    console.log("Two")
}
else if(number == 3){
    console.log("Three")
}
else if(number == 4){
    console.log("Four")
}
else if(number == 5){
    console.log("Five")
}
else if(number == 6){
    console.log("Six")
}
else if(number == 7){
    console.log("Seven")
}
else if(number == 8){
    console.log("Eight")
}
else if(number == 9){
    console.log("Nine")
}
else{
    console.log("Number is not a Single Digit Number")
}

console.log("=============================================")

//2.Read Number and display week

let weekDay = parseInt(prompt("Enter a week day : "))
if(weekDay == 1){
    console.log("Sunday")
}
else if(weekDay == 2){
    console.log("Monday")
}
else if(weekDay == 3){
    console.log("Tuesday")
}
else if(weekDay == 4){
    console.log("Wednesday")
}
else if(weekDay == 5){
    console.log("Thursday")
}
else if(weekDay == 6){
    console.log("Friday")
}
else if(weekDay == 7){
    console.log("Saturday")
}

console.log("=============================================")

//3.Read Number and show Units

let num = parseInt(prompt("Enter Number btw 1,10,100,1000,10000: "))
if(num == 1){
    console.log("unit")
}
else if(num == 10){
    console.log("tens")
}
else if(num == 100){
    console.log("hundreds")
}
else if(num == 1000){
    console.log("thousands")
}
else if(num == 10000){
    console.log("ten thousands")
}
console.log("=============================================")

//4.arithmetic operations

let a,b,c
a= prompt("Enter A :")
b= prompt("Enter B :")
c= prompt("Enter C :")

max = a + b * c
min = a + b * c

if(a % b + c > max){
    max = a % b + c
    console.log("The min is a % b + c  ",a % b + c)
}
else if(c + a / b > max){
    max = c + a / b
    console.log("The min is c + a / b  ",c + a / b)
}
else if(a* b + c > max){
    max = a* b + c
    console.log("The min is a* b + c ",a* b + c)
}
else if(a % b + c < min){
    min = a % b + c
    console.log("The max is a % b + c  ",a % b + c)
}
else if(c + a / b < min){
    min = c + a / b
    console.log("The max is c + a / b  ",c + a / b)
}
else if(a* b + c < min){
    min = a* b + c
    console.log("The max is a* b + c ",a* b + c)
}
if(a + b * c == min){
    console.log("The max is a + b * c ",a + b * c)
}
else{
    console.log(" The min is a + b * c",a + b * c)
}