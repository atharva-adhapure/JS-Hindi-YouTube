const coding = ["java", 'cpp', 'py','js']

// coding.forEach( function(item){
//     console.log(item)
// })

coding.forEach((value) => {
        // console.log(value)
})

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)     // Pass only the reference no need to execute the function in here 

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        language: "javaScript",
        languageFileName: "js"
    }, 
    
    {
        language: "C++",
        languageFileName: "cpp"
    }, 
    
    {
        language: "python",
        languageFileName: "py"
    },    
]

myCoding.forEach((item) => {
    console.log(item.language);
    
})