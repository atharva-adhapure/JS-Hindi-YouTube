// var c = 300
let a = 300

if(true){
    let a =10
    const b =20  // Block scope
}



// console.log(a);
// console.log(b); 
// console.log(c);      // var scope k bahar bhi accessible hai islia we dont use it more often


// Nested Scope 

function one(){
    const username = "Atharva"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()


if(true){
    const username = "Atharva"
    if (username === "Atharva") {   
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website).  // out of scope
}

// console.log(username)


addone(5)           // executes without any error 
function addone(num){
    return num+1
}

addtwo(5)           // doesn't execute as the function is stored in the variable (concept       
//                     of hoisting)

const addtwo = function(num){
    return num + 2  
}
