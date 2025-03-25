//let tinderUser = new Object() // Singleton Object

const tinderUser = {}

tinderUser.id  = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstName: "Atharva",
            lastName: "Adhapure"
        }
    }
}
// console.log(regUser.fullname.userfullname.firstName)

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "a", 4: "b"}
let obj4 = {5: "a", 6: "b"}

// let obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users = [
    {
    id: 1,
    email: "h@google.com"   
    },
    {
    id: 2,
    email: "i@google.com"   
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
