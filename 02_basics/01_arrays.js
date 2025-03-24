//arrays

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Iron Man", "Spiderman"]
const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[1])
// JS array cannot be accessed using arbitary strings (Eg:- console.log(myArr["one"]) and are zero-indexed)

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) 
// myArr.shift()
// unshift adds element at the beginning and shift remove an element from the beginning

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// let newArr = myArr.join() // converts the array into string

// console.log(newArr)
// console.log(myArr);

// Slice and Splice 

console.log("A", myArr)

let myn1 = myArr.slice(1,3); // Returns the copy of elements from the array(changes are not made in the original array)

console.log(myn1)
console.log("B", myArr)

let myn2 = myArr.splice(1,3) // Removes the elements from the array (changes are made in the original array )
console.log("C", myArr)
console.log(myn2);


