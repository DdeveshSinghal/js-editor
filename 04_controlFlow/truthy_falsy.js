/* 
    falsy value

    false, 0, -0, BigInt, "" (without space), null, undefined, NaN
*/

/*
    truthy value

    "0", "false", " " (space), [], {}, function(){}
*/
const userEmail = "rohan@google.com"

if(userEmail){
    console.log("Got a email");
}
else{
    console.log("Don't have a email");
}

const users = []
if (users.length === 0) {
    console.log("array is empty")
}

const userObject = {}
if (Object.keys(userObject).length === 0) {
    console.log("object is empty")
}