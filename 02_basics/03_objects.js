// object - literal

const mySym = Symbol("keys1")
const user = {
    name: "devesh",
    "full name" : "devesh singhal",
    [mySym] : "myKey1",
    age: 23,
    location: "Jaiput",
    email: "deveshsingha@gmail.com",
    isLoggedIn: false,
    lastLoginDays :["Monday","Saturday"]
};

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

// user.email = "devesh@chatgpt.com"
// Object.freeze(user)
// user.email = "devesh@amazon.com"
// console.log(user);

user.greeting = function(a,b){
    // console.log("hello chotu");
    return a+b;   
}

console.log(user.greeting(2,3));