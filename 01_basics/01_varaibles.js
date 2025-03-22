const accountId = 144553
let accountEmail = "Kshitij@nego.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // U can Also Declare Variable like this But don't use this because it is implicit global variable which is not good to use.

// accountId = 2 // Not Allowed
// console.log(accountId);
accountEmail = "dimple@gmail.com"
accountPassword = "rekha2522"
accountCity = "Bombay"
// console.log(accountEmail)
// console.log(accountPassword)
// console.log(accountCity)

/* 
Prefer not use to var
because of issue in block scoped and functional scoped.
*/
let accountState;
console.log(accountState)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

