const marvel_heros = ["Thor", "Iron Man", "SpiderMan"]
const dc_heros = ["Batman", "Superman", "Aquaman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
//marvel_heros.concat(dc_heros)  // cannot write like this as this returns a new array

// let all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// ++++++++ more easy way to add 2 arrays is using spread (not a function but is used as " ... ")  

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const another_Arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_Arr.flat(Infinity)
// console.log(real_another_array)


console.log(Array.isArray("Atharva")) // The Array.isArray() method checks if a given value is an array.

console.log(Array.from("atharva")) // The Array.from() method creates a new array by copying elements from an iterable or an array-like object.

console.log(Array.from({name: "Atharva"}))  //+++++++ "Interesting" returns an empty array as it is not able to convert the data provided in the form of an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // The Array.of() method creates a new array using the values you give it, no matter how many values there are or what type they are.