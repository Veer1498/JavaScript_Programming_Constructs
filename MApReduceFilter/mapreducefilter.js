// let students = [
//     {name : "Veer", age : 22},
//     {name : "Priya", age : 21}
// ]

// let personsBelow21 = students.filter((ages) => ages.age <= 21)
// console.log(personsBelow21)


// let marks = [99,95,85,90,68,87];
// let compressTo50 = marks.filter((a) => a>88)
//                         .map((a) => a+2)
// console.log(compressTo50)

///////////////////////////////////////////////////////////////////////

// let findTotal = marks.reduce((a,b) => a+b)
// console.log(findTotal)
// function sum ()
// let findSum = marks.reduce()

// let totalMarksInOrder = marks.slice(0)
//                              .sort()
//                              console.log(totalMarksInOrder)

//Object Array

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];

const sum2 = objects.reduce(
    (acc, curr) => acc + curr,
);
console.log(sum2)

//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)