// for of loop

// ['', "", ""]
//[{},{},{}]

const arr =[1,2,4,3,5,6];

// for (const number  of arr) {
//     console.log(number);
// }

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps 

const map = new Map()
map.set('In', "India");
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('In', "India");

// console.log(map);

for (const [key, value] of map) {
    console.log(key ,":-", value)
}