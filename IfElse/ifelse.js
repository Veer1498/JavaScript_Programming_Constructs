// //1.To find max and Min of 5 Random Numbers

let random1 = (Math.floor(Math.random() * 899)+100);
let random2 = (Math.floor(Math.random() * 899)+100);
let random3 = (Math.floor(Math.random() * 899)+100);
let random4 = (Math.floor(Math.random() * 899)+100);
let random5 = (Math.floor(Math.random() * 899)+100);
console.log(random1,random2,random3,random4,random5)

let arr1=[random1,random2,random3,random4,random5];
arr1.sort();
console.log("Max = ",arr1[4],"Min = ",arr1[0])
console.log("================================================")

// //2.To check a day is btw particular date

const prompt = require("prompt-sync")();
let day = prompt("Day : ");
let month = prompt("Month : ");
if((month == 6 && day < 20) || (month == 3 && day > 20) || (month == 4 && day < 20)|| (month == 5 && day < 20) ){
    console.log("Day is Correct")
}
else{
    console.log("Day is Not Correct")
}
console.log("================================================")

//3.Check Leap Year

let year = prompt("Enter Year : ")
//if we take input it actually taken as string to we need to convert it to integer value
year = parseInt(year);
if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
    console.log("Year is Leap Year")
}
else{
    console.log("Not a Leap Year")
}
console.log("================================================")

//4.Coin Flip

let random = Math.random();
//console.log(random)
if(random > 0.5){
    console.log("It's Heads")
}
else{
    console.log("Its Tails")
}
console.log("================================================")

