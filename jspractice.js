let students = ["Veer","Priya","Hitesh","Prakash"]
//Stack Opearations
students.push("Sushmitha","Amol","Mehul")
students.pop()
console.log(students)

//forEach
students.forEach(scaning)
function scaning(students){

}
let leftpeople = ["Shreyas","Dipali"]
let rfp175 = students.concat(leftpeople)
console.log(rfp175)

let newBAtch = rfp175.slice(0)
console.log(newBAtch)

let oldfriends = ["Siva","Anusha"]
let otherbatch = students.concat(oldfriends)
console.log(otherbatch)

let checkstudents = otherbatch.join("-")
console.log(checkstudents)

let students1 = otherbatch.splice(2,1,"Himanshu")
console.log(otherbatch)



console.table(otherbatch)