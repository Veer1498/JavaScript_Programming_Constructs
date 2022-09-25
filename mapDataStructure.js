/**
 * 'a', 1
'b',22
'c',32
'd',65
const map1 = new Map();

create map DataStructure
 */

const map1 = new Map();
map1.set('a',1)
map1.set('b',22)
map1.set('c',32)
map1.set('d',65)

let value = map1.get('d') 
console.log(value)
map1.set('a',14)
console.log(map1)

console.log("size is :",map1.size)

// map1.delete('a')
// map1.delete('b')
// map1.delete('c')
// console.log("Deleted 3 values",map1)

// map1.forEach(element => {
//     console.log(element)
//     element = element+1
// });

for(let element of map1.values()){
    element = element+1
    console.log(element)

}
console.table(map1)