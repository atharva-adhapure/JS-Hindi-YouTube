

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0 ,24) // Date(year, month, date(tarikh))
// let myCreatedDate = new Date(2023, 0 ,24 ,5 ,3) // Date(year, month, date , hrs, mins)
// let myCreatedDate = new Date("2023-01-24")
let myCreatedDate = new Date("09-25-2014") // date("MM-DD-yyyy")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))// to get the time in seconds

let newDate = new Date()

console.log(newDate)
console.log(newDate.getMonth()+1) // to get the usual syntax as the month starts from 0 in js 



newDate.toLocaleString("default",{
    weekday: "long",
    
})