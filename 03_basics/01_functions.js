function addTwoNumbers(num1, num2){     // parameters
    // console.log(num1 + num2);
    return num1 + num2;
}

const result = addTwoNumbers(3,4)      // arguments

// console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("devesh"))


// REST (...arr)

function calculateCartPrice(...num){
    return num
}
// console.log(calculateCartPrice(200,400,600));


// using object
const user = {
    username: "devesh",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

// using array
const arr = [200,300,400,500]

function secondValue(getArray){
    return getArray[1]
}

console.log(secondValue(arr));
