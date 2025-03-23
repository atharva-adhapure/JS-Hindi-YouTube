const accountId = 14415 
let accountEmail = "atharva@gmail.com";
var accountPassword = ""
accountCity = "Pune"

// accountId = 2


accountEmail = "sdasd@gfasf.com"
accountPassword = "213124124"
accountCity = "Jaipur"

/*
prefer not to use var
because of issue in functional scope and block scope
*/

console.log(accountId);

console.table([ accountId, accountEmail, accountPassword, accountCity ])