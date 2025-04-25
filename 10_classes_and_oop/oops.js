const user = {
    username: "Atharva ",
    loginCount : 8,
    signedIn: true ,

    getUserDetails: function(){
        // console.log("Got User Details from DataBase");
        // console.log(`Username: ${this.username}`);
        // console.log(this)
    }
}

// console.log(user.username)
// // console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        onslotchange.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Atharva", 8, true);
const userTwo = new User("Chai aur Code", "10", true);
console.log(userOne.constructor);
// console.log(userTwo);