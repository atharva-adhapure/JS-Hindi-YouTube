const myObject = {
    js: "javaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ['js', 'cpp', 'rb', 'swift', 'java', 'py']

for (const key in programming) {
    // console.log(programming[key])
}

// const map = new Map()
// map.set('In', "India");
// map.set('USA', "United States of America")
// map.set('FR', "France")
// map.set('In', "India");

// for (const key in map) {
//     console.log(key)         // Cant iterate the map in this way
// }

