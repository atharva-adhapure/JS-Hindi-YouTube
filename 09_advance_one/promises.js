const promiseOne = new Promise(function (resolve, reject){
    //do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve(); // Resolve is directly connected to .then()
    },1000)
})

promiseOne.then(()=>{
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 completed");
    
})


const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@example.com"})
    },1000)
});

promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
            if (!error) {
                resolve({username: "atharva", password: "123"})
            }else{
                reject('Error: Something is wrong');
            }
    },1000)
})

promise4
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("The Promise is either resolved or rejected");
})

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
            if (!error) {
                resolve({username: "javascript", password: "123"})
            }else{
                reject('Error: JS is wrong');
            }
    },1000)
})

async function consumePromise5(){
    try{
        const response = await promise5
    console.log(response);
    }catch(error){  
        console.log(error);
    }
}

consumePromise5()

// async function getAllUsers(){
//     try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
//     const data = await response.json()
//     console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }
// getAllUsers()

fetch("https://api.github.com/users/atharva-adhapure")
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => {
    console.log(error);
})