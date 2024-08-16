const accountId = 1234
let accountEmail = "devesh12@gmail.com"
var accountPassword = "12345678"
accountCity = "Jaipur"
let accountState

// accountId = 2    // not allowed

accountEmail = "amit@hp.com"
accountPassword = "987"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState])