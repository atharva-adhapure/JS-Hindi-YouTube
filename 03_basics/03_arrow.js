const user = {
    username: "Atharva",
    price: 999,


    welcomeMessage(){
        console.log(`${this.username}, welcome to website!`)
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

//console.log(this)

// function chai(){             
//     username: "Atharva"
//     console.log(this.username)           // this is used in the object not in the function
// }

// chai()

// const chai = function(){
//     let username = "Atharva"
//     console.log(this.username);
    
// }

// Arrow Functions

const chai = () =>{
    let username = "Atharva"
    console.log(this.username)
}

// chai()


// const addTwo = (num1, num2) =>{
//     return num1+num2
// }

// const addTwo = (num1, num2) => num1+num2    // implicit return (does not need to write the  
//                                           return keyword) 


const addTwo = (num1, num2) =>({username: "Atharva"})
console.log(addTwo(3,4))
