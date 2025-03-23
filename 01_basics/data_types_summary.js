// Categorised into two parts based on the way of storing as well as accessing the data 

//Two categories : 1) Primitive and 2)Non-primitive(Reference)

//JS is a dynamic language which which means that variables can hold values of different types during runtime

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId)


const bigNumber = 213141421412414n

//PRimitive => String, number , boolean, null, undefined, symbol, BigInt

//Reference/Non primitive => Array, object, Functions

//data type of Primitive Functions is mostly "Object"

const heros = ["Shaktiman", "Iron Man", "Captain America",]

let Obj = {
    name: 'Atharva',
    age: 22,
}

const myFunction =function(){
    console.log("Hello World");
}
console.log(typeof bigNumber)

//Return type of variables in JavaScript
/*1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object
*/


// ++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive) amd Heap (Non-Primitive)

