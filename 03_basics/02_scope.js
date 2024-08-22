var c = 300     // global scope

let a = 200
{                           // block scope
    let a = 10
    const b = 20
    var c = 30

    // console.log("Inner: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log("outside: ", a);




function one(){
    const username = "devesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()


if (true) {
    const username = "devesh"
    if (username === "devesh") {
        const website = " instagram"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


function addOne(num){
    return num+1
}
addOne(5)

// addTwo(5)        /* function do not call before writing a expression function only after a function*/
const addTwo = function(num){
    return num + 2
}
addTwo(5)
