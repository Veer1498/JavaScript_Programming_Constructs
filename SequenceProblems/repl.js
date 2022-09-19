/*
Purpose : Able to perform sequencing Operations
@Author : Veer
*/
// 1.To get single digit random Number
let random;
random = Math.floor(Math.random() * 10);
console.log("The Random Number is ",random)

//2.Use Random number to get value in dice; btw 1-6
let random2;
random2 = (Math.floor(Math.random()*6)+1)
console.log("The 1st Dice Number is",random2)

//3.Add two randon dice numbers and print them
let random3,sum;
random3 = (Math.floor(Math.random()*6)+1)
console.log("The 2nd Dice Number is",random3)
sum = random2+random3
console.log("The sum of two dice number are",sum)

//4.To Read 5 random 2 digit numbers and then find sum and average of numbers
let random4,add=0,avg=0;
for(i=0;i<5;i++){
    random4 = (Math.floor(Math.random()*89)+10)
    console.log("The",i+1," Dice Number is",random4)
    add +=random4
}
console.log("The sum of all 5 Values :",add)
avg = add/5
console.log("The average of all values :",avg)

//5.Unit Conversion
//5(a)-ft to Inches
let feet = 12,convert
convert = 42/feet
console.log("The Converted Values for given Number : ",convert," Ft")

//5(b)-Rectangular Plot

let l,b,cl,cb
let meter = 0.3048
cl= l*meter
cb = b*meter
console.log("Converted to Meters",cl,"X",cb)

//5(c)- Area of 25 plots

let area
area = 25*(cl*cb)
console.log("The Area of 25 plots : ",area)


