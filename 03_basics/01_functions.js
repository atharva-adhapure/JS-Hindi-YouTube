function sayMyName(){
    console.log("A")
    console.log("T")
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("V")
    console.log("A")
}

// sayMyName()

// function add( a ,b){
//     console.log(a+b);
// }

function add(a,b){
    let result = a+b;
    return result
}
const result = add(3,4 )
// console.log("Result:",result)

function loginuserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter the username!")
        return
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("Atharva"))

function calculateCartPrice(val1, val2,...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 600))

const user = {
    username:"Atharva",
    price: 199
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}

handleObjects(user)
