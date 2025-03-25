//Singleton 
//Object.create

//object Literals

const mySym = Symbol("key1")


const JsUser = {
    "full name": "Atharva Adhapure",
    name: "Atharva",
    [mySym]: "myKey1",                // To specify the symbol in the object it os mandatory to specify it in the "[ ]" braces
    age: 18,
    location: "Pune",
    email:"atharva@google.com",
    isLoggedIn: false
}

// console.log(JsUser.email); //there is also another method to access the data of the object
// console.log(JsUser["email"]); // Standard method to access the data present in the object

// // console.log(JsUser["full name"]);
// console.log(JsUser[mySym])         //Always access the data in the Object using square braces 

JsUser.email = "atharva@chatgpt.com"
// Object.freeze(JsUser)               // to prevent any changes being made in the object
JsUser.email = "atharva@microsoft.com";

// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user`);
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name} `);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo())